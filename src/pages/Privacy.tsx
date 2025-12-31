import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="container py-32 max-w-4xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">Política de Privacidade</h1>

                <div className="prose prose-stone max-w-none text-muted-foreground font-body">
                    <p>Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>

                    <h3>1. Introdução</h3>
                    <p>
                        O Laroo Beauty & Care respeita a sua privacidade e compromete-se a proteger os seus dados pessoais.
                        Esta política de privacidade informá-lo-á sobre como cuidamos dos seus dados pessoais quando visita o
                        nosso website e informa-o sobre os seus direitos de privacidade e como a lei o protege.
                    </p>

                    <h3>2. Os dados que recolhemos</h3>
                    <p>
                        Podemos recolher, usar, armazenar e transferir diferentes tipos de dados pessoais sobre si, que agrupamos da seguinte forma:
                    </p>
                    <ul>
                        <li><strong>Dados de Identidade:</strong> inclui primeiro nome, apelido.</li>
                        <li><strong>Dados de Contacto:</strong> inclui endereço de email e números de telefone.</li>
                        <li><strong>Dados Técnicos:</strong> inclui endereço de protocolo de internet (IP), tipo e versão do navegador, configuração e localização do fuso horário.</li>
                    </ul>

                    <h3>3. Como usamos os seus dados pessoais</h3>
                    <p>
                        Só usaremos os seus dados pessoais quando a lei nos permitir. Mais comummente, usaremos os seus dados pessoais nas seguintes circunstâncias:
                    </p>
                    <ul>
                        <li>Para gerir o agendamento dos seus serviços.</li>
                        <li>Para entrar em contacto consigo sobre alterações nos serviços.</li>
                        <li>Para melhorar o nosso website e serviços.</li>
                    </ul>

                    <h3>4. Segurança dos dados</h3>
                    <p>
                        Estabelecemos medidas de segurança adequadas para evitar que os seus dados pessoais sejam acidentalmente perdidos,
                        usados ou acedidos de forma não autorizada, alterados ou divulgados.
                    </p>

                    <h3>5. Os seus direitos legais</h3>
                    <p>
                        Sob certas circunstâncias, tem direitos sob as leis de proteção de dados em relação aos seus dados pessoais,
                        incluindo o direito de solicitar acesso, correção, apagamento, restrição, transferência, ou de retirar o consentimento.
                    </p>

                    <h3>6. Contacto</h3>
                    <p>
                        Para quaisquer questões sobre esta política de privacidade, por favor contacte-nos através dos canais oficiais listados no site.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy;
