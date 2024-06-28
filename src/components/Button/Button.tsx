import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.cl === 'delete' || props.cl === 'cancel' ? '#D93D3D' : '#2d77af'};
  color: white;
  text-transform: uppercase;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    outline: 2px solid #2d2d2d;
  }
`;

const Button = ({ cl, name, handleClick }) => {
  return (
    <StyledButton cl={cl} onClick={handleClick}>
      {name}
    </StyledButton>
  );
};

export default Button;
