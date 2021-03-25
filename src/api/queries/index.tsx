import { gql } from 'graphql-request'

export const queryGetClients = gql`
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
