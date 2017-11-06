import React, {Component} from 'react';
import './App.css';
import {Layout} from "antd";
import DocsPage from "pages/DocsPage";
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import ExplorerPage from "pages/ExplorerPage";
import AppHeader from "./AppHeader";

const {Content} = Layout;

export default class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <AppHeader/>
                    <Content style={{marginTop: 64}}>
                        <Switch>
                            <Redirect exact path="/" to="/docs"/>
                            <Route path="/docs" component={DocsPage}/>
                            <Route path="/explorer" component={ExplorerPage}/>
                        </Switch>
                    </Content>
                </Layout>
            </Router>
        );

    }
}

