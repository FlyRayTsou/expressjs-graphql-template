import { buildSchema } from 'graphql';
import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server"
import express from "express"

// Fetch schema from divided files
import { types } from './schema/index.js';
// Fetch Resolves
import { resolvers } from './resolvers/index.js'

// Build the GraphQL schema
const schema = buildSchema(types);

// Initialize the Express app
const app = express();

// Add JSON body parser middleware
app.use(express.json());

app.all('/graphql', (req, res, next) => {
    // Log the GraphQL query from request body
    if (req.body && req.body.query) {
        // console.log('GraphQL Query:', req.body.query);  // Debugging line
    }
    next();
}, createHandler({
    schema: schema,
    rootValue: resolvers,
}));

app.get('/', (_req, res) => {
    res.type('html');
    res.end(ruruHTML({ endpoint: '/graphql' }));
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/graphql');
});
