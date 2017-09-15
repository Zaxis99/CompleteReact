var React = require('react');

class WeatherForm extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();

        var location = this.location.value;

        if (location.length > 0) {
            this.location.value = ''; // Clear text input
            this.props.onSearch(location);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input 
                            type="text" 
                            ref={(location) => { this.location = location}} 
                            placeholder="Enter city name" 
                        />
                    </div>
                    <div>
                        <button>Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
};

// "inline-source-map" or "eval-source-map" instead.

module.exports = WeatherForm;