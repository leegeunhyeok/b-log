import styled, { keyframes } from 'styled-components';

const ICON = '🌱';
const SIZE = 200;

const AnimatedSymbol = () => <SymbolWrapper>{ICON}</SymbolWrapper>;

const symbolAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  75% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const SymbolWrapper = styled('div')`
  width: ${SIZE}px;
  height: ${SIZE}px;
  font-size: ${SIZE}px;
  line-height: ${SIZE}px;
  animation: ${symbolAnimation} 0.75s ease-out forwards;
`;

export default AnimatedSymbol;
