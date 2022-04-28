import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';

import { StepsProvider } from "react-step-builder";

import Resume from "./components/Resume";

function App() {
  return (
    <StepsProvider>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Resume Builder
          </Navbar.Brand>
        </Container>
      </Navbar>      
      <Container>
        <Resume />
      </Container>
    </StepsProvider>
  );
}

export default App;
