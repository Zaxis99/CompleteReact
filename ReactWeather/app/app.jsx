var React = require('react');
var ReactDOM = require('react-dom');
var {Route, BrowserRouter, IndexRoute, hashHistory} = require('react-router-dom');
var Main = require('Main');

ReactDOM.render(
    <BrowserRouter history={hashHistory}>
        <Route path="/" component={Main}>

        </Route>
    </BrowserRouter>,
    document.getElementById('app')
)