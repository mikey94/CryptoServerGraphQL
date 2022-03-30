import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query {
        hello: String,
        cryptoAssets: [cryptoAssetObj!],
        cryptoAsset(type: String!): cryptoAssetObj!,
        cryptoHistory(type: String!,interval: String!): [cryptoHistoryObj!]
    },
    type cryptoAssetObj {
        symbol: String!,
        name: String!
    },
    type cryptoHistoryObj {
        priceUsd: String!,
        time: String!
    }
`;