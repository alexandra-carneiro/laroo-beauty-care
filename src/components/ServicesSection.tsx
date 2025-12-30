import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import serviceNails from "@/assets/service-nails.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceMassage from "@/assets/service-massage.jpg";
import serviceLashes from "@/assets/service-lashes.jpg";

const services = [
  {
    id: "unhas",
    title: "Unhas & Gel",
    description: "Manicure, Gelinho e Nail Art.",
    price: "Desde 15€",
    image: serviceNails
  },
  {
    id: "pestanas",
    title: "Pestanas",
    description: "Lifting e Extensão Natural.",
    price: "Desde 25€",
    image: serviceLashes
  },
  {
    id: "facial",
    title: "Facial",
    description: "Limpeza e Hidratação Profunda.",
    price: "Desde 40€",
    image: serviceFacial
  },
  {
    id: "spa",
    title: "Spa & Relax",
    description: "Massagens e rituais de paz.",
    price: "Desde 35€",
    image: serviceMassage
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-sand">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm uppercase tracking-widest text-muted-foreground mb-3">
            Nossos Serviços
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Menu de Beleza
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            Procedimentos realizados com materiais premium e foco na saúde da sua pele.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:shadow-elevated transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl mb-1">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-white/80 mb-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-body text-lg font-medium text-secondary">
                    {service.price}
                  </span>
                  <a 
                    href="#agendar"
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label={`Agendar ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
