import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen bg-main-color flex justify-center items-center m-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1,
            },
          },
        }}
      >
        <h1 className="font-semibold text-8xl text-gray-800">Sanjay M</h1>
      </motion.div>
    </div>
  );
}
