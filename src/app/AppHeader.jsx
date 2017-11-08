import * as React from "react"
import { Icon, Layout, Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import logo from './kambi-logo.png'
import "./App.css"

const { Header } = Layout;

class AppHeader extends React.Component {

  render() {
    const selectedKeys = [];

    const pathTokens = this.props.location.pathname.split("/").filter(tok => tok !== "");
    if (pathTokens.length > 0)
      selectedKeys.push(pathTokens[0]);

    return (
      <Header style={{ height: 64, width: '100%', display: "flex", alignItems: "center"}} className="header">
        <img className="logo" src={logo} alt="logo"/>
        <h1 style={{ flex: 1, color: "rgba(255, 255, 255, 0.67)", marginLeft: 24 }}>Statstics API</h1>
        <Menu theme="dark"
              mode="horizontal"
              selectedKeys={selectedKeys}
              defaultSelectedKeys={['docs']}
              style={{ lineHeight: '64px' }}>
          <Menu.Item key="docs">
            <Link to="/docs/intro/overview">
              <Icon type="file-text" style={{ fontSize: 12 }}/>
              <span style={{ fontSize: 12 }}>Documentation</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="explorer">
            <Link to="/explorer">
              <Icon type="code-o" style={{ fontSize: 13 }}/>
              <span style={{ fontSize: 12 }}>Explorer</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default withRouter(AppHeader);