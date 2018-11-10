export default function (context) {
    return {
        httpEndpoint: 'https://graphql.datocms.com',
        getAuth: () => 'Bearer 94fb2ed33883640b8c75ba3b7ddf13',
        httpLinkOptions: {
            credentials: 'same-origin'
        }
    }
}