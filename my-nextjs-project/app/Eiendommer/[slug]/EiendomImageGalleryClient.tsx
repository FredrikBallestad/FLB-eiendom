/*"use client";

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

interface EiendomImageGalleryClientProps {
  eiendom: any;
}

const EiendomImageGalleryClient: React.FC<EiendomImageGalleryClientProps> = ({ eiendom }) => {
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
    </div>
  );
};

export default EiendomImageGalleryClient;*/




"use client";

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';


SwiperCore.use([Navigation, Pagination, Thumbs]);

interface EiendomImageGalleryClientProps {
  images: string[];
}

const EiendomImageGalleryClient: React.FC<EiendomImageGalleryClientProps> = ({ images }) => {
  const [formattedImages, setFormattedImages] = useState<any[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  useEffect(() => {
    if (images && images.length > 0) {
      const formatted = images.map((url: string) => ({
        original: url,
        thumbnail: url,
      }));
      setFormattedImages(formatted);
    }
  }, [images]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setThumbsSwiper(null); // Reset the thumbs swiper to avoid errors
  };

  return (
    <div>
      {formattedImages.length > 0 && (
        <div>
          <img
            src={formattedImages[0].original}
            alt="First Image"
            className="w-full h-auto"
            onLoad={() => console.log('First image loaded')}
            onError={(e) => console.error('Error loading first image', e)}
          />
          <button
            onClick={openModal}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Se bilder
          </button>
        </div>
      )}
      {modalIsOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <div className="relative bg-transparent w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-lg shadow-lg z-50">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-900 bg-gray-300 rounded-full p-2 focus:outline-none z-50"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <Swiper
              key={formattedImages.length}
              spaceBetween={10}
              slidesPerView={1}
              navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
              pagination={{ clickable: true }}
              thumbs={{ swiper: thumbsSwiper }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log('Swiper:', swiper)}
              className="bg-transparent rounded-lg max-h-[75vh]"
              style={{ height: '75vh' }} // Set height to 75vh
            >
              {formattedImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img.original}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-contain"
                    onLoad={() => console.log(`Image ${index} loaded`, img.original)}
                    onError={(e) => console.error(`Error loading image ${index}`, img.original, e)}
                  />
                </SwiperSlide>
              ))}
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={8}
              freeMode={true}
              watchSlidesProgress={true}
              className="mt-2"
            >
              {formattedImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img.thumbnail}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-full cursor-pointer object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default EiendomImageGalleryClient;
