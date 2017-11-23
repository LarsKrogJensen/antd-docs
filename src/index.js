import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "graphql-voyager/dist/voyager.css"
import App from 'app/App';
import registerServiceWorker from './registerServiceWorker';

//const INTROSPECTION_URL = 'https://gist.githubusercontent.com/RomanGotsiy/0f472e61cc50b497ec48c24b3cb283f1/raw/a544b330f773dcdefeb16364451f7b469800dc5d/swapi-introspection.json';
//
// class Test extends React.Component {
//
//     render() {
//         return (
//             <Voyager introspection={this.introspectionProvider}
//                      workerURI={process.env.PUBLIC_URL + '/voyager.worker.js'}
//                      displayOptions={{skipRelay: false}}/>
//         )
//     }
//
//     introspectionProvider(query) {
//         return fetch(INTROSPECTION_URL, {
//             method: 'get',
//         }).then(response => response.json());
//     }
// }
//
// ReactDOM.render(<Test/>, document.getElementById('root'));
// import {Voyager} from "graphql-voyager"


// function introspectionProvider(query) {
//   return fetch(window.location.origin + '/graphql', {
//     method: 'post',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({query: query}),
//   }).then(response => response.json());
// }

// ReactDOM.render(<Voyager introspection={introspectionProvider} />, document.getElementById('voyager'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
