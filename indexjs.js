const rdot = document.getElementById("rdot");
const secsel = document.getElementById("secsel"),cont=document.getElementById("cont");
const incart = document.getElementById("innercont"),totalPrice = document.getElementById("totalPrice");
const lungo = document.getElementById("lungo"),flatwhite=document.getElementById("flatwhite");
const affogato = document.getElementById("affogato"),amaricano=document.getElementById("amaricano");
const latte = document.getElementById("latte"),cappuccino=document.getElementById("cappuccino");


let arr = [];
let arr1 = [];
let totalprice = 0;

let coffee = [
    {id:"Lungo", price:37, stock:true},
    {id:"Flat White", price:23, stock:true},
    {id:"Affogato", price:26, stock:true},
    {id:"Amaricano", price:30, stock:true},
    {id:"Latte", price:33, stock:true},
    {id:"Cappuccino", price:34, stock:true},
    {id:"not instock", stock: false, pattofile:"https://rlv.zcache.com/error_404_coffee_not_found_funny_mug-r903e5cb138fe47569dbdf40a39b4c818_kz92h_166.jpg?rlvnet=1"}
]
function togglecart(){
    if(cont.style.display === "none"){
        cont.style.display = "flex";
    } else{
        cont.style.display = "none";
    }
}

//onload = hidecart();
function coffeefunc(id){
    if(arr.length<10){
        arr.push(coffee[id].id +" R"+coffee[id].price);
        console.log(arr);
        
            const div = document.createElement("div");
             div.classList.add("cartitem");
             const img = document.createElement("img");
             img.src = coffee[id].pattofile || "coffee pic.png";
             img.style.width = "50px";
             div.append(img);
             const textblock = document.createElement("span");
             textblock.classList.add("textblock");
             textblock.textContent = coffee[id].id +" R"+coffee[id].price;
             div.append(textblock);
            const btn = document.createElement("button");
            btn.classList.add("removebtn");
            btn.onclick = function() {
                div.remove();
                arr.splice(arr.indexOf(coffee[id].id +" R"+coffee[id].price), 1);
                arr1[0] -= coffee[id].price;
                totalPrice.innerText = "Total: R "+arr1[0];
                rdot.innerText = arr.length;
            };
            btn.textContent = "remove this item"
            div.append(btn);
            incart.append(div);
        
    if(arr1.length <1){
        arr1.push(coffee[id].price);
        totalPrice.innerText = arr1[0];
        console.log(totalPrice.innerText);
    }else{
        arr1[0] += coffee[id].price;
        totalPrice.innerText = "Total: R"+arr1[0];
        console.log(arr1);
        console.log(totalPrice.innerText);
    };
    rdot.innerText = arr.length;
    
    } else{alert("Your Cart is full")}
} 

function removebtn(){
    
    
}
document.querySelectorAll('.removebtn').forEach(function(el) {
    el.addEventListener('click', function() {
      try {
        // Safely remove the clicked element
        //this.remove(); // Modern browsers
        // Alternative for older browsers:
        console.log("Attempting to remove element:", this);
         this.parentNode.removeChild(this);
      } catch (err) {
        console.error("Error removing element:", err);
      }
    });
  });