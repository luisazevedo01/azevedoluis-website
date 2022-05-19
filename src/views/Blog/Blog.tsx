import "./Blog.styles.scss";
import { FaRegNewspaper } from "react-icons/fa";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.div
      className="blog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <section className="blog_report">
        <h1>COMMING SOON</h1>
        <FaRegNewspaper size="larger" />
        <p>The blog is on it's way!</p>
      </section>
    </motion.div>
  );
};

export default Blog;
