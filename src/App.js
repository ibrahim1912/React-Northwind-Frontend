import "./App.css";
import Dashbord from "./layouts/Dashbord";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Navi from "./layouts/Navi";

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <Dashbord />
      </Container>
    </div>
  );
}

export default App;
