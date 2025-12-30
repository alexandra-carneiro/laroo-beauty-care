import { motion } from "framer-motion";
import { Sparkles, Heart, UserCheck } from "lucide-react";

const differentials = [
  {
    icon: Sparkles,
    title: "Ambiente Relaxante",
    description: "Espaço pensado para o seu bem-estar"
  },
  {
    icon: Heart,
    title: "Produtos Premium",
    description: "Qualidade que faz a diferença"
  },
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Cada cliente é única"
  }
];

const DifferentialSection = () => {
  return (
    <section className="py-12 bg-sand">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl md:text-3xl text-center text-foreground mb-10"
        >
          Por que escolher a Laroo?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
