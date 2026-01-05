import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import serviceNails from "@/assets/service-nails.jpg";


import serviceLashes from "@/assets/service-lashes.jpg";

const services = [
  {
    id: "unhas",
    title: "Unhas em Gel",
    description: "Manicure, Gelinho e Nail Art.",
    price: "Desde 15€",
    image: "/company-photos/services/Unhas.jpeg"
  },
  {
    id: "sobrancelhas",
    title: "Design de Sobrancelhas",
    description: "Design, Henna e Brow Lamination.",
    price: "Desde 10,50€",
    image: "/company-photos/services/Sobrancelhas.jpeg"
  },
  {
    id: "pestanas",
    title: "Pestanas",
    description: "Lifting e Extensão Natural.",
    price: "Desde 35€",
    image: "/company-photos/services/pestanas 1.jpeg"
  },
  {
    id: "facial",
    title: "Facial",
    description: "Limpeza e Hidratação Profunda.",
    price: "Desde 45€",
    image: "/company-photos/services/Limpeza de Pele.jpeg"
  },
  {
    id: "massagens",
    title: "Massagens",
    description: "Relaxantes e Terapêuticas.",
    price: "Desde 20€",
    image: "/company-photos/services/Massagem.jpeg"
  },
  {
    id: "spa-pes",
    title: "Spa dos Pés",
    description: "Relaxamento e Cuidado.",
    price: "15€",
    image: "/company-photos/services/spa dos pes.jpeg"
  },
  {
    id: "laser",
    title: "Epilação",
    description: "Laser e Cera.",
    price: "Desde 10€",
    image: "/company-photos/services/laser.jpeg"
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="bg-sand min-h-[calc(100svh-5rem)] flex flex-col justify-center py-12 md:py-16">
      <div className="container flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="font-display text-4xl md:text-5xl italic text-terracotta mb-2 font-medium">
            Nossos Serviços
          </p>

          <p className="font-body text-muted-foreground mt-2 max-w-lg mx-auto text-lg">
            Procedimentos realizados com materiais premium e foco na saúde da sua pele.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-stretch">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-offwhite rounded-3xl overflow-hidden shadow-sm hover:shadow-elevated transition-shadow duration-500 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="aspect-[4/5] overflow-hidden w-full relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content below image */}
              <div className="flex flex-col p-4 flex-grow bg-white/50 backdrop-blur-sm">
                <h3 className="font-display text-xl text-foreground mb-1 leading-tight">
                  {service.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground/90 mb-3 leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-border/50">
                  <span className="font-body text-base font-medium text-secondary">
                    {service.price}
                  </span>
                  <a
                    href="#agendar"
                    className="w-8 h-8 rounded-full bg-sand flex items-center justify-center hover:bg-terracotta hover:text-white transition-all duration-300 text-foreground"
                    aria-label={`Agendar ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
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
