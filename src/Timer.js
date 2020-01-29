import React, { Component } from 'react';
import Stopwatch from './Stopwatch';
import Countdown from './Countdown';
import './App.css';

class Timer extends Component{
    render(){
        return(
            <div className="App">
                <div className="App-title">Timers Demo</div>
                <div className="Timers">
                    <Stopwatch />
                    <Countdown />
                </div>
            </div>
        );
    }
}

export default Timer;
