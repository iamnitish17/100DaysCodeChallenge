//fetching data and the button
const data = document.querySelector('#content');

function grn(){
    var random = Math.floor(Math.random()*100)+1;
    data.innerHTML = random;
}
function reset(){
    data.innerHTML = 0;
}