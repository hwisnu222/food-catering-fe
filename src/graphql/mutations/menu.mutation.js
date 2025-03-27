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

export const UPDATE_MENU = gql`
  mutation updateMenu($id: ID, $data: MenuItemInput) {
    updateMenuItem(id: $id, data: $data) {
      menuItem {
        id
        name
        category {
          id
          name
        }
        description
        basePrice
        dietaryType
        preparationTime
        isAvailable
        image
      }
    }
  }
`;

export const DELETE_MENU = gql`
  mutation deleteMenu($id: ID) {
    deleteMenuItem(id: $id) {
      menuItem {
        id
        name
      }
    }
  }
`;
