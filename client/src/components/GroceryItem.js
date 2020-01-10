import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
import placeholder from "../assets/placeholder1.svg";
import "./css/GroceryItem.css";
import { connect } from "react-redux";
import { getGroceryItems } from "../actions/groceryItemsActions";
import PropTypes from "prop-types";

class GroceryItem extends Component {
  componentDidMount() {
    this.props.getGroceryItems();
  }
  render() {
    const { groceryItems } = this.props.groceryItem;
    return (
      <Row>
        {groceryItems.map(({ id, name, weight }) => (
          //   <Col lg="4" className="grocery-item-card">
          <Col lg="3" className="grocery-item-card">
            <div>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={placeholder}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{name}</CardTitle>
                  <CardSubtitle>{weight} oz</CardSubtitle>
                  {/* <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText> */}
                  <Button size="sm">#</Button>{" "}
                  {/* replace me with input field */}
                  <Button size="sm">Add to Cart</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}

GroceryItem.propTypes = {
  getGroceryItems: PropTypes.func.isRequired,
  groceryItem: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  groceryItem: state.groceryItem
});

export default connect(mapStateToProps, { getGroceryItems })(GroceryItem);
