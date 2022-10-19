import React from 'react';

const Cards = ({ picture, name, type, ability, key }) => {
    return (
        <div>
            {/* Inside the flexbox container: Each box got a fixed size to force the wrap */}
                <div id='box' className=' h-full w-[500px] rounded-lg flex flex-col items-center p-2 border-2 border-red-100 shadow-2xl'>
                    <div id='picture' className='h-5/6 m-1 rounded-sm'>
                        <img className='h-full w-96' src={picture} alt='pic example' />
                    </div>
                    <div id='description' className='p-2 text-center'>
                        <p className='font-bold uppercase'>{name? name:'wait'}</p>
                        <p className='capitalize'>Type: {type? type:'wait'}</p>
                        <p className='capitalize'>Ability: {ability? ability:'wait'}</p>
                    </div>
                    <button className='w-fit rounded-lg border-2 border-black shadow-2xl p-2 hover:scale-110 transition duration-300 ease-in-out'>more...</button>
                </div>
            </div>
    );
}

export default Cards;