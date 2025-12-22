import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📩 Mail to USER
    await transporter.sendMail({
      from: `"Wandering Wings" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for subscribing to Wandering Wings 🥚",
      html: `

        <p>Thank you for subscribing to the <strong>Wandering Wings Newsletter</strong>.</p>

        <p>You’ll now receive updates on our farm-fresh eggs, stories from our happy hens,
        and exclusive insights straight from our farms.</p>

        <p>Warm regards,<br/>
        <strong>Operations Team</strong><br/>
        Wandering Wings<br/>
        operations@wanderingwings.in</p>
      `,
    });

    // 📩 Internal notification (optional but recommended)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "operations@wanderingwings.in",
      subject: "New Newsletter Subscription",
      text: `New subscriber email: ${email}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Newsletter error:", error);
    return new Response(JSON.stringify({ error: "Mail failed" }), {
      status: 500,
    });
  }
}
