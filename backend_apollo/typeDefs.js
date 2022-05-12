const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        name: String
        second_name: String
        first_name: String
        last_name: String
        date_birthday: String
        email: String
        phone: String
    }

    input UserInput {
        name: String!
        second_name: String!
        first_name: String!
        last_name: String!
        date_birthday: String!
        email: String!
        phone: String!
    } 

    type Query {
        hello: String
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`

module.exports = {typeDefs}