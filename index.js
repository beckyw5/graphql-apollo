const { ApolloServer, gql } = require("apollo-server");
const lifts = require("./data/lifts.json");
const trails = require("./data/trails.json");

const typeDefs = gql`
    type Lift {
        id: ID!
        name: String!
        status: LiftStatus!
        capacity: Int!
        night: Boolean!
        elevationGain: Int!
    }
    enum LiftStatus {
        OPEN
        HOLD
        CLOSED
    }
    type Query {
        LiftCount: Int!
    }
`;
const resolvers = {
    Query: {
        LiftCount: () => lifts.length
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
