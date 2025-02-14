import Image from "next/image"
import LogoB from "../../../public/img/LOGO_FULL_BRANCO.png"
import { useRouter } from "next/router"
import { HiOutlineArrowLongLeft } from "react-icons/hi2"
import CharForm from "../ChartForm"
import PageTrans from "../PageTransicao"

export default function BaseForm({steps, titulo, descricao, progress, stepCurrent}) {
  
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    
    <main className="bg-slate-100 min-h-[100vh] select-none">

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[100vh]">
            <div className="col-span-1 bgForm rounded-2xl m-2 !sticky top-1">
                
                <div className="relative lg:mx-14">
                    
                    <div className="flex justify-between items-center px-5 pt-2 lg:px-0 lg:pt-0 lg:min-h-[25vh]">
                        <HiOutlineArrowLongLeft
                            className="text-6xl text-white cursor-pointer lg:p-2 w-10 lg:w-20"
                            onClick={handleBack}
                        />
                        <Image className="w-28 lg:w-40" src={LogoB} width={200} alt="" />
                    </div>

                    <div className="text-end hidden lg:block content-center lg:min-h-[30vh]">
                        <div className="mr-5 lg:mr-0 mb-2">
                            <h1 className="text-white font-extralight lg:font-semibold lg:text-3xl text-md ml-2">
                                {titulo}
                            </h1>
                        </div>
                        
                        <div className="">
                            <p className="text-blue-200 ml-2">
                                {descricao}
                            </p>
                        </div>
                    </div>

                    <div className="content-end lg:min-h-[40vh]">
                        <CharForm stepsChart={stepCurrent} value={progress} />
                    </div>
                </div>
            </div>

            <div className="col-span-1 lg:px-28 items-center grid px-6">
                {steps}
            </div>
        </div>
    </main>
  );
}
