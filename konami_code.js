const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let i = 0;

function init() {
  const input = document.getElementById('input');
  input.addEventListener('keydown', function(e) {
    if(input === code[i]) {
      index++;
      if ( i === code.length) {
        alert('Congrats!');
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}