import styled from 'styled-components';
import { GitHubModule } from './modules/github';

const App = () => {
  return (
    <Container>
      <button onClick={() => {
        GitHubModule.login();
      }}>test</button>
    </Container>
  );
};

const Container = styled('div')`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export default App;
