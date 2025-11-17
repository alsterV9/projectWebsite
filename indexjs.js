const rdot = document.getElementById("rdot");

const lungo = document.getElementById("lungo"),flatwhite=document.getElementById("flatwhite");
const affogato = document.getElementById("affogato"),amaricano=document.getElementById("amaricano");
const latte = document.getElementById("latte"),cupicino=document.getElementById("cupicino");

let arr = [];

lungo.addEventListener('click', orderer);

let coffee = [
    {"id": "Lungo", "price":13.90},
    {"id":"Flat White", "price":12.05},
    {"id":"Affogato", "price":13.20},
    {"id":"Amaricano", "price":14.10},
    {"id":"Latte", "price":15.50},
    {"id":"Cupicino", "price":13.90}
]

function orderer(e){
    arr.push('item');
    rdot.innerText = arr.length;
    console.log(arr);
    console.log(e.target.id)
}