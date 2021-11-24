import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    user {
      _id
      first_name
      last_name
      username
      email
      password
      # servicePost
    }
  }
`;

export const QUERY_FINDSERVICEPOST = gql`
  query findServicePost($_id: String) {
    matchups(location: $location) {
      _id
      name
      description
      location
      hourly_rate
      phone_number
      # user
      
    }
  }
`;
