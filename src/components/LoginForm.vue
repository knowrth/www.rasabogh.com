<!-- components/LoginForm.vue -->
<template>
  <div  class="login-form" v-if="!user">
        <div class="d-flex align-items-center flex-column" style="margin-top: -30px;">
        <i class="fs-1 bi bi-shield-lock"></i> 
        <h5><strong>Phone Verification</strong></h5>
        <p class="sub-title">Enter your phone number to verify your account.</p>
      </div>
        <div class="mb-3">
            <input v-model="phoneNumber" type="tel" id="phoneNumber" required class="form-control" placeholder="+919999999999">
        </div>
        <div class="mb-3">
            <input v-model="otp" type="otp" id="otp" required  class="form-control" placeholder="0000">
        </div>
        <button ype="submit" class="btn btn-sm btn-outline-secondary" @click="sendOTP">Send OTP</button>
        <button ype="submit" class="btn btn-sm btn-outline-primary" @click="signInWithOTP">Sign In</button>
      </div>
      <div v-else>
        <p>Welcome, {{ user.displayName }}!</p>
        <button @click="signOut">Sign Out</button>
      </div>
  </template>
  
  <script>
  import {
    getAuth,
    signInWithPhoneNumber,
    signOut,
    RecaptchaVerifier,
  } from 'firebase/auth';
  import firebaseApp from '../firebase';
  export default {
    data() {
      return {
        phoneNumber: '+919999999999',
        otp: '999999',
        user: null,
        recaptchaVerifier: null,
        isValid: false
      };
    },
    methods: {
      validateNumber() {
      // Regular expression to validate a mobile number with country code like "+91"
      const regex = /^\+\d{1,3}\d{10}$/;

      this.isValid = regex.test(phoneNumber.value);
    },
      initializeRecaptcha() {
        const auth = getAuth(firebaseApp);
        auth.settings.appVerificationDisabledForTesting = true;
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          size: 'invisible',
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            console.log('reCAPTCHA solved:', response);
          }
        });
      },
      sendOTP() {
        this.initializeRecaptcha();
        const auth = getAuth(firebaseApp);
        auth.settings.appVerificationDisabledForTesting = true;
        signInWithPhoneNumber(auth, this.phoneNumber, window.recaptchaVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            const code = prompt('Enter OTP sent to your mobile:');
            return confirmationResult.confirm(this.otp);
          })
          .then((userCredential) => {
            this.user = userCredential.user;
          })
          .catch((error) => {
            console.error(error);
          });
      },
      signInWithOTP() {
        this.initializeRecaptcha();
        const auth = getAuth(firebaseApp);
        auth.settings.appVerificationDisabledForTesting = true;
        signInWithPhoneNumber(auth, this.phoneNumber, window.recaptchaVerifier)
          .then((confirmationResult) => {
            // Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            return confirmationResult.confirm(this.otp);
          })
          .then((userCredential) => {
            this.user = userCredential.user;
          })
          .catch((error) => {
            console.error(error);
          });
      },
      signOut() {
        const auth = getAuth(firebaseApp);
        auth.settings.appVerificationDisabledForTesting = true;
        signOut(auth)
          .then(() => {
            this.user = null;
          })
          .catch((error) => {
            console.error(error);
          });
      },
      
    },
  };
  </script>
  <style>
.login-form .sub-title{
  font-size:12px; color: gray
}
.login-form input {
  text-align: center;
}
.login-form i, .login-form h5 {
  color: #20C5A0
}
</style>
  