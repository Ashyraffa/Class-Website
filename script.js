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


function toggleContent(contentId) {
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');

    if (contentId === 'content1') {
    content1.style.display = 'block';
    content2.style.display = 'none';
    } else if (contentId === 'content2') {
     content1.style.display = 'none';
     content2.style.display = 'block';
           }
      }


  

