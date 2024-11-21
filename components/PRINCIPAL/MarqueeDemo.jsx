import { cn } from "../lib/utils"
import Marquee from "../ui/marquee"
import PropTypes from "prop-types"
import { FaInstagram } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import Image from "next/image"
import jose from '../../public/img/avatar_jose.png'
import maria from '../../public/img/avatar_maria.png'
import renato from '../../public/img/avatar_renato.png'
import anaPaula from '../../public/img/avatar_anapaula.png'
import eduardo from '../../public/img/avatar_eduardo.png'
import evaldo from '../../public/img/avatar_evaldo.png'
import arlete from '../../public/img/avatar_arlete.png'
import sandra from '../../public/img/avatar_sandra.png'
import penha from '../../public/img/avatar_penha.png'
import marcelo from '../../public/img/avatar_marcelo.png'
import fernanda from '../../public/img/avatar_fernanda.png'
import renan from '../../public/img/avatar_renan.png'

const reviews = [
    {
        name: "Jose Silverio Lima",
        username: "@joseLima",
        body: "Prático e rápido! Recomendo.",
        img: jose,
        avaliacao:"⭐⭐⭐⭐⭐",
        rede:<FaInstagram className="text-fuchsia-700 ml-auto text-3xl"/>,
    },
    {
        name: "Maria Clara",
        username: "@mariaClarinha",
        body: "Ótimo atendimento e muito confiável!",
        img: maria,
        avaliacao:"⭐⭐⭐⭐⭐",
        rede:<FaFacebookSquare className="text-blue-700 ml-auto text-3xl"/>
    },
    {
        name: "Renato Jirari",
        username: "@JirariR",
        body: "Bom, mas o site poderia ser mais intuitivo.",
        img: renato,
        avaliacao:"⭐⭐⭐⭐",
        rede:<FaXTwitter className="text-black ml-auto text-3xl"/>
    },
    {
        name: "Ana Paula Souza",
        username: "@paulaMed32",
        body: "Uso há anos, sempre seguro e eficaz",
        img: anaPaula,
        avaliacao:"⭐⭐⭐⭐",
        rede:<FaXTwitter className="text-black ml-auto text-3xl"/>
    },
    {
        name: "Evaldo Moreira",
        username: "@evaldoM88",
        body: "Simples e direto, mas o limite poderia ser melhor.",
        img: evaldo,
        avaliacao:"⭐⭐⭐⭐",
        rede:<FaFacebookSquare className="text-blue-700 ml-auto text-3xl"/>
    },
    {
        name: "Arlete Felix",
        username: "@arleteF56",
        body: "A taxa de juros poderia ser melhor.",
        img: arlete,
        avaliacao:"⭐⭐",
        rede:<FaFacebookSquare className="text-blue-700 ml-auto text-3xl"/>
    },
    {
        name: "Maria da Penha",
        username: "@penhaTia",
        body: "Eu gostei bastante, foi tudo bem. Chamei no ZAP",
        img: penha,
        avaliacao:"⭐⭐⭐⭐⭐",
        rede:<FaFacebookSquare className="text-blue-700 ml-auto text-3xl"/>
    },
    {
        name: "Eduardo Gomes",
        username: "@EduardoGomes5",
        body: "Demorou mais que o esperado desta vez!!!",
        img: eduardo,
        avaliacao:"⭐⭐⭐",
        rede:<FaInstagram className="text-fuchsia-700 ml-auto text-3xl"/>
    },
    {
        name: "Sandra Andrade",
        username: "@sanadrade10",
        body: "Já sou cliente deles a bastante tempo, não tive problemas",
        img: sandra,
        avaliacao:"⭐⭐⭐⭐⭐",
        rede:<FaInstagram className="text-fuchsia-700 ml-auto text-3xl"/>
    },
    {
        name: "Marcelo da Silva",
        username: "@marcelosd",
        body: "Sempre confiei neles. Rápido e seguro!",
        img: marcelo,
        avaliacao:"⭐⭐⭐⭐⭐",
        rede:<FaXTwitter className="text-black ml-auto text-3xl"/>
    },
    {
        name: "Fernanda Barbosa",
        username: "@nandablima38",
        body: "Achei super de boa, não tive problema nenhum",
        img: fernanda,
        avaliacao:"⭐⭐⭐⭐⭐",
        rede:<FaInstagram className="text-fuchsia-700 ml-auto text-3xl"/>
    },
    {
        name: "Renan Pereira",
        username: "@renanPG",
        body: "Até que liberou um limite. Mas eu precisava de mais",
        img: renan,
        avaliacao:"⭐⭐⭐",
        rede:<FaXTwitter className="text-black ml-auto text-3xl"/>
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body, avaliacao,rede }) => {
  return (
    <figure
        className={cn(
            "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4",
            "bg-white hover:scale-105 hover:border-2 duration-250 border border-slate-200",
        )}>

        <div className="flex flex-row items-center gap-2 select-none">
            <Image className="rounded-full" width="44" height="44" alt="" src={img} />
                
            <div className="flex flex-col">
                <figcaption className="text-sm text-black">
                    {name}
                </figcaption>
                <p className="text-xs font-light text-slate-400">
                    {username}
                </p>
            </div>
            {rede}
        </div>

        <blockquote className="mt-2 text-sm h-10 font-light">
            {body}
        </blockquote>
        <div>
            {avaliacao}
        </div>
    </figure>
  );
};

// PropTypes validation for ReviewCard component
ReviewCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    avaliacao: PropTypes.string.isRequired,
    rede: PropTypes.element.isRequired,
};

export function MarqueeDemo() {
  return (
    <div className="bg-white select-none">

        <div className="relative flex py-24 lg:w-full flex-col items-center justify-center overflow-x-hidden bg-slate-100 container-custom">
            
            <div className="lg:mb-10 mb-5 -mt-5 mx-12">
                <h1 className="text-slate-400 text-center lg:text-4xl text-2xl tracking-tight font-semibold">
                    O que as avaliações dizem sobre nós
                </h1>
                <h2 className="text-slate-400 text-center lg:text-lg text-md tracking-tight font-light">
                    Confira o que as pessoas dizem sobre nossos serviços.
                </h2>
            </div>

            <Marquee pauseOnHover className="[--duration:50s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:50s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            
            <div className="pointer-events-none absolute inset-y-0 left-0 lg:w-1/3 w-16 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 lg:w-1/3 w-16 bg-gradient-to-l from-white"></div>
    
        </div>
    </div>
  );
}