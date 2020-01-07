import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
// import styled from "styled-components";

class AppNavbar extends Component {
  // constructor(props) {
  //     super(props);
  //     this.toggle = this.toggle.bind(this);
  //     this.state = {
  //         isOpen: false
  //     }
  // }
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    // const StyledNavbar = styled(Navbar)`
    //   background-color: orange;
    //   color: white;
    // `;

    // const StyledNavbarBrand = styled(NavbarBrand)`
    //   color: white;
    // `;

    // const StyledNavLink = styled(NavLink)`
    //   color: white;
    // `;

    // const StyledCollapse = styled(Collapse)`
    //   color: white;
    // `;

    return (
      <div>
        {/* <Navbar color="warning" dark expand="sm" className="mb-3"> */}
        <Navbar
          style={{ backgroundColor: "orange" }}
          dark
          expand="sm"
          className="mb-3"
        >
          <Container>
            <NavbarBrand href="/">grosavi</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#">Cart</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
