import React from "react";
import GraphiQL from "graphiql"
import {Icon} from "antd"
import "graphiql/graphiql.css"
import "./QueryConsole.css"
import fetcher from "./fetcher"


export default class QueryConsole extends React.Component {

    render() {
        return (
            <div className="console">
                <GraphiQL fetcher={fetcher}>
                    <GraphiQL.Logo>
                        <div id="logo">
                            <Icon type="code-o"/>
                            <div style={{display: "inline", paddingLeft: "16px"}}>API Explorer</div>
                        </div>
                    </GraphiQL.Logo>
                </GraphiQL>
            </div>
        );
    }
}

QueryConsole.propTypes = {
};