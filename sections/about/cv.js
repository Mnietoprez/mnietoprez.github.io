window.onload = function() {

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
  

function openCV()  {
    window.open("../../documents/CV-english.pdf");
}
