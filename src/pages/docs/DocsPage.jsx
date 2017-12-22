import * as React from "react"
import { Layout } from "antd";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import autobind from "autobind-decorator"
import DocsMenu from "pages/docs/DocsMenu";
import toc from "docs/index"
import Markdown from "components/markdown/Markdown";
import withMarkdown from "components/markdown/MarkdownContainer";
import "./docs.css"

const { Content, Sider } = Layout;

class DocsPage extends React.Component {

  render() {
    let pathname = this.props.location.pathname;

    // In order to handle next/prev flatten all leafs and locate current.
    const docs = []
    this.flattenDocs("/docs", toc, docs)

    const index = docs.findIndex(value => value.path === pathname);
    const prev = index > 0 ? docs[index - 1] : undefined;
    const next = index < docs.length - 1 ? docs[index + 1] : undefined;

    return (
      <Layout className="docs-page">
        <Sider width={200} className="docs-sider">
          <DocsMenu selectedKey={pathname}/>
        </Sider>

        <Content className="docs-content">
          <div style={{ flex: 1 }}>
            <Switch>
              {this.routes()}
            </Switch>
          </div>
          <div className="prev-next-nav">
            {prev && <a className="prev-page" href={"#" + prev.path}>{prev.title}</a>}
            {next && <a className="next-page" href={"#" + next.path}>{next.title}</a>}
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

  @autobind
  flattenDocs(path, nodes, collect) {
    if (nodes) {
      for (let node of nodes) {
        if (node.type === "doc") {
          collect.push({
            path: path + node.path,
            title: node.title
          })
        }

        this.flattenDocs(path + node.path, node.children, collect)
      }
    }
  }
}

export default withRouter(DocsPage)