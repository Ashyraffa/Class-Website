// This was used to animate and make drawers for //
// "questions.html" and "Tugas yang harus dikerjakan.html". //

document.querySelectorAll('.pertanyaan').forEach(button => {
    button.addEventListener('click', () => {
        const jawab = button.nextElementSibling;
        jawab.style.display = jawab.style.display === 'block' ? 'none' : 'block';
    });
});

console.log('Okay.')

