const animation = bodymovin.loadAnimation({
  container: document.getElementById("lottie"), 
  path: "animation/animation_v1_a00_4A90E2.json", 
  renderer: "svg", 
  loop: true, 
  autoplay: true, 
  name: "pagemaker" 
});

let menu = document.getElementById('menu')
let close = document.getElementById('menu-closed')
let logo = document.getElementById('logo')
let nav = document.getElementsByClassName('nav__list')[0]


const toggleNav = () => {
  if (logo.style.display === 'none' || logo.style.display === '' ) {
    logo.style.display = 'inline'
  } else {
    logo.style.display = 'none'
  }

};

menu.addEventListener("click", toggleNav);
