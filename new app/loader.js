// REBUILT Loading Animation Controller

(function() {
  // Check if we should skip the loader (coming from loading-animation.html)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('skipLoader') === 'true') {
    const loader = document.getElementById('loader');
    const mainApp = document.getElementById('mainApp');
    loader.style.display = 'none';
    mainApp.style.display = 'flex';
    // Clean up the URL
    window.history.replaceState({}, '', window.location.pathname);
    return;
  }

  // Create floating debris/dust particles
  const debrisContainer = document.getElementById('debrisContainer');
  const debrisCount = 2000;
  
  for (let i = 0; i < debrisCount; i++) {
    const debris = document.createElement('div');
    debris.className = 'debris';
    debris.style.left = Math.random() * 100 + '%';
    debris.style.width = (Math.random() * 4 + 2) + 'px';
    debris.style.height = (Math.random() * 3 + 1) + 'px';
    debris.style.animationDuration = (Math.random() * 6 + 5) + 's';
    debris.style.animationDelay = Math.random() * 6 + 's';
    debrisContainer.appendChild(debris);
  }
  
  // Loading sequence
  const loader = document.getElementById('loader');
  const mainApp = document.getElementById('mainApp');
  const statusText = document.querySelector('.loader-status');
  const statuses = [
    'Gathering materials...',
    'Assembling structure...',
    'Reinforcing frame...',
    'Construction complete!'
  ];
  
  let statusIndex = 0;
  
  // Update status text
  const statusInterval = setInterval(() => {
    statusIndex++;
    if (statusIndex < statuses.length) {
      statusText.textContent = statuses[statusIndex];
    }
  }, 750);
  
  // Complete loading after 3 seconds
  setTimeout(() => {
    clearInterval(statusInterval);
    statusText.textContent = 'Construction complete!';
    
    // Start exit animation
    loader.classList.add('exiting');
    
    // Show main app
    setTimeout(() => {
      mainApp.style.display = 'flex';
      loader.style.display = 'none';
    }, 800);
  }, 3000);
})();
