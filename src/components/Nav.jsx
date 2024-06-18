import React, {useState, useContext} from 'react';
import logo from '../Images/logo.png'
import CartContext from '../context/CartContext';
import { Carts } from './Carts';

export const Nav = () => {

    const {items} = useContext(CartContext);
    const count = items.length;

    const [active, setActive] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setActive(prevActive => !prevActive); // Toggle active state
    };

    return (
        <div>
            <header>
                <nav>
                    <div className="menu">
                        <ul>
                            <div className="logo"><img className="brand" src={logo} alt=""/></div>
                            <li><a href="">Home</a></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Makeup</a></li>
                            <li><a href="">Skincare</a></li>
                            <li><a href="">Body</a></li>
                            <li><a href="">Blog</a></li>
                            <div className="shortcuts">
                                <a href=""><i className="fa-solid   fa-2xl fa-magnifying-glass"></i></a>
                                <a href=""><i className="fa-regular fa-2xl fa-heart"></i></a>
                                <a href=""><i className="fa-solid   fa-2xl fa-bag-shopping" onClick={handleClick}></i><p className='count' onClick={handleClick}>{count>0?  count: 0}</p></a>
                            </div>
                        </ul>
                    </div>
                </nav>
            </header>
            <Carts active={active} />
        </div>
        
  )
}
