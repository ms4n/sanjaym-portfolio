import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen overflow-x-hidden bg-main-color flex justify-center items-center flex-col m-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1.5,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
      >
        <h1 className="font-playfair tracking-tight font-regular text-2xl lg:text-6xl text-gray-800">
          Sanjay M
        </h1>
      </motion.div>
    </div>
  );
}
