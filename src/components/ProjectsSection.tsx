import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce with cart, payments, and admin dashboard built on MERN.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Real-Time Chat App",
    desc: "Socket.io powered messaging app with rooms, typing indicators, and file sharing.",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management API",
    desc: "RESTful API with JWT auth, role-based access, and Mongoose data modeling.",
    tags: ["Node.js", "Express", "Mongoose", "JWT"],
    github: "#",
    live: "#",
  },
  {
    title: "Analytics Dashboard",
    desc: "Interactive dashboard with real-time charts, filters, and CSV export.",
    tags: ["Next.js", "Recharts", "MongoDB", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of projects that showcase my full-stack development capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl bg-card p-6 glow-border group"
            >
              <h3 className="font-display font-semibold text-xl mb-2 text-foreground group-hover:text-accent transition-colors duration-200">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={p.github}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={p.live}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
