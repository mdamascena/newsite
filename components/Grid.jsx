import Image from "next/image"
import ree from '../public/favicon.png'

export default function Grid(){
    return(
        <>
            <div className="grid grid-cols-4 m-5 gap-2">

                <div className="col-span-4 lg:col-span-1 bg-blue-400 text-center p-3">Coluna #1</div>
                <div className="col-span-2 lg:col-span-1 bg-yellow-400 text-center p-3">Coluna #2</div>
                <div className="col-span-2 lg:col-span-1 bg-green-400 text-center p-3">Coluna #3</div>
                <div className="col-span-4 lg:col-span-1 bg-gray-400 text-center p-3">

                    <Image src={ree} width={20} height={20} />

                </div>
                

            </div>
        </>
    )
}