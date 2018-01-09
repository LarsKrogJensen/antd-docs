import React from "react";
import PropTypes from "prop-types"
import GraphiQL from "graphiql";
import "graphiql/graphiql.css"
import "./embedded-console.css"
import fetcher from "./fetcher"
import {Affix, Button} from "antd";
// import {Button} from "antd";

// Avoid embedded console to read from local storage as it might look an weird
const NoOpStorage = {
  setItem: (item) => {},
  getItem: (item) => undefined,
  removeItem: (item) => {}
}


export default class EmbeddedQueryConsole extends React.Component {
    render() {
        return (
            <div className="embedded bordered graphiql">
                {/*<Button type="primary">execute</Button>*/}
                <Affix>
                    <Button type="primary">
                        execute
                    </Button>
                </Affix>

                
                <GraphiQL fetcher={fetcher}
                          embedded
                          storage={NoOpStorage}
                          query={this.props.query}>

                </GraphiQL>
            </div>
        );
    }
}

EmbeddedQueryConsole.propTypes = {
    query: PropTypes.string
};