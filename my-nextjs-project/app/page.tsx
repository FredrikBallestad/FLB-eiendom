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
      <main>
        {/* Ditt sideinnhold her */}
        <h1>Welcome to Our Site</h1>
        <p>This is a paragraph with some information about your page.</p>
        {/* Flere innholdselementer her */}
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
      <Footer />
        {/* Ditt footerinnhold her */}
        <p>© 2024 FLB Eiendom</p>
    </div>
  );
}

export default Page;

