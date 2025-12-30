import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Laroo Beauty & Care | Estúdio de Estética e Bem-estar em Coimbra</title>
        <meta 
          name="description" 
          content="Descubra o novo conceito de beleza natural em Coimbra. Unhas, estética facial, pestanas, massagens e epilação num ambiente exclusivo e acolhedor. Agende agora." 
        />
        <meta name="keywords" content="estética Coimbra, manicure Coimbra, massagem relaxamento, pestanas naturais, beleza natural, spa Coimbra" />
        <link rel="canonical" href="https://laroobeauty.pt" />
        <meta property="og:title" content="Laroo Beauty & Care | Estética e Bem-estar em Coimbra" />
        <meta property="og:description" content="Um novo conceito de beleza natural em Coimbra. Experimente tratamentos exclusivos num ambiente de puro bem-estar." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Laroo Beauty & Care",
            "description": "Estúdio de Estética e Bem-estar em Coimbra",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coimbra",
              "addressCountry": "PT"
            },
            "priceRange": "€€",
            "openingHours": "Tu-Sa 09:00-19:00"
          })}
        </script>
      </Helmet>

      <Navbar />
      
      <main>
        <Hero />
        <PainSection />
        <SolutionSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
