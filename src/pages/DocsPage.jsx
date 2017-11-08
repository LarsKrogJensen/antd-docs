import * as React from "react"
import {Icon, Layout, Menu} from "antd";
import toc from "../docs/index"
import {Link, withRouter} from "react-router-dom";
import withMarkdown from "components/markdown/MarkdownContainer";
import Markdown from "components/markdown/Markdown";
import autobind from "autobind-decorator"

const {SubMenu} = Menu;
const {Content, Sider} = Layout;


class DocsPage extends React.Component {

    render() {

        const MarkdownView = withMarkdown(Markdown, require("docs/intro/Changelog.md"));

        return (
            <Layout style={{background: '#fff'}}>
                <Sider width={200}
                       style={{background: '#fff', overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}>
                    <Menu mode="inline"
                          defaultSelectedKeys={['/docs/intro/overview']}
                          defaultOpenKeys={['/docs/intro']}
                          style={{paddingTop: 24, height: '100%'}}>
                        {this.renderTOC()}
                    </Menu>
                </Sider>

                <Content style={{marginLeft: 200, paddingTop: 24, paddingLeft: 16, paddingRight: 16, minHeight: 280}}>
                    <MarkdownView/>
                </Content>
            </Layout>
        )
    }

    @autobind
    renderTOC() {
        return toc.map(item => this.renderItem(item, "/docs"));
    }

    @autobind
    renderItem(item, path) {
        if (item.type === "section") {
            return this.renderSubMenu(item, path)
        } else if (item.type === "doc") {
            return this.renderMenuItem(item, path)
        } else {
            return null;
        }
    }

    @autobind
    renderSubMenu(section, path) {
        path = path + section.path;
        return (
            <SubMenu key={path} title={<span><Icon type={section.icon}/>{section.title}</span>}>
                {section.children.map(item => this.renderItem(item, path))}
            </SubMenu>
        )
    }

    @autobind
    renderMenuItem(item, path) {
        path = path + item.path;

        return (
            <Menu.Item key={path}>
                <Link to={path}>{item.title}</Link>
            </Menu.Item>
        )
    }
}

export default withRouter(DocsPage)