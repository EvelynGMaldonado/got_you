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
    _id: String
    name: String
    description: String
    location: String
    hourly_rate: String
    phone_number: String
    image: String
    user: User
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    findServicePost(location:String):[ServicePost]
    users: [User]!
    services (username: String): [ServicePost]
  }



  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(first_name: String!, last_name: String!, username: String!, email: String!, password: String!): Auth
    addServicePost(name: String!, description: String, location: String!, hourly_rate: String!, phone_number: String!, image: String!): ServicePost
    savedServicePost(_id: ID!): User
    removeServicePost(_id: ID!): User
  }
  input ServicePostInput {
    name: String
    description: String
    location:String
    hourly_rate: String
    phone_number: String
    image: String
    user: String
  }
  input UserInput {
    first_name: String!
    last_name: String!
    username: String!
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;