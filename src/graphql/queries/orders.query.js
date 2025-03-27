import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query getOrder {
    orders {
      id
      name
      phoneNumber
      trackingCode
      menuItem {
        id
        name
      }
      orderDate
      deliveryDate
      deliveryAddress
      specialNotes
      status
    }
  }
`;

export const GET_ORDER = gql`
  query getOrder($id: ID) {
    order(id: $id) {
      id
      name
      trackingCode
      menuItem {
        id
        name
        basePrice
        image
      }
      orderDate
      deliveryDate
      deliveryAddress
      specialNotes
      status
    }
  }
`;
