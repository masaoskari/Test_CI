import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import style from "./Example.module.scss";
import ExampleText from "./ExampleText";

const Example = () => {
  return (
    <Canvas className={style.canvas}>
      <ExampleText />
      <OrbitControls dampingFactor={0.5} />
    </Canvas>
  );
};

export default Example;
