<template>

<div class="modal" id="modal_signup" >
  <div class="modal-dialog modal-xl" >
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header border-0">
        
        <button type="button" class="btn-close text-white" @click="closeModal('modal_signup')"></button>
      </div>

      <!-- Modal body -->
  
        
      <div class="modal-body">
        <div class="container-fluid">
          <div class=" rounded-4">
            <div class="row">
              <div class="col-lg-4 col-md-4 p-0" style="margin-left: -20px;">
                <img src="frontend/imgs/sign_in.jpg" alt="" width="100%">
          
              </div>
          
              <div class=" sign-up col-lg-7 col-md-7  ps-2 ">
                <!-- <h2 class="fw-bolder mt-5 pt-5">Login</h2> -->
                <!-- <div class="linee mb-5 "></div> -->
          
                <div class="pre-form d-flex justify-content-center mt-5 pt-1 mb-4">
                  <h1 >Do you want to join as ....</h1>
                </div>
                <form action="" class="ps-5">
          
                  <div class="row">
          
                    <div class="col checks">
                      <label class="checkbox-image">
                        <input type="radio" name="ch" v-model="selectedOption" value="tourGuide">
                        <img src="frontend/imgs/tour_ico_1.png" alt="Checkbox Image">
                      </label>
                      <span style="font-size: 40px;" >or</span>
                      
                      <p class="ms-5 mt-2">Tour Guid</p>
                      
                    </div>
          
                    <!-- col2_2 -->
                    <div class="col checks">
                      <label class="checkbox-image">
                        <input type="radio" name="ch" v-model="selectedOption" value="user">
                        <img src="frontend/imgs/user_ico1.PNG" alt="Checkbox Image" style="margin-top: 12px;">
                      </label>
                      <p class="ms-5 ps-4">User</p>
          
                    </div>
                   
          
                  </div>
          
          
                  <div>
                    <!-- <button class="text-white p-3 rounded-5 border-0 mt-5" style="width: 100%; background-color: #ff7013; font-size: 27px;" @click="openModal('modal_signup_2')">Next</button> -->

                    <!-- <a class=" btn text-white p-3 rounded-5 border-0 mt-5" style="width: 100%; background-color: #ff7013; font-size: 27px;" @click="openModal('modal_signup_2');closeModal('myModal_login');closeModal('modal_signup')" id="next_p">Next</a> -->
                    <a class=" btn text-white p-3 rounded-5 border-0 mt-5" style="width: 100%; background-color: #ff7013; font-size: 27px;" @click="reset(); selectOption();closeModal('myModal_login');closeModal('modal_signup')" id="next_p">Next</a>
                    "
                  </div>
                  
                 </form>
          
              </div>
            </div>
            
          </div>
          </div>


      </div>

      </div>

      <!-- Modal footer -->
 

    
  </div>
</div> 
</template>


<script>
import axios from "axios";
export default{
  data() {
    return {
      selectedOption: null,
    };
  },
  name: 'ModalSignupComp',


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
  reset(){
    axios.defaults.withCredentials = false


axios.defaults.headers.common['Access-Control-Allow-Origin'] = ' '


axios.interceptors.request.use((config) => {
  try {
    config.headers.Authorization = ''
  } catch (error) {
    config.headers.Authorization =''
  }
  config.headers.Accept = 'application/json'
  // config.headers["Content-Type"] = "application/json";
  return config
})

  },
  selectOption() {
      if (this.selectedOption === 'tourGuide') {
        this.openModal('modal_signup_2');
      } else if (this.selectedOption === 'user') {
        this.openModal('modal_user_');
      }
    },


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
</style>