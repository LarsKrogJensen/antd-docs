import * as React from "react"
import PropTypes from "prop-types"
import autobind from "autobind-decorator"
import {Link} from "react-router-dom";
import {Icon, Menu} from "antd";
import toc from "docs"

const SubMenu = Menu.SubMenu;

// poor mans state management
let stateOpenKeys = undefined

export default class DocsMenu extends React.Component {

    render() {
        if (!stateOpenKeys)
            stateOpenKeys = this.findAllRootSectionPaths()

        return (
            <Menu mode="inline"
                  onOpenChange={(openKeys => stateOpenKeys = openKeys)}   // save state
                  selectedKeys={[this.props.selectedKey]}
                  defaultOpenKeys={stateOpenKeys}
                  style={{paddingTop: 24, height: '100%'}}>
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

    @autobind
    findAllRootSectionPaths() {
        return toc.filter(node => node.type === "section").map(node => "/docs" + node.path)
    }
}

DocsMenu.PropTypes = {
    selectedKey: PropTypes.string
}