export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-10 min-h-[400px]"> {/* Oppdatert min-h til 400px */}
        <div>
          {/* Din logo og kontaktinfo her */}
          <img src="/images/FLB-eiendom-logo.webp" alt="FLB Eiendom Logo" className="w-32 mb-4" />
          <p className="text-lg">+47 41250820</p> {/* Økt tekststørrelse */}
          <p className="text-lg">FLB-eiendom@gmail.com</p> {/* Økt tekststørrelse */}
          <p className="text-lg">FLB Asset Management</p> {/* Økt tekststørrelse */}
          <p className="text-lg">3746 Skien</p> {/* Økt tekststørrelse */}
        </div>
        <div>
          {/* Navigasjonslinker */}
          <h3 className="text-xl font-semibold mb-4">Navigasjon</h3> {/* Økt tekststørrelse */}
          <ul>
            <li><a href="/" className="text-lg">Hjem</a></li> {/* Økt tekststørrelse */}
            <li><a href="/eiendommer" className="text-lg">Eiendommer</a></li> {/* Økt tekststørrelse */}
            <li><a href="/om" className="text-lg">Om oss</a></li> {/* Økt tekststørrelse */}
            <li><a href="/partnere" className="text-lg">Partnere</a></li> {/* Økt tekststørrelse */}
            <li><a href="/kontakt" className="text-lg">Kontakt</a></li> {/* Økt tekststørrelse */}
          </ul>
        </div>
        {/* Ytterligere kolonner kan legges til her om nødvendig */}
        {/* Husk å inkludere ikoner for sosiale medier */}
      </div>
      <div className="border-t border-gray-700 text-center mt-8 pt-8 text-base"> {/* Økt tekststørrelse */}
        <p>© 2024 FLB Eiendom. Alle rettigheter reservert.</p>
      </div>
    </footer>
  );
}
