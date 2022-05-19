import "./Blog.styles.scss";
import { FaRegNewspaper } from "react-icons/fa";
import { motion } from "framer-motion";
import { ReactComponent as BlogIllustration } from "../../assets/gg.svg";

const Blog = () => {
  return (
    <div>
      <motion.div
        className="blog"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <section className="blog_report">
          <h1>COMMING SOON</h1>
          <BlogIllustration />
          <p>The blog is on it's way!</p>
        </section>
      </motion.div>
    </div>
  );
};

export default Blog;
