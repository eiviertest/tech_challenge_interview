require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

const app = express();

module.exports = app

async function start() {
    const apollo = new ApolloServer({
        typeDefs,
        resolvers
    });
    
    await apollo.start();
    apollo.applyMiddleware({app});

    app.listen(process.env.PORT, () => {
        console.log("Server en puerto", process.env.PORT)
    })
}

start()