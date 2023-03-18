'use strict';
localStorage.removeItem('homepodvrsta');
window.addEventListener('click', function(e){
 
    if(e.target.classList.contains('linkstrana')){
      
        localStorage.setItem('homepodvrsta', JSON.stringify(e.target.textContent));
      
      }
});

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
  
  
  
    
  
