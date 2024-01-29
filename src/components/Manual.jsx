import React from 'react';
import SignInImg from '../assets/sign-up-form.svg';
import CreateImg from '../assets/createimg.png';
import CardDemo from '../assets/cardshow.gif';

const Manual = () => {
    return (
        <div className='text-white flex flex-col items-center p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24'>
            <h1 className='text-4xl font-bold mb-4 text-center'>How to Use Spark Karten?</h1>
            <span className='text-xl mb-6 text-center'>Only 3 Easy Steps...</span>
            <div className='flex flex-wrap justify-center items-center gap-8'>
                <Card
                    imgSrc={SignInImg}
                    altText="Sign Up"
                    title="Sign Up!"
                    description="Sign Up is just a piece of cake. Just a click of a button!"
                />
                <Card
                    imgSrc={CreateImg}
                    altText="Create"
                    title="Create"
                    description="Create your own flashcard for your learning!"
                />
                <Card
                    imgSrc={CardDemo}
                    altText="Revise"
                    title="Revise"
                    description="Revise your cards just like any other."
                />

            </div>
        </div>
    );
};

const Card = ({ imgSrc, altText, title, description }) => (
    <div className='text-center block max-w-full  bg-gray-800 border-gray-700 hover:bg-gray-700 p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 xl:w-1/4 text-white'>
        <img src={imgSrc} alt={altText} className='w-44 h-44 mx-auto mb-4 object-contain' />
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p>{description}</p>
    </div>
);

export default Manual;
