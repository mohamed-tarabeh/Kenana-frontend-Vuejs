<template>

<main>
  <!-- start login -->
  <div class="container-fluid zoom-out login">
      <div class="rounded-4">
          <div class="row">
              <div class="col-lg-4 col-md-4 p-0">
                  <img src="frontend/imgs/sign_in.jpg" alt="" width="100%">
              </div>

              <div class="col-lg-7 col-md-7 ps-2 ">
                  <h2 class="fw-bolder mt-5 pt-2">Sign up</h2>
                  <div class="linee mb-5"></div>

                  <form action="">
                      <input type="text" value="" placeholder="Full name" required class="form-control">
                      <input type="tel" value="" placeholder="Phone Number" class="form-control" required>

                      <input type="email" value="" placeholder="E-mail" class="form-control" required>


                      <input type="password" value="" placeholder="Password" class="form-control" required>

                      <input type="password" value="" placeholder="Confirm Password" class="form-control" required>

                      <input type="checkbox" name="ch" id="" style="transform: scale(2);">
                      





                      <div>
                        <!-- uncomment submit btn if needed -->
                        <!-- <input type="submit" value="sign up" class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;"> -->


                        <routerLink :to="{name:'join_tour'}" > 
                       <button class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;">Sign Up</button>
                       </routerLink>

                       <!-- <a href="join_as_tour_guide.html"></a> -->
                      </div>

                      <div>
                          <p class="p-sign ps-5">You already have an account ? <a href="sign_in.html" class="span-sign" >Login</a></p>
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