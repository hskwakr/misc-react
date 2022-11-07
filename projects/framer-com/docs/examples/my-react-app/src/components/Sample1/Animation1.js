import { motion } from "framer-motion";

export const Animation1 = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 10 }}
  >
    Hello
  </motion.div>
);
