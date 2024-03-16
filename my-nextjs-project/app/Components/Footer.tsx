// components/Footer.js eller components/Footer.tsx hvis du bruker TypeScript
export default function Footer() {
    return (
      <footer className="bg-black text-white p-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {/* Din logo og kontaktinfo her */}
            <img src="/logo.png" alt="FLB Eiendom Logo" className="w-32 mb-4" />
            <p>+47 41250820</p>
            <p>FLB-eiendom@gmail.com</p>
            <p>FLB Asset Management</p>
            <p>3746 Skien</p>
          </div>
          <div>
            {/* Navigasjonslinker */}
            <h3 className="text-lg font-semibold mb-4">Navigasjon</h3>
            <ul>
              <li><a href="/">Hjem</a></li>
              <li><a href="/eiendommer">Eiendommer</a></li>
              <li><a href="/om">Om oss</a></li>
              <li><a href="/partnere">Partnere</a></li>
              <li><a href="/kontakt">Kontakt</a></li>
            </ul>
          </div>
          {/* Ytterligere kolonner kan legges til her om nødvendig */}
          {/* Husk å inkludere ikoner for sosiale medier */}
        </div>
        <div className="border-t border-gray-700 text-center mt-8 pt-8 text-sm">
          <p>© 2024 FLB Eiendom. Alle rettigheter reservert.</p>
        </div>
      </footer>
    );
  }
  