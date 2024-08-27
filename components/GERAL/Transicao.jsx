import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Transicao() {
  const [showTransition, setShowTransition] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setShowTransition(true);
    const handleComplete = () => setTimeout(() => setShowTransition(false), 1000); // 1 segundo de tela azul completa

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      {showTransition && (
        <div className="fixed inset-0 bg-blue-600 z-50 animate-slide-right transition-all duration-[1.5s]">
          {/* A animação preenche a tela da esquerda para a direita */}
        </div>
      )}
    </>
  );
}
