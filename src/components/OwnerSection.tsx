import { motion } from "framer-motion";

const OwnerSection = () => {
    return (
        <section className="bg-sand min-h-[calc(100svh-4rem)] flex flex-col justify-center py-12 md:py-24">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 md:order-1"
                    >
                        <div className="aspect-[3/4] max-w-[320px] mx-auto overflow-hidden rounded-full border-4 border-white shadow-elevated">
                            <img
                                src="/company-photos/proprietaria laryssa.jpeg"
                                alt="Laryssa - Especialista Laroo Beauty Care"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-terracotta/20 rounded-full blur-2xl z-[-1]" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-left order-1 md:order-2"
                    >
                        <p className="font-display text-3xl md:text-4xl italic text-terracotta mb-4">
                            A Fundadora
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                            Olá, eu sou a Laryssa
                        </h2>

                        <p className="font-body text-lg text-moss/80 leading-relaxed mb-6">
                            Bem-vinda ao Laroo Beauty Care.
                        </p>

                        <p className="font-body text-moss/70 leading-relaxed mb-6">
                            Criei este espaço com um propósito simples: transformar o seu momento de beleza numa experiência de autocuidado genuíno. Acredito que cada detalhe importa, desde a escolha dos produtos cruelty-free até ao ambiente acolhedor que preparei para si.
                        </p>

                        <div className="inline-block p-4 border border-terracotta/30 rounded-xl bg-white/50 backdrop-blur-sm">
                            <p className="font-display text-terracotta text-lg italic">
                                "Beleza não é apenas estética, é sentir-se bem na sua própria pele."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OwnerSection;
