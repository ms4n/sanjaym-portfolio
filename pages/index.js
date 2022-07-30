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
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
      >
        <h1 className="font-semibold text-2xl lg:text-8xl text-gray-800">
          Sanjay M
        </h1>
      </motion.div>

      <div className="h-14 md:h-20 text-sm md:text-normal font-mono flex justify-center items-center fixed bottom-0 w-screen bg-gray-800 text-gray-100">
        <div className="relative">
          <div className="py-12 animate-marquee whitespace-nowrap">
            <span className="mx-1">The page is under design maintenance *</span>
            <span className="mx-1">The page is under design maintenance *</span>
            <span className="mx-1">The page is under design maintenance *</span>
            <span className="mx-1">The page is under design maintenance *</span>
            <span className="mx-1">The page is under design maintenance *</span>
          </div>

          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <span className="mx-1">The page is under design maintenance *</span>
            <span className="mx-1">The page is under design maintenance *</span>
            <span className="mx-1">The page is under design maintenance *</span>
            <span className="mx-1">The page is under design maintenance *</span>
            <span className="mx-1">The page is under design maintenance *</span>
          </div>
        </div>
      </div>
    </div>
  );
}
