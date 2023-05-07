window.onload = function() {


    const element1 = document.getElementById("titular");
    element1.style.opacity = 0;
    element1.style.filter = "blur(8px)";

    const element2 = document.getElementById("subtitular");
    element2.style.opacity = 0;
    element2.style.filter = "blur(10px)";

    const button1 = document.getElementById("button1");
    button1.style.opacity = 0;
    button1.style.filter = "blur(10px)";

    const button2 = document.getElementById("button2");
    button2.style.opacity = 0;
    button2.style.filter = "blur(10px)";
    
    let opacity1 = 0;
    let blur1 = 8;
    const intervalId1 = setInterval(() => {
    opacity1 += 0.03;
    blur1 -= 0.5;
    element1.style.opacity = opacity1;
    element1.style.filter = `blur(${blur1}px)`;
    if (opacity1 >= 1) {
        clearInterval(intervalId1);
    }
    }, 50);

    let opacity2 = 0;
    let blur2 = 10;
    const intervalId2 = setInterval(() => {
    opacity2 += 0.03;
    blur2 -= 0.5;
    element2.style.opacity = opacity2;
    element2.style.filter = `blur(${blur2}px)`;
    if (opacity2 >= 1) {
        clearInterval(intervalId2);
    }
    }, 50);

    let opacity3 = 0;
    let blur3 = 8;
    const intervalId3 = setInterval(() => {
    opacity3 += 0.03;
    blur3 -= 0.5;
    button1.style.opacity = opacity3;
    button1.style.filter = `blur(${blur3}px)`;
    if (opacity3 >= 1) {
        clearInterval(intervalId3);
    }
    }, 50);

    let opacity4 = 0;
    let blur4 = 8;
    const intervalId4 = setInterval(() => {
    opacity4 += 0.03;
    blur4 -= 0.5;
    button2.style.opacity = opacity4;
    button2.style.filter = `blur(${blur4}px)`;
    if (opacity4 >= 1) {
        clearInterval(intervalId4);
    }
    }, 50);
};

function option1(){
    window.open("./sections/portfolio/portfolio.html", "_self")
}

function option2(){
    window.open("./sections/about/cv.html", "_self")
}
