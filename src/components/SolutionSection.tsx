import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Naturalidade Autêntica",
    description: "Realçamos o que você já tem de mais belo. Sem exageros, sem artificialidade — apenas a sua essência elevada."
  },
  {
    icon: Heart,
    title: "Cuidado Holístico",
    description: "Cada tratamento é pensado para nutrir não só a sua pele, mas também o seu bem-estar emocional."
  },
  {
    icon: Sparkles,
    title: "Experiência Exclusiva",
    description: "Um ambiente desenhado para você desligar do mundo e reconectar-se consigo mesma."
  }
];

const SolutionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-sm font-body uppercase tracking-widest text-secondary mb-4 block">
            Uma Nova Abordagem
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            O Método Laroo
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Um novo conceito de beleza em Coimbra: foco absoluto na naturalidade 
            e na experiência de bem-estar, não apenas no procedimento em si.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-accent/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Differentiator Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-primary rounded-3xl p-10 md:p-16 text-center"
        >
          <p className="font-display text-2xl md:text-3xl text-primary-foreground leading-relaxed mb-6">
            "Na Laroo, não transformamos quem você é. 
            Revelamos a beleza que sempre esteve aí."
          </p>
          <span className="font-body text-primary-foreground/80 text-sm uppercase tracking-widest">
            Filosofia Laroo Beauty & Care
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
