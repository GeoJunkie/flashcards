/**
 * Show hint when button is clicked
 */

const showHint = document.getElementById('show-hint');
const hint = document.getElementById('hint');

showHint.addEventListener('click', () => {
    showHint.style.display = 'none';
    hint.style.display = 'block';
});