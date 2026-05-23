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
  name: string;
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
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: null },
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", {
        ...data,
        subject: data.service || "General Inquiry",
      });
      return response.json();
    },
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: (error: any) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again or email directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in name, email, and message.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-light-green font-medium mb-3 uppercase tracking-widest text-sm">Let's Talk</p>
            <h1 className="text-5xl font-bold text-white mb-6">Start the Conversation</h1>
            <p className="text-xl text-ash-gray max-w-2xl mx-auto">
              Whether you have a project in mind or just want to explore what's possible — reach out. First call is always free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Book Session Banner */}
      <section className="py-8 bg-pigment-green/10 border-b border-pigment-green/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div>
              <p className="font-semibold text-black-olive text-lg">Free Outcome Alignment Session</p>
              <p className="text-dim-gray text-sm">30 minutes to understand your project and map a path forward — no commitment required.</p>
            </div>
            <Button
              onClick={() => window.open("https://calendly.com/desmondjr88/outcome-alignment-session", "_blank", "noopener,noreferrer")}
              className="bg-pigment-green hover:bg-black-olive text-white font-semibold px-6 flex-shrink-0"
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
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-black-olive mb-4">Get in touch</h2>
                <p className="text-dim-gray leading-relaxed">
                  Fill out the form and I'll get back to you within one business day. If you'd prefer to schedule a call directly, use the booking link above.
                </p>
              </div>

              <div className="space-y-5">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 bg-pigment-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-pigment-green" />
                      </div>
                      <div>
                        <div className="text-xs text-dim-gray font-medium uppercase tracking-wide">{info.label}</div>
                        <div className="font-semibold text-black-olive">{info.value}</div>
                      </div>
                    </div>
                  );
                  return (
                    <div key={i}>
                      {info.href ? <a href={info.href}>{content}</a> : content}
                    </div>
                  );
                })}

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-pigment-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-5 w-5 text-pigment-green" />
                  </div>
                  <div>
                    <div className="text-xs text-dim-gray font-medium uppercase tracking-wide">LinkedIn</div>
                    <a href="https://linkedin.com/in/desmondcampbell" target="_blank" rel="noopener noreferrer" className="font-semibold text-black-olive hover:text-pigment-green transition-colors">
                      desmondcampbell
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-black-olive mb-3">What to expect</h3>
                <ul className="space-y-3">
                  {[
                    "Response within 1 business day",
                    "Free 30-min alignment call available",
                    "No sales pressure — just a real conversation",
                    "Transparent pricing and timelines upfront",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-dim-gray">
                      <CheckCircle2 className="h-4 w-4 text-pigment-green flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <motion.div
                  className="h-full flex flex-col items-center justify-center text-center py-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle2 className="h-16 w-16 text-pigment-green mb-6" />
                  <h3 className="text-2xl font-bold text-black-olive mb-3">Message received!</h3>
                  <p className="text-dim-gray leading-relaxed max-w-sm">
                    Thank you for reaching out. I'll review your inquiry and follow up soon.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-6 border-pigment-green text-pigment-green hover:bg-pigment-green hover:text-white"
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-black-olive mb-2">Send an Inquiry</h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-black-olive font-medium">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                        placeholder="Your name"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-black-olive font-medium">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                        placeholder="you@company.com"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-black-olive font-medium">Company / Project Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData(p => ({ ...p, company: e.target.value }))}
                      placeholder="Your company or project name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label className="text-black-olive font-medium">Service Interest</Label>
                    <Select value={formData.service} onValueChange={(val) => setFormData(p => ({ ...p, service: val }))}>
                      <SelectTrigger className="mt-1">
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
                    <Label htmlFor="message" className="text-black-olive font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                      placeholder="Tell me about your project, challenge, or question..."
                      rows={5}
                      className="mt-1"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-pigment-green hover:bg-black-olive text-white font-semibold py-3 text-base"
                    disabled={contactMutation.isPending}
                  >
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
