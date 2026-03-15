import { motion, easeOut, easeInOut } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/image.jpg";
import profileImage from "@/assets/profile.jpg"; // Add your profile image

const HeroSection = () => {
  // Text animation variants for horizontal movement
  const textVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  // Continuous horizontal animation for the description text
  const floatingTextVariants = {
    animate: {
      x: [0, 20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  // Image animation variants
  const imageVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: 30 },
    animate: { 
      opacity: 1, 
      scale: 1,
      rotate: 30,
      transition: {
        opacity: { duration: 0.8, ease: easeOut },
        scale: { duration: 0.8, ease: easeOut },
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image + neutral overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="text-accent font-medium mb-4 tracking-widest uppercase text-sm"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground"
            >
              Glory <span className="gradient-text">Gakii</span>
            </motion.h1>

            {/* Animated description with horizontal movement */}
            <motion.div
              variants={floatingTextVariants}
              animate="animate"
              className="overflow-hidden"
            >
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 font-body">
                <motion.span
                  animate={{ 
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-block"
                >
                  Full Stack <span className="text-accent font-semibold">MERN Developer</span>
                </motion.span>{" "}
                <motion.span
                  animate={{ 
                    x: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: easeInOut,
                    delay: 0.5
                  }}
                  className="inline-block"
                >
                  building performant, scalable web applications
                </motion.span>{" "}
                <motion.span
                  animate={{ 
                    x: [0, 15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="inline-block"
                >
                  with MongoDB, Express, React & Node.js.
                </motion.span>
              </p>
            </motion.div>

            <motion.div 
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-[var(--glow-primary)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground hover:border-accent hover:text-accent transition-all duration-200"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div 
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6 }}
              className="flex justify-center lg:justify-start gap-6"
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  <Icon size={22} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="initial"
            animate="animate"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-80 lg:h-80">
              {/* Static gradient border with pulse effect only */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-primary to-accent"
                animate={{
                  scale: [1, 1.02, 1], // Only scale animation, no rotation
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  padding: "3px",
                  borderRadius: "9999px",
                }}
              >
                <div className="w-full h-full bg-background rounded-full overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Glory Gakii"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll down arrow */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors animate-float"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;