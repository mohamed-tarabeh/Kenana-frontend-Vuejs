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
                  <h1 class="fw-bolder mt-5 pt-5 ms-5">Reset Your Password</h1>
                  <div class="linee mb-5"></div>

                  <p class="text-center ps-5 ms-3 mb-4 fw-bold" style="font-size: 25px;">Enter the new password, noting that it must stromg and contain letters ,symbols and numbers</p>

                  <form action="">
                      <input type="password" value="" placeholder="New Password" class="form-control">
                      <input type="password" value="" placeholder="Confirm the password" class="form-control">
                    

                      <div>
                        <!-- uncomment submit btn if needed -->
                        <!-- <input type="submit" value="Login" class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;"> -->


                          <button class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;" data-bs-toggle="modal"
                          data-bs-target="#firstModal">Reset Password</button>

                          
                      </div>

                     
                  </form>
              </div>
          </div>
      </div>

      
  </div>
  <!-- end login -->
<!-- The Modal -->

<div class="modal fade" id="firstModal" tabindex="-1">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header border-0">
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body  p-5  ms-5 d-flex justify-content-center" style="height: 600px;">
        <div class="container d-flex accepted p-5 justify-content-center">
          <div>
            <h2 class="text-center mt-5 pt-5 p-5">The password has been changed Succssefully</h2>

            <a href="sign_in.html"><button class="text-white p-3 rounded-5 border-0 mt-4"
      style="width: 100%; background-color: #ff7013; font-size: 27px;" data-bs-toggle="modal"
      data-bs-target="#firstModal">Back to Login</button></a>
  </div>

          </div>

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