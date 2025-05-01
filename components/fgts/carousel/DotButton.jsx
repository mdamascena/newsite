export const DotButton = ({ selected, onClick }) => (
    <button
      className={`h-3 w-3 rounded-full mx-1 transition-colors duration-300 ${
        selected ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
      }`}
      type="button"
      onClick={onClick}
      aria-label="Ir para o slide"
    />
  );
  