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

            <div class="col-lg-7 col-md-7 ps-2 ">
              <h2 class="fw-bolder mt-2 pt-2">Join as a tour guide</h2>
              <div class="linee mb-5"></div>

              <form action="">
                <input type="text" value="" placeholder="ID number" required class="form-control">

                <select name="city" id="city-select" class="form-control form-select" required>
                  <option value="cairo" active>Cairo</option>
                  <option value="alexandria">Alexandria</option>
                  <option value="giza">Giza</option>
                  <option value="luxor">Luxor</option>
                  <option value="aswan">Aswan</option>
                  <option value="port_said">Port Said</option>
                  <option value="suez">Suez</option>
                  <option value="damietta">Damietta</option>
                  <option value="mansoura">Mansoura</option>
                  <option value="tanta">Tanta</option>
                  <option value="fayoum">Fayoum</option>
                  <option value="zagazig">Zagazig</option>
                  <option value="ismailia">Ismailia</option>
                  <option value="beni_suef">Beni Suef</option>
                  <option value="sohag">Sohag</option>
                  <option value="banha">Banha</option>
                  <option value="assuit">Assuit</option>
                  <option value="minya">Minya</option>
                  <option value="qena">Qena</option>
                  <option value="damanhur">Damanhur</option>
                  <option value="luxor">Luxor</option>
                  <option value="aswan">Aswan</option>
                  <option value="nuweiba">Nuweiba</option>
                  <option value="safaga">Safaga</option>
                  <option value="el_arish">El Arish</option>
                  <option value="sharm_el_sheikh">Sharm El Sheikh</option>
                </select>


                <select name="city" id="city-select" class="form-control form-select" required>
                  <option value="cairo" active>English</option>
                  <option value="alexandria">Arabic</option>

                </select>
                <label for="" class="ms-3 mb-2" style="font-size: 20px;"> Description (it contains a description of you
                  and your travel)</label>
                <textarea name="" id="" cols="30" rows="10" class="form-control" style="height: 120px;resize: none; overflow: none; font-size: 20px;" ></textarea>


                <div>

                  <div class="border border-1 border-black rounded-4 d-flex justify-content-center align-items-center"
                    style="height: 200px;">
                    <div>
                      <a href="#" target="_self" id="upload-icon">
                        <i class="fa-solid fa-upload rounded-4 "
                          style="padding: 15px;border:solid #ff7013; color: #ff7013; margin-left: 50px;"></i>

                      </a>


                      <input type="file" id="file-upload" style="display: none;" />
                      <p style="text-align: center;" class="mt-4">Upload Photos of ID</p>


                    </div>
                  </div>


                  <!-- <script>
                    // JavaScript code to handle click event on the download icon
                    document.getElementById("upload-icon").addEventListener("click", function () {
                      document.getElementById("file-upload").click();
                       // Trigger the file upload input
                    });
                  </script> -->
                </div>


                <div>
                  <!-- uncomment submit btn if needed -->
                  <!-- <input type="submit" value="Login" class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;"> -->


                  <button class="text-white p-3 rounded-5 border-0 mt-4"
                    style="width: 100%; background-color: #ff7013; font-size: 27px;" data-bs-toggle="modal"
                    data-bs-target="#firstModal">Join</button>
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

                    <div class="col2-inside col-lg-7 col-md-12 col-sm-12 ps-2 pt-5 border">
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
                              <input type="text" name="" id="" class="verify1" maxlength="1" >
                            </div>
                            <!-- will be display block if the code identical to code into database -->
                            <p class="errorMsg text-danger text-center " style="font-size: 20px; display: none;">This code dosn't match the code that was sent</p>
                            

                            <routerLink :to="{name:'verify-signup'}">
                            <button class="text-white p-3 rounded-5 border-0 mt-5"
                              style="width: 90%; background-color: #ff7013; font-size: 27px;"
                              >Verify</button>
                              </routerLink>

                            <div>
                              <p class="p-sign ps-5">You didn't recive any account yet ? <routerLink :to="{name:'sing_in'}" >Resend it</routerLink> </p>

                              <!-- <a href="sign_in.html"
                                  class="span-sign">Resend it</a> -->

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


              <!-- second modal with js -->
              <!-- comp used if the code number is true -->

             
        </div>
        </div>
        </div>
    </main>
</template>

<script>
export default{

 mounted(){
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
    script.onload = () => {
      // Code to run after jQuery is loaded
      /* eslint-disable no-undef */
    

// JavaScript code to handle click event on the upload icon
document.getElementById("upload-icon").addEventListener("click", function() {
document.getElementById("file-upload").click(); // Trigger the file upload input
});


  
};
    document.head.appendChild(script);

 }
}


</script>

<style>
@import '../../../public/frontend/css/style.css';
@import '../../../public/frontend/css/sign.css';
</style>