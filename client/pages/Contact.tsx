import { useState, useEffect } from "react";
import { Mail, Clock3, Globe2, Handshake, Send, CheckCircle2, ArrowUpRight, Sparkles, Code2, Palette, Zap, Users } from "lucide-react";
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

    console.log("Submitting contact form:", formData);

    try {
      console.log("Calling /api/contact...");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);
      
      // Safely parse JSON - check if response has content
      let data: any = {};
      const contentType = response.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        try {
          data = await response.json();
        } catch (parseErr) {
          console.warn("Failed to parse JSON response", parseErr);
          data = { error: "Invalid server response" };
        }
      } else {
        const text = await response.text();
        console.warn("Non-JSON response:", { status: response.status, text });
        data = { error: text || `Server error: ${response.status}` };
      }
      
      console.log("Response data:", data);

      if (!response.ok) {
        const errorMsg = data.error || data.details || `Failed to send message (${response.status}). Please try again.`;
        console.error("API Error:", errorMsg);
        setError(errorMsg);
        setIsSubmitting(false);
        return;
      }

      if (data.success === false) {
        console.error("Success flag is false:", data);
        setError(data.message || "Message failed to send. Please try again.");
        setIsSubmitting(false);
        return;
      }

      console.log("Message sent successfully!");
      setSubmitted(true);
      setFormData({ name: "", email: "", projectType: "", message: "" });
      setIsSubmitting(false);
    } catch (err: any) {
      const errorMsg = err?.message || "Network error. Please check your connection and try again.";
      console.error("Catch error:", errorMsg, err);
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

        {/* HERO WITH VISUAL ANCHOR & PERSONALITY */}
        <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-24 pb-20 sm:pb-32 lg:pb-40 relative overflow-hidden">
          {/* Sophisticated background with personality */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/40 via-purple-50/30 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-50/40 via-transparent to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              
              {/* LEFT - Content + Visual Personality */}
              <div className="lg:col-span-2">
                <div className={`transition-all duration-700 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-xs uppercase tracking-widest text-green-700 font-bold">
                      Available for Projects
                    </p>
                  </div>
                </div>

                <div className={`transition-all duration-700 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                  <h1 className="font-catamaran font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 text-black leading-tight">
                    Let's Build<br />Something <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Remarkable</span>
                  </h1>
                </div>

                <div className={`transition-all duration-700 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  <p className="text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed mb-12 font-light">
                    I work on ambitious projects at the intersection of design, engineering, and AI. If you're building something that matters, let's talk.
                  </p>
                </div>

                {/* Trust Signals - Enhanced with better visuals */}
                <div className={`space-y-3 mb-12 transition-all duration-700 delay-400 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  {trustSignals.map(({ icon: Icon, text, detail }, idx) => (
                    <div
                      key={text}
                      className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:shadow-lg hover:shadow-black/5 hover:bg-gray-50/50"
                      style={{
                        transitionDelay: `${400 + idx * 80}ms`
                      }}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 text-gray-700 transition-all duration-300 group-hover:from-black group-hover:to-gray-800 group-hover:text-white group-hover:shadow-lg group-hover:shadow-black/10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-gray-900 group-hover:text-black transition-colors">{text}</p>
                        <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-600 transition-colors">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* What I Can Help With - Personal Brand Section */}
                <div className={`transition-all duration-700 delay-600 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  <p className="text-xs uppercase tracking-[0.22em] text-gray-500 font-bold mb-4">What I specialize in</p>
                  <div className="space-y-3">
                    {[
                      { icon: Code2, label: "Full-Stack Development", desc: "React, Node.js, TypeScript, AI integration" },
                      { icon: Palette, label: "Product Design", desc: "Design systems, UX optimization, prototyping" },
                      { icon: Zap, label: "AI & Automation", desc: "ML integration, prompt engineering, workflows" },
                      { icon: Users, label: "Community & Events", desc: "Building spaces where people create together" },
                    ].map(({ icon: Icon, label, desc }, idx) => (
                      <div
                        key={label}
                        className="group p-4 rounded-xl border border-gray-200 bg-gradient-to-r from-white to-gray-50/50 hover:from-gray-50 hover:to-gray-50 transition-all duration-300 hover:border-gray-300 hover:shadow-md hover:shadow-black/5 cursor-pointer"
                        style={{
                          transitionDelay: `${600 + idx * 100}ms`
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <Icon className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors mt-0.5 flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-gray-900 group-hover:text-black transition-colors">{label}</p>
                            <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-600 transition-colors">{desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Contact - Bottom CTA */}
                <div className={`mt-12 transition-all duration-700 delay-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  <p className="text-xs uppercase tracking-[0.22em] text-gray-500 font-bold mb-4">Prefer direct contact?</p>
                  <div className="grid grid-cols-1 gap-3">
                    <a 
                      href="mailto:cosimckdd@gmail.com"
                      className="group flex items-center gap-3 rounded-2xl border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-800 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg hover:shadow-black/10 hover:bg-black hover:text-white"
                    >
                      <Mail className="w-4 h-4" />
                      <span>cosimckdd@gmail.com</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT - Form with Personality */}
              <div className={`lg:col-span-3 transition-all duration-700 delay-400 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                {!submitted ? (
                  <div className="sticky top-24 bg-gradient-to-br from-gray-50/90 via-white to-gray-50/50 rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-2xl shadow-black/8 backdrop-blur-xl">
                    {/* Form Header */}
                    <div className="mb-8">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Sparkles className="w-5 h-5 text-gray-700" />
                          <h2 className="text-2xl font-bold text-gray-900">Send a message</h2>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Tell me about your idea. I promise I won't spam or sell your data.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                      {error && (
                        <div className="p-4 bg-red-50/80 border border-red-200/80 rounded-xl text-red-700 text-sm backdrop-blur-sm">
                          <p className="font-bold mb-0.5">Oops!</p>
                          <p className="text-sm">{error}</p>
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                          Your name <span className="text-red-400">*</span>
                        </label>
                        <input
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-5 py-3.5 border-2 rounded-xl focus:outline-none transition-all bg-white text-sm font-medium ${
                            focusedField === "name"
                              ? "border-black shadow-lg shadow-black/10"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          placeholder="I'm..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
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
                          className={`w-full px-5 py-3.5 border-2 rounded-xl focus:outline-none transition-all bg-white text-sm font-medium ${
                            focusedField === "email"
                              ? "border-black shadow-lg shadow-black/10"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          placeholder="hello@yourcompany.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                          What are we building? <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("projectType")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-5 py-3.5 border-2 rounded-xl bg-white focus:outline-none transition-all text-sm font-medium appearance-none cursor-pointer ${
                            focusedField === "projectType"
                              ? "border-black shadow-lg shadow-black/10"
                              : "border-gray-200 hover:border-gray-300"
                          } ${formData.projectType ? "text-gray-900" : "text-gray-500"}`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23666' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '16px 12px',
                            paddingRight: '2.75rem'
                          }}
                        >
                          <option value="">Select a project type...</option>
                          <option value="product">Building a product</option>
                          <option value="website">Website/Web app</option>
                          <option value="consulting">Design/Dev consulting</option>
                          <option value="ml">AI/ML integration</option>
                          <option value="other">Something unique</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                          Your thoughts <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-5 py-3.5 border-2 rounded-xl resize-none focus:outline-none transition-all bg-white text-sm font-medium ${
                            focusedField === "message"
                              ? "border-black shadow-lg shadow-black/10"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          placeholder="What's on your mind? No brief too crazy."
                        />
                        <div className="flex items-center justify-between mt-2 px-1">
                          <p className="text-xs text-gray-500 font-medium">Keep it real.</p>
                          <p className={`text-xs font-bold transition-colors ${formData.message.length >= 20 ? "text-green-600" : "text-gray-400"}`}>
                            {formData.message.length} chars
                          </p>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-black to-gray-900 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-black/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send it over</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-500 text-center font-medium">
                        Response guaranteed within 24 hours
                      </p>
                    </form>
                  </div>
                ) : (
                  <div className="sticky top-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-12 sm:p-16 border border-gray-700 shadow-2xl shadow-black/30 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                      Message sent
                    </h3>
                    <p className="text-gray-300 text-base max-w-md mx-auto leading-relaxed mb-8 font-light">
                      Thanks for reaching out. I'll dive into your message and get back to you within 24 hours. Let's build something awesome together.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm font-bold transition-colors border-b-2 border-gray-600 hover:border-white pb-1"
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
