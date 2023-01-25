var light;
var maincolor;

window.onload = function() {
    light = false;
    maincolor = "white";

    const element1 = document.getElementById("titular");
    element1.style.opacity = 0;
    element1.style.filter = "blur(8px)";

    const element2 = document.getElementById("subtitular");
    element2.style.opacity = 0;
    element1.style.filter = "blur(10px)";
    
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
};

function lightdivbg(){
    //Changes pubs and languages bg

    const classList = ["languageapp", "langpreview", "language1", "language2", "language3", "language4", "language5", "pubs"];
        classList.forEach(className => {
            const elements = document.getElementsByClassName(className);
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.background = 'rgba(103, 100, 127, 0.463)';
            }
        });
}

function darkdivbg(){
    //Changes pubs and languages bg

    const classList = ["languageapp", "langpreview", "language1", "language2", "language3", "language4", "language5", "pubs"];
        classList.forEach(className => {
            const elements = document.getElementsByClassName(className);
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.background = 'rgba(0, 0, 0, 0.3)';
            }
        });
}


function darkLightToggle() {
    if (light){

        document.body.style.background = `linear-gradient(to bottom, black, rgb(42, 42, 42))`;

        document.querySelectorAll("h1").forEach(e => e.style.color = 'white');
        document.querySelectorAll("a").forEach(e => e.style.color = 'white');
        document.querySelectorAll("p").forEach(e => e.style.color = 'white');
        document.querySelectorAll("h2").forEach(e => e.style.color = 'white');

        darkdivbg();
        light = false;
        maincolor = "white";
    }
    else{
        
        document.body.style.background = `linear-gradient(to bottom, rgb(204, 208, 255), rgb(255, 255, 255))`;

        document.querySelectorAll("h1").forEach(e => e.style.color = 'black');
        document.querySelectorAll("a").forEach(e => e.style.color = 'black');
        document.querySelectorAll("p").forEach(e => e.style.color = 'black');
        document.querySelectorAll("h2").forEach(e => e.style.color = 'black');

        //Keeps topnav and bottom elements white colored
        document.getElementById("topnav").querySelectorAll("a").forEach(e => e.style.color = 'white');
        document.getElementById("abtme").querySelectorAll("a").forEach(e => e.style.color = 'white');

        lightdivbg();

        light = true
        maincolor = "black";
    }   
}

function openP1(){
    window.open("publications/QGP-phase-transition.pdf");
}   

function openP2(){
    window.open("publications/newton-fractal.pdf");
}   

function enciende1(){
    document.getElementsByClassName('langpreview')[0].style.background = "linear-gradient(to right, rgba(0, 109, 252, 0.4), rgba(166, 0, 255, 0.4))";
    document.getElementsByClassName('language1')[0].style.background = "linear-gradient(to right, rgba(0, 109, 252, 0.4), rgba(166, 0, 255, 0.4))";
    document.getElementById('laimagen').src = "images/python.png";
    document.getElementById('presentation').textContent = "Python";
    document.getElementById('description').textContent = "High level language, used mostly for science and statistics. Experience in libraries such as 'Matplotlib, NumPy, SymPy, Pandas, Random, among others.";
    document.getElementById('laimagen').style.opacity = "1";
}   

function enciende2(){
    document.getElementsByClassName('langpreview')[0].style.background = "linear-gradient(to right, rgba(136, 73, 0, 0.4), rgba(255, 60, 0, 0.4))";
    document.getElementsByClassName('language2')[0].style.background = "linear-gradient(to right, rgba(136, 73, 0, 0.4), rgba(255, 60, 0, 0.4))";
    document.getElementById('presentation').textContent = "Solidity";
    document.getElementById('description').textContent = "High level language used for Ethereum Virtual Machine based smart contracts. Experience in the developement environment 'Hardhat'.";
    document.getElementById('laimagen').src = "images/solidity.png";
    document.getElementById('laimagen').style.opacity = "1";
}   

function enciende3(){
    document.getElementsByClassName('langpreview')[0].style.background = "linear-gradient(to right, rgba(213, 156, 0, 0.4), rgba(255, 221, 0, 0.4))";
    document.getElementsByClassName('language3')[0].style.background = "linear-gradient(to right, rgba(213, 156, 0, 0.4), rgba(255, 221, 0, 0.4))";
    document.getElementById('presentation').textContent = "Javascript";
    document.getElementById('description').textContent = "Powerful language used for web apps. Experience in libraries such as web3.js, used to access Blockcahain smart contracts from a frontend display.";
    document.getElementById('laimagen').src = "images/js.png";
    document.getElementById('laimagen').style.opacity = "1";
}   

function enciende4(){
    document.getElementsByClassName('langpreview')[0].style.background = "linear-gradient(to right, rgba(42, 210, 0, 0.4), rgba(162, 255, 0, 0.4))";
    document.getElementsByClassName('language4')[0].style.background = "linear-gradient(to right, rgb(51, 255, 0, 0.4), rgba(162, 255, 0, 0.4))";
    document.getElementById('presentation').textContent = "LaTeX";
    document.getElementById('description').textContent = "A well-known language in sciences, used to write high quality articles and introduce mathematical formulation easily.";
    document.getElementById('laimagen').src = "images/latex.png";
    document.getElementById('laimagen').style.opacity = "1";
}   

function enciende5(){
    document.getElementsByClassName('langpreview')[0].style.background = "linear-gradient(to right, rgb(255, 0, 204, 0.4), rgba(253, 0, 84, 0.4))";
    document.getElementsByClassName('language5')[0].style.background = "linear-gradient(to right, rgb(255, 0, 204, 0.4), rgba(253, 0, 84, 0.4))";
    document.getElementById('presentation').textContent = "CSS/HTML";
    document.getElementById('description').textContent = "Powerful tools for web designing and structuring, crucial for making user friendly apps.";
    document.getElementById('laimagen').src = "images/csshtml.png";
    document.getElementById('laimagen').style.opacity = "1";
}   

function apaga(){
    document.getElementById('presentation').innerHTML = `Find all my repositories at <a style="color: ${maincolor};" href=\'https://github.com/Mnietoprez?tab=repositories\'>GitHub</a>`;
    document.getElementById('description').textContent = "Hover over the words at the left to check details.";
    document.getElementById('laimagen').style.opacity = "0";
    if (light){
        lightdivbg();
    }else{
        darkdivbg();
    }
} 