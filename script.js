// Efek Mengetik (Typewriter Effect)
const textElement = document.querySelector(".typing-text");
const words = ["Web Developer", "Freelancer", "Content Creator", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Tunggu sebelum menghapus
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500); // Tunggu sebelum mengetik kata baru
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", type);