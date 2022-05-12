import "./Blog.styles.scss";
import { FaRegNewspaper } from "react-icons/fa";
const Blog = () => {
  return (
    <div className="blog">
      <section className="blog_report">
        <h1>COMMING SOON</h1>
        <FaRegNewspaper size="larger" />
        <p>The blog is on it's way!</p>
      </section>
    </div>
  );
};

export default Blog;
