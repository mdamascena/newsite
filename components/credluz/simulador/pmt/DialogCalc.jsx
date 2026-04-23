import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "components/lib/nextui-compat";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";

import LogoCrefaz from "../../../../public/img/logocrefaz.png";
import { BtnSolicita, BtnRecalc } from "../../styles";

export default function App({
  isOpen,
  onClose,
  onOpenChange,
  show,
  fechar,
  prazo,
  parcela,
  valor,
  showSimulador,
}) {
  const modalIsOpen = typeof isOpen === "boolean" ? isOpen : Boolean(show);
  const handleClose = onClose ?? fechar;

  const handleRecalcClick = () => {
    setTimeout(() => {
      handleClose?.();
      showSimulador();
    }, 800);
  };

  return (

    <Modal
        aria-label="Resultado da simulação de crédito"
        classNames={{ backdrop: "bg-gradient-to-b from-black/90 via-blue-950/70 to-black/90" }}
        hideCloseButton={true}
        isOpen={modalIsOpen}
        onClose={handleClose}
        onOpenChange={onOpenChange}
        backdrop="opaque"
        placement="center"
        radius="sm">

        <ModalContent className="mx-2 select-none bg-btncalc p-2!">
            
            <ModalHeader className="flex items-center justify-between">
                
                <p className="text-sm font-normal tracking-tight text-amber-400">
                    Simulação de crédito financeira
                </p>

                <div className="lg:ml-2">
                    <Image src={LogoCrefaz} width={90} alt="" />
                </div>

            </ModalHeader>

            <ModalBody className="">
                
                <div className="flex items-center justify-between pt-3">
                    
                    <div>

                        <div className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
                            {Number(valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                        </div>

                        <div className="mt-2 flex text-xl text-white lg:text-2xl">
                            <div className="text-start">
                                {prazo}X de{" "}
                                {Number(parcela).toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </div>
                        </div>

                    </div>

                    <div className="items-center">
                        <div className="rounded-md bg-blue-800/30 p-3 text-6xl text-white">
                            <BiMoneyWithdraw />
                        </div>
                    </div>

                </div>

                <div className="my-2 w-full border-b border-dashed border-white" />

                <ul className="mt-3 grid gap-y-2 text-md font-light text-white text-md">
                
                    <li className="flex items-center">
                        <FaCheck className="mr-2 rounded-lg bg-yellow-100 p-1 text-2xl text-yellow-500" />
                        Sem comprovação de renda
                    </li>

                    <li className="flex items-center">
                        <FaCheck className="mr-2 rounded-lg bg-yellow-100 p-1 text-2xl text-yellow-500" />
                        Possibilidade para negativado*
                    </li>

                    <li className="flex items-center">
                        <FaCheck className="mr-2 rounded-lg bg-yellow-100 p-1 text-2xl text-yellow-500" />
                        Liberação no mesmo dia
                    </li>

                    <li className="flex items-center">
                        <FaCheck className="mr-2 rounded-lg bg-yellow-100 p-1 text-2xl text-yellow-500" />
                        Limite de até R$ 4.000,00*
                    </li>

                </ul>

                <div className="justify-center">

                    <Link href="credluz/cadastro" passHref>
                        <BtnSolicita className="w-full text-base">Solicitar Empréstimo</BtnSolicita>
                    </Link>

                    <BtnRecalc className="w-full text-base" onClick={handleRecalcClick}>
                        Simular outro valor
                    </BtnRecalc>

                </div>

                <div className="select-none text-[10px]">
                    <p className="font-light text-white">
                        Pagamento de 8 a 22 meses. Taxa equivalente ao CET mensal de 16,46% e anual de
                        522,16%. Exemplo: R$ 1.000,00, em 18 meses com parcelas de R$ 184,01.
                    </p>
                </div>

                <div className="my-2">
                    <p className="text-sm text-white">*Crédito sujeito a análise</p>
                </div>

            </ModalBody>

        </ModalContent>

    </Modal>
  );
}
