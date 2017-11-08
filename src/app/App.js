import React, {Component} from 'react';
import './App.css';
import {Layout} from "antd";
import DocsPage from "pages/docs/DocsPage";
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import ExplorerPage from "pages/explorer/ExplorerPage";
import AppHeader from "./AppHeader";

const {Content} = Layout;

export default class App extends Component {
    render() {
        return (
            <Router>
                <div style={{height: "100vh", display: "flex", flexDirection: "column"}}>
                    <AppHeader/>
                    <Content style={{display: "flex", flex: 1, minHeight: 0}}>
                        <div style={{flex: 1, overflow: "auto"}}>
                            <Switch>
                                <Redirect exact path="/" to="/docs"/>
                                <Route path="/docs" component={DocsPage}/>
                                <Route path="/explorer" component={ExplorerPage}/>
                            </Switch>
                        </div>
                    </Content>
                </div>
            </Router>
        );

    }
}

