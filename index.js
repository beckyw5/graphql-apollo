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
    liftCount: Int!
    allLifts: [Lift!]!
    getLiftById(id: ID!): Lift!
  }
`;
// TODO: Yell at Eve if she doesn't explain what parent is
const resolvers = {
    Query: {
        liftCount: () => lifts.length,
        allLifts: () => lifts,
        getLiftById: (parent, args) =>
            lifts.find(lift => args.id === lift.id)
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server
    .listen()
    .then(({ url }) =>
        console.log(`Server running at ${url}`)
    );