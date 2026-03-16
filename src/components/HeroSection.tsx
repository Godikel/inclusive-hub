import { motion } from "framer-motion";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";
import biiLogo from "@/assets/bii-logo.png";
import betterplaceLogo from "@/assets/betterplace-logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const HeroSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", company: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.phone) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.from("registrations").insert({
        first_name: form.firstName,
        last_name: form.lastName || null,
        email: form.email,
        phone: form.phone,
        company: form.company || null,
      });
      if (error) throw error;
      toast({ title: "Registration successful!", description: "We'll be in touch soon." });
      setForm({ firstName: "", lastName: "", email: "", phone: "", company: "" });
    } catch (err: any) {
      toast({ title: "Registration failed", description: err.message, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Diverse frontline workforce" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <img src={betterplaceLogo} alt="BetterPlace" className="h-10 md:h-14 brightness-0 invert" />
              <span className="text-primary-foreground/60 text-2xl font-light">×</span>
              <img src={biiLogo} alt="British International Investment" className="h-8 md:h-10 brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/80 font-sans text-sm font-semibold uppercase tracking-widest mb-4">
              A Joint Initiative by BetterPlace & British International Investment
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Advancing Gender Inclusivity in the Frontline Workforce
            </h1>
            <p className="text-primary-foreground/85 text-lg md:text-xl font-light mb-4">
              From Intent to Impact
            </p>
            <p className="text-primary-foreground/70 text-base md:text-lg italic">
              Policy changes minds. Content changes behavior.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form
              id="register-form"
              onSubmit={handleSubmit}
              className="bg-card/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-border/50 scroll-mt-24"
            >
              <h3 className="font-display text-2xl text-foreground mb-2">Register for the Masterclass</h3>
              <p className="text-muted-foreground text-sm mb-6">Free access · 10 modules · Get certified</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" required maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" maxLength={100} />
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <Label htmlFor="email">Email ID *</Label>
                <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required maxLength={255} />
              </div>

              <div className="space-y-2 mb-4">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" required maxLength={20} />
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Your company" maxLength={200} />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-6 font-semibold" disabled={submitting}>
                {submitting ? "Submitting..." : "Register Now"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
