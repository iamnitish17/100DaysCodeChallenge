//buttons and counter text
const data = document.querySelector('#counter');
const button = document.querySelectorAll('.btn');

//initialize the count value
let count = 0;

button.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const changes = e.currentTarget.classList;
        //increment the count
        if(changes.contains('increases')){
            count++;
        }
        else if(changes.contains('decreases')){
            count--;
        }
        else{
            count = 0;
        }

        //changing color
        if(count>0){
            data.style.color = 'green';
        }
        if(count<0){
            data.style.color = 'red';
        }
        if(count==0){
            data.style.color = 'grey';
        }

        data.textContent=count;
    })
})