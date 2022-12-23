var lrepo1 = "https://github-readme-stats.vercel.app/api/pin/?username=Mnietoprez&repo=hardy-weinberg-theorem&theme=graywhite";
var lrepo2 = "https://github-readme-stats.vercel.app/api/pin/?username=Mnietoprez&repo=newton-fractal-deep-learning&theme=graywhite";
var drepo1 = "https://github-readme-stats.vercel.app/api/pin/?username=Mnietoprez&repo=hardy-weinberg-theorem&theme=dark";
var drepo2 = "https://github-readme-stats.vercel.app/api/pin/?username=Mnietoprez&repo=newton-fractal-deep-learning&theme=dark";
var light;

window.onload = function() {
    light = false;
    document.getElementById("idr1").src = drepo1;
    document.getElementById("idr2").src = drepo2;
};

function darkLightToggle() {
    if (light){
        document.body.style.transition = 'background 3s ease-in-out';
        document.body.style.background = `linear-gradient(to right, Black, LightSlateGray)`;
        light = false;
        document.getElementById("idr1").src = drepo1;
        document.getElementById("idr2").src = drepo2;
    }
    else{
        document.body.style.transition = 'background 3s ease-in-out';
        document.body.style.background = `linear-gradient(to right, mediumslateblue, Lightblue)`;
        light = true
        document.getElementById("idr1").src = lrepo1;
        document.getElementById("idr2").src = lrepo2;
    }   
}

function openExample(){
    window.open("publications/test.pdf");
}   

