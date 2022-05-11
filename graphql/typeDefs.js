const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    firstName: String!
    lastName: String!
    userName: String!
    address: String
    city: String
    state: String
    postalCode: String
    phone: String
    email: String!
    password: String
    createdAt: String
    createdBy: String
    id: ID
  }

  input UserInput {
    firstName: String!
    lastName: String!
    userName: String!
    address: String
    city: String
    state: String
    postalCode: String
    phone: String
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    user(id: ID!): User!
  }

  type Mutation {
    createUser(userInput: UserInput): User!
  }
`;
