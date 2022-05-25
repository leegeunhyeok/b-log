import styled from 'styled-components';
import { AnimatedSymbol } from 'src/components';

const App = () => {
  return (
    <Container>
      <AnimatedSymbol />
    </Container>
  );
};

const Container = styled('div')`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export default App;
