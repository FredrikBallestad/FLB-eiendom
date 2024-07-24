const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://FLBEIENDOM:FLBEIENDOM@cluster0.sumlq7l.mongodb.net/sample_mflix?retryWrites=true&w=majority';
const client = new MongoClient(uri);


//Legger til et rom dersom det ikke eksisterer eller oppdaterer romdata til en eiendom dersom rommet allerede eksisterer. 
async function addOrUpdateRoomBySlug(slug: string, roomData: {
  roomNumber: number;
  title: string;
  description: string;
  price: number;
  size: number;
  availableFrom: Date;
  isAvailable: boolean;
  images: string[];
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

    const roomIndex = eiendom.rooms.findIndex((room: any) => room.roomNumber === roomData.roomNumber);
    //Hvis roomIndex > -1 betyr det at rommet eksisterer
    if (roomIndex > -1) {
      // Oppdater det spesifikke rommet
      eiendom.rooms[roomIndex] = { ...eiendom.rooms[roomIndex], ...roomData };
      console.log('Room updated successfully');
    } else {
      // Opprett et nytt rom
      eiendom.rooms.push(roomData);
      console.log('Room added successfully');
    }

    await collection.updateOne({ slug }, { $set: { rooms: eiendom.rooms } });
  } catch (error) {
    console.error('Error updating or adding room:', error);
  } finally {
    await client.close();
  }
}

// Eksempel på hvordan du kan bruke funksjonen for å oppdatere et rom eller oppdatere et rom

const updatedRoomData = {
  roomNumber: 6,
  title: "Oppdatert Rom 6",
  description: "Oppdatert beskrivelse",
  price: 4500,
  size: 10,
  availableFrom: new Date("2024-08-01"),
  isAvailable: true,
  images: [ 
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg'
  ],
};

//Kjører funksjonen med eiendommen man ønsker å påvirke med romdata som gjør at man enten legger til et nytt rom eller endrer eksisterende romdata til et spesifikt rom. 
//addOrUpdateRoomBySlug('johan-schaanningsgate-86b', updatedRoomData).catch(console.error);

//Legger til bilder for rom basert på slug og romnummer. images er listen som legger til de rette bildene.
async function addImagesToRoom(slug: string, roomNumber: number, images: string[]) {
  try {
    await client.connect();
    const database = client.db('sample_mflix');  // Endre til ditt database navn
    const collection = database.collection('eiendoms');  // Endre til ditt samlingsnavn

    const eiendom = await collection.findOne({ slug });

    if (!eiendom) {
      console.log('Eiendom not found');
      return;
    }

    const roomIndex = eiendom.rooms.findIndex((room: any) => room.roomNumber === roomNumber);
    if (roomIndex > -1) {
      // Legg til bilder til det spesifikke rommet
      eiendom.rooms[roomIndex].images = eiendom.rooms[roomIndex].images || [];
      eiendom.rooms[roomIndex].images.push(...images);
      console.log('Images added successfully');
    } else {
      console.log('Room not found');
      return;
    }

    await collection.updateOne({ slug }, { $set: { rooms: eiendom.rooms } });
  } catch (error) {
    console.error('Error adding images to room:', error);
  } finally {
    await client.close();
  }
}

// Eksempel på hvordan du kan bruke funksjonen for å legge til bilder til et rom
const newImages = [
  "https://example.com/image3.jpg",
  "https://example.com/image4.jpg",
];

//Kjører funksjonen der man spesifiserer addressen, hvilken rom det gjelder og til slutt listen av bilder man ønsker å legge til
//addImagesToRoom('johan-schaanningsgate-86b', 1, newImages).catch(console.error);
