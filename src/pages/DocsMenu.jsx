import * as React from "react"
import PropTypes from "prop-types"
import autobind from "autobind-decorator"
import { Link } from "react-router-dom";
import { Icon, Menu } from "antd";
import toc from "docs"

const SubMenu = Menu.SubMenu;

export default class DocsMenu extends React.Component {

  render() {
    const openKey = this.props.selectedKey.split("/")
    openKey.splice(openKey.length - 1)
    const skey = openKey.join("/");
    console.log("Open sub key: " + skey + ", open key: " + this.props.selectedKey)
    return (
      <Menu mode="inline"
            defaultSelectedKeys={[this.props.selectedKey]}
            defaultOpenKeys={[skey]}
            style={{ paddingTop: 24, height: '100%' }}>
        {this.renderTOC()}
      </Menu>)
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

DocsMenu.PropTypes = {
  selectedKey: PropTypes.string
}