import styled from "styled-components"
import tw from 'tailwind-styled-components'
import Button from "@material-tailwind/react/Button"
import { useState, useEffect } from "react"

export default function MainHome() {

  return (
    <main className="bgMainHome">
      
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        <div className="col-span-1 px-5 lg:pl-28 lg:pr-32 lg:my-[26vh] mt-[50vh] mb-[5vh]">

          <h1 className="text-white lg:text-4xl text-[30px] text-center lg:text-left poppins font-bold tracking-tight">
            Seu Empréstimo Online
          </h1>

          <h2 className="lg:mt-2 text-center lg:text-left poppins text-yellow-400 font-light text-[20px] lg:text-2xl">
            Com dinheiro real na sua conta!
          </h2>

          <div className="mt-3">
            <p className="text-white poppins hidden md:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam delectus 
              quo sapiente cum sequi maxime accusantium, ducimus nemo ipsa vel 
              ex omnis voluptates. Veritatis corrupti excepturi enim fugit praesentium.
            </p>
            
            <button className='
              focus:outline-none
              bg-gradient-to-r 
              from-yellow-300 
              to-amber-500
              mx-auto
              border-b-4
              border-orange-400 
              text-2xl
              lg:py-2
              lg:px-36
              lg:mx-0
              py-2
              px-24
              flex
              poppins 
              font-semibold 
              rounded-full 
              text-white 
              mt-8
              hover:to-amber-600 
              hover:from-yellow-500
              focus:to-amber-700 
              focus:from-yellow-600
              focus:ring-offset-0
              focus:ring-opacity-70        
              focus:ring-4
              focus:ring-amber-200'>Simular agora</button>
 
          </div>
        
        </div>

        <div className="hidden lg:block col-span-1">
          
        </div>
      </div>

    </main>

  )
}