import React, { Component } from 'react';
const iconStyle = {
    height: '81%',
    width: '100%',
};

export default class Icons extends Component {
    render() {
        return (
            <div className="container">
                <div className="banner">
                    <div className="slogan">
                        <span>homemade with fresh ingredients</span>
                    </div>
                </div>
                <div className="icon">
                    fresh lemons
                    <img
                        alt="ImageOf Lemons"
                        style={iconStyle}
                        src={require('./lemon.png')}
                    />
                </div>
                <div className="icon">
                    real sugar
                    <img
                        alt="ImageOf Lemons"
                        style={iconStyle}
                        src={require('./lemon.png')}
                    />
                </div>
                <div className="icon">
                    John's recipe
                    <img
                        alt="ImageOf Lemons"
                        style={iconStyle}
                        src={require('./lemon.png')}
                    />
                </div>
            </div>
        );
    }
}
