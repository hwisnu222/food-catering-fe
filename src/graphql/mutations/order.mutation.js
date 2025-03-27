import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation createOrder($data: OrderInput!) {
    createOrder(data: $data) {
      order {
        id
        name
        phoneNumber
        orderDate
        deliveryDate
        deliveryAddress
        specialNotes
        status
      }
    }
  }
`;
