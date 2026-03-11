/**
 * REBUILT Loader Animation Controller
 * Handles the industrial-style loading screen
 */

(function() {
  'use strict';

  const loader = document.getElementById('loader');
  const mainApp = document.getElementById('mainApp');
  const loaderProgressFill = document.getElementById('loaderProgressFill');
  const loaderStatus = document.getElementById('loaderStatus');
  const loaderPercent = document.getElementById('loaderPercent');
  const sparkContainer = document.getElementById('sparkContainer');

  // Don't run if there's no loader (on pages without loader)
  if (!loader) return;

  // Create welding sparks
  function createSparks() {
    const sparkCount = 3;
    for (let i = 0; i < sparkCount; i++) {
      const spark = document.createElement('div');
      spark.className = 'spark';
      spark.style.left = (Math.random() * 80 + 10) + '%';
      spark.style.top = (Math.random() * 80 + 10) + '%';
      spark.style.setProperty('--tx', (Math.random() * 100 - 50) + 'px');
      spark.style.setProperty('--ty', (Math.random() * 100 - 50) + 'px');
      sparkContainer.appendChild(spark);
      
      setTimeout(() => spark.remove(), 1000);
    }
  }

  // Generate sparks periodically
  const sparkInterval = setInterval(createSparks, 200);

  // Loading progress
  let progress = 0;
  const targetProgress = 100;
  const duration = 2500; // 2.5 seconds
  const startTime = Date.now();

  const statuses = [
    { threshold: 0, text: 'INITIALIZING' },
    { threshold: 25, text: 'LOADING MODULES' },
    { threshold: 50, text: 'CALIBRATING SENSORS' },
    { threshold: 75, text: 'ESTABLISHING UPLINK' },
    { threshold: 90, text: 'FINALIZING' }
  ];

  function updateLoader() {
    const elapsed = Date.now() - startTime;
    progress = Math.min((elapsed / duration) * targetProgress, targetProgress);
    
    // Update progress bar
    if (loaderProgressFill) {
      loaderProgressFill.style.width = progress + '%';
    }
    
    if (loaderPercent) {
      loaderPercent.textContent = Math.floor(progress) + '%';
    }
    
    // Update status text based on progress
    if (loaderStatus) {
      const currentStatus = statuses.slice().reverse().find(s => progress >= s.threshold);
      if (currentStatus) {
        loaderStatus.textContent = currentStatus.text;
      }
    }
    
    if (progress < targetProgress) {
      requestAnimationFrame(updateLoader);
    } else {
      // Loading complete
      clearInterval(sparkInterval);
      if (loaderStatus) {
        loaderStatus.textContent = 'SYSTEM READY';
        loaderStatus.style.color = '#2ecc71';
      }
      
      setTimeout(() => {
        loader.classList.add('exiting');
        
        setTimeout(() => {
          if (mainApp) {
            mainApp.style.display = 'flex';
          }
          loader.style.display = 'none';
        }, 600);
      }, 500);
    }
  }

  // Start loading after a brief delay
  setTimeout(updateLoader, 500);
})();
