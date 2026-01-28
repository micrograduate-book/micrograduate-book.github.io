(function() {
  // Check if a theme preference is already saved
  const savedTheme = localStorage.getItem('theme');
  
  // If no preference is saved, or if it's currently dark, force light
  if (!savedTheme || savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
})();