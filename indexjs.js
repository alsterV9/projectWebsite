

const rdot = document.getElementById("rdot");
const secsel = document.getElementById("secsel");
const incart = document.getElementById("incart");
const lungo = document.getElementById("lungo"),flatwhite=document.getElementById("flatwhite");
const affogato = document.getElementById("affogato"),amaricano=document.getElementById("amaricano");
const latte = document.getElementById("latte"),cupicino=document.getElementById("cupicino");


function buildcart(){
    /*const cartcont = document.createElement('div'); */
    const btn = document.createElement('button');
    btn.classList.add('cartbtn');
    btn.innerText = "clear cart items";
    incart.appendChild(btn);

}


let arr = [];
 

let arr1 = [];
let totalprice = 0;

let coffee = [
    {id:"Lungo", price:13, stock:true},
    {id:"Flat White", price:12, stock:true},
    {id:"Affogato", price:13, stock:true},
    {id:"Amaricano", price:14, stock:true},
    {id:"Latte", price:15, stock:true},
    {id:"Cupocino", price:13, stock:true},
    {id:"not instock", stock: false}
]

function coffeefunc(id){
    if(arr.length<10){
        arr.push(coffee[id].id);
    if(arr1.length <1){
        arr1.push(coffee[id].price);
    }else{
        arr1[0] += coffee[id].price;
    };
    rdot.innerText = arr.length;
    console.log(coffee[id].id +" "+coffee[id].price);
    
    thap();
    buildcart();
       
    
    } else{alert("Your Cart is full")}
} 
/*
create array -> takes id plus price -> function that check if there's item >1 if true 
take total of same= j, j x price of item
*/
function thap(){
    totalprice = arr1[0];
    incart.innerText=totalprice;
    
    
}