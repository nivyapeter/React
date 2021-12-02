const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The dojo blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color:"white",
                    backgroundColor:"green",
                    border:"1px solid gray",
                    borderRadius:"8px"
                }}>New blog</a>
            </div>

        </nav>
      );
}
export default Navbar;