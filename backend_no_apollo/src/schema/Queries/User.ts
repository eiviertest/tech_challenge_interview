import { GraphQLString } from "graphql";

export const USER = {
    type: GraphQLString,
    resolve: () => 'Hello wordl'
}