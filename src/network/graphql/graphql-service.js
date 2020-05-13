import gql from 'graphql-tag';
import graphQLClient from './graphql-client';

export default {

    //############## GIF related #################

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
    },

    async deleteGif(variables, responseFields){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($_id: String!){
                deleteGif(_id: $_id){
                    ${responseFields}
                }
            }`,
            variables
        })
        return response;
    },

    //############## User related #################

    async addUser(variables){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($username: String!, $email: String!, $userType: String!, $password: String!){
                addUser(username: $username, email: $email, userType: $userType, password: $password)
            }`,
            variables
        })
        return response;
    },

    async login(variables){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($email: String!, $password: String!){
                login(email: $email, password: $password)
            }`,
            variables
        })
        return response;
    },

    async currentUser(responseFields = "_id username email userType"){
        const response = await graphQLClient.query({
            query: gql `
                query {
                    currentUser {
                        ${responseFields}
                    }
                }
            `
        })
        return response;
    },

    async editUser(variables, responseFields){
        const response = await graphQLClient.mutate({
            mutation: gql `
            mutation($_id: String!, $username: String!, $email: String!, $password: String!){
               editUser(_id: $_id, username: $username, email: $email, password: $password){
                    ${responseFields}
               }
           }`,
           variables
        })
        return response;
    },
}