const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');

  darkModeToggle.classList.toggle('slide');
});