import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        first_name
        last_name
        username
        email
      }
    }
  }`;

export const ADD_USER = gql`
  mutation addUser($first_name: String!, $last_name: String!, $username: String!, $email: String!, $password: String!) {
    addUser(first_name: $first_name, last_name: $last_name, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        first_name
        last_name
        username
        email
        password
      }
    }
  }`;

export const ADD_SERVICEPOST = gql`
mutation addServicePost($name: String!, $description: String!, $location: String!, $hourly_rate: String!, $phone_number: String!, $image: String!) {
  addServicePost(name: $name, description: $description, location: $location, hourly_rate: $hourly_rate, phone_number: $phone_number, image: $image) {
    user {
      first_name
      last_name
      username
      servicePost {
        name
        description
        location
        hourly_rate
        phone_number
        image
      }
    }
  }
}`;

export const SAVED_SERVICE_POST = gql `
mutation savedServicePost($servicePostId: ID!) {
  savedServicePost(servicePostId: $servicePostId) {
    _id: ID
      first_name
      last_name
      username
      servicePost {
        _id
        name
        description
        location
        hourly_rate
        phone_number
        image
      }
    
  }
}`

export const REMOVE_SERVICE_POST = gql `
mutation removeServicePost($servicePostId: ID!) {
  removeServicePost(servicePostId: $servicePostId) {
    _id: ID
      first_name
      last_name
      username
      servicePost {
        _id
        name
        description
        location
        hourly_rate
        phone_number
      }
    
  }
}`


