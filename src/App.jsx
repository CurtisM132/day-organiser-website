import React from 'react'

import "./App.css"
import EisenhowerBox from './components/EisenhowerBox/EisenhowerBox';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    render() {
        return (
            <div class="main-display">
                <EisenhowerBox />
            </div>
        );
    }
}