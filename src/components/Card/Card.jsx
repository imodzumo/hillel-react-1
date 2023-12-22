import './styles.css';

const Card = ({ courses }) => {
    const {image, title, level, isMyCourse, finishedModules, user, rating, students, duration} = courses;

    const numberOfModules = 10;
    function numberToTime(number) {
        const hours = Math.floor(number / 60);
        const minutes = number % 60;
        return `${hours} hours ${minutes} minutes`;
    }

    return (
        <div className="card__container">
            <div className="card">
                <div className="image__container">
                    <img src={image} alt={title}/>
                    <div className="level">{ level }</div>
                </div>
                <h3 className="card__title">{ title }</h3>

                {isMyCourse
                    &&
                    <div>
                        <progress value={finishedModules} max={numberOfModules}/>
                        <div className="card__info">
                            <p>{finishedModules} / {numberOfModules} Modules</p>
                            <div>{finishedModules/numberOfModules*100}%</div>
                        </div>
                    </div>
                }

                <div className="card__info">
                    <div className="user">
                        <img src={user.avatar} alt={user.name}/>
                        <p>{user.name}</p>
                    </div>
                    <div className="rating">
                        <p>{rating}</p>
                    </div>
                </div>

                <div className="card__info">
                    <div>{students} students</div>
                    <div>{finishedModules} Modules</div>
                    <div>{ numberToTime(duration) }</div>
                </div>
            </div>
        </div>
    )
}
export default Card;
