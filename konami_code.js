const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;
  function keyListener('keydown', (e) {
    const key = parseInt(e.detail || e.which || e.location);
    
    if(key === code[index]) {
      index++;
      if (index === code.length - 1) {
        alert('Congrats!');
        index = 0;
      }
    } else {
      index = 0;
    }
  } )
}