
let gambarIndex = 0;
let gambarArray = ["gambar1.jpg", "gambar2.jpg", "gambar3.jpg", "gambar4.jpg", "gambar5.jpg", "gambar6.jpg", "gambar7.jpg", "gambar8.jpg", "gambar9.jpg", "gambar10.jpg"]

function gantiGambar() {
    gambarIndex = (gambarIndex + 1) % gambarArray.length;
    document.getElementById("gambar").src = gambarArray[gambarIndex];
}

setInterval(gantiGambar, 2000);


console.log('Hello World!')




