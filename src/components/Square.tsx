import { FC } from "react";

interface Props {
  value: string | null;
  onSquareClick: () => void;
}

const Square: FC<Props> = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
