"use client"
import { useEffect, useState } from "react";
import Link from 'next/link';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MapComponent from '../Components/MapComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath } from '@fortawesome/free-solid-svg-icons';

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-8 mt-8 mb-8"> {/* Legger til padding her */}
          
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
                          <div className="mt-4 px-4 text-center">
                                <p className="text-lg italic text-gray-500">{eiendom.location}</p>
                                <h2 className="text-2xl font-bold mt-6 mb-2">{eiendom.address}</h2>
                                <div className="flex justify-center space-x-16 text-gray-600 mt-8">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faBed} className="text-2xl mr-1" />
                                        <p className="text-2xl">{eiendom.bedrooms}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faBath} className="text-2xl mr-1" />
                                        <p className="text-2xl">{eiendom.bathrooms}</p>
                                    </div>
                                </div>
                            </div> 
                      </div>
                  </Link>
              ))}
          </div>
          <MapComponent eiendommer={eiendommer} />
          <Footer />
      </div>
    )
}