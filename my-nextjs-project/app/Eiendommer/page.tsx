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

    /*return (
      <div>
          <Header />
          <h1 className="text-3xl font-bold mb-4">Eiendommer</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {eiendommer.map((eiendom: any) => (
                  <Link href={`/eiendom/${eiendom._id}`} key={eiendom._id}>
                      <div className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-200 bg-white h-[500px] flex flex-col">
                          {eiendom.imageUrl ? (
                              <img
                                  src={eiendom.imageUrl}
                                  alt={eiendom.title}
                                  className="w-full h-80 object-cover rounded-t-lg"
                                  onError={(e) => {
                                      console.error(`Error loading image: ${eiendom.imageUrl}`);
                                      const target = e.target as HTMLImageElement;
                                      target.onerror = null;
                                      target.src = 'https://via.placeholder.com/300';
                                  }}
                              />
                          ) : (
                              <div className="w-full h-80 bg-gray-200 rounded-t-lg flex items-center justify-center">
                                  <span className="text-gray-500">No Image Available</span>
                              </div>
                          )}
                          <div className="p-4 flex-grow flex flex-col">
                              <h2 className="text-xl font-bold mb-2">{eiendom.address}</h2>
                              <p className="mb-2 flex-grow overflow-hidden">{eiendom.description}</p>
                              <p className="text-gray-600 mb-4">{eiendom.price} kr/mnd</p>
                              <p className="text-sm text-gray-500">Ekstra tekst eller innhold kan legges til her.</p>
                          </div>
                      </div>
                  </Link>
              ))}
          </div>
          <Footer />
      </div>
    )*/

    return (
      <div>
          <Header />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-8 mt-8"> {/* Legger til padding her */}
              {eiendommer.map((eiendom: any) => (
                  <Link href={`/eiendom/${eiendom._id}`} key={eiendom._id}>
                      <div className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-200 bg-white h-[600px] flex flex-col p-2"> {/* Legger til padding rundt innholdet i hver boks */}
                          {eiendom.imageUrl ? (
                              <img
                                  src={eiendom.imageUrl}
                                  alt={eiendom.title}
                                  className="w-full object-cover rounded-t-lg" style={{ height: '25rem' }} /* Justerer høyden direkte i stilen */
                                  onError={(e) => {
                                      console.error(`Error loading image: ${eiendom.imageUrl}`);
                                      const target = e.target as HTMLImageElement;
                                      target.onerror = null;
                                      target.src = 'https://via.placeholder.com/300';
                                  }}
                              />
                          ) : (
                              <div className="w-full h-60 bg-gray-200 rounded-t-lg flex items-center justify-center"> {/* Endret høyden her */}
                                  <span className="text-gray-500">No Image Available</span>
                              </div>
                          )}
                          <div className="mt-4"> {/* Margin-top for å skille bildet fra teksten */}
                              <h2 className="text-xl font-bold mb-2">{eiendom.address}</h2>
                              <p className="mb-2 overflow-hidden text-ellipsis">{eiendom.description}</p>
                              <p className="text-gray-600">{eiendom.price} kr/mnd</p>
                              <p className="text-sm text-gray-500">Ekstra tekst eller innhold kan legges til her.</p>
                          </div>
                      </div>
                  </Link>
              ))}
          </div>
          <Footer />
      </div>
    )
}