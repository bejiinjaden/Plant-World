let main_products = [

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
   
   
   
   let main_producthtml = "";
   
   main_products.forEach((element) =>{
   
   main_producthtml += `<div class="product">
   
                  
   <img src="${element.image}" class="plant_img">
   
   
   <div class="plant_name">
   <p>I Dont Know</p>
   </div>
   
   <div class="plant_price">
   <p>Price : $69420</p>
   </div>
   
   
   </div>`;
   
   
   
   });
   
   document.querySelector('.main_products').innerHTML = main_producthtml;
   