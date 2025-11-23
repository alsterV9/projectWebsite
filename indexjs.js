const rdot = document.getElementById("rdot");
const secsel = document.getElementById("secsel");

const lungo = document.getElementById("lungo"),flatwhite=document.getElementById("flatwhite");
const affogato = document.getElementById("affogato"),amaricano=document.getElementById("amaricano");
const latte = document.getElementById("latte"),cupicino=document.getElementById("cupicino");

let arr = [];

let coffee = [
    {id:"Lungo", price:13.90, stock:true},
    {id:"Flat White", price:12.05, stock:true},
    {id:"Affogato", price:13.20, stock:true},
    {id:"Amaricano", price:14.10, stock:true},
    {id:"Latte", price:15.50 , stock:true},
    {id:"Cupicino", price:13.90, stock:true},
    {id:"not instock", price:"out of stock"}
]

secsel.addEventListener('click', (e)=>{
    arr.push('item');
    rdot.innerText = arr.length;
    console.log(arr);
    console.log(e)
});

console.log(coffee[2].id);