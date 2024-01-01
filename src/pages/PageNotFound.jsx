import {Link} from "react-router-dom";
const PageNotFound = ()=> {

    return (
        <div className="page-notFound-container">
            <header className="page-notFound-header">
                <h1>Sorry, the page is not found!</h1>
                <Link to="/" className="button-link">Go to Homepage</Link>
            </header>
        </div>
    );
}

export default PageNotFound;
