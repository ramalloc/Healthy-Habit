import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <div>
            <section className="">
                <div className="container mx-auto px-5 py-10">
                    <h1 className="text-center text-3xl font-bold text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>Gym Supplement Brand</h1>
                    <h2 className="text-center text-2xl font-semibold mb-10" style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className="text-pink-500">customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.svgrepo.com/show/476799/tourist.svg" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">I've been using these supplements for a month now, and I can already feel the difference in my energy levels during workouts. Great product!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Rahul Upadhya</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Fitness Enthusiast</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Our supplements have helped me boost my workout performance significantly. Highly recommended!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Shalini Dae</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Athlete</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.svgrepo.com/show/446478/avatar-portrait.svg" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">As a professional bodybuilder, I've tried many supplements, but none have matched the quality and effectiveness of these. Highly recommended!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Maninder Singh</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Professional Bodybuilder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;
