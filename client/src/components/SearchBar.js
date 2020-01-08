import React, { Component } from "react";
import { InputGroup, Input, InputGroupAddon, Button, Row } from "reactstrap";
import searchIcon from "../assets/search_icon.png";
import "./css/SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <Row>
        <InputGroup size="lg" className="m-5">
          <Input placeholder="Search grosavi..." />
          <InputGroupAddon addonType="append">
            <Button className="search-icon">
              <img alt="" class="invert" src={searchIcon} />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Row>
    );
  }
}

export default SearchBar;
