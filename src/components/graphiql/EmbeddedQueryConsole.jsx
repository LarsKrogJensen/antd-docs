import React from "react";
import PropTypes from "prop-types"
import GraphiQL from "graphiql";
import "graphiql/graphiql.css"
import "./embedded.css"
import fetcher from "./fetcher"

export default class EmbeddedQueryConsole extends React.Component {
    render() {
        return (
            <div className="embedded bordered graphiql">
                <GraphiQL fetcher={fetcher}
                          embedded
                          query={this.props.query}>
                </GraphiQL>
            </div>
        );
    }
}

EmbeddedQueryConsole.propTypes = {
    query: PropTypes.string
};