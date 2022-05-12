const { CreateUser } = require('./src/Queries/User')
const { connection } = require('./db');

const resolvers = {
    Query: {
        hello: () => 'Hello world'
    },
    Mutation: {
        createUser: async (_, {input}) => {
            const {name,
                second_name,
                first_name,
                last_name,
                date_birthday,
                email,
                phone} = input
            try {
                const resStore = await CreateUser(name, second_name, first_name, last_name, date_birthday, email, phone, connection)
                return resStore[0];
            }catch (error) {
                console.error(error)
            }
        }
    }
}

module.exports = { resolvers }