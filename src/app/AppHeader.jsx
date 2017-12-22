import * as React from "react"
import { Icon, Layout, Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import MediaQuery from 'react-responsive';
import logo from './kambi-logo.png'
import "./app.css"

const { Header } = Layout;

// poor mans state management,
let docPath = "/docs/intro/overview"

class AppHeader extends React.Component {

  render() {
    return (
      <Header className="app-header">
        <img className="app-logo" src={logo} alt="logo"/>
        <MediaQuery minWidth={500}>
          {(matches) => {
            if (matches) {
              return <h1 className="app-header-title">Offering API</h1>
            } else {
              return <h1 className="app-header-title"> </h1>
            }
          }}
        </MediaQuery>
        <MediaQuery minWidth={750}>
          {(matches) => {
            if (matches) {
              return this.renderMenu(true)
            } else {
              return this.renderMenu(false)
            }
          }}
        </MediaQuery>
      </Header>
    )
  }

  renderMenu(withTitles) {
    const selectedKeys = [];

    const pathTokens = this.props.location.pathname.split("/").filter(tok => tok !== "");
    if (pathTokens.length > 0) {
      let selectedKey = pathTokens[0];
      selectedKeys.push(selectedKey);
      if (selectedKey === "docs") {
        // not nice but a way to remember last doc path
        docPath = this.props.location.pathname
      }
    }
    return (
      <Menu theme="dark"
            mode="horizontal"
            selectedKeys={selectedKeys}
            defaultSelectedKeys={['docs']}
            className="app-header-menu">
        <Menu.Item key="docs">
          <Link to={docPath}>
            <Icon type="profile" style={{ fontSize: 18 }}/>
            {withTitles && <span style={{ fontSize: 14 }}>Documentation</span>}
          </Link>
        </Menu.Item>
        <Menu.Item key="explorer">
          <Link to="/explorer">
            <Icon type="code-o" style={{ fontSize: 18 }}/>
            {withTitles && <span style={{ fontSize: 14 }}>Explorer</span>}
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(AppHeader);