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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 lg:px-8 mt-16 mb-16">
                {eiendommer.map((eiendom: any) => (
                    <Link href={`/Eiendommer/${eiendom.slug}`} key={eiendom.slug}>
                        <div className="border rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-200 bg-white h-[500px] flex flex-col p-4">
                            {eiendom.propertyFrontImage ? (
                                <img
                                    src={eiendom.propertyFrontImage}
                                    alt={eiendom.title}
                                    className="w-full object-cover rounded-t-lg"
                                    style={{ height: '25rem' }}
                                    onError={(e) => {
                                        console.error(`Error loading image: ${eiendom.propertyFrontImage}`);
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null;
                                        target.src = 'https://via.placeholder.com/300';
                                    }}
                                />
                            ) : (
                                <div className="w-full h-60 bg-gray-200 rounded-t-lg flex items-center justify-center">
                                    <span className="text-gray-500">No Image Available</span>
                                </div>
                            )}
                            <div className="mt-4 px-4 text-center" style={{ fontFamily: 'Times New Roman, serif' }}>
                                  <p className="text-xl italic text-gray-700 mb-4">{eiendom.location}</p>
                                  <h2 className="text-3xl font-bold mt-4 mb-4 text-gray-900">{eiendom.address}</h2>
                                  <div className="flex justify-center space-x-12 text-gray-600 mt-4">
                                      <div className="flex items-center">
                                          <FontAwesomeIcon icon={faBed} className="text-2xl mr-2" />
                                          <p className="text-2xl">{eiendom.bedrooms}</p>
                                      </div>
                                      <div className="flex items-center">
                                          <FontAwesomeIcon icon={faBath} className="text-2xl mr-2" />
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