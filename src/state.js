const useState = (initialValue)=> {

    let value = initialValue;

    const handleChangeValue = (newValue)=> {
        value = newValue
    }

    return [value, handleChangeValue]
}

const [count, setNewValue] = useState()

setNewValue(1000)
