import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Col
} from "reactstrap";
import placeholder from "../assets/placeholder1.svg";

class GroceryItem extends Component {
  render() {
    return (
      <Row>
        <Col sm="3">
          <div>
            <Card>
              <CardImg
                top
                width="100%"
                src={placeholder}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    );
  }
}

export default GroceryItem;
