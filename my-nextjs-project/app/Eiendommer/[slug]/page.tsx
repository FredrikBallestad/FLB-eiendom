/*import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import dbConnect from '../../lib/dbConnect';
import Eiendom from '../../models/Eiendommer';
import EiendomImageGalleryClient from './EiendomImageGalleryClient';

async function getEiendom(slug: string) {
  await dbConnect();
  const eiendom = await Eiendom.findOne({ slug }).lean();
  console.log("Eiendom hentet fra DB:", eiendom);
  return JSON.parse(JSON.stringify(eiendom));
}

const EiendomDetails = async ({ params }: { params: { slug: string } }) => {
  const eiendom = await getEiendom(params.slug);

  return (
    <div>
      <Header />
      <EiendomImageGalleryClient eiendom={eiendom} />
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

export default EiendomDetails;*/


import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import dbConnect from '../../lib/dbConnect';
import Eiendom from '../../models/Eiendommer';
import EiendomImageGalleryClient from './EiendomImageGalleryClient';

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

  return (
    <div>
      <Header />
        <EiendomImageGalleryClient images={eiendom.images} />
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
