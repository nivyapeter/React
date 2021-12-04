import { useState } from "react";
import BlogList from "./bloglists";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, odit.",
      author: "neetha",
      id: 1,
    },
    {
      title: "My new party",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, odit.",
      author: "mario",
      id: 2,
    },
    {
      title: "Web dep top",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, odit.",
      author: "mario",
      id: 3,
    },
  ]);

  return (
    <div className="Home">
      <BlogList blogs={blogs} title={"hai all!"} />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title={"mario's blogs"} />
    </div>
  );
};
export default Home;
