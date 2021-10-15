import {range} from "./products.js";

let pruductPageGrid = document.querySelector(".grid");

//legge til prdukter til siden og synelig
for (let i=0; i < range.length; i++){

let product =document.createElement ("div");
pruductPageGrid.appendChild(product);

let img = document.createElement("img");
img.className = "product-img";
img.src = range[i].image;
product.appendChild(img);

let h1= document.createElement ("h1");
h1.className = "product-name";
h1.innerHTML = range [i].name;
product.appendChild(h1);

let p= document.createElement ("p");
p.className = "product-price";
p.innerHTML = "$" + range [i].price;
product.appendChild(p);

let button= document.createElement ("button");
button.className = "add-to-cart";
button.innerHTML = "Add to cart";
product.appendChild(button);
button.id = range[i].id
};

//cart
let cartContainer = document.querySelector("#cart");
let shoppingCart =[];

function addToArray (e){

    for (let i = 0; i < range.length; i++){

        if (range[i].id === e.target.id){
            shoppingCart.push(range[i]);
        }
    };

//legge till items til cart og gjøres synlig under cart
addToCart();
}
function addToCart(){

    let totalPrice = 0;

    cartContainer.innerHTML="";

    shoppingCart.forEach((e,index) =>{

        let cartColumn1 = document.createElement("div");
        cartColumn1.className ="cart-collumn1";
        cartContainer.appendChild(cartColumn1);

        let cartColumn2 = document.createElement("div");
        cartColumn2.className= "cart-column2";
        cartContainer.appendChild(cartColumn2);

        let cartProductName = document.createElement("div");
        cartProductName.className="cart-name";
        cartProductName.innerHTML=e.name;
        cartColumn2.appendChild(cartProductName);
    
        let cartProductPrice = document.createElement("p");
        cartProductPrice.className="cart-price";
        cartProductPrice.innerHTML= "$" + e.price;
        cartColumn2.appendChild(cartProductPrice);

        let removeBtn= document.createElement ("button");
        removeBtn.className = "removebtn";
        removeBtn.dataset.remove = index;
        removeBtn.innerHTML = "X";
        cartContainer.appendChild(removeBtn); 
        

        removeBtn.addEventListener('click', removeItem);
        
        
        totalPrice += e.price 
        
    });
        //viser total prisen for produkter
        let cartTotalPrice = document.createElement("p");
        cartTotalPrice.className="total-price";
        cartTotalPrice.innerHTML= "Total" + "=" + "$" + totalPrice;
        cartContainer.appendChild(cartTotalPrice);

}
//totalsum 
for (let i = 0; i < cartContainer.length; i++) {
    totalPrice += cartContainer[i].price;
    totalOutput.innerHTML = totalPrice + '$';
}
//show & hide knapp
let cartBtn = document.getElementById("cartbtn");

function showCart() {
    if (cartContainer.style.display === "none") {
      cartContainer.style.display = "block";
    } else {
      cartContainer.style.display = "none";
    } 
  };

cartBtn.addEventListener('click', showCart);
 
//fjerne items - en av gangen 
function removeItem(item) { 

    shoppingCart.splice(item.target.dataset.remove,1)
    addToCart()
    
    console.log(item.target.dataset.remove);
}

let product1Btn = document.querySelector("#product-1");
let product2Btn = document.querySelector("#product-2");
let product3Btn = document.querySelector("#product-3");
let product4Btn = document.querySelector("#product-4");
let product5Btn = document.querySelector("#product-5");

product1Btn.addEventListener('click', addToArray);
product2Btn.addEventListener('click', addToArray);
product3Btn.addEventListener('click', addToArray);
product4Btn.addEventListener('click', addToArray);
product5Btn.addEventListener('click', addToArray);


