var light = true;

function darklighttoggle() {
    if (light){
        document.body.style.transition = 'background 3s ease-in-out';
        document.body.style.background = `linear-gradient(to right, Black, LightSlateGray)`;
        light = false;
    }
    else{
        document.body.style.transition = 'background 3s ease-in-out';
        document.body.style.background = `linear-gradient(to right, Plum, Lightblue)`;
        light = true
    }   
}