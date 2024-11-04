import { motion } from "framer-motion";
import { useState } from "react";

function Loading(setLoading, setData) {
  const [rotateDiv, setRotateDiv] = useState(false);

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  };

  const handleAnimationComplete = () => {
    setRotateDiv(true);
  };

  return (
    <div className=" bg-white absolute flex flex-col justify-between p-14 items-center  w-screen h-screen">
      <h1 className="text-text text-4xl overflow-clip">
        Generating Your Request...
      </h1>
      <motion.div
        className="mt-24 absolute bg-white px-10 pb-14 flex justify-center"
        animate={rotateDiv ? { rotate: 360 } : {}}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <svg
          width="90"
          height="225"
          viewBox="0 0 180 225"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M118.5 327.5C101.333 326 64.0001 319.7 52.0001 306.5C37.0001 290 46.0001 266.5 49.0001 259C51.4001 253 74.3333 186.833 85.4999 154.5C92.8333 133.167 107.8 82.5 109 50.5C110.5 10.5 81.4999 6.50001 50.4999 6.00001 C19.4999 5.50001 3.99993 22.5 5.99993 42.5C7.99993 62.5 13 85.5 73.5 170C134 254.5 143 265 153.5 299.5C156.667 306 157.8 320.7 137 327.5C116.2 334.3 113.755 316 110.5 306.5C104.333 288.5 97.3001 240.9 118.5 194.5L169.5 42.5C173.167 33 168.9 12.4 122.5 6.00001C107.333 6.00001 71.6999 6.00001 50.4999 6.00001"
            stroke="#FFA947"
            strokeWidth="10"
            strokeLinecap="square"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 2,
              ease: "easeInOut",
              onComplete: handleAnimationComplete,
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

export default Loading;
