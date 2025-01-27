import React from "react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, ScrollShadow} from "@nextui-org/react"


export default function App({ isOpen, onOpenChange, onAccept }) {
  
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"4xl"} scrollBehavior={'inside'} placement={'top'}>

                <ModalContent>
                    {(onClose) => (
                        
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-slate-500 font-semibold">
                                Termos de uso e política de privacidade
                            </ModalHeader>

                            <ScrollShadow hideScrollBar>
                                <ModalBody>
                                    <p className="text-sm text-slate-500 indent-10"> 
                                        Ao utilizar o site da Valoreal, você reconhece os termos e condições de nossa política de privacidade e 
                                        concorda sua vinculação a estes termos, de forma livre e espontânea. Também concorda que a Valoreal e seus parceiros 
                                        tenham acesso às suas informações pessoais, utilizadas no contrato e 
                                        inseridas por você no nosso site e no app. Esta Política de Privacidade esclarece quais informações 
                                        pessoais podem ser acessadas e como elas serão utilizadas e armazenadas pela Valoreal. 
                                        Nós protegemos os direitos de privacidade dos usuários que se cadastrarem ou que de qualquer 
                                        forma utilizarem nossos canais. Todas as informações que possam identificá-lo individualmente, direta ou indiretamente, 
                                        incluindo suas informações de cadastro, dados armazenados em cookies e informações a 
                                        respeito do seu acesso e utilização do site e do app (incluindo informações de Protocolo de Internet) 
                                        não serão utilizadas para finalidades diversas das constantes nesta Política de Privacidade, 
                                        da Política de Avaliação de Crédito e demais Termos de Uso.
                                    </p>

                                    <h3 className="text-slate-500 font-semibold mt-4">SITE E APP</h3>
                                    
                                    <p className="text-sm text-slate-500 indent-10">
                                        É um sistema criado e desenvolvido para interação entre os usuários. 
                                        Para realizar seu cadastro e assim desfrutar de todas as funcionalidades 
                                        da Valoreal você deverá fornecer determinadas informações como nome, 
                                        endereço, telefone de contato, e-mail, RG, CPF e outros dados necessários 
                                        para sua identificação pessoal. Utilizamos uma tecnologia moderna de 
                                        proteção destes dados, que criptografa as informações antes da transmissão 
                                        pela internet entre o seu computador e os nossos servidores, garantindo assim 
                                        segurança de todos os seus dados cadastrais
                                    </p>

                                    <h3 className="text-slate-500 font-semibold mt-4">INFORMAÇÕES COLETADAS</h3>

                                    <p className="text-sm text-slate-500 indent-10">
                                        A Valoreal armazena seus dados pessoais, assim como 
                                        dados de utilização, de relacionamento e perfil para 
                                        criar estatísticas e gráficos, utilizados para aperfeiçoar e 
                                        desenvolver uma melhor experiência para os Usuários no uso do 
                                        site e do app. As informações armazenadas não serão fornecidas a 
                                        terceiros, exceto empresas de análise de crédito e de cobrança, 
                                        eventualmente contratadas para resgatar créditos não quitados. 
                                        Relatórios estatísticos sobre o acesso, utilização das plataformas 
                                        e tendências de mercado, que não revelem a identidade dos usuários, 
                                        poderão ser compartilhados com afiliados, subcontratados ou parceiros 
                                        comerciais da Valoreal.
                                    </p>

                                    <h3 className="text-slate-500 font-semibold mt-4">ATUALIZAÇÃO DE DADOS</h3>

                                    <p className="text-sm text-slate-500 indent-10">
                                        Você poderá, a qualquer momento, alterar e/ou editar 
                                        os seus dados cadastrais, entrando em contato com a 
                                        Valoreal por meio do site ou do app. Você é responsável 
                                        pela veracidade, exatidão e atualização de referidos dados. 
                                        A SENHA CADASTRADA É PESSOAL E INTRANSFERÍVEL, FICANDO A SUA 
                                        GUARDA SOB A SUA RESPONSABILIDADE. O USO E A PROTEÇÃO DOS DADOS 
                                        DE ACESSO À SUA CONTA SÃO DE SUA INTEIRA RESPONSABILIDADE, POR ISSO 
                                        RECOMENDAMOS QUE VOCÊ GUARDE ESSES DADOS EM LOCAL SEGURO E NÃO OS 
                                        FORNEÇA A TERCEIROS. A VALOREAL NÃO SE RESPONSABILIZARÁ PELA UTILIZAÇÃO 
                                        INADEQUADA DO SEU PERFIL E DA PLATAFORMA POR TERCEIROS QUE EVENTUALMENTE 
                                        VENHAM A ACESSAR A SUA CONTA COM O SEU LOGIN E SENHA. Toda comunicação 
                                        entre você e a Valoreal, após a contratação do crédito, será feita 
                                        utilizando o e-mail e os telefones do usuário cadastrado. 
                                        Caberá a você informar à Valoreal, por meio do site, acerca de 
                                        quaisquer alterações no seu endereço de e-mail ou telefones. Até que 
                                        seja feita esta comunicação, serão válidos e eficazes os avisos e as 
                                        comunicações enviados para o e-mail original constante no cadastro.
                                    </p>

                                    <h3 className="text-slate-500 font-semibold mt-4">COMUNICAÇÕES</h3>

                                    <p className="text-sm text-slate-500 indent-10">
                                        Quando qualquer usuário se registra no site da Valoreal ou no app da Crefaz, 
                                        poderá receber ligações telefônicas, e-mails, mensagens instantâneas 
                                        via aplicativos e SMS para confirmar ações e solicitações 
                                        específicas. Você poderá receber notificações referentes a 
                                        etapas importantes do seu relacionamento conosco. Essas 
                                        notificações transacionais não possuem opções de desligamento 
                                        (opt-out), uma vez que são enviadas por medidas de segurança. 
                                        A Valoreal poderá se comunicar com você por meio do Whatsapp, 
                                        Telegram, Facebook Messenger e qualquer outra forma similar de 
                                        comunicação. Eventualmente poderemos enviar pesquisas e outras 
                                        comunicações (diretamente ou por empresas parceiras) que julgarmos 
                                        relevantes para a melhoria de nossos serviços.
                                    </p>

                                    <h3 className="text-slate-500 font-semibold mt-4">IDENTIFICAÇÃO DE USUÁRIOS</h3>

                                    <p className="text-sm text-slate-500 indent-10">
                                        Os usuários do site da Valoreal e do app da Crefaz estão cientes 
                                        de que, ao efetivar qualquer contratação conosco, suas 
                                        informações pessoais de cadastro serão compartilhadas, 
                                        obrigatoriamente, com a instituição financeira que analisa 
                                        as operações e emite as CCBs (Cédulas de Crédito Bancárias) 
                                        relativas aos financiamentos, conforme normativos do Banco Central 
                                        do Brasil. Da mesma forma, o usuário está ciente e concorda que 
                                        sejam feitas pesquisas a seu respeito em órgãos de proteção ao 
                                        crédito, no Banco Central e em outras instituições financeiras.
                                    </p>

                                    <h3 className="text-slate-500 font-semibold mt-4">CONCESSÃO DE CRÉDITO</h3>

                                    <p className="text-sm text-slate-500 indent-10">
                                        A Valoreal e a instituição financeira parceira não tem obrigação 
                                        de conceder crédito às pessoas que ingressam com pedidos 
                                        no site e/ou app. A eventual concessão do crédito acontece 
                                        por decisão da instituição financeira, mediante parâmetros por 
                                        ela definidos. Caso o financiamento não seja aprovado, o usuário 
                                        (e somente ele) será comunicado a respeito e esta comunicação 
                                        encerrará o processo de análise de crédito. Um novo pedido de 
                                        empréstimo somente pode ser feito após 30 dias. Se houver falta de 
                                        informações e/ou documentos, a Valoreal entrará em contato por ligação 
                                        telefônica, SMS, mensagens instantâneas via aplicativos ou e-mail para 
                                        busca-las. Nossa política de crédito não permite empréstimos para 
                                        menores de 21 anos e pessoas de 80 anos ou mais.
                                    </p>
                                </ModalBody>
                            </ScrollShadow>

                            <ModalFooter>

                                <Button color="danger" variant="light" onPress={onClose}>
                                    Fechar
                                </Button>

                                <Button className="bg-blue-200 text-blue-500" onPress={() => {onAccept(); onClose();}}>
                                    Aceito os termos
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>

            </Modal>
        </>
  );
}
