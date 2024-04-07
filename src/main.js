let products = [

 {
    name:"I Dont Know",

    image:"Images/plant.png",

    price : 69420

 },

 {
    name:"I Dont Know",

    image:"Images/plant.png",

    price : 69420

 },

 {
    name:"I Dont Know",

    image:"Images/plant.png",

    price : 69420

 },

 {
    name:"I Dont Know",

    image:"Images/plant.png",

    price : 69420

 },

 

];



let producthtml = "";

products.forEach((element) =>{

producthtml+= `<div class="product">

               
<img src="${element.image}" class="plant_img">


<div class="plant_name">
<p>I Dont Know</p>
</div>

<div class="plant_price">
<p>Price : $69420</p>
</div>


</div>`



});

document.querySelector('.plants_display').innerHTML = producthtml;


