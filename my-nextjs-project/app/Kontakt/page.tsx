"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    navn: '',
    epost: '',
    telefon: '',
    melding: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    console.log(`Updated ${id} to ${value}`);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sender...');
    console.log('Submitting form with data:', formData);

    try {
      const res = await fetch('http://localhost:3000/api/Kontakt', { // Sørg for at denne peker riktig
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response from API:', res);

      if (res.ok) {
        setStatus('Melding sendt!');
        setFormData({
          navn: '',
          epost: '',
          telefon: '',
          melding: '',
        });
      } else {
        setStatus('Feil ved sending av melding. Prøv igjen senere.');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setStatus('Feil ved sending av melding. Prøv igjen senere.');
    }
  };

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
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="navn" className="block text-sm font-medium text-gray-700">Navn</label>
            <input 
              type="text" 
              id="navn" 
              name="navn" 
              className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm" 
              value={formData.navn} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <label htmlFor="epost" className="block text-sm font-medium text-gray-700">E-post</label>
            <input 
              type="email" 
              id="epost" 
              name="epost" 
              className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm" 
              value={formData.epost} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="telefon" className="block text-sm font-medium text-gray-700">Telefon</label>
            <input 
              type="tel" 
              id="telefon" 
              name="telefon" 
              className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm" 
              value={formData.telefon} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <label htmlFor="melding" className="block text-sm font-medium text-gray-700">Melding</label>
            <textarea 
              id="melding" 
              name="melding" 
              className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm" 
              rows={4} 
              value={formData.melding} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-200">
            Send Melding
          </button>
        </form>
        {status && <p className="text-center mt-4">{status}</p>}
      </div>

      <Footer />
    </>
  );
}
