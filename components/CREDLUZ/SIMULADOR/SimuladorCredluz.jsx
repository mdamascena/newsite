import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import Valores from "./Valores"
import PMT700 from './PMT/PMT_700'
import PMT800 from './PMT/PMT_800'
import PMT900 from './PMT/PMT_900'
import PMT1000 from './PMT/PMT_1000'
import PMT1100 from './PMT/PMT_1100'
import PMT1200 from './PMT/PMT_1200'
import PMT1300 from './PMT/PMT_1300'
import PMT1400 from './PMT/PMT_1400'
import PMT1500 from './PMT/PMT_1500'
import PMT1600 from './PMT/PMT_1600'
import PMT1700 from './PMT/PMT_1700'
import PMT1800 from './PMT/PMT_1800'
import PMT1900 from './PMT/PMT_1900'
import PMT2000 from './PMT/PMT_2000'
import PMT2100 from './PMT/PMT_2100'
import PMT2200 from './PMT/PMT_2200'
import PMT2300 from './PMT/PMT_2300'
import PMT2400 from './PMT/PMT_2400'
import PMT2500 from './PMT/PMT_2500'
import PMT2600 from './PMT/PMT_2600'
import PMT2700 from './PMT/PMT_2700'
import PMT2800 from './PMT/PMT_2800'
import PMT2900 from './PMT/PMT_2900'
import PMT3000 from './PMT/PMT_3000'


const containerVariants = { //Não está sendo usado
    hidden: { opacity: 1, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: {delayChildren: 0, staggerChildren: 0.1}}
};
  
const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export default function SimuladorCredLuz() {

    const [showCalc, setShowCalc] = useState('Valores');

    const components = {
        Valores: {
            component: <Valores setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simule seu Empréstimo'
        },
        700: {
            component: <PMT700 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 700,00'
        },
        800: {
            component: <PMT800 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 800,00'
        },
        900: {
            component: <PMT900 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 900,00'
        },
        1000: {
            component: <PMT1000 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.000,00'
        },
        1100: {
            component: <PMT1100 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.100,00'
        },
        1200: {
            component: <PMT1200 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.200,00'
        },
        1300: {
            component: <PMT1300 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.300,00'
        },
        1400: {
            component: <PMT1400 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.400,00'
        },
        1500: {
            component: <PMT1500 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.500,00'
        },
        1600: {
            component: <PMT1600 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.600,00'
        },
        1700: {
            component: <PMT1700 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.700,00'
        },
        1800: {
            component: <PMT1800 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.800,00'
        },
        1900: {
            component: <PMT1900 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.900,00'
        },
        2000: {
            component: <PMT2000 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.000,00'
        },
        2100: {
            component: <PMT2000 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.100,00'
        },
        2200: {
            component: <PMT2000 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.200,00'
        },
        2300: {
            component: <PMT2000 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.300,00'
        },
        2400: {
            component: <PMT2000 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.400,00'
        },
        2500: {
            component: <PMT2000 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.500,00'
        },
        2600: {
            component: <PMT2000 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.600,00'
        },
        2700: {
            component: <PMT2000 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.700,00'
        },
        2800: {
            component: <PMT2000 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.800,00'
        },
        2900: {
            component: <PMT2000 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.900,00'
        },
        3000: {
            component: <PMT2000 setShowCalc={setShowCalc} animacao={itemVariants} />,
            title: 'Simulação de R$ 3.000,00'
        }
    };

    return (

        <div className="max-w-md">

            <h1 className='text-center text-lg text-white mb-3 poppins bg-base-calc p-2 rounded-lg'>
                {components[showCalc].title}
            </h1>
            
            <div className='rounded-lg bg-base-calc'>
                <AnimatePresence mode="wait">
                    <motion.div key={showCalc} initial="hidden" animate="visible" exit="exit" variants={containerVariants}>
                        {components[showCalc].component}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className='bg-base-calc p-2 my-2 rounded-lg border-l-4 border-yellow-500'>
                <p className='lg:text-xs text-[10px] text-white text-center'>
                    Taxa equivalente ao CET mensal de 16,46% e anual de 522,16%.
                    Exemplo: R$ 1.000,00, em 18 meses com parcelas de R$ 184,01.
                </p>
            </div>

        </div>
    )
}