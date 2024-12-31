"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Components
import Stairs from "./Stairs";

const StairsTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        // from chatgpt solution : 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}

        transition={{ duration: 0.4 }}
        className="h-screen w-screen fixed top-0 left-0 
        right-0 pointer-events-none z-40 flex">
        <Stairs />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairsTransition;
