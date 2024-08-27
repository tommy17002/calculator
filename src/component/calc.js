import React, { useEffect, useState } from 'react';
import Button from './button';

const Calc = () => {
    const [expression, setExpression] = useState(''); // Untuk menyimpan ekspresi matematika
    const [displayNumber, setDisplayNumber] = useState('0'); // Untuk menampilkan angka di layar
    const [result, setResult] = useState(null);

    useEffect(() => {
        showNumber();
    }, [expression, result]);

    const showNumber = () => {
        if (result !== null) {
            setDisplayNumber(result);
        } else {
            setDisplayNumber(expression || '0');
        }
    };

    const handleNumber = (val) => {
        setResult(null);
        setExpression(expression + val);
    };

    const handleOperator = (val) => {
        if (val === '-') {
            // Jika '-' digunakan sebagai penanda negatif, pastikan ia ditempatkan dengan benar
            if (expression === '' || ['+', '-', '*', '/', '^'].includes(expression.slice(-1))) {
                setExpression(expression + val);
            }
        } else if (val === '(' || val === ')') {
            setExpression(expression + val);
        } else {
            // Untuk operator lainnya, pastikan tidak ada operator berturut-turut
            if (['+', '-', '*', '/', '^'].includes(expression.slice(-1))) {
                setExpression(expression.slice(0, -1) + val);
            } else {
                setExpression(expression + val);
            }
        }
    };

    const handleClear = () => {
        setExpression('');
        setResult(null);
    };

    const handleResult = () => {
        try {
            // Evaluasi ekspresi matematika dengan tanda kurung
            // Replace '^' dengan '**' untuk menangani pangkat
            const evaluatedExpression = expression.replace(/\^/g, '**');
            const tempResult = eval(evaluatedExpression);
            setResult(tempResult.toString());
            setExpression(tempResult.toString());
        } catch (error) {
            setResult('Error');
            setExpression('');
        }
    };

    return (
        <div className='w-[320px] h-[445px] bg-gray-800'>
            <div className='flex h-[100px] items-center justify-end text-white'>
                <span className='text-4xl pr-5'>
                    {displayNumber}
                </span>
            </div>
            <div className='flex flex-row flex-wrap h-[345px]'>
                {/* first row */}
                <Button clickAction={handleClear} val={'C'} operator={true} />
                <Button clickAction={handleOperator} val={'^'} operator={true} />
                <Button clickAction={handleOperator} val={'%'} operator={true} />
                <Button clickAction={handleOperator} val={'/'} operator={true} />

                {/* second row */}
                <Button clickAction={handleNumber} val={1} />
                <Button clickAction={handleNumber} val={2} />
                <Button clickAction={handleNumber} val={3} />
                <Button clickAction={handleOperator} val={'*'} operator={true} />

                {/* third row */}
                <Button clickAction={handleNumber} val={4} />
                <Button clickAction={handleNumber} val={5} />
                <Button clickAction={handleNumber} val={6} />
                <Button clickAction={handleOperator} val={'+'} operator={true} />

                {/* fourth row */}
                <Button clickAction={handleNumber} val={7} />
                <Button clickAction={handleNumber} val={8} />
                <Button clickAction={handleNumber} val={9} />
                <Button clickAction={handleOperator} val={'-'} operator={true} />

                {/* fifth row */}
                <Button clickAction={handleNumber} val={0} grow={true} />
                <Button clickAction={handleOperator} val={'('} operator={true} />
                <Button clickAction={handleOperator} val={')'} operator={true} />
                <Button clickAction={handleResult} val={'='} operator={true} grow={true} />
            </div>
        </div>
    );
};

export default Calc;
