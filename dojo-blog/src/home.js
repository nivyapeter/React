const Home = () =>{
    const handleClick = (e) => {
      console.log("hai", e);
    }
    
    const handleClickAgain =(name,e) => {
        console.log("hai" + " " + name + e.target);

    }


    let link = "https://www.google.com";
    return (
    <div className="home">
    <h2>Home page</h2>
    <button onClick={handleClick}><a href ={link}>Click me</a></button>
    <button onClick={(e) => handleClickAgain('Anju',e)}>Click me Again</button>
    </div>
    );
}
export default Home