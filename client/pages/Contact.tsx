import { useState, useEffect } from "react";
import { Mail, Clock3, Globe2, Handshake, Send, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";
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
  const [heroVisible, setHeroVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

  const trustSignals = [
    { icon: Clock3, text: "Replies within 24h", detail: "Usually sooner" },
    { icon: Globe2, text: "Remote - Global", detail: "Available worldwide" },
    { icon: Handshake, text: "Open to collaboration", detail: "Let's build together" },
  ];

  return (
    <Layout onChatOpen={onChatOpen}>
      <main className="bg-white overflow-hidden">

        {/* HERO  -  Side-by-side layout */}
        <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-24 pb-16 sm:pb-24 lg:pb-32 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-gradient-to-tr from-purple-50 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none" />

          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Left  -  Info */}
              <div>
                <div className={`transition-all duration-700 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-xs uppercase tracking-widest text-gray-600 font-semibold">
                      Available for Work
                    </p>
                  </div>
                </div>

                <div className={`transition-all duration-700 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                  <h1 className="font-catamaran font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 sm:mb-5 text-black leading-tight">
                    Let's Start a<br />Conversation
                  </h1>
                </div>

                <div className={`transition-all duration-700 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  <p className="text-base sm:text-lg text-gray-500 max-w-lg leading-relaxed mb-10 font-light">
                    Whether you're building a product from scratch or improving an existing one, I'd love to hear about it.
                  </p>
                </div>

                {/* Trust Signals  -  Premium Cards */}
                <div className={`space-y-3 transition-all duration-700 delay-500 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  {trustSignals.map(({ icon: Icon, text, detail }) => (
                    <div
                      key={text}
                      className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm-card transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md-card"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-gray-900 transition-colors group-hover:bg-black group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-gray-900">{text}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct contact options */}
                <div className={`mt-8 transition-all duration-700 delay-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  <p className="text-xs uppercase tracking-[0.22em] text-gray-400 font-semibold mb-3">Or reach out directly</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a 
                      href="mailto:cosimckdd@gmail.com"
                      className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm-card transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-900 hover:text-black hover:shadow-md-card"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-colors group-hover:bg-black group-hover:text-white">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Email</p>
                        <p className="truncate">cosimckdd@gmail.com</p>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                    <a 
                      href="https://linkedin.com/in/cosmickdd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm-card transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-900 hover:text-black hover:shadow-md-card"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-colors group-hover:bg-black group-hover:text-white">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">LinkedIn</p>
                        <p className="truncate">cosmickdd</p>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right  -  Form */}
              <div className={`transition-all duration-700 delay-400 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                {!submitted ? (
                  <div className="bg-gray-50/80 rounded-xl p-6 sm:p-8 border border-gray-200/80 shadow-sm-card">
                    <div className="flex items-center gap-2 mb-6">
                      <Sparkles className="w-4 h-4 text-gray-400" />
                      <p className="text-sm font-semibold text-gray-700">Send me a message</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                      {error && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                          <p className="font-semibold">Error</p>
                          <p>{error}</p>
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                          Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-all bg-white text-sm ${
                            focusedField === "name"
                              ? "border-black ring-2 ring-black/5 shadow-sm"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-all bg-white text-sm ${
                            focusedField === "email"
                              ? "border-black ring-2 ring-black/5 shadow-sm"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                          Project Type <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("projectType")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 border rounded-xl bg-white focus:outline-none transition-all text-sm ${
                            focusedField === "projectType"
                              ? "border-black ring-2 ring-black/5 shadow-sm"
                              : "border-gray-200 hover:border-gray-300"
                          } ${formData.projectType ? "text-gray-900" : "text-gray-400"}`}
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
                        <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                          Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 border rounded-xl resize-none focus:outline-none transition-all bg-white text-sm ${
                            focusedField === "message"
                              ? "border-black ring-2 ring-black/5 shadow-sm"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          placeholder="Tell me about your idea, goals, or challenges..."
                        />
                        <div className="flex items-center justify-between mt-1.5">
                          <p className="text-[10px] text-gray-400">Minimum 20 characters recommended</p>
                          <p className={`text-[10px] transition-colors ${formData.message.length >= 20 ? "text-green-500" : "text-gray-300"}`}>
                            {formData.message.length} / 20
                          </p>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-all disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] shadow-md-card hover:-translate-y-0.5 text-sm"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-xl p-8 sm:p-12 border border-gray-200 shadow-sm-card text-center">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                      Message received! 🎉
                    </h3>
                    <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed mb-8 font-light">
                      Thanks for reaching out. I'll review your message and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors border-b border-gray-300 hover:border-gray-900 pb-0.5"
                    >
                      Send another message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
