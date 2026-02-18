import { motion } from "framer-motion";

const stats = [
  { value: "20-40%", label: "Increase in women applicants" },
  { value: "30%", label: "Reduction in frontline attrition" },
  { value: "91-93%", label: "Training completion rate (vs. 52% industry avg)" },
];

const StatsSection = () => (
  <section className="py-20 bg-gradient-hero">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl md:text-4xl text-primary-foreground text-center mb-14"
      >
        Proven Impact
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="font-display text-5xl md:text-6xl text-primary-foreground mb-3">
              {stat.value}
            </div>
            <p className="text-primary-foreground/80 text-base">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
