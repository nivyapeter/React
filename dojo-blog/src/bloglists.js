const BlogList = ({blogs,title,handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title
    console.log(typeof handleDelete)
    return (
    <div className="BlogList">
   <h2>{title}</h2>
    {blogs.map ((blog) => (
        <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
            <p>{blog.body}</p>
            <button onClick={() => handleDelete(blog.id)}>Delete me</button>

        </div>
    ))}
    
    </div>
    );
}
export default BlogList;