# Introduction
This template is built for practicing **GraphQL** using **Express.js** and **TypeScript**. Since it's easy to forget the syntax and structure when not used frequently, this project serves as a quick refresher. It includes both the implementation and documentation to help me quickly get back up to speed with GraphQL.


# Main Concepts
To implement GraphQL, there are three main components to focus on:

## 1. Query
- **Purpose:** Defines the operations clients are allowed to request and what type of data is returned.
- **Format:** See code examples below.
- **File:** `src/schema/query.ts`

## 2. Schema (Type Definitions)

- **Purpose:** Defines the structure and types of the data available in your GraphQL API.
- **Files:**  
  `src/schema/user.ts`, `src/schema/order.ts`, `src/schema/product.ts`

## 3. Resolver

- **Purpose:** Contains the logic to fetch data from your data sources (e.g., database) based on the query. It maps each field in the schema to a function that returns the corresponding data.
- **Important Note:**  
  If a field is not defined in the schema, it will not appear in the GraphQL response—even if the resolver includes it.
- **Format:** See code examples below.
- **File:** `src/resolvers/`

## Code Examples
// Schema Example
`src/schema/order.ts`

// Query example
orders: [Order]

// Resolver example
orders: () => orders

## Notes
- Schema files define **types**, not actual data.
- Resolvers handle **data fetching logic** and return the data that matches schema types.
- Fields not defined in the schema will be **filtered out** of the response automatically by GraphQL.

# Details

(To be updated)

# How to start

1. install packages: `% npm install`
2. Start Server:
   - Not hot reloading: `% npm exec tsx ./src/app.ts`
   - Have hot reloading: `% npm exec nodemon`

# How to Test with GraphiQL

Visit `http://localhost:3000/` to open the **GraphiQL** interface. 
This template uses [Ruru](https://github.com/graphql-rust/ruru) — a lightweight in-browser GraphQL query tester (similar to Postman for GraphQL), often referred to as a "GraphQL IDE".
- Use the **Documentation Explorer** to browse available queries and types.
- Use the **GraphiQL Explorer** to construct and send requests for testing.

# How to check coding convension

`% npm exec eslint`

# How to run unit test

(To be updated)

# How to debug with Visual Studio Code

There are already necessary settings (launch.json and tasks.json).
So you just need to click the left sidebar `Run and Debug` and click the green play button.

# License
MIT