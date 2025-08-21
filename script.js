document.addEventListener('keydown', (event) => {
  const sequence = ['g', 'a', 'm', 'e'];
  let currentIndex = 0;
  document.addEventListener('keydown', (event) => {
    if (event.key === sequence[currentIndex]) {
      currentIndex++;
      if (currentIndex === sequence.length) {
        console.log('You are authorized');
        currentIndex = 0;
        document.getElementById('frame').removeAttribute("hidden");
        element.removeEventListener('keydown');
      }
    } else {
      currentIndex = 0; 
    }
  });
});
