import dbConnect from "@/app/lib/dbConnect";
import Eiendom from "@/app/models/Eiendommer";
import { NextResponse } from "next/server";

export async function GET(){
   await dbConnect();

   try {
       const eiendommer = await Eiendom.find({});

       return NextResponse.json(eiendommer);
   } catch (err: any) {
       return NextResponse.json({ error: err.message});
   }
}  
