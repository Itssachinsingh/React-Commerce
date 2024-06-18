import React from 'react';
import img1 from '../Images/grid-1.jpg';
import img2 from '../Images/grid-2.jpg';
import img3 from '../Images/grid-3.jpg';
import img4 from '../Images/grid-4.jpg';
import img5 from '../Images/grid-5.jpg';

export const Categories = () => {
    return (
        <div>

            <section className="featured">
                <div className="feat">
                    <h1>Featured </h1>
                </div>
                <div className="img_grids">
                    <div className="grids">
                        <a href=""><img src={img1} alt=""/><a type="button" href="">dsfsdfsdfhi</a></a>
                    </div>
                    <div className="grids">
                        <a href=""><img src={img3} alt=""/></a>
                    </div>
                    <div className="grids">
                        <a href=""><img src={img4} alt=""/></a>
                    </div>
                    <div className="grids">
                        <a href=""><img src={img2} alt=""/></a>
                    </div>
                    <div className="grids">
                        <a href=""><img src={img5} alt=""/></a>
                    </div>

                </div>
            </section>

        </div>
    )
}
