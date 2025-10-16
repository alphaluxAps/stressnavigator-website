import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set up test data with henrik@liljegren.eu for testing
    const testData = {
      ...formData,
      email: 'henrik@liljegren.eu' // Override with test email for this submission
    };

    console.log('Form submitted:', testData);

    // Formspree endpoint
    const formspreeEndpoint = 'https://formspree.io/f/mldppkea';

    // Submit the form to Formspree
    fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    })
      .then(response => {
        if (response.ok) {
          alert('Tak for din besked! Vi vender tilbage hurtigst muligt.');
          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } else {
          alert('Der opstod en fejl ved afsendelse af formularen. Prøv igen senere.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Der opstod en fejl ved afsendelse af formularen. Prøv igen senere.');
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page-contact">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 text-center">
        <div className="absolute w-full h-full left-0 top-0 bg-[rgba(146,132,164,0.82)] z-[1]"></div>
        <div className="container mx-auto px-5 relative z-[2]">
          <h1 className="text-[88px] max-md:text-[2.5rem] font-bold font-chivo mb-4 leading-[1.2]">KONTAKT MIG</h1>
          <p className="text-white text-xl">- eller følg med på SoMe.</p>
        </div>
      </section>

      {/* How Can I Help Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-5 max-w-6xl">
          <h2 className="text-[48px] font-bold font-chivo text-center mb-12 text-gray-800 leading-[1.2]">
            Hvordan kan jeg hjælpe?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="text-center p-5 bg-white shadow-md rounded">
              <a href="/om-netvaerket">
                <img 
                  src="/assets/images/eb4fa57-c0d-f6d1-d4e6-66417c13ba8a_Screenshot_2024-06-10_at_17.16.01.png" 
                  alt="Netværket" 
                  className="w-full h-auto mb-4 rounded"
                />
              </a>
              <h4 className="text-[24px] font-bold font-chivo mb-3 text-gray-800 leading-[1.2]">
                På jagt efter info om netværket?
              </h4>
              <p className="text-[18px] text-gray-600 font-cabin leading-[1.6] mb-4">
                Er du i tvivl eller mangler du svar på noget? Uanset om det handler om indholdet, løsningen eller noget helt tredje, så er vi klar til at hjælpe dig videre.
              </p>
              <a 
                href="/om-netvaerket" 
                className="inline-block py-2 px-4 border border-primary text-primary font-bold hover:bg-primary hover:text-white transition rounded"
              >
                Læs mere her
              </a>
            </div>

            {/* Card 2 */}
            <div className="text-center p-5 bg-white shadow-md rounded">
              <a href="#contact-form">
                <img 
                  src="/assets/images/fe3b1d7-b381-71ec-45fe-7fa12e0c7dd_Screenshot_2023-11-12_at_22.49.45.png" 
                  alt="Podcast" 
                  className="w-full h-auto mb-4 rounded"
                />
              </a>
              <h4 className="text-[24px] font-bold font-chivo mb-3 text-gray-800 leading-[1.2]">
                På jagt efter en podcastgæst?
              </h4>
              <p className="text-[18px] text-gray-600 font-cabin leading-[1.6] mb-4">
                Isabella har tidligere deltaget i podcasts, hvor hun har talt om mødres stress, hvordan det påvirker børnene, og hvad vi kan gøre ved det - for at passe på os selv og vores børn.
              </p>
              <a 
                href="#contact-form" 
                className="inline-block py-2 px-4 border border-primary text-primary font-bold hover:bg-primary hover:text-white transition rounded"
              >
                Send besked
              </a>
            </div>

            {/* Card 3 */}
            <div className="text-center p-5 bg-white shadow-md rounded">
              <a href="#contact-form">
                <img 
                  src="/assets/images/53e27-22f3-bbca-05f-34f325bad65a_shane-rounce-DNkoNXQti3c-unsplash.jpg" 
                  alt="Samarbejde" 
                  className="w-full h-auto mb-4 rounded"
                />
              </a>
              <h4 className="text-[24px] font-bold font-chivo mb-3 text-gray-800 leading-[1.2]">
                På jagt efter andre muligheder?
              </h4>
              <p className="text-[18px] text-gray-600 font-cabin leading-[1.6] mb-4">
                Vil du høre mere om workshops, seminarer eller samarbejder om, hvordan vi kan hjælpe flere mødre væk fra stress? Vi glæder os til at høre fra dig.
              </p>
              <a 
                href="#contact-form" 
                className="inline-block py-2 px-4 border border-primary text-primary font-bold hover:bg-primary hover:text-white transition rounded"
              >
                Send besked
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="bg-[#f7f7f8] py-16">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-5/12">
              <img 
                src="/assets/images/ba45ffa-c536-a13c-4b7b-30c483c7d3bd_Screenshot_2024-06-11_at_14.46.00.png" 
                alt="Isabella" 
                className="w-full h-auto rounded"
              />
            </div>

            <div className="md:w-7/12 bg-white p-8 rounded-lg shadow-sm">
              <h3 id="send-besked" className="text-[32px] font-bold font-chivo mb-4 text-gray-800 leading-[1.2]">
                KOM I KONTAKT MED ISABELLA
              </h3>
              <p className="text-[18px] text-gray-600 font-cabin leading-[1.6] mb-8">
                Vi elsker at være med til at nedbringe stress blandt mødre i Danmark. Så tøv ikke med at skrive, hvis du har ideer, spørgsmål, eller hvis vi kan hjælpe med noget andet.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Navn"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary font-cabin text-[18px]"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary font-cabin text-[18px]"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Besked"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary font-cabin resize-none text-[18px]"
                  ></textarea>
                </div>

                <button
                  id="form-button"
                  type="submit"
                  className="border-2 border-primary bg-transparent text-primary px-8 py-4 text-[18px] font-bold hover:bg-primary hover:text-white transition font-cabin leading-normal block w-full md:w-auto mx-auto md:mx-0"
                  role="button"
                >
                  Send besked
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-5 max-w-4xl text-center">
          <h2 className="text-[48px] font-bold font-chivo mb-4 text-gray-800 leading-[1.2]">
            I tvivl om netværket er noget for dig?
          </h2>
          <h4 className="text-[24px] font-semibold font-cabin mb-6 text-gray-700 leading-[1.2]">
            Få mine bedste metoder.
          </h4>
          <a
            href="#contact-form"
            className="inline-block bg-primary text-white px-8 py-3 rounded text-[18px] font-bold hover:bg-primary-dark transition leading-normal"
          >
            Book en uforpligtende samtale
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
