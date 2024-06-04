import Head from 'next/head';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Kontakt() {
  return (
    <>
      <Header />

      <div className="bg-white text-center py-20">
        <h1 className="text-6xl font-bold mb-4">Vi vil gjerne høre fra deg</h1>
        <p className="text-2xl mx-auto leading-relaxed max-w-xl">
          Ser du etter den perfekte boligen eller et ideelt nabolag for ditt neste hjem, eller er du interessert i å utforske mulighetene for FLB eiendom? Vi inviterer deg til å ta initiativ ved å fylle ut vårt kontaktskjema. For eventuelle andre henvendelser eller for mer direkte kommunikasjon, nøl ikke med å nå ut til oss via e-post eller telefon. Vi ser frem til å høre fra deg!
        </p>
      </div>

      <div className="bg-white max-w-lg mx-auto p-8 my-10 shadow-lg rounded">
        <h1 className="text-2xl font-bold text-center mb-6">Kontakt Oss</h1>
        <form className="space-y-6">

          <div>
            <label htmlFor="navn" className="block text-sm font-medium text-gray-700">Navn</label>
            <input type="text" id="navn" name="navn" className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm" required />
          </div>

          <div>
            <label htmlFor="epost" className="block text-sm font-medium text-gray-700">E-post</label>
            <input type="email" id="epost" name="epost" className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm" required />
          </div>
          
          <div>
            <label htmlFor="telefon" className="block text-sm font-medium text-gray-700">Telefon</label>
            <input type="telefon" id="telefon" name="telefon" className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm" required />
          </div>

          <div>
            <label htmlFor="melding" className="block text-sm font-medium text-gray-700">Melding</label>
            <textarea id="melding" name="melding" className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm" rows={4} required></textarea>
          </div>

          <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-200">
            Send Melding
          </button>

        </form>
      </div>

      <Footer />
    </>
  );
}

