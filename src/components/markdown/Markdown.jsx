import * as React from "react"
// import ReactDOM from "react-dom"
import * as PropTypes from 'prop-types';
import markdownIt from 'markdown-it';
import emoji from "markdown-it-emoji"
import deflist from "markdown-it-deflist"
import abbr from "markdown-it-abbr"
import footnote from "markdown-it-footnote"
import imsize from "markdown-it-imsize"
import autobind from "autobind-decorator"
import "./markdown.css"
import {Fade} from "react-reveal";
import {highlight} from "lib/highlight";
import markdownItTocAndAnchor from "markdown-it-toc-and-anchor"

export default class Markdown extends React.Component {

    render() {
        const mdSource = this.props.content;

        // a container is where we will render react components
        let blocks = this.split(mdSource);
        return (
            <Fade>
                <div style={{marginBottom: 32}} onClick={this.handleClick}>{blocks}</div>
            </Fade>
        )
    }

    componentDidMount() {
        // ReactDOM.findDOMNode(this).scrollTop = 0
        window.scrollTo(0, 0)
    }

    @autobind
    handleClick(e) {
        console.log("Click: " + e.target.href)
        // let n = ReactDOM.findDOMNode(this)
        // let node = ReactDOM.findDOMNode(n, "argument");
        const arg = document.getElementById('argument');
        console.log(arg)
        arg.scrollIntoView()

        e.preventDefault()
    }

    @autobind
    split(mdSource) {
        let blocks = mdSource.split(":::");

        return blocks.map((block, index) => {
            let infoParts = block.split("\n");
            if (infoParts.length > 0 && infoParts[0].indexOf("explorer") > -1) {
                return this.renderExplorer(infoParts.slice(1).join("\n"), index);
            } else if (infoParts.length > 0 && infoParts[0].indexOf("warning") > -1) {
                return this.renderWarning(infoParts.slice(1).join("\n"), index);
            } else if (infoParts.length > 0 && infoParts[0].indexOf("info") > -1) {
                return this.renderInfo(infoParts.slice(1).join("\n"), index);
            } else if (infoParts.length > 0 && infoParts[0].indexOf("shell") > -1) {
                return this.renderShell(infoParts.slice(1).join("\n"), index);
            } else {
                return this.renderMarkdown(block, index);
            }
        });
    }


    @autobind
    renderMarkdown(source, key, additionalClass) {
        const md = markdownIt({
            highlight: highlight
        }).use(emoji)
            .use(abbr)
            .use(deflist)
            .use(footnote)
            .use(imsize)
            .use(markdownItTocAndAnchor, {
                // ...options
                anchorLink: true,
            })

        let html = md.render(source);

        let classes = "github-markdown__markdown-body__97ba8"
        if (additionalClass) {
            classes += " " + additionalClass
        }

        return (
            <div key={key}
                 className={classes}
                 dangerouslySetInnerHTML={{__html: html}}
            />)
    }

    @autobind
    renderExplorer(source, key) {
        return (
            <div key={key} style={{paddingTop: 16, paddingBottom: 16}}>
                Embedded explorer not available.
            </div>
        )
    }

    @autobind
    renderWarning(source, key) {
        return (
            <div key={key} className="alert alert-error">
                {this.renderMarkdown(source, key)}
            </div>
        )
    }

    @autobind
    renderInfo(source, key) {
        return (
            <div key={key} className="alert alert-info">
                {this.renderMarkdown(source, key)}
            </div>
        )
    }

    @autobind
    renderShell(source, key) {
        return (
            <div key={key} className="shell">
                {this.renderMarkdown(source, key, "shell")}
            </div>
        )
    }
}

Markdown.propTypes = {
    content: PropTypes.string.isRequired
};