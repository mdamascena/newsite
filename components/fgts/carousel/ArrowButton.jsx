export const ArrowButton = ({ direction, onClick, disabled, children }) => {
    const positionClass =
      	direction === 'left' ? 'left-2' : 'right-2';
  
    return (
		<button
        	onClick={onClick}
			disabled={disabled}
        	className={`absolute text-white top-1/2 -translate-y-1/2 ${positionClass} p-2 rounded-lg shadow border-1 hover:border-white hover:border-2 disabled:opacity-30 z-10`}
        	aria-label={`Seta para ${direction}`}
		>
        	{children}
      	</button>
    );
  };
  