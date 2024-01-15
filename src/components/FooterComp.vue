<template>
    <footer class="foot ">
 <hr class="container-fluid">
 <div class="row">
   <div class="col-lg-4">
     <img src="frontend/imgs/logo.PNG" alt="" style="transform: scale(.75,.75);">
     <div class="ms-3 foot-div">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis fugit unde
       tempore quaerat quia soluta</div>
   </div>
   <div class="col-lg-2">
     <ul class="list-unstyled pt-5 ul-foot">
      <routerLink :to="{name:'home'}"><li>Home</li></routerLink>
       <routerLink :to="{name:'about'}"><li>About Us</li></routerLink>
       <routerLink :to="{name:'contact'}"><li>Contact Us</li>
      </routerLink>
     </ul>
   </div>
   <div class="col-lg-2">
     <ul class="list-unstyled pt-5">
       <li><routerLink class="nav-link" :to="{name:'tours'}" >Tours</routerLink></li>
       <routerLink :to="{name:'destinationsComp'}"><li>Destination</li></routerLink>
       <li><routerLink class="nav-link" :to="{name:'tours-guides'}" >Blog</routerLink></li>
     </ul>
   </div>
   <div class="col-lg-2">
     <ul class="list-unstyled pt-5">
       <li><routerLink class="nav-link" :to="{name:'tours-guides'}" >Tour Guide</routerLink></li>
       <a @click="openModal('modal_signup_2')" style="cursor:pointer"><li>Join As a Tour Guide</li></a>
       <modalSignupTourComp></modalSignupTourComp>


       <routerLink :to="{name:'faq'}"><li>FAQs</li></routerLink>
       <routerLink :to="{name:'term'}"><li>Term of services</li></routerLink>
       
       <routerLink :to="{name:'policy'}"><li>Privacy policy</li></routerLink>
     </ul>
   </div>

   <div class="col-lg-2">
     <ul class="list-unstyled pt-5">
       <i class="fa-brands fa-square-facebook me-3 social"></i>
       <i class="fa-brands fa-linkedin social me-3 "></i>
       <i class="fa-brands fa-instagram social me-3 "></i>
       <i class="fa-brands fa-square-twitter social me-3 "></i>
       <p>&copy; All Rights Reserved to Kenana 2023</p>
     </ul>
   </div>
 </div>
</footer>

</template>

<script>
import ModalSignupTourComp from '@/components/Design/ModalSignup_tour.vue';
export default{
    name:'FooterComp',
    components:{ModalSignupTourComp},



    beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  mounted() {
     // JavaScript code to handle click event on the download icon
     document.getElementById("upload-icon").addEventListener("click", function () {
      document.getElementById("file-upload").click(); // Trigger the file upload input
    });

window.addEventListener('resize', this.handleResize);
  },
  
methods: {
  closeMultipleModals() {
    this.closeModal('modal_signup_2');
    this.closeModal('modal_signup');
    this.closeModal('myModal_login');
  },
  openModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
      this.createModalBackdrop();
    },
    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
      this.removeModalBackdrop();
    },
    handleResize() {
      this.removeModalBackdrop();
    },
    createModalBackdrop() {
      const backdrop = document.createElement('div');
      backdrop.classList.add('modal-backdrop');
      document.body.appendChild(backdrop);
    },
    removeModalBackdrop() {
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
    },

  },
    
}
</script>
<style>
a{
  color: rgb(18, 18, 18);
}
</style>