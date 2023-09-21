import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [input,setValue] = useState(defaultValue)
    const handleChange = val => {
        setValue(val)
    }
    return [value,handleChange]
}

export default useInputState;