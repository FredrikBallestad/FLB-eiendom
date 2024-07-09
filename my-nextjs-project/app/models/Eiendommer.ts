import mongoose, { Document, Schema } from "mongoose";

interface IRoom {
    title: string;
    description: string;
    price: number;
    size: number;
    availableFrom: Date;
    isAvailable: Boolean
}

interface IEiendom extends Document {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    slug: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    availableFrom: Date;
    leaseTerm: string;
    contact: {
        email: string;
        phone: string;
    };
    amenities: string[];
    utilitiesIncluded: string[];
    latitude: number;
    longitude: number;
    images: string[];
    rooms: IRoom[];
}

//Roomschema is a part of the eiendomSchema
const RoomSchema: Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    availableFrom: {
        type: Date,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        required: true,
    },
});

const eiendomSchema: Schema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    slug: {
         type: String, 
         required: true, 
         unique: true 
        },
    price: {
        type: Number,
        required: true,
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    bathrooms: {
        type: Number,
        required: true,
    },
    area: {
        type: Number,
        required: true,
    },
    availableFrom: {
        type: Date,
        required: true,
    },
    leaseTerm: {
        type: String,
        required: true,
    },
    contact: {
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
    },
    amenities: {
        type: [String],
        required: true,
    },
    utilitiesIncluded: {
        type: [String],
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    images: {
        type: [String], 
        required: true,
    },
    rooms: [RoomSchema]
});

// Opprett modellen basert på skjemaet og det nye Eiendom-grensesnittet
const Eiendom = 
mongoose.models.Eiendom || mongoose.model<IEiendom>("Eiendom", eiendomSchema);

export default Eiendom;

/*import { Document, Schema, model, models } from 'mongoose';

interface IRoom extends Document {
  title: string;
  description: string;
  price: number;
  size: number;
  availableFrom: Date;
  isAvailable: Boolean;
}

interface IEiendom extends Document {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  address: string;
  slug: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  availableFrom: Date;
  leaseTerm: string;
  contact: {
    email: string;
    phone: string;
  };
  amenities: string[];
  utilitiesIncluded: string[];
  latitude: number;
  longitude: number;
  images: string[];
  rooms: IRoom[]; // Include rooms as an array of IRoom
}

const RoomSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: Number, required: true },
  availableFrom: { type: Date, required: true },
  isAvailable: { type: Boolean, required: true },
});

const eiendomSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  address: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  area: { type: Number, required: true },
  availableFrom: { type: Date, required: true },
  leaseTerm: { type: String, required: true },
  contact: {
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  amenities: { type: [String], required: true },
  utilitiesIncluded: { type: [String], required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  images: { type: [String], required: true },
  rooms: [RoomSchema], // Include rooms here
});

const Eiendom = models.Eiendom || model<IEiendom>('Eiendom', eiendomSchema);
export default Eiendom;
*/



