import { RequestHandler } from "express";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Create transporter for Gmail
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "your-email@gmail.com",
      pass: process.env.EMAIL_PASS || "your-app-password",
    },
  });
};

export const handleContactForm: RequestHandler = async (req, res) => {
  try {
    const { name, email, message }: ContactFormData = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are required",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Invalid email format",
      });
    }

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("Contact Form Submission (Email not configured):", {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
        recipientEmail: "kaiwalyaraut27@gmail.com",
      });

      return res.json({
        success: true,
        message:
          "Your message has been received! (Email configuration pending)",
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "kaiwalyaraut27@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #000; margin-bottom: 5px;">From:</h3>
            <p style="margin: 5px 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0; font-size: 16px;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #000; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #000; border-radius: 4px;">
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            <p>Received on: ${new Date().toLocaleString()}</p>
            <p>Reply to: <a href="mailto:${email}" style="color: #000;">${email}</a></p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

From: ${name}
Email: ${email}

Message:
${message}

Received on: ${new Date().toLocaleString()}
Reply to: ${email}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log(
      "Email sent successfully to kaiwalyaraut27@gmail.com from:",
      email,
    );

    res.json({
      success: true,
      message:
        "Thank you! Your message has been sent successfully. I'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    // Log the submission even if email fails
    console.log("Contact Form Submission (Email failed):", {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Unknown error",
    });

    res.status(500).json({
      success: false,
      error: "Failed to send message. Please try again or contact me directly.",
    });
  }
};
