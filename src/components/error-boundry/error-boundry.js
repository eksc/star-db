import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import './error-boundry.css';

import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {
    state = {
        hasError: false
    };

    componentDidCatch(error, info) {
        this.setState({hasError:true});
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return this.props.children;
    }
}