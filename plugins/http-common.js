import axios from 'axios'

export const HTTP = axios.create({
    baseURL: 'https://graphql.datocms.com',
    headers: {
        Authorization: "94fb2ed33883640b8c75ba3b7ddf13",
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
    }
})