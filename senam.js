// senam.js

let photoIndex = 0;
let photoArray = ["photo1.jpg", "photo2.jpg", "photo3.jpg"]

function changePhoto () {
    photoIndex = (photoIndex + 1) % photoArray.length;
    document.getElementById('photo').src = photoArray[photoIndex];
}

setInterval(changePhoto, 3000);

let photo2Index = 0;
let photo2Array = ["photo2.1.jpg", "photo2.2.jpg", "photo2.3.jpg"]

function changePhoto2 () {
    photo2Index = (photo2Index + 1) % photo2Array.length;
    document.getElementById('photo2').src = photo2Array[photo2Index];
}

setInterval(changePhoto2, 3000);