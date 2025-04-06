export const orderType = `
  type Order {
    id: Int
    user: User
    products: [Product]
    purchasePrice: Int
  }
`;