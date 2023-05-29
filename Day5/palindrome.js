function check() {
  var input = document.getElementById('txt').value.toLowerCase().replace(/[^a-z0-9]/g, '');
  var reverse = input.split('').reverse().join('');

  if (input === reverse) {
    document.getElementById('result').innerHTML = "'" + input + "' is a palindrome.";
  } else {
    document.getElementById('result').innerHTML = "'" + input + "' is not a palindrome.";
  }
}
