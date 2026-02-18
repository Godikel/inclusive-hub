import { motion } from "framer-motion";
import { AlertTriangle, Users, TrendingDown, ShieldAlert } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "Biased Job Descriptions", desc: "Unconscious gender cues in language exclude qualified candidates." },
  { icon: Users, title: "Non-Inclusive Training", desc: "Training content often ignores frontline women's real challenges." },
  { icon: TrendingDown, title: "Higher Attrition", desc: "Lack of inclusive practices leads to costly turnover and disengagement." },
  { icon: ShieldAlert, title: "Compliance & Reputation Risk", desc: "Failing to act on inclusion creates growing regulatory and brand risk." },
];

const ProblemSection = () => (
  <section className="py-20 bg-section-alt">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Why Gender Inclusion Fails at the Frontline
        </h2>
        <p className="text-muted-foreground text-lg">
          Many companies have well-intentioned diversity policies. Yet when we look at the frontline—factories, warehouses, delivery operations—the gap between intent and reality is vast.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-10 text-muted-foreground text-base italic"
      >
        Women make up less than 30% of India's frontline workforce, with significantly higher attrition in many sectors.
      </motion.p>
    </div>
  </section>
);

export default ProblemSection;
