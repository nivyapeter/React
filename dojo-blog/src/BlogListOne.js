import { Link } from "react-router-dom";
const BlogList = ({blogs,title}) => {

    return (
    <div className="BlogList">
    <h2>{title}</h2>
        {blogs.map ((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to = {`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <h2>Written by {blog.author}</h2>
                <p>{blog.body}</p>
                </Link>


            </div>
        ))}
        
        </div>
    );
}
export default BlogList;