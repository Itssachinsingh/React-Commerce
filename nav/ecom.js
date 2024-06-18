$(".menu-btn").click(function () {
  $(".navbar .menu").toggleClass("active");
  // $(".menu-btn i").toggleClass("active")
});

$(".count-icon").click(function () {
  $(".item-cart").toggleClass("active");
});
$(".cart").click(function () {
    $(".item-cart").toggleClass("active");
  });

 
const product = [
  {
    id: 0,
    image:
      "https://static.vecteezy.com/system/resources/previews/005/642/308/original/fashion-female-black-shoes-realistic-isolated-white-background-free-vector.jpg",
    title: "Lady Sandal",
    price: 50,
  },
  {
    id: 1,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/9/JP/SJ/ED/38630640/casual-shoes-500x500.jpg",
    title: "White Shoes",
    price: 60,
  },
  {
    id: 2,
    image:
      "https://www.tracerindia.com/cdn/shop/files/preview_images/41a76e54fb53405cabfb18c7fbcfd071.thumbnail.0000000000.jpg?v=1689741724&width=1946",
    title: "Green Shoes",
    price: 230,
  },
  {
    id: 3,
    image:
      "https://images-cdn.ubuy.co.in/6359aecf9abb5d5b8d3eda43-ukko-running-shoes-men-shoes-sneakers.jpg",
    title: "Black Shoes",
    price: 100,
  },
  {
    id: 4,
    image:
      "https://cdn.staticans.com/image/tr:e-sharpen-01,h-1100,w-1300,cm-pad_resize/data/Regal-Shoes/23-june-2023/8214239_1.jpg",
    title: "Black Shoes",
    price: 50,
  },
  {
    id: 5,
    image:
      "https://www.campusshoes.com/cdn/shop/files/CITY-RIDE_5G-627_BLK_3.jpg?v=1705553490",
    title: "Grey Shoes",
    price: 60,
  },
  {
    id: 6,
    image:
      "https://img.joomcdn.net/92cd781f91e6ca86f3aa3fa0fdfba89c23857a5c_original.jpeg",
    title: "Red Shoes",
    price: 230,
  },
  {
    id: 7,
    image:
      "https://imagescdn.thecollective.in/img/app/product/7/727583-8070961.jpg",
    title: "Lady black Sandal",
    price: 100,
  },
  {
    id: 8,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/3/292961893/MD/WL/FO/182365761/women-casual-shallow-mouth-shoe-pointed-toe-shoe-working-flat-shoes.jpg",
    title: "Lady Sandal",
    price: 50,
  },
  {
    id: 9,
    image:
      "https://m.media-amazon.com/images/I/51CEaag1agL._AC_UY1000_.jpg",
    title: "Lady Pink Shoes",
    price: 60,
  },
  {
    id: 10,
    image:
      "https://images.axios.com/k5IzI7VsEegtEOmFyvWTD3tn554=/0x230:5673x3421/1920x1080/2024/02/18/1708262643268.jpg",
    title: "Golden Boots",
    price: 230,
  },
  {
    id: 11,
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
    title: "Nike Air",
    price: 100,
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.querySelector(".products").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='card'>
            <div class='img'>
                <img class='images' src=${image}></img>
            </div>
            <div class="title">${title}</div>
            <div class="box">
                <div class="price">$ ${price}.00</div>` +
      "<button class='btn' onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
        </div>`
    );
  })
  .join("");

var cart =[];

function addtocart(a){
   cart.push({...categories[a]});
   displaycart();
}
function delElement(a){
   cart.splice(a, 1);
   displaycart();
}

function displaycart(){
   let j = 0, total=0;
   document.getElementById("count-1").innerHTML=cart.length; 
   document.getElementById("count-2").innerHTML=cart.length;

   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = "$ "+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           var {image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = "$ "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
           );
       }).join('');

   }
   if(cart.length >0){
    document.getElementById("buy").innerHTML = "Buy Now";
   }

}
$("#buy").click(function(){
    cart.length = 0; // Clear the cart array
    displaycart()
    document.getElementById("buy").innerHTML = "Thanks for Shopping";
});
