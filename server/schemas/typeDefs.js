const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    first_name: String
    last_name: String
    username: String
    email: String
    password: String
    servicePost: [ServicePost]
  }
  type ServicePost {
    name: String
    description: String
    location: Number
    hourly_rate: Number
    phone_number: String
    user:User
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(first_name: String, last_name: String, username: String!, email: String!, password: String!): Auth
    savedServicePost(input: savedServicePost!): User
    removeServicePost(_id: ID!): User
  }
  input savedServicePost {
    name: String
    description: String
    location:Number
    hourly_rate: Number
    phone_number: String
    image: String
    user: User
  }
`;

module.exports = typeDefs;