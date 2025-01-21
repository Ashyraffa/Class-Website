
let gambarIndex = 0;
let gambarArray = ["gambar1.jpg", "gambar2.jpg", "gambar3.jpg", "gambar4.jpg", "gambar5.jpg", "gambar6.jpg", "gambar7.jpg", "gambar8.jpg", "gambar9.jpg"]

function gantiGambar() {
    gambarIndex = (gambarIndex + 1) % gambarArray.length;
    document.getElementById("gambar").src = gambarArray[gambarIndex];
}

setInterval(gantiGambar, 3000);

let foto1Index= 0;
let foto1Array= ["foto1.jpg", "foto1.1.jpg", "foto1.2.jpg"]

function gantiFoto1() {
    foto1Index = (foto1Index + 1) % foto1Array.length;
    document.getElementById("foto1").src = foto1Array[foto1Index];
}

setInterval(gantiFoto1, 3000);

let foto2Index = 0;
let foto2Array = ["foto3.jpg", "foto3.1.jpg", "foto3.2.jpg"]

function gantiFoto2() {
    foto2Index = (foto2Index + 1) % foto2Array.length;
    document.getElementById("foto2").src = foto2Array[foto2Index];
}

setInterval(gantiFoto2, 3000);

let foto3Index = 0;
let foto3Array = ["foto2.jpg", "foto2.1.jpg", "foto2.2.jpg"]

function gantiFoto3() {
    foto3Index = (foto3Index + 1) % foto3Array.length;
    document.getElementById("foto3").src = foto3Array[foto3Index];
}

setInterval(gantiFoto3, 3000);

let foto4Index = 0;
let foto4Array = ["foto4.jpg", "foto4.1.jpg", "foto4.2.jpg"]

function gantiFoto4() {
    foto4Index = (foto4Index + 1) % foto4Array.length;
    document.getElementById("foto4").src = foto4Array[foto4Index];
}

setInterval(gantiFoto4, 3000);





