import Lottie from "react-lottie";
import GraficoJSON from '../../public/img/guru-animation.json';

export const GraficoBarAzul = () =>{
    const options = {
        loop: true,
        autoplay: true,
        animationData: GraficoJSON
    }

    return <Lottie options={options}  />
}
