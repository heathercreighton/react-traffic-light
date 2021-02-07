import React from "react";
import "../styles/style.css";
import TrafficLightController from "./TrafficLightController";

export default function App() {
  return (
    <div>
      <TrafficLightController name="First" />
      <TrafficLightController name="Second" />
      <TrafficLightController name="Third" />
    </div>
  );
}
