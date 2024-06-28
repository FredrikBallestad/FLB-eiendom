import mongoose, { Document, Schema } from "mongoose";

// Definer det nye Eiendom-grensesnittet
/*interface IEiendom extends Document {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    availableFrom: string;
    leaseTerm: string;
    contactEmail: string;
    contactPhone: string;
    amenities: string[];
    utilitiesIncluded: string[];
    latitude: Number 
    longitude: Number
}

// Opprett skjemaet basert på det nye Eiendom-grensesnittet
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
        type: String,
        required: true,
    },
    leaseTerm: {
        type: String,
        required: true,
    },
    contactEmail: {
        type: String,
        required: true,
    },
    contactPhone: {
        type: String,
        required: true,
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
        required: true 
    },   
    longitude: { 
        type: Number, 
        required: true 
    },
});*/

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
}

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
});

// Opprett modellen basert på skjemaet og det nye Eiendom-grensesnittet
const Eiendom = 
mongoose.models.Eiendom || mongoose.model<IEiendom>("Eiendom", eiendomSchema);

export default Eiendom;
