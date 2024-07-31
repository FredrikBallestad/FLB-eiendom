import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import dbConnect from '../../lib/dbConnect';
import Eiendom from '../../models/Eiendommer';
import EiendomImageGalleryClient from './EiendomImageGalleryClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faCheck, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

async function getEiendom(slug: string) {
  await dbConnect();
  const eiendom = await Eiendom.findOne({ slug }).lean();
  return JSON.parse(JSON.stringify(eiendom));
}

interface EiendomDetailsProps {
  params: { slug: string };
}

const EiendomDetails = async ({ params }: EiendomDetailsProps) => {
  const eiendom = await getEiendom(params.slug);
  const ledigeRom = eiendom.rooms.filter((room: any) => room.isAvailable).length;

  return (
    <div>
      <Header />
      <EiendomImageGalleryClient images={eiendom.images} />

      <div className="flex bg-gray-100">
        <div className="w-3/5 p-6 overflow-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center" >{eiendom.address}</h2>
          <p className="text-lg mb-4 text-center px-6">{eiendom.description}</p>
          {eiendom.rooms.map((room: any) => (
            <div key={room.roomNumber} className="mb-6 border p-4 rounded-lg bg-white">
              <h2 className="text-xl font-semibold mb-2">Rom {room.roomNumber} - kr {room.price}</h2>
              <ul className="list-disc list-inside mb-2">
                <li>Ca. {room.size} m²</li>
                <li>{room.description}</li>
              </ul>
              <div className="flex justify-between items-center">
                <button className={`px-4 py-2 rounded-full ${room.isAvailable ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                  {room.isAvailable ? 'Ledig' : 'Utleid'}
                </button>
                <button className="px-4 py-2 border rounded-full text-black bg-white">
                  Se rom
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-2/5 p-6 bg-gray-100 flex items-start justify-center">
          <div className="sticky top-48">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">{eiendom.address}</h2>
              <div className="mb-4">
                <FontAwesomeIcon icon={faBed} className="h-6 w-6 inline-block" />
                <span className="ml-2">{eiendom.bedrooms} Soverom</span>
              </div>
              <div className="mb-4">
                <FontAwesomeIcon icon={faBath} className="h-6 w-6 inline-block" />
                <span className="ml-2">{eiendom.bathrooms} Bad</span>
              </div>
              <div className="mb-4">
                <FontAwesomeIcon icon={faCheck} className="h-6 w-6 inline-block" />
                <span className="ml-2">{ledigeRom} Ledig(e) rom</span>
              </div>
              <div className="mb-4">
                <FontAwesomeIcon icon={faRulerCombined} className="h-6 w-6 inline-block" />
                <span className="ml-2">{eiendom.area} m²</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export async function generateStaticParams() {
  await dbConnect();
  const eiendoms = await Eiendom.find({}, 'slug').lean();
  return eiendoms.map((eiendom: any) => ({
    slug: eiendom.slug,
  }));
}

export default EiendomDetails;
