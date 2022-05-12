import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_USER } from "./Mutations/User";
import { USER } from "./Queries/User";

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        user: USER
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})