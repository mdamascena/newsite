import { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";

export default function AlertTaxa() {
  const [closeClick, setCloseClick] = useState(false);
  const [closeScroll, setCloseScroll] = useState(false);

  const btnClose = () => {
    setCloseClick(true);
  };

  {/*useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50 && closeClick == false) {
        setCloseScroll(true);
      } else {
        setCloseScroll(false);
      }
    });
  }, []);*/}

  return (
    <div className="bg-blue-600 p-3 lg:p-4 transition duration-700" hidden={closeClick || closeScroll}>

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
  );
}
