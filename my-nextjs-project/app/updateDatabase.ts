/*const { MongoClient } = require('mongodb');
const slugify = require('slugify');

const uri = 'mongodb+srv://FLBEIENDOM:FLBEIENDOM@cluster0.sumlq7l.mongodb.net/sample_mflix?retryWrites=true&w=majority';  // Sett inn din MongoDB tilkoblingsstreng her
const client = new MongoClient(uri);

const generateSlug = (address: string): string => {
  return slugify(address, { lower: true, strict: true });
};

const updateSlugs = async () => {
  try {
    await client.connect();
    const database = client.db('sample_mflix');  // Endre til ditt database navn
    const collection = database.collection('eiendoms');  // Endre til ditt samlingsnavn

    const eiendommer = await collection.find({ slug: { $exists: false } }).toArray();

    for (const eiendom of eiendommer) {
      const slug = generateSlug(eiendom.address);
      await collection.updateOne(
        { _id: eiendom._id },
        { $set: { slug: slug } }
      );
    }

    console.log('Alle eiendommer er oppdatert med slugs.');
  } finally {
    await client.close();
  }
};

updateSlugs().catch(console.error);*/
