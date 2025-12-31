import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "O melhor sítio em Coimbra para fazer as unhas. A delicadeza e o ambiente fazem toda a diferença. Saio sempre renovada.",
    author: "Mariana Costa",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjW..." // Placeholder for Google User Image
  },
  {
    id: 2,
    text: "Adorei a limpeza de pele! Senti a minha pele respirar de novo. O atendimento é impecável.",
    author: "Sofia Mendes",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjW..."
  },
  {
    id: 3,
    text: "Simplesmente maravilhoso. Fiz massagem de relaxamento e foi o melhor investimento que fiz em mim mesma este mês.",
    author: "Joana Silva",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjW..."
  },
  {
    id: 4,
    text: "Espaço muito acolhedor e serviço de excelência. Faço as unhas de gel com a Laryssa há anos e não troco por nada!",
    author: "Carla Ferreira",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjW..."
  }
];

const ProofSection = () => {
  return (
    <section className="bg-sand min-h-[calc(100svh-5rem)] flex flex-col justify-center py-12 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Avaliações de quem já nos visitou
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
              <p className="font-body text-foreground text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sand overflow-hidden flex-shrink-0">
                  {testimonial.image ? (
                    <img
                      src="/company-photos/google-avatar-placeholder.png"
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.author}&background=random`
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-display text-xl">
                      {testimonial.author[0]}
                    </div>
                  )}
                </div>
                <div>
                  <cite className="font-body font-semibold text-foreground not-italic block">
                    {testimonial.author}
                  </cite>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-secondary text-secondary" />
                    ))}
                  </div>
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
