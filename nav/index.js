// const scrollContainer = document.querySelector('.products-scroll-container');
// const dotsContainer = document.querySelector('.carousel-dots');

// // Calculate the total number of product cards
// const totalCards = document.querySelectorAll('.products_cards').length;

// // Create dots dynamically
// for (let i = 0; i < totalCards; i++) {
//   const dot = document.createElement('div');
//   dot.classList.add('dot');
//   dotsContainer.appendChild(dot);
// }

// // Add event listener to each dot
// const dots = document.querySelectorAll('.dot');
// dots.forEach((dot, index) => {
//   dot.addEventListener('click', () => {
//     scrollContainer.style.transform = `translateX(-${index * 100}%)`;
//     setActiveDot(index);
//   });
// });

// // Set the initial active dot
// setActiveDot(0);

// function setActiveDot(index) {
//   dots.forEach((dot, i) => {
//     dot.classList.toggle('active', i === index);
//   });
// }
