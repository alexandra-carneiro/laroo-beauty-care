import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Finalmente encontrei um lugar onde me sinto realmente cuidada. O ambiente é maravilhoso e os resultados são sempre impecáveis!",
    author: "Maria S.",
    detail: "cliente desde 2023"
  },
  {
    id: 2,
    text: "As minhas unhas nunca estiveram tão bonitas. A equipa é super atenciosa e o espaço transmite uma paz incrível.",
    author: "Ana P.",
    detail: "cliente desde 2024"
  }
];

const ProofSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl text-primary-foreground mb-2">
            O Que Dizem as Nossas Clientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <Quote className="w-10 h-10 text-secondary/60 mb-4" />
              <p className="font-body text-primary-foreground/90 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center">
                  <span className="font-display text-lg text-primary-foreground">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <cite className="font-body font-semibold text-primary-foreground not-italic block">
                    {testimonial.author}
                  </cite>
                  <span className="font-body text-sm text-primary-foreground/70">
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
