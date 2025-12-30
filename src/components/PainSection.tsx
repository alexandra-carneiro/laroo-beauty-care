import { motion } from "framer-motion";

const painPoints = [
  {
    icon: "😔",
    title: "Serviços sem qualidade",
    description: "Unhas que descascam em dias, tratamentos que não trazem resultados..."
  },
  {
    icon: "😰",
    title: "Ambiente impessoal",
    description: "Locais lotados, pressa no atendimento, falta de atenção aos detalhes."
  },
  {
    icon: "😩",
    title: "Rotina exaustiva",
    description: "Dias stressantes sem um momento para cuidar de si própria."
  }
];

const PainSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-body uppercase tracking-widest text-primary mb-4 block">
            Entendemos como se sente
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Você merece mais do que apenas um procedimento
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Sabemos que encontrar um espaço que realmente cuide de si — 
            e não apenas do serviço — pode parecer impossível.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-background p-8 rounded-2xl shadow-soft text-center"
            >
              <span className="text-4xl mb-4 block">{point.icon}</span>
              <h3 className="font-display text-xl text-foreground mb-3">
                {point.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="font-display text-2xl md:text-3xl text-primary italic">
            "E se existisse um lugar onde a sua beleza natural é celebrada, 
            não mascarada?"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainSection;
