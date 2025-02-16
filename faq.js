// Ini digunakan untuk animasi drawers a.k.a laci //
// "questions.html" and "Tugas yang harus dikerjakan.html". //

document.querySelectorAll('.pertanyaan').forEach(button => {
    button.addEventListener('click', () => {
        const jawab = button.nextElementSibling;
        jawab.style.display = jawab.style.display === 'block' ? 'none' : 'block';
    });
});




