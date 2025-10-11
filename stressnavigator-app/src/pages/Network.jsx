const Network = () => {
  return (
    <div>
      {/* Hero Section */}

      <section className="relative bg-[#9284a4] bg-cover bg-center bg-no-repeat py-[60px] px-5 md:py-20 md:px-10 text-center" style={{ backgroundImage: "url('/assets/images/aaabffd-7f46-aba2-ec1-e00f24e03e_Screenshot_2024-06-10_at_16.56.13.png')" }}>
        <div className="absolute w-full h-full left-0 top-0 bg-[rgba(146,132,164,0.82)] z-[1]"></div>
        <div className="relative z-[2] max-w-[1200px] mx-auto px-5">
          <h1 className="text-white text-[2rem] md:text-5xl font-bold m-0 mb-6 leading-[1.2] font-cabin">FÅ EN HVERDAG DU IKKE HAR BRUG FOR EN PAUSE FRA</h1>
          <p className="text-white text-lg font-normal m-0 mb-8 leading-[1.6] font-chivo">
            Genfind glæden og friheden i hverdagen med et netværk af andre mødre<br/>
            og få det liv, du drømmer om.
          </p>
          <a href="#pricing" className="inline-block py-[14px] px-[30px] bg-[#9284a4] text-white no-underline rounded font-bold text-lg mt-4 font-chivo transition-all duration-300 ease-in-out hover:bg-[#7a6b8a]">Ja tak - giv mig glæden og friheden tilbage</a>
        </div>
      </section>

      {/* Testimonials Section 1 */}
      <section className="bg-white py-[60px] px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[30px] max-w-[1200px] mx-auto">
            <div className="p-5 text-center">
              <p className="text-lg leading-[1.6] text-[#595959] mb-4 italic font-chivo">
                "At have et sted med andre mødre, der kan genkende, hvordan jeg har det, har været altafgørende. Tidligere famlede jeg rundt i mit eget liv, og det føltes som om, at jeg bare måtte hænge i. Nu, hvor jeg har mødt de andre mødre i netværket, har jeg selv fået tøjlerne for mit eget liv tilbage og kan blive ved med at holde fast i dem."
              </p>
              <p className="text-2xl font-bold text-[#333] m-0 font-cabin"><strong>Charite</strong>, tre børn</p>
            </div>
            <div className="p-5 text-center">
              <p className="text-lg leading-[1.6] text-[#595959] mb-4 italic font-chivo">
                "Stress Navigator er en kærlig gave til sig selv – et sted, hvor man kan få inspiration og refleksion uden krav om at præstere. Det giver mulighed for at tage imod guldkorn og finde ny indsigt som jeg selv kan bruge, selv når jeg ikke synes at jeg har overskud til det."
              </p>
              <p className="text-2xl font-bold text-[#333] m-0 font-cabin"><strong>Ellen</strong>, mor til to</p>
            </div>
            <div className="p-5 text-center">
              <p className="text-lg leading-[1.6] text-[#595959] mb-4 italic font-chivo">
                "Dårlig samvittighed og morlivet har altid hængt uløseligt sammen for mig, og jeg har haft svært ved at se, hvordan jeg kunne slippe den, uden at skulle give afkald på min karriere. Nu kan jeg slippe den dårlige samvittighed fordi jeg har fået værktøjerne til det i netværket og undervisningen."
              </p>
              <p className="text-2xl font-bold text-[#333] m-0 font-cabin"><strong>Helle</strong>, tre børn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Invester Section */}
      <section className="bg-[#f7f7f8] py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[60px] max-w-[1200px] mx-auto">
            <div className="flex-1">
              <h2 className="text-[2rem] md:text-5xl text-[#333] mb-6 font-cabin">Invester i dig selv og dine børn</h2>
              <ul className="list-none p-0 my-6">
                <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] before:content-['•'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold before:text-[1.2rem]">Må du igen og igen slå knude på dig selv for at få energien til at række?</li>
                <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] before:content-['•'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold before:text-[1.2rem]">Bliver du nødt til at hanke op i dig selv for at komme gennem hverdagen?</li>
                <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] before:content-['•'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold before:text-[1.2rem]">Gør du dig umage for at få alle ender i hverdagen til at mødes, mens det føles som om at det æder al dit overskud?</li>
              </ul>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Hvis du har det sådan, er du ikke alene.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Tal viser, at hele 8% af alle danske mødre har stress og at omkring 70 % føler sig stressede over både at skulle være en god mor og en god medarbejder.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo"><strong>Men som mødre er vi nødt til at passe bedre på os selv.</strong></p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Undersøgelser viser nemlig, at mødres stress påvirker børnene.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">I Stress Navigator arbejder vi kun med dokumenterede stresshåndteringsteknikker og forebyggelse. Sammen med andre mødre sikrer du dit varige værn mod stress.</p>
            </div>
            <div className="flex-1">
              <img src="/assets/images/7021774-72bf-eaf7-3f6d-45a3e8b3cd2a_mother_child_cropped.png" alt="Mother and child" className="w-full h-auto block rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Kan du genkende det her Section */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-[2rem] md:text-5xl text-[#333] mb-12 font-cabin">Kan du genkende det her?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 max-w-[1200px] mx-auto mb-8">
            <div className="text-center p-5">
              <img src="/assets/images/4e35763-22d7-d6a7-f1ec-cdece308a4_sn_heart_purple.png" alt="Icon" className="w-20 h-20 mx-auto mb-6 block" />
              <p className="text-lg leading-[1.6] text-[#595959] font-chivo">Du har dårlig samvittighed uanset, hvad du gør, og hvor meget du laver.</p>
            </div>
            <div className="text-center p-5">
              <img src="/assets/images/bdbdd46-a570-d22a-8a4b-60aab0fbd54d_2d7770ae-b402-425a-994b-784e1b941162.png" alt="Icon" className="w-20 h-20 mx-auto mb-6 block" />
              <p className="text-lg leading-[1.6] text-[#595959] font-chivo">Du er faret vild i hverdagen - små opgaver overvælder dig og lammer dig og det får dig til at føle dig utilstrækkelig.</p>
            </div>
            <div className="text-center p-5">
              <img src="/assets/images/1fc65-217a-ea24-18f8-780a47aedbe2_2d7770ae-b402-425a-994b-784e1b941162.png" alt="Icon" className="w-20 h-20 mx-auto mb-6 block" />
              <p className="text-lg leading-[1.6] text-[#595959] font-chivo">Du kan egentligt godt kan lide dine opgaver, så det forvirrer dig, at du konstant er drænet og ked af det.</p>
            </div>
            <div className="text-center p-5">
              <img src="/assets/images/a166fe-f203-4b46-f71c-ee6dcabb53_2d7770ae-b402-425a-994b-784e1b941162.png" alt="Icon" className="w-20 h-20 mx-auto mb-6 block" />
              <p className="text-lg leading-[1.6] text-[#595959] font-chivo">Det føles som om, at hverdagen styrer dig - ikke omvendt.</p>
            </div>
          </div>
          <div className="text-center mt-12 max-w-[900px] mx-auto">
            <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Hvis du kan nikke genkendende til et par af disse punkter, så book en tid i min kalender til en uforpligtende samtale. Så kan du høre mere om, hvordan netværket og jeg vil kunne hjælpe dig tilbage til en hverdag, hvor du har overskud til det der betyder mest.</p>
            <a href="https://calendly.com/stressnavigator/20min" target="_blank" rel="noopener noreferrer" className="inline-block py-[14px] px-[30px] bg-[#9284a4] text-white no-underline rounded font-bold text-lg mt-4 font-chivo transition-all duration-300 ease-in-out hover:bg-[#7a6b8a]">Book en uforpligtende samtale</a>
          </div>
        </div>
      </section>

      {/* Når hvert minut tæller Section */}
      <section className="bg-[#f7f7f8] py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[60px] max-w-[1200px] mx-auto">
            <div className="flex-[1.5]">
              <h2 className="text-[2rem] md:text-5xl text-[#333] mb-6 font-cabin">Når hvert minut tæller</h2>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Vi ved, at tid er en knap ressource.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Og vi ved, at den tid du bruger i netværket, er tid, der skal tages fra noget andet i en ofte minutiøst planlagt hverdag.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Samtidig ved vi også, fra undersøgelser, hvor effektivt en hjælp støtten fra et netværk er.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo"><strong>Derfor er indholdet tilrettelagt, så du får maksimal værdi med minimal indsats.</strong></p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Kombinationen af undervisning, viden og netværksmøder arbejder sammen for at sikre kontinuitet og motivation i din stresshåndtering.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Undervisningen giver dig konkrete metoder og strategier, mens netværksmøderne bidrager med inspiration og støtte.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Alt er designet og optimeret med forståelse for, at hver eneste sekund i din hverdag er dyrebart.</p>
            </div>
            <div className="flex-1">
              <img src="/assets/images/1e2a81-daf-404b-a42-ba880843b20_Screenshot_2024-12-13_at_22.54.44.png" alt="Time management" className="w-full h-auto block rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Overskud Section */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[60px] max-w-[1200px] mx-auto">
            <div className="flex-1">
              <img src="/assets/images/aa158b-812c-cbe4-00d3-e1ac85c4a3bc_Screenshot_2024-06-10_at_17.04.06.png" alt="Overskud" className="w-full h-auto block rounded-lg" />
            </div>
            <div className="flex-[1.5]">
              <h2 className="text-[2rem] md:text-5xl text-[#333] mb-6 font-cabin">Overskud til det, der betyder mest</h2>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo"><strong>Hvordan ville det være hvis</strong></p>
              <ul className="list-none p-0 my-6">
                <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">dårlig samvittighed var byttet ud med overskud?</li>
                <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">følelsen af utilstrækkelighed var byttet ud med glæde?</li>
                <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">knuden i maven blev byttet ud med tid til både job, børn, familie og dig selv?</li>
                <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">din grådlabilitet var byttet ud med nærvær?</li>
                <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">følelsen af overvældelse var byttet ud ro?</li>
              </ul>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Det er bare et udpluk af nogle af de resultater, vores medlemmer har skabt sammen inden i netværket.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Det er ikke hokus pokus. Det handler om forståelse, genkendelse, inspiration og motivation kombineret med de rigtige metoder og fascilitering.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Se hvad du vil kunne få ud af det og hvad det vil kunne gøre for din hverdag nedenfor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#f7f7f8] py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[800px] mx-auto bg-white py-[40px] px-5 md:py-[60px] md:px-10 rounded-lg text-center shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
            <h2 className="text-[2rem] md:text-5xl text-[#333] mb-4 font-cabin">Stress Navigator Netværk</h2>
            <h3 className="text-[2rem] text-[#9284a4] mb-4 font-cabin">Intropris: 499 kr./md</h3>
            <p className="text-lg text-[#595959] mb-8 font-chivo">Normalpris 749 kr./md. Medlemskabet gælder i 12 måneder og betales samlet.</p>

            <div className="bg-[#f7f7f8] py-[15px] px-5 my-8 rounded">
              <p className="m-0 text-lg text-[#333] font-chivo"><strong>14 dages tilfredshedsgaranti</strong></p>
            </div>

            <ul className="list-none p-0 my-8 text-left">
              <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] font-chivo text-lg before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Adgang til alle netværksmøder</li>
              <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] font-chivo text-lg before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Nyeste viden fra eksperter</li>
              <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] font-chivo text-lg before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Erfaringsinterviews om stress med mødre</li>
              <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] font-chivo text-lg before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Kvartalsvise webinarer med relevante eksperter og fagpersoner</li>
              <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] font-chivo text-lg before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Fire moduler med undervisning i stresshåndtering og -forebyggelse</li>
              <li className="pl-6 mb-4 relative text-[#595959] leading-[1.6] font-chivo text-lg before:content-['✓'] before:absolute before:left-0 before:text-[#9284a4] before:font-bold">Støtte fra netværket</li>
            </ul>

            <a href="#signup" className="inline-block py-[14px] px-[30px] bg-[#9284a4] text-white no-underline rounded font-bold text-lg mt-4 font-chivo transition-all duration-300 ease-in-out hover:bg-[#7a6b8a]">Før mig videre til tilmelding</a>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-[2rem] md:text-5xl text-[#333] mb-6 font-cabin">Overskud med garanti</h2>
            <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">
              I Stress Navigator ved vi præcis, hvordan det er at jonglere alle de opgaver, forpligtelser og forventninger, der følger med at være mor og have et arbejde. Og vi ved, at du hver eneste dag gør dig umage for at holde ud.
            </p>
            <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">
              Derfor har vi skabt et netværk, der giver dig metoderne og strategierne til at skabe de holdbare ændringer, der skal til for at du kan leve i den hverdag, du drømmer om og få overskud til det, der betyder mest for dig.
            </p>
            <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">
              Og hvis du fortryder, er der ingen risiko – du betaler kun, hvis du er tilfreds efter 14 dage
            </p>
          </div>
        </div>
      </section>

      {/* Four Elements Section */}
      <section className="bg-[#f7f7f8] py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-[2rem] md:text-5xl text-[#333] mb-16 font-cabin">Stress Navigator bygger på fire grundelementer</h2>

          <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[60px] max-w-[1200px] mx-auto mb-16">
            <div className="flex-1">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fUisrZQyHS4"
                title="Netværket"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[250px] md:h-[315px] rounded-lg"
              ></iframe>
            </div>
            <div className="flex-1">
              <h3 className="text-[2rem] md:text-5xl text-[#333] mb-2 font-cabin">Netværket</h3>
              <h4 className="text-2xl text-[#9284a4] mb-6 font-bold font-cabin">Tryghed. Fortrolighed. Relationer.</h4>
              <p className="text-lg leading-[1.7] text-[#595959] font-chivo">Møderne er hjertet af Stress Navigator. Uden dem intet netværk. Vi afholder dem online hver anden uge. Og det eneste, du skal gøre, er at have lyd og billede på - og så selvfølgelig møde op. Gennem autentiske og sårbare samtaler og reflektioner med andre mødre får du inspiration, som du vil opleve gradvist giver dig motivation og et ændret mindset, som du kan bruge til at skabe dit nye fundament. Det hele sker i dit eget tempo, men med opbakning fra det sikkerhedsnet, som netværket er.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-[30px] md:gap-[60px] max-w-[1200px] mx-auto mb-16">
            <div className="flex-1">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rngUQXN_az8"
                title="Undervisningen"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[250px] md:h-[315px] rounded-lg"
              ></iframe>
            </div>
            <div className="flex-1">
              <h3 className="text-[2rem] md:text-5xl text-[#333] mb-2 font-cabin">Undervisningen</h3>
              <h4 className="text-2xl text-[#9284a4] mb-6 font-bold font-cabin">Metoder og strategier skræddersyet til mødre.</h4>
              <p className="text-lg leading-[1.7] text-[#595959] font-chivo">Undervisningsforløbet er åndedrættet i Stress Navigator. Det er her, du får effektive strategier og metoder, der lærer dig at afkode dit nervesystem og det sprog din krop taler, så du altid ved, hvordan du skal agere, hvis du mærker stress og hvordan du effektivt heler igen. Vi ved ikke hvad livet kaster mod os, men med disse metoder og strategier, bliver du i stand til at navigere i din hverdag uden at være bekymret for at du bliver syg af stress.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[60px] max-w-[1200px] mx-auto mb-16">
            <div className="flex-1">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/DdGP6GLmU0k"
                title="Webinarer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[250px] md:h-[315px] rounded-lg"
              ></iframe>
            </div>
            <div className="flex-1">
              <h3 className="text-[2rem] md:text-5xl text-[#333] mb-2 font-cabin">Webinarer</h3>
              <h4 className="text-2xl text-[#9284a4] mb-6 font-bold font-cabin">Nyeste viden og gode råd</h4>
              <p className="text-lg leading-[1.7] text-[#595959] font-chivo">Webinarerne er hjernen i Stress Navigator. Det er her vi fylder dig med viden fra fagpersoner og eksperter, der på hvert deres område fortæller om stress. Alle webinarer tager udgangspunkt i, hvordan vi kan implementere den nye viden i vores hverdag, så den bliver brugt uden at det tager ekstra tid. Vi prøver at spænde vidt i emner og temaer, og derfor har vi både strukket os fra en børnepsykolog til en naturterapuet inviteret ind som gæster. Det er vigtigt, at der i alle webinarer er nogle konkrete takeaways, som du kan bruge med det samme.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-[30px] md:gap-[60px] max-w-[1200px] mx-auto mb-0">
            <div className="flex-1">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/gPr8WKW16hs"
                title="Talks og POV'er"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[250px] md:h-[315px] rounded-lg"
              ></iframe>
            </div>
            <div className="flex-1">
              <h3 className="text-[2rem] md:text-5xl text-[#333] mb-2 font-cabin">Talks og POV'er</h3>
              <h4 className="text-2xl text-[#9284a4] mb-6 font-bold font-cabin">Viden og erfaring på et sted</h4>
              <p className="text-lg leading-[1.7] text-[#595959] font-chivo">Interviews og POV'er er nervesystemet i Stress Navigator. Det er her relevant og bevægende info bliver sendt rundt, så det kan arbejde hos alle. Talks er interviews med eksperter og fagpersoner, der gavmildt og relevant deler ud af deres viden og erfaring. POV'er er erfaringssamtaler med mødre, der ærligt fortæller om deres eget stress-forløb, og hvordan de har brugt det som løftestang til at bliver mere nærværende mødre for deres børn og leve det liv, de drømte om, men fik skabt efter deres vendepunkt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Isabella Section */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col md:flex-row items-start gap-[30px] md:gap-[60px] max-w-[1200px] mx-auto">
            <div className="flex-1">
              <img src="/assets/images/67054f-c44b-a50-3e66-62c08454aa1_IMG_2990.jpeg" alt="Isabella" className="w-full h-auto block rounded-lg" />
            </div>
            <div className="flex-[1.5]">
              <h2 className="text-[2rem] md:text-[42px] text-[#333] mb-6 font-cabin">Jeg hedder Isabella,</h2>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">og jeg har skabt Stress Navigator for at give alle overvældede mødre et redskab til bedre at kunne passe på dem selv - og dermed deres børn.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Stress Navigator er et supplement til almindelig stressbehandling. Det har været vigtigt for mig at skabe et fællsskab, der udelukkende var for mødre, fordi jeg selv ved hvor ensomt, tabubelagt og skræmmende det er, at være mor og syg af stress.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Danske mødre ligger alt for højt på stressbarometret, og det bliver vi nødt til gøre op med - for det er ikke kun os, men også vores børn, der betaler prisen.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Det blev jeg selv klar over, da min søn flere år efter min egen stresssygemelding, fortalte mig, at han stadig var bekymret for, om det kunne ske igen, at han prøvede at lave sig om, så han ikke var til besvær, og at han ofte tænkte på, hvis han havde gjort noget anderledes, så var jeg måske ikke blevet syg.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Jeg satte mig for at undersøge, hvordan mødres stress påvirker børn. Den info jeg fandt, var ikke rar, men dét kombineret med min søns historie gav mig en forpligtelse og et ansvar. Jeg ville gøre op med, at mødre, som jeg, ufrivilligt kunne komme til at udsætte børnene for noget af det, vi er sat i verden for at beskytte dem imod: Bekymring, skyld og utryghed.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">Siden har jeg researchet, uddannet mig og udviklet systemer, der hjælper mødre med at passe på dem selv. Jeg har samlet det hele i Stress Navigator, så vi kan blive langtidsholdbare. Det fortjener vi, og det fortjener vores børn.</p>
              <a href="/about" className="inline-block py-[14px] px-[30px] bg-[#9284a4] text-white no-underline rounded font-bold text-lg mt-4 font-chivo transition-all duration-300 ease-in-out hover:bg-[#7a6b8a]">Se mere om historien bag</a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#f7f7f8] py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-[2rem] md:text-5xl text-[#333] mb-12 font-cabin">Stress Navigator - unik og designet til mødre</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 max-w-[1200px] mx-auto">
            <div className="text-center p-[30px] bg-white rounded-lg">
              <img src="/assets/images/7d563f-bad3-24-f458-8a22fe8657_2d7770ae-b402-425a-994b-784e1b941162.png" alt="Icon" className="w-20 h-20 mx-auto mb-6 block" />
              <h3 className="text-2xl text-[#333] mb-4 font-cabin">Du er ikke alene</h3>
              <p className="text-lg leading-[1.7] text-[#595959] mb-4 font-chivo">Stress er ensomt - både før, under og efter. Stress Navigator er baseret på, at alle deler erfaringer, råd og ideer. På den måde får du ny hverdags-testet inspiration, som du kan implementere i dit eget tempo. Vi ved, at når vi er sammen om at hjælpe os selv og hinanden, så påvirker det vores nervesystem.</p>
            </div>
            <div className="text-center p-[30px] bg-white rounded-lg">
              <img src="/assets/images/6a6866d-4655-43ab-876-7b7876686154_2d7770ae-b402-425a-994b-784e1b941162.png" alt="Icon" className="w-20 h-20 mx-auto mb-6 block" />
              <h3 className="text-2xl text-[#333] mb-4 font-cabin">Din tid er afgørende</h3>
              <p className="text-lg leading-[1.7] text-[#595959] mb-4 font-chivo">Alle de metoder jeg underviser i, har jeg selv afprøvet, udvalgt og raffineret til at passe ind i en presset hverdag. Jeg ved, at hvis noget bliver for krævende og omstændigt, så bliver det ikke gjort. Derfor er alle metoder tilpasset til at kunne implementeres uden at skulle sætte ekstra tid af - og jeg lover dig, at de virker selvom det ikke føles som om, at du gør noget anderledes.</p>
            </div>
            <div className="text-center p-[30px] bg-white rounded-lg">
              <img src="/assets/images/5fe6714-ada-ef2f-7f75-7f6c80725f1c_2d7770ae-b402-425a-994b-784e1b941162.png" alt="Icon" className="w-20 h-20 mx-auto mb-6 block" />
              <h3 className="text-2xl text-[#333] mb-4 font-cabin">Vi ved godt, hvordan det er</h3>
              <p className="text-lg leading-[1.7] text-[#595959] mb-4 font-chivo">Dårlig samvittighed, utilstrækkelighed, skyldfølelse, er jeg en god nok mor? Forvirring. Følelsen af utaknemmelighed. Følelsen af at holde ud. Følelsen af at bide det i sig og mange mange andre.</p>
              <p className="text-lg leading-[1.7] text-[#595959] mb-4 font-chivo">Vi har selv været der, så vi ved hvordan det føles og uanset hvor du er og hvordan du har det, så er der en, der har prøvet det og er klar til at give dig sparring.</p>
            </div>
            <div className="text-center p-[30px] bg-white rounded-lg">
              <img src="/assets/images/7a200c7-022c-63a5-bb1-3306c030d2_2d7770ae-b402-425a-994b-784e1b941162.png" alt="Icon" className="w-20 h-20 mx-auto mb-6 block" />
              <h3 className="text-2xl text-[#333] mb-4 font-cabin">Max udbytte af min indsats</h3>
              <p className="text-lg leading-[1.7] text-[#595959] mb-4 font-chivo">Jeg ved, hvor lidt overskud og energi du har, når du er stresset. Derfor er netværksmøderne og alt andet indhold online. Det gør, at du altid sparer tid men aldrig går på kompromis med udbyttet. Du ikke skal ud ad døren, men kan være med fra din sofa eller din seng med en varm kop te. Jeg har optimeret det, så du kan få mest ud af det med mindst mulig indsats.</p>
            </div>
            <div className="text-center p-[30px] bg-white rounded-lg">
              <img src="/assets/images/c101784-473d-5dd1-7e87-4abb2dcf0cb7_2d7770ae-b402-425a-994b-784e1b941162.png" alt="Icon" className="w-20 h-20 mx-auto mb-6 block" />
              <h3 className="text-2xl text-[#333] mb-4 font-cabin">Vælg dig selv</h3>
              <p className="text-lg leading-[1.7] text-[#595959] mb-4 font-chivo">Du har måske hørt folk sige, at du skal huske at passe på dig selv. Men du ved måske ikke, hvordan du skal gøre det. Det er der en god forklaring på. Det er nemlig ikke naturligt for os at tage os af os selv først. Vores nervesystem er kodet til at sørge for vores børn, før os selv. Derfor er det svært. I netværket arbejder vi med netop dette. For selvom det kan være udfordrende, er der ingen tvivl om, at det er afgørende, at du har det godt og har overskud. Når du trives, gør dine børn det også.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA Section */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-[900px] mx-auto bg-[#f7f7f8] py-[40px] px-5 md:py-[60px] md:px-10 rounded-lg">
            <h2 className="text-[2rem] md:text-5xl text-[#333] mb-6 font-cabin">Er du i tvivl om et medlemskab er noget for dig?</h2>
            <p className="text-lg leading-[1.7] text-[#595959] mb-8 font-chivo">Herunder kan du få svar på nogle af de spørgsmål vi oftest bliver stillet. Men du kan også booke et uforpligtende afklaringssamtale med mig.</p>
            <a href="https://calendly.com/stressnavigator/20min" target="_blank" rel="noopener noreferrer" className="inline-block py-[14px] px-[30px] bg-[#9284a4] text-white no-underline rounded font-bold text-lg mt-4 font-chivo transition-all duration-300 ease-in-out hover:bg-[#7a6b8a]">Book en uforpligtende samtale</a>
          </div>
        </div>
      </section>

      {/* E-book Section */}
      <section className="bg-[#f7f7f8] py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[60px] max-w-[1200px] mx-auto">
            <div className="flex-1">
              <img
                src="/assets/images/8aeccf2-cc7e-5cf-378f-80fe0c26e_Forsiden_e-bog.png"
                alt="E-bog forside"
                className="w-full max-w-[400px] h-auto block rounded-lg"
              />
            </div>
            <div className="flex-[1.5]">
              <h2 className="text-[2rem] md:text-5xl text-[#333] mb-6 font-cabin">Få mine bedste metoder.</h2>
              <p className="text-lg leading-[1.7] text-[#595959] mb-6 font-chivo">
                I denne e-bog har jeg samlet de metoder, som jeg selv startede ud med for at få balancen tilbage.
              </p>
              <p className="text-[0.9rem] text-[#777] italic">
                Når du skriver dig op til dig, accepterer du samtidigt at modtage miniguides, som jævnligt bliver sendt ud. Du kan til enhver til afmelde dig med et enkelt klik.
              </p>
              <form className="flex flex-col gap-[15px] mt-8">
                <input type="text" placeholder="Navn" required className="py-3 px-[15px] border border-[#ddd] rounded text-lg font-chivo" />
                <input type="email" placeholder="Email" required className="py-3 px-[15px] border border-[#ddd] rounded text-lg font-chivo" />
                <button type="submit" className="inline-block py-[14px] px-[30px] bg-[#9284a4] text-white no-underline rounded font-bold text-lg mt-4 font-chivo transition-all duration-300 ease-in-out hover:bg-[#7a6b8a] border-none cursor-pointer">Download e-bog</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-[900px] mx-auto">
            <h2 className="text-[2rem] md:text-5xl text-[#333] mb-6 font-cabin">Vi glæder os til at møde dig.</h2>
            <p className="text-lg leading-[1.7] text-[#595959] mb-8 font-chivo">Tilmeld dig her og kom i gang med forandringen med det samme.</p>
            <a href="#signup" className="inline-block py-[18px] px-10 bg-[#9284a4] text-white no-underline rounded font-bold text-lg mt-4 font-chivo transition-all duration-300 ease-in-out hover:bg-[#7a6b8a]">Ja tak. Jeg vil gerne være medlem.</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Network;
