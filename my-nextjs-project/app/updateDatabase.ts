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




const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb+srv://FLBEIENDOM:FLBEIENDOM@cluster0.sumlq7l.mongodb.net/sample_mflix?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function addOrUpdateRoomBySlug(slug: string, roomId: string | null, roomData: {
  title: string;
  description: string;
  price: number;
  size: number;
  availableFrom: Date;
  isAvailable: boolean;
}) {
  try {
    await client.connect();
    const database = client.db('sample_mflix');
    const collection = database.collection('eiendoms');

    const eiendom = await collection.findOne({ slug });

    if (!eiendom) {
      console.log('Eiendom not found');
      return;
    }

    if (!eiendom.rooms) {
      eiendom.rooms = [];
    }

    if (roomId) {
      const roomIndex = eiendom.rooms.findIndex((room: any) => room._id && room._id.equals(new ObjectId(roomId)));
      if (roomIndex !== -1) {
        eiendom.rooms[roomIndex] = { ...eiendom.rooms[roomIndex], ...roomData };
      } else {
        console.log('Room not found');
        return;
      }
    } else {
      const newRoom = { ...roomData, _id: new ObjectId() };
      eiendom.rooms.push(newRoom);
    }

    await collection.updateOne(
      { slug },
      { $set: { rooms: eiendom.rooms } }
    );
    console.log(roomId ? 'Room updated successfully' : 'Room added successfully');
  } catch (error) {
    console.error('Error updating or adding room:', error);
  } finally {
    await client.close();
  }
}

// Eksempel på hvordan du kan bruke funksjonen for å oppdatere et rom

const updatedRoomData = {
  title: "Rom 2",
  description: "Oppdatert beskrivelse",
  price: 4500,
  size: 8,
  availableFrom: new Date("2024-08-01"),
  isAvailable: true,
};

addOrUpdateRoomBySlug('johan-schaanningsgate-86b', null, updatedRoomData).catch(console.error);

// Eksempel på hvordan du kan bruke funksjonen for å opprette et nytt rom

/*const newRoomData = {
  title: "Nytt Rom 1",
  description: "Beskrivelse av nytt rom",
  price: 6000,
  size: 15,
  availableFrom: new Date("2024-09-01"),
  isAvailable: true,
};*/

// Uncomment this line to add a new room
// addOrUpdateRoomBySlug('din-slug-her', null, newRoomData).catch(console.error);
