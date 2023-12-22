import './App.css'
import Card from "./components/Card/Card.jsx";
import coursesData from "/data.js"

const App = () => {

    return (
        <div className="main__container">
            {coursesData.map(course =>
                <Card key={course.id} courses={course} />
            )}
        </div>
    );
}
export default App;
