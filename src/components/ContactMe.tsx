import React, { useState, FormEvent } from "react";
import {
  Send,
} from "lucide-react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { cn } from "../lib/utils";

// ✅ Load environment variables (Vite-style)
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const ContactMe: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    // ✅ Validation
    if (!name || !email || !message) {
      toast.error("Please fill out all fields before submitting.");
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceID, templateID, form, publicKey);
      toast.success("Message sent successfully! 🎉");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground md:mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
          
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card p-4 lg:p-8  rounded-lg lg:rounded-2xl shadow-sm space-y-6"
          >
            <h3 className="md:text-2xl px-1 text-start font-semibold mb-6 bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">Let’s create something amazing.</h3>

            <div>
              <label htmlFor="name" className="block text-sm text-start px-1 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-start px-1 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="xyz@gmail.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-start px-1 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full h-[150px] px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "cosmic-button rounded-xl w-full flex items-center justify-center gap-2 disabled:opacity-50"
              )}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
