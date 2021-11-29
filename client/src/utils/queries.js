import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    User {
      _id
      first_name
      last_name
      username
      email
      password
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
  }`;
