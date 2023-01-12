var lstats = "https://github-readme-stats.vercel.app/api/top-langs/?username=Mnietoprez&langs_count=6&layout=compact&theme=graywhite";
var lrepo1 = "https://github-readme-stats.vercel.app/api/pin/?username=Mnietoprez&repo=cryptoCards&theme=graywhite";
var lrepo2 = "https://github-readme-stats.vercel.app/api/pin/?username=Mnietoprez&repo=web_smart_contracts&theme=graywhite";
var lrepo3 = "https://github-readme-stats.vercel.app/api/pin/?username=Mnietoprez&repo=newton-fractal-deep-learning&theme=graywhite";
var lrepo4 = "https://github-readme-stats.vercel.app/api/pin/?username=Mnietoprez&repo=hardy-weinberg-theorem&theme=graywhite";
var dstats = "https://github-readme-stats.vercel.app/api/top-langs/?username=Mnietoprez&langs_count=6&layout=compact&theme=dark";
var drepo1 = "https://github-readme-stats.vercel.app/api/pin/?username=Mnietoprez&repo=cryptoCards&theme=dark";
var drepo2 = "https://github-readme-stats.vercel.app/api/pin/?username=Mnietoprez&repo=web_smart_contracts&theme=dark";
var drepo3 = "https://github-readme-stats.vercel.app/api/pin/?username=Mnietoprez&repo=newton-fractal-deep-learning&theme=dark";
var drepo4 = "https://github-readme-stats.vercel.app/api/pin/?username=Mnietoprez&repo=hardy-weinberg-theorem&theme=dark";
var light;

window.onload = function() {
    light = false;
    document.getElementById("idr1").src = drepo1;
    document.getElementById("idr2").src = drepo2;
    document.getElementById("idr3").src = drepo3;
    document.getElementById("idr4").src = drepo4;
    document.getElementById("ghstats").src = dstats;
};

function darkLightToggle() {
    if (light){
        document.body.style.transition = 'background 3s ease-in-out';
        document.body.style.background = `linear-gradient(to right, Black, LightSlateGray)`;
        light = false;
        document.getElementById("idr1").src = drepo1;
        document.getElementById("idr2").src = drepo2;
        document.getElementById("idr3").src = drepo3;
        document.getElementById("idr4").src = drepo4;
        document.getElementById("ghstats").src = dstats;
    }
    else{
        document.body.style.transition = 'background 3s ease-in-out';
        document.body.style.background = `linear-gradient(to right, mediumslateblue, Lightblue)`;
        light = true
        document.getElementById("idr1").src = lrepo1;
        document.getElementById("idr2").src = lrepo2;
        document.getElementById("idr3").src = lrepo3;
        document.getElementById("idr4").src = lrepo4;
        document.getElementById("ghstats").src = lstats;
    }   
}

function openP1(){
    window.open("publications/QGP-phase-transition.pdf");
}   

function openP2(){
    window.open("publications/newton-fractal.pdf");
}   

function enciende1(){
    document.imglang1.opacity= "100%" ;
}   

function apaga1(){
    document.imglang1.opacity = "0%" ;
}   