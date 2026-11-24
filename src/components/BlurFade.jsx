import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function BlurFade({ children, className, delay = 0, duration = 0.4, yOffset = 6, inView = false, blur = "6px" }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: "-50px" });
  const show = !inView || seen;
  return (
    <motion.div
      ref={ref}
      initial={{ y: -yOffset, opacity: 0, filter: `blur(${blur})` }}
      animate={show ? { y: 0, opacity: 1, filter: "blur(0px)" } : undefined}
      transition={{ delay: 0.04 + delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
