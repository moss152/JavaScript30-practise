window.addEventListener('click', function (e) {
    const id = e.target.id;
    const box = document.querySelector(`#${id}`);
box.classList.add('viewing');
const audio = document.querySelector(`audio[id='${id}']`);
audio.currentTime = 0;
   audio.play();
   setTimeout(function () {
box.classList.remove('viewing');
   }, 500)
});








  
