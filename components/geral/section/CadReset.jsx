import React from "react"
import BtnBlueNext from "../button/BtnBlueNext"
import BtnBlueBack from "../button/BtnBlueBack"
import { LiaTelegramPlane } from "react-icons/lia"
import {HiArrowUturnLeft} from 'react-icons/hi2'
import { TbMessage2Filled } from "react-icons/tb"
import { IoMail } from "react-icons/io5"
import { MdRadioButtonChecked } from "react-icons/md"
import { MdRadioButtonUnchecked } from "react-icons/md"
import { motion, AnimatePresence } from 'framer-motion'

export default function CadReset({setShowLogin}) {

    const handleResetClick = () => {
        setShowLogin(true);
    };
  
    return (
  
        <AnimatePresence>
            <motion.div
                initial={ {scale: 0} }
                animate={ {scale: 1 }}
                transition={{type: "spring", stiffness: 260, damping: 20}}
                exit={ {scale: 0 }}
                >
                <div className="text-slate-400 mb-4 bg-white flex rounded-lg p-2 items-center border-l-8 border-blue-500 shadow-sm">
                    <p className="font-light text-sm">
                        Para recriar sua senha, enviaremos um link. Como deseja receber: SMS ou e-mail?
                    </p>
                </div>
                                            
                <div className="gap-4 grid">

                    <div className=" grid gap-1 my-1">

                        <div className="relative">
                            
                            <input
                                type="radio"
                                className="peer hidden"
                                name="opcaoEnvio"
                                id="enviaSMS"
                                value="1"
                            />

                            <label htmlFor="enviaSMS" key="enviaSMS" className="col-span-1 border-1 hover:ring-2 duration-300 peer-checked:border-blue-500 peer-checked:bg-blue-100 bg-white rounded-lg p-2 items-center flex constant">
                            
                                <div className="grid grid-cols-6 items-center">
                                    <TbMessage2Filled className="text-4xl bg-blue-200 text-blue-500 p-2 col-span-1 rounded-md"/>
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
                            />

                            <label htmlFor="enviaMail" key="enviaMail" className="col-span-1 border-1 hover:ring-2 duration-300 peer-checked:border-blue-500 peer-checked:bg-blue-100 bg-white rounded-lg p-2 items-center flex constant">
                            
                                <div className="grid grid-cols-6 items-center">
                                    <IoMail className="text-4xl bg-blue-200 text-blue-500 p-2 col-span-1 rounded-md"/>
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

                    <div className="grid gap-2">

                        <BtnBlueNext 
                            nome={'Enviar'} 
                            iconLeft={<LiaTelegramPlane className="mr-2 text-xl"/>} 
                        />

                        <BtnBlueBack 
                            event={handleResetClick} 
                            nome={'Voltar'} 
                            iconLeft={<HiArrowUturnLeft className="mr-2 text-xl"/>} 
                        />

                    </div>
                                                    
                </div>
            </motion.div>
        </AnimatePresence>

    );
}
