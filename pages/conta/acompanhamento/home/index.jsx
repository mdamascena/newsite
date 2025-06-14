import Acompanhamento from "../index.jsx";
import { usePathname } from "next/navigation";
import Logotipo from "../../../../public/img/LOGO_AZUL.png"
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";


export default function Home() {

    const rota = usePathname();

    return (
        <Acompanhamento>
            
            <div className="flex items-center justify-between w-full">

                <div className="md:p-6 px-6 py-4 w-full">
                    <h1 className="text-2xl font-bold mb-1">Olá, Thiago</h1>
                    <p className="text-gray-700 text-sm">Como podemos te ajudar?</p>
                </div>

                <div className="w-full flex justify-end  items-center pr-6">
                    <IoMdNotificationsOutline className="text-3xl text-blue-600" />
                </div>

            </div>

        </Acompanhamento>
    )
}