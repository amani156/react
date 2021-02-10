
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row , Col} from "react-bootstrap";
import Menu from "./components/Menu";
import Left from "./components/Left";
import Right from "./components/Right";



function App() {
  return (
    <div >
    <Menu/>
    <Row className ="part">
      <Col> <Left/></Col>
      <Col>  <Right/></Col>
    </Row>
    </div>
  );
}

export default App;

