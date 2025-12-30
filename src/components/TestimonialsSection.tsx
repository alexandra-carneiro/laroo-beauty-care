import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Beatriz",
    service: "Estética Facial",
    text: "Finalmente encontrei um espaço onde me sinto verdadeiramente cuidada. A atenção aos detalhes e o ambiente são incomparáveis.",
    rating: 5
  },
  {
    name: "Mariana Costa",
    service: "Unhas & Pestanas",
    text: "As minhas unhas nunca duraram tanto! E o lifting de pestanas ficou tão natural. Recomendo a todas as minhas amigas.",
    rating: 5
  },
  {
    name: "Sofia Rodrigues",
    service: "Massagem de Relaxamento",
    text: "A massagem na Laroo é uma experiência transformadora. Saio de lá renovada e com energia para enfrentar a semana.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-body uppercase tracking-widest text-primary mb-4 block">
            Histórias Reais
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            O que dizem as nossas clientes
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Mulheres que descobriram um novo padrão de cuidado e bem-estar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-card p-8 rounded-2xl shadow-soft"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-body text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-lg text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
