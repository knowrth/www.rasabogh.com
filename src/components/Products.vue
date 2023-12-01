<!-- App.vue -->
<template>
  <div class="carousel">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <!-- <img src="..." class="d-block w-100" alt="..."> -->
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <!-- <img src="..." class="d-block w-100" alt="..."> -->
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <!-- <img src="..." class="d-block w-100" alt="..."> -->
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <!-- ---------------------------- -->
  <div class="p-3">
    <!-- <h5>{{ category.name.toUpperCase() }}</h5> -->
    <div class="row">
      <template v-for="product in products" :key="product.id">
        <template  v-if="product[this.$store.state.country === 'USD' ? 'US': 'IN']">
        <div class="col-lg-3 col-md-4 col-sm-2">
          <div class="card">
            <img src="../assets/logo_PNG.png" class="card-img-top" alt="..."
              style="filter: grayscale(100%); opacity: 0.3;">
            <div class="products">
              <h5>{{ product.title }}</h5>
              <ul class="list-group  list-group-flush">
                <template v-for="unit in product.variants" >
                  <template v-if="unit.store === (this.$store.state.country === 'USD' ? 'US': 'IN')">
                  <li class="list-group-item">
                    <div class="d-flex justify-content-between">
                      <span value="">{{ unit.unit }}
                         - {{ formatPrice(unit.price) }}
                        </span> 
                      <button
                        class="btn btn-primary btn-sm" @click="addToCart(product, unit)">Add to Cart</button>
                    </div>
                  </li>
                </template>
                </template>
              </ul>


              <!-- <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  :data-bs-target="'#panelsStayOpen-' + product.id" aria-expanded="true"
                  :aria-controls="'panelsStayOpen-' + product.id">
                  <h5>{{ product.name }}</h5>
                </button>
              </h2>
              <div :id="'panelsStayOpen-' + product.id" class="accordion-collapse collapse">
                <div class="">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <div class="d-flex justify-content-between">
                        <span value="">{{ formatPrice(product.price) }}</span> <button class="btn btn-primary" @click="addToCart(product)">Add to Cart</button>
                        
                      </div>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div> -->
            </div>
          </div>
        </div>
      </template>
      </template>
    </div>
  </div>

  <!-- --------------------------- -->

  <!-- ---------------------- -->
  <!-- <div>
            <ul>
                <li v-for="product in products" :key="product.id">
                    {{ product.name }} - {{ formatPrice(product.price) }}
                    <button @click="addToCart(product)">Add to Cart</button>
                </li>
            </ul>
        </div> -->
  <!-- --------cart----------- -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel"><i class="bi bi-cart2"></i> CART</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="form-floating input-group-sm  mb-1">
        <textarea class="form-control" v-model="address" placeholder="Place Address" id="address"
          style="height: 60px"></textarea>
        <label for="address">Address</label>
      </div>
      <div class="input-group input-group-sm  mb-1">
        <input type="text" class="form-control" v-model="pincode" placeholder="Pincode" aria-label="pincode" minlength="6"
          maxlength="6" v-on:keyup.enter="checkPincode" aria-describedby="pincode">
        <button class="btn btn-outline-secondary" type="button" id="pincode" @click="checkPincode">Check</button>
      </div>
      <div v-if="appliedPincode">
        <div class="alert alert-sm alert-primary d-flex align-items-center" role="alert">
          <i class="bi bi-geo-alt"></i> &nbsp;
          <div>
            Applied PINCODE: <strong> {{ appliedPincode }}</strong>
          </div>
        </div>
      </div>

      <div class="input-group input-group-sm  mb-1">
        <input type="text" class="form-control" v-model="couponCode" placeholder="Enter coupon code"
          v-on:keyup.enter="applyCoupon" aria-label="coupon" aria-describedby="coupon">
        <button class="btn btn-outline-secondary" type="button" id="coupon" @click="applyCoupon">Apply Coupon</button>
      </div>
      <div v-if="appliedCoupon?.code">
        <div class="alert alert-sm alert-primary d-flex align-items-center" role="alert">
          <i class="bi bi-patch-check"></i> &nbsp;
          <div>
            Applied Coupon: <strong> {{ appliedCoupon.code }}</strong>
          </div>
        </div>
      </div>
      <hr>
      <div class="cart-list" v-for="cartItem in cart" :key="cartItem.id">
        <div> {{ cartItem.name }} - {{ cartItem.unit }}</div>
        <div class="qty input-group input-group-sm">
          <button class="btn btn-outline-secondary" type="button" @click="incrementQuantity(cartItem)">+</button>
          <label class="input-group-text">{{ cartItem.quantity }}</label>
          <button class="btn btn-outline-secondary" type="button" @click="decrementQuantity(cartItem)">-</button>
        </div>
        <div class="total">{{ formatPrice(cartItem.totalPrice) }}</div>
      </div>
      <div class="summary">
        <p><strong>Total Cart Price:</strong> {{ formatPrice(cartTotalPrice) }}</p>
        <p>Discount: {{ formatPrice(cartTotalPrice - finalPrice) }}</p>

        <p>Shipping Charges: {{ formatPrice(shippingCharges) }}</p>
        <p><strong>Final Price:</strong> {{ formatPrice(finalPrice + this.shippingCharges) }}</p>
      </div>
      <!-- <button class="btn btn-outline-secondary"  data-bs-toggle="modal" data-bs-target="#loginModal">Login</button> -->
      <button class="btn btn-primary btn-sm" :disabled="!appliedPincode || !address || cartTotalPrice === 0"><i
          class="bi bi-cart4"></i> Checkout</button>
    </div>
  </div>
</template>
  
<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
  data() {
    return {
      products: [],
      // [
      //   {
      //     id: 1, name: 'Chicken Keema', units:
      //       [
      //         { unit: 200, prices: { USD: 2, INR: 300 }, price: 300 },
      //         { unit: 500, prices: { USD: 4, INR: 600 }, price: 600 },
      //         { unit: 1000, prices: { USD: 7, INR: 1100 }, price: 1100 },
      //       ]
      //   },
      //   {
      //     id: 2, name: 'Mutton Keema', units:
      //       [
      //         { unit: 200, prices: { USD: 4, INR: 600 }, price: 600 },
      //         { unit: 500, prices: { USD: 8, INR: 1200 }, price: 1200 },
      //         { unit: 1000, prices: { USD: 16, INR: 1800 }, price: 1800 },
      //       ]
      //   },
      // ],
      cart: [],
      couponCode: '',
      appliedCoupon: null,
      appliedPincode: null,
      pincode: '',
      finalPrice: 0,
      shippingCharges: 0,
      address: ''
    };
  },
  mounted() {
      this.fetchData();
  },
  computed: {
    cartTotalPrice() {
      // Calculate the total price of all items in the cart
      return this.cart.reduce((total, item) => total + item.totalPrice, 0);
    },
  },
  methods: {
    // login() {
    //     this.$router.push('/login');
    // },
    checkout() {
      const items = [];
      this.cart.forEach(data =>{
        items.push({
          "id":data.id,
              "sku":data.sku,
              "title":data.name,
              "quantity":data.quantity,
              "price":data.price
        })
      })
      const output = {
          "id": "b793a8e8-c7e5-4d3c-9039-116666b43da8",
          "customer_id":"1",
          "items":items,
          "shipping_charges":this.shippingCharges,
          "coupon_code":this.appliedCoupon
      }
      
      try {
        const response = this.axios.post('src/json/checkout.json', output);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async fetchData() {
      try {
        const response = await this.axios.get('src/json/products.json');
        console.log(response.data)
        this.products = response.data;
        this.products.forEach(data=>{
          data['IN']=data.variants.some(x=>x.store === 'IN');
          data['US']=data.variants.some(x=>x.store === 'US');
        })
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    
    formatPrice(price) {
      return `${price} ${this.$store.state.country === 'USD' ? 'USD' : 'INR'}`;
    },
    updatePrices() {
      this.pincode = '';
      this.appliedPincode = '';
      this.shippingCharges = 0;
      this.appliedCoupon = '';
      this.finalPrice = 0;
      this.cart = [];
      this.couponCode = '';
      // // Update product prices based on the selected country
      // this.products.forEach((product) => {
      //   product.units.forEach((unit) => {
      //     unit.price = unit.prices[this.$store.state.country];
      //   })

      // });

      // // Update prices in the shopping cart
      // this.updateCartPrices();

      // // Recalculate final price after country change
      // this.calculateFinalPrice();
    },
    addToCart(product, quantity) {
      // Check if the product is already in the cart
      const cartItem = this.cart.find((item) => item.id === product.id && quantity.sku === item.sku);

      if (cartItem) {
        // If the product is already in the cart, increment the quantity
        cartItem.quantity++;
        cartItem.totalPrice = cartItem.quantity * cartItem.price;
      } else {
        // If the product is not in the cart, add a new cart item
        this.cart.push({
          id: product.id,
          name: product.title,
          price: quantity.price,
          quantity: 1,
          totalPrice: quantity.price,
          unit: quantity.unit,
          sku: quantity.sku
        });
      }

      // Recalculate final price after adding to cart
      this.calculateFinalPrice();

      // Alert the user about the added product and quantity
      // alert(`${product.name} Added to cart,  Quantity in cart: ${cartItem ? cartItem.quantity : 1}`);
      toast.info(`${product.title} - ${quantity.unit} Added \nQuantity in cart: ${cartItem ? cartItem.quantity : 1}`, {
        autoClose: 3000,
        position: 'bottom-right',
        theme: 'dark'
      });
    },
    updateCartPrices() {
      // Update prices in the shopping cart based on the selected country
      this.cart.forEach((item) => {
        const pro = this.products.filter(p => p.id === item.productId)[0];
        const product = pro.units.find((u) => u.unit === item.unit);
        if (product) {
          item.price = product.prices[this.$store.state.country];
          item.totalPrice = item.quantity * item.price;
        }
      });
    },
    incrementQuantity(cartItem) {
      cartItem.quantity++;
      cartItem.totalPrice = cartItem.quantity * cartItem.price;

      // Recalculate final price after quantity change
      this.calculateFinalPrice();
    },
    decrementQuantity(cartItem) {
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
        cartItem.totalPrice = cartItem.quantity * cartItem.price;
      } else {
        const index = this.cart.findIndex((item) => item.id === cartItem.id && item.sku === cartItem.sku);
        if (index !== -1) {
          this.cart.splice(index, 1);
        }
      }

      // Recalculate final price after quantity change
      this.calculateFinalPrice();
    },
    removeFromCart(cartItem) {
      // Remove the product from the cart if the quantity is one
      if (cartItem.quantity === 1) {
        const index = this.cart.findIndex((item) => item.id === cartItem.id && item.sku === cartItem.sku);
        if (index !== -1) {
          this.cart.splice(index, 1);
        }
      } else {
        // If the quantity is more than one, decrement the quantity
        this.decrementQuantity(cartItem);
      }

      // Recalculate final price after removing from cart
      this.calculateFinalPrice();
    },
    async applyCoupon() {
      this.couponCode = '';
      try {
        const response = await this.axios.get('src/json/coupon.json');
        console.log(response.data)
        if (response.data && response.data.store === (this.$store.state.country === 'USD' ? 'US': 'IN')) {
          this.appliedCoupon = response.data;
          this.finalPrice = this.cartTotalPrice - this.discountValue();
          // Clear the coupon code field
          
        } else {
          this.appliedCoupon = null;
          this.finalPrice = this.cartTotalPrice;
          toast.warning(`Coupon is expired or invalid.`, {
            autoClose: 3000,
            position: 'top-center',
          });
        }
        this.applyShippingCharges();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    discountValue() {
      let discount = 0;
          if(this.cartTotalPrice >= this.appliedCoupon.min_order_value)
          {
          discount= (this.appliedCoupon.product_discount.type === 'PERCENTAGE') ? (this.cartTotalPrice * (this.appliedCoupon.product_discount.value / 100))
            : this.appliedCoupon.product_discount.value;
          }
          return discount;
    },
    calculateFinalPrice() {
      // Recalculate final price based on cart total and applied coupon
      if (this.appliedCoupon && this.appliedCoupon.store === (this.$store.state.country === 'USD' ? 'US': 'IN')) {
        this.finalPrice = this.cartTotalPrice - this.discountValue();
      } else {
        this.finalPrice = this.cartTotalPrice;
      }
      this.applyShippingCharges()
    },
    checkPincode() {
      this.appliedPincode = this.pincode
      this.applyShippingCharges();
    },
    applyShippingCharges() {
      if (this.pincode === '534197') {
        this.shippingCharges = 0;
      } else {
        this.shippingCharges = 40;
      }
      if(this.cartTotalPrice >= this.appliedCoupon.min_order_value)
        {
          this.shippingCharges = this.shippingCharges - ((this.appliedCoupon.shipping_discount.type === 'PERCENTAGE') ? (this.shippingCharges * this.appliedCoupon.shipping_discount.value / 100)
          :  (this.appliedCoupon.shipping_discount.value >= this.shippingCharges) ? this.appliedCoupon.shipping_discount.value : this.shippingCharges);
        }
    }
  },
  created() {
    // Set default prices based on the default country (INR)
    this.updatePrices();
  },
};
</script>
  
<style>
#app {
  /* max-width: 600px;
    margin: 20px auto; */
  font-family: 'Arial', sans-serif;
}

select {
  margin-bottom: 10px;
}

button {
  margin-left: 10px;
}

.cart-list {
  display: flex;
  align-items: center;
  margin-bottom: 3px;
}

.cart-list div {
  font-size: 13px;
}

.cart-list div:first-child {
  flex:3
}

.cart-list .qty,
.cart-list .total {
  flex: 26px;
  text-align: right;
}

input {
  margin-right: 10px;
}

.accordion .accordion-button {
  margin: 0px
}

.products h5 {
  padding-left: 15px;
  margin-bottom: 0px;
  border-top: 1px solid #ddd;
}

.products ul {
  border-radius: 10px;
}

.products li {
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 13px;
}

.products button {
  font-size: 12px;
  padding: 0px 10px
}

.alert-sm {
  padding: 5px;
  font-size: 12px;
  margin-bottom: 5px
}

.summary p {
  margin: 5px;
  font-size: 13px;
}
.offcanvas-body {
  padding-top: 0px;
}
</style>