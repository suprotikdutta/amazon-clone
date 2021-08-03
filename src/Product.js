import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    // console.log('Thisisthebasket', basket)
    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating

            },

        });
    };

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {/* {Array(rating)
                        .fill()
                        .map((_, i) => {
                            <p>boka</p>
                        })} */}

                    {/* {'⭐️'.repeat(rating)} this also worked for displaying the rating. 
Then you space the stars with letter-spacing css */}

                    {'⭐️'.repeat(rating)}




                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket}>
                Add to Cart
            </button>

        </div>
    )
}

export default Product
