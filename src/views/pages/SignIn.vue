<template>


<!-- main -->
<main>
  <!-- start login -->
  <div class="container-fluid zoom-out login">
      <div class="rounded-4">
          <div class="row">
              <div class="col-lg-4 col-md-4 p-0">
                  <img src="frontend/imgs/sign_in.jpg" alt="" width="100%">
              </div>

              <div class="col-lg-7 col-md-7 ps-2 pt-5">
                  <h2 class="fw-bolder mt-5 pt-5">Login</h2>
                  <div class="linee mb-5"></div>

                  <form action="">
                      <input type="email" value="" placeholder="E-mail" class="form-control">
                      <input type="password" value="" placeholder="Password" class="form-control">
                      <p class="forget">
                        <routerLink :to="{name:'forgetpass'}">Forget Password?</routerLink>
                          <!-- <a href="forgetpass.html" class="text-black">Forget Password?</a> -->
                      </p>

                      <div>
                        <!-- uncomment submit btn if needed -->
                        <!-- <input type="submit" value="Login" class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;"> -->


                          <button class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;">Login</button>
                      </div>

                      <div>
                          <p class="p-sign ps-5">You don't have any account yet?  <routerLink :to="{name:'sign-up'}" class="span-sign">Sign Up</routerLink></p>
                          <!-- <a href="signup.html" class="span-sign" >Sign Up</a> -->
                          <!-- data-bs-toggle="modal" data-bs-target="#firstModal" -->
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
  <!-- end login -->

  
</main>
</template>


<style>


@import '../../../public/frontend/css/style.css';
@import '../../../public/frontend/css/sign.css';






</style>