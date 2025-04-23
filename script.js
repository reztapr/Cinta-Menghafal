// Konfigurasi
const config = {
  formUrl: 'https://forms.gle/yhmiDqv4nU9kxtV9A',
  animationDelay: 300,  // Waktu tunggu sebelum animasi dimulai (ms)
  fadeInDuration: 800,  // Durasi fade in (ms)
  enableConsoleLog: true // Untuk debugging
};

// Inisialisasi ketika DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
  const suggestionBox = document.getElementById('suggestionBox');
  
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
  suggestionBox.addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah perilaku default link
    
    if (config.enableConsoleLog) {
      console.log('Membuka formulir saran:', config.formUrl);
    }
    
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
