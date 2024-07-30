updateRoom:


funksjon addOrUpdateRoomBySlug:

I denne funksjonen tar jeg inn en slug og roommData. Jeg kan lage en updatedRoomData som tar inn verdiene jeg ønsker å bruke. Hvis romnummer eksisterer fra før endrer jeg på informasjonen på rommet. Hvis romnummeret ikke finnes fra før oppretter jeg et nytt rom. Dette skriptet brukes til å oppdatere eller legge til rom i en eiendom basert på slug.

Eksempel på updatedRoomData

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

Til slutt kan jeg for eksemepl kjøre addOrUpdateRoomBySlug('johan-schaanningsgate-86b', updatedRoomData).catch(console.error); som inneholder slugen til eiendommen jeg ønsker å endre romdata eller legge til romdata på. updatedRoomData er romdataen man setter inn.

Til slutt kan jeg gå til mappen updateDataBase og kjøre kommandoen ts-node updateRoom.ts for å opprette eller endre romdata

funksjon addImagesToRoom:

Denne funksjonen legger til bilder for i listen av bilder for et rom. I funksjonen skriver man inn slug, deretter romtall og så legger man også inn en liste med bildene man ønsker å legge til. 
Listen kan se slik ut:
const newImages = [
  "https://example.com/image3.jpg",
  "https://example.com/image4.jpg",
];





updateSlug:

Dette skriptet er designet for å oppdatere slugs for eiendommer som mangler en slug i databasen. En slug er en URL-vennlig streng som ofte brukes til å identifisere ressurser på en lesbar måte. Til slutt kan jeg gå til mappen updateDataBase og kjøre kommandoen ts-node updateSlug.ts for å legge til slug. 

.........