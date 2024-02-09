import {useEffect, useRef, useState} from "react";
import cn from "classnames"


const Input = (props) => {
	const {options} = props;

	const [isOpen, setIsOpen] = useState(false)
	const [filter, setFilter] = useState("")
	const [selected, setSelected] = useState(null)
	const inputRef = useRef(null)
	const [highLightIndex, setHighLightIndex] = useState(0)

	const filterOptions = options.filter(option => option.title.toLowerCase().includes(filter.toLowerCase()))

	useEffect(() => {
		if (isOpen) {
			inputRef.current?.focus();
		}

	}, [isOpen]);

	useEffect(() => {
		const handleKeyDown = (e) => {
			switch (e.key) {
				case "ArrowUp" :
					setHighLightIndex(prevState => prevState > 0 ? prevState - 1: 0)
					break;
				case "ArrowDown" :
					setHighLightIndex(prevState => prevState < filterOptions.length - 1 ? prevState + 1: prevState)
					break;
				case "Enter" :
					setSelected(filterOptions[highLightIndex].title)
					setIsOpen(false)
					break;
				default : break;
			}
		}

		window.addEventListener("keydown", handleKeyDown)

		return ()=> window.removeEventListener("keydown", handleKeyDown)

	}, [filterOptions, highLightIndex])

	return (
		<div>
			<div onClick={()=> setIsOpen(!isOpen)} className="selected-value">
				{selected ?? "Default value"}
			</div>

			{isOpen && <div>
				{options.length > 5 && <input value={filter} ref={inputRef} type="text" placeholder="seatch..." onChange={(e)=> setFilter(e.target.value)}/>}

				<ul className="list">
					{filterOptions.map((option, index) => {
						return (<li
							key={option.id}
							onClick={()=> {
								setSelected(option.title)
								setIsOpen(false)
							}}
							className={cn("item", {["hightlight"]: index === highLightIndex })}
						>{option.title}</li>)
					})}
				</ul>
			</div>
			}

		</div>
	);
};

export default Input;
