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
  Row,
  Col
} from "reactstrap";
import placeholder from "../assets/placeholder1.svg";
import "./css/GroceryItem.css";
import { connect } from "react-redux";
import {
  getGroceryItems,
  getGroceryItemById
} from "../actions/groceryItemsActions";
import { addGroceryItemToCart } from "../actions/cartItemsAction";
import PropTypes from "prop-types";

class GroceryItem extends Component {
  componentDidMount() {
    this.props.getGroceryItems();
  }

  getGroceryItemById = id => {
    console.log(id);
    this.props.getGroceryItemById(id);
  };

  addGroceryItemToCart = groceryItem => {
    console.log(groceryItem);
    this.props.addGroceryItemToCart(groceryItem);
  };

  render() {
    const { groceryItems } = this.props.groceryItem;
    return (
      <Row>
        {groceryItems.map(({ _id, name, weight, image }) => (
          //   <Col lg="4" className="grocery-item-card" key={_id}>
          <Col lg="3" className="grocery-item-card" key={_id}>
            <div>
              <Card>
                <CardImg
                  top
                  width="100%"
                  //   src={placeholder}
                  src={image}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{name}</CardTitle>
                  <CardSubtitle>{weight} oz</CardSubtitle>
                  {/* <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText> */}
                  {/* <Button size="sm" onClick={this.REPLACE_ME}>
                    #
                  </Button>{" "} */}
                  <Button size="sm">#</Button>{" "}
                  {/* replace me with input field */}
                  {/* <Input size="sm" type="text" placeholder="Quant" /> */}
                  <Button
                    size="sm"
                    onClick={this.addGroceryItemToCart.bind(this, {
                      _id,
                      name,
                      weight,
                      image
                    })}
                  >
                    Add to Cart
                  </Button>
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
  getGroceryItemById: PropTypes.func.isRequired,
  groceryItem: PropTypes.object.isRequired,
  addGroceryItemToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  groceryItem: state.groceryItem
});

export default connect(mapStateToProps, {
  getGroceryItems,
  getGroceryItemById,
  addGroceryItemToCart
})(GroceryItem);
