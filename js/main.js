const darkModeToggle = document.getElementById('darkModeToggle');
const btnSlider = document.getElementById('btnSlider')

darkModeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');

  btnSlider.classList.toggle('slide');
  btnSlider.classList.toggle('.slideback');
});