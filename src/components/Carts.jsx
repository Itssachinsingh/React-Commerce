import React, { useContext, useState } from 'react';
import CartContext from '../context/CartContext';

export const Carts = ({active}) => {
    const { items, setItems } = useContext(CartContext);

  const deleteItems = (index) =>{
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);

  }

  const buy = () =>{
    setItems([]);
    
  }
    let total = 0; // Initialize total variable

    return (
        <div className={active ? "item-cart active" : "item-cart"} >
            {items.length === 0 ? ( // If cart is empty
                <>
                    <div className="sidebar">
                        <div className="head"><p>My Cart</p></div>
                        <div id="cartItem">Your cart is empty</div>
                        <div className="foot">
                            <h3>Total</h3>
                            <h2 id="total">$ 0.00</h2>
                        </div>
                    </div>
                </>
            ) : ( // If cart has items
                <>
                    {items.map((item, index) => {
                        total += item.price; // Update total
                        return (
                            <div key={index} className='cart-item'>
                                <div className='row-img'>
                                    <img className='rowimg' src={item.image} alt={item.title} />
                                </div>
                                <p style={{fontSize: '12px'}}>{item.title}</p>
                                <h2 style={{fontSize: '15px'}}>$ {item.price}.00</h2>
                                <i className='fa-solid fa-trash' onClick={()=> deleteItems(index)}></i>
                            </div>
                        );
                    })}
                    <div className="foot">
                        <h3>Total</h3>
                        <h2 id="total">$ {total.toFixed(2)}</h2>
                    </div>

                    <button className='buy' onClick={buy}>Buy </button>
                </>
            )}
        </div>
    );
};
