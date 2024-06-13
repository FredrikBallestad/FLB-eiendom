"use client"
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

export default Eiendommer;


