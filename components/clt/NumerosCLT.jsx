import { PiHandCoinsLight } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { CiBadgeDollar } from "react-icons/ci";

const num =[
    {
        icon: PiHandCoinsLight,
        num:"96x",
        titulo:"Pagamento facilitado",
        descricao:"Parcelas que cabem no seu bolso, com desconto direto no contracheque."
    },
    {
        icon: BsGraphUpArrow,
        num:"89%",
        titulo:"Taxa de aprovação",
        descricao:"Aprovação em mais de 80% dos pedidos, com análise rápida sem complicação."
    },
    {
        icon: AiOutlineLike,
        num:"4.7",
        titulo:"Satisfação comprovada",
        descricao:"Nota 4,7 em satisfação: atendimento ágil, transparente e com suporte do início ao fim."
    },
    {
        icon: CiBadgeDollar,
        num:"35%",
        titulo:"Margem consignado",
        descricao:"Parcelas que cabem no seu bolso, com desconto direto no contracheque."
    }
]


export default function NumerosCLT(){
    return(
        <section className="bg-slate-200 py-10">
            <div className="container-custom text-slate-400">
                
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {num.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className={`col-span-1 px-5 py-6 min-w-0
                                ${(index === 0 ? "border-b-2 lg:border-b-0 border-slate-300" : "")}  
                                ${(index === 1 ? "border-l-2 border-b-2 lg:border-b-0 border-slate-300" : "")} 
                                ${(index === 2 ? "lg:border-l-2 border-slate-300":"")} 
                                ${(index === 3 ? "border-l-2 border-slate-300":"")} 
                                `}>
                                <div className="flex justify-between items-center text-4xl mb-2">
                                    <h1 className="font-semibold tracking-tighter">
                                        {item.num}
                                    </h1>
                                    {Icon && <Icon/>}
                                </div>
                                <div>
                                    <h1 className="mb-2 font-semibold">{item.titulo}</h1>
                                    <p className="wrap-break-word text-xs">
                                        {item.descricao}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
