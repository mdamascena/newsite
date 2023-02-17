import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../public/img/guru-animation-cor.json';

export default function Home() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: animationData,
    });
  }, []);

  return (
    <div ref={container}></div>
  );
}
