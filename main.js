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
    var attribute = this.getAttribute("src");
    let displayedImage = document.querySelector('.displayed-img');
    displayedImage.setAttribute('src', attribute);
  }
  var elements = document.querySelectorAll("img");
  Array.from(elements).forEach(function(element) {
    element.addEventListener('click', myFunction);
  });
}



window.addEventListener('load', (event) => {
  loopingImg()
  clickImg()
});




/* Wiring up the Darken/Lighten button */


//testing code
function myFunction() {

  }