import styled from "styled-components"
import tw from 'tailwind-styled-components'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'
import Button from "@material-tailwind/react/Button"
import { useState } from "react"

export default function MainHome(props) {

  const [ValorEmp, setValorEmp] = useState(0); 

  const handleSliderChange = (event, NovoValor) =>{
    setValorEmp(NovoValor);
  }

  const handleInputChange = (event) => {
    setValorEmp(event.target.ValorEmp === '' ? '' : Number(event.target.ValorEmp));
  };

  const handleBlur = () => {
    if (ValorEmp < 200) {
      setValue(200);
    } else if (ValorEmp > 24000) {
      setValue(24000);
    }
  };

  return (
    <main className="bgMainHome">

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-1 px-5 lg:px-16 mt-[10rem]">
          <h1 className="text-white text-4xl poppins font-bold tracking-tight">
            Seu Empréstimo Online
          </h1>

          <h2 className="mt-2 poppins text-yellow-400 font-semibold text-2xl">
            Com dinheiro real na sua conta!
          </h2>

          <div className="bg-white rounded-2xl p-5 lg:mr-32 mt-3">
            <h1 className="text-blue-400 font-semibold poppins text-center text-lg mb-2">
              De quanto vc precisa?
            </h1>

            <div className="grid justify-center">
              <Box width={320}>
                
                <h1 className="text-sky-600 text-2xl poppins font-semibold text-center"></h1>
                
                <Slider
                  defaultValue={ValorEmp}
                  valueLabelDisplay="auto"
                  aria-label="Default"
                  min={200}
                  max={24000}
                  step={100}

                />
              </Box>

              <Button className='px-20 mt-5 justify-self-center bg-gradient-to-r from-yellow-300 to-amber-500 hover:bg-gradient-to-r hover:to-amber-500 hover:from-yellow-400'
                color="amber"
                buttonType="filled"
                size="regular"
                rounded={true}
                block={false}
                iconOnly={false}
                ripple="light"> <span className='hidden lg:block poppins'>Simular empréstimo</span><span className='lg:hidden poppins'>Entrar</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block col-span-1">

        </div>
      </div>

    </main>

  )
}

const valueRange = (value) => {
  document.getElementById('rangeValue').innerHTML = value;
}