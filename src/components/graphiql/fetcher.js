import fetch from 'isomorphic-fetch';

export default async function graphQuery(token, queryParams) {
    let options = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: queryParams,
    };

    let response = await fetch(baseUrl() + '/graphql', options);
    if (response.ok)
        return response.json();

    throw new Error(response.statusText, response.status);
}

function baseUrl() {
    const win = window;

    if (process.env.NODE_ENV === `development`) {
        return "http://localhost:8080";
    }
    else {
        return win.location.origin;
    }
}