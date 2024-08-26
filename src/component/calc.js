import React from 'react';
import Button from './button';

const calc = () => {
  return (
    <div className='w-[320px] h-[245px] bg-gray-800'>
        <div className='flex h-[100px] items-center justify-end text-white'>
            <span className='text-4xl pr-5'>0</span>
        </div>
        <div className='flex flex-row flex-wrap h-[345]'>
            {/* first row */}
            <Button val={1}/>
            <Button val={2}/>
            <Button val={3}/>
            <Button val={'+'} operator={true} />
            
            {/* second row */}
            <Button val={4}/>
            <Button val={5}/>
            <Button val={6}/>
            <Button val={'-'} operator={true} />

            {/* third row */}
            <Button val={7}/>
            <Button val={8}/>
            <Button val={9}/>
            <Button val={'*'} operator={true} />

            {/* forth row */}
            <Button val={0} grow={true} />
            <Button val={'/'} operator={true} />

            {/* fifth row */}
            <Button val={'C'} grow={true} />
            <Button val={'='} grow={true} operator={true} />
        </div>
    </div>
    
  )
}

export default calc