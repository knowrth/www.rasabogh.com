<!-- components/ContactUsForm.vue -->
<template>
    <form @submit.prevent="submitForm">
      <label class="form-label">Contact us</label>
        <input class="form-control form-control-sm mb-1"  v-model="phone" type="tel" id="phone" placeholder="Phone" required>
        <input class="form-control form-control-sm mb-1"  v-model="email" type="email" id="email" placeholder="Email" required>
        <textarea class="form-control mb-1" rows="3" v-model="message" id="message" required placeholder="Enter Message"></textarea>
      <!-- Add the reCAPTCHA widget -->
      <div class="g-recaptcha" :data-sitekey="recaptchaSiteKey"></div>
      <button class="btn btn-secondary btn-sm" type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        phone: '',
        email: '',
        message: '',
        recaptchaSiteKey: 'YOUR_RECAPTCHA_SITE_KEY', // Replace with your reCAPTCHA site key
      };
    },
    methods: {
      async submitForm() {
        // Verify reCAPTCHA
        const recaptchaResponse = await new Promise((resolve) => {
          grecaptcha.execute(this.recaptchaSiteKey, { action: 'contact_us_submit' }, resolve);
        });
  
        // Check if reCAPTCHA verification is successful
        if (recaptchaResponse) {
          // Make API request to send contact form data
          try {
            const response = await this.$axios.post('/api/contact-us', {
              phone: this.phone,
              email: this.email,
              message: this.message,
              recaptchaResponse,
            });
  
            // Handle the API response (e.g., show a success message)
            alert('Message sent successfully!');
          } catch (error) {
            // Handle API error (e.g., display an error message)
            console.error('Failed to send message:', error.message);
            alert('Failed to send message. Please try again.');
          }
        } else {
          alert('reCAPTCHA verification failed. Please try again.');
        }
      },
    },
  };
  </script>
  