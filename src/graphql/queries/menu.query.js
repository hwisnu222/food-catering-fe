import { gql } from "@apollo/client";

export const GET_MENU = gql`
  query getMenu {
    menuItems {
      id
      name
      description
      category {
        id
        name
        description
        isActive
      }
      basePrice
      dietaryType
      preparationTime
      isAvailable
      image
    }
  }
`;

export const GET_DETAIL_MENU = gql`
  query getDetailMenu($id: ID) {
    menuItem(id: $id) {
      id
      name
      description
      category {
        id
        name
        description
        isActive
      }
      basePrice
      dietaryType
      preparationTime
      isAvailable
      image
    }
  }
`;
