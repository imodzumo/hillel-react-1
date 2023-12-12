const Card = ({ info, onSubmitForm }) => {
    const {firstName, lastName, age, skills} = info;

    const handleButtonClick = () => console.log("hello");
    const handleChangeInputValue = (event) => {
        console.log(event.target.value);
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text" onChange={handleChangeInputValue} placeholder="Enter name"/>
                <button type="submit">Show info</button>
            </form>

            <h1>First name: {firstName}</h1>
            <h2>Last name: {lastName}</h2>
            <p>Age: {age}</p>
            <ul>
                {skills.map(skill => <li key={skill.id}>{skill.title}</li>)}
            </ul>
        </div>
    )
}
export default Card;
