import React from "react";
// import PropTypes from 'prop-types/prop-types';
import GraphiQL from "graphiql"
import {Icon} from "antd"
import "graphiql/graphiql.css"
import "./full-size.css"
import fetcher from "./fetcher"


export default class QueryConsole extends React.Component {

    render() {
        let style = {
            height: 'calc(100vh - 64px)',
            margin: 0,
            width: '100%',
            overflow: 'hidden',
        };

        return (
            <div style={style}>
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