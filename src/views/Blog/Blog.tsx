import "./Blog.styles.scss";
import { FaRegNewspaper } from "react-icons/fa";
import { motion } from "framer-motion";
import { ReactComponent as BlogIllustration } from "../../assets/gg.svg";
import { PAGE_VARIANTS } from "../../constants";

const Blog = () => {
  return (
    <div>
      <motion.div
        className="blog"
        initial="initial"
        animate="in"
        exit="out"
        variants={PAGE_VARIANTS}
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
