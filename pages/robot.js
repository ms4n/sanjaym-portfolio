import { motion } from "framer-motion";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ObritControls } from "@react-three/drei";
import { Robot } from "../components/Robot";

const robot = () => {
  return (
    <div className="h-screen">
      <Canvas className="">
        <Suspense fallback={null}>
          <Robot rotation={[-Math.PI / 2, -5, 1]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default robot;
