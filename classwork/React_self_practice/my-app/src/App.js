import { Button, Container, Navbar } from "react-bootstrap";
//import Counter from "./component/Counter";
import "./App.css";
//import Registration from "./component/Registration";
//import Userlist from "./component/Userlist";
import Approute from "./route/Approute";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="/">SHoKHi</Navbar.Brand>
        </Container>
      </Navbar>
      {/* <Counter></Counter> */}
      {/* <Registration></Registration> */}
      {/* <Userlist></Userlist> */}
      <Approute></Approute>
    </div>
  );
}

export default App;
