import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import dbConnect from '../../lib/dbConnect';
import Eiendom from '../../models/Eiendommer';
import EiendomImageGalleryClient from './EiendomImageGalleryClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faCheck } from '@fortawesome/free-solid-svg-icons';

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
      
      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold">{eiendom.address}</h2>
        <p className="text-lg">{eiendom.description}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faBed} className="h-6 w-6" />
            <span>{eiendom.bedrooms} </span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faBath} className="h-6 w-6" />
            <span>{eiendom.bathrooms}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faCheck} className="h-6 w-6" />
            <span>{ledigeRom} Ledig(e) rom</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        {eiendom.rooms.map((room: any) => (
          <div key={room.roomNumber} className="mb-6 border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Rom {room.roomNumber} - kr {room.price}</h2>
            <ul className="list-disc list-inside mb-2">
              <li>Ca. {room.size} m²</li>
              <li>{room.description}</li>
            </ul>
            <div className="flex justify-between items-center">
              <button className={`px-4 py-2 rounded ${room.isAvailable ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                {room.isAvailable ? 'Ledig' : 'Utleid'}
              </button>
              <button className="px-4 py-2 border rounded text-black">
                Se rom
              </button>
            </div>
          </div>
        ))}
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
