// components/AnimatedItem.js
import { motion } from "framer-motion";

const AnimatedItem = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mb-6"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedItem;
