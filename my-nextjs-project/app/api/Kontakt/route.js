import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { navn, epost, telefon, melding } = req.body;

    // Opprett transportøren ved å bruke nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Du kan bruke hvilken som helst e-posttjeneste
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

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Metoden ikke tillatt' });
  }
}
