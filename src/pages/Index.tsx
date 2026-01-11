import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import OwnerSection from "@/components/OwnerSection";
import ConceptSection from "@/components/ConceptSection";
import ProofSection from "@/components/ProofSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Laroo Beauty & Care | Estética em Coimbra - Unhas, Pestanas, Facial</title>
        <meta
          name="description"
          content="Laroo Beauty & Care em Coimbra. Unhas de Gel desde 15€, Pestanas desde 25€, Facial desde 40€ e Spa desde 35€. Agende agora!"
        />
        <meta name="keywords" content="unhas gel Coimbra, pestanas Coimbra, estética facial, massagem relaxamento, manicure Coimbra" />
        <link rel="canonical" href="https://laroo-beauty-care.vercel.app/" />
        <meta property="og:title" content="Laroo Beauty & Care | Estética em Coimbra" />
        <meta property="og:description" content="Especialistas em Unhas de Gel, Pestanas, Estética Facial e Spa. Agende agora!" />
        <meta property="og:url" content="https://laroo-beauty-care.vercel.app/" />
        <meta property="og:image" content="https://laroo-beauty-care.vercel.app/company-photos/concept-spa.webp" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Laroo Beauty & Care",
            "description": "Estúdio de Estética em Coimbra - Unhas, Pestanas, Facial e Spa",
            "url": "https://laroo-beauty-care.vercel.app/",
            "image": [
              "https://laroo-beauty-care.vercel.app/company-photos/concept-spa.webp"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Armando de Sousa, Loja 11",
              "addressLocality": "Coimbra",
              "postalCode": "3030-403",
              "addressCountry": "PT"
            },
            "priceRange": "€-€€",
            "telephone": "+351910248906",
            "openingHours": "Tu-Sa 09:00-19:00"
          })}
        </script>
      </Helmet>

      <Navbar />

      <main id="main-content">
        <Hero />
        <ServicesSection />
        <GallerySection />
        <OwnerSection />
        <ConceptSection />
        <ProofSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
