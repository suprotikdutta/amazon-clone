import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src="https://m.media-amazon.com/images/I/81UwfObBWFL.jpg" alt="" />

                <div className='home__row'>
                    <Product
                        id="25881733"
                        title='The Lean Startup: How Todays Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses'
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={4}
                    />
                    <Product
                        id="13247852"
                        title='AmazonBasics L6LUC021-CS-R USB Type-C to USB 3.1 Gen1 Female Adapter - Black '
                        price={8.09}
                        image="https://m.media-amazon.com/images/I/51-IPZ2NDOL._AC_SL1273_.jpg"
                        rating={5}
                    />

                </div>
                <div className='home__row'>
                    <Product
                        id="48579526"
                        title='Amazon Essentials Womens Studio Terry Relaxed-Fit Jogger '
                        price={19.90}
                        image="https://m.media-amazon.com/images/I/71GyRD1jxpL._AC_UX342_.jpg"
                        rating={4}
                    />

                    <Product
                        id="54812694"
                        title='VTech KidiZoom Smartwatch DX2, Black (Amazon Exclusive) '
                        price={56.56}
                        image="https://m.media-amazon.com/images/I/71KYDouQCEL._AC_SL1500_.jpg"
                        rating={5}
                    />

                    <Product
                        id="87588484485"
                        title='HP Chromebook 14 Laptop '
                        price={269.00}
                        image="https://m.media-amazon.com/images/I/81b6IIclRfS._AC_SL1500_.jpg"
                        rating={4}
                    />


                </div>
                <div className='home__row'>
                    <Product
                        id="45458452"
                        title='Sony X950H 85-inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model '
                        price={799.99}
                        image="https://m.media-amazon.com/images/I/61k5CVI0zYL._AC_SL1080_.jpg"
                        rating={4}
                    />

                </div>
            </div>
        </div>
    )
}

export default Home
