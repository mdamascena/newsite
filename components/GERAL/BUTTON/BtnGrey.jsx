export default function BtnGrey(props) {
    return (
        <button type="button" className="
            bg-slate-500 
            text-white 
            rounded-xl 
            py-[10px] 
            w-full 
            focus:outline-none
            focus:bg-slate-700 
            hover:bg-slate-400
            hover:ring-offset-0
            hover:ring-2
            hover:ring-slate-200 
            duration-100 
            saturate-150"
        >{props.nome}</button>
    )

}