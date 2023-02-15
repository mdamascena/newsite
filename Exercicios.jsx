
export default function Exec(){
    return(
        <>

            <div className="grid grid-cols-4 mt-3 p-4">
                <div className="md:hidden col-span-2 bg-blue-400">1</div>
                <div className="md:hidden col-span-2 bg-blue-500">2</div>

                <div className="lg:hidden col-span-2 bg-red-400">1</div>
                <div className="lg:hidden col-span-2 bg-red-500">2</div>
            </div>

            <div className="bg-indigo-700 flex flex-row p-3">
                <div className="bg-red-600 p-6 m-2">1</div>
                <div className="bg-red-600 p-6 m-2">2</div>
                <div className="bg-red-600 p-6 m-2">3</div>
            </div>
            <div className="flex flex-col bg-blue-300">
                <div className="bg-blue-600 p-6 m-2">Flex por colunas #1</div>
                <div className="bg-blue-600 p-6 m-2">Flex por colunas #2</div>
                <div className="bg-blue-600 p-6 m-2">Flex por colunas #3</div>
            </div>
            {/*<div className="flex flex-nowrap bg-red-300">
                <div className="bg-red-400 p-6 m-3">1</div>
                <div className="bg-red-500 p-6 m-3">2</div>
                <div className="bg-red-600 p-6 m-3">3</div>
                <div className="bg-red-700 p-6 m-3">4</div>
                <div className="bg-red-800 p-6 m-3 lg:hidden">5</div>
                <div className="bg-red-900 p-6 m-3">6</div>
            </div>*/}
            <div className="flex container bg-green-400 p-8">
                <div className="flex-1 bg-green-800">1</div>
                <div className="flex-1 bg-green-600">2</div>
                <div className="flex-1 bg-green-500">3</div>
            </div>

            <div className="container grid grid-cols-3 p-2 bg-blue-400">
                <div className="bg-indigo-500">1</div>
                <div className="bg-indigo-700">2</div>
                <div className="bg-indigo-100">3</div>
                <div className="bg-indigo-200">4</div>
                <div className="bg-indigo-300">5</div>
                <div className="bg-indigo-400">6</div>
                <div className="bg-indigo-500">7</div>
                <div className="bg-indigo-800">8</div>
            </div>

            
        </>
    )
}