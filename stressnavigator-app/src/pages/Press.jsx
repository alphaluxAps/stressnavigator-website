const Press = () => {
  return (
    <div className="page-press">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-[88px] font-bold font-chivo mb-4 leading-[1.2]">PRESSE OG SAMARBEJDER</h1>
        </div>
      </section>

      {/* Content Cards Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Article Card */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="mb-6">
                <img
                  src="/assets/images/4e778f-7cd8-6e43-834-6564c8860a7_0a2c2cb2-e772-450f-8d25-e1af844af612.png"
                  alt="Artikel"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h4 className="text-[24px] font-bold font-chivo mb-3 text-gray-800 leading-[1.2]">
                Artikel
              </h4>
              <p className="text-[18px] text-gray-600 font-cabin leading-[1.6] mb-4">
                Læs bl.a. om hvorfor Stress Navigator blev til og om baggrunden for netværket.
              </p>
              <a
                href="https://www.sn.dk/art800633/hoersholm-kommune/nyhed/da-isabella-fik-stress-ramte-det-ogsaa-hendes-boern/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px] text-primary font-bold hover:text-primary-dark transition"
              >
                Læs mere →
              </a>
            </div>

            {/* Podcast Card */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="mb-6 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <i className="fas fa-microphone text-6xl text-gray-400"></i>
              </div>
              <h4 className="text-[24px] font-bold font-chivo mb-3 text-gray-800 leading-[1.2]">
                Gæst i podcast
              </h4>
              <p className="text-[18px] text-gray-600 font-cabin leading-[1.6]">
                Hør bl.a. hvordan mødres stress påvirker børnene, og hvorfor det er vigtigt at passe på sig selv.
              </p>
            </div>

            {/* Lecture Card */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="mb-6 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <i className="fas fa-chalkboard-teacher text-6xl text-gray-400"></i>
              </div>
              <h4 className="text-[24px] font-bold font-chivo mb-3 text-gray-800 leading-[1.2]">
                Foredrag
              </h4>
              <p className="text-[18px] text-gray-600 font-cabin leading-[1.6]">
                I samarbejde med Yogajordemoder holdt Isabella et foredrag om mødres stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-5 max-w-4xl text-center">
          <h2 className="text-[48px] font-bold font-chivo mb-4 text-gray-800 leading-[1.2]">
            I tvivl om netværket er noget for dig?
          </h2>
          <h4 className="text-[24px] font-semibold font-cabin mb-4 text-gray-700 leading-[1.2]">
            Er du bekymret for om netværket bliver endnu en forpligtelse?
          </h4>
          <h4 className="text-[24px] font-semibold font-cabin mb-6 text-gray-700 leading-[1.2]">
            Få mine bedste metoder.
          </h4>
          <a
            href="/kontakt#contact-form"
            className="inline-block bg-primary text-white px-8 py-3 rounded text-[18px] font-bold hover:bg-primary-dark transition leading-normal"
          >
            Book en uforpligtende samtale
          </a>
        </div>
      </section>
    </div>
  );
};

export default Press;
