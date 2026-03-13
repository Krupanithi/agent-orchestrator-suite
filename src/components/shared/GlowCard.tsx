import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "primary" | "accent" | "success" | "warning";
  hover?: boolean;
}

const glowMap = {
  primary: "hover:shadow-[0_0_30px_hsl(175_80%_50%/0.15)]",
  accent: "hover:shadow-[0_0_30px_hsl(265_80%_60%/0.15)]",
  success: "hover:shadow-[0_0_30px_hsl(145_70%_50%/0.15)]",
  warning: "hover:shadow-[0_0_30px_hsl(35_90%_55%/0.15)]",
};

const GlowCard = ({ children, className = "", glowColor = "primary", hover = true }: GlowCardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -2 } : undefined}
      className={`rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 p-6 transition-shadow duration-300 ${hover ? glowMap[glowColor] : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlowCard;
