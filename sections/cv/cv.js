var light;

window.onload = function() {
    light = false;
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
