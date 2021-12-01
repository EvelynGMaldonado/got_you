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

export const QUERY_ALL = gql`
query all{
  users{
      _id
      first_name
      last_name
      username
      email
      servicePost {
      	name
  			description
  			location
  			hourly_rate
 		 		phone_number
      }
    }
}`;

export const QUERY_SERVICES = gql`
query getServices {
  services {
        _id
        name
        description
        location
        hourly_rate
        phone_number
        image

  }
  
}`