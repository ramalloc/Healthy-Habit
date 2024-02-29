import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import myContext from '../../context/data/myContext'; // Update the path to your context file
import { addToCart } from '../../redux/cartSlice'; // Update the path to your Redux slice file
import Layout from '../../components/layout/Layout';

const FatBurner = () => {
    const context = useContext(myContext);
    const { mode, product } = context; // Assuming you need the 'mode' and 'product' from context

    // Redux setup
    const dispatch = useDispatch();

    // Function to add a product to the cart
    const addProductToCart = (item) => {
        dispatch(addToCart(item)); // Dispatch action to add item to cart
        // You can add additional functionality here, such as showing a notification
        alert(`${item.title} added to cart`);
    };

    // Filter products belonging to the "Fat Burner" category
    const fatBurnerProducts = product.filter(item => item.category === "Fat Burner");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
        <div className="container mx-auto px-5 py-8 md:py-16">
            {/* Heading for the category */}
            <h1 className="m:text-3xl text-4xl font-medium title-font mb-2 text-gray-900 text-center" style={{ color: mode === 'dark' ? 'white' : '' }}>Fat Burner</h1>
            <div className="flex justify-center">
                <div className="h-1 w-80 bg-pink-600 rounded mb-4"></div>
            </div>

            {/* Display products */}
            <div className="flex flex-wrap -m-4">
                {fatBurnerProducts.map((item, idx) => (
                    <div key={idx} className="p-4 md:w-1/4 drop-shadow-lg">
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                            <div className="flex justify-center cursor-pointer">
                                <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={item.imageUrl} alt="product" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>E-Bharat</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h1>
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{item.price}</p>
                                <div className="flex justify-center">
                                    <button type="button" onClick={() => addProductToCart(item)} className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </Layout>
    );
}

export default FatBurner;
