export const ArrowButton = ({ direction, onClick, disabled, children }) => {
    const positionClass =
      direction === 'left' ? 'left-2' : 'right-2';
  
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`absolute top-1/2 -translate-y-1/2 ${positionClass} bg-white p-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-30 z-10`}
        aria-label={`Seta para ${direction}`}
      >
        {children}
      </button>
    );
  };
  