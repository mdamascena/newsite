import styled from "styled-components"
import tw from 'tailwind-styled-components'


import Image from 'next/image'
import BrasaoC from '../../public/img/BRASAO_CINZA.png'
import { useState, useEffect } from "react"
import {AiOutlineBarcode} from "react-icons/ai"
import {RiBankLine} from "react-icons/ri"
import {RiLightbulbFlashLine} from 'react-icons/ri'
import {BsPlusCircle} from 'react-icons/bs'

const CardMod = tw.div`
    group
    bg-opacity-20 
    bg-blue-600 
    hover:bg-blue-900
    hover:scale-105 
    text-white 
    rounded-md 
    lg:p-7 
    p-4
    px-6 
    m-2 
    shadow-lg 
    duration-700
    h-72
    cursor-pointer 
    flex 
    justify-center 
    items-center
`;

export default function SessaoModalidades(){

    const [valorEmp, setValorEmp] = useState(1);

    const handleChange = (e, newValue) =>{
        parseInt(setValorEmp(newValue))
    }

    return(
        <section className="bg-gradient-to-l from-[#040D43] to-blue-900 saturate-150">
            
            <div className="p-4 lg:p-14 grid grid-cols-1 lg:grid-cols-2 poppins">

                <div className="col-span-2 lg:col-span-1 p-2 text-center lg:text-right lg:mr-5">
                    <p className="text-blue-200 text-2xl pb-2 tracking-tight font-bold mb-3">
                        Crédito Pessoal do o seu jeito
                    </p>

                    <p className="text-white lg:pl-[12em]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quasi 
                        deserunt doloribus debitis eum, ab incidunt ullam e
                    </p>
                    
                </div>

                <div className="col-span-1">

                    <div className="grid grid-cols-1 md:grid-cols-2">

                        <div className="bg-white rounded-md lg:p-7 p-4 m-2 hover:scale-105 duration-700">
                            
                            <h1 className="text-blue-500 font-semibold poppins text-center text-md lg:text-lg mb-5">
                                Simular oferta de empréstimo
                            </h1>

                            <div className="text-center">

                                <span className="poppins text-2xl lg:text-4xl text-blue-500 text-center font-bold m-3" id='rangeValue'>{'R$ '+valorEmp+".000"}</span>
                        
                                {/*<Box className="p-4 lg:my-3">
                                    <Slider 
                                        id='selectVlr'
                                        aria-label="Default"
                                        step={1}
                                        min={0}
                                        max={25}
                                        onChange={handleChange}
                                    />
                                </Box>*/}

                                {/*<Button className='mx-auto lg:px-20 bg-gradient-to-r from-yellow-300 to-amber-500 hover:bg-gradient-to-r hover:to-amber-500 hover:from-yellow-400'
                                    color="amber"
                                    buttonType="filled"
                                    size="regular"
                                    rounded={true}
                                    block={false}
                                    iconOnly={false}
                                    ripple="light"> <span className="text-sm">Simulação</span>
                                </Button>*/}
                            </div>
                        </div>

                        <CardMod className="relative">
                            <div className="mb-12 mx-14 lg:mx-5 text-center group-hover:scale-0 duration-500 absolute">
                                <RiLightbulbFlashLine className="text-5xl mb-2 inline-flex"/>
                                <h1 className="poppins text-4xl font-bold text-blue-200 mb-2">CredLuz</h1>
                                <p className="text-blue-100">Empréstimo com débito em sua conta de luz</p>
                                <BsPlusCircle className="mx-auto text-3xl relative top-10"/> 
                            </div>

                            <div className="text-indigo-200 text-sm scale-x-0 group-hover:scale-x-100 duration-100">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                At ullam illo mollitia omnis dignissimos sint labore eius nobis, 
                                sequi sed quidem a enim repellat praesentium voluptates? Quibusdam, 
                                vitae. Repellat, aperiam.
                               
                                {/*<Button className='mx-auto lg:px-20 bg-gradient-to-r from-yellow-300 to-amber-500 hover:bg-gradient-to-r hover:to-amber-500 hover:from-yellow-400 mt-5'
                                    color="amber"
                                    buttonType="filled"
                                    size="regular"
                                    rounded={true}
                                    block={false}
                                    iconOnly={false}
                                    ripple="light"> <span className="text-sm">Solicitar</span>
                                </Button>*/}
                            </div>
                        </CardMod>

                        <CardMod className="relative">
                            <div className="mb-12 mx-14 lg:mx-5 text-center group-hover:scale-0 duration-500 absolute">
                                <RiBankLine className="text-5xl mb-2 inline-flex"/>
                                <h1 className="poppins text-4xl font-bold text-blue-200 mb-2">CredFGTS</h1>
                                <p className="text-blue-100">Antecipação do saque aniversário FGTS</p>
                                <BsPlusCircle className="mx-auto text-3xl relative top-10"/> 
                            </div>

                            <div className="text-indigo-200 text-sm scale-y-0 group-hover:scale-y-100 duration-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                At ullam illo mollitia omnis dignissimos sint labore eius nobis, 
                                sequi sed quidem a enim repellat praesentium voluptates? Quibusdam, 
                                vitae. Repellat, aperiam.
                               
                                {/*<Button className='mx-auto lg:px-20 bg-gradient-to-r from-yellow-300 to-amber-500 hover:bg-gradient-to-r hover:to-amber-500 hover:from-yellow-400 mt-5'
                                    color="amber"
                                    buttonType="filled"
                                    size="regular"
                                    rounded={true}
                                    block={false}
                                    iconOnly={false}
                                    ripple="light"> <span className="text-sm">Solicitar</span>
                                </Button>*/}
                            </div> 
                        </CardMod>

                        <CardMod className="relative">
                            <div className="mb-12 mx-14 lg:mx-5 text-center group-hover:scale-0 duration-500 absolute">
                                <AiOutlineBarcode className="text-5xl mb-2 inline-flex"/>
                                <h1 className="poppins text-4xl font-bold text-blue-200 mb-2">CredBoleto</h1>
                                <p className="text-blue-100">Empréstimo pessoal com pagamento através de carnê</p>
                                <BsPlusCircle className="mx-auto text-3xl relative top-10"/> 
                            </div>

                            <div className="text-indigo-200 text-sm scale-x-0 group-hover:scale-x-100 duration-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                At ullam illo mollitia omnis dignissimos sint labore eius nobis, 
                                sequi sed quidem a enim repellat praesentium voluptates? Quibusdam, 
                                vitae. Repellat, aperiam.
                               
                                
                            </div>
                        </CardMod>

                    </div>

                  
                </div>

            </div>

        </section>
    )
}