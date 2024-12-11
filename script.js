const date = new Date();
date.setTime(date.getTime() + (3 * 24 * 60 * 60 * 1000));
const expires = "expires=" + date.toUTCString();
document.cookie = "authorized" + "=" + "no" + ";" + expires + ";path=/world";

document.addEventListener('keydown', (event) => {
  const sequence = ['g', 'a', 'm', 'e'];
  let currentIndex = 0;
  document.addEventListener('keydown', (event) => {
    if (event.key === sequence[currentIndex]) {
      currentIndex++;
      if (currentIndex === sequence.length) {
        console.log('You are authorized');
        currentIndex = 0;
        const date = new Date();
        date.setTime(date.getTime() + (3 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = "authorized" + "=" + "yes" + ";" + expires + ";path=/world";
        window.location.href = "https://praelia.github.io/world";
      }
    } else {
      currentIndex = 0; 
    }
  });
});
