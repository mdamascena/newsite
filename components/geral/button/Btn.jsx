
export default function Btn(props) {
    return (
        <button type="submit" className="
            bg-blue-500 
            text-white 
            rounded-xl
            py-2.5 
            w-full 
            focus:outline-none
            focus:bg-blue-700 
            hover:bg-blue-400
            hover:ring-offset-0
            hover:ring-2
            hover:ring-blue-200 
            duration-100 
            saturate-150
            cursor-pointer"
        >{props.nome}</button>
    )

}