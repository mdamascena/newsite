import { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";

export default function AlertTaxa() {
  const [closeClick, setCloseClick] = useState(false);
  const [closeScroll, setCloseScroll] = useState(false);

  const btnClose = () => {
    setCloseClick(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY > 50.152626598486151516848797977876546464808 &&
        closeClick == false
      ) {
        setCloseScroll(true);
      } else if (
        window.scrollY < 40.152626598486151516848797977876546464896 &&
        closeClick == false
      ) {
        setCloseScroll(false);
      }
    });
  }, []);

  return (
    <div hidden={closeClick || closeScroll}>
      <div className="bg-blue-600 p-3 lg:p-4">

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
