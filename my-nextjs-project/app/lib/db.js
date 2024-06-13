/*import { MongoClient } from 'mongodb';
require('dotenv').config(); // Sørg for at miljøvariabler er lastet inn

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

// Sjekk om MongoDB URI er definert i miljøvariablene
if (!uri) {
  console.log('MongoDB URI is not defined');
  throw new Error('Please add your Mongo URI to .env.local');
} else {
  // Logg URI-en for feilsøking
  console.log('MongoDB URI:', uri);
}

// Håndter oppkobling av klienten avhengig av miljø (utvikling eller produksjon)
if (process.env.NODE_ENV === 'development') {
  // Bruk global variabel for å bevare klienten i utviklingsmiljø
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Opprett en ny klient for produksjon
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Eksporter klientløftet for bruk i andre moduler
export default clientPromise;*/

/*import { MongoClient } from 'mongodb';
require('dotenv').config(); // Sørg for at miljøvariabler er lastet inn

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true, // Ny kode: Legg til SSL opsjon
};

let client;
let clientPromise;

// Sjekk om MongoDB URI er definert i miljøvariablene
if (!uri) {
  console.log('MongoDB URI is not defined');
  throw new Error('Please add your Mongo URI to .env.local');
} else {
  // Logg URI-en for feilsøking
  console.log('MongoDB URI:', uri);
}

// Håndter oppkobling av klienten avhengig av miljø (utvikling eller produksjon)
if (process.env.NODE_ENV === 'development') {
  // Bruk global variabel for å bevare klienten i utviklingsmiljø
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Opprett en ny klient for produksjon
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Eksporter klientløftet for bruk i andre */

import { MongoClient } from 'mongodb';
require('dotenv').config(); // Sørg for at miljøvariabler er lastet inn

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

// Sjekk om MongoDB URI er definert i miljøvariablene
if (!uri) {
  console.log('MongoDB URI is not defined');
  throw new Error('Please add your Mongo URI to .env.local');
} else {
  // Logg URI-en for feilsøking
  console.log('MongoDB URI:', uri);
}

// Håndter oppkobling av klienten avhengig av miljø (utvikling eller produksjon)
if (process.env.NODE_ENV === 'development') {
  // Bruk global variabel for å bevare klienten i utviklingsmiljø
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Opprett en ny klient for produksjon
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Eksporter klientløftet for bruk i andre moduler
export default clientPromise;




