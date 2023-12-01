<!-- components/SignupForm.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <label for="username">Mobile Number (10 digits):</label>
    <input v-model="username" type="tel" id="username" pattern="[0-9]{10}" required />

    <button @click.prevent="sendOTP" :disabled="!isMobileValid">Send OTP</button>

    <!-- Display OTP field only when OTP is requested -->
    <div v-if="otpRequested">
      <label for="otp">Enter OTP:</label>
      <input v-model="otp" type="text" id="otp" required />
    </div>

    <label for="password">Password (min. 8 characters, 1 special character, 1 digit):</label>
    <input v-model="password" type="password" id="password" required />

    <label v-if="isChangePassword" for="currentPassword">Current Password:</label>
    <input v-if="isChangePassword" v-model="currentPassword" type="password" id="currentPassword"
      v-show="isChangePassword" required />

    <label for="confirmPassword">Confirm Password:</label>
    <input v-model="confirmPassword" type="password" id="confirmPassword" required />

    <button type="submit">{{ isChangePassword ? 'Change Password' : 'Sign Up' }}</button>
  </form>
</template>
  
<script>
export default {
  props: {
    isChangePassword: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      currentPassword: '', // Added for change password
      otp: '',
      otpRequested: false,
    };
  },
  computed: {
    isMobileValid() {
      return /^\d{10}$/.test(this.username);
    },
    isPasswordValid() {
      // Password must be at least 8 characters with at least one special character and one digit
      const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(.{8,})$/;
      return passwordRegex.test(this.password);
    },
  },
  methods: {
    sendOTP() {
      // You can implement OTP generation/sending logic here
      // For now, we'll just set otpRequested to true
      this.otpRequested = true;
    },
    async handleSubmit() {
      // Check if the username has exactly 10 digits before proceeding with signup
      if (this.isMobileValid) {
        // Additional validation for password and confirmation
        if (!this.isPasswordValid) {
          alert('Password must be at least 8 characters with one special character and one digit.');
          return;
        }

        if (this.password !== this.confirmPassword) {
          alert('Password and Confirm Password must match.');
          return;
        }

        // For change password, you can add additional validation here
        if (this.isChangePassword && !this.currentPassword) {
          alert('Please enter the current password.');
          return;
        }

        try {
          // Make an API request to change password or create a new user account
          const response = await this.$axios.post(
            this.isChangePassword ? '/api/change-password' : '/api/signup',
            {
              username: this.username,
              password: this.password,
              currentPassword: this.currentPassword, // Added for change password
              otp: this.otp, // Include OTP in the request
            }
          );

          // Handle the response (e.g., show a success message)
          alert(this.isChangePassword ? 'Password changed successfully!' : 'Signup successful! You can now log in.');

          // Redirect to the login page after successful signup or password change
          this.$router.push('/login');
        } catch (error) {
          // Handle signup or change password error (e.g., display an error message)
          console.error(this.isChangePassword ? 'Change password failed:' : 'Signup failed:', error.message);
          alert(this.isChangePassword ? 'Change password failed. Please try again.' : 'Signup failed. Please try again.');
        }
      } else {
        alert('Please enter a valid 10-digit mobile number.');
      }
    },
  },
};
</script>
  