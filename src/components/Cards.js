import React from 'react';

function Cards(props) {
    return (
        <div>
            {/* Simple container for flexbox using: Each box got a fixed size to force the wrap */}
            <div id='container' className='h-full w-fit m-10 flex gap-5 gap-y-14 flex-wrap justify-around'>
                <div id='box' className=' h-full w-[500px] rounded-lg flex flex-col items-center p-2 border-2 border-red-100 shadow-2xl'>
                    <div id='picture' className='h-5/6 m-1 rounded-sm'>
                        <img className='h-full w-96' src='example.svg' alt='pic example'/>
                    </div>
                    <div id='description' className='p-2 text-center'>
                        <p className='font-bold uppercase'>Name</p>
                        <p>Type</p>
                        <p>Color</p>
                    </div>
                    <button className='w-fit rounded-lg border-2 border-black shadow-2xl p-2 hover:scale-110 transition duration-300 ease-in-out'>more...</button>
                </div>
                <div id='box' className=' h-full w-[500px] rounded-lg flex flex-col items-center p-2 border-2 border-red-100 shadow-2xl'>
                    <div id='picture' className='h-5/6 m-1 rounded-sm'>
                        <img className='h-full w-96' src='example.svg' alt='pic example'/>
                    </div>
                    <div id='description' className='p-2 text-center'>
                        <p className='font-bold uppercase'>Name</p>
                        <p>Type</p>
                        <p>Color</p>
                    </div>
                    <button className='w-fit rounded-lg border-2 border-black shadow-2xl p-2 hover:scale-110 transition duration-300 ease-in-out'>more...</button>
                </div>
                <div id='box' className=' h-full w-[500px] rounded-lg flex flex-col items-center p-2 border-2 border-red-100 shadow-2xl'>
                    <div id='picture' className='h-5/6 m-1 rounded-sm'>
                        <img className='h-full w-96' src='example.svg' alt='pic example'/>
                    </div>
                    <div id='description' className='p-2 text-center'>
                        <p className='font-bold uppercase'>Name</p>
                        <p>Type</p>
                        <p>Color</p>
                    </div>
                    <button className='w-fit rounded-lg border-2 border-black shadow-2xl p-2 hover:scale-110 transition duration-300 ease-in-out'>more...</button>
                </div>
                <div id='box' className=' h-full w-[500px] rounded-lg flex flex-col items-center p-2 border-2 border-red-100 shadow-2xl'>
                    <div id='picture' className='h-5/6 m-1 rounded-sm'>
                        <img className='h-full w-96' src='example.svg' alt='pic example'/>
                    </div>
                    <div id='description' className='p-2 text-center'>
                        <p className='font-bold uppercase'>Name</p>
                        <p>Type</p>
                        <p>Color</p>
                    </div>
                    <button className='w-fit rounded-lg border-2 border-black shadow-2xl p-2 hover:scale-110 transition duration-300 ease-in-out'>more...</button>
                </div>
            </div>
        </div>
    );
}

export default Cards;