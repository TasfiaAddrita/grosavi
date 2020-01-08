import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import AppNavbar from "./components/AppNavbar";
import GroceryItem from "./components/GroceryItem";
import SearchBar from "./components/SearchBar";
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
          <SearchBar />
          <GroceryItem />
        </Container>
      </div>
      //{" "}
    </Provider>
  );
}

export default App;
