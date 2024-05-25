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

const containerVariants = {
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
            component: <Valores setShowCalc={setShowCalc} itemVariants={itemVariants} />,
            title: 'Simule seu Empréstimo'
        },
        PMT700: {
            component: <PMT700 setShowCalc={setShowCalc} itemVariants={itemVariants} />,
            title: 'Simulação de R$ 700,00'
        },
        PMT800: {
            component: <PMT800 setShowCalc={setShowCalc} itemVariants={itemVariants} />,
            title: 'Simulação de R$ 800,00'
        },
        PMT900: {
            component: <PMT900 setShowCalc={setShowCalc} itemVariants={itemVariants} />,
            title: 'Simulação de R$ 900,00'
        },
        PMT1000: {
            component: <PMT1000 setShowCalc={setShowCalc} itemVariants={itemVariants} />,
            title: 'Simulação de R$ 1.000,00'
        },
        PMT1100: {
            component: <PMT1100 setShowCalc={setShowCalc} itemVariants={itemVariants} />,
            title: 'Simulação de R$ 1.100,00'
        },
        PMT1200: {
            component: <PMT1200 setShowCalc={setShowCalc} itemVariants={itemVariants} />,
            title: 'Simulação de R$ 1.200,00'
        },
        PMT1300: {
            component: <PMT1300 setShowCalc={setShowCalc} itemVariants={itemVariants} />,
            title: 'Simulação de R$ 1.300,00'
        },
        PMT1400: {
            component: <PMT1400 setShowCalc={setShowCalc} itemVariants={itemVariants} />,
            title: 'Simulação de R$ 1.400,00'
        },
        PMT1500: {
            component: <PMT1500 setShowCalc={setShowCalc} itemVariants={itemVariants} />,
            title: 'Simulação de R$ 1.500,00'
        },
        PMT1600: {
            component: <PMT1600 setShowCalc={setShowCalc} itemVariants={itemVariants} />,
            title: 'Simulação de R$ 1.600,00'
        },
        PMT1700: {
            component: <PMT1700 setShowCalc={setShowCalc} itemVariants={itemVariants} />,
            title: 'Simulação de R$ 1.700,00'
        },
        PMT1800: {
            component: <PMT1800 setShowCalc={setShowCalc} itemVariants={itemVariants} />,
            title: 'Simulação de R$ 1.800,00'
        },
        PMT1900: {
            component: <PMT1900 setShowCalc={setShowCalc} itemVariants={itemVariants} />,
            title: 'Simulação de R$ 1.900,00'
        },
        PMT2000: {
            component: <PMT2000 setShowCalc={setShowCalc} itemVariants={itemVariants} />,
            title: 'Simulação de R$ 2.000,00'
        }
    };

    return (

        <div className="max-w-md">

            <h1 className='text-center text-lg text-white mb-3 poppins bg-base-calc p-1 rounded-lg'>
                {components[showCalc].title}
            </h1>
            
            <div className='rounded-lg bg-base-calc '>
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