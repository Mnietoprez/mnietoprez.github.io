var light;

window.onload = function() {
    light = false;

    // Select all slides
    slides = document.querySelectorAll(".slide");
  
    // loop through slides and set each slides translateX property to index * 100% 
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${indx * 100}%)`;
    });
  
    // current slide counter
    curSlide = 0;
  
    // maximum number of slides
    maxSlide = slides.length - 1;
  };
  
  
  function nextsl() {
      // check if current slide is the last and reset current slide
      if (curSlide === maxSlide) {
          curSlide = 0;
      } else {
          curSlide++;
      }
  
      //move slide by -100%
      slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
      });
  };
  
  
  function prevsl() {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
  
    //   move slide by 100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  };
  


function darkLightToggle() {
    if (light){
        document.body.style.background = `linear-gradient(to bottom, black, rgb(42, 42, 42))`;
        document.querySelectorAll("h1").forEach(e => e.style.color = 'white');
        document.querySelectorAll("a").forEach(e => e.style.color = 'white');
        document.querySelectorAll("p").forEach(e => e.style.color = 'white');
        document.querySelectorAll("h2").forEach(e => e.style.color = 'white');
        document.getElementsByClassName("maincontainer")[0].style.background = 'rgba(0, 0, 0, 0.3)';
        light = false;
    }
    else{
        document.body.style.background = `linear-gradient(to bottom, rgb(204, 208, 255), rgb(255, 255, 255))`;
        document.querySelectorAll("h1").forEach(e => e.style.color = 'black');
        document.querySelectorAll("a").forEach(e => e.style.color = 'black');
        document.querySelectorAll("p").forEach(e => e.style.color = 'black');
        document.querySelectorAll("h2").forEach(e => e.style.color = 'black');
        document.getElementsByClassName("maincontainer")[0].style.background = 'rgba(103, 100, 127, 0.463)';
        
        //Keeps topnav elements white colored
        document.getElementById("topnav").querySelectorAll("a").forEach(e => e.style.color = 'white');
        light = true
    }   
}

function openCV()  {
    window.open("../../documents/CV-english.pdf");
}
