import Image from "next/image";
import LogoB from "../../../../public/img/LOGO_FULL_BRANCO.png";
import Address from '../../../../components/fgts/form/Address';


<div className="grid grid-cols-1 lg:grid-cols-5 h-[100vh]">
    <div className="m-2 col-span-2 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 saturate-150 rounded-xl">
        <div className="p-6 lg:p-10 flex justify-end">
            <Image src={LogoB} width={130} alt='' />
        </div>
    </div>

    <div className="col-span-1 lg:col-span-3 text-slate-400 lg:max-w-3xl lg:px-6 mt-8">
        <div className="">
            <Address />
        </div>
    </div>
</div>