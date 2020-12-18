let displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* Looping through images */
window.addEventListener('load', (event) => {
  for(let i = 1; i < 6; i++){
    let item = document.createElement('img');
    let image = 'images/pic'+ i+ '.jpg' ;
    item.src = image;
    let textnode = document.createTextNode("");//you have to create empty node
    item.appendChild(textnode);
    document.querySelector('.thumb-bar').appendChild(item);
  }
});



const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */


//testing code
function myFunction() {
    for(let i = 1; i < 6; i++){
      let item = document.createElement('img');
      let image = 'images/pic'+ i+ '.jpg' ;
      item.src = image;
      let textnode = document.createTextNode("");//you have to create empty node
      item.appendChild(textnode);
      document.getElementById('test').appendChild(item);
    }
  }