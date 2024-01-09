import {memo} from 'react'
const Box = ({onClick})=> {

    return (
        <div className="homepage-container">
            Box
            <button onClick={onClick}>Say hello</button>
        </div>
    );
}

export default memo(Box);
