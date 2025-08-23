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
document.getElementById('frame').addEventListener('load', function () {
    const iframeDocument = this.contentDocument || this.contentWindow.document;
    iframeDocument.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' || event.key === 'Esc')  {}
    });
});
window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'escapePressed') {
    document.getElementById('frame').setAttribute("hidden", true);
  }
});
