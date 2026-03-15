import { motion } from "framer-motion";
import { Code2, Database, Server, Layout } from "lucide-react";

const highlights = [
  { icon: Layout, label: "Frontend", desc: "React, Next.js, Tailwind CSS" },
  { icon: Server, label: "Backend", desc: "Node.js, Express.js, REST APIs" },
  { icon: Database, label: "Database", desc: "MongoDB, Mongoose, Redis" },
  { icon: Code2, label: "DevOps", desc: "Docker, CI/CD, Vercel" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            About Me

I am a full-stack software developer with a strong background in modern web application development and information technology. I hold a Bachelor of Science in Information Science (Information Technology) from Garissa University and a Full Stack (MERN) Development certificate from Pozer Learn Project.

I specialize in designing and developing scalable web applications, RESTful APIs, and database-driven systems using modern development tools and frameworks. My experience includes building full-stack applications, managing databases, implementing secure authentication systems, and developing responsive user interfaces.

I have participated in several collaborative hackathons and developed multiple personal software projects, which strengthened my skills in problem solving, rapid prototyping, and teamwork in real-world development environments.

I am particularly interested in developing secure, efficient, and scalable digital solutions that improve institutional systems and service delivery. I am continuously learning new technologies and best practices in software development, system integration, and application security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl bg-card p-6 glow-border text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <item.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
