// Pop Up Awal
window.alert("Sudahkah Anda follow akun Media Sosial Kami...?");
window.alert("Pastikan untuk follow ya :D");

// Slider Foto
let gambarIndex = 0;
let gambarArray = ["gambar1.jpg", "gambar2.jpg", "gambar3.jpg", "gambar4.jpg", "gambar5.jpg", "gambar6.jpg", "gambar7.jpg", "gambar8.jpg", "gambar9.jpg", "gambar10.jpg"]

function gantiGambar() {
    gambarIndex = (gambarIndex + 1) % gambarArray.length;
    document.getElementById("gambar").src = gambarArray[gambarIndex];
}
// Waktu yang ditentukan: 2 detik setiap pergantian foto
setInterval(gantiGambar, 2000);

