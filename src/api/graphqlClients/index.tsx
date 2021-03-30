import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://mockend.com/org/repo/graphql'

export const expaneClient = new GraphQLClient(endpoint, { headers: {} })

// https://test-task.expane.pro/api/graphql
