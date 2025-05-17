import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback, useState } from 'react';
import { DotButton } from './DotButton';
import { ArrowButton } from './ArrowButton';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

export default function Carousel({ imagens, onSlideChange  }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        const index = emblaApi.selectedScrollSnap();
        setSelectedIndex(index);
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
        onSlideChange?.(index);
    }, [emblaApi, onSlideChange]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    const texto = [
        {
            indice: "1",
            titulo: "Titulo1",
            descricao: "Descrição1"
        
        },

        {
            indice: "2",
            titulo: "Titulo2",
            descricao: "Descrição2"
        
        },

        {
            indice: "3",
            titulo: "Titulo3",
            descricao: "Descrição3"
        
        },

        {
            indice: "4",
            titulo: "Titulo4",
            descricao: "Descrição4"
        
        }

    ];

    return (

        <div className="relative rounded-2xl bg-gradient-to-br from-[#000156] to-blue-400 saturate-150">
      
            <div className=' top-16 left-3 mb-24 mt-2'>
                <div className='relative ml-36'>
                    <span className='absolute text-9xl font-bold text-blue-400/50 -z-10'>
                        {texto[selectedIndex].indice}
                    </span>
                    <h1 className='absolute font-semibold text-blue-400 text-3xl top-8 left-7'>
                        {texto[selectedIndex].titulo}
                    </h1>
                    <p className='absolute font-light top-12 left-4 text-white'>
                        {texto[selectedIndex].descricao}
                    </p>
                </div>

            </div>
            
            <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                <div className="flex">
                    {imagens.map((src, index) => (
                        <div className="min-w-full flex-[0_0_100%]" key={index}>
                            <Image src={src} width={800} height={600} alt={`Slide ${index}`} className="w-full max-w-[500px] h-auto max-h-[400px] object-contain mx-auto" />
                        </div>
                    ))}
                </div>
            </div>

            <ArrowButton direction="left" onClick={scrollPrev} disabled={!prevBtnEnabled}>
                <IoIosArrowBack size={24} />
            </ArrowButton>

            <ArrowButton direction="right" onClick={scrollNext} disabled={!nextBtnEnabled}>
                <IoIosArrowForward size={24} />
            </ArrowButton>

            {/* Dots */}
            <div className="flex justify-center my-4">
                {scrollSnaps.map((_, index) => (
                    <DotButton key={index} selected={index === selectedIndex} onClick={() => scrollTo(index)}/>
                ))}
            </div>
            
        </div>
    );
}
