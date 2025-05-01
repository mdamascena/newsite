'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback, useState } from 'react';
import { DotButton } from './DotButton';
import { ArrowButton } from './ArrowButton';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Carousel({ slides, onSlideChange  }) {
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

  return (
    <div className="relative">

      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">

          {slides.map((src, index) => (
            <div className="min-w-full flex-[0_0_100%]" key={index}>
              <img src={src} alt={`Slide ${index}`} className="w-full max-w-[500px] h-auto max-h-[400px] object-contain mx-auto" />
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
      <div className="flex justify-center mt-4">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
