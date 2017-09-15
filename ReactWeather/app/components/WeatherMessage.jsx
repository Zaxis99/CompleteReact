var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <p>Its {temp} degrees in {location}</p>
    );
}


module.exports = WeatherMessage;