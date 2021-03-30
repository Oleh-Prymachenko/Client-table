import { gql } from 'graphql-request'

export const CLIENTS = gql`
    {
        getClients {
            id
            firstName
            lastName
            phone
            avatarUrl
        }
    }
`
