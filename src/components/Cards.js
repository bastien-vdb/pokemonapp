import React, { useState } from 'react';

const Cards = ({ picture, name, type, ability, key, version, weight }) => {
    const [more, setMore] = useState(false);
    return (
        <div>
            {/* Inside the flexbox container: Each box got a fixed size to force the wrap */}
            <div id='box' className=' h-full w-[200px] md:w-[300px] lg:w-[500px] rounded-lg flex flex-col items-center p-2 border-2 border-red-100 shadow-2xl hover:scale-110 transition duration-300 ease-in'>
                <div id='picture' className='h-5/6 m-1 rounded-sm'>
                    {picture ? <img className='h-full w-96' src={picture} alt='pic example' /> : 'Loading picture...'}
                </div>
                <div id='description' className='p-2 text-center'>
                    <div className='capitalize'>
                        <p className='font-bold upperca se'>{name ? name : 'wait'}</p>
                        <p>Type: {type ? type : 'wait'}</p>
                        <p>Ability: {ability ? ability : 'wait'}</p>
                    </div>
                    <div style={{ display: more ? 'block' : 'none' }} className='capitalize transition duration-300'>
                        <p>Weight: {weight}</p>
                        <p>Version: {version}</p>
                    </div>
                </div>
                <button onClick={() => setMore(() => !more)} className='w-fit rounded-lg border-2 border-black shadow-2xl p-2 hover:scale-110 transition duration-300 ease-in-out'>{more? 'Less...':'More...'}</button>
            </div>
        </div>
    );
}

export default Cards;