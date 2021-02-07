import React, { useState } from "react";
import TrafficLight from "./TrafficLight";
/*
Traffic LightController a stateful component with a name prop and a color state variable, a callback function, next(), that advances to the next color: green -> yellow –> red
*/

function TrafficLightController(props) {

  const [color, setColor] = useState("red");

  const next = (color) => {
 
    const colors = ["green", "yellow", "red"];
    console.log("name:",name);
    console.log("color",color);
    let currColor;

    if (color === colors[0]) {
      currColor = colors[1];
    } else if (color === colors[1]) {
      currColor = colors[2];
    } else {
      currColor = colors[0];
    }
    setColor(currColor);
  };


  return (
    <>
      <TrafficLight name={props.name} color={color} cb={next} />
    </>
  );
}

export default TrafficLightController;
