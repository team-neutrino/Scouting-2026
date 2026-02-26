// REBUILT Scouting App - Industrial Interface Controller

(function() {
  'use strict';

  // ============================================
  // LOADER SEQUENCE
  // ============================================
  
  const loader = document.getElementById('loader');
  const mainApp = document.getElementById('mainApp');
  const loaderProgressFill = document.getElementById('loaderProgressFill');
  const loaderStatus = document.getElementById('loaderStatus');
  const loaderPercent = document.getElementById('loaderPercent');
  const sparkContainer = document.getElementById('sparkContainer');
  
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
    loaderProgressFill.style.width = progress + '%';
    loaderPercent.textContent = Math.floor(progress) + '%';
    
    // Update status text based on progress
    const currentStatus = statuses.slice().reverse().find(s => progress >= s.threshold);
    if (currentStatus) {
      loaderStatus.textContent = currentStatus.text;
    }
    
    if (progress < targetProgress) {
      requestAnimationFrame(updateLoader);
    } else {
      // Loading complete
      clearInterval(sparkInterval);
      loaderStatus.textContent = 'SYSTEM READY';
      loaderStatus.style.color = '#2ecc71';
      
      setTimeout(() => {
        loader.classList.add('exiting');
        
        setTimeout(() => {
          mainApp.style.display = 'flex';
          loader.style.display = 'none';
        }, 600);
      }, 500);
    }
  }
  
  // Start loading
  setTimeout(updateLoader, 500);

  // ============================================
  // MAIN APP FUNCTIONALITY
  // ============================================
  
  // DOM Elements
  const teamInput = document.getElementById('teamInput');
  const matchInput = document.getElementById('matchInput');
  const scoutInput = document.getElementById('scoutInput');
  const deviceInput = document.getElementById('deviceInput');
  const redAllianceBtn = document.getElementById('redAllianceBtn');
  const blueAllianceBtn = document.getElementById('blueAllianceBtn');
  const goBtn = document.getElementById('goBtn');
  const qrBtn = document.getElementById('qrBtn');
  const sessionId = document.getElementById('sessionId');
  const currentTime = document.getElementById('currentTime');
  
  // State
  let selectedAlliance = null;
  
  // Generate session ID
  function generateSessionId() {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `${timestamp}-${random}`;
  }
  
  sessionId.textContent = generateSessionId();
  
  // Update clock
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    currentTime.textContent = `${hours}:${minutes}`;
  }
  
  updateClock();
  setInterval(updateClock, 1000);
  
  // ============================================
  // INPUT HANDLING
  // ============================================
  
  // Team number - numeric only
  teamInput.addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
  
  // Match number - numeric only
  matchInput.addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
  
  // Scout initials - letters only, uppercase
  scoutInput.addEventListener('input', function(e) {
    this.value = this.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
  });
  
  // Device ID - numeric only
  deviceInput.addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
  
  // Input focus effects
  const inputs = document.querySelectorAll('.data-input');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
  });
  
  // ============================================
  // ALLIANCE SELECTION
  // ============================================
  
  function selectAlliance(alliance) {
    selectedAlliance = alliance;
    
    // Remove selected class from both
    redAllianceBtn.classList.remove('selected');
    blueAllianceBtn.classList.remove('selected');
    
    // Add selected class to chosen
    if (alliance === 'red') {
      redAllianceBtn.classList.add('selected');
    } else if (alliance === 'blue') {
      blueAllianceBtn.classList.add('selected');
    }
  }
  
  redAllianceBtn.addEventListener('click', () => selectAlliance('red'));
  blueAllianceBtn.addEventListener('click', () => selectAlliance('blue'));
  
  // ============================================
  // FORM SUBMISSION
  // ============================================
  
  function validateForm() {
    const errors = [];
    
    if (!teamInput.value || teamInput.value.length < 1) {
      errors.push('Team number is required');
      teamInput.parentElement.classList.add('error');
    }
    
    if (!matchInput.value) {
      errors.push('Match number is required');
      matchInput.parentElement.classList.add('error');
    }
    
    if (!scoutInput.value || scoutInput.value.length < 2) {
      errors.push('Scout initials are required (min 2 chars)');
      scoutInput.parentElement.classList.add('error');
    }
    
    if (!selectedAlliance) {
      errors.push('Please select an alliance');
    }
    
    return errors;
  }
  
  function clearErrors() {
    document.querySelectorAll('.input-wrapper').forEach(wrapper => {
      wrapper.classList.remove('error');
    });
  }
  
  goBtn.addEventListener('click', function() {
    clearErrors();
    
    const errors = validateForm();
    
    if (errors.length > 0) {
      // Shake animation on button
      this.style.animation = 'shake 0.5s ease-in-out';
      setTimeout(() => {
        this.style.animation = '';
      }, 500);
      
      console.error('Validation errors:', errors);
      return;
    }
    
    // Success - store data and proceed
    const scoutingData = {
      team: teamInput.value,
      match: matchInput.value,
      scout: scoutInput.value,
      alliance: selectedAlliance,
      device: deviceInput.value || '00',
      sessionId: sessionId.textContent,
      timestamp: new Date().toISOString()
    };
    
    // Store in localStorage
    localStorage.setItem('scoutingData', JSON.stringify(scoutingData));
    
    // Visual feedback
    this.classList.add('processing');
    
    setTimeout(() => {
      console.log('Proceeding with data:', scoutingData);
      // window.location.href = 'auton.html';
    }, 500);
  });
  
  qrBtn.addEventListener('click', function() {
    // Quick QR generation without validation
    console.log('Quick QR mode');
    // window.location.href = 'qr.html';
  });
  
  // ============================================
  // KEYBOARD NAVIGATION
  // ============================================
  
  document.addEventListener('keydown', function(e) {
    // Enter key submits form
    if (e.key === 'Enter' && document.activeElement.tagName === 'INPUT') {
      const inputs = Array.from(document.querySelectorAll('.data-input'));
      const currentIndex = inputs.indexOf(document.activeElement);
      
      if (currentIndex < inputs.length - 1) {
        inputs[currentIndex + 1].focus();
      } else {
        goBtn.click();
      }
    }
  });
  
  // ============================================
  // UTILITY STYLES (injected)
  // ============================================
  
  const style = document.createElement('style');
  style.textContent = `
    .input-wrapper.error .data-input {
      border-color: #e63946 !important;
      animation: shake 0.5s ease-in-out;
    }
    
    .input-wrapper.focused {
      z-index: 10;
    }
    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-5px); }
      40%, 80% { transform: translateX(5px); }
    }
    
    .action-btn.processing {
      pointer-events: none;
      opacity: 0.8;
    }
    
    .action-btn.processing .btn-text::after {
      content: '...';
      animation: dots 1.5s steps(4, end) infinite;
    }
    
    @keyframes dots {
      0%, 20% { content: ''; }
      40% { content: '.'; }
      60% { content: '..'; }
      80%, 100% { content: '...'; }
    }
  `;
  document.head.appendChild(style);
  
})();
