import { Dialog, DialogContent, DialogHeader, DialogTitle } from "components/ui/dialog"
import { Card, CardContent } from "components/ui/card"
import { SlEnergy } from "react-icons/sl";

export function DialogCep({ open, onOpenChange }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="text-center mb-5">Selecione sua companhia de energia</DialogTitle>
                </DialogHeader>

                <Card className="w-full cursor-pointer mb-5">
                    <CardContent className="p-5">
                        <div className="flex items-center">
                            <div>
                                <SlEnergy className='text-6xl text-blue-500 m-auto' />
                            </div>
                            
                            <div className="w-full h-full flex">
                               <span className="w-full ml-5 flex text-xl text-center text-gray-400">Enel Rio de Janeiro</span>
                            </div>

                        </div>
                    </CardContent>
                </Card>

            </DialogContent>
        </Dialog>
    )
}
