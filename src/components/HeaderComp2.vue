<template>
   
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <!-- Container wrapper -->
      <!-- <div class="container-fluid"> -->
        <!-- Toggle button -->
        <!-- <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button> -->



         
      
      
            
        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img src="frontend/imgs/logo.PNG" width="150px" height="80" alt="Logo" loading="lazy" />
          </a>
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 pt-1">
            <li class="nav-item">
              <a class="nav-link ps-5" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tours</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Destinations</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tour Gudies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>



            <!-- <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa-solid fa-globe"></i></a>
          </li> -->
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->

        <!-- Right elements -->
        <div class="d-flex align-items-center">
          <!-- Icon -->
          <a class="nav-link pe-1" href="#"><i class="fa-solid fa-globe" style="font-size: 20px;"></i></a>

          <!-- chat icon -->
          <nav class="navbar navbar-expand navbar-light bg-white">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link" href="#" id="msg-dropdown" role="button" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <!-- <i class="fa-regular fa-comment fa-beat" style="font-size: 30px;"></i> -->
                  <img src="../../public/frontend/imgs/chat.svg" class="fa-beat">

                </a>
                <div class="dropdown-menu dropdown-menu-end p-3 shadow" aria-labelledby="notification-dropdown">
                  <a class="dropdown-item  border-bottom" href="#">
                    <img src="frontend/imgs/ava2.png" alt="Notification Image" class="notification-image me-3" width="40px">

                    <span class="notification-text">Lorem ipsum dolor, sit amet</span>
                    <i class="fa-solid fa-check  ps-5"></i>
                    <span class="ms-5 ps-2 d-block text-secondary" style="font-size: 12px; margin-top: -9px;">12:00
                      PM</span>
                  </a>


                  <a class="dropdown-item border-bottom" href="#">
                    <img src="frontend/imgs/ava2.png" alt="Notification Image" class="notification-image me-3" width="40px">
                    <span class="notification-text">Lorem ipsum dolor, sit amet</span>
                    <i class="fa-solid fa-check  ps-5"></i>
                    <span class="ms-5 ps-2 d-block text-secondary" style="font-size: 12px; margin-top: -9px;">12:00
                      PM</span>
                  </a>

                  <a class="dropdown-item  border-bottom" href="#">
                    <img src="frontend/imgs/ava2.png" alt="Notification Image" class="notification-image me-3" width="40px">
                    <span class="notification-text">Lorem ipsum dolor, sit amet</span>
                    <i class="fa-solid fa-check  ps-5"></i>
                    <span class="ms-5 ps-2 d-block text-secondary" style="font-size: 12px; margin-top: -9px;">12:00
                      PM</span>
                  </a>
                  <routerLink class="dropdown-item bg-light text-center" :to="{name:'messages'}" >
                  <!-- <a href="#" class="dropdown-item p-3 bg-light text-center "> -->
                    <span class="notification-text ">See All Messages</span>
                    </routerLink>
                  <!-- </a> -->
                </div>
              </li>
            </ul>
          </nav>

          <!-- end chat icon -->


          <!-- notification bar -->
        <nav class="navbar navbar-expand navbar-light bg-white ps-0">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <!-- <a class="nav-link dropdown-toggle" -->
                <a class="nav-link" href="#" id="notification-dropdown" role="button" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <!-- <i class="fas fa-bell fa-shake" style="font-size: 30px;"></i> -->
                  <img src="../../public/frontend/imgs/bill.svg" class="fa-shake">
                  <span class="badge bg-danger">3</span>
                </a>
                <div class="dropdown-menu dropdown-menu-end p-3 shadow" aria-labelledby="notification-dropdown">
                  <a class="dropdown-item  border-bottom" href="#">
                    <img src="frontend/imgs/ava2.png" alt="Notification Image" class="notification-image me-3" width="40px">
                    <span class="notification-text">Lorem ipsum dolor, sit amet</span>
                    <span class="ms-5 ps-2 d-block text-secondary" style="font-size: 12px; margin-top: -9px;">12:00
                      PM</span>
                  </a>


                  <a class="dropdown-item border-bottom" href="#">
                    <img src="frontend/imgs/ava2.png" alt="Notification Image" class="notification-image me-3" width="40px">
                    <span class="notification-text">Lorem ipsum dolor, sit amet</span>
                    <span class="ms-5 ps-2 d-block text-secondary" style="font-size: 12px; margin-top: -9px;">12:00
                      PM</span>
                  </a>

                  <a class="dropdown-item  border-bottom" href="#">
                    <img src="frontend/imgs/ava2.png" alt="Notification Image" class="notification-image me-3" width="40px">
                    <span class="notification-text">Lorem ipsum dolor, sit amet</span>
                    <span class="ms-5 ps-2 d-block text-secondary" style="font-size: 12px; margin-top: -9px;">12:00
                      PM</span>
                  </a>
<routerLink class="dropdown-item p-3 bg-light text-center " :to="{name:'notify'}"><span class="notification-text ">See All Notifications</span></routerLink>
                  <!-- <a href="#" class="dropdown-item p-3 bg-light text-center ">
                    <span class="notification-text ">See All Notifications</span>
                  </a> -->
                </div>
              </li>
            </ul>
          </nav>
          <!-- end notification bar -->



          <div class="dropdown">
            <a class="dropdown-toggle" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="frontend/imgs/clients_openion.PNG" alt="Profile Image" class="profile-image rounded-circle" width="50px">
            </a>
            <ul class="dropdown-menu" aria-labelledby="profileDropdown">
              <li>
                <!-- <a class="dropdown-item" href="#"> -->
                  <routerLink class="dropdown-item" :to="{name:'u-profile'}">
                  <i class="fas fa-user-circle me-2"></i>
                  Profile
                </routerLink>
                <!-- </a> -->
              </li>
              <li>
                <!-- <a class="dropdown-item" href="#"> -->
           <routerLink class="dropdown-item" :to="{name:'favo'}">
                  <i class="fas fa-heart fa-heart2 me-2 rounded-circle"></i>
                  Favourite
                <!-- </a> -->
            </routerLink>
              </li>
              <li>
                <routerLink class="nav-link" :to="{name:'new_tour'}" >
                <a class="dropdown-item">
                  <i class="fas fa-user-circle me-2"></i>
                  Join as Tour Guide
                </a>
              </routerLink></li>

                <modalSignupTourComp></modalSignupTourComp>
              <!-- Additional dropdown items can be added here -->
            </ul>
          </div>
          
        </div>

      </nav>
    <!-- Navbar -->



</template>

<script>
 import ModalSignupTourComp from '@/components/Design/ModalSignup_tour.vue';

export default{
    name:'HeaderComp2',
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
@import '../../public/frontend/css/style.css';

.modal {
  display: none;
  position: fixed;
  z-index: 1050;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-dialog {
  margin: 10% auto;
  /* max-width: 500px; */
}
.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}
.modal-open {
  overflow: hidden;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1040;
}

.modal-xl {
    max-width: 90% !important;
  }
  .fa-heart2{
    color:black !important;
    font-size: 14px !important;
  }
 
</style>