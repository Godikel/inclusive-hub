import { motion } from "framer-motion";
import { BookOpen, GraduationCap, CheckCircle } from "lucide-react";

const SolutionSection = () => (
  <section className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          The Solution: Inclusive by Design
        </h2>
        <p className="text-muted-foreground text-lg">
          True inclusion doesn't start with policies—it starts with content. The words, images, and cues used to hire, train, and engage people every day.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Playbook Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-xl p-8 shadow-sm border border-border"
        >
          <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
            <BookOpen className="w-7 h-7 text-primary-foreground" />
          </div>
          <h3 className="font-display text-2xl text-foreground mb-3">The Inclusive Playbook</h3>
          <p className="text-muted-foreground mb-5">India's first Gender-Inclusive Content Playbook—a practical guide for strategic design systems.</p>
          <ul className="space-y-3">
            {[
              "Practical guide to transforming hiring, training & internal comms",
              "Actionable checklists and audit toolkits to remove bias",
              "Built for HR Leaders, Policy Makers & Ops Heads",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Masterclass Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-xl p-8 shadow-sm border border-border"
        >
          <div className="w-14 h-14 rounded-xl bg-gradient-warm flex items-center justify-center mb-6">
            <GraduationCap className="w-7 h-7 text-secondary-foreground" />
          </div>
          <h3 className="font-display text-2xl text-foreground mb-3">The Masterclass</h3>
          <p className="text-muted-foreground mb-5">A comprehensive learning program designed for behavioral change across your organization.</p>
          <ul className="space-y-3">
            {[
              "10 learning modules for HR leaders, managers & frontline supervisors",
              "Covers unconscious bias, safety, and inclusive leadership",
              "Role-specific tracks for Managers and Frontline Supervisors",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
