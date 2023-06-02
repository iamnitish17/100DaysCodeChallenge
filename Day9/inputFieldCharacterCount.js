const btn = document.getElementById("btn");

btn.addEventListener('click',function(){
    var text = document.getElementById('txt');
    var count = text.value.length;

    var result = document.getElementById("charCount");
    result.innerHTML = "Characters : " + count;

});