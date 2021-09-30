var Sound="";

function setup()
{
    Canvas=createCanvas(300, 300);
    Canvas.center();
    
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image( video, 0, 0, 300, 300);
}

function preload()
{
    Sound=loadSound("music.mp3");
}

function play_button()
{
    Sound.play();
}