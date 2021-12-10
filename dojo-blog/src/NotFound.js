import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="not-found">
            <h2>sorry</h2>
            <p>That page cannot be found</p>
            <link to ='/'>Bck to the home page....</link>
        </div>
    )
}
export default NotFound;