import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const photos = [
    { src: "/company-photos/unhas 1.jpeg", alt: "Trabalho de Unhas 1" },
    { src: "/company-photos/unhas 2.jpeg", alt: "Trabalho de Unhas 2" },
    { src: "/company-photos/detalhes loja 1.jpeg", alt: "Detalhes do Espaço" },
    { src: "/company-photos/pestanas 1.jpeg", alt: "Trabalho de Pestanas" },
    { src: "/company-photos/frente de loja.jpeg", alt: "Frente da Loja" },
];

const GallerySection = () => {
    return (
        <section className="bg-background min-h-[calc(100svh-5rem)] flex flex-col justify-start pt-10 pb-16 md:pt-12 md:pb-20">
            <div className="container">
                <div className="text-center mb-6">
                    <p className="font-display text-3xl md:text-4xl italic text-terracotta mb-2">
                        Nosso Portfólio
                    </p>
                </div>

                <div className="max-w-full px-4 md:px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {photos.map((photo, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <div className="overflow-hidden rounded-2xl aspect-[3/4] shadow-md border border-border/50">
                                            <img
                                                src={photo.src}
                                                alt={photo.alt}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
