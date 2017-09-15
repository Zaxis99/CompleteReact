var React = require('react');
var ReactDOM = require('react-dom');
import {BrowserRouter as Router, Route, HashRouter, Link} from 'react-router-dom' ;

// Our Components
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
    <HashRouter> 
        <div>
            <Route path="/" component={Main} />
            <Route exact path="/" component={Weather} />
            <Route path="/about" component={About} />
            <Route path="/examples" component={Examples} />     
        </div>
    </HashRouter>,
    document.getElementById("app")
);