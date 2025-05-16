// === Konfigurasi ===
const config = {
  formUrl: 'https://forms.gle/yhmiDqv4nU9kxtV9A', // URL formulir saran
  animationDelay: 300,  // Waktu tunggu sebelum animasi dimulai (ms)
  fadeInDuration: 800,  // Durasi fade in (ms)
  enableConsoleLog: true // Aktifkan log untuk debugging
};

// === Inisialisasi Kotak Saran ===
document.addEventListener('DOMContentLoaded', () => {
  const suggestionBox = document.getElementById('suggestionBox');

  // Periksa apakah elemen suggestionBox ada
  if (!suggestionBox) {
    if (config.enableConsoleLog) {
      console.warn('Element dengan ID "suggestionBox" tidak ditemukan');
    }
    return;
  }

  // Setel properti awal untuk animasi
  suggestionBox.style.opacity = '0';
  suggestionBox.style.transition = `opacity ${config.fadeInDuration}ms ease-out`;

  // Tambahkan event listener untuk klik
  suggestionBox.addEventListener('click', (e) => {
    e.preventDefault(); // Mencegah perilaku default link

    if (config.enableConsoleLog) {
      console.log('Membuka formulir saran:', config.formUrl);
    }

    // Buka URL formulir di tab baru
    window.open(config.formUrl, '_blank', 'noopener,noreferrer');
  });

  // Mulai animasi setelah penundaan
  setTimeout(() => {
    suggestionBox.style.opacity = '1';

    if (config.enableConsoleLog) {
      console.log('Animasi kotak saran dimulai');
    }
  }, config.animationDelay);
});

// === Dark Mode Toggle ===
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');
  const iconMoon = document.getElementById('icon-moon');
  const iconSun = document.getElementById('icon-sun');
  if (!toggle) return;

  // Fungsi untuk update icon
  function updateIcon() {
    if (document.body.classList.contains('darkmode')) {
      iconMoon.style.display = 'none';
      iconSun.style.display = '';
    } else {
      iconMoon.style.display = '';
      iconSun.style.display = 'none';
    }
  }

  // Set awal sesuai preferensi
  if (localStorage.getItem('darkmode') === 'enabled') {
    document.body.classList.add('darkmode');
  }
  updateIcon();

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
    if (document.body.classList.contains('darkmode')) {
      localStorage.setItem('darkmode', 'enabled');
    } else {
      localStorage.setItem('darkmode', 'disabled');
    }
    updateIcon();
  });
});
