const navSlide = () => {
  const burger=document.querySelector('.burger');
  const nav=document.querySelector('.nav-links');
  const navLinks=document.querySelectorAll('.nav-links th')

  burger.addEventListener('click', () => {
    // toggle nav
    nav.classList.toggle('nav-active');
    // animate lines
    navLinks.forEach((link, index) => {
      if (link.style.animation)
      {
        link.style.animation = '';
      }
      else
      {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.75}s`;
      }
    });
    burger.classList.toggle('toggle');
  });
}

const buttonChange = () => {
  var btnTextsig = document.getElementById('sigbtn')
  var btnTextlog = document.getElementById('logbtn')

  btnsig.onclick = function(){
    btnsig.classList.add("sig-active");
  }
  btnlog.onclick = function(){
    btnlog.classList.add("log-active"); 
  }
}


const login = () => {
  document.querySelector("#btnlog").addEventListener("click",function(){
    document.querySelector(".nav").classList.add("active");
    document.querySelector(".popup").classList.add("active");
  });
  document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".nav").classList.remove("active");
    document.querySelector(".popup").classList.remove("active");
    btnlog.classList.remove("log-active");
  });
}


navSlide();
buttonChange();
login();