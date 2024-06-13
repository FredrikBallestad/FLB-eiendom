import mongoose, { Document, Schema } from "mongoose";

// Definer det nye Eiendom-grensesnittet
interface IEiendom extends Document {
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
});

// Opprett modellen basert på skjemaet og det nye Eiendom-grensesnittet
const Eiendom = 
mongoose.models.Eiendom || mongoose.model<IEiendom>("Eiendom", eiendomSchema);

export default Eiendom;
