// import { useEffect, useState } from "react";
import BlogList from "./bloglists";
import useFetch from "./useFetch";

const Home = () => {
  // const [blogs, setBlogs] = useState(null
    // {
    //   title: "My new website",
    //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, odit.",
    //   author: "neetha",
    //   id: 1,
    // },
    // {
    //   title: "My new party",
    //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, odit.",
    //   author: "mario",
    //   id: 2,
    // },
    // {
    //   title: "Web dep top",
    //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, odit.",
    //   author: "mario",
    //   id: 3,
    // },
  // );
  // const[isPending,setPending] = useState(true);
  // const [error,setError] = useState(null);
  // const [name,setName] = useState('mario');

//  const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
//  }
//  useEffect(() => {
//    setTimeout(() => {
//     fetch('http://localhost:8001/blogss')
//       .then(res => {
//         if(!res.ok){
//           throw Error('could not fetch the data for that responce')
//         }
//         return res.json();
//       })
//       .then(data => {
//         console.log(data);
//         setBlogs(data);
//         setPending(false);
//       })
//       .catch((err => {
//         // console.log(err.message);
//         setError(err.message);
//         setPending(false);
//       }))
//    },1000);
//  }, [] );
  const {data:blogs,isPending,error}= useFetch('http://localhost:8000/blogs');

return (
    <div className="Home">
      {error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
     {blogs && <BlogList blogs={blogs} title={"hai all!"} />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title={"mario's blogs"} />
      <BlogList blogs={blogs} handleDelete={handleDelete} /> */}
      {/* <p>{name}</p>
      <button onClick = {() => setName('ligi')}>change name</button> */}
    </div>
  );
};
export default Home;
