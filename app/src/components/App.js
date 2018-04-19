import React, {Component} from 'react';
import {Button} from "./Button";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Button onClick={() => console.log('you dare!!')}/>
            </div>
        );
    }
}

export default App;
