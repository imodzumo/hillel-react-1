import './styles.css';

const Card = ({ courses }) => {

    const numberOfModules = 10;
    function numberToTime(number) {
        const hours = Math.floor(number / 60);
        const minutes = number % 60;
        return `${hours} hours ${minutes} minutes`;
    }

    return (
        <div className="card__container">
            {courses.map(course =>
                <div key={course.id} className="card">
                    <div className="image__container">
                        <img src={course.image} alt={course.title}/>
                        <div className="level">{ course.level }</div>
                    </div>
                    <h3 className="card__title">{ course.title }</h3>

                    {course.isMyCourse
                        &&
                        <div>
                            <progress value={course.finishedModules} max={numberOfModules}/>
                            <div className="card__info">
                                <p>{course.finishedModules} / {numberOfModules} Modules</p>
                                <div>{course.finishedModules/numberOfModules*100}%</div>
                            </div>
                        </div>
                    }

                    <div className="card__info">
                        <div className="user">
                            <img src={course.user.avatar} alt={course.user.name}/>
                            <p>{course.user.name}</p>
                        </div>
                        <div className="rating">
                            <p>{course.rating}</p>
                        </div>
                    </div>

                    <div className="card__info">
                        <div>{course.students} students</div>
                        <div>{course.finishedModules} Modules</div>
                        <div>{ numberToTime(course.duration) }</div>
                    </div>
                </div>

                )}
        </div>
    )
}
export default Card;
