import React, { useEffect } from 'react';

const Home = () => {
  // Load Wistia script
  useEffect(() => {
    // Add Wistia script to the document
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Wistia
    window._wq = window._wq || [];
    window._wq.push({
      id: 'ptgbthhj26',
      options: {
        playerColor: '#474747',
        autoPlay: false,
        controlsVisibleOnLoad: false,
        playbar: false,
        fullscreenButton: false,
        playbackRateControl: false,
        qualityControl: false,
        settingsControl: false,
        smallPlayButton: true,
        playButton: true,
        resumable: true
      }
    });

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-top bg-no-repeat min-h-[500px] md:min-h-[500px] max-md:min-h-[400px] py-20 px-10 max-md:py-[60px] max-md:px-5 text-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/hero-beach-background.jpg')" }}
      >
        <div className="absolute w-full h-full left-0 top-0 bg-[rgba(146,132,164,0.82)] z-[1]"></div>
        <div className="relative z-[2] max-w-[900px] mx-auto px-5">
          <h1 className="text-white text-[88px] max-md:text-[2.5rem] font-bold m-0 leading-[1.2] font-cabin">Luk livet ind</h1>
          <h1 className="text-white text-[88px] max-md:text-[2.5rem] font-bold m-0 leading-[1.2] font-cabin">og luk stress ude</h1>
          <h4 className="text-white text-2xl max-md:text-[1.1rem] font-bold my-6 max-md:my-6 leading-[1.6] font-chivo">
            Stress Navigator er online-netværket, der giver stressede mødre overskud til det, der betyder mest
          </h4>
          <a href="#pricing" className="inline-block py-[14px] px-[30px] max-md:py-3 max-md:px-6 text-white border-2 border-white bg-transparent rounded-none no-underline text-lg max-md:text-[0.95rem] font-bold transition-all duration-300 ease-in-out mt-4 hover:bg-white hover:text-[#9284a4]" role="button">
            Få e-bogen med mine bedste metoder til at få overskuddet tilbage
          </a>
        </div>
      </section>

      {/* Testimonials Section 1 */}
      <section className="bg-white py-[60px] px-5 max-md:py-10 max-md:px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-md:gap-10 max-w-[1200px] mx-auto">
            <div className="p-5 text-center">
              <p className="text-lg leading-[1.6] text-[#595959] mb-4 italic font-chivo">
                "Jeg var nået til et punkt, hvor jeg ikke kunne fortsætte længere uden at knække. Netværket var som et strå, jeg kunne gribe fat i. Det gav mig håb og en følelse af, at der var noget, der kunne hjælpe mig videre."
              </p>
              <p className="text-2xl font-bold text-[#333] m-0 font-cabin">Charite, projektleder</p>
            </div>
            <div className="p-5 text-center">
              <p className="text-lg leading-[1.6] text-[#595959] mb-4 italic font-chivo">
                "Netværket giver et kærligt puf og rummer mig selvom jeg er presset. Det er et sted, hvor jeg kan være uden krav eller forventninger, og hvor empati erstatter den kvalende sympati, jeg nogle gange oplever fra mit eget netværk."
              </p>
              <p className="text-2xl font-bold text-[#333] m-0 font-cabin">Ellen, sygeplejerske</p>
            </div>
            <div className="p-5 text-center">
              <p className="text-lg leading-[1.6] text-[#595959] mb-4 italic font-chivo">
                "Netværket er ikke kun værktøjer og fællesskab, men også opmuntring og håb. Man får gejsten tilbage og troen på, at det nok skal blive godt, og det er sindssygt vigtigt. Det giver motivation og håb for fremtiden, selv når det føles svært."
              </p>
              <p className="text-2xl font-bold text-[#333] m-0 font-cabin">Helle, sygeplejerske</p>
            </div>
            <div className="p-5 text-center">
              <p className="text-lg leading-[1.6] text-[#595959] mb-4 italic font-chivo">
                "Netværket har hjulpet mig med at finde tilbage til mig selv. Jeg bliver mindet om hvor stærk jeg faktisk er. Det har været sindssygt vigtigt for mig."
              </p>
              <p className="text-2xl font-bold text-[#333] m-0 font-cabin">Britt, skolelærer</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Network Section */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex max-md:flex-col items-center gap-[60px] max-md:gap-[30px] max-w-[1200px] mx-auto">
            <div className="flex-1">
              <img src="/assets/images/d6228b-fe2-8235-ed1a-122ea44111e3_2895da66-942a-4735-bdde-c3b4002904ab.jpg" alt="Isabella" className="w-full h-auto block" />
            </div>
            <div className="flex-[1.5]">
              <h2 className="text-5xl max-md:text-4xl text-[#333] mb-6 font-cabin">Få en hverdag du ikke har brug for en pause fra</h2>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">
                Stress Navigator er et fasciliteret online netværk for mødre, der gerne vil have kontrollen med deres hverdag tilbage. Gennem undervisning, oplæg fra eksperter og støtten fra netværket genfinder du overskuddet, så du selv kan holde balancen i en hektisk hverdag. Vi bruger udelukkende dokumenterede metoder fra eks. psykologi, neuroscience, naturterapi og kropsterapi i undervisningen.
              </p>
              <ul className="list-none p-0 my-8">
                <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Bliv en del af et støttende netværk af mødre, der forstår dine udfordringer</li>
                <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Få adgang til gennemprøvede metoder og strategier til at håndtere stress</li>
                <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Deltag i løbende online workshops, Q&A og ressourcer, der hjælper dig med at skabe varige, positive forandringer</li>
                <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Opbyg mentalt overskud, så du kan være den nærværende og glade mor, du ønsker at være</li>
              </ul>
              <a href="#pricing" className="inline-block py-3 px-7 bg-[#9284a4] text-white no-underline rounded text-lg font-bold transition-all duration-300 ease-in-out mt-4 hover:bg-[#7a6b8a]">Se hvad du får som medlem</a>
            </div>
          </div>
        </div>
      </section>

      {/* Isabella Section */}
      <section className="bg-[#f7f7f8] py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex max-md:flex-col items-center gap-[60px] max-md:gap-[30px] max-w-[1200px] mx-auto">
            <div className="flex-1">
              <h2 className="text-5xl max-md:text-4xl text-[#333] mb-6 font-cabin">Mit navn er Isabella</h2>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">
                Jeg har skabt Stress Navigator, fordi jeg alt for godt kendte følelsen af at være fanget i en hverdag, hvor stressen styrer tempoet, og overskuddet konstant er i underskud. Efter selv at have fundet min egen vej gennem stress og udviklet en metode, der er langtidsholdbar og virker i praksis, gjorde jeg det til min mission at hjælpe andre mødre.
              </p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">
                For nylig har den første gruppe mødre gennemført forløbet: De oplevede bl.a. markant øget energi, mere nærvær og et større mentalt overskud. Her får du ikke kun gennemprøvede strategier og metoder, men også adgang til et varmt netværk af ligesindede, der forstår dine udfordringer og hepper på dig hele vejen. Jeg tror på, at du kan skabe en hverdag, du ikke har brug for en pause fra – og jeg vil gerne vise dig, hvordan.
              </p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">
                <a href="/about" className="text-[#9284a4] underline">Læs mere her</a>
              </p>
            </div>
            <div className="flex-1 flex items-center">
              {/* Wistia video embed */}
              <div className="relative rounded-lg overflow-hidden w-full">
                <div 
                  className="wistia_responsive_padding" 
                  style={{ padding: '56.25% 0 0 0', position: 'relative' }}
                >
                  <div 
                    className="wistia_responsive_wrapper" 
                    style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
                  >
                    <div 
                      className="wistia_embed wistia_async_ptgbthhj26"
                      data-video-foam="true"
                      style={{ height: '100%', position: 'relative', width: '100%' }}
                    >
                      <div 
                        className="wistia_swatch" 
                        style={{ 
                          height: '100%', 
                          left: 0, 
                          opacity: 1, 
                          overflow: 'hidden', 
                          position: 'absolute', 
                          top: 0, 
                          transition: 'opacity 200ms', 
                          width: '100%' 
                        }}
                      >
                        <img 
                          src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2157645353/settings_images/e0f6fdc-6dff-0ced-0a80-1221c6752e_2024-11-27_09-34-12.png" 
                          alt="Video thumbnail" 
                          style={{ 
                            filter: 'blur(5px)', 
                            height: '100%', 
                            objectFit: 'cover', 
                            width: '100%' 
                          }} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section 2 */}
      <section className="bg-[#f0f0f5] py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-5xl max-md:text-4xl text-[#333] mb-12 font-cabin">Sådan siger andre mødre</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
            <div className="bg-white p-[30px] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              <p className="text-lg leading-[1.7] text-[#595959] mb-6">
                "Mine børn var dem, der betalte den højeste pris for at have en stresset mor. Det gør ondt at skulle erkende. Men fordi at udgangspunktet i netværket er at lære at passe på sig selv som mor, giver det mig mulighed for at forstå hvorfor jeg blev så stresset, lære hvad jeg kan gøre for ikke at blive det igen, og få overskuddet til ikke at bebrejde mig selv, at det var sådan engang."
              </p>
              <p className="text-2xl font-bold text-[#333] m-0 font-cabin"><strong>Helene</strong>, Redaktør</p>
            </div>
            <div className="bg-white p-[30px] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              <p className="text-lg leading-[1.7] text-[#595959] mb-6">
                "Man er ikke i tvivl om, at Isabella selv har været der, og at hun ved, hvad hun laver. Netværket har givet mig energi og styrke til at håndtere udfordrende situationer, især som hovedforsørger. Det har været en stor hjælp i en tid, hvor det føltes svært at finde løsninger."
              </p>
              <p className="text-2xl font-bold text-[#333] m-0 font-cabin"><strong>Helle</strong>, Sygeplejerske</p>
            </div>
            <div className="bg-white p-[30px] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              <p className="text-lg leading-[1.7] text-[#595959] mb-6">
                "Jeg har både været hos stress-coaches og andre behandlere, men jeg synes aldrig rigtigt, at jeg har fået den hjælp, jeg skulle bruge. Isabellas tilgang er helt anden. Dét, at vi har hinanden i netværket gør en kæmpe forskel, og jeg kan mærke, at det giver mig et overskud tilbage, som jeg ikke har haft i mange år."
              </p>
              <p className="text-2xl font-bold text-[#333] m-0 font-cabin"><strong>Katja</strong>, Strategisk leder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Features Section */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-5xl max-md:text-4xl text-[#333] mb-6 font-cabin">Hvad får du som medlem?</h2>
          <p className="text-center text-lg leading-[1.7] text-[#595959] max-w-[900px] mx-auto mb-12 font-chivo">
            Når du bliver medlem af Stress Navigator, får du adgang til et helt univers af ressourcer, støtte og viden, der er målrettet mødre, som søger mere overskud og ro i hverdagen. Alt er udviklet på baggrund af dokumenterede metoder, ærlig erfaringsudveksling, ekspertviden og praktiske værktøjer, du kan bruge med det samme
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1200px] mx-auto mb-8">
            <div className="text-center p-5">
              <img src="/assets/images/76ae613-f12b-43f-a363-cd2331101fa_3ab66970-fa83-4e6b-866b-1d9ec6034894.png" alt="Dokumenterede metoder" className="w-20 h-20 mx-auto mb-6 block" />
              <h3 className="text-2xl font-bold text-[#333] mb-4 font-cabin">Dokumenterede metoder</h3>
              <p className="text-lg leading-[1.6] text-[#595959] font-chivo">Adgang til gennemprøvede strategier, øvelser og øjeblikkeligt anvendelige værktøjer, udviklet på baggrund af anerkendt stresshåndtering og praktisk erfaring</p>
            </div>
            <div className="text-center p-5">
              <img src="/assets/images/720cc1-7bb1-2a5-786e-bd3f0176bd66_3ab66970-fa83-4e6b-866b-1d9ec6034894.png" alt="Workshops" className="w-20 h-20 mx-auto mb-6 block" />
              <h3 className="text-2xl font-bold text-[#333] mb-4 font-cabin">Online workshops & Q&A-sessioner</h3>
              <p className="text-lg leading-[1.6] text-[#595959] font-chivo">Hvert kvartal kan du deltage i live-online workshops, hvor vi sammen med en ekspert fordyber os i aktuelle emner om stress, trivsel, sundhed og familieliv</p>
            </div>
            <div className="text-center p-5">
              <img src="/assets/images/7664604-0f44-7b74-a40e-32ec65e156c1_3ab66970-fa83-4e6b-866b-1d9ec6034894.png" alt="Netværk" className="w-20 h-20 mx-auto mb-6 block" />
              <h3 className="text-2xl font-bold text-[#333] mb-4 font-cabin">Fasciliteret netværk med støtte og hverdagstestede strategier</h3>
              <p className="text-lg leading-[1.6] text-[#595959] font-chivo">I den lukkede online-gruppe kan du dele erfaringer, udfordringer og sejre, samtidig med at du får opbakning, råd og indsigter fra andre, der virkelig forstår din hverdag</p>
            </div>
            <div className="text-center p-5">
              <img src="/assets/images/761e7-67c4-fe41-acd6-2042f642cfa2_leaf.png" alt="Ressourcer" className="w-20 h-20 mx-auto mb-6 block" />
              <h3 className="text-2xl font-bold text-[#333] mb-4 font-cabin">Eksklusive ressourcer og materialer</h3>
              <p className="text-lg leading-[1.6] text-[#595959] font-chivo">Få adgang til et voksende bibliotek af PDF-guides, lydfiler og praktiske øvelser. Du kan dykke ned i materialet, når det passer dig, og løbende hente ny inspiration og viden</p>
            </div>
          </div>
          <p className="text-center text-lg leading-[1.7] text-[#595959] max-w-[900px] mx-auto mt-8 font-chivo">
            Alt er designet, så du kan tilgå det i dit eget tempo. Dette handler om at give dig de bedste forudsætninger for at finde din vej til til en holdbar hverdag med mindre stress og mere nærvær – med den viden, de værktøjer og den støtte, det kræver
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#f0f0f5] py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-white py-[60px] px-10 rounded-lg max-w-[900px] mx-auto text-center">
            <h2 className="text-5xl max-md:text-4xl text-[#333] mb-4 font-cabin">Invester i dig selv og din familie</h2>
            <h3 className="text-2xl font-bold text-[#9284a4] mb-4 font-cabin">Få adgang til Stress Navigator til intropris på kun 499 kr. pr. måned</h3>
            <p className="text-[#666] mb-8 font-chivo text-lg">Normalpris: 749 kr. pr. måned<br/>(Samlet betaling for 12 måneder – 14 dages tilfredshedsgaranti)</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left my-8">
              <div>
                <ul className="list-none p-0">
                  <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] text-lg before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Adgang til alle netværksmøder og live workshops</li>
                  <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] text-lg before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Gennemprøvede og dokumenterede metoder til at håndtere stress</li>
                  <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] text-lg before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Live Q&A med Isabella og webinarer med eksperter hvert kvartal</li>
                  <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] text-lg before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Eksklusive ekspertviden i guides, videoer og øvelser, der skaber varig forandring</li>
                </ul>
              </div>
              <div>
                <ul className="list-none p-0">
                  <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] text-lg before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Erfaringsinterviews om stress med mødre</li>
                  <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] text-lg before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Trinvis adgang til Stress Navigator Forløbet (4 moduler over 12 måneder)</li>
                  <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] text-lg before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Bliv en del af et støttende netværk med andre mødre</li>
                  <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] text-lg before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Alt sammen i dit tempo – på en platform, der altid er åben for dig</li>
                </ul>
              </div>
            </div>

            <p className="my-8 text-[#333] font-semibold">
              14 dages tilfredshedsgaranti<br/>
              <small className="block font-normal text-[#666] mt-2">(Betalingen trækkes først efter 14 dage. Hvis du ikke oplever værdi, annullerer du nemt uden omkostning)</small>
            </p>

            <a href="#signup" className="inline-block py-4 px-10 bg-[#9284a4] text-white no-underline rounded text-lg font-bold transition-all duration-300 ease-in-out mt-4 hover:bg-[#7a6b8a]">Tilmeld dig i dag</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-5xl max-md:text-4xl text-[#333] mb-4 font-cabin">Er du i tvivl om et medlemskab er noget for dig?</h2>
          <p className="text-center text-lg text-[#595959] mb-12 font-chivo">Her har vi samlet nogle af de spørgsmål, vi oftest bliver stillet, så du nemt kan få svar.</p>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1200px] mx-auto mb-12">
            <div className="p-5">
              <h3 className="text-2xl font-bold text-[#333] mb-4 font-cabin">Kræver det meget (mere) af min tid?</h3>
              <p className="text-lg leading-[1.7] text-[#595959] font-chivo">Vi forstår dig, for vi har selv været der: Som mor med en travl hverdag kan det være svært at finde tid til at prioritere dig selv. Vi ved, at din tid er kostbar. Derfor skal indholdet i netværket passe ind i din tidsplan - ikke omvendt. Vores mål er, at gøre det så nemt som muligt for dig at finde den støtte, du har brug for, uden at tilføje ekstra stress til din dag. Derfor er netværket skabt med udgangspunkt i at det skal være fleksibilitet, så du kan få støtte på en måde, der passer ind i dit liv.</p>
            </div>

            <div className="p-5">
              <h3 className="text-2xl font-bold text-[#333] mb-4 font-cabin">Kan jeg være sikker på resultater?</h3>
              <p className="text-lg leading-[1.7] text-[#595959] font-chivo">Som alt andet her i livet, så afhænger dine resultater af det, du selv lægger i det. Vi lover dig, at hvis du går ind i det og gør dig umage med metoder og strategier, så vil du se resultater. Faktisk er vi så sikre på at det virker, at du kan få pengene tilbage efter 60 dage, hvis du ikke er tilfreds.</p>
            </div>

            <div className="p-5">
              <h3 className="text-2xl font-bold text-[#333] mb-4 font-cabin">Er netværket et fortroligt sted?</h3>
              <p className="text-lg leading-[1.7] text-[#595959] font-chivo">Stress er vanvittigt tabu-belagt, og der kan rigtigt meget på spil - både i forhold til arbejdsplads, kollegaer, ledere mv. Vi ved godt, at tanken om at dele dine oplevelser med andre mødre kan virke skræmmende. Derfor vægter vi fortrolighed meget, meget højt. Netværket SKAL være et trygt sted. Derfor har vi en ufravigelig politik om, at det der bliver vendt ikke kommer videre.</p>
            </div>

            <div className="p-5">
              <h3 className="text-2xl font-bold text-[#333] mb-4 font-cabin">Vil et netværk gøre en effektiv forskel?</h3>
              <p className="text-lg leading-[1.7] text-[#595959] font-chivo">Forskning viser tydeligt, at sociale netværk og relationer spiller en afgørende rolle i menneskers evne til at komme sig både fysisk og mentalt efter svære perioder. Stress Navigator er det eneste online sted, hvor du kan møde andre mødre, der står midt i de samme udfordringer som dig. Her finder du kvinder, der også balancerer børn, arbejde og dagligdagens krav, og som virkelig forstår, hvor udmattende det kan være.</p>
            </div>
          </div>

          <div className="bg-[#f7f7f8] p-10 rounded-lg text-center max-w-[800px] mx-auto mt-12">
            <h3 className="text-2xl font-bold text-[#333] mb-4 font-cabin">Er du stadig i tvivl? Book en uforpligtende samtale</h3>
            <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Drømmer du om en hverdag med mere overskud og ro, men er du i tvivl om, om Stress Navigator er noget for dig? Book en uforpligtende samtale på 20 minutter med mig, hvor vi sammen gennemgår din situation. Uanset om vi er et match eller ej, garanterer jeg dig brugbare råd, som du frit kan tage med dig efter samtalen.</p>
            <a href="https://calendly.com/stressnavigator/20min" target="_blank" rel="noopener noreferrer" className="inline-block py-3 px-7 bg-[#9284a4] text-white no-underline rounded text-lg font-bold transition-all duration-300 ease-in-out mt-4 hover:bg-[#7a6b8a]">Book din uforpligtende samtale</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
