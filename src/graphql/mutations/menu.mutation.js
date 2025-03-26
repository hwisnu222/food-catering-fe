import { gql } from "@apollo/client";

export const ADD_MENU = gql`
  mutation addMenu($data: MenuItemInput!) {
    createMenuItem(data: $data) {
      menuItem {
        id
        name
        description
      }
    }
  }
`;
