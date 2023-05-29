const input = document.getElementById('txt');
const button = document.getElementById('btn');
const downloadLink = document.getElementById('download');

button.addEventListener('click', function(){
    const fileId = input.value.trim();
    if(fileId !== ''){
        const link = generateLink(fileId);
        downloadLink.href = link;
        downloadLink.style.display = 'block';
    }
});

function generateLink(fileId){
    const baseUrl = 'https://drive.google.com/uc?export=download&id=';
    const reqLink = baseUrl + fileId;
    return reqLink;
}