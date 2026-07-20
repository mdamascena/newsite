import { useEffect } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { RxLightningBolt } from "react-icons/rx"
import { IoIosArrowBack } from "react-icons/io"
import { ToastContainer } from "react-toastify"
import { motion } from "framer-motion"
import { toastErrorColored } from "shared/toastUtils/toastValidation"
import { container, item } from "shared/motionUtils/motionTransation"
import { OptLabel } from "components/geral/style"
import BtnNext from "../../geral/button/BtnBlueNext"
import BtnBack from "../../geral/button/BtnBlueBack"

export default function FormCompanhiaEnergia({ companhias, onNext, backStep }) {
    const {
        control,
        getValues,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useFormContext();

    const onSubmit = ({ ciaeId }) => {
        const companhiaSelecionada = companhias.find(
            (companhia) => String(companhia.ciaeId) === String(ciaeId)
        );

        if (!companhiaSelecionada) {
            toastErrorColored("Selecione uma companhia de energia válida.");
            return;
        }

        onNext(companhiaSelecionada);
    };

    useEffect(() => {
        const opcaoAindaDisponivel = companhias.some(
            (companhia) => String(companhia.ciaeId) === String(getValues("ciaeId") || "")
        );

        if (!opcaoAindaDisponivel) {
            setValue("ciaeId", "");
        }
    }, [companhias, getValues, setValue]);

    useEffect(() => {
        if (errors.ciaeId) {
            toastErrorColored(errors.ciaeId.message);
        }
    }, [errors.ciaeId]);

    return (
        <form className="lg:min-h-screen" onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className="grid grid-cols-6 select-none xl:px-5">

                <div className="container-form-head">
                    <div className="col-span-6 items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Companhia de energia
                        </h1>
                    </div>

                    <p className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                        Selecione a companhia responsável pela energia da sua residência
                    </p>
                </div>

                <div className="container-form-body lg:pt-20">
                    <Controller
                        name="ciaeId"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                            <div className="grid grid-cols-6 gap-2 items-center">
                                {companhias.map((companhia) => {
                                    const id = String(companhia.ciaeId);
                                    const inputId = `companhia-energia-${id}`;

                                    return (
                                        <motion.div
                                            className="col-span-3"
                                            key={id}
                                            variants={item}>

                                            <input
                                                type="radio"
                                                className="hidden peer"
                                                name="ciaeId"
                                                value={id}
                                                id={inputId}
                                                checked={String(value) === id}
                                                onChange={() => onChange(id)}
                                            />

                                            <OptLabel htmlFor={inputId}>
                                                <div className="col-span-6 flex justify-center mb-2">
                                                    <RxLightningBolt className="text-5xl p-2 bg-blue-500 rounded-md text-white" />
                                                </div>

                                                <div className="col-span-6 text-center">
                                                    <p className="text-md leading-tight">
                                                        {companhia.ciaeDescricao}
                                                    </p>
                                                </div>
                                            </OptLabel>
                                            
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}
                    />
                </div>

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
                        <BtnNext nome="Avançar" tipo="submit" />
                    </div>
                </div>
            </motion.div>
        </form>
    );
}
