import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import Blob from "./Blob";
import Effects from "./Effects";
import SimpleBlob from "./SimpleBlob";
import WobblyWall from "./WobblyWall";
export default function CanvasBase() {
    return (
        <Canvas shadows camera={{ position: [0, 0, 10] }}>
            <OrbitControls />
            <Effects />
            <Lights />
            <Blob />
            <SimpleBlob />
            <WobblyWall />
        </Canvas>
    );
}
