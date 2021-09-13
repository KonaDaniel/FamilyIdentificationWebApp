camera = document.getElementById("camera");

Webcam.attach('#camera');

Webcam.set({
    width:350 ,
    heigth:300 ,
    image_format: 'png' ,
    png_quality: 90 
});

console.log('ml5_version',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]' , modelLoaded );

function take_snapshot() {

   Webcam.snap(function (data_uri){

       document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
   });
}

