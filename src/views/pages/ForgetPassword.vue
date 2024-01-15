<template>
    <!-- main -->
    <main>
      <!-- start join -->
      <div class="container-fluid zoom-out login">
        <div class="rounded-4">
          <div class="row">
            <div class="col-lg-4 col-md-4 p-0">
              <img src="frontend/imgs/sign_in.jpg" alt="" width="100%">
            </div>

            <div class="col-lg-7 col-md-7 ps-2 pt-5 mt-5">
              <h2 class="fw-bolder mt-2 pt-5 display-5">Forget Password?</h2>
              <div class="linee mb-5"></div>

              <form action="">
                <input type="email" value="" placeholder="e-mail" required class="form-control">


                


                <div>
                  <!-- uncomment submit btn if needed -->
                  <!-- <input type="submit" value="Login" class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;"> -->


                  <button class="text-white p-3 rounded-5 border-0 mt-4"
                    style="width: 100%; background-color: #ff7013; font-size: 27px;" data-bs-toggle="modal"
                    data-bs-target="#firstModal">Send a Code</button>
                </div>


              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- end join -->
      <!-- modal 1 -->

      <div class="modal fade" id="firstModal" tabindex="-1">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0">
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid zoom-out1">
                <div class="rounded-4">
                  <div class="row row-inside">
                    <div class="col-lg-4 col-md-4 col-sm-4 p-0">
                      <img src="frontend/imgs/sign_in.jpg" alt="" width="100%">
                    </div>

                    <div class="col2-inside col-lg-7 col-md-7 col-sm-7 ps-2 pt-5 ">
                      <!-- col2 -->
                      <div class="mt-5 signup-1 d-flex justify-content-center align-items-center ">

                        <div>
                          <h2 class="text-center mb-5"> Enter the code</h2>

                          <p class="text-center fw-bold " style="font-size: 26px;">A message was sent succesfully to your e-mail
                            ah*******@gmail.com enter the code to verify your e-mail</p>

                          <div class="row p-5">
                            <div class="col">
                              <input type="text" name="" id="" class="verify1" maxlength="1" >
                            </div>
                            <div class="col">
                              <input type="text" name="" id="" class="verify1" maxlength="1" >
                            </div>
                            <div class="col">
                              <input type="text" name="" id="" class="verify1" maxlength="1" >
                            </div>
                            <div class="col">
                              <input type="text" name="" id="" class="verify1" v>
                            </div>
                            <!-- will be display block if the code identical to code into database -->
                            <p class="errorMsg text-danger text-center " style="font-size: 20px; display: none;">This code dosn't match the code that was sent</p>

                            
                            <routerLink :to="{name:'verify'}">
                            <button class="text-white p-3 rounded-5 border-0 mt-5"
                              style="width: 90%; background-color: #ff7013; font-size: 27px;"
                              >Verify</button>
                            </routerLink>
                            <!-- id="openSecondModal" -->

                            <div>
                              <p class="p-sign ps-5">You didn't recive any Code yet ? <a href="#"
                                  class="span-sign">Resend it</a></p>

                            </div>
                          </div>


                        </div>

                      </div>

                    </div>
                  </div>
                  <!-- end row  -->
                </div>
                <!-- <button class="btn btn-primary" id="openSecondModal">Open Second Modal</button> -->
              </div>
              </div>


            
        </div>
        </div>
        </div>
    </main>

</template>


<script>


export default{
 
};
</script>

<style>
@import '../../../public/frontend/css/style.css';
@import '../../../public/frontend/css/sign.css';
</style>