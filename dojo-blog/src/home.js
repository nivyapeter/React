import { useState } from "react";

const Home = () =>{
    const [blogs,setBlogs] = useState([
        {title:'My new website', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, odit.',author:'mario', id:1},
        {title:'My new party', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, odit.',author:'mario', id:2},
        {title:'Web dep top', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, odit.',author:'mario', id:3}
    ]);
    
    return (
    <div className="Home">
    {/* <h2>Home page</h2> */}
    {blogs.map ((blog) => (
        <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
            <p>{blog.body}</p>

        </div>
    ))}
    
    </div>
    );
}
export default Home
