import { useState } from "react";
import { Mail, Clock, MapPin, Send, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";

export default function Contact({ onChatOpen }: { onChatOpen?: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(""); // Clear error on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    console.log("📤 Submitting contact form:", formData);

    try {
      console.log("🔗 Calling /api/contact...");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("📋 Response status:", response.status);
      
      // Safely parse JSON - check if response has content
      let data: any = {};
      const contentType = response.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        try {
          data = await response.json();
        } catch (parseErr) {
          console.warn("⚠️ Failed to parse JSON response", parseErr);
          data = { error: "Invalid server response" };
        }
      } else {
        const text = await response.text();
        console.warn("⚠️ Non-JSON response:", { status: response.status, text });
        data = { error: text || `Server error: ${response.status}` };
      }
      
      console.log("📦 Response data:", data);

      if (!response.ok) {
        const errorMsg = data.error || data.details || `Failed to send message (${response.status}). Please try again.`;
        console.error("❌ API Error:", errorMsg);
        setError(errorMsg);
        setIsSubmitting(false);
        return;
      }

      if (data.success === false) {
        console.error("❌ Success flag is false:", data);
        setError(data.message || "Message failed to send. Please try again.");
        setIsSubmitting(false);
        return;
      }

      console.log("✅ Message sent successfully!");
      setSubmitted(true);
      setFormData({ name: "", email: "", projectType: "", message: "" });
      setIsSubmitting(false);
    } catch (err: any) {
      const errorMsg = err?.message || "Network error. Please check your connection and try again.";
      console.error("❌ Catch error:", errorMsg, err);
      setError(errorMsg);
      setIsSubmitting(false);
    }
  };

  return (
    <Layout onChatOpen={onChatOpen}>
      <main className="bg-white overflow-hidden">

        {/* HERO */}
        <section className="px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 lg:pb-32">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-gray-100 mb-6 sm:mb-8 border border-gray-200">
              <p className="text-xs uppercase tracking-widest text-gray-700 font-semibold">
                Contact
              </p>
            </div>

            <h1 className="font-catamaran font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl tracking-tight mb-4 sm:mb-6 text-black leading-tight">
              Let's Start a Conversation
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed mb-12 sm:mb-16">
              Whether you're building a product from scratch or improving an existing one, I'd love to hear about it.
            </p>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
              {[
                { icon: Clock, text: "Replies within 24 hours" },
                { icon: MapPin, text: "Remote - Global" },
                { icon: Mail, text: "Open to collaborations" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 lg:pb-36 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-2xl mx-auto">

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

                {error && (
                  <div className="p-4 sm:p-5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    <p className="font-semibold">Error</p>
                    <p>{error}</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all bg-white hover:border-gray-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all bg-white hover:border-gray-300"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2.5">
                    Project Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all hover:border-gray-300 text-gray-900"
                  >
                    <option value="">Select a project type</option>
                    <option value="product">Product Design & Engineering</option>
                    <option value="website">Website</option>
                    <option value="consulting">Design / Dev Consulting</option>
                    <option value="ml">ML / AI Integration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all bg-white hover:border-gray-300 text-gray-900"
                    placeholder="Tell me about your idea, goals, or challenges. More details help me understand your needs better."
                  />
                  <p className="text-xs text-gray-500 mt-2">Minimum 20 characters recommended</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed active:scale-95 shadow-lg shadow-orange-500/20"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            ) : (
              <div className="text-center py-16 sm:py-20 px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 animate-bounce shadow-lg shadow-orange-500/30">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Message received! 🎉
                </h3>
                <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-8">
                  Thanks for reaching out. I'll review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-gray-600 hover:text-gray-900 underline text-sm transition-colors"
                >
                  Send another message
                </button>
              </div>
            )}

          </div>
        </section>

      </main>
    </Layout>
  );
}
