import { createContext, useContext, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "../lib/utils";

const Ctx = createContext(null);
const BASE = 40, ICON = 20, SPRING = { mass: 0.1, stiffness: 150, damping: 12 };

export function Dock({ className, children, magnification = 60, distance = 100 }) {
  const mouseX = useMotionValue(Infinity);
  return (
    <Ctx.Provider value={{ mouseX, magnification, distance }}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn("mx-auto flex h-full w-max items-end justify-center overflow-visible rounded-full border", className)}
      >
        {children}
      </motion.div>
    </Ctx.Provider>
  );
}

export function DockIcon({ className, children }) {
  const ref = useRef(null);
  const { mouseX, magnification, distance } = useContext(Ctx);
  const d = useTransform(mouseX, (v) => {
    const b = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return v - b.x - b.width / 2;
  });
  const size = useSpring(useTransform(d, [-distance, 0, distance], [BASE, magnification, BASE]), SPRING);
  const icon = useSpring(useTransform(d, [-distance, 0, distance], [ICON, magnification / 2, ICON]), SPRING);
  return (
    <motion.div ref={ref} style={{ width: size, height: size }} className={cn("relative flex aspect-square shrink-0 items-center justify-center rounded-full", className)}>
      <motion.div style={{ width: icon, height: icon }} className="flex items-center justify-center">{children}</motion.div>
    </motion.div>
  );
}
