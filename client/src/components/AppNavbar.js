import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

// convert to UI Component (Functional component, Stateless component)
const AppNavbar = props => {
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
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Cart</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Account</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

// class AppNavbar extends Component {
//   render() {
//     return (
//       <div>
//         {/* <Navbar color="warning" dark expand="sm" className="mb-3"> */}
//         <Navbar
//           style={{ backgroundColor: "orange" }}
//           dark
//           expand="sm"
//           className="mb-3"
//         >
//           <Container>
//             <NavbarBrand href="/">grosavi</NavbarBrand>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink href="#" onClick={this.REPLACE_ME}>
//                   Cart
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="#">Account</NavLink>
//               </NavItem>
//             </Nav>
//           </Container>
//         </Navbar>
//       </div>
//     );
//   }
// }

export default AppNavbar;
