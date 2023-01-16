import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {enquireScreen} from 'enquire-js';
import Header from './Home/Nav0';
import Footer from './Home/Footer0';
import Home from './Home';

import {
    Nav00DataSource,
    Footer00DataSource,
} from './Home/data.source.js';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
        };
    }

    componentDidMount() {
        // Support for mobile resolutions
        enquireScreen((b) => {
            this.setState({isMobile: !!b});
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Header dataSource={Nav00DataSource} isMobile={this.isMobile}/>
                    <Route exact path="/" component={Home}/>
                    <Footer dataSource={Footer00DataSource} isMobile={this.isMobile}/>
                </div>
            </Router>
        );
  }
}

export default App;