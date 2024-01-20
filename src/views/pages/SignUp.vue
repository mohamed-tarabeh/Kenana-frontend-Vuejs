<template>

<!-- main -->
<main>
<div class="container-fluid zoom-out ">
<div class=" rounded-4">
  <div class="row">
    <div class="col-lg-4 col-md-4 p-0">
      <img src="frontend/imgs/sign_in.jpg" alt="" width="100%">

    </div>

    <div class="sign-up col-lg-7 col-md-7  ps-2 ">
      <!-- <h2 class="fw-bolder mt-5 pt-5">Login</h2> -->
      <!-- <div class="linee mb-5 "></div> -->

      <div class="pre-form d-flex justify-content-center mt-5 pt-5 mb-4">
        <h1 >Do you want to join as ....</h1>
      </div>
      <form action="" class="ps-5">

        <div class="row">

          <div class="col checks">
            <label class="checkbox-image">
              <input type="radio" name="ch">
              <img src="frontend/imgs/tour_ico_1.png" alt="Checkbox Image">
            </label>
            <span style="font-size: 40px;" >or</span>
            
            <p class="ms-5 mt-2">Tour Guid</p>
            
          </div>

          <!-- col2_2 -->
          <div class="col checks">
            <label class="checkbox-image">
              <input type="radio" name="ch">
              <img src="frontend/imgs/user_ico1.PNG" alt="Checkbox Image" style="margin-top: 12px;">
            </label>
            <p class="ms-5 ps-4">User</p>

          </div>
         

        </div>


        <div>

          <routerLink :to="{name:'sign-up-tour'}" >
          <button class="text-white p-3 rounded-5 border-0 mt-5" style="width: 100%; background-color: #ff7013; font-size: 27px;">Next</button>
          </routerLink>
        </div>
        
       
       


        
        

      </form>
    



    </div>
  </div>
  
</div>
</div>
</main>
</template>


<script>



</script>

<style>

@import '../../../public/frontend/css/style.css';
@import '../../../public/frontend/css/sign.css';
</style>