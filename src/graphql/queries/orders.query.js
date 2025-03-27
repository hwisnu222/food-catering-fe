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
