import { useState } from "react";
import { Mail, Clock, MapPin, Send, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(r => setTimeout(r, 1200));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <main className="bg-white overflow-hidden">

        {/* HERO */}
        <section className="px-6 lg:px-8 pt-32 pb-32">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-gray-100 mb-8 border border-gray-200">
              <p className="text-xs uppercase tracking-widest text-gray-700 font-semibold">
                Contact
              </p>
            </div>

            <h1 className="font-catamaran font-bold text-6xl lg:text-7xl tracking-tight mb-6 text-black">
              Let's Start a Conversation
            </h1>

            <p className="text-xl text-gray-700 max-w-2xl leading-relaxed mb-12">
              Whether you're building a product from scratch or improving an
              existing one, I'd love to hear about it.
            </p>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
              <div className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-gray-900" />
                <p className="text-gray-700 text-sm">Replies within 24 hours</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-gray-900" />
                <p className="text-gray-700 text-sm">Remote  Global</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gray-900" />
                <p className="text-gray-700 text-sm">Open to collaborations</p>
              </div>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="px-6 lg:px-8 pb-36">
          <div className="max-w-2xl mx-auto">

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-black"
                  >
                    <option value="">Select one</option>
                    <option value="product">Product Design & Engineering</option>
                    <option value="website">Website</option>
                    <option value="consulting">Design / Dev Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-black"
                    placeholder="Tell me about your idea, goals, or challenges."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition disabled:opacity-60"
                >
                  {isSubmitting ? "Sending" : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>

              </form>
            ) : (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Message received
                </h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  Thanks for reaching out. I'll review your message and get back
                  to you shortly.
                </p>
              </div>
            )}

          </div>
        </section>

      </main>
    </Layout>
  );
}
