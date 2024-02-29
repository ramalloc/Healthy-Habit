import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function Track() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <div>
            <section>
                <div className="container mx-auto px-5 md:py-5">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <svg className="text-pink-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.828A8 8 0 1114.828 11H16a1 1 0 110 2h-1.172A8 8 0 1111 17.172V19a1 1 0 11-2 0v-1.172A8 8 0 015.172 13H4a1 1 0 110-2h1.172A8 8 0 019 5.828V4a1 1 0 011-1zm0 2a6 6 0 100 12 6 6 0 000-12z" clipRule="evenodd" />
                                </svg>
                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>MuscleTech</h2>
                                <p className="leading-relaxed">Leading brand in gym supplements.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <svg className="text-pink-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.828A8 8 0 1114.828 11H16a1 1 0 110 2h-1.172A8 8 0 1111 17.172V19a1 1 0 11-2 0v-1.172A8 8 0 015.172 13H4a1 1 0 110-2h1.172A8 8 0 019 5.828V4a1 1 0 011-1zm0 2a6 6 0 100 12 6 6 0 000-12z" clipRule="evenodd" />
                                </svg>
                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Optimum Nutrition</h2>
                                <p className="leading-relaxed">Providing high-quality supplements since 1986.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <svg className="text-pink-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.828A8 8 0 1114.828 11H16a1 1 0 110 2h-1.172A8 8 0 1111 17.172V19a1 1 0 11-2 0v-1.172A8 8 0 015.172 13H4a1 1 0 110-2h1.172A8 8 0 019 5.828V4a1 1 0 011-1zm0 2a6 6 0 100 12 6 6 0 000-12z" clipRule="evenodd" />
                                </svg>
                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>BSN</h2>
                                <p className="leading-relaxed">Known for their innovative supplement formulas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Track;
