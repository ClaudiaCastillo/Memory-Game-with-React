// imports React and its components
import React, {Component} from 'react';

// creates Grid class which extends the React components
class Grid extends Component {
    // constructor takes in props sent from App.js
    constructor(props) {
        super(props);
        // updates state. The state will change for each of the items in App.js's horses array
        this.state = {
            name: this.props.name,
            clicked: this.props.clicked,
            imgUrl: this.props.imgUrl
        }
    };

    componentDidMount() {
        this.setState({
            name: this.props.name,
            clicked: this.props.clicked,
            imgUrl: this.props.imgUrl,
            scoreUpdate: this.props.scoreUpdate
        })
    }

    // renders data to the page (ultimately through index.js)
    render() {

        const {clicked, name, imgUrl} = this.state; // destructuring

        return (
            // creates a 'tile' with a click event that triggers the scoreUpdate function (from App.js)
            <div className="tile" onClick={() => this.props.scoreUpdate(name, clicked)} >

                <img src={imgUrl} alt={name} className="tile-img" />

            </div>
        );
    }
}

// exports Grid class for external use
export default Grid;
