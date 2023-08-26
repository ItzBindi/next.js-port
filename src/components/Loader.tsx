import React from "react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
function Loader({isLoading, setIsLoading} : any ) {
    useEffect(() => {
        setTimeout(() => {
            setIsLoading();
        }, 1900)
    }, [setIsLoading])
  return (
    <AnimatePresence>
        {
            isLoading && (

                
                <motion.div className="loader"
                exit={{scale: 0}}
    key="motiondivleave"
    transition={{
        duration: 0.45,
        ease: "easeInOut",
    }}
    >

    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <motion.path
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 1,
        }} 
        d="M20 100 L20 80 L60 80 L60 60 L20 60 L20 0 L80 0 L80 20 L40 20 L40 40 L80 40 L80 100 Z"
          stroke-linejoin="round"
          stroke="#808600"
          stroke-width="0"
          stroke-linecap="round"
          fill="#9d00ff" 
          transform="translate(0,0)"
          />
      </g>
    </svg>
          </motion.div>
          )
      }
          </AnimatePresence>
  );
}

export default Loader;
