import { Link } from 'react-router-dom';

const Home = ()=> {

    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>Welcome to the Site!</h1>
                <p>Explore our user list.</p>
                <Link to="/users" className="button-link">Go to Users</Link>
            </header>
        </div>
    );
}

export default Home;
