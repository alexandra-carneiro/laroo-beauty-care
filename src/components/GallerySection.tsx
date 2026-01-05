import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

const photos = [
    { src: "/company-photos/portfolio/Galeria 1.jpeg", alt: "Trabalho de Unhas" },
    { src: "/company-photos/portfolio/Galeria 2.jpeg", alt: "Trabalho de Unhas Detalhe" },
    { src: "/company-photos/portfolio/Galeria 3.jpeg", alt: "Ambiente" },
    { src: "/company-photos/portfolio/detalhes loja 1.jpeg", alt: "Detalhes do Espaço" },
    { src: "/company-photos/portfolio/pestanas 1.jpeg", alt: "Trabalho de Pestanas" },
    { src: "/company-photos/portfolio/frente de loja.jpeg", alt: "Frente da Loja" },
];

const GallerySection = () => {
    return (
        <section className="bg-background min-h-[calc(100svh-5rem)] flex flex-col justify-start pt-10 pb-16 md:pt-12 md:pb-20">
            <div className="container">
                <div className="text-center mb-6">
                    <p className="font-display text-3xl md:text-4xl italic text-terracotta mb-2">
                        Nosso Portfólio
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                        Clique na imagem para ampliar
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
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <div className="overflow-hidden rounded-2xl aspect-[3/4] shadow-md border border-border/50 cursor-zoom-in group">
                                                    <img
                                                        src={photo.src}
                                                        alt={photo.alt}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-[95vw] max-h-[90vh] p-0 border-none bg-transparent shadow-none flex items-center justify-center">
                                                <img
                                                    src={photo.src}
                                                    alt={photo.alt}
                                                    className="max-w-full max-h-[90vh] object-contain rounded-lg"
                                                />
                                            </DialogContent>
                                        </Dialog>
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
