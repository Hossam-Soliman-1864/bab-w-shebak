saleImg();

function saleImg() {
    setTimeout(catchImg, 2000);
}
function catchImg() {
    $("#onHdimg").toggle();

    setTimeout(function() {
        $("#onHdimg").toggle();
        saleImg();
    }, 1000);
}


var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}

// product slide fn

var productslideIn = 1;
prodshowSlides(productslideIn);

function prodcurrentSlide(x) {
  prodshowSlides(productslideIn = x);
}

function prodshowSlides(x) {
  var i;
  var prodslides = document.getElementsByClassName("ProductSlide");
  if (x > prodslides.length) {productslideIn = 1}    
  if (x < 1) {productslideIn = prodslides.length}
  for (i = 0; i < prodslides.length; i++) {
      prodslides[i].style.display = "none";  
  }

  prodslides[productslideIn-1].style.display = "block";  
}

//auto main slidshow imgs
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("Slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); 
}
////////////Cartbox





/* Function to GET doors data */
const getData = async ( url = '', data = {})=>{
  console.log(data);
    const response = await fetch(url, {
    method: 'GET', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
        }});

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}




const postData = async ( url = '', data = {})=>{
  console.log(data);
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    }, body: JSON.stringify(data), 
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}

postData('http://localhost:8081/addData', {id:5, price:5});
postData('http://localhost:8081/addData', {id:3, price:5});
getData('http://localhost:8081/home');
