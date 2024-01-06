let btnEl = document.querySelector('.generate');
let serialEl = document.querySelector('.serial');

btnEl.onclick = function(){
  let chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let charsCount = 15;
  let randomSerial = "";
  for (let i = 0; i < charsCount; i++){
    randomSerial += chars[Math.floor(Math.random() * chars.length)];
  }
  serialEl.innerHTML = randomSerial;
};