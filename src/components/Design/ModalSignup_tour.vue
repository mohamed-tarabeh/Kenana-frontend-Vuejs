<template>

<div class="modal" id="modal_signup_2" >
  <div class="modal-dialog modal-xl" >
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header border-0">
        
        <button type="button" class="btn-close text-white" @click="closeMultipleModals()"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        
        <div class="container-fluid">
      <div class="rounded-4">
          <div class="row">
              <div class="col-lg-4 col-md-4 p-0">
                  <img src="frontend/imgs/sign_in.jpg" alt="" width="100%">
              </div>

              <div class="col-lg-7 col-md-7 ps-2 ">
                  <h2 class="fw-bolder mt-5 pt-2">Sign up</h2>
                  <div class="linee mb-5"></div>

                
                  <input type="text" v-model="regist.fullName" placeholder="Full name" required class="form-control">
                      <input type="tel" v-model="regist.phoneNumber"  placeholder="Phone Number" class="form-control" required>

                      <input type="email"  v-model="regist.email" placeholder="E-mail" class="form-control" required>


                      <input type="password" v-model="regist.password" placeholder="Password" class="form-control" required>

                      <input type="password" v-model="regist.passwordConfirm" placeholder="Confirm Password" class="form-control" required>
                      <input type="checkbox" name="ch" id="" style="transform: scale(2);">
                      <label for="" class="ms-3" style="font-size: 19px;"> I agree the terms and conditions</label>





                      <div>
                        <!-- uncomment submit btn if needed -->
                        <!-- <input type="submit" value="sign up" class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;"> -->


                          <a style="cursor: pointer;" @click="register()"><button class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;">Sign Up</button></a>
                      </div>

                      <div>
                          <p class="p-sign ps-5">You already have an account ? <a class="span-sign" @click="openModal('myModal_login');closeModal('modal_signup_2')" >Login</a></p>
                          <!-- data-bs-toggle="modal" data-bs-target="#firstModal" -->
                      </div>
               
              </div>
          </div>
      </div>
  </div>

      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="closeModal('modal_signup_2')">Close</button>
      </div>

    </div>
  </div>
</div>
</template>


<script>
import axios from "axios";
export default{
  data() {
    return {
      // ... existing data properties ...
      forgetpassword: { },
      input1:"",
      input2:"",
      input3:"",
      input4:"",
      regist:{},
      email:{
        resetCode:''
      },
      login:{},
      resetpass:{}
    };
  },
  name: 'ModalSignupTourComp',


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
  register(){
    axios.post('/api/v1/auth/signup',this.regist).then((res) => {
      this.openModal('Modal_verify_signup')
      // this.openModal('modal_join_tour')
      this.closeModal('modal_signup_2')
   console.log(res)
    }).catch((el)=>{
     
      console.log(el)
      alert("please ckeck your form")

    })

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