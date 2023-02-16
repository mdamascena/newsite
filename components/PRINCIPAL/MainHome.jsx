import styled from "styled-components"
import tw from 'tailwind-styled-components'

import { useState, useEffect } from "react"
import {AiOutlineBarcode} from "react-icons/ai"
import {RiBankLine} from "react-icons/ri"
import {RiLightbulbFlashLine} from 'react-icons/ri'
import {MdOutlineCake} from 'react-icons/md'
import {RiShieldCheckLine} from 'react-icons/ri'
import {IoStopwatchOutline} from 'react-icons/io5'
import {IoPodiumOutline} from 'react-icons/io5'
import {IoWalletOutline} from 'react-icons/io5'
import {AiOutlineFieldTime} from 'react-icons/Ai'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const CardMod = tw.div`
  group
  bg-white
  hover:bg-blue-800
  hover:scale-110 
  col-span-1
  text-white 
  hover:z-10
  p-2
  mx-1
  shadow-lg
  shadow-blue-800/30
  duration-300
  cursor-pointer 
  flex 
  justify-center 
  items-center
  rounded-md
`;

const BtnHome = tw.button`
  focus:outline-none
  bg-gradient-to-r 
  from-yellow-300 
  to-amber-500
  mx-auto
  border-b-4
  border-orange-400 
  text-2xl
  lg:py-2
  lg:px-32
  lg:mx-0
  mb-14
  py-2
  px-24
  flex
  poppins
  font-semibold 
  rounded-2xl
  text-white 
  mt-8
  hover:to-amber-600 
  hover:from-yellow-500
  focus:to-amber-700 
  focus:from-yellow-600
  focus:ring-offset-0
  focus:ring-opacity-70        
  focus:ring-4
  focus:ring-amber-200'
`;

export default function MainHome() {

  return (
    <main className="bgMainHome">

      <div className="grid grid-cols-1 lg:grid-cols-2">

        <div className="col-span-1 px-5 lg:pl-28 lg:pr-32 lg:mt-44 lg:mb-36 mb-[5vh] bg-slate-100">

          {/*
          <div className="mt-24 lg:mt-0">
            
            <h1 className="text-white lg:text-4xl text-[30px] text-center lg:text-left poppins font-bold tracking-tight">
              Seu Empréstimo Online
            </h1>

            <h2 className="lg:mt-2 text-center lg:text-left poppins text-yellow-400 font-light text-[20px] lg:text-2xl">
              Com dinheiro real na sua conta!
            </h2>
          
          </div>

          <div className="lg:mt-8 mt-64">
            <p className="text-white poppins lg:text-left text-justify lg:mx-0 mx-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam delectus
              quo sapiente cum sequi maxime accusantium, ducimus nemo ipsa vel.
            </p>

            <BtnHome>Simular agora</BtnHome>
          </div>*/}

          <div className=''>
            <Carousel className="grid grid-cols-1 relative lg:-top-5 -top-16"
              autoPlay={'true'}
              infiniteLoop={'true'}
              centerMode={''}
            
              centerSlidePercentage={85}
              showThumbs={'true'}
              showStatus={''}
              showIndicators={''}
              interval={8000}>

              {/*Energia*/}
              <CardMod className='mb-5'>
                <div className="p-3 duration-300 poppins text-left">
                  <RiLightbulbFlashLine className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                  <p className="text-xl font-bold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                  <p className="text-lg text-slate-400 mb-2 group-hover:text-white">na conta de luz</p>
                  <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal</p>
                </div>
              </CardMod>

              {/*Boleto*/}
              <CardMod className='mb-5'>
                <div className="p-3 duration-300 poppins text-left">
                  <AiOutlineBarcode className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                  <p className="text-xl font-bold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                  <p className="text-lg text-slate-400 mb-2 group-hover:text-white">Pessoal CredBoleto</p>
                  <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal</p>
                </div>
              </CardMod>

              {/*FGTS*/}
              <CardMod className='mb-5'>
                <div className="p-3 duration-300 poppins text-left">
                  <MdOutlineCake className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                  <p className="text-xl font-bold text-slate-400 mb-0 group-hover:text-white">Antecipação</p>
                  <p className="text-lg text-slate-400 mb-2 group-hover:text-white">Saque-Aniversário FGTS</p>
                  <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal</p>
                </div>
              </CardMod>

              {/*Consignado*/}
              <CardMod className='mb-5'>
                <div className="p-3 duration-300 poppins text-left">
                  <div className='flex'>
                    <RiBankLine className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                    <span className='bg-red-600 text-white p-1 rounded-md text-[10px] h-5 my-auto ml-48'>EM BREVE</span>
                  </div>
                  <p className="text-xl font-bold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                  <p className="text-lg text-slate-400 mb-2 group-hover:text-white">Consignado</p>
                  <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Para beneficiários do INSS com pagamento em 10 minutos</p>
                </div>
              </CardMod>
            </Carousel>
          </div>
          
        </div>

        <div className="hidden lg:block col-span-1">

        </div>
      </div>

    </main>

  )
}