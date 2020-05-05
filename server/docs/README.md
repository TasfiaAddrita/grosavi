# Grosavi API

## Description
This API was built to support Grosavi. Grosavi is a web app that allows you to find the best deals in the supermarkets around you. 

## Base url: `https://www.grosavi.com/api`

## User
TBD

## Supermarket
Endpoints for retrieving information about one or more supermarkets.

| METHOD | ENDPOINT         | USAGE                                             |
|--------|------------------|---------------------------------------------------|
| GET    | `/supermarkets`    | Get all supermarkets that signed up with grosavi. |
| GET    | `/supermarkets/{id}` | Get details about a specific supermarket.         |

### GET `/supermarkets`
Get all supermarkets that signed up with grosavi.

## GET `/supermarkets/{id}`
Get details about a specific supermarket. 
```js
[
    {
        id: "5e10f1573916248388c5d8ed",
        name: "Make Supermarket",
        address: "555 Post St.",
        city: "San Francisco",
        state: "CA"
    }
]
```

## Grocery Items
TBD 

## Cart 
Endpoints for retrieving information about items in user's cart.

| METHOD | ENDPOINT | USAGE                                       |
|--------|----------|---------------------------------------------|
| GET    | /cart    | Get all grocery items saved in user's cart. |
| POST   | /cart    | Add a grocery item to user's cart.          |

### GET `/cart`
```js
[
    {
        GROCERY ITEM OBJECT
    },
    {
        GROCERY ITEM OBJECT
    }
]
```

### POST `/cart/{grocery-item-id}`
```js
{
    response: "Successfully added to cart"
}
```