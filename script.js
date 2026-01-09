const btn = document.getElementById('btn-click');
const scene1 = document.getElementById('scene1');
const scene2 = document.getElementById('scene2');
const title = document.getElementById('title');
const message = document.getElementById('message');
const emojiContainer = document.getElementById('emojiContainer');
const sparklesContainer = document.getElementById('sparklesContainer');

// Emoji yang akan digunakan
const emojis = ['😂', '😜', '🤣', '😆', '😝'];

// Buat dekorasi emoji berterbangan
function createFloatingEmojis() {
    // Emoji berterbangan
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.classList.add('emoji-float');
            
            // Pilih emoji acak antara 😂 dan 😜
            const randomEmoji = Math.random() > 0.5 ? emojis[0] : emojis[1];
            emoji.textContent = randomEmoji;
            
            const leftPos = Math.random() * 100;
            const size = Math.random() * 25 + 25;
            const delay = Math.random() * 5;
            const duration = Math.random() * 8 + 6;
            const rotation = Math.random() * 360;
            
            emoji.style.left = `${leftPos}vw`;
            emoji.style.fontSize = `${size}px`;
            emoji.style.animationDelay = `${delay}s`;
            emoji.style.animationDuration = `${duration}s`;
            emoji.style.transform = `rotate(${rotation}deg)`;
            
            // Warna pink acak untuk shadow
            const pinkShades = ['#ff66a3', '#ff3385', '#ff1493', '#ff0066'];
            const randomColor = pinkShades[Math.floor(Math.random() * pinkShades.length)];
            emoji.style.textShadow = `2px 2px 0 ${randomColor}40`;
            
            emojiContainer.appendChild(emoji);
        }, i * 300);
    }
}

// Buat efek sparkle
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    
    sparklesContainer.appendChild(sparkle);
    
    // Animasi sparkle
    sparkle.animate([
        { opacity: 0, transform: 'scale(0) rotate(0deg)' },
        { opacity: 1, transform: 'scale(1) rotate(180deg)' },
        { opacity: 0, transform: 'scale(0) rotate(360deg)' }
    ], {
        duration: 1000,
        easing: 'ease-out'
    });
    
    // Hapus elemen setelah animasi selesai
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Buat emoji saat klik di mana saja
document.addEventListener('click', function(e) {
    createSparkle(e.clientX, e.clientY);
    
    // Juga buat emoji di tempat diklik
    const clickEmoji = document.createElement('div');
    clickEmoji.classList.add('emoji-float');
    clickEmoji.textContent = Math.random() > 0.5 ? '😂' : '😜';
    clickEmoji.style.left = `${e.clientX}px`;
    clickEmoji.style.top = `${e.clientY}px`;
    clickEmoji.style.fontSize = '40px';
    clickEmoji.style.animationDuration = '3s';
    clickEmoji.style.animationDelay = '0s';
    
    emojiContainer.appendChild(clickEmoji);
    
    // Hapus emoji setelah animasi selesai
    setTimeout(() => {
        clickEmoji.remove();
    }, 3000);
});

btn.addEventListener('click', function() {
    // Sembunyikan scene 1
    scene1.style.display = 'none';
    
    // Tampilkan scene 2 dengan efek
    setTimeout(() => {
        scene2.classList.remove('hidden');
        scene2.style.display = 'block';
        
        // Tambah lebih banyak emoji berterbangan
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const emoji = document.createElement('div');
                emoji.classList.add('emoji-float');
                emoji.textContent = Math.random() > 0.5 ? '😂' : '😜';
                
                const leftPos = Math.random() * 100;
                const size = Math.random() * 40 + 30;
                const delay = Math.random() * 2;
                const duration = Math.random() * 5 + 3;
                
                emoji.style.left = `${leftPos}vw`;
                emoji.style.fontSize = `${size}px`;
                emoji.style.animationDelay = `${delay}s`;
                emoji.style.animationDuration = `${duration}s`;
                
                emojiContainer.appendChild(emoji);
                
                // Buat sparkle di posisi acak
                const sparkleX = Math.random() * window.innerWidth;
                const sparkleY = Math.random() * window.innerHeight;
                createSparkle(sparkleX, sparkleY);
                
                // Hapus emoji setelah animasi selesai
                setTimeout(() => {
                    emoji.remove();
                }, (duration + delay) * 1000);
            }, i * 100);
        }
        
        // Tambah efek khusus untuk teks "hehe"
        const title2 = document.getElementById('title2');
        const emojiBig = document.querySelector('.emoji-big');
        
        // Animasi khusus untuk emoji di "hehe"
        let emojiCounter = 0;
        const emojiInterval = setInterval(() => {
            emojiBig.style.animation = 'none';
            setTimeout(() => {
                emojiBig.style.animation = 'laughEmoji 2s infinite alternate';
            }, 10);
            
            emojiCounter++;
            if (emojiCounter > 10) {
                clearInterval(emojiInterval);
            }
        }, 500);
        
    }, 300);
    
    // Tombol "Klik y" akan hilang karena scene1 disembunyikan
});

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    createFloatingEmojis();
    
    // Buat beberapa sparkle saat halaman pertama kali dimuat
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const sparkleX = Math.random() * window.innerWidth;
            const sparkleY = Math.random() * window.innerHeight;
            createSparkle(sparkleX, sparkleY);
        }, i * 500);
    }
    
    // Animasi untuk emoji di tombol
    const emojiBtn = document.querySelector('.emoji-btn');
    setInterval(() => {
        emojiBtn.style.animation = 'none';
        setTimeout(() => {
            emojiBtn.style.animation = 'bounceBtn 1s infinite alternate';
        }, 10);
    }, 3000);
});