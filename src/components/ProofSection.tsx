import { motion } from "framer-motion";
import { Star } from "lucide-react";
import serviceNails from "@/assets/service-nails.jpg";
import serviceLashes from "@/assets/service-lashes.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceMassage from "@/assets/service-massage.jpg";

const images = [serviceNails, serviceLashes, serviceFacial, serviceMassage];

const ProofSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
            Resultados Reais
          </h2>
          <p className="font-body text-muted-foreground">
            Veja o trabalho das nossas especialistas
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="aspect-square rounded-xl overflow-hidden"
            >
              <img 
                src={img} 
                alt={`Resultado ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl mx-auto bg-card rounded-2xl p-6 md:p-8 shadow-card text-center"
        >
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
            ))}
          </div>
          <blockquote className="font-body text-foreground leading-relaxed mb-4">
            "Finalmente encontrei um lugar onde me sinto realmente cuidada. 
            O ambiente é maravilhoso e os resultados são sempre impecáveis!"
          </blockquote>
          <cite className="font-body text-sm text-muted-foreground not-italic">
            — Maria S., cliente desde 2023
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;
