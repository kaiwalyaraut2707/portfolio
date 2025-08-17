import { RequestHandler } from "express";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const handleContactForm: RequestHandler = async (req, res) => {
  try {
    const { name, email, message }: ContactFormData = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: "All fields are required" 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: "Invalid email format" 
      });
    }

    // Log the contact form submission for backup
    console.log("Contact Form Submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      recipientEmail: "kaiwalyaraut27@gmail.com"
    });

    // Return success - EmailJS will handle the actual email sending from client-side
    res.json({ 
      success: true, 
      message: "Your message has been sent successfully! I'll get back to you soon." 
    });
    
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to send message. Please try again." 
    });
  }
};
