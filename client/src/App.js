import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import AppNavbar from "./components/AppNavbar";
import GroceryItem from "./components/GroceryItem";
import SearchBar from "./components/SearchBar";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container>
        {/* <h1>Hello world</h1> */}
        <SearchBar />
        <GroceryItem />
      </Container>
    </div>
  );
}

export default App;
