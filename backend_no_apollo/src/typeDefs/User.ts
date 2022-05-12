import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        second_name: { type: GraphQLString},
        first_name: { type: GraphQLString},
        last_name: { type: GraphQLString},
        date_birthday: { type: GraphQLString},
        email: { type: GraphQLString},
        phone: { type: GraphQLString}
    }
})