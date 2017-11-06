import * as React from "react"
import {Icon, Layout, Menu} from "antd";
import {Link, withRouter} from "react-router-dom";

const {Header} = Layout;

class AppHeader extends React.Component {

    render() {
        const selectedKeys = [];

        const pathTokens = this.props.location.pathname.split("/").filter(tok => tok !== "");
        if (pathTokens.length > 0)
            selectedKeys.push(pathTokens[0]);

        return (
            <Header style={{position: 'fixed', width: '100%', display: "flex",}} className="header">
                <div className="logo" style={{flex: 1}}>Logo</div>
                <Menu theme="dark"
                      mode="horizontal"
                      selectedKeys={selectedKeys}
                      defaultSelectedKeys={['docs']}
                      style={{lineHeight: '64px'}}>
                    <Menu.Item key="docs">
                        <Link to="/docs">
                            <Icon type="laptop"/>
                            <span className="nav-text">Documentation</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="explorer">
                        <Link to="/explorer">
                            <Icon type="laptop"/>
                            <span className="nav-text">Explorer</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default withRouter(AppHeader);