import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
    return (
        <div className={"container"}>
          <section className={"bg-primary text-white py-5"}>
            <div className={"container text-center"}>
              <h1 className={"font-bold text-xl"}>O nas – Twój zaufany partner w hydraulice</h1>
              <p className={"lead"}>Wieloletnie doświadczenie, szeroka oferta i jakość, której możesz zaufać.</p>
            </div>
          </section>
          
          <section className={"py-5"}>
            <div className={"container"}>
              <h2 className={"text-center font-bold mb-4"}>Nasza historia</h2>
              <p className={"text-muted"}>Nasza firma powstała w <strong>2010 roku</strong> i od tego czasu zdobywa zaufanie klientów w całej Polsce.
                Dzięki pasji do hydrauliki oraz współpracy z renomowanymi producentami, zbudowaliśmy markę, która łączy
                nowoczesne technologie z solidnymi, sprawdzonymi rozwiązaniami. Rozpoczęliśmy działalność jako mała hurtownia,
                a dziś jesteśmy liderem na rynku, oferując szeroki wybór produktów hydraulicznych zarówno w naszym sklepie
                stacjonarnym, jak i online.</p>
            </div>
          </section>
          
          <section className={"py-5"}>
            <div className={"container"}>
              <h2 className={"text-center font-bold mb-4"}>Nasze wartości</h2>
              <div className={"row text-center"}>
                <div className={"col-md-3"}>
                  <h3 className={"font-bold"}>Jakość i niezawodność</h3>
                  <p>Tylko sprawdzone produkty od najlepszych dostawców.</p>
                </div>
                
                <div className={"col-md-3"}>
                  <h3 className={"font-bold"}>Dbałość o klienta</h3>
                  <p>Zespół doświadczonych doradców zawsze służy pomocą.</p>
                </div>
                
                <div className={"col-md-3"}>
                  <h3 className={"font-bold"}>Innowacje</h3>
                  <p>Regularnie poszerzamy ofertę o najnowsze technologie w branży hydraulicznej.</p>
                </div>
                
                <div className={"col-md-3"}>
                  <h3 className={"font-bold"}>Ekologia</h3>
                  <p>Promujemy rozwiązania oszczędzające wodę i energię, dbając o środowisko.</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className={"py-5"}>
            <div className={"container"}>
              <h2 className={"text-center font-bold mb-4"}>Co oferujemy?</h2>
              <p className={"text-muted"}>Specjalizujemy się w dostarczaniu kompleksowych rozwiązań hydraulicznych, takich jak:</p>
              <ul className={"list-unstyled"}>
                <li>✔ Instalacje wodno-kanalizacyjne</li>
                <li>✔ Armatura łazienkowa i kuchenna</li>
                <li>✔ Pompy i systemy ciśnieniowe</li>
                <li>✔ Ogrzewanie podłogowe oraz grzejniki</li>
                <li>✔ Profesjonalne narzędzia hydrauliczne</li>
              </ul>
            </div>
          </section>
          
          <section className={"py-5"}>
            <div className={"container text-center"}>
              <p>Dziękujemy za zaufanie! Zapraszamy do współpracy.</p>
            </div>
          </section>
        </div>
    );
}
