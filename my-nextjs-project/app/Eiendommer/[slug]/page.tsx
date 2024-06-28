import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import dbConnect from '../../lib/dbConnect';
import Eiendom from '../../models/Eiendommer';

async function getEiendom(slug: string) {
  await dbConnect();
  const eiendom = await Eiendom.findOne({ slug }).lean();
  return JSON.parse(JSON.stringify(eiendom));
}

const EiendomDetails = async ({ params }: { params: { slug: string } }) => {
  const eiendom = await getEiendom(params.slug);

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{eiendom.address}</h1>
        <img
          src={eiendom.imageUrl}
          alt={eiendom.title}
          className="w-full object-cover rounded-lg mb-4"
        />
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
      <Footer />
    </div>
  );
};

export default EiendomDetails;
