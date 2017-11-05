import React, {Component} from 'react';
import './App.css';
import {Icon, Layout, Menu} from "antd";

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;


class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Header style={{ position: 'fixed', width: '100%', display: "flex"}} className="header">
                        <div className="logo" style={{flex: 1}}>Logo</div>
                        <Menu theme="dark"
                              mode="horizontal"
                              defaultSelectedKeys={['2']}
                              style={{lineHeight: '64px'}}>
                            <Menu.Item key="1">Documentation</Menu.Item>
                            <Menu.Item key="2">Explore</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{padding: '0 0px', marginTop: 64}}>
                        <Layout style={{padding: '24px 0', background: '#fff'}}>
                            <Sider width={200} style={{background: '#fff', overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}>
                                <Menu mode="inline"
                                      defaultSelectedKeys={['1']}
                                      defaultOpenKeys={['sub1']}
                                      style={{height: '100%'}}>

                                    <SubMenu key="sub1" title={<span><Icon type="user"/>subnav 1</span>}>
                                        <Menu.Item key="1">option1</Menu.Item>
                                        <Menu.Item key="2">option2</Menu.Item>
                                        <Menu.Item key="3">option3</Menu.Item>
                                        <Menu.Item key="4">option4</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>
                                        <Menu.Item key="5">option5</Menu.Item>
                                        <Menu.Item key="6">option6</Menu.Item>
                                        <Menu.Item key="7">option7</Menu.Item>
                                        <Menu.Item key="8">option8</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub3" title={<span><Icon type="notification"/>subnav 3</span>}>
                                        <Menu.Item key="9">option9</Menu.Item>
                                        <Menu.Item key="10">option10</Menu.Item>
                                        <Menu.Item key="11">option11</Menu.Item>
                                        <Menu.Item key="12">option12</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            
                            <Content style={{marginLeft: 200, paddingLeft: 16, paddingRight: 16, minHeight: 280}}>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                                Content<br/>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
