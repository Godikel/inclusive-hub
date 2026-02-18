import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";
import { Button } from "@/components/ui/button";

const REGISTER_URL = "#register"; // Replace with actual registration URL

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="Diverse frontline workforce" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
    </div>

    <div className="container relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <p className="text-primary-foreground/80 font-sans text-sm font-semibold uppercase tracking-widest mb-4">
          An Initiative by BetterPlace & British International Investment
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
          Advancing Gender Inclusivity in the Frontline Workforce
        </h1>
        <p className="text-primary-foreground/85 text-lg md:text-xl font-light mb-4">
          From Intent to Impact
        </p>
        <p className="text-primary-foreground/70 text-base md:text-lg italic mb-8">
          Policy changes minds. Content changes behavior.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href={REGISTER_URL}>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Register for the Masterclass
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
