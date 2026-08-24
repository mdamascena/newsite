import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { container } from "shared/motionUtils/motionTransation";
import BtnBack from "../../geral/button/BtnBlueBack";
import BtnNext from "../../geral/button/BtnBlueNext";

export const STEP_INFO = {
    id: "simulacao-fgts",
    progressLabel: "Simulação",
    sectionTitle: "Preenchimento de proposta",
    title: "Limite de crédito",
    description: "Confira as condições da sua simulação antes de prosseguir",
};

export default function FormSimulacao({ onNext, backStep }) {
    const handleNext = (event) => {
        event.preventDefault();
        onNext();
    };

    return (
        <form className="lg:min-h-[100vh]" onSubmit={handleNext}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
            >
                <div className="container-form-head">
                    <div className="col-span-6 items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Simulação do saque-aniversário
                        </h1>
                    </div>
                    <p className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                        Confira as condições disponíveis para antecipar seu FGTS.
                    </p>
                </div>

                <div className="container-form-body lg:pt-20" />

                <div className="container-form-footer">
                    <div className="col-span-2">
                        <BtnBack
                            tipo="button"
                            nome="Voltar"
                            event={backStep}
                            iconLeft={<IoIosArrowBack className="lg:mr-3 mr-1" />}
                        />
                    </div>

                    <div className="col-span-5">
                        <BtnNext tipo="submit" nome="Avançar" />
                    </div>
                </div>
            </motion.div>
        </form>
    );
}
