/* Looping through images */

function loopingImg(){
  for(let i = 1; i < 6; i++){
    let newImage = document.createElement('img');
    let image = 'images/pic'+ i + '.jpg' ;//replace the image name in each iteration
    newImage.setAttribute('src', image);
    document.querySelector('.thumb-bar').appendChild(newImage); //declare DOM here
  }
}


// If you have ES6 support you can replace your last line with:

function clickImg(){
  function myFunction(){
    var attribute = this.getAttribute('src'); //this points to element
    let displayedImage = document.querySelector('.displayed-img');
    displayedImage.setAttribute('src', attribute);
  }
  let elements = document.querySelectorAll('img');
  Array.from(elements).forEach(function(element) {
    element.addEventListener('click', myFunction);
  });
}

/* Wiring up the Darken/Lighten button */
function darkenImg(){
  let buttonNode = document.querySelector('.dark');
  let overlay = document.querySelector('.overlay');
  buttonNode.addEventListener('click', ()=>{
    if (buttonNode.getAttribute('class','dark')==='dark'){
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      buttonNode.setAttribute('class','light');
      buttonNode.textContent = 'lighten';
    }
    else{
      buttonNode.setAttribute('class','dark');
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      buttonNode.textContent = 'darken';
    }
    
  });
}

//As using load event, make sure every expressions are run inside the eventlistener
window.addEventListener('load', (event) => {
  loopingImg();
  clickImg();
  darkenImg();
});







//testing code below