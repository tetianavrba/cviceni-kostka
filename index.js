let viditelneCislo = 1;
const kostka = document.querySelector('.dice');
const pootocKostkou = () => {
  viditelneCislo = viditelneCislo + 1;
  if (viditelneCislo === 7) {
    viditelneCislo = 1;
  }
  kostka.src = `img/side${viditelneCislo}.svg`;
};
document.addEventListener('keydown', pootocKostkou);
