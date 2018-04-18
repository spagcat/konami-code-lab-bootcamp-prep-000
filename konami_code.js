const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let i = 0;

function init() {
  function keyListener(e) {
    const key = partInt(e.detail || e.which || e.location);
    
    if(key === code[i]) {
      i++;
      if (i === code.length) {
        alert('Congrats!');
        i = 0;
      }
    } else {
      index = 0;
    }
  }
}