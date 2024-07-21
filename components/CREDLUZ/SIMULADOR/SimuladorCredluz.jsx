import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import Valores from "./Valores"
import PMTGERAL from "./PMT/PMT_GERAL"

const containerVariants = { //Não está sendo usado
    hidden: { opacity: 1, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: {delayChildren: 0, staggerChildren: 0.1}}
};
  
const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export default function SimuladorCredLuz() {

    const [mudarComp, setMudarComp] = useState('Valores');
    const [valorSelecionado, setValorSelecionado] = useState();

    const handleShowCalc = (valor) => {
        setMudarComp(valor)
        setValorSelecionado(valor);
    };

    const components = {
        Valores: {
            component: <Valores showSimulador={handleShowCalc} animacao={itemVariants} />,
            title: 'Simule seu Empréstimo'
        },
        700: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 700,00'
        },
        800: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 800,00'
        },
        900: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 900,00'
        },
        1000: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.000,00'
        },
        1100: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.100,00'
        },
        1200: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.200,00'
        },
        1300: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.300,00'
        },
        1400: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.400,00'
        },
        1500: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.500,00'
        },
        1600: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.600,00'
        },
        1700: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.700,00'
        },
        1800: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.800,00'
        },
        1900: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 1.900,00'
        },
        2000: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.000,00'
        },
        2100: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.100,00'
        },
        2200: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.200,00'
        },
        2300: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.300,00'
        },
        2400: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.400,00'
        },
        2500: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.500,00'
        },
        2600: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.600,00'
        },
        2700: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.700,00'
        },
        2800: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.800,00'
        },
        2900: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 2.900,00'
        },
        3000: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 3.000,00'
        },
        3100: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 3.100,00'
        },
        3200: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 3.200,00'
        },
        3300: {
            component: <PMTGERAL valor={valorSelecionado} showSimulador={setMudarComp} animacao={itemVariants} />,
            title: 'Simulação de R$ 3.300,00'
        }
    };

    return (

        <div className="max-w-md">

            <h1 className='text-center text-lg text-white mb-3 poppins bg-base-calc p-2 rounded-lg'>
                {components[mudarComp].title}
            </h1>
            
            <div className='rounded-lg bg-base-calc'>
                <AnimatePresence mode="wait">
                    <motion.div key={mudarComp} initial="hidden" animate="visible" exit="exit" variants={containerVariants}>
                        {components[mudarComp].component}
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