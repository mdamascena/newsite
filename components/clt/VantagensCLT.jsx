import React from 'react';
import { DollarSign, Smartphone, ShoppingCart, RefreshCw } from 'lucide-react';

export default function VantagensCLT() {

    const vantagens = [
        {
            icon: <DollarSign className="w-8 h-8 text-white" strokeWidth={2.5} />,
            title: "Gateway de Pagamento de Alta Conversão",
            description: "Aumente suas vendas com nosso gateway de pagamento eficiente e de alta conversão. melhores taxas e aumento nas conversões com segurança que todos merecem."
        },
        {
            icon: <Smartphone className="w-8 h-8 text-white" strokeWidth={2.5} />,
            title: "Checkout Simples e Intuitivo",
            description: "Proporcione aos seus clientes uma experiência de checkout sem complicações. Com maior taxa de conversão, menos carrinhos abandonados e mais vendas concluídas."
        },
        {
            icon: <ShoppingCart className="w-8 h-8 text-white" strokeWidth={2.5} />,
            title: "Dropshipping Facilitado",
            description: "Inicie sua operação de dropshipping de forma rápida e da forma certa. Integração perfeita vários parceiros, gerenciamento e expansão do seu negócio sem se preocupar em perde seu dinheiro."
        },
        {
            icon: <RefreshCw className="w-8 h-8 text-white" strokeWidth={2.5} />,
            title: "Integração com as suas lojas",
            description: "Conecte sua loja Shopify a SafePay para o gerenciamento dos seus pagamentos. Sincronização automática, relatórios detalhados e controle total."
        }
    ];

    return (
        <section className="bgMainPrincipal select-none">

            <div className="container-custom pt-16">
                
                
                <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-16 md:mb-20">
                        <h1 className="text-2xl md:text-4xl font-semibold text-white mb-6 tracking-tight">
                            Conheça nossas vantagens
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
                            A única plataforma que se adapta às necessidades do seu negócio.
                        </p>
                    </div>

                    {/* Grid de Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-20">
                        {vantagens.map((vantagem, index) => (
                            <div 
                                key={index}
                                className="bg-black/15 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-blue-500/30 transition-colors duration-300 flex flex-col h-full shadow-xl">
                                <div className="bg-blue-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                                    {vantagem.icon}
                                </div>
                                <h3 className="text-blue-400 text-xl mb-4 font-semibold leading-snug tracking-tight">
                                    {vantagem.title}
                                </h3>
                                <p className="text-slate-300 leading-relaxed text-sm md:text-base tracking-tight">
                                    {vantagem.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="flex justify-center relative">
                        <button className="bg-linear-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 text-slate-950 font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_rgba(59,130,246,0.7)] uppercase tracking-wider text-sm md:text-base cursor-pointer">
                            Quero Cadastrar Agora
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}