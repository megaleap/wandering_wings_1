import nodemailer from "nodemailer";

export async function POST(req) {
  console.log("✅ API Route Hit: /api/sendMail");

  try {
    const { firstName, email, phone, message } = await req.json();
    console.log("Received data:", { firstName, email, phone, message });

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in", // ✅ correct host
      port: 465, // SSL port
      secure: true, // SSL
      auth: {
        user: process.env.EMAIL_USER, // Zoho email
        pass: process.env.EMAIL_PASS, // Zoho app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Zoho email
      replyTo: email, // User’s email
      to: "operations@wanderingwings.in",
      subject: `New Contact Form Submission from ${firstName}`,
      text: `
        Name: ${firstName}
        Email: ${email}
        Mobile: ${phone}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully");

    await transporter.sendMail({
      from: `"Wandering Wings" <operations@wanderingwings.in>`,
      to: email,
      subject: "Thank you for contacting Wandering Wings 🐔",
      text: `
        Hi ${firstName},

        Thank you for reaching out to Wandering Wings!

        We’ve received your message and our team is reviewing it.
        We’ll get back to you as soon as possible.

        If your enquiry is urgent, feel free to reply to this email.

        Warm regards,
        Operations Team
        Wandering Wings
        operations@wanderingwings.in
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
