import React, { useState } from 'react';
import Button from './button';

const calc = () => {
    const [firstNumber, setFirstNumber] = useState(null);
    const [secondNumber, setSecondNumber] = useState(null);
    const [operator, setOperator] = useState(null);
    const [displayNumber, setDisplayNumber] = useState(null);
    const [result, setResult] = useState (null)
    const handleNumber = (val) => {
        console.log(val);
    };
    const handleOperator = (val) => {
        console.log(`operator ${val}`);
    };
    const handleClear = () => {
        console.log('clear');   
    };
    const handleResult = () => {
        console.log('result');
    };
  return (
    <div className='w-[320px] h-[245px] bg-gray-800'>
        <div className='flex h-[100px] items-center justify-end text-white'>
            <span className='text-4xl pr-5'>0</span>
        </div>
        <div className='flex flex-row flex-wrap h-[345]'>
            {/* first row */}
            <Button clickAction={handleNumber} val={1}/>
            <Button clickAction={handleNumber} val={2}/>
            <Button clickAction={handleNumber} val={3}/>
            <Button clickAction={handleOperator} val={'+'} operator={true} />
            
            {/* second row */}
            <Button clickAction={handleNumber} val={4}/>
            <Button clickAction={handleNumber} val={5}/>
            <Button clickAction={handleNumber} val={6}/>
            <Button clickAction={handleOperator} val={'-'} operator={true} />

            {/* third row */}
            <Button clickAction={handleNumber} val={7}/>
            <Button clickAction={handleNumber} val={8}/>
            <Button clickAction={handleNumber} val={9}/>
            <Button clickAction={handleOperator} val={'*'} operator={true} />

            {/* forth row */}
            <Button clickAction={handleNumber} val={0} grow={true} />
            <Button clickAction={handleOperator} val={'/'} operator={true} />

            {/* fifth row */}
            <Button clickAction={handleClear} val={'C'} grow={true} />
            <Button clickAction={handleResult} val={'='} grow={true} operator={true} />
        </div>
    </div>
    
  )
}

export default calc