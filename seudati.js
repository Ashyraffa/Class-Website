window.alert("Halaman ini kemungkinanan masih memiliki bug. Jika menemukan bug atau error a.k.a kesalahan, tolong hubungi aja saya🙏")

let seudatiIndex = 0;
let seudatiArray = ["seudati1.jpg", "seudati2.jpg"]

function changeSeudati () {
    seudatiIndex = (seudatiIndex + 1) % seudatiArray.length;
    document.getElementById('seudati').src = seudatiArray[seudatiIndex];
}

setInterval(changeSeudati, 2000);