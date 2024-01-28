import React from 'react';
import Card from '../assets/cardshow.gif';
import Manual from '../components/Manual';
const Home = () => {
    return (
        <>
            <div className='text-white flex justify-center items-center'>
                <div className='mt-10'>
                    <h1 className='text-5xl text-yellow-300 mb-8 tracking-wide'>Spark Karten</h1>
                    <p className='text-xl my-3'>Unlock Brilliance: Flashcards Redefined for Effortless Learning!</p>
                    <p className='my-3 mb-6'><span className='text-yellow-200'>"Spark" </span> suggests a spark of knowledge, <span className='text-yellow-200'> "Karten"</span> means Card in German. <br /> Together it says spark of knowledge through cards! .</p>
                    <a href='/dashboard' className='bg-yellow-500 text-blue-950 p-2 border rounded-full'> Get Started</a>
                </div>
                <div className='flex justify-center m-8'>
                    <img src={Card} alt="" className='w-2/3 rounded-lg' />
                </div>
            </div>
            <Manual></Manual>

        </>
    );
}

export default Home;
