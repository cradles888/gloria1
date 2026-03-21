import { useState, useEffect } from "react"

const buttonSelectParam = ({
    text,
    onButtonClick,
    activeParams
}) => {

    const [isStateButton, setIsStateButton] = useState(false)

    useEffect(() => {setIsStateButton(activeParams.includes(text))}, [activeParams, text])

    const toggleParam = () => {
        setIsStateButton(!isStateButton)

        if (onButtonClick) {
            onButtonClick({
                value: text,
                isActive: !isStateButton

            })
        }
    }

    return (
        <input type="text" readOnly defaultValue={text} onClick={toggleParam} className={`border border-dark40 rounded-4xl text-dark py-2 w-14 outline-none justify-items-center cursor-auto ${isStateButton ? 'bg-accent text-white border-transparent' : ''}`} />
    );
}

export default buttonSelectParam;