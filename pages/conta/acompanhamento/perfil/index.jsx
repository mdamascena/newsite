import AcompanhamentoLayout from "../../../../components/conta/AcompanhamentoLayout";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/router.js";
import { AvatarFallback, Avatar } from "components/ui/avatar.jsx";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowForward, IoMdInformationCircleOutline } from "react-icons/io";
import { CiLock } from "react-icons/ci";


export default function Perfil() {
    const router = useRouter();

    const handleBack = () => {
        router.push('/conta/acompanhamento/home');
    }
    return (
        <>
            <AcompanhamentoLayout>
                <div className="p-4 flex items-center border-b-1 border-gray-300">
                    <div className="w-full flex">
                        <IoMdArrowBack className="text-2xl text-gray-600 cursor-pointer" onClick={handleBack} />
                        <h1 className="w-full text-gray-600 font-medium text-center text-xl">Conta</h1>
                    </div>
                </div>

                <div className="p-10 flex gap-10 lg:gap-16 justify-center">
                    <div>
                        <div className="w-80 lg:w-96 border-1 border-gray-300 p-4 rounded-2xl shadow-md mb-5">

                            <Avatar className="w-16 h-16 mx-auto">
                                <AvatarFallback className="text-gray-500 tracking-wider">TD</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col items-center mt-4">
                                <span className="font-semibold text-lg">Thiago Bronisio Damascena</span>
                                <span className=" mt-1 text-sm">152.891.967-06</span>
                            </div>

                        </div>

                        <div className="w-80 lg:w-96 border-1 border-gray-300 p-4 rounded-2xl shadow-md">
                            <div className="border-b-1 border-gray-300 pb-2 mb-3">
                                <h2 className="text-gray-700 text-center font-semibold ">Informações Pessoais</h2>
                            </div>

                            <div className="relative">
                                <ul>
                                    <li className="flex gap-2 mb-2">
                                        <span className="text-gray-600 font-semibold">Nome:</span>
                                        <span className="text-gray-800 text-sm font-light">Thiago Bronisio Damascena</span>
                                    </li>
                                    <li className="flex gap-2 mb-2">
                                        <span className="text-gray-600 font-semibold">CPF:</span>
                                        <span className="text-gray-800 text-sm font-light">152.891.967-06</span>
                                    </li>
                                    <li className="flex gap-2 mb-2">
                                        <span className="text-gray-600 font-semibold">Nascimento:</span>
                                        <span className="text-gray-800 text-sm font-light">25/06/2001</span>
                                    </li>

                                    <li className="flex gap-2 mb-2">
                                        <span className="text-gray-600 font-semibold">RG:</span>
                                        <span className="text-gray-800 text-sm font-light">30.08.0488.48</span>
                                    </li>

                                    <li className="flex gap-2 mb-2">
                                        <span className="text-gray-600 font-semibold">Nome da mãe:</span>
                                        <span className="text-gray-800 text-sm font-light">Edilene Amorim Bronisio</span>
                                    </li>

                                    <li className="flex gap-2 mb-2">
                                        <span className="text-gray-600 font-semibold">Email:</span>
                                        <span className="text-gray-800 text-sm font-light">Thiagobronisioo@gmail.com</span>
                                    </li>

                                    <li className="flex gap-2 mb-1">
                                        <span className="text-gray-600 font-semibold">Celular:</span>
                                        <span className="text-gray-800 text-sm font-light">(21) 96584-6290</span>
                                        <div className="absolute bottom-0 right-0 bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                                            <MdOutlineEdit className="text-white cursor-pointer text-2xl" />
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="w-80 lg:w-96 border-1 border-gray-300 p-4 rounded-2xl shadow-md mb-4">
                            <div className="border-b-1 border-gray-300 pb-2 mb-3 flex items-center gap-2">
                                <FaRegUser className="text-xl" />
                                <h2 className="text-gray-700 text-lg font-semibold ">Conta</h2>
                            </div>

                            <div className="relative border-b-1 border-gray-300 pb-2 mb-3 flex items-center gap-2">
                                <span className="text-gray-700 text-md font-light">Editar Endereço</span>
                                <div className="absolute bottom-2 right-0 bg-blue-300 h-5 w-5 rounded-full flex items-center justify-center">
                                    <IoIosArrowForward className="text-white cursor-pointer text-sm" />
                                </div>
                            </div>

                            <div className="relative flex items-center gap-2">
                                <span className="text-gray-700 text-md font-light">Dados bancários</span>
                                <div className="absolute bottom-2 right-0 bg-blue-300 h-5 w-5 rounded-full flex items-center justify-center">
                                    <IoIosArrowForward className="text-white cursor-pointer text-sm" />
                                </div>
                            </div>
                        </div>

                        <div className="w-80 lg:w-96 border-1 border-gray-300 p-4 rounded-2xl shadow-md mb-4">
                            <div className="border-b-1 border-gray-300 pb-2 mb-3 flex items-center gap-2">
                                <CiLock className="text-xl" />
                                <h2 className="text-gray-700 text-lg font-semibold ">Segurança</h2>
                            </div>

                            <div className="relative flex items-center gap-2">
                                <span className="text-gray-700 text-md font-light">Alterar Senha</span>
                                <div className="absolute bottom-2 right-0 bg-blue-300 h-5 w-5 rounded-full flex items-center justify-center">
                                    <IoIosArrowForward className="text-white cursor-pointer text-sm" />
                                </div>
                            </div>
                        </div>

                        <div className="w-80 lg:w-96 border-1 border-gray-300 p-4 rounded-2xl shadow-md">
                            <div className="border-b-1 border-gray-300 pb-2 mb-3 flex items-center gap-2">
                                <IoMdInformationCircleOutline className="text-xl" />
                                <h2 className="text-gray-700 text-lg font-semibold ">Informações</h2>
                            </div>

                            <div className="relative border-b-1 border-gray-300 pb-2 mb-3 flex items-center gap-2">
                                <span className="text-gray-700 text-md font-light">Política de privacidade</span>
                                <div className="absolute bottom-2 right-0 bg-blue-300 h-5 w-5 rounded-full flex items-center justify-center">
                                    <IoIosArrowForward className="text-white cursor-pointer text-sm" />
                                </div>
                            </div>

                            <div className="relative flex items-center gap-2">
                                <span className="text-gray-700 text-md font-light">Termos de uso</span>
                                <div className="absolute bottom-2 right-0 bg-blue-300 h-5 w-5 rounded-full flex items-center justify-center">
                                    <IoIosArrowForward className="text-white cursor-pointer text-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AcompanhamentoLayout>
        </>
    );
}
