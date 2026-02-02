const rdot = document.getElementById("rdot");
const secsel = document.getElementById("secsel"),cont=document.getElementById("cont");
const incart = document.getElementById("innercont");
const lungo = document.getElementById("lungo"),flatwhite=document.getElementById("flatwhite");
const affogato = document.getElementById("affogato"),amaricano=document.getElementById("amaricano");
const latte = document.getElementById("latte"),cappuccino=document.getElementById("cappuccino");


let arr = [];
let arr1 = [];
let totalprice = 0;

let coffee = [
    {id:"Lungo", price:13, stock:true},
    {id:"Flat White", price:12, stock:true},
    {id:"Affogato", price:13, stock:true},
    {id:"Amaricano", price:14, stock:true},
    {id:"Latte", price:15, stock:true},
    {id:"Cappuccino", price:13, stock:true},
    {id:"not instock", stock: false, pattofile:"https://rlv.zcache.com/error_404_coffee_not_found_funny_mug-r903e5cb138fe47569dbdf40a39b4c818_kz92h_166.jpg?rlvnet=1"}
]
function togglecart(){
    if(cont.style.display === "none"){
        cont.style.display = "flex";
    } else{
        cont.style.display = "none";
    }
}

onload = hidecart();
function coffeefunc(id){
    if(arr.length<10){
        arr.push(coffee[id].id +" R"+coffee[id].price);
        console.log(arr);
        
        
            const btn = document.createElement("button");
            btn.textContent = arr[arr.length -1];
            incart.append(btn);
        
    if(arr1.length <1){
        arr1.push(coffee[id].price);
    }else{
        arr1[0] += coffee[id].price;
    };
    rdot.innerText = arr.length;
    
    } else{alert("Your Cart is full")}
} 

function removebtn(){
    if(arr.length > 0){
        arr.pop();
        arr1.pop();
        rdot.innerText = arr.length;
        if(incart.hasChildNodes){
        incart.removeChild(incart.lastChild);
    }
    }
    
}