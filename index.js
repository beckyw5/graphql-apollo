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
  
  type Trail {
    id: ID!
    name: String!
    status: TrailStatus
    difficulty: String!
    groomed: Boolean!
  } 
    
  enum TrailStatus {
    OPEN
    CLOSED
  }
  
  type Query {
    allLifts(status: LiftStatus): [Lift!]!
    Lift(id: ID!): Lift!
    liftCount(status: LiftStatus!): Int!
    allTrails: [Trail!]!
    Trail(id: ID!): Trail!
    trailCount(status: TrailStatus!): Int!
  }
`;

const resolvers = {
    Query: {
        liftCount: () => lifts.length,
        allLifts: () => lifts,
        Lift: (parent, args) =>
            lifts.find(lift => args.id === lift.id),
        allTrails: () => trails,
        trailCount: (parent, args) =>
            {
                if (!args.status) {
                    return trails.length;
                } else {
                    return trails.filter( trail =>
                        trail.status === args.status ).length;
                }
            },
        Trail: (parent, args) =>
            trails.find(trail => args.id === trail.id),
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