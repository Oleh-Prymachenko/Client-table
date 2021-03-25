import { gql } from 'graphql-request'

export const createClient = gql`
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
export const updateClient = gql`
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
