import { ApolloServer } from "apollo-server";
import { CryptoApi } from "./dataSources/CryptoApi.js";
import { typeDefs } from "./schema.js";

const resolvers = {
    Query: {
        hello: () => {
            return "Hello World!"
        },
        cryptoAssets: async(_,__,{dataSources}) => {
            const { data } = await dataSources.cryptoApi.getCryptoAssets()
            return data;
        },
        cryptoAsset: async(_,{ type },{dataSources}) => {
            const { data } = await dataSources.cryptoApi.getCryptoAsset(type)
            return data;
        },
        cryptoHistory: async(_,{ type, interval },{dataSources}) => {
            const { data } = await dataSources.cryptoApi.getCryptoHistory(type,interval)
            return data;
        },
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        cryptoApi: new CryptoApi()
    }),
});

server.listen().then(({ url }) => {
    console.log("Server is ready at" + url);
})