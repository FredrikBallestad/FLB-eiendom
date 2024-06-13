/*"use client"
import { useEffect, useState } from 'react';

interface Eiendom {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    availableFrom: string;
    leaseTerm: string;
    contactEmail: string;
    contactPhone: string;
    amenities: string[];
    utilitiesIncluded: string[];
}

const Eiendommer = () => {
  const [eiendommer, setEiendommer] = useState<Eiendom[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/Eiendommer')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setEiendommer(data))
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Eiendommer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eiendommer.map((eiendom) => (
          <div key={eiendom._id} className="border rounded-lg overflow-hidden shadow-lg p-4">
            <h2 className="text-2xl font-semibold mb-2">{eiendom.area}</h2>
            <p className="text-gray-700">{eiendom.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eiendommer;*/


"use client"
import { useEffect, useState } from "react";
import Link from 'next/link';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Page() {
    const fetchEiendommer = async () => {
        const res = await fetch("http://localhost:3000/api/Eiendommer");
        const eiendommer = await res.json();
        return eiendommer;
    };

    const [eiendommer, setEiendommer] = useState([]);

    useEffect(() => {
        fetchEiendommer().then((eiendommer) => {
            setEiendommer(eiendommer);
        });
    }, []);

    return (
        <div>
          <Header />
          <h1 className="text-3xl font-bold mb-4">Eiendommer</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {eiendommer.map((eiendom: any) => (
                    <Link href={`/eiendom/${eiendom._id}`} key={eiendom._id}>
                    <div className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-200 bg-white h-[500px] flex flex-col">
                        <img src={eiendom.image} alt={eiendom.title} className="w-full h-80 object-cover rounded-t-lg" />
                        <div className="p-4 flex-grow flex flex-col">
                            <h2 className="text-xl font-bold mb-2">{eiendom.title}</h2>
                            <p className="mb-2 flex-grow overflow-hidden">{eiendom.description}</p>
                            <p className="text-gray-600 mb-4">{eiendom.price} kr/mnd</p>
                            <p className="text-sm text-gray-500">Ekstra tekst eller innhold kan legges til her.</p>
                        </div>
                    </div>
                </Link>
                ))}
          </div>
      </div>
    );
}