import "./App.css";
import React, { Component } from "react";
import {
  TravelerEffect,
  MosaicGroundEffect,
  OceanEffect,
  RainEffect,
  SeaWaveEffect,
  SnowFallEffect,
  SnowFallSlowEffect,
  SpacingEffect,
  CloudWaveEffect,
} from "react-background-animation";

export default function App() {
  return (
    <div className="App">
      <React.Fragment>
        <TravelerEffect /> <MosaicGroundEffect /> <OceanEffect /> <RainEffect />
        <SeaWaveEffect /> <SnowFallEffect /> <SnowFallSlowEffect />
        <SpacingEffect />
        <CloudWaveEffect />
      </React.Fragment>
      <header className="App-header">"Hi from React!"</header>
    </div>
  );
}
