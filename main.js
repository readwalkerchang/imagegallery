let displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
let attribute = displayedImage.getAttribute("src");
for(let i = 0; i < 6; i++){
  let image = 'images/pic'+ toString(i)+ '.jpg' ;
  document.querySelector('.displayed-img').src = image;
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */


//testing code
function myFunction() {
  for(let i = 1; i < 6; i++){
    let image = 'images/pic'+ i+ '.jpg' ;
    document.querySelector('.displayed-img').src = image;
  }
  }