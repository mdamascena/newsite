import { useState, useEffect } from "react"
import { MdOutlineClose } from "react-icons/md"
import {debounce} from 'lodash'

export default function AlertTaxa() {
  const [closeClick, setCloseClick] = useState(false);
  const [closeScroll, setCloseScroll] = useState(false);

  const btnClose = () => {
    setCloseClick(true);
  };

  useEffect(() => {
    let timeoutId; // define uma variável para armazenar o ID do timeout
    let isAtTop = true; // define uma variável para armazenar se a página está no topo
  
    const handleScroll = debounce(() => {
      clearTimeout(timeoutId); // cancela o timeout anterior
      timeoutId = setTimeout(() => {
        if ( window.scrollY > 43 && closeClick == false && !isAtTop ){ // verifica se a página não está no topo
          setCloseScroll(true);
        } 
        else if ( window.scrollY < 5 && closeClick == false && isAtTop ){ // verifica se a página está no topo
          setCloseScroll(false);
        }
      }, 0); // tempo de espera de 1ms
    }, 0); // tempo de debounce de 1ms
  
    const handlePagePosition = () => {
      isAtTop = window.scrollY === 0; // atualiza o estado de "isAtTop"
    };
  
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handlePagePosition);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handlePagePosition);
    };
  }, [closeClick]);

  return (
    <div hidden={closeClick || closeScroll}>
      <div className="bg-blue-950 p-3 lg:p-4 saturate-150">

        <div className="flex">
          <div className="poppins text-white lg:text-md text-sm text-center flex-1">
            A ValoReal não cobra nenhum valor antecipado para liberação de
            empréstimo!
          </div>

          <div className="flex-wrap text-blue-200 text-xl cursor-pointer">
            <MdOutlineClose onClick={btnClose} />
          </div>

        </div>

      </div>
    </div>
  );
}
