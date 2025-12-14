// Buttons functionality
document.getElementById('homeBtn').addEventListener('click', () => {
  alert('Home par ja rahe ho! 🏠');
  // window.location.href = 'home.html'; // Agar home page alag ho
});

document.getElementById('prevBtn').addEventListener('click', () => {
  alert('Previous lesson jald hi!');
});

document.getElementById('videoBtn').addEventListener('click', () => {
  window.open('https://www.youtube.com/results?search_query=excel+sum+formula+hindi', '_blank');
});

document.getElementById('nextBtn').addEventListener('click', () => {
  alert('Next lesson: AVERAGE formula!');
});

// Interactive table - Auto SUM calculation (only for practice table)
const inputs = document.querySelectorAll('.num');
inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    const row = Math.floor(index / 2);
    const a = parseFloat(inputs[row * 2].value) || 0;
    const b = parseFloat(inputs[row * 2 + 1].value) || 0;
    document.getElementById(`sum${row + 4}`).textContent = a + b;
  });
});

// Initial calculation on load
inputs.forEach(input => input.dispatchEvent(new Event('input')));

