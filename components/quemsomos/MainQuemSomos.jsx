import { TypingAnimation } from "../ui/typing-animation";
import { AuroraText } from "../ui/aurora-text"

export default function MainQuemSomos() {

    return (
        <main>
            <section className="bgMainQuemSomos lg:h-[70vh] h-[50vh] overflow-y-hidden lg:bg-fixed">
                <div className='container-custom flex justify-center items-center h-full'>
                    
                    
                    <TypingAnimation className="text-3xl lg:text-5xl text-white tracking-tight lg:mb-2 font-semibold mx-10">
                        Muito prazer, somos a ValoReal...✌🏼
                    </TypingAnimation>
                    
                </div>
            </section>
           
           
        </main>
    )
}