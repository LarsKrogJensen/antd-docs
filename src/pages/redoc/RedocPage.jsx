import * as React from "react"
// import ReactDOM from 'react-dom';
import { RedocStandalone } from 'redoc';

export class RedocPage extends React.Component {


    render() {
        return (
            <div>
                <RedocStandalone specUrl="http://rebilly.github.io/ReDoc/swagger.yaml" />
            </div>
        );
    }
}