<script setup>
import ContactUsForm from './components/ContactUsForm.vue';
</script>

<template>
  <div>
    <RouterView />
  </div>
  <div class="container-fluid p-2"  style="background: #ddd;">
<div class="container">
  <div class="row">
    <div class="col-md-8 footer-links" >
      <a class="btn btn-link" data-bs-toggle="modal" data-bs-target="#aboutModal">About Rasabogh</a>
      <a class="btn btn-link" data-bs-toggle="modal" data-bs-target="#ppModal">Privacy Policy</a>
      <a class="btn btn-link" data-bs-toggle="modal" data-bs-target="#tosModal">Terms of Service</a>
      <a class="btn btn-link" data-bs-toggle="modal" data-bs-target="#refundModal">Cancellation and Refund terms</a>
    </div>
    <div class="col-md-4">
      <ContactUsForm />
    </div>
  </div>
</div>
</div>
  <!-- Button trigger modal -->

<div class="d-flex justify-content-center footer-design">Designed and built with &nbsp;<i class="bi bi-suit-heart-fill"
      style="color:red"></i>&nbsp; in Knowrth, India</div>
<!-- About -->
<div class="modal fade" id="aboutModal" tabindex="-1" aria-labelledby="aboutModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-body">
        <div class="d-flex justify-content-between">
            <h4><strong>About Rasabogh</strong></h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <h5>Rasabogh: A Culinary Tapestry of Tradition and Taste</h5>
        <p>
        Embark on a culinary adventure with Rasabogh, a brand that embodies the essence of Indian cuisine, where tradition meets taste. Our name, Rasabogh, is a testament to our commitment to delivering an explosion of flavors, a symphony of spices, and a journey through the diverse culinary landscape of India.
        </p>
        <h5>Rooted in Tradition, Inspired by Innovation</h5>
        <p>
        At Rasabogh, we believe that authentic Indian cuisine is not merely about replicating recipes; it's about capturing the soul of India, the vibrant colors, the aromatic spices, and the stories woven into every dish. Our culinary maestros, guided by generations of expertise, meticulously craft each dish, adhering to time-honored recipes passed down through the ages.
        </p>
        <h5>Global Presence, Local Flavors</h5>
        <p>
        Rasabogh is more than just an Indian food brand; it's a bridge connecting India's rich culinary heritage to a global audience. We're passionate about sharing the authentic flavors of India with food enthusiasts worldwide, ensuring that the essence of Indian cuisine remains true to its roots.
        </p>
        <h5>Quality Ingredients: The Cornerstone of Our Culinary Excellence</h5>
        <p>
        We believe that the quality of our ingredients forms the foundation of our culinary excellence. We source the finest spices, freshest vegetables, and choicest meats, ensuring that every bite is a symphony of flavors. Our commitment to quality is unwavering, and we never compromise on the authenticity and taste of our dishes.
        </p>
        <h5>Knowrth Enterprises LLP: The Driving Force Behind Rasabogh</h5>
        <p>
        Rasabogh is a proud enterprise of Knowrth Enterprises LLP, a company committed to excellence and innovation. We share a deep passion for Indian cuisine and are driven by the desire to showcase its richness and diversity to the world.
        </p>
        <h5>Relish Flavours: Our Promise to You</h5>
        <p>
        Our tagline, "Relish Flavours," encapsulates our mission to provide an unparalleled culinary experience, one that evokes memories of home-cooked meals, the warmth of family gatherings, and the vibrant flavors of India. We invite you to embark on a culinary journey with Rasabogh and discover the true essence of Indian cuisine.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- refund -->
<div class="modal fade" id="refundModal" tabindex="-1" aria-labelledby="refundModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-body">
        <div class="d-flex justify-content-between">
            <h4><strong>Cancellation and Refund terms</strong></h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <h5>Cancellation Policy</h5>

      <p>We understand that plans can change, and we want to make it as easy as possible for you to cancel your order if you need to. Please review our cancellation policy below:
    </p>
<h5>Orders can be cancelled within 4 hours from the time of order placement</h5>
<p>
* You can cancel your order online by logging into your account and clicking on the "Cancel Order" button. <br>
* You can also cancel your order by messaging our customer service WhatsApp at 8520889700.
</p>
<h5>Cancellation Fees</h5>
<p>
There is a minimum cancellation fee of 3.5% of the order total to cover payment gateway charges. This fee will be applied to all orders that are cancelled.
</p>
<h5>Orders cannot be cancelled once they have been prepared or shipped</h5>
<p>
Once your order has been prepared or shipped, it cannot be cancelled. This is because we have already started preparing your food and cannot stop the process once it has begun.
</p>
<h5>Exceptions</h5>
<p>
We may make exceptions to our cancellation policy in certain circumstances, such as if there is a problem with your order or if you have a medical emergency. Please contact our customer service line to discuss any exceptions.
</p>
<h5>Refunds</h5>
<p>
If you cancel your order, you will be refunded the full amount of your order, minus the cancellation fee. Refunds will be processed within 5-7 business days.
</p>
<h5>We hope you understand our cancellation policy. If you have any questions, please do not hesitate to contact us.</h5>
      </div>
    </div>
  </div>
</div>

<!-- TOS -->
<div class="modal fade" id="tosModal" tabindex="-1" aria-labelledby="tosModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-body">
        <div class="d-flex justify-content-between">
            <h4><strong>Terms of Service for E-commerce Food Store</strong></h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <h5>1. Introduction</h5>
<p>
Welcome to [Store Name], an online food store ("Store" or "we") that provides a platform for users to purchase a variety of food products from multiple manufacturers and suppliers. By accessing or using our website, mobile app, or any other services provided by us (collectively, the "Platform"), you agree to be bound by these Terms of Service ("Terms").
</p>
<h5>2. Account Creation and Usage</h5>
<p>
To access certain features of the Platform, you may be required to create an account. When creating an account, you agree to provide accurate and complete information about yourself. You are responsible for maintaining the confidentiality of your account login information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
</p>
<h5>3. Orders and Payment</h5>
<p>
When you place an order on our Platform, you agree to purchase the products at the prices displayed. We accept a variety of payment methods, including credit cards, debit cards, and online payment services. You agree to pay for your orders in accordance with the payment terms displayed on the Platform.
</p>
<h5>4. Shipping and Delivery</h5>
<p>
We use a variety of shipping partners to deliver your orders. We will make every effort to deliver your orders within the estimated delivery time frames. However, we cannot guarantee that your orders will be delivered on time due to factors beyond our control, such as weather, traffic, and shipping carrier delays. In the event of a delay, we will notify you as soon as possible.
</p>
<p>
You are responsible for inspecting your orders upon delivery and reporting any damage or discrepancies to us immediately. If you are not satisfied with your order, you may return it for a refund or exchange in accordance with our return policy.
</p>
<h5>5. Customer Usage Data</h5>
<p>
We collect certain information about your usage of our Platform, such as your browsing history, purchase history, and demographic data. We use this information to improve our services, personalize your experience, and for analytics purposes. We will not share your personal information with third parties without your consent, except as required by law or to provide our services.
</p>
<h5>6. Intellectual Property</h5>
<p>
The Platform and its contents, including but not limited to trademarks, copyrights, and trade secrets, are owned by us or our licensors. You may not copy, reproduce, distribute, modify, or create derivative works from any of the materials on the Platform without our prior written consent.
</p>
<h5>7. Disclaimers and Limitations of Liability</h5>
<p>
We make no warranties, express or implied, about the operation of the Platform or the information, products, or services offered on the Platform. You agree that your use of the Platform is at your own risk. We will not be liable for any damages arising from your use of the Platform, including but not limited to direct, indirect, incidental, special, or consequential damages.
</p>
<h5>8. Governing Law and Dispute Resolution</h5>
<p>
These Terms will be governed by and construed in accordance with the laws of the State of [State], without regard to its conflict of laws principles. Any disputes arising out of or relating to these Terms will be resolved exclusively in the courts of the State of [State].
</p>
<h5>9. Changes to Terms</h5>
<p>
We may change these Terms from time to time. We will notify you of any material changes by posting the updated Terms on the Platform. Your continued use of the Platform following the posting of updated Terms will constitute your acceptance of the updated Terms.
</p>
<h5>10. Contact Us</h5>
<p>
If you have any questions about these Terms, please contact us at [email protected]
</p>
<h5>Additional Terms for Manufacturers and Suppliers</h5>
<p>
In addition to the general Terms above, the following terms apply to manufacturers and suppliers who use our Platform:
</p>
<p>
* You agree to provide us with accurate and complete information about your products, including but not limited to product descriptions, ingredients, and nutritional information.<br>
* You agree to comply with all applicable laws and regulations relating to the sale of food products.<br>
* You agree to indemnify and hold us harmless from any and all claims, damages, losses, and expenses arising out of your use of the Platform or your breach of these Terms.
</p>
<h5>Additional Terms for Procurement Partners</h5>
<p>
In addition to the general Terms above, the following terms apply to procurement partners who use our Platform:
</p>
<p>
* You agree to source products from reputable suppliers and to ensure that all products comply with applicable laws and regulations.<br>
* You agree to maintain adequate inventory levels to meet customer demand.<br>
* You agree to deliver products to our warehouse in accordance with our delivery schedule
</p>
      </div>
    </div>
  </div>
</div>

<!-- p p -->
<div class="modal fade" id="ppModal" tabindex="-1" aria-labelledby="ppModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-body">
        <div class="d-flex justify-content-between">
            <h4><strong>Privacy Policy</strong></h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        
      </div>
    </div>
  </div>
</div>
  
</template>

<style>
.header .logo img {
  width: 150px;
}

.accordion .accordion-button {
  padding: 5px 10px;
}

.card {
  margin-bottom: 25px;
}

.flag {
  width: 22px;
  margin-top: -5px;
}

.chicken {
  background: #F7E9A0;
  background-image: url(./assets/images/chicken.svg);
}

.mutton {
  background: #F76D6D;
  background-image: url(./assets/images/mutton.svg);

}

.fish {
  background: #A8D1E7;
  background-image: url(./assets/images/fish.svg);
}

.carousel {
  background: #29AD9A;
  height: 180px;
}

.carousel-item {
  height: 180px;
}

.accordion-collapse {
  position: absolute;
  width: 100%;
  z-index: 9;
}
.country, .menu, .logo {
  flex:1;
  display:flex;
  justify-content: center;
}
.country{
  justify-content: flex-start;
}
.menu {
  justify-content: flex-end;
}
.carousel-caption {
  color: white;
  width: 100%;
  left: 0px;
  right: 0px;
}

.footer-design {
  font-size: 11px;
}

.footer-links {
  display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.footer-links a{
  color: gray;
  font-size: 13px;
  text-decoration: none;
}

@media (min-width: 1024px) {}</style>
