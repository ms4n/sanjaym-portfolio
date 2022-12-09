import { motion } from "framer-motion";
import { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Robot } from "../components/Robot";

const CameraController = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.enableZoom = false;
    controls.enableRotate = true;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

export default function Home() {
  const testing = true;
  return (
    <div className=" bg-main-color ">
      <div className="px-10 py-8">
        <p className="text-lg font-playfair">Sanjay M</p>
        <p className="text-xs font-inter tracking-tight opacity-50 ">
          Bengaluru, India
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-32">
        <div>
          <p className="font-playfair text-6xl">a developer with a</p>
          <p className="font-playfair text-6xl">love for design.</p>
          <p className="font-satoshir text-xl mt-4">
            + dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className="h-screen ml-10">
            <Canvas className="">
              <axesHelper visible={testing} args={[7]} />
              <CameraController />
              <Suspense fallback={null}>
                <Robot />
              </Suspense>
            </Canvas>
          </div>
        </div>

        <div className="">
          <p className="font-playfair text-6xl">a developer with a</p>
          <p className="font-playfair text-6xl">love for design.</p>
          <p className="font-satoshir text-xl mt-4">
            + dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
      </div>
    </div>
  );
}
