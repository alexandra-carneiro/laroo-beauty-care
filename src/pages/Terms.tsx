import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="container py-32 max-w-4xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">Termos e Condições</h1>

                <div className="prose prose-stone max-w-none text-muted-foreground font-body">
                    <p>Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>

                    <h3>1. Aceitação dos Termos</h3>
                    <p>
                        Ao aceder e utilizar este website, aceita e concorda em estar vinculado pelos termos e disposições deste acordo.
                    </p>

                    <h3>2. Serviços</h3>
                    <p>
                        O Laroo Beauty & Care fornece serviços de estética e bem-estar. Os preços e disponibilidade dos serviços estão sujeitos a alterações sem aviso prévio.
                    </p>

                    <h3>3. Agendamentos e Cancelamentos</h3>
                    <p>
                        Pedimos que qualquer cancelamento ou reagendamento seja feito com pelo menos 24 horas de antecedência.
                        O não comparência ou cancelamentos tardios podem estar sujeitos a taxas.
                    </p>

                    <h3>4. Propriedade Intelectual</h3>
                    <p>
                        Todo o conteúdo incluído neste site, como texto, gráficos, logotipos, imagens, é propriedade do Laroo Beauty & Care ou dos seus fornecedores de conteúdo
                        e protegido pelas leis de direitos de autor internacionais e portuguesas.
                    </p>

                    <h3>5. Limitação de Responsabilidade</h3>
                    <p>
                        O Laroo Beauty & Care não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes
                        do uso ou da incapacidade de usar os nossos serviços.
                    </p>

                    <h3>6. Lei Aplicável</h3>
                    <p>
                        Estes termos e condições são regidos e interpretados de acordo com as leis de Portugal e submete-se irrevogavelmente à jurisdição exclusiva dos tribunais desse local.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Terms;
