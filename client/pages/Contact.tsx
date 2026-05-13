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
        <section className="px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12 pb-12 lg:pb-16 relative overflow-hidden min-h-screen">
          {/* Subtle neutral background accents (muted, professional) */}
          <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-gradient-to-bl from-slate-100/40 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none" />
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[360px] h-[360px] bg-gradient-to-tr from-slate-50/30 to-transparent rounded-full blur-3xl opacity-20 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              
              {/* LEFT - Content + Visual Personality */}
              <div className="lg:col-span-2">
                <div className={`transition-all duration-700 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse" />
                    <p className="text-xs uppercase tracking-widest text-slate-700 font-semibold">
                      Available for projects
                    </p>
                  </div>
                </div>

                <div className={`transition-all duration-700 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                  <h1 className="font-catamaran font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 text-slate-900 leading-tight">
                    Let's build<br />something <span className="text-slate-700">remarkable</span>
                  </h1>
                </div>

                <div className={`transition-all duration-700 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  <p className="text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed mb-12 font-light">
                    I work on ambitious projects at the intersection of design, engineering, and AI. If you're building something that matters, let's talk.
                  </p>
                </div>

                {/* Trust Signals - Enhanced with better visuals */}
                  <div className={`space-y-3 mb-8 transition-all duration-700 delay-400 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  {trustSignals.map(({ icon: Icon, text, detail }, idx) => (
                    <div
                      key={text}
                      className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
                      style={{
                        transitionDelay: `${400 + idx * 80}ms`
                      }}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-slate-800 group-hover:text-white">
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
                        className="group p-3 rounded-lg border border-gray-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:border-gray-300 cursor-pointer"
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
                  <div className="sticky top-20 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-lg backdrop-blur-sm max-h-[calc(100vh-120px)] overflow-visible">
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

                    <form onSubmit={handleSubmit} className="space-y-4">

                      {error && (
                        <div className="p-4 bg-red-50/80 border border-red-200/80 rounded-xl text-red-700 text-sm backdrop-blur-sm">
                          <p className="font-bold mb-0.5">Oops!</p>
                          <p className="text-sm">{error}</p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Your name <span className="text-gray-400">*</span></label>
                          <input
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-all bg-white text-sm ${
                              focusedField === "name"
                                ? "border-slate-800 shadow"
                                : "border-gray-200"
                            }`}
                            placeholder="Your name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-gray-400">*</span></label>
                          <input
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-all bg-white text-sm ${
                              focusedField === "email"
                                ? "border-slate-800 shadow"
                                : "border-gray-200"
                            }`}
                            placeholder="hello@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Project type <span className="text-gray-400">*</span></label>
                        <select
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("projectType")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-2 border rounded-lg bg-white focus:outline-none text-sm ${
                            focusedField === "projectType" ? "border-slate-800" : "border-gray-200"
                          }`}
                        >
                          <option value="">Select a project type...</option>
                          <option value="product">Product</option>
                          <option value="website">Website / Web app</option>
                          <option value="consulting">Consulting</option>
                          <option value="ml">AI / ML</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                          Your thoughts <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-2 border rounded-lg resize-none focus:outline-none transition-all bg-white text-sm ${
                            focusedField === "message" ? "border-slate-800 shadow" : "border-gray-200"
                          }`}
                          placeholder="Briefly describe the project or idea"
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
                        className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
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

                      <p className="text-xs text-gray-500 text-center font-medium">I reply within 24 hours</p>
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
