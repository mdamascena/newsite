import BtnBlueNext from "components/geral/button/BtnBlueNext"
import { HiOutlineKey } from "react-icons/hi2"
import { TbMessage2Filled } from "react-icons/tb"
import { IoMail } from "react-icons/io5"
import { MdRadioButtonChecked } from "react-icons/md"
import { MdRadioButtonUnchecked } from "react-icons/md"
import { motion, AnimatePresence } from 'framer-motion'
import ModalReset from '../../geral/modal/ModalReset'
import { useState } from 'react'
import { ToastContainer } from "react-toastify"
import { toastErrorColored } from "shared/toastUtils/toastValidation";

export default function FormPass() {

    const [abrirModal, setAbrirModal] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedOption) {
            toastErrorColored("Selecione uma opção para continuar.");
            return;
        }

        // Aqui você pode chamar o backend para enviar o SMS ou e-mail
        console.log("Opção escolhida:", selectedOption);
    };

    return (
        <AnimatePresence>

            <ToastContainer />

            <motion.div
                initial={ {scale: 0} }
                animate={ {scale: 1 }}
                transition={{type: "spring", stiffness: 260, damping: 20}}
                exit={ {scale: 0 }}>
            
                <div className='bg-white border border-l-4 border-l-blue-600 rounded-md mb-5'>
                    <p className='text-center py-2 px-2 text-slate-400 font-light text-xs lg:text-sm'>
                        Para recuperar sua senha, vamos te enviar um link. Selecine como deseja receber: SMS ou e-mail?
                    </p>
                </div>

                <form className='grid gap-y-4' onSubmit={handleSubmit}>
                    {/* <Input type='email' className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' placeholder='Digite seu e-mail'/> */}
                    
                    <div className="gap-4 grid">
                        <div className=" grid gap-1 my-1">

                            <div className="relative">
                                
                                <input
                                    type="radio"
                                    className="peer hidden"
                                    name="opcaoEnvio"
                                    id="enviaSMS"
                                    value="1"
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                />

                                <label htmlFor="enviaSMS" key="enviaSMS" className="col-span-1 border-1 hover:ring-2 duration-300 peer-checked:border-blue-500 peer-checked:bg-blue-200 bg-slate-200 rounded-lg p-2 items-center flex constant">
                                
                                    <div className="grid grid-cols-6 items-center">
                                        <TbMessage2Filled className="text-4xl bg-blue-300 text-blue-600 p-2 col-span-1 rounded-md"/>
                                        <div className="col-span-5">
                                            <div className="flex-1 ml-1">
                                                <div className="text-slate-400 text-sm font-medium">SMS</div>
                                                <div className="text-xs">21 97***-***7</div>
                                            </div>
                                        </div>
                                    </div>

                                </label>

                                <MdRadioButtonChecked className="absolute top-4 right-3 peer-checked:block hidden text-blue-500 text-xl"/>
                                <MdRadioButtonUnchecked className="absolute top-4 right-3 peer-checked:hidden block text-blue-500 text-xl"/>
                            
                            </div>

                            <div className="relative">
                                <input
                                    type="radio"
                                    className="hidden peer"
                                    name="opcaoEnvio"
                                    id="enviaMail"
                                    value="0"
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                />

                                <label htmlFor="enviaMail" key="enviaMail" className="col-span-1 border-1 hover:ring-2 duration-300 peer-checked:border-blue-500 peer-checked:bg-blue-200 bg-slate-200 rounded-lg p-2 items-center flex constant">
                                
                                    <div className="grid grid-cols-6 items-center">
                                        <IoMail className="text-4xl bg-blue-300 text-blue-600 p-2 col-span-1 rounded-md"/>
                                        <div className="col-span-5">
                                            <div className="flex-1 ml-1 break-words">
                                                <div className="text-slate-400 text-sm font-medium">e-mail</div>
                                                <div className="text-xs">ms*******na@gmail.com</div>
                                            </div>
                                        </div>
                                    </div>

                                </label>

                                <MdRadioButtonChecked className="absolute top-4 right-3 peer-checked:block hidden text-blue-500 text-xl"/>
                                <MdRadioButtonUnchecked className="absolute top-4 right-3 peer-checked:hidden block text-blue-500 text-xl"/>
                            
                            </div>

                        </div>
                    </div>

                    <BtnBlueNext 
                        tipo={"submit"} 
                        classN={'flex'} 
                        nome={"Recuperar senha"} 
                        iconLeft={<HiOutlineKey className='text-xl mr-2'/>}
                    />

                </form>
 
                {/* <BtnReset onClick={()=>{setAbrirModal(true)}} className='mt-2'>Esqueci o e-mail</BtnReset> */}
                
                <ModalReset isOpen={abrirModal} onClose={() => setAbrirModal(false)}/>
 
            </motion.div>

        </AnimatePresence>
    )
}