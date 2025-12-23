import { motion } from "framer-motion";

const AnimatedHeading = ({ text, className }) => {
  const chars = text.split("");

  return (
    <motion.h3
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className={className}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.2,
            ease: [0.25, 0.8, 0.25, 1],
            delay: i * 0.025,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h3>
  );
};

export default AnimatedHeading;
