type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name: string;
};
export const Button = ({ onClick, name }: ButtonProps) => {
  return (
    <button className="btn" onClick={onClick}>
      {name}
    </button>
  );
};
