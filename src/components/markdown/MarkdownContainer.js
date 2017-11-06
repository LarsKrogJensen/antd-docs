import React from "react"
import {Alert, Spin} from "antd";

export default function withMarkdown(WrappedComponent, source) {

    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                loading: true,
                error: undefined,
                content: undefined
            };
        }

        async loadMarkdown(url) {
            try {
                let resp = await fetch(url);
                let text = await resp.text();

                this.setState({
                    content: text,
                    loading: false,
                    error: undefined
                });
            } catch (e) {
                this.setState({
                    content: undefined,
                    loading: false,
                    error: e.message
                })
            }
        };

        componentDidMount() {
            this.loadMarkdown(source).catch(err => {
                console.log(err)
            })
        }

        render() {
            const {content, loading, error} = this.state;
            if (loading) {
                return <Spin/>
            } else if (error) {
                return (
                    <Alert
                        message="Failed to load content"
                        description={error}
                        type="error"
                    />
                )
            }

            return <WrappedComponent content={content} {...this.props} />;
        }
    };
}