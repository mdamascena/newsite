import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import FlickeringGrid from "../components/ui/flickering-grid"
import AnimatedCircularProgressBar from "../components/ui/animated-circular-progress-bar"
import Fuguete from "../components/ANIMACOES/Fuguete"

export default function Page() {
    const [value, setValue] = useState(0);
 
    useEffect(() => {
      const handleIncrement = (prev) => {
        if (prev === 100) {
          return 0;
        }
        return prev + 10;
      };
      setValue(handleIncrement);
      const interval = setInterval(() => setValue(handleIncrement), 2000);
      return () => clearInterval(interval);
    }, []);


    return(
        
        <div className='h-[100vh] w-[100vw] bgPage'>


            <FlickeringGrid 
                className="z-0 absolute inset-0 size-full" 
                squareSize={5} 
                gridGap={3} 
                color="#010797" 
                maxOpacity={0.4} 
                flickerChance={0.5}
            />
            
            <div className='absolute inset-0 flex justify-center items-center'>
                <h1 className='text-white text-5xl'>
                    Olá mundo
                </h1>
                <div className=''>

                    <AnimatedCircularProgressBar
                        max={100}
                        min={0}
                        value={value}
                        className={"text-white text-3xl w-24"}
                        gaugePrimaryColor="#01054d"
                        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                    />
                </div>
                <div className='translate-x-12 -translate-y-40 duration-100'>
                <Fuguete />
                </div>
            </div>
            
        </div>
    )
}