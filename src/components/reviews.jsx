import React from 'react';
import review_1 from '../Images/review_1.jpg';
import review_2 from '../Images/review_2.jpg';


export const Reviews = () => {
  return (
    <div>
      <section className='reviews'>

        <div id="carouselExample" className="carousel slide">
          <p style={{fontSize: "1.2rem", color:"#82CA9C"}}> CUSTOMER REVIEWS</p>
          <div className="carousel-inner ">
            <div className="carousel-item active ">
              <p className='review'>“Love this mask! It is great for acne <br />prone skin. It completely dried up the <br />few pimples i had and it smelled really <br />good and natural too”</p>
              <img src={review_1} className="d-block w-auto" alt="..."/>
            </div>
            <div className="carousel-item ">
            <p className='review'>“Love this mask! It is great for acne <br />prone skin. It completely dried up the <br />few pimples i had and it smelled really <br />good and natural too”</p>
              <img src={review_2} className="d-block w-auto" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </section>
    </div>
  )
}
