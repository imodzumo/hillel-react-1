import './App.css'
import Card from "./components/Card/Card.jsx";
import coursesData from "/data.js"

const App = () => {

    return (
        <div className="main__container">
            <Card courses={coursesData} />
        </div>
    );
}
export default App;
