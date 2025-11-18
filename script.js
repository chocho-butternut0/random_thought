// Variables
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const closeBtn = document.getElementById('closeBtn');

let isOpened = false;

// Open letter on envelope click
envelope.addEventListener('click', function() {
    if (!isOpened) {
        isOpened = true;
        envelope.classList.add('opened');
        
        setTimeout(() => {
            letter.classList.add('opened');
            closeBtn.classList.add('visible');
        }, 300);
    }
});

// Close letter
closeBtn.addEventListener('click', function() {
    isOpened = false;
    letter.classList.remove('opened');
    closeBtn.classList.remove('visible');
    envelope.classList.remove('opened');
});

// Close letter when clicking outside
letter.addEventListener('click', function(e) {
    if (e.target === letter) {
        closeBtn.click();
    }
});
