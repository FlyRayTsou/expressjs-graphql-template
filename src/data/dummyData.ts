const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 }
];

const orders = [
  { id: 1, userId: 1, productIds: [1, 2], purchasePrice: 1500 },
  { id: 2, userId: 2, productIds: [2], purchasePrice: 500 }
];

export { users, products, orders }