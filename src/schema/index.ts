import { userType } from './user.js';
import { orderType } from './order.js';
import { productType } from './product.js';
import { query } from './query.js';

export const types = `
    ${userType},
    ${orderType}
    ${productType}
    ${query}
`;