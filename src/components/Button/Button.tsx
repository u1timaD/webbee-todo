import { ButtonStyled } from './Button.styled';

type ButtonProps = {
  name: string;
  handleClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ name, handleClick }) => {
  return (
    <ButtonStyled name={name} onClick={handleClick}>
      {name}
    </ButtonStyled>
  );
};

export default Button;
