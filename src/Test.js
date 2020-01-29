import React, { useState } from 'react';
import './App.css';

function Test(){
    const [counter, setCounter] = useState(0); // counter: variable, setCounter:function
    function counterInc(){
       setCounter(counter + 1);
    }
    return(
        <div>
            <span class="text">Click on the button to increment counter : </span><button class="button_style" onClick ={counterInc}>{counter}</button>
        </div>

    );

}

export default Test;