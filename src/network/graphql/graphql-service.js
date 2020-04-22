import gql from 'graphql-tag';
import graphQLClient from './graphql-client';

export default {
    async getGifs(responseFields) {
        const response = await graphQLClient.query({
            query: gql `
                query {
                    gifs {
                        ${responseFields}
                    }
                }
            `
        })
        return response;
    },
    async addGif(variables, responseFields){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($title: String!, $imageUrl: String!){
                addGif(title: $title, imageUrl: $imageUrl){
                    ${responseFields}
                }
            }`,
            variables
        })
        return response;
    }
}