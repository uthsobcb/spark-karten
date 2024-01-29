import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import Github from '../assets/github.svg';

const Header = () => {
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });


    const handleLogOut = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signOut(auth, provider);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <nav className='flex justify-center sticky'>
                <div className='border text-white bg-[#1f2937] bg-opacity-75 flex justify-between w-full lg:w-[75%] self-center p-3 rounded-xl'>
                    <a href="/"><span className='text-xl font-bold'>📒 Spark Karten</span></a>
                    <div>
                        <a href="/dashboard" className='p-2 text-white'>Dashboard</a>
                        {user ? (
                            <button onClick={handleLogOut} className='bg-yellow-500 p-2 text-blue-950 border rounded-full'>Sign Out</button>
                        ) : (

                            <a href="/auth" className='bg-yellow-500 p-2 text-blue-950 border rounded-full'>Sign Up</a>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
