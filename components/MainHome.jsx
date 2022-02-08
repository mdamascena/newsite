import styled from "styled-components"
import tw from 'tailwind-styled-components'
import bgImg from '../public/img/bgmain.png'


export default function MainHome() {

  return (
    <main className="bgMainHome">

      <div className="grid grid-cols-2">

        <div className="col-span-1 px-32 mt-[10rem]">

          <h1 className="text-white text-5xl poppins font-bold tracking-tight">
            Seu Empréstimo Online
          </h1>

          <h2 className="mt-2 poppins text-yellow-400 font-semibold text-2xl">
            Com dinheiro real na sua conta!
          </h2>

          <div className="bg-white rounded-2xl p-5 mr-32 mt-3">

            <h1 className="text-blue-700 font-semibold poppins text-center">
              De quanto vc precisa?
            </h1>

            <div>
              <span>R$</span> <span id='rangeValue' className="block">0</span>
              <input type="range" min={0} max={10000} step={10} value={0} onChange={valueRange} />
            </div>

          </div>

        </div>

        <div className="col-span-1">

        </div>

      </div>

    </main>

  )
}

const valueRange = (value) => {
  document.getElementById('rangeValue').innerHTML = value;
}