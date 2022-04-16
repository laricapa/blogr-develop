import {
  Container
} from '@chakra-ui/react'
import Card from './components/Card';
function App() {
  return (
    <Container
    maxW="full"
    h={400}
    m={0}
    borderBottomLeftRadius="3rem"
    bgImage="url('./images/bg-pattern-intro-desktop.svg'), linear-gradient(to right,hsl(13, 100%, 72%),hsl(353, 100%, 62%))"
    bgSize="160%"
    bgPosition="left"

    >
      <h1>Hola perras</h1>
    </Container>
  );
}

export default App;
