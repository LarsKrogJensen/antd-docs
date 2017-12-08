import * as React from "react"
import {Layout} from "antd";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import autobind from "autobind-decorator"
import DocsMenu from "pages/docs/DocsMenu";
import toc from "docs/index"
import Markdown from "components/markdown/Markdown";
import withMarkdown from "components/markdown/MarkdownContainer";
import "./docs.css"

const {Content, Sider} = Layout;


class DocsPage extends React.Component {

    render() {
        return (
            <Layout style={{background: '#fff'}}>
                <Sider width={200}
                       style={{background: '#fff', overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}>
                    <DocsMenu selectedKey={this.props.location.pathname}/>
                </Sider>

                <Content style={{marginLeft: 200, paddingTop: 24, paddingLeft: 16, paddingRight: 16, minHeight: 280}}>
                    <Switch>
                        {this.routes()}
                    </Switch>
                    <div className="prev-next-nav">
                        <a className="prev-page" href="">Next:</a>
                        <a className="next-page" href="">Next:</a>
                    </div>
                </Content>
            </Layout>
        )
    }

    @autobind
    routes() {
        const path = "/docs"
        const routes = []
        routes.push(<Redirect key={path} exact path={path} to={this.findFirstChildNode(toc, path)}/>)
        routes.push(...this.createRoutes(toc, path))
        return routes;
    }

    @autobind
    createRoutes(nodes, path) {
        return nodes.map(node => {
            if (node.type === "section") {
                return this.createSectionRoutes(node, path)
            } else if (node.type === "doc") {
                return this.createDocumentRoute(node, path)
            } else {
                return null
            }
        })
    }

    @autobind
    createDocumentRoute(docNode, path) {
        path = path + docNode.path

        return <Route key={path} path={path} component={withMarkdown(Markdown, docNode.md)}/>
    }

    @autobind
    createSectionRoutes(sectionNode, path) {
        path = path + sectionNode.path

        const routes = []
        routes.push(<Redirect key={path} exact path={path} to={this.findFirstChildNode(sectionNode.children, path)}/>)
        routes.push(...this.createRoutes(sectionNode.children, path))
        return routes;
    }

    @autobind
    findFirstChildNode(nodes, path) {
        return path + nodes[0].path;
    }
}

export default withRouter(DocsPage)