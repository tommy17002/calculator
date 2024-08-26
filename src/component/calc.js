import React, { useEffect, useState } from 'react';
import Button from './button';

const Calc = () => {
    const [firstNumber, setFirstNumber] = useState(null);
    const [secondNumber, setSecondNumber] = useState(null);
    const [operator, setOperator] = useState(null);
    const [displayNumber, setDisplayNumber] = useState(null);
    const [result, setResult] = useState (null);

    useEffect(() => {
        showNumber();
    },[firstNumber,secondNumber]);

    const showNumber = () => {
        if (result)
        {
            setDisplayNumber(result);
        }
        else if (!operator)
        {
            setDisplayNumber(firstNumber);
        }
        else
        {
            setDisplayNumber(secondNumber);
        }
    };

    const handleNumber = (val) => {
        setResult(null);
        if(!firstNumber && !operator)
        {
            setFirstNumber(val.toString());
        }
        else if (firstNumber && !operator)
        {
            setFirstNumber(firstNumber + val);
        }
        else if (!secondNumber) 
        {
            setSecondNumber(val.toString());
        }
    };
    const handleOperator = (val) => {
        if(result)
        {
            setFirstNumber(result);
            setOperator(val);

        }
        if (firstNumber)
        {
            setOperator(val);
        }
    };
    const handleClear = () => {
        setFirstNumber(null);
        setSecondNumber(null);
        setOperator(null);
        setDisplayNumber(null)
    };
    const handleResult = () => {
        let tempResult;
        switch (operator)
        {
            case '+':
                tempResult = parseFloat(firstNumber) + parseFloat(secondNumber);
                setResult(tempResult,toString());
                handleClear();
                break;

            case '-':
                tempResult = parseFloat(firstNumber) + parseFloat(secondNumber);
                setResult(tempResult,toString());
                handleClear();
                break;

            case '*':
                tempResult = parseFloat(firstNumber) + parseFloat(secondNumber);
                setResult(tempResult,toString());
                handleClear();
                break;
                
            case '/':
                tempResult = parseFloat(firstNumber) + parseFloat(secondNumber);
                setResult(tempResult,toString());
                handleClear();
                break;

            default:
                break;
        }
    };
  return (
    <div className='w-[320px] h-[245px] bg-gray-800'>
        <div className='flex h-[100px] items-center justify-end text-white'>
            <span className='text-4xl pr-5'>
                {displayNumber ? displayNumber : 0}
            </span>
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

export default Calc