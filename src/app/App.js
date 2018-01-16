import React, { Component } from 'react';
import './app.css';
import { Layout } from "antd";
import DocsPage from "pages/docs/DocsPage";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import AppHeader from "./AppHeader";
import {SwaggerPage} from "pages/swagger/SwaggerPage";
import {PushPage} from "pages/PushPage";

const { Content } = Layout;

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <AppHeader/>
          <Content className="app-body">
            <div className="app-content">
              <Switch>
                <Redirect exact path="/" to="/docs"/>
                <Route path="/docs" component={DocsPage}/>
                <Route path="/explorer" component={SwaggerPage}/>
                <Route path="/push" component={PushPage}/>
              </Switch>
            </div>
          </Content>
        </div>
      </Router>
    );

  }
}

