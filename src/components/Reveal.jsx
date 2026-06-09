import { motion, useReducedMotion } from "framer-motion";
import { classNames } from "../lib/classNames";

export default function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.18, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.55, delay: delay / 1000, ease: "easeOut" }}
      className={classNames(
        "motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
