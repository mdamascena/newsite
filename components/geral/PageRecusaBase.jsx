import Header from "../geral/header/Header_result"

export default function PageRecusaBase() {
    

    return (
        <>
            <Header/>
            <main className="bg-slate-50">
                
                <div className="container-custom">
                    
                    <div className="grid grid-cols-2">

                        <div className="col-span-1">
                            
                            <h1 className="text-slate-500 text-4xl font-semibold tracking-tight">
                                Não foi possível aprovar seu crédito neste momento
                            </h1>

                        </div>

                    </div>

                </div>

            </main>
        </>
    );
}
