// imports React and its components, the stylesheet (App.css), and the app components
import React, {Component} from 'react';
import './css/App.css';
import Header from './Header.js';
import Grid from './Grid.js';
import horses from './horse';


// function to shuffle array of objects
function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// creates a new class, App which extends the React Component
class App extends Component {
    // stores the score and horse options in the state of App
    state = {
        score: 0,
        horses
    };

    // function to update score state
    scoreUpdate = (id,clicked) => {

        const horsesArray = this.state.horses;

        this.setState({horses: horsesArray});
        horsesArray.forEach( (horse) => {
            if (horse.name === id && horse.clicked === false) {
                    horse.clicked = true;
                    this.setState({horses: horsesArray, score: this.state.score + 1})
            } else if (horse.name === id && horse.clicked === true) {
                    horsesArray.forEach( (horse) => {
                        horse.clicked = false;
                    });
                    this.setState({horses: horsesArray, score: 0});
            };
        });
    };


    // renders data to the page (ultimately through index.js)
    render() {
        const shuffledArray = shuffleArray(this.state.horses);
        return (
            <div className="App">
                <Header score={this.state.score}/>

                <div className="grid">
                    {shuffledArray.map((horse) =>
                    <Grid name={horse.name} clicked={horse.clicked} imgUrl={horse.imgUrl} scoreUpdate={this.scoreUpdate} key={horse.key}/>
                    )}
                </div>

            </div>
        );
    }

}

// exports App for external use
export default App;
