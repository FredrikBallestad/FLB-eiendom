import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { navn, epost, telefon, melding } = await req.json();
    console.log("Received form data: ", { navn, epost, telefon, melding });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: 'Ny melding fra kontaktskjemaet',
      text: `
        Navn: ${navn}
        E-post: ${epost}
        Telefon: ${telefon}
        Melding: ${melding}
      `,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}


