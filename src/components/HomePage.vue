<!-- components/HomePage.vue -->
<template>

<div class="header d-flex justify-content-between align-items-center">
  <div class="country">
    <div class="dropdown">
    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
        aria-expanded="false">
        <img class="flag" v-if="$store.state.country === 'INR'" src="../assets/images/in.svg" alt="">
        <img class="flag" v-else src="../assets/images/globe.svg" alt="">
        {{ $store.state.country }}
      </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li :class="{ active: 'INR' === $store.state.country }"><a @click="$store.state.country = 'INR'; updatePrices()" class="dropdown-item"><img class="flag" src="../assets/images/in.svg" alt=""> INR</a></li>
        <li :class="{ active: 'USD' === $store.state.country }"><a @click="$store.state.country = 'USD'; updatePrices()" class="dropdown-item"><img class="flag" src="../assets/images/globe.svg" alt=""> USD</a></li>
      </ul>
    </div>
  </div>
  <div class="logo">
    <img src="../assets/logo_PNG.png" alt="">
  </div>
  <div class="menu">
    <button class="btn" @click="() => selectionMenu = 'cart'" data-bs-toggle="offcanvas" href="#offcanvasExample"
      role="button" aria-controls="offcanvasExample">
      <span class=" position-relative">
      <i class="bi bi-cart2"></i>
        <!-- <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
          <span class="visually-hidden">New alerts</span>
        </span> -->
      </span>
       Cart 
      </button>
      <button v-if="$store.state.user" class="btn btn-secondary-outline" @click="logout">Logout</button>
      <button v-else class="btn btn-secondary-outline" data-bs-toggle="modal" data-bs-target="#loginModal">My Account</button>&nbsp;
  </div>
</div>

<!-- -------------------------------- -->
    <div>
        <Products ref="productsRefs"></Products>
    </div>
    <!-- <ContactUsForm /> -->

    <!-- login -->
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-body">
        <div class="d-flex justify-content-end">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <LoginForm/>
      </div>
    </div>
  </div>
</div>
  
</template>
  
<script>
import Products from './Products.vue';
import LoginForm from './LoginForm.vue';
import ContactUsForm from './ContactUsForm.vue';
export default {
    components: {
        Products,
        LoginForm,
        ContactUsForm
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        updatePrices() {
            this.$refs.productsRefs.updatePrices();
        },
        logout() {
            this.$store.dispatch('logout');
            this.$router.push('/login');
        },
        // login() {
        //     this.$router.push('/login');
        // }
    },
};
</script>