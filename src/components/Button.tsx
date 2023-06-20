type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name: string;
};
export const Button = ({ onClick, name }: ButtonProps) => {
  return (
    <button
      className="bg-blue-400 rounded-xl border-blue-300 border-2 text-4xl p-2 m-2 grow"
      onClick={onClick}
    >
      {name}
    </button>
  );
};
