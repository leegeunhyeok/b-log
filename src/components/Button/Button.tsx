import { PropsWithChildren } from 'react';
import styled from "styled-components";

export type ButtonProps = PropsWithChildren<{
  color?: string;
  onClick?: () => void;
}>;

const Button = ({ children, color = 'black', onClick }: ButtonProps) => {
  return (<StyledButton color={color} onClick={onClick}>{children}</StyledButton>);
};

const StyledButton = styled('button')<{ color: string }>`
  padding: .5rem 1rem;
  border: none;
  border-radius: .25rem;
  background-color: ${({ color }) => color};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity .25s;

  &:hover {
    opacity: .5;
  }
`;

export default Button;
