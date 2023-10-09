import { gql } from '@apollo/client';

const SIGN_UP= gql`
  mutation signUp($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      token
      user{
        id
        email
      }
    }
  }
`;

export { SIGN_UP };