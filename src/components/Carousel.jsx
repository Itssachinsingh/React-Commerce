import React from 'react'

export const Carousel = () => {
  return (
    <div> 

      <div className="content">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://nov-karl-6.myshopify.com/cdn/shop/files/s-1_2048x.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Spring Clean <br/> Your Beauty Routine</h5>
                  <p>Excepteur sint occaecat cupidatat non proident.</p>
                  <button className="carousel-btn ">Shop the Essentials</button>
                </div>
            </div>
            <div className="carousel-item">
              <img src="https://nov-karl-6.myshopify.com/cdn/shop/files/s-2_2048x.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block carousel_2">
                  <h5>Flawless Lumière Foundation</h5>
                  <p>Excepteur sint occaecat cupidatat non proident.</p>
                  <button className="carousel-btn btn_2">Shop the Essentials</button>
                </div>
            </div>
            <div className="carousel-item">
              <img src="https://nov-karl-6.myshopify.com/cdn/shop/files/s-3_2048x.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Not only was it an good price,it looks elegant</h5>
                  <p>Excepteur sint occaecat cupidatat non proident.</p>
                  <button className="carousel-btn ">Shop the Essentials</button>
                </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      

      <div className="container_2"> 
          <div className="both">
            <div className="ingredients">
              <p>INGREDIENTS</p>
              <h1>The Special Formula</h1>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div className="cards">
              <div className="ingredients_img"><img src="https://nov-karl-6.myshopify.com/cdn/shop/files/img-2_260x.jpg?v=1665715276" alt=""/><p className="ingredients_text">Green Teas</p></div>
              <div className="ingredients_img"><img src="https://nov-karl-6.myshopify.com/cdn/shop/files/img-3_260x.jpg?v=1665715276" alt=""/><p className="ingredients_text">Lavender</p></div>
              <div className="ingredients_img"><img src="https://nov-karl-6.myshopify.com/cdn/shop/files/img-4_260x.jpg?v=1665715276" alt=""/><p className="ingredients_text">Vera</p></div>
              <div className="ingredients_img"><img src="https://nov-karl-6.myshopify.com/cdn/shop/files/img-5_260x.jpg?v=1665715319" alt=""/><p className="ingredients_text">Mint Oil</p></div>
            </div>
          </div>
        </div>

    </div>
  )
}
