import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import Carousel from '../../components/carousel/Carousel';

function Allproducts() {
    const context = useContext(myContext);
    const { mode, product } = context;

    const dispatch = useDispatch();

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Added to cart');
    }

    // Extract unique categories from products
    const categories = [...new Set(product.map(item => item.category))];

    return (
        <Layout>
            <Carousel />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 md:py-16 mx-auto">
                    <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                        <div class="h-1 w-40 bg-pink-600 rounded mb-4"></div>
                        <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Categories</h2>
                        <div class="h-1 w-20 bg-pink-600 rounded"></div>
                    </div>
                    {/* Categories section */}
                    {categories.map((category, index) => (
                        <div key={index} className="mb-8">
                            {/* Make the category name clickable and navigate to the category page */}
                            <Link to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="text-xl font-semibold mb-6">{category}</Link>
                            <div className="flex flex-wrap -m-4">
                                {product.filter(item => item.category === category).map((item, idx) => (
                                    <div onClick={() => window.location.href = `/productinfo/${item.id}`} key={idx} className="p-4 mb-4 mt-4 md:w-1/4 drop-shadow-lg">
                                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                            <div className="flex justify-center cursor-pointer">
                                                <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={item.imageUrl} alt="product" />
                                            </div>
                                            <div className="p-5 border-t-2">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>Healthy-Habit</h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h1>
                                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{item.price}</p>
                                                <div className="flex justify-center">
                                                    <button type="button" onClick={() => addCart(item)} className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2">Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
}

export default Allproducts;
