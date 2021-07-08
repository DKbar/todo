
import {useState, forwardRef} from 'react';

const TestInput = forwardRef((props, ref) => {
    const [value, setValue] =useState('');
    return (
        <>    
            <input ref={ref} value={value} onChange={e => setValue(e.target.value)}></input>            
        </>


    )
})

export default TestInput;