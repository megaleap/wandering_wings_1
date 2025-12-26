import { motion } from "framer-motion";

const AnimatedHeading = ({ text, className }) => {
  // Split text into words and spaces separately
  const parts = text.split(/(\s+)/);
  let charIndex = 0;

  return (
    <motion.h3
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className={className}
      style={{ whiteSpace: "normal", wordBreak: "normal" }}
    >
      {parts.map((part, partIndex) => {
        const isSpace = part.trim() === "";
        
        // For spaces, render them directly as regular spaces
        if (isSpace) {
          return <span key={partIndex}> </span>;
        }
        
        // For words, wrap in a container that prevents breaking within the word
        const chars = part.split("");
        return (
          <span
            key={partIndex}
            style={{ 
              display: "inline-block",
              whiteSpace: "nowrap"
            }}
          >
            {chars.map((char) => {
              const currentIndex = charIndex++;
              return (
                <motion.span
                  key={currentIndex}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.25, 0.8, 0.25, 1],
                    delay: currentIndex * 0.025,
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </motion.h3>
  );
};

export default AnimatedHeading;
