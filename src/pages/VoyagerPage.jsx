import * as React from "react"
import {Voyager} from 'graphql-voyager';
import "./voyager-overides.css"

// import fetcher from "components/graphiql/fetcher"

function introspectionProvider(query) {
    return fetch('http://localhost:15133/v2018/graphql', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query: query}),
    }).then(response => response.json())
        .catch(error => console.log("Error fetching: " + error))
}

export default class VoyagerPage extends React.Component {

    render() {
        return (
            <div className="voyager">
                <Voyager introspection={introspectionProvider}
                         hideDocs={false}
                         workerURI={process.env.PUBLIC_URL + '/voyager.worker.js'}
                />
            </div>
        )
    }
}