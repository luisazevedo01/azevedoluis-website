import "./Blog.styles.scss";
import { FaRegNewspaper } from "react-icons/fa";
import { ReactComponent as BlogIllustration } from "../../assets/gg.svg";

const Blog = () => {
  return (
    <div className="blog">
      <section className="blog_report">
        <h1>COMMING SOON</h1>
        <BlogIllustration />
        <p>The blog is on it's way!</p>
      </section>
    </div>
  );
};

export default Blog;
