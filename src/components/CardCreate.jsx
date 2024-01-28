import React, { useState, useEffect } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';

const CardCreate = () => {
    const [user, setUser] = useState(null);
    const [quest, setQuest] = useState('');
    const [ans, setAns] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
    }, []);

    const handleSubmit = async () => {
        if (!user) {
            alert('User not authenticated. Please log in.');
            return;
        }

        if (quest.trim() === '' || ans.trim() === '') {
            alert('Both question and answer cannot be blank.');
            return;
        }

        try {
            await addDoc(collection(db, "cards"), {
                uuid: user.uid,
                question: quest,
                answer: ans,
            });

            setQuest('');
            setAns('');

            <div id="toast-success" class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="sr-only">Check icon</span>
                </div>
                <div class="ms-3 text-sm font-normal">Item moved successfully.</div>
                <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                    <span class="sr-only">Close</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
        } catch (error) {
            console.error('Error Adding Card:', error.message);
            alert('Error adding card. Please try again.');
        }
    };

    return (
        <div className='flex flex-col items-center max-w-[80%] my-8 mx-auto'>
            <textarea
                className='w-full h-[150px] max-w-full mb-4 p-2 border border-gray-200 rounded focus:outline-none bg-[#2e3856] text-xl text-white'
                placeholder='Type your Question Here...'
                value={quest}
                onChange={(e) => setQuest(e.target.value)}
            ></textarea>
            <textarea
                className='w-full h-[50px] max-w-full mb-4 p-2 border border-gray-200 rounded focus:outline-none bg-[#2e3856] text-xl text-white'
                placeholder='Answer...'
                value={ans}
                onChange={(e) => setAns(e.target.value)}
            ></textarea>
            <button
                className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none'
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
}

export default CardCreate;
