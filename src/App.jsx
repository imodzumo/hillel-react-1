import {useEffect, useRef, useState} from "react";
import {current} from "@reduxjs/toolkit";
import Input from "./components/Input.jsx";
import Modal from "./components/Modal.jsx";
import Select from "./components/Select.jsx";


const App = () => {
    // const inputRef = useRef(null);
    //
    // useEffect(() => {
    //     inputRef.current.focus();
    // }, [])

    // const [seconds, setSeconds] = useState(0);
    // const [intervalId, setIntervalId] = useState(null);
    // const intervalId = useRef(null);

    // useEffect(() => {
    //     intervalId.current = setInterval(()=> {
    //         setSeconds(prevState => prevState + 1)
    //
    //     }, 1000)
    //
    //     return ()=> clearInterval(intervalId.current);
    //
    // }, [intervalId]);

    // const [isShowModal, setIsShowModal] = useState(false);

    const options = [
        {id: 1, value: "user1", title: "user1"},
        {id: 2, value: "user2", title: "user2"},
        {id: 3, value: "user3", title: "user3"},
        {id: 4, value: "user4", title: "user4"},
        {id: 5, value: "user5", title: "user5"},
        {id: 6, value: "user6", title: "user6"},
        {id: 7, value: "user7", title: "user7"},
        {id: 8, value: "user8", title: "user8"},
    ]


    return (
        // <div className="page">
        //     {/*<input ref={inputRef} type="text" placeholder="Enter text"/>*/}
        //     {/*Seconds: {seconds}*/}
        //
        //     {/*<Input ref={inputRef} />*/}
        //
        //
        //     <div className="other">Other</div>
        //     <button onClick={()=> setIsShowModal(!isShowModal)}>Show modal</button>
        //
        //     {isShowModal && <Modal />}
        //
        // </div>

        <div>
            <Select options={options} />
        </div>
    );
}
export default App;
