import { gql } from 'graphql-request'

export const POST_CLIENT = gql`
    mutation AddClient(
        $firstName: String!
        $lastName: String!
        $phone: String
        $avatarUrl: String
    ) {
        addClient(
            firstName: $firstName
            lastName: $lastName
            phone: $phone
            avatarUrl: $avatarUrl
        ) {
            id
            firstName
            lastName
            phone
            avatarUrl
        }
    }
`
export const PUT_CLIENT = gql`
    mutation updateClient(
        $id: ID!
        $firstName: String!
        $lastName: String!
        $phone: String
        $avatarUrl: String
    ) {
        updateClient(
            id: $id
            firstName: $firstName
            lastName: $lastName
            phone: $phone
            avatarUrl: $avatarUrl
        ) {
            id
            firstName
            lastName
            phone
            avatarUrl
        }
    }
`
