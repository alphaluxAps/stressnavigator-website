const Terms = () => {
  return (
    <div className="page-terms bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16 text-center">
        <div className="absolute w-full h-full left-0 top-0 bg-[rgba(146,132,164,0.82)] z-[1]"></div>
        <div className="container mx-auto px-5 relative z-[2]">
          <h1 className="text-[88px] max-md:text-[2.5rem] leading-[1.2] font-bold font-chivo">Handels- og Leveringsbetingelser</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="prose max-w-none font-cabin">
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-6">
              Disse handels- og leveringsbetingelser gælder for private køb af produkter, ydelser og kurser (fysiske såvel som online) hos Stress Navigator.
            </p>
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-8">
              <strong>Drevet af:</strong> Stress Navigator ApS, Buddingevej 36b, 2800 Kgs. Lyngby<br/>
              <strong>CVR-nr:</strong> 45113507
            </p>

            <h3 className="text-[24px] leading-[1.2] font-bold font-chivo text-gray-800 mt-8 mb-4">
              Kontakt
            </h3>
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-4">
              <strong>Email:</strong> <a href="mailto:support@stressnavigator.dk" className="text-[18px] font-bold text-primary hover:text-primary-dark">support@stressnavigator.dk</a><br/>
              <strong>Telefon:</strong> 30229180
            </p>

            <h3 className="text-[24px] leading-[1.2] font-bold font-chivo text-gray-800 mt-8 mb-4">
              Ydelser og produkter
            </h3>
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-4">
              Vi tilbyder netværk, coaching og uddannelse for mødre med henblik på at blive stressfri. Medlemskab giver adgang til netværk, undervisning og viden om stresshåndtering.
            </p>
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-8">
              Vi tilbyder både abonnementsaftaler samt engangskonsultationer/foredrag.
            </p>

            <h3 className="text-[24px] leading-[1.2] font-bold font-chivo text-gray-800 mt-8 mb-4">
              Priser
            </h3>
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-4">
              Alle priser er i DKK inkl. moms og forsendelse. Vi forbeholder os ret til at ændre priser med kort varsel. Abonnementsprisen forbliver dog uændret for eksisterende abonnenter.
            </p>

            <h3 className="text-[24px] leading-[1.2] font-bold font-chivo text-gray-800 mt-8 mb-4">
              Betaling
            </h3>
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-4">
              Betaling sker via faktura eller kort (Visa, Dankort, American Express, Mastercard). Betaling trækkes umiddelbart ved køb. Faktura sendes via email.
            </p>
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-8">
              Betalingen behandles gennem Stripe betalingsgateway.
            </p>

            <h3 className="text-[24px] leading-[1.2] font-bold font-chivo text-gray-800 mt-8 mb-4">
              Køb og levering af digitale ydelser
            </h3>
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-4">
              Ordrebekræftelse/faktura sendes via email. Online produkter tilgås via login med adgangskode. Adgang gives umiddelbart efter købet er gennemført.
            </p>

            <h3 className="text-[24px] leading-[1.2] font-bold font-chivo text-gray-800 mt-8 mb-4">
              Brugsret til produkter og ydelser
            </h3>
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-4">
              Alle rettigheder tilhører Stress Navigator. Personlig adgang via login indtil aftalen udløber. Videresalg, udlån eller distribution uden skriftlig tilladelse er ikke tilladt.
            </p>

            <h3 className="text-[24px] leading-[1.2] font-bold font-chivo text-gray-800 mt-8 mb-4">
              Fortrydelsesret og reklamation
            </h3>
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-4">
              14 dages fortrydelsesret for private forbrugere. Gratis prøveperiode på 14 dage for abonnementer. Ingen fortrydelsesret for digitale produkter leveret umiddelbart.
            </p>
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-8">
              <strong>Kontakt:</strong> <a href="mailto:support@stressnavigator.dk" className="text-[18px] font-bold text-primary hover:text-primary-dark">support@stressnavigator.dk</a> for klager
            </p>

            <h3 className="text-[24px] leading-[1.2] font-bold font-chivo text-gray-800 mt-8 mb-4">
              Abonnementsvilkår
            </h3>

            <h4 className="text-[24px] leading-[1.2] font-semibold font-chivo text-gray-800 mt-6 mb-3">
              Abonnementsaftale og automatisk fornyelse
            </h4>
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-4">
              12 måneders abonnement med automatisk fornyelse. Ingen fortrydelsesret efter prøveperioden. Prisen forbliver uændret for eksisterende medlemmer.
            </p>

            <h4 className="text-[24px] leading-[1.2] font-semibold font-chivo text-gray-800 mt-6 mb-3">
              Ændringer af abonnementet
            </h4>
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-8">
              Ret til at opdatere/modificere funktioner med eller uden varsel. Væsentlige ændringer meddeles med rimelig varsel.
            </p>

            <h3 className="text-[24px] leading-[1.2] font-bold font-chivo text-gray-800 mt-8 mb-4">
              Opsigelse og afbrydelse
            </h3>
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-4">
              Skriftlig opsigelse før næste betalingsdato. Automatisk fortsættelse hvis ikke opsagt. Kan suspendere/opsige adgang ved regelbrud uden refusion.
            </p>

            <h3 className="text-[24px] leading-[1.2] font-bold font-chivo text-gray-800 mt-8 mb-4">
              Oplysning om klagemuligheder for forbrugere
            </h3>
            <p className="text-[18px] leading-[1.6] text-gray-700 mb-4">
              Kontakt først Stress Navigator. Kan indgive klage til Konkurrence- og Forbrugerstyrelsens Center for Klageløsning via <a href="http://www.forbrug.dk" target="_blank" rel="noopener noreferrer" className="text-[18px] font-bold text-primary hover:text-primary-dark">www.forbrug.dk</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-5 max-w-4xl text-center">
          <h2 className="text-[48px] leading-[1.2] font-bold font-chivo mb-4 text-gray-800">
            I tvivl om netværket er noget for dig?
          </h2>
          <h4 className="text-[24px] leading-[1.2] font-semibold font-cabin mb-4 text-gray-700">
            Er du bekymret for om netværket bliver endnu en forpligtelse?
          </h4>
          <h4 className="text-[24px] leading-[1.2] font-semibold font-cabin mb-6 text-gray-700">
            Få mine bedste metoder.
          </h4>
          <a
            href="/kontakt#contact-form"
            className="inline-block bg-primary text-white px-8 py-3 rounded text-[18px] font-bold leading-normal hover:bg-primary-dark transition"
          >
            Book en uforpligtende samtale
          </a>
        </div>
      </section>
    </div>
  );
};

export default Terms;
