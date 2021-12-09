import useFetch from './useFetch';
import BlogListOne from './BlogListOne';
const Home = () =>{
    const title = "hai all";
    const {data:blogs,isPending,error}= useFetch('http://localhost:8001/blogs');
    return (
    <div className="Home">
    {/* <h2>Home page</h2> */}
    {/* <h2>{title}</h2> */}
    <useFetch />
    {blogs && <BlogListOne blogs={blogs} title={"hai all!"} />}
    </div>
    );
}
export default Home;