'use strict'

let burgerLines = document.querySelectorAll('.burger__line');
let burgerCheck = document.getElementById('toggle');

/**/

function burgerStatusCheck() {
  burgerLines[0].style.transform = burgerCheck.checked === true
    ? 'rotate(45deg)'
    : 'rotate(0deg)';
  burgerLines[0].style.position = 'relative';
  burgerLines[0].style.top = burgerCheck.checked === true ? '8px' : '0px';

  burgerLines[1].style.opacity = burgerCheck.checked === true ? '0' : '1';

  burgerLines[2].style.transform = burgerCheck.checked === true
    ? 'rotate(-45deg)'
    : 'rotate(0deg)';
  burgerLines[2].style.position = 'relative';
  burgerLines[2].style.top = burgerCheck.checked === true ? '-8px' : '0px';
}

/**/

burgerCheck.addEventListener('change', () => {
  burgerStatusCheck();
})
