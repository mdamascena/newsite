import { motion } from 'framer-motion'
import { container, item } from "shared/motionUtils/motionTransation"
import { HiOutlineLightBulb } from "react-icons/hi2";
import { OptLabel } from "../styles"


export default function FormNaoTitular() {
    return (
        <div className="lg:min-h-[100vh]">

            <motion.div 
                initial={'hidden'} 
                animate={'visible'}
                variants={container}
                className='grid grid-cols-6 select-none xl:px-7'>

                {/*Titulo do step*/}
                <div className="container-form-head">
                    <div className="col-span-6 items-end">
                        <h1 className="text-blue-600 text-3xl font-semibold tracking-tight">
                            Você não é titular de conta na luz? Tudo bem!
                        </h1>
                        
                    </div>
                </div>

                {/*Opções do step*/} 
                <div className="container-form-body pt-16">
                    <p className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                        Essa modalidade é só para titulares da conta, mas você pode seguir normalmente com outro tipo de empréstimo.
                    </p>

                    <div className='flex items-center bg-white rounded-lg'>
                        <div className='pr-2'>
                            <HiOutlineLightBulb className='text-blue-600 text-5xl'/>
                        </div>
                        <div>
                            <h1 className='text-blue-600 text-2xl font-semibold'>Boa notícia</h1>
                            <p className='text-slate-400 text-sm'>
                                Com o seu perfil, você tem acesso a outras opções de crédito. Essas modalidades podem liberar dinheiro mais rápido ou até juros menores!
                            </p>
                        </div>
                    </div>
                </div>

                {/*Botões*/}
                <div className="container-form-footer">
                    Terceiro
                </div>

            </motion.div>
            
        </div>
    )
}           