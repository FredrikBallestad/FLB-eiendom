import Image from "next/image";
import Header from './Components/Header'; // Husk å bruke riktig sti til Header-komponenten
import Footer from './Components/Footer';

function Page() {
  return (
    <div>
      <Header />
      
      <div className="relative w-full h-screen">
        {/* Her antar vi at bildet er lagret i public/images mappen */}
        <Image
          src="/images/Porsrgunn.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Bakgrunnsbilde"
        />
      </div>

      <main className="bg-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Litt om oss</h1>
          <p className="text-2xl mb-8">
            FLB eiendom er et eiendomsfirma med boliger av høy kvalitet i Porsgrunn. Alle boligene er i umiddelbar nærhet til USN og Porsgrunn sentrum. I FLB eiendom er vi opptatt av at leietakerne våre skal trives.
          </p>
          <button className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-300">
            Om oss
          </button>
        </div>
      </main>


      <div className="bg-white w-full py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center">
          {/* Tekstseksjon 2/3 */}
          <div className="w-full md:w-2/3">
            <h2 className="text-6xl font-bold mb-4">Digital leiekontrakt</h2>
            <p className="text-2x1 mb-4">Vi bruker en leiekontrakt fra forbrukerrådet som utgangspunkt slik at det ikke dukker opp noen overraskelser. Kontraktsinngåelse gjøres med BankID og vi har 3D-visninger for leietakere som ikke har mulighet til å reise til Porsgrunn for innflytting.</p>
          </div>
          {/* Bilde 1/3 */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <img src="/images/Kontrakt.webp" alt="Ikon" className="max-w-xs w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="bg-white w-full py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center">
          {/* Tekstseksjon 2/3 */}
          <div className="w-full md:w-2/3">
            <h2 className="text-6xl font-bold mb-4">Alt inkludert</h2>
            <p className="text-2x1 mb-4">Våre boliger er full møblert og har høy standard. Alle soverom har gode senger, store skap og en pult med en stol. Derfor slipper du å kjøpe nye møbler om du velger våre boliger. Raskt internett og elektristet er også inkulder i leien. </p>
          </div>
          {/* Bilde 1/3 */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <img src="/images/møblert.webp" alt="Ikon" className="max-w-xs w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="bg-white w-full py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center">
          {/* Tekstseksjon 2/3 */}
          <div className="w-full md:w-2/3">
            <h2 className="text-6xl font-bold mb-4">God Standard</h2>
            <p className="text-2x1 mb-4">Alle boligene er nylig pusset opp og de vil kontinuerlig vedlikeholdes. Eiendommene vi leier ut er utstyrt med kodelås. Da slipper du å bekymre deg for å miste nøkkelen. Alle soverommene er også godkjente soverom i henhold til kravene. Vi er opptatt av at våre leietagere får en god opplevelse fra å leie hos oss </p>
          </div>
          {/* Bilde 1/3 */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <img src="/images/god-standard.webp" alt="Ikon" className="max-w-xs w-full h-auto" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;

