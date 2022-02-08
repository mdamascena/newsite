import Image from "next/image";
import Logo from '../public/img/LOGO_BRANCA.png'

export default function Logo(){
    return <Image src={Logo} width={150} height={33} />
}