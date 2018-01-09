import * as React from "react"
// import QueryConsole from "components/graphiql/QueryConsole";
import { Voyager } from 'graphql-voyager';
// import fetcher from "components/graphiql/fetcher"
import "graphql-voyager/dist/voyager.css"

export default class ExplorerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

   introspectionProvider(query) {
    return fetch('http://localhost:15133/v2018/graphql', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({query: query}),
    }).then(response => response.json());
  }
  render() {

    if (this.state.hasError) {
      return <h4>Something went wrong.</h4>
    }
    return <Voyager introspection={this.introspectionProvider}/>

  }
}