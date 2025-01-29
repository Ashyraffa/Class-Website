document.querySelectorAll('.pertanyaan').forEach(button => {
    button.addEventListener('click', () => {
        const jawab = button.nextElementSibling;
        jawab.style.display = jawab.style.display === 'block' ? 'none' : 'block';
    });
});