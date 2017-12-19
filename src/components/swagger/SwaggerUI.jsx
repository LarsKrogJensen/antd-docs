import * as React from "react"
import PropTypes from 'prop-types';

import SwaggerUi, {presets} from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';
import './swagger.css'

export class SwaggerUI extends React.Component {

    componentDidMount() {
        SwaggerUi({
            dom_id: '#swaggerContainer',
            url: this.props.url,
            spec: this.props.spec,
            presets: [presets.apis]
        });
    }

    render() {
        return (
            <div id="swaggerContainer" className="swagger-wrapper"/>
        );
    }
}

SwaggerUI.propTypes = {
    url: PropTypes.string,
    spec: PropTypes.object
};

SwaggerUI.defaultProps = {
    url: `http://petstore.swagger.io/v2/swagger.json`
};

