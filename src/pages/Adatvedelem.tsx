import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Adatvedelem = () => {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Adatvédelmi és Adatkezelési Tájékoztató</h1>
          <div className="space-y-6 text-lg">
            <p className="text-muted-foreground">Hatálybalépés napja: 2025. október 27.</p>

            <p>
              A <strong>CleanPro Kft.</strong> (a továbbiakban: "Adatkezelő", "mi") elkötelezett a weboldalunk látogatói és szolgáltatásaink igénybe vevői (a továbbiakban: "Felhasználó", "Ön") személyes adatainak védelme iránt. Ez a tájékoztató bemutatja, hogy milyen személyes adatokat gyűjtünk, hogyan használjuk fel és védjük azokat, valamint milyen jogai vannak Önnek az adatkezeléssel kapcsolatban, összhangban az Európai Unió Általános Adatvédelmi Rendeletével (GDPR).
            </p>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">1. Az Adatkezelő adatai</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Cégnév:</strong> CleanPro Kft.</li>
                <li><strong>Székhely:</strong> 1234 Budapest, Minta utca 1.</li>
                <li><strong>E-mail cím:</strong> info@cleanpro.hu</li>
                <li><strong>Adatvédelemért felelős személy:</strong> [Név/Beosztás, ha van kijelölt]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">2. A kezelt személyes adatok köre, az adatkezelés célja és jogalapja</h2>
              
              <h3 className="text-2xl font-semibold mt-6 mb-2">2.1. Kapcsolatfelvétel és ajánlatkérés</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Kezelt adatok:</strong> Név, e-mail cím, telefonszám, cégnév, iroda címe, iroda mérete, takarítás gyakorisága, preferált kezdési időpont.</li>
                <li><strong>Az adatkezelés célja:</strong> Az Önnel való kapcsolatfelvétel, az Ön által kért árajánlat elkészítése és megküldése, valamint a szerződéskötést megelőző egyeztetések lefolytatása.</li>
                <li><strong>Az adatkezelés jogalapja:</strong> Az Ön hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont), amelyet az űrlap kitöltésével és az adatvédelmi tájékoztató elfogadásával ad meg.</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-2">2.2. Sütik (Cookie-k) kezelése</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Kezelt adatok:</strong> A weboldal használatával kapcsolatos technikai adatok (pl. IP-cím, böngésző típusa, látogatás időpontja, megtekintett oldalak).</li>
                <li><strong>Az adatkezelés célja:</strong> A weboldal funkcionalitásának biztosítása, a felhasználói élmény javítása, a weboldal forgalmának elemzése és marketing célú felhasználás.</li>
                <li><strong>Az adatkezelés jogalapja:</strong> Az Ön hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont), amelyet a süti-figyelmeztető sávon keresztül adhat meg. A működéshez elengedhetetlenül szükséges sütik esetében a jogalap az Adatkezelő jogos érdeke (GDPR 6. cikk (1) bekezdés f) pont).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">3. Az adatkezelés időtartama</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Ajánlatkérés esetén:</strong> Az adatokat az ajánlat érvényességi idejéig, illetve a szerződés létrejöttéig kezeljük. Amennyiben nem jön létre szerződés, az adatokat az ajánlatkéréstől számított 1 év elteltével töröljük, kivéve, ha Ön hozzájárul a további marketing célú megkeresésekhez.</li>
                <li><strong>Sütik esetén:</strong> A sütik érvényességi ideje változó, a munkamenet sütiktől (amelyek a böngésző bezárásakor törlődnek) a hosszabb ideig tárolt sütikig (melyek akár több hónapig is az Ön eszközén maradhatnak). A pontos időtartamot a süti beállításoknál tekintheti meg.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">4. Adatfeldolgozók és adattovábbítás</h2>
              <p>
                Az Adatkezelő a tevékenysége során adatfeldolgozókat vehet igénybe (pl. tárhelyszolgáltató, könyvelő, hírlevélküldő szoftver üzemeltetője). Az adatfeldolgozók a személyes adatokat kizárólag az Adatkezelő utasításai alapján, a GDPR előírásainak megfelelően kezelhetik.
              </p>
              <p className="mt-2">
                Személyes adatait harmadik országba (az EU-n/EGT-n kívülre) csak abban az esetben továbbítjuk, ha ahhoz megfelelő védelmi szint biztosított (pl. megfelelőségi határozat vagy általános adatvédelmi kikötések útján).
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">5. Az Ön jogai az adatkezeléssel kapcsolatban</h2>
              <p>Önt az alábbi jogok illetik meg a személyes adatai kezelésével kapcsolatban:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>A hozzáférés joga:</strong> Tájékoztatást kérhet arról, hogy milyen személyes adatait kezeljük.</li>
                <li><strong>A helyesbítés joga:</strong> Kérheti pontatlan személyes adatainak helyesbítését vagy a hiányos adatok kiegészítését.</li>
                <li><strong>A törléshez való jog ("az elfeledtetéshez való jog"):</strong> Kérheti személyes adatainak törlését, ha az adatkezelésnek már nincs jogalapja.</li>
                <li><strong>Az adatkezelés korlátozásához való jog:</strong> Bizonyos esetekben kérheti az adatkezelés korlátozását.</li>
                <li><strong>A tiltakozáshoz való jog:</strong> Tiltakozhat személyes adatainak kezelése ellen, ha az adatkezelés jogos érdeken alapul.</li>
                <li><strong>Az adathordozhatósághoz való jog:</strong> Kérheti, hogy az Ön által rendelkezésünkre bocsátott adatokat tagolt, széles körben használt, géppel olvasható formátumban megkapja.</li>
                <li><strong>A hozzájárulás visszavonásának joga:</strong> Bármikor visszavonhatja a hozzájárulását, ami azonban nem érinti a visszavonás előtti adatkezelés jogszerűségét.</li>
              </ul>
              <p className="mt-4">
                Fenti jogait az <a href="mailto:info@cleanpro.hu" className="text-primary underline">info@cleanpro.hu</a> e-mail címen gyakorolhatja.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">6. Jogorvoslati lehetőségek</h2>
              <p>
                Amennyiben úgy véli, hogy az adatkezelésünk nem felel meg a jogszabályi előírásoknak, panaszt tehet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH).
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11.</li>
                <li><strong>Postacím:</strong> 1363 Budapest, Pf.: 9.</li>
                <li><strong>E-mail:</strong> ugyfelszolgalat@naih.hu</li>
                <li><strong>Weboldal:</strong> https://naih.hu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">7. A tájékoztató módosítása</h2>
              <p>
                Az Adatkezelő fenntartja a jogot, hogy ezt az adatvédelmi tájékoztatót egyoldalúan módosítsa. A módosítások a weboldalon való közzététellel lépnek hatályba.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Adatvedelem;
