import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Thank you for checking this Application out!</p>
                    <a
                        className="App-link"
                        href="https://johncfleurimond.com "
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        See more here!
                    </a>
                </footer>
            </div>
        );
    }
}
