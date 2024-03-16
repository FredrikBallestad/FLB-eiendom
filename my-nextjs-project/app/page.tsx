import Image from "next/image";
import Header from './Components/Header'; // Husk å bruke riktig sti til Header-komponenten

function Page() {
  return (
    <div>
      <Header />
      <main>
        {/* Ditt sideinnhold her */}
        <h1>Welcome to Our Site</h1>
        <p>This is a paragraph with some information about your page.</p>
        {/* Flere innholdselementer her */}
      </main>
      <footer>
        {/* Ditt footerinnhold her */}
        <p>© 2024 MMJ Eiendom</p>
      </footer>
    </div>
  );
}

export default Page;

