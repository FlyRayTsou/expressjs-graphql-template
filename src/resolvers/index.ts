// TODO: Read Data from Dummy, Read Data from Database
import { users, products, orders } from '../data/dummyData.js';

// Resolvers for the GraphQL queries
export const resolvers = {
  users: () => users,
  user: ({ id }: { id: number }) => users.find(user => user.id === id),
  products: () => products,
  product: ({ id }: { id: number }) => products.find(product => product.id === id),
  orders: () => orders,
  order: ({ id }: { id: number }) => {
    console.log('Querying for order with id:', id); // Debugging line
  
    // Look for the order with the given id
    const order = orders.find(order => order.id === id);
    if (!order) {
      console.error('Order not found with id:', id); // Debugging line
      return null; // Return null if the order is not found
    }
  
    // If order is found, resolve the user and products
    const userForOrder = users.find(user => user.id === order.userId);
    const productsForOrder = order.productIds.map(id => products.find(p => p.id === id));
  
    // console.log('Found order:', order); // Debugging line
    // console.log('Resolved user:', userForOrder); // Debugging line
    // console.log('Resolved products:', productsForOrder); // Debugging line

    return {
      order: order,
      user: userForOrder,
      products: productsForOrder
    };
  },
};