import tw from 'tailwind-styled-components'
import {HiArrowUturnLeft} from 'react-icons/hi2'

const Btn = tw.button`
    col-span-1    
    py-6 
    px-3 
    bg-btncalc
    saturate-150
    hover:bg-yellow-400
    focus:bg-yellow-500
    duration-300
    text-white 
    rounded-md
`
const BtnVolta = tw.button`
    col-span-1    
    py-2
    flex-1
    justify-center 
    items-center
    saturate-150
    bg-blue-700
    hover:bg-blue-800 
    focus:bg-blue-950
    duration-300
    text-white 
    rounded-md
`
export default function PMT700({setShowCalc}){

    return(
        <div className='p-1'>

            <h2 className='text-center mb-2 poppins text-white'>Selecione o prazo desejado</h2>

            <div className='rounded-lg bg-white/25 text-md py-4 px-1 mx-1'>
                
                <div className="grid grid-cols-2 gap-1 mb-1">
                    <Btn id='pmt_700_12'>12 X</Btn>
                    <Btn id='pmt_700_15'>15 X</Btn>
                </div>

                <div className="grid grid-cols-2 gap-1 mb-1">
                    <Btn id='pmt_700_16'>16 X</Btn>
                    <Btn id='pmt_700_18'>18 X</Btn>
                </div>

                <div className="grid grid-cols-2 gap-1">
                    <Btn id='pmt_700_20'>20 X</Btn>

                    <BtnVolta id='BtnVolta' onClick={() => setShowCalc('Valores')}>
                        <HiArrowUturnLeft className='text-xl mx-auto'/>
                        Simular outro valor
                    </BtnVolta>
                </div>
                
            </div>

        </div>
    )
}