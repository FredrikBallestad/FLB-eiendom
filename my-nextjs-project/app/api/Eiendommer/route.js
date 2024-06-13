/*import clientPromise from '../../lib/db';

export default async (req, res) => {
    const client = await clientPromise;
    const db = client.db('sample_mflix');

    switch (req.method) { 
        case 'GET':
            const eiendommer = await db.collection('Eiendommer').find({}).toArray();
            res.status(200).json(eiendommer);
            break;

        case 'POST':
            const newComment = req.body;
            await db.collection('Eiendommer').insertOne(newComment);
            res.status(201).json({ status: 'ok' });
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`); 
    }
};*/

/*import clientPromise from '../../lib/db'; // Importerer clientPromise riktig

// GET handler
async function getHandler(req, res) {
  const client = await clientPromise;
  const db = client.db('sample_mflix');
  const eiendommer = await db.collection('Eiendommer').find({}).toArray();
  res.status(200).json(eiendommer);
}

// POST handler
async function postHandler(req, res) {
  const client = await clientPromise;
  const db = client.db('sample_mflix');
  const newEiendom = req.body;
  await db.collection('Eiendommer').insertOne(newEiendom);
  res.status(201).json({ status: 'ok' });
}

// Hovedhandler for API-forespørsler
export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      await getHandler(req, res);
      break;
    case 'POST':
      await postHandler(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}*/

import clientPromise from '../../lib/db'; // Korrekt import

// Håndter GET-forespørsler
export async function GET(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const eiendommer = await db.collection('Eiendommer').find({}).toArray();
    res.status(200).json(eiendommer);
  } catch (error) {
    console.error('Error handling GET request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Håndter POST-forespørsler
export async function POST(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const newEiendom = req.body;
    await db.collection('Eiendommer').insertOne(newEiendom);
    res.status(201).json({ status: 'ok' });
  } catch (error) {
    console.error('Error handling POST request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Eksporter GET og POST metoder navngitt
export { GET, POST };
