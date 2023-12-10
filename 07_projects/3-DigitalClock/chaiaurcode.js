const clock = document.getElementById('clock');
// document.querySelector('#clock');

//this will loop and repeat the thing you want every second you want

setInterval(function () {
  const date = new Date();
  //want to update in the document
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
