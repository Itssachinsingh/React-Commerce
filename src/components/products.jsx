// eslint-disable-next-line 
import React, { useState, useEffect, useContext } from 'react';
import productData from './productsData';
import CartContext from '../context/CartContext';

export const Products = () => {

    const [cartItems, setCartItems] = useState([]);
    const {setItems} = useContext(CartContext);

    const handleSubmit = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
        console.log(cartItems);
      };
      
      useEffect(() => {
        setItems(cartItems)
        // console.log('Updated cart items:', cartItems);
      }, [cartItems]); // Run this effect whenever cartItems changes
    
    return (
        <div>

            <section className="products">
                <div className="categories_top">
                    <div className="product_title">Gotta Have It</div>
                    <div className="categories">
                        <ul>
                            <li><a href="#">New</a></li>
                            <li><a href="#">Trending</a></li>
                            <li><a href="#">Sale</a></li>
                        </ul>
                    </div>
                </div>
                <div className="products_container">
                {productData.map((product) =>(

                    <div className="products_cards" key={product.id}>
                        <div className="product_img"><img src={product.image} alt={product.title} /></div>
                        <div className="product_name">{product.title} </div>
                        <div className="product_price">${product.price}</div>
                        <div className="button_container_1">
                            <button onClick={()=> handleSubmit(product)}>Cart</button>
                        </div>
                    </div>

                ))}
                    
                </div>
            </section>

        </div>
    )
}
