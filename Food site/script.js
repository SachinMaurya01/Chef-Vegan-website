window.addeventListner('scroll',function(){
    const header=document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
  });

  function toggleMenu(){
    const menuToggle= document.querySelector('.menuToggle');
    const navbar= document.querySelector('.navbar');
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
  }