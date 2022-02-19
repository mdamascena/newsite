import * as C from '../components/css/BtnMenu.css'

export default function BtnMenu(){
   
    const ativa_menu = () => {
        let menu = document.querySelector('.toggle');   
        
        menu.onclick = function(){
            menu.classList.toggle('active')
        }    
    }
   
    return(
        <div id='toggle' onClick={ativa_menu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
