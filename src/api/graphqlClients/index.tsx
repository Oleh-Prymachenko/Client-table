import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://test-task.expane.pro/api/graphql'

export const expaneClient = new GraphQLClient(endpoint, { headers: {} })
