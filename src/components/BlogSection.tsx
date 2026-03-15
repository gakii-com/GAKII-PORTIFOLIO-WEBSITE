import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Optimizing MongoDB Queries with Mongoose Indexes",
    excerpt: "Learn how to dramatically improve read performance with compound indexes and explain plans.",
    date: "Mar 10, 2026",
    readTime: "6 min",
    slug: "#",
  },
  {
    title: "Building Scalable REST APIs with Express.js",
    excerpt: "Architecture patterns for maintainable Node.js backends — controllers, services, and middleware.",
    date: "Feb 22, 2026",
    readTime: "8 min",
    slug: "#",
  },
  {
    title: "React Performance: Avoiding Unnecessary Re-renders",
    excerpt: "Practical guide to useMemo, useCallback, and React.memo for production React apps.",
    date: "Jan 15, 2026",
    readTime: "5 min",
    slug: "#",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Writing about MERN development, MongoDB performance, and modern JavaScript patterns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl bg-card p-6 glow-border group block"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground group-hover:text-accent transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm text-accent font-medium group-hover:gap-2 transition-all duration-200">
                Read More <ArrowRight size={14} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
