function showSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.classList.remove('active');
      section.classList.add('hidden');
    });
  
    const target = document.getElementById(id);
    if (target) {
      target.classList.add('active');
      target.classList.remove('hidden');
    }
  }
  