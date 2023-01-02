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

function openCV()  {
    window.open("../documents/CV-english.pdf");
}
