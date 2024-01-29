import React from 'react';

const Footer = () => {
    return (


        <footer className="rounded-lg shadow m-4 bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm  sm:text-center text-gray-400">Crafted by<a href="https://uthsob.me" className="hover:underline"> Uthsob</a></span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://github.com/uthsobcb/spark-karten" className="hover:underline me-4 md:me-6">Github</a>
                    </li>
                    <li>
                        <a href="https://www.hackverse.dev/projects/spark-karten_1706463794" className="hover:underline me-4 md:me-6">Upvote in Hackverse</a>
                    </li>
                </ul>
            </div>
        </footer>

    );
}

export default Footer;
