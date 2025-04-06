export const query = `
  type Query {
    users: [User]
    user(id: Int!): User
    products: [Product]
    product(id: Int!): Product
    orders: [Order]
    order(id: Int!): Order
  }
`; 