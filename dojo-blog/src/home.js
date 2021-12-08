import useFetch from "./useFetch";

const Home = () =>{
    const title = "hai all";
    return (
    <div className="Home">
    {/* <h2>Home page</h2> */}
    <h2>{title}</h2>
    <useFetch />
    </div>
    );
}
export default Home