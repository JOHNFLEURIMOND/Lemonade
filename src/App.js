import React, { Component } from 'react';
import Icons from './Icons';
import Footer from './Footer';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Icons />
                <Footer />
            </div>
        );
    }
}

export default App;
