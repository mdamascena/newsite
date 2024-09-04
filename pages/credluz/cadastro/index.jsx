import Image from "next/image"
import LogoB from "../../../public/img/LOGO_FULL_BRANCO.png"
import { Poppins } from 'next/font/google'
import { useRouter } from 'next/router'
import { HiOutlineArrowLongLeft } from "react-icons/hi2"
import CharLG from "../../../components/CREDLUZ/FORM/ChartForm"
import { FormProviderLuz } from "../../../context/FormContextLuz"
import { FormCredLuz } from "../../../components/CREDLUZ/FORM"

const mainFontFamily = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
});

export default function Cadastro() {

    const router = useRouter();
    const handleBack = () => {
        router.back();
    }

    return (

        <main className="bg-slate-50">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="col-span-1 bgForm rounded-2xl lg:!h-[97.5vh] m-2 !sticky top-1">
                    <div className="relative lg:m-14">
                        <div className="flex justify-between items-center px-5 pt-3 lg:px-0 lg:pt-0">
                            <HiOutlineArrowLongLeft className='text-6xl text-white cursor-pointer lg:p-2 w-10 lg:w-20' onClick={handleBack} />
                            <Image className="w-32 lg:w-40" src={LogoB} width={200} alt='' />
                        </div>
                        <div className="lg:mt-[22vh] text-end hidden lg:block">
                            <div className="mr-5 lg:mr-0 mb-2">
                                <h1 className="text-white font-extralight lg:font-semibold lg:text-3xl text-md ml-2">
                                    Vamos criar a sua conta
                                </h1>
                            </div>
                            <div className="">
                                <p className="text-sm text-white ml-2">
                                    Primeiro passo. Vamos criar o seu login de acesso
                                </p>
                            </div>
                        </div>
                        <CharLG className='lg:mt-36' />
                    </div>
                </div>

                <div className="col-span-1 lg:px-28 items-center grid mt-3 px-5">
                    <FormProviderLuz className={mainFontFamily.className}>
                        <FormCredLuz />
                    </FormProviderLuz>
                </div>

            </div>
        </main>
    );
}
