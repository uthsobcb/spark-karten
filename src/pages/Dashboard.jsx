
import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router';
import CardCreate from '../components/CardCreate';
import CardView from '../components/CardView';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        if (!currentUser) {
            navigate("/auth");
        }
    });
    console.log(user);

    return (
        <>
            {user && (
                <>
                    <div className='text-white text-3xl m-10'>
                        <h1>Hello <span className='underline text-yellow-400'>{user.displayName},</span></h1>
                    </div>
                    <div class="block max-w-full p-6  border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
                        <p class="font-bold text-lg text-gray-400">To Continue you need to create cards first!!</p>
                        <p class="font-normal text-gray-400">To Create Flashcard go to/click to Create Flash Cards.</p>
                        <p class="font-normal text-gray-400">To Revise created Flashcards go to/click to View Cards.</p>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-4 m-8'>
                        <a href="/create" className="flex-shrink-0 w-[300px] flex flex-col justify-center text-center items-center h-[300px] overflow-hidden transform bg-white border border-gray-200 rounded-lg shadow-md cursor-pointer">
                            <svg width='95' height='95' viewBox="-3.5 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#1C274C"></path>
                                </g>
                            </svg>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Create Card</h5>
                        </a>
                        <a href="/card" className="flex-shrink-0 flex flex-col justify-center text-center items-center  w-[300px] h-[300px] overflow-hidden transform bg-white border border-gray-200 rounded-lg shadow-md cursor-pointer">
                            <svg fill="#000000" width='95' height='95' viewBox="-3.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>view</title> <path d="M12.406 13.844c1.188 0 2.156 0.969 2.156 2.156s-0.969 2.125-2.156 2.125-2.125-0.938-2.125-2.125 0.938-2.156 2.125-2.156zM12.406 8.531c7.063 0 12.156 6.625 12.156 6.625 0.344 0.438 0.344 1.219 0 1.656 0 0-5.094 6.625-12.156 6.625s-12.156-6.625-12.156-6.625c-0.344-0.438-0.344-1.219 0-1.656 0 0 5.094-6.625 12.156-6.625zM12.406 21.344c2.938 0 5.344-2.406 5.344-5.344s-2.406-5.344-5.344-5.344-5.344 2.406-5.344 5.344 2.406 5.344 5.344 5.344z"></path> </g></svg>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">View Cards</h5>
                        </a>
                    </div>
                </>
            )}
        </>
    );
}

export default Dashboard;
