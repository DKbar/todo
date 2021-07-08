import { useState, useRef, useCallback } from "react"
import TestInput from "./TestInput"
 
export const Test = (props) => {
    const inputRef = useRef();
    const change = useCallback(() => {
        console.log(inputRef.current)
        inputRef.current.focus();
        inputRef.current.value = 'asddas';
    });
    return (
        <div>
            <button onClick={change}>11</button> 
            <TestInput ref={inputRef}></TestInput>
        </div>


    )
}

