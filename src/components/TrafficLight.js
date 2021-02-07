import React from 'react';
import '../styles/trafficlight.css'

/*
TrafficLight a stateless component that renders the trac lightdisplays the message “The color at {name} is {color}”displays a button to go to the next state (via the callback provided as a prop.)
*/

function TrafficLight(props){
let {name, color, cb} = props;
let message = "Button clicked"

  return (
    <div>
      <h2>The color at {name} is <span className={color}>{color}</span></h2>
      <button onClick={()=>cb(color)}>Click</button>
    </div>
  )
}

export default TrafficLight;