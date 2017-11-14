/* jshint browser: true */
/*jshint esnext: true */ //'spread/rest operator' is only available in ES6 (use esnext option). - W119 - linea 7

var mytable  = document.getElementById('table');
console.log(mytable);
// Convierte a un array
var tdArr = [...document.getElementsByTagName('td')];

document.getElementById('reset').addEventListener('click', reset);
function reset() {
    for (var i=0; i<tdArr.length; i++){
        tdArr[i].classList.remove('paint-cell');
        tdArr[i].innerHTML = '';
    }
}