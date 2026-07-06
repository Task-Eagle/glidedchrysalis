https://script.google.com/macros/s/AKfycbwvcL2weZNLzstwQKx1sg8_sL6L-vRR9clNVT2oOCKAwAeRi-wSFQRg6-Mb5V1B8_RCVQ/exec

// Handle form submission and send data to Google Sheets
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signup-email').value;
        const submitBtn = signupForm.querySelector('.btn-submit');
        
        if (email) {
          // Disable button and change text to show feedback during loading
          submitBtn.disabled = true;
          submitBtn.textContent = "Reserving your spot...";

          // YOUR GOOGLE APPS SCRIPT WEB APP URL GOES HERE
          const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwvcL2weZNLzstwQKx1sg8_sL6L-vRR9clNVT2oOCKAwAeRi-wSFQRg6-Mb5V1B8_RCVQ/exec";

          fetch(WEB_APP_URL, {
            method: 'POST',
            mode: 'no-cors', // Necessary for cross-origin requests to Apps Script
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
          })
          .then(() => {
            // Because 'no-cors' mode is active, we assume success once the fetch resolves
            signupForm.style.display = 'none';
            successMessage.style.display = 'block';
          })
          .catch(error => {
            console.error('Error!', error.message);
            alert("Something went wrong. Please try again.");
          })
          .finally(() => {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = "Join Wait List & Secure 10% Off";
          });
        }
      });