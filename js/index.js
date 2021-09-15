const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const overlay = document.querySelector('.overlay');

const toggleMobMenu = function() {
  overlay.classList.toggle('active');

  if(overlay.classList.contains('active')) {
    overlay.classList.remove('slide-right');
    overlay.classList.add('slide-left');
  } else {
    overlay.classList.remove('slide-left');
    overlay.classList.add('slide-right');
  }
}

const toggleBurg = function() {
hamburger.classList.toggle('active');
toggleMobMenu();
}

hamburger.addEventListener('click', toggleBurg);
