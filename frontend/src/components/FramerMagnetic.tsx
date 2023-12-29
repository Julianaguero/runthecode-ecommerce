import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

type MousePositionProps = {
  x: number;
  y: number;
};
type FramerMagneticProps = {
  children: ReactNode,
}

export default function FramerMagnetic({ children }: FramerMagneticProps ) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<MousePositionProps>({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;

    if (ref.current) {
      const { width, height, left, top } = ref.current.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      setPosition({ x, y });
    }
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div 
    onMouseMove={mouseMove} 
    onMouseLeave={mouseLeave} 
    ref={ref}
    animate={{x, y}}
    transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
    >
      {children}
    </motion.div>
  );
}
