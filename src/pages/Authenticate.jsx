import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import User from '../components/Profile';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Authenticate = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);

    });

    console.log(user);
    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider)
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='flex justify-center m-20'>
                <button onClick={handleGoogleLogin} type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                    <svg width="64px" height="64px" viewBox="-0.5 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g fill-rule="evenodd">
                            <path fill="#FBBC05" d="M9.827 24C9.827 22.476 10.08 21.014 10.532 19.644L2.623 13.604C1.082 16.734 0.214 20.26 0.214 24s0.868 7.267 2.408 10.394l7.904-6.051C10.331 26.972 9.827 25.516 9.827 24z" />
                            <path fill="#EB4335" d="M23.714 10.133c3.312 0 6.304 1.174 8.654 3.094l6.835-6.827C35.036 2.773 29.695 0.533 23.714 0.533 14.427 0.533 6.445 5.844 2.623 13.604l7.908 6.04c1.822-5.532 7.016-9.51 13.18-9.51z" />
                            <path fill="#34A853" d="M23.714 37.867c-6.165 0-11.36-3.978-13.182-9.51l-7.908 6.04C6.445 42.156 14.427 47.467 23.714 47.467c5.732 0 11.205-2.035 15.312-5.849l-7.507-5.803c-2.118 1.334-4.785 2.052-7.803 2.052z" />
                            <path fill="#4285F4" d="M46.145 24c0-1.387-0.213-2.88-0.534-4.266H23.714V28.8h12.605c-0.631 3.091-1.346 5.468-3.8 7.015l7.507 5.803c4.314-3.998 7.12-9.962 7.12-17.334z" />
                        </g>
                    </svg>

                    Sign Up with Google
                </button>
            </div>
        </>
    );
}

export default Authenticate;
