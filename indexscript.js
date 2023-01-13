var light;

window.onload = function() {
    light = false;
};

function darkLightToggle() {
    if (light){
        document.body.style.transition = 'background 3s ease-in-out';
        document.body.style.background = `linear-gradient(to right, Black, LightSlateGray)`;
        light = false;
    }
    else{
        document.body.style.transition = 'background 3s ease-in-out';
        document.body.style.background = `linear-gradient(to right, mediumslateblue, Lightblue)`;
        light = true
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
    document.getElementById('presentation').textContent = "Python";
    document.getElementById('description').textContent = "High level language, used mostly for science and statistics. Experience in libraries such as 'Matplotlib, NumPy, SymPy, Pandas, Random, among others.";
    document.getElementById('laimagen').src = "images/python.png";
}   

function enciende2(){
    document.getElementsByClassName('langpreview')[0].style.background = "linear-gradient(to right, rgba(136, 73, 0, 0.4), rgba(255, 60, 0, 0.4))";
    document.getElementById('presentation').textContent = "Solidity";
    document.getElementById('description').textContent = "High level language used for Ethereum Virtual Machine based smart contracts. Experience in the developement environment 'Hardhat'.";
    document.getElementById('laimagen').src = "images/solidity.png";
}   

function enciende3(){
    document.getElementsByClassName('langpreview')[0].style.background = "linear-gradient(to right, rgb(213, 202, 0), rgba(255, 174, 0, 0.4))";
    document.getElementById('presentation').textContent = "Javascript";
    document.getElementById('description').textContent = "Powerful language used for web apps. Experience in libraries such as web3.js, used to access Blockcahain smart contracts from a frontend display.";
    document.getElementById('laimagen').src = "images/js.png";
}   

function enciende4(){
    document.getElementsByClassName('langpreview')[0].style.background = "linear-gradient(to right, rgb(51, 255, 0, 0.4), rgba(162, 255, 0, 0.4))";
    document.getElementById('presentation').textContent = "LaTeX";
    document.getElementById('description').textContent = "A well-known language in sciences, used to write high quality articles and introduce mathematical formulation easily.";
    document.getElementById('laimagen').src = "images/latex.png";
}   

function enciende5(){
    document.getElementsByClassName('langpreview')[0].style.background = "linear-gradient(to right, rgb(255, 0, 204, 0.4), rgba(253, 0, 84, 0.4))";
    document.getElementById('presentation').textContent = "CSS/HTML";
    document.getElementById('description').textContent = "Powerful tools for web designing and structuring, crucial for making user friendly apps.";
    document.getElementById('laimagen').src = "images/csshtml.png";
}   

var originalContent = 'Find all my repositories at <a href=\'https://github.com/Mnietoprez?tab=repositories\'>GitHub</a>';

function apaga(){
    document.getElementsByClassName('langpreview')[0].style.background = "rgba(0, 0, 0, 0.3)";
    document.getElementById('presentation').innerHTML = originalContent;
    document.getElementById('description').textContent = "Hover over the words at the left to check details.";
    document.getElementById('laimagen').src = "images/ghub.png";
}  