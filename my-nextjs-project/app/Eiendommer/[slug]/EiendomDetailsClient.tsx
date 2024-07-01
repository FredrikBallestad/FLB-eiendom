/*"use client";

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

interface EiendomDetailsClientProps {
  eiendom: any;
}

const EiendomDetailsClient: React.FC<EiendomDetailsClientProps> = ({ eiendom }) => {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    console.log("Eiendom data:", eiendom);
    if (eiendom.images && eiendom.images.length > 0) {
      const formattedImages = eiendom.images.map((url: string) => {
        console.log("Original image URL:", url);
        return {
          original: url,
          thumbnail: url,
        };
      });
      console.log("Formatted images:", formattedImages);
      setImages(formattedImages);
    }
  }, [eiendom]);

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{eiendom.address}</h1>
        {images.length > 0 ? (
          <Swiper
            key={images.length} // Dette tvinger Swiper til å reinitialisere når antall bilder endres
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log('Swiper:', swiper)}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img.original}
                  alt={`Slide ${index}`}
                  style={{ width: '100%', height: 'auto' }}
                  onLoad={() => console.log(`Image ${index} loaded`, img.original)}
                  onError={(e) => console.error(`Error loading image ${index}`, img.original, e)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>No images available</p>
        )}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <p className="text-lg mb-2"><strong>Beskrivelse:</strong> {eiendom.description}</p>
        <p className="text-lg mb-2"><strong>Pris:</strong> {eiendom.price} kr/mnd</p>
        <p className="text-lg mb-2"><strong>Soverom:</strong> {eiendom.bedrooms}</p>
        <p className="text-lg mb-2"><strong>Bad:</strong> {eiendom.bathrooms}</p>
        <p className="text-lg mb-2"><strong>Område:</strong> {eiendom.area} kvm</p>
        <p className="text-lg mb-2"><strong>Tilgjengelig fra:</strong> {eiendom.availableFrom}</p>
        <p className="text-lg mb-2"><strong>Leietid:</strong> {eiendom.leaseTerm}</p>
        <p className="text-lg mb-2"><strong>Kontakt:</strong> {eiendom.contact.email}, {eiendom.contact.phone}</p>
        <p className="text-lg mb-2"><strong>Amenities:</strong> {eiendom.amenities.join(', ')}</p>
        <p className="text-lg mb-2"><strong>Utilities Included:</strong> {eiendom.utilitiesIncluded.join(', ')}</p>
      </div>
    </div>
  );
};

export default EiendomDetailsClient;*/

"use client";

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

interface EiendomDetailsClientProps {
  eiendom: any;
}

const EiendomDetailsClient: React.FC<EiendomDetailsClientProps> = ({ eiendom }) => {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    console.log("Eiendom data:", eiendom);
    if (eiendom.images && eiendom.images.length > 0) {
      const formattedImages = eiendom.images.map((url: string) => {
        console.log("Original image URL:", url);
        return {
          original: url,
          thumbnail: url,
        };
      });
      console.log("Formatted images:", formattedImages);
      setImages(formattedImages);
    }
  }, [eiendom]);

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{eiendom.address}</h1>
        {images.length > 0 ? (
          <Swiper
            key={images.length}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log('Swiper:', swiper)}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img.original}
                  alt={`Slide ${index}`}
                  style={{ width: '100%', height: 'auto' }}
                  onLoad={() => console.log(`Image ${index} loaded`, img.original)}
                  onError={(e) => console.error(`Error loading image ${index}`, img.original, e)}
                />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        ) : (
          <p>No images available</p>
        )}
        <p className="text-lg mb-2"><strong>Beskrivelse:</strong> {eiendom.description}</p>
        <p className="text-lg mb-2"><strong>Pris:</strong> {eiendom.price} kr/mnd</p>
        <p className="text-lg mb-2"><strong>Soverom:</strong> {eiendom.bedrooms}</p>
        <p className="text-lg mb-2"><strong>Bad:</strong> {eiendom.bathrooms}</p>
        <p className="text-lg mb-2"><strong>Område:</strong> {eiendom.area} kvm</p>
        <p className="text-lg mb-2"><strong>Tilgjengelig fra:</strong> {eiendom.availableFrom}</p>
        <p className="text-lg mb-2"><strong>Leietid:</strong> {eiendom.leaseTerm}</p>
        <p className="text-lg mb-2"><strong>Kontakt:</strong> {eiendom.contact.email}, {eiendom.contact.phone}</p>
        <p className="text-lg mb-2"><strong>Amenities:</strong> {eiendom.amenities.join(', ')}</p>
        <p className="text-lg mb-2"><strong>Utilities Included:</strong> {eiendom.utilitiesIncluded.join(', ')}</p>
      </div>
    </div>
  );
};

export default EiendomDetailsClient;
