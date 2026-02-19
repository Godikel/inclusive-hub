import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const REGISTER_URL = "#register-form";

const CTASection = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
          Join the Movement
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
          Move beyond the "Why" and master the "How." Let's build a workforce that is not only larger—but more resilient and equitable.
        </p>
        <a href={REGISTER_URL}>
          <Button size="lg" className="text-lg px-10 py-6 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
            Register for the Masterclass
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
        <p className="mt-6 text-muted-foreground text-sm">
          Free access · 10 modules · Get certified
        </p>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
