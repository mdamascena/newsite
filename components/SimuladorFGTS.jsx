import styled from "styled-components"
import tw from 'tailwind-styled-components'
import Button from "@material-tailwind/react/Button"
import { useState, useEffect } from "react"
import {TiCalendarOutline} from 'react-icons/Ti'
import {MdOutlineAccountBalanceWallet} from 'react-icons/Md'

export default function SimuladorFGTS() {

  return (
    <div className='flex flex-col lg:flex-row gap-2 my-4 lg:mr-6 p-3 bg-gradient-to-b to-slate-300 from-slate-50 rounded-2xl shadow-lg border-b-4 border-slate-400'>
        
        <div>
            <label className="text-slate-400 text-sm" htmlFor="saldo">Digite seu saldo FGTS</label>
            <div className="relative flex items-center">
                <MdOutlineAccountBalanceWallet className="w-6 h-6 absolute ml-3 text-slate-400"/>
                <input className='
                    w-full
                    focus:outline-none
                    rounded-xl
                    pr-3
                    pl-10
                    py-4
                    placeholder-slate-400
                    focus:ring-4
                    focus:border-0
                    focus:ring-blue-300
                    focus:ring-opacity-70
                    placeholder:ml-8' 
                    placeholder='R$ 00.000,00'
                    name="saldo"
                />
            </div>
        </div>
        
        <div>
            <label className="text-slate-400 text-sm" htmlFor="nascimento">Data do seu nascimento</label>
            <div className="relative flex items-center">
                <TiCalendarOutline className="w-6 h-6 absolute ml-3 text-slate-400"/>
                <input className='
                    w-full
                    focus:outline-none
                    rounded-xl
                    pr-3
                    pl-10
                    py-4
                    placeholder-slate-400
                    focus:ring-4
                    focus:ring-blue-300
                    focus:ring-opacity-50'
                    placeholder='00/00/0000'
                    name="nascimento"
                />
            </div>
        </div>
        
        <div className="lg:pt-5">
            <button className='
                focus:outline-none
                w-full
                bg-gradient-to-r 
                from-yellow-300 
                to-amber-500 
                font-bold
                text-2xl
                lg:px-12
                py-3
                rounded-xl
                border-b-4
                border-orange-400 
                poppins 
                text-white        
                hover:bg-gradient-to-r 
                hover:to-amber-600 
                hover:from-yellow-500
                focus:to-amber-700 
                focus:from-yellow-600
                focus:ring-offset-0
                focus:ring-opacity-70        
                focus:ring-4
                focus:ring-amber-200'>Simular
            </button>
        </div>
        
    </div>
    
)}