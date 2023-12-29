import {useEffect} from "react";

const BoxEvent = ()=> {

    useEffect(()=> {
        const handleClick = ()=> console.log("Click")
        window.addEventListener("click", handleClick)

        return ()=> {
            window.removeEventListener("click", handleClick)
        }
    }, [])


    return (
        <div>
            <div>BoxEvent</div>
        </div>
    );
}

export default BoxEvent;
