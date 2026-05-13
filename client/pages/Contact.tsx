import { useState, useEffect } from "react";
import { Mail, Clock3, Globe2, Handshake, Send, CheckCircle2, Sparkles } from "lucide-react";
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

  const getFriendlyErrorMessage = (data: any, status: number) => {
    const rawMessage = String(data?.error || data?.details || data?.message || "").toLowerCase();

    if (status === 400 && rawMessage.includes("required fields")) {
      return "Please fill in your name, email, project type, and message.";
    }

    if (status === 400 && rawMessage.includes("at least 10 characters")) {
      return "Your message is too short. Please add a little more detail (at least 10 characters).";
    }

    if (rawMessage.includes("invalid email")) {
      return "Please enter a valid email address.";
    }

    if (rawMessage.includes("email service not configured")) {
      return "The contact form is not fully configured yet. Please try again later or email me directly.";
    }

    if (rawMessage.includes("authentication failed") || rawMessage.includes("eauth")) {
      return "Email sending is temporarily unavailable. Please email me directly for now.";
    }

    if (status >= 500) {
      return "Something went wrong while sending your message. Please try again in a moment.";
    }

    return "I couldn't send your message right now. Please try again or email me directly.";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.message.trim().length < 10) {
      setError("Please write a slightly longer message so I can understand your request.");
      return;
    }

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
        const errorMsg = getFriendlyErrorMessage(data, response.status);
        console.error("API Error:", data?.error || data?.details || data, "Status:", response.status);
        setError(errorMsg);
        setIsSubmitting(false);
        return;
      }

      if (data.success === false) {
        console.error("Success flag is false:", data);
        setError(getFriendlyErrorMessage(data, 500));
        setIsSubmitting(false);
        return;
      }

      console.log("Message sent successfully!");
      setSubmitted(true);
      setFormData({ name: "", email: "", projectType: "", message: "" });
      setIsSubmitting(false);
    } catch (err: any) {
      console.error("Catch error:", err);
      setError("Network error. Please check your connection and try again, or email me directly.");
      setIsSubmitting(false);
    }
  };

  const trustSignals = [
    { icon: Clock3, text: "Replies within 24h" },
    { icon: Globe2, text: "Remote — global" },
    { icon: Handshake, text: "Open to collaboration" },
  ];


  return (
    <Layout onChatOpen={onChatOpen}>
      <main className="bg-white overflow-hidden">

        {/* HERO & TWO-COLUMN LAYOUT (reference style) */}
        <section className="px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-8 sm:pb-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-10 lg:items-start">
            {/* Left: large headline and intro */}
            <div className="lg:pr-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse" />
                <p className="text-xs uppercase tracking-widest text-slate-700 font-semibold">Available for projects</p>
              </div>

              <h1 className="font-catamaran font-extrabold text-5xl sm:text-6xl leading-tight mb-3 text-slate-900">contact.</h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mb-5">Get in touch with me via social media or send me an email. I typically reply within 24 hours.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mb-5">
                {trustSignals.map(({ icon: Icon, text }, index) => (
                  <div key={text} className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/60">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white group-hover:scale-105">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-medium text-slate-800 leading-snug transition-colors duration-300 group-hover:text-slate-950">{text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <a href="mailto:cosimckdd@gmail.com" className="inline-flex items-center gap-3 px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm">
                  <Mail className="w-4 h-4" />
                  cosimckdd@gmail.com
                </a>
              </div>
            </div>
            {/* Right: large visual (replace /images/contact-portrait.jpg with your image) */}
            <div className="hidden lg:flex justify-end">
              <div className="group w-[390px] xl:w-[430px] h-[420px] xl:h-[470px] rounded-xl overflow-hidden bg-gray-100 shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 hover:border-slate-300">
                <img src="https://res.cloudinary.com/dz4h0eagy/image/upload/v1778705442/ChatGPT_Image_May_14_2026_02_20_23_AM_ppogju.png" alt="portrait" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-4 lg:mt-5 border-t border-gray-200/70 pt-4 lg:pt-5">
            {/* Form area below */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-4 lg:gap-6">
              <div className="space-y-4 lg:space-y-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Name</label>
                  <input name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border rounded-md text-sm" placeholder="Your name" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email</label>
                  <input name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border rounded-md text-sm" placeholder="hello@company.com" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Project type</label>
                  <select name="projectType" required value={formData.projectType} onChange={handleChange} className="w-full px-4 py-3 border rounded-md text-sm">
                    <option value="">Select a project type...</option>
                    <option value="product">Product</option>
                    <option value="website">Website / Web app</option>
                    <option value="consulting">Consulting</option>
                    <option value="ml">AI / ML</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4 lg:space-y-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Message</label>
                  <textarea name="message" required rows={8} value={formData.message} onChange={handleChange} className="w-full min-h-[250px] px-4 py-3 border rounded-md text-sm resize-none" placeholder="Write your message here"></textarea>
                  <p className="mt-2 text-xs text-gray-500">Please include at least 10 characters so I know what you need.</p>
                </div>

                <div className="flex justify-end">
                  <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-md text-sm">
                    {isSubmitting ? <span>Sending...</span> : <><span>Send email</span><Send className="w-4 h-4" /></>}
                  </button>
                </div>
              </div>
              </form>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
