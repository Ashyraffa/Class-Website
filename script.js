// JavaScript
let fotoIndex = 0;
let fotoArray = ["foto/hari-guru.jpg", "foto/bersama.jpg"]


function gantiFoto () {
    fotoIndex = (fotoIndex + 1) % fotoArray.length;
    document.getElementById("foto").src = fotoArray[fotoIndex];
}

setInterval(gantiFoto, 2000);

document.querySelectorAll('.pertanyaan').forEach(button => {
    button.addEventListener('click', () => {
        const jawab = button.nextElementSibling;
        jawab.style.display = jawab.style.display === 'block' ? 'none' : 'block';
    });
});

  if (navigator.userAgent.indexOf("MSIE") !== -1 || navigator.userAgent.indexOf("Trident") !== -1) {
    window.location.href = "unsupported.html" // Blokir Internet Explorer
  }


  

