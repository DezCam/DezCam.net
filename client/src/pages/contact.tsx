import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, Linkedin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AIChatWidget from "@/components/ai-chat-widget";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const serviceOptions = [
  { value: "revops", label: "RevOps Consulting" },
  { value: "software", label: "Software Development" },
  { value: "ai-agent", label: "AI Agent" },
  { value: "website", label: "Website" },
  { value: "market-analysis", label: "Market Analysis" },
  { value: "trading", label: "Trading Education" },
  { value: "unsure", label: "Not sure yet" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "Desmondjr88@gmail.com", href: "mailto:Desmondjr88@gmail.com" },
  { icon: Phone, label: "Phone", value: "(310) 995-2476", href: "tel:+13109952476" },
  { icon: MapPin, label: "Location", value: "Folsom, CA", href: null },
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({ firstName: "", lastName: "", email: "", company: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const scrollToForm = () => {
    const el = document.getElementById("inquiry-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const payload = {
        name: `${data.firstName.trim()} ${data.lastName.trim()}`,
        email: data.email,
        company: data.company,
        service: data.service,
        subject: data.service || "General Inquiry",
        message: data.message,
      };
      const response = await apiRequest("POST", "/api/contact", payload);
      return response.json();
    },
    onSuccess: () => setSubmitted(true),
    onError: (error: any) => {
      toast({ title: "Something went wrong", description: error.message || "Please try again or email directly.", variant: "destructive" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({ title: "Missing fields", description: "Please fill in first name, last name, email, and message.", variant: "destructive" });
      return;
    }
    contactMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F3E8" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-bg relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #D6B36A 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-champagne-gold font-semibold mb-3 uppercase tracking-widest text-xs">Let's Talk</p>
            <h1 className="text-5xl font-bold text-ivory mb-4">Start the Conversation</h1>
            <div className="w-16 h-px bg-champagne-gold/40 mx-auto mb-6" />
            <p className="text-soft-gray max-w-2xl mx-auto text-lg">
              Whether you have a project in mind or just want to explore what's possible — reach out. First call is always free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Free Session Banner */}
      <section className="py-5 bg-near-black border-b border-champagne-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div>
              <p className="font-semibold text-ivory text-base">Free Outcome Alignment Session</p>
              <p className="text-soft-gray text-sm">30 minutes · no commitment · understand your project and map a path forward</p>
            </div>
            <Button
              onClick={scrollToForm}
              className="bg-forest-green hover:bg-forest-green/80 text-ivory font-semibold px-6 flex-shrink-0 border border-transparent hover:border-champagne-gold/20 transition-all"
            >
              <Calendar className="mr-2 h-4 w-4" /> Book Free Session
            </Button>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-8">
              <div>
                <p className="text-champagne-gold text-xs font-semibold uppercase tracking-widest mb-3">Reach Out</p>
                <h2 className="text-3xl font-bold text-near-black mb-3">Get in touch</h2>
                <div className="w-10 h-px bg-champagne-gold/40 mb-5" />
                <p className="text-graphite leading-relaxed">
                  Fill out the form and I'll respond within one business day. Or book a call directly using the link above.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 bg-near-black rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-champagne-gold" />
                      </div>
                      <div>
                        <div className="text-xs text-graphite font-medium uppercase tracking-wide">{info.label}</div>
                        <div className="font-semibold text-near-black">{info.value}</div>
                      </div>
                    </div>
                  );
                  return <div key={i}>{info.href ? <a href={info.href}>{content}</a> : content}</div>;
                })}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-near-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-5 w-5 text-champagne-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-graphite font-medium uppercase tracking-wide">LinkedIn</div>
                    <a href="https://linkedin.com/in/desmondcampbell" target="_blank" rel="noopener noreferrer" className="font-semibold text-near-black hover:text-forest-green transition-colors">
                      desmondcampbell
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-near-black rounded-2xl p-6 border border-champagne-gold/20">
                <h3 className="font-bold text-ivory mb-4 text-sm uppercase tracking-wide">What to expect</h3>
                <ul className="space-y-3">
                  {[
                    "Response within 1 business day",
                    "Free 30-min alignment call available",
                    "No sales pressure — just a real conversation",
                    "Transparent pricing and timelines upfront",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-soft-gray">
                      <CheckCircle2 className="h-4 w-4 text-champagne-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
              {submitted ? (
                <motion.div
                  className="h-full flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl border"
                  style={{ backgroundColor: "#3D4240", borderColor: "#399A4B" }}
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#399A4B" }}>
                    <CheckCircle2 className="h-8 w-8" style={{ color: "#F7F3E8" }} />
                  </div>
                  <p className="text-lg font-medium leading-relaxed" style={{ color: "#AAB0AA" }}>
                    Great to hear from you. I'll be in touch within 2 business days.
                  </p>
                </motion.div>
              ) : (
                <form id="inquiry-form" onSubmit={handleSubmit} className="space-y-5 bg-white border border-soft-gray/30 rounded-2xl p-8 shadow-sm">
                  <div>
                    <p className="text-champagne-gold text-xs font-semibold uppercase tracking-widest mb-1">Inquiry Form</p>
                    <h2 className="text-2xl font-bold text-near-black">Send an Inquiry</h2>
                    <div className="w-8 h-px bg-champagne-gold/40 mt-3" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-near-black font-medium text-sm">First Name *</Label>
                      <Input id="firstName" value={formData.firstName}
                        onChange={(e) => setFormData(p => ({ ...p, firstName: e.target.value }))}
                        placeholder="First name" className="mt-1 border-soft-gray/50 focus:border-champagne-gold focus:ring-champagne-gold/20" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-near-black font-medium text-sm">Last Name *</Label>
                      <Input id="lastName" value={formData.lastName}
                        onChange={(e) => setFormData(p => ({ ...p, lastName: e.target.value }))}
                        placeholder="Last name" className="mt-1 border-soft-gray/50 focus:border-champagne-gold focus:ring-champagne-gold/20" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-near-black font-medium text-sm">Email *</Label>
                    <Input id="email" type="email" value={formData.email}
                      onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                      placeholder="you@company.com" className="mt-1 border-soft-gray/50 focus:border-champagne-gold focus:ring-champagne-gold/20" required />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-near-black font-medium text-sm">Company / Project Name</Label>
                    <Input id="company" value={formData.company}
                      onChange={(e) => setFormData(p => ({ ...p, company: e.target.value }))}
                      placeholder="Your company or project name" className="mt-1 border-soft-gray/50 focus:border-champagne-gold focus:ring-champagne-gold/20" />
                  </div>

                  <div>
                    <Label className="text-near-black font-medium text-sm">Service Interest</Label>
                    <Select value={formData.service} onValueChange={(val) => setFormData(p => ({ ...p, service: val }))}>
                      <SelectTrigger className="mt-1 border-soft-gray/50 focus:border-champagne-gold">
                        <SelectValue placeholder="What are you looking for?" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-near-black font-medium text-sm">Message *</Label>
                    <Textarea id="message" value={formData.message}
                      onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                      placeholder="Tell me about your project, challenge, or question..." rows={5}
                      className="mt-1 border-soft-gray/50 focus:border-champagne-gold focus:ring-champagne-gold/20" required />
                  </div>

                  <Button type="submit"
                    className="w-full bg-forest-green hover:bg-forest-green/80 text-ivory font-semibold py-3 text-base border border-transparent hover:border-champagne-gold/20 transition-all"
                    disabled={contactMutation.isPending}>
                    {contactMutation.isPending ? "Sending..." : "Send Inquiry →"}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatWidget />
    </div>
  );
}
