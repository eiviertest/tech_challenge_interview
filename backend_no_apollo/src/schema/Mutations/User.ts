import { GraphQLString } from "graphql";
import { Users_Test_Ale_Vargas } from "../../entities/Users_Test_Ale_Vargas";
import { UserType } from "../../typeDefs/User";

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString},
        second_name: { type: GraphQLString},
        first_name: { type: GraphQLString},
        last_name: { type: GraphQLString},
        date_birthday: { type: GraphQLString},
        email: { type: GraphQLString},
        phone: { type: GraphQLString}
    },
    async resolve(_:any, args: any) {
        const {name, second_name, first_name, last_name, date_birthday, email, phone} = args;
        const result = await Users_Test_Ale_Vargas.insert({
            name: name,
            second_name: second_name,
            first_name: first_name,
            last_name: last_name,
            date_birthday: date_birthday,
            email: email,
            phone: phone
        });
        return {
            ...args, id: result.identifiers[0].id
        }
    }
}