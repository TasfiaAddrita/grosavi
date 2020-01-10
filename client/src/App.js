import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import AppNavbar from "./components/AppNavbar";
import GroceryItem from "./components/GroceryItem";
import SearchBar from "./components/SearchBar";
import Cart from "./components/Cart";
// import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          {/* <h1>Hello world</h1> */}
          {/* <Row> */}
          {/* <Col lg="8"> */}
          <SearchBar />
          <GroceryItem />
          {/* </Col> */}
          {/* <Col lg="4"> */}
          {/* <Cart /> */}
          {/* </Col> */}
          {/* </Row> */}
        </Container>
      </div>
    </Provider>
  );
}

export default App;
