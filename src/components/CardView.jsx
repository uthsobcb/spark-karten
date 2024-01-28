import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const CardView = () => {
    const [user, setUser] = useState(null);
    const [cards, setCards] = useState([]);
    const [flippedCardId, setFlippedCardId] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                try {
                    const cardsQuery = query(
                        collection(db, "cards"),
                        where("uuid", "==", currentUser.uid)
                    );

                    const querySnapshot = await getDocs(cardsQuery);
                    const fetchedCards = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setCards(fetchedCards);
                } catch (error) {
                    console.error("Error fetching user cards:", error);
                }
            } else {
                setCards([]);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleFlip = (cardId) => {
        setFlippedCardId(cardId === flippedCardId ? null : cardId);
        console.log("Clicked");
    };

    return (
        <div className='flex flex-col lg:flex-row justify-center items-center text-center mx-8 my-4 gap-6'>
            {cards.map((item) => (
                <div
                    key={item.id}
                    className={`flex-shrink-0 w-[300px] h-[300px] overflow-hidden transform bg-white border border-gray-200 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300 ease-in-out ${flippedCardId === item.id ? 'animate-flip' : ''}`}
                    onClick={() => handleFlip(item.id)}
                >
                    <div className="flex h-full w-full items-center justify-center p-4">
                        <h5 className='text-xl font-semibold text-gray-800 text-center'>
                            {flippedCardId === item.id ? item.answer : item.question}
                        </h5>
                    </div>
                </div>
            ))}
        </div>


    );
};
export default CardView;
