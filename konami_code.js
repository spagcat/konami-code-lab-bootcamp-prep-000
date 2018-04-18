const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const input = document.querySelector('input');
  input.addEventListener('keydown', function(e) {
    let index = 0;  
    keydown = parseInt(e.detail || e.which || e.location);
    if (keydown === code[index]) {
      index++;
      if (index === code.length) {
        alert ('Congratulations!');
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}