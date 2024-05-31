
let count = 0;
//alert(count)
document.getElementById(`incre`).onclick=function(){
    //document.getElementById(`count`).value;
    document.getElementById(`count`).textContent=++count;
}
document.getElementById(`decre`).onclick=function(){
    //document.getElementById(`count`).value;
    document.getElementById(`count`).textContent=--count;
}
document.getElementById(`reset`).onclick=function(){
    //document.getElementById(`count`).value;
    document.getElementById(`count`).textContent=0;
    count=0;
}