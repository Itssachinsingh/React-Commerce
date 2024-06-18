import React from 'react'
import { Nav } from './Nav';
import { Carousel } from './Carousel';
import { Categories } from './Categories';
import { Products } from './products';
import { Reviews } from './reviews';
import { Footer } from './Footer';
export const Home = () => {
    return (
        <div>

            <Nav />

            <Carousel />

            <Products/>

            <Categories />

            <Reviews/>

            <Footer/>

        </div>
    )
}
