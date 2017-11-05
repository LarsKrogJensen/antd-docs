import * as React from "react"
import {Icon, Layout, Menu} from "antd";
import {Link} from "react-router-dom";

const {Header} = Layout;

export default class AppHeader extends React.Component {


    render() {
        return (
            <Header style={{position: 'fixed', width: '100%', display: "flex",}} className="header">
                <div className="logo" style={{flex: 1}}>Logo</div>
                <Menu theme="dark"
                      mode="horizontal"
                      defaultSelectedKeys={['2']}
                      style={{lineHeight: '64px'}}>
                    <Menu.Item key="/docs">
                        <Link to="/docs">
                            <Icon type="laptop"/>
                            <span className="nav-text">Documentation</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/explorer">
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