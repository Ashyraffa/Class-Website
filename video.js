let gambarIndex = 0;
let gambarArray = ["EmierdanNadia.jpg", "Guprin.jpg", "Aufa dan Holy.jpg", "a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg", "f.jpg", "g.jpg", "h.jpg", "i.jpg", ]


function gantiGambar() {
    gambarIndex = (gambarIndex + 1) % gambarArray.length;
    document.getElementById('gambar').src = gambarArray[gambarIndex];
}

setInterval(gantiGambar, 3000);

