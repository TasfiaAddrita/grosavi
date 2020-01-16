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
  Col,
  InputGroup,
  InputGroupAddon,
  Form,
  FormGroup
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

  addGroceryItemToCart = (e, groceryItem) => {
    e.preventDefault();
    groceryItem.quantity = parseInt(e.target.quantity.value);
    console.log(groceryItem);
    this.props.addGroceryItemToCart(groceryItem);
  };

  render() {
    const { groceryItems } = this.props.groceryItem;
    return (
      <Row>
        {/* {groceryItems.map(({ _id, name, weight, image }) => ( */}
        {groceryItems.map(groceryItem => (
          <Col lg="3" className="grocery-item-card" key={groceryItem._id}>
            <div>
              <Card>
                <CardImg
                  top
                  width="100%"
                  //   src={placeholder}
                  src={groceryItem.image}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{groceryItem.name}</CardTitle>
                  <CardSubtitle>{groceryItem.weight} oz</CardSubtitle>
                  <Form
                    onSubmit={e => {
                      this.addGroceryItemToCart(e, groceryItem); // https://stackoverflow.com/questions/42597602/react-onclick-pass-event-with-parameter
                    }}
                  >
                    <div className="quantity-group">
                      <Input
                        bsSize="sm"
                        placeholder="#"
                        className="quantity-input"
                        name="quantity"
                      />
                      <Button
                        type="submit"
                        className="ml-2 quantity-btn"
                        size="sm"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Form>
                  {/*  */}
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
