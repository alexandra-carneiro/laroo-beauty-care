import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "O melhor sítio em Coimbra para fazer as unhas. A delicadeza e o ambiente fazem toda a diferença. Saio sempre renovada.",
    author: "Mariana Costa",
    detail: "Cliente Frequente",
    initial: "M"
  },
  {
    id: 2,
    text: "Adorei a limpeza de pele! Senti a minha pele respirar de novo. O atendimento é impecável.",
    author: "Sofia Mendes",
    detail: "Primeira Visita",
    initial: "S"
  }
];

const ProofSection = () => {
  return (
    <section className="section-padding bg-sand">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Histórias de quem já nos visitou
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-background rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="font-body text-foreground text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-xl text-primary">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <cite className="font-body font-semibold text-foreground not-italic block">
                    {testimonial.author}
                  </cite>
                  <span className="font-body text-sm text-muted-foreground">
                    {testimonial.detail}
                  </span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
