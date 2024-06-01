import tw from 'tailwind-styled-components'
import BtnVoltar from './BTN_VOLTAR'

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
export default function PMT1400({setShowCalc}){

    return(
        <div className='p-1'>

            <h2 className='text-center mb-2 poppins text-white'>Selecione o prazo desejado</h2>

            <div className='rounded-lg bg-white/25 text-md py-4 px-1 mx-1 mb-2'>

                <div className="grid grid-cols-2 gap-1 mb-1">
                    <Btn id='pmt_1400_16'>16 X</Btn>
                    <Btn id='pmt_1400_18'>18 X</Btn>
                </div>

                <div className="grid grid-cols-2 gap-1 mb-1">
                    <Btn id='pmt_1400_20'>20 X</Btn>
                    <Btn id='pmt_1400_22'>22 X</Btn>
                </div>

                <div className="grid grid-cols-1 gap-1">
                    <BtnVoltar setShowCalc={setShowCalc}/>
                </div>

            </div>
        </div>
    )
}