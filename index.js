const { ApolloServer, gql } = require("apollo-server");
const lifts = require("./data/lifts.json");
const trails = require("./data/trails.json");

const typeDefs = gql`
    type Query {
        hello: String!
    }
`;
const resolvers = {
    Query: {
        hello: () => "Hello World!"
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server
    .listen()
    .then(({url}) =>
        console.log(`Server running at ${url}`)
    );
