function countVowel(){
    var data = document.getElementById('txt').value.toLowerCase();

    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelCount = 0;
     
    

    for(var idx=0;idx<data.length;idx++){
        if(vowels.indexOf(data[idx]) !== -1){
            vowelCount++;
        }
    }
    var ans = document.getElementById('result');
    ans.innerHTML = "Number of Vowels is " + vowelCount;
}