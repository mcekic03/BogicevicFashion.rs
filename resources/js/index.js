'use strict';

localStorage.removeItem('homepodvrsta');
window.addEventListener('click', function(e){
 
    if(e.target.classList.contains('linkstrana')){
      
        localStorage.setItem('homepodvrsta', JSON.stringify(e.target.textContent));
      
      }
});
const godina = document.querySelector('.yeardinamic');
const getsetYear = function(){
  const d = new Date();
  godina.textContent = d.getFullYear();
}
getsetYear();
const instagram = document.querySelector('.instagramlink');
const facebook = document.querySelector('.facebooklink');
const twiter = document.querySelector('.twiterlink');
instagram.addEventListener('click', function(e){
  window.open('https://www.google.com')
});
facebook.addEventListener('click', function(e){
  window.open('https://www.google.com')
});
twiter.addEventListener('click', function(e){
  window.open('https://www.google.com')
});
  const linkstrana = document.querySelector('.linkstrana');
window.addEventListener('click', function(e){
 
  

  if(e.target.parentElement.classList.contains('s')){
    let brzapretraga = e.target.parentElement.children[0].children[0].textContent.trim()
    sessionStorage.removeItem('brzapretraga');
    sessionStorage.setItem('brzapretraga',  JSON.stringify(brzapretraga));
    linkstrana.click();
  }
  

});
const slike = document.querySelector('.galerija').children
let index = 0;
function slideshow(){
  if(index !=0){
    slike[index-1].classList.add('hidden');
  }
  else{
    slike[slike.length-1].classList.add('hidden');
  }

  slike[index].classList.remove('hidden');
  if (index == slike.length-1) {
    index = 0;
    
  } else {
    index++;
  }

  setTimeout(slideshow, 2000);
}
window.onload = slideshow();
    
  
