import {useState} from "react";

const Box = () => {
    // const { isLoading } = props;

    // const isVisible = isShowSection || title || isAdmin

    // if (isLoading) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // }

    // const [count, setCount] = useState(0)
    // const handleIncrement = ()=> {
    //     setCount(count + 1);
    //     console.log(count);
    // }

    // const [isAuth, setAuth] = useState(false)
    // const handleChangeAuth = ()=> {
    //     const callBack = (prevState)=> !prevState
    //
    //     setAuth(callBack)
    // }

    const [username, setUsername] = useState()
    const handleChangeUsername = (event)=> {
        setUsername(event.target.value)
    }
    return (
        <div>
            <input type="text"/>
            <br/>
            <input type="text" value={username} onChange={handleChangeUsername}/>

            {/*Хуки useState*/}
            {/*<header>*/}
            {/*    <p>{isAuth ? "Auth" : "Not auth"}</p>*/}
            {/*    <button onClick={handleChangeAuth}>Change auth</button>*/}
            {/*</header>*/}
            {/*<h1>Count: {count}</h1>*/}
            {/*<button onClick={handleIncrement}>Increment</button>*/}

            {/*Conditional rendering*/}
            {/*<h1>title</h1>*/}
            {/*<p>description</p>*/}

            {/*{isShowSection ? "Show section" : "Hide section"}*/}
            {/*{isVisible && <p>Show section</p>}*/}

        </div>
    )
}
export default Box;
