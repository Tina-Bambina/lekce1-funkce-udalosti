// tady je místo pro náš program

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;

}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert('Gratulace, právě jsi spustila tuto funkci!');
  console.log('Gratulace, právě jsi spustila tuto funkci!');
  
  let squa = document.querySelector('.ctverecek');
  squa.textContent = 'Gratulace, právě jsi spustila tuto funkci!'
  squa.style.width = '400px';
}

function zmenBarvu()
{
  document.querySelector('.ctverecek').style.backgroundColor = 'green';
  console.log('Zmenili jsme barvu ctverecku');
}

function zobrazVysledek()
{
  document.querySelector("#vysledek").innerHTML = secti(4,5);
  console.log('Nas vysledek: ' + secti(4,5))
}
