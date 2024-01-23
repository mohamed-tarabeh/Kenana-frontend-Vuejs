<template>
<div class="theHeader">
  <div class="container">
    <div class="app-Header d-flex   justify-content-between align-items-center">
      <div class="app-Header-logo">
          <router-link to="/" class="p-0">
            <svg class="logo" viewBox="0 0 164 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6072 47.6556C10.5867 47.4278 10.5616 47.1931 10.5434 46.9652C9.75268 36.6816 12.822 29.5403 14.1027 27.0702L4.46162 33.1064C4.46162 33.1064 3.47268 25.8853 12.0883 25.4888L0 22.7179C0 22.7179 6.32101 16.2556 14.2553 23.5724C14.7999 12.865 23.7437 13.5235 23.7437 13.5235L17.0011 24.5135C24.7919 18.6779 30.9534 26.3684 30.9534 26.3684L18.5574 26.9016C26.0634 28.3075 24.6574 35.7724 24.6574 35.7724L16.174 27.9862C15.7524 31.386 15.7365 34.6194 15.9552 37.5543C15.3696 38.1012 14.4285 38.7233 13.1 38.8372C13.1 38.8372 14.3374 39.539 16.0646 38.8577C16.158 39.7965 16.2697 40.6966 16.4018 41.5579C15.6749 42.3031 14.3738 43.2738 12.478 43.4287C12.478 43.4287 14.2622 44.4473 16.6935 43.2988C16.8689 44.2673 17.0672 45.1742 17.2654 46.015C17.3589 46.3978 17.45 46.7647 17.5434 47.1201C17.9308 47.1612 18.3091 47.2159 18.6714 47.2842C20.9181 47.7058 22.7388 48.5284 24.1903 49.4968C24.8876 49.9594 25.4982 50.6635 26.0337 51.1648H4.30667C4.86723 50.6977 5.81743 49.8796 6.52381 49.4512C7.68365 48.7312 9.03946 48.0977 10.6072 47.6511V47.6556Z" fill="#2C2C2C"/>
              <path d="M64.5317 18.5128C64.5317 13.2012 60.225 8.89453 54.9134 8.89453C49.6018 8.89453 45.2952 13.2012 45.2952 18.5128" fill="#2C2C2C"/>
              <path d="M46.1909 18.5127C46.1909 14.8168 43.1945 11.8203 39.4985 11.8203C35.8025 11.8203 32.806 14.8168 32.806 18.5127" fill="#2C2C2C"/>
              <path d="M52.0902 9.61824C52.0902 4.30667 47.7836 0 42.472 0C37.1604 0 32.8538 4.30667 32.8538 9.61824" fill="#2C2C2C"/>
              <path d="M33.7491 9.61822C33.7491 5.92222 30.7527 2.92578 27.0567 2.92578C23.3607 2.92578 20.3643 5.92222 20.3643 9.61822" fill="#2C2C2C"/>
              <path d="M34.7405 18.5114C34.7405 15.8545 32.5872 13.7012 29.9303 13.7012C27.2733 13.7012 25.12 15.8545 25.12 18.5114" fill="#2C2C2C"/>
              <path d="M37.7872 39.3659L30.9353 51.1694H15.3264L31.0492 31.1035L37.7872 39.3659Z" fill="#2C2C2C"/>
              <path d="M64.532 51.1698H32.4462L39.3004 39.3663L48.1667 24.1016L64.532 51.1698Z" fill="#2C2C2C"/>
              <path d="M38.2518 33.7064C40.5271 33.7064 42.3716 31.8619 42.3716 29.5866C42.3716 27.3113 40.5271 25.4668 38.2518 25.4668C35.9765 25.4668 34.132 27.3113 34.132 29.5866C34.132 31.8619 35.9765 33.7064 38.2518 33.7064Z" fill="#2C2C2C"/>
              <path d="M3.68677 52.9238V59.7279C4.80559 59.7279 5.85378 59.1788 6.48952 58.2559L10.1673 52.9238H3.68677Z" fill="#2C2C2C"/>
              <path d="M10.0168 52.9242L7.47156 56.8321C9.17144 58.6778 11.5686 59.7282 14.0774 59.7282H25.8194C27.8907 59.7282 29.807 58.6345 30.862 56.8526L33.1886 52.9219H10.0168V52.9242Z" fill="#2C2C2C"/>
              <path d="M32.7193 52.9238L30.1741 56.8317C31.874 58.6775 34.2711 59.7279 36.7799 59.7279H64.5318V52.9238H32.7171H32.7193Z" fill="#2C2C2C"/>
              <path d="M3.68677 61.4824H10.2425L6.48952 66.9239C5.85378 67.8445 4.80559 68.3959 3.68677 68.3959V61.4824Z" fill="#2C2C2C"/>
              <path d="M11.5276 59.2699L7.47156 65.4997C9.17144 67.3454 11.5663 68.3959 14.0774 68.3959H26.1862C28.0297 68.3959 29.7364 67.4229 30.6775 65.8347L33.2546 61.4802H15.5312C14.2711 61.4802 13.0702 60.9515 12.218 60.0218L11.5276 59.2676V59.2699Z" fill="#2C2C2C"/>
              <path d="M34.2301 59.2695L30.1741 65.4994C31.874 67.3451 34.2688 68.3956 36.7799 68.3956H42.6338C45.1608 68.3956 47.517 67.1286 48.9115 65.0232L51.2563 61.4821H38.2314C36.9713 61.4821 35.7705 60.9535 34.9183 60.0238L34.2278 59.2695H34.2301Z" fill="#2C2C2C"/>
              <path d="M52.5074 59.2695L48.4514 65.4994C50.1513 67.3451 52.5462 68.3956 55.0573 68.3956H64.5319V61.4821H56.5111C55.2509 61.4821 54.0501 60.9535 53.1979 60.0238L52.5074 59.2695Z" fill="#2C2C2C"/>
              <path d="M1.90727 9.78747C4.61432 9.3682 7.39429 10.8402 8.17132 13.5154C8.45615 14.4792 8.52451 15.5571 8.30804 16.5938L8.08928 16.8012C7.58798 16.3546 6.89071 15.6596 6.40535 15.1788C5.04499 13.807 3.70058 12.3601 2.43592 10.8949C2.18754 10.5941 1.93233 10.3002 1.6908 9.99255L1.90955 9.7852L1.90727 9.78747Z" fill="#2C2C2C"/>
              <path d="M8.10071 16.5817C7.82271 13.8587 9.43373 11.1562 12.1476 10.5182C13.1252 10.2835 14.203 10.2698 15.2284 10.541L15.4221 10.7711C14.9504 11.2496 14.2189 11.9104 13.7153 12.3684C12.2752 13.6582 10.7622 14.9251 9.2332 16.1123C8.92103 16.3447 8.61341 16.5862 8.29439 16.8118L8.10071 16.5817Z" fill="#2C2C2C"/>
              <path d="M9.51115 2.09474C11.5756 1.77572 13.7016 2.89683 14.2918 4.94307C14.5105 5.7087 14.5675 6.41964 14.3966 7.29237L14.228 7.4496C13.3735 6.66574 12.4962 5.76339 11.7009 4.9294C11.1176 4.29821 10.475 3.59638 9.9122 2.94012L9.34253 2.25197L9.51115 2.09474Z" fill="#2C2C2C"/>
              <path d="M14.2395 7.27954C14.0275 5.2014 15.2557 3.13465 17.3293 2.65157C18.1041 2.47156 18.8173 2.45333 19.6809 2.66752L19.829 2.84298C19.0041 3.65646 18.0562 4.48362 17.1835 5.23786C16.5227 5.78929 15.7889 6.39314 15.1053 6.92179L14.3898 7.455L14.2417 7.27954H14.2395Z" fill="#2C2C2C"/>
              <path d="M86.9973 34.9757H85.229V41.5769H82.7612V26.5332H85.229V32.6788H86.9813L91.2652 26.5332H94.3049L89.1643 33.7907L94.7743 41.5769H91.7073L86.9973 34.9757Z" fill="#2C2C2C"/>
              <path d="M106.555 35.8031C106.555 36.0652 106.534 36.3249 106.505 36.587H97.0846C97.3831 38.4669 98.7366 39.6244 100.637 39.6244C102.025 39.6244 103.146 38.9841 103.759 37.9245H106.27C105.347 40.3741 103.228 41.8621 100.635 41.8621C97.2418 41.8621 94.6715 39.2439 94.6715 35.7758C94.6715 32.3076 97.235 29.6895 100.635 29.6895C104.035 29.6895 106.552 32.4239 106.552 35.8031H106.555ZM100.637 31.8451C98.8415 31.8451 97.5358 32.9274 97.1439 34.6478H104.162C103.734 32.8841 102.405 31.8451 100.637 31.8451Z" fill="#2C2C2C"/>
              <path d="M115.232 29.709C117.946 29.709 119.641 31.7324 119.641 34.5899V41.5785H117.256V35.0752C117.256 32.9675 116.34 31.8486 114.594 31.8486C112.849 31.8486 111.477 33.3161 111.477 35.3646V41.5785H109.091V29.9733H110.755L111.217 31.5934C112.094 30.4222 113.528 29.709 115.232 29.709Z" fill="#2C2C2C"/>
              <path d="M134.443 29.9671V41.5724H132.52L132.288 40.1619C131.237 41.226 129.77 41.8618 128.079 41.8618C124.622 41.8618 122.036 39.2481 122.036 35.7709C122.036 32.2936 124.622 29.6914 128.079 29.6914C129.79 29.6914 131.271 30.3385 132.324 31.4186L132.602 29.9671H134.443ZM132.053 35.7686C132.053 33.5811 130.453 31.961 128.266 31.961C126.078 31.961 124.465 33.597 124.465 35.7686C124.465 37.9402 126.078 39.5763 128.266 39.5763C130.453 39.5763 132.053 37.9561 132.053 35.7686Z" fill="#2C2C2C"/>
              <path d="M143.991 29.709C146.705 29.709 148.4 31.7324 148.4 34.5899V41.5785H146.014V35.0752C146.014 32.9675 145.098 31.8486 143.353 31.8486C141.607 31.8486 140.236 33.3161 140.236 35.3646V41.5785H137.85V29.9733H139.513L139.976 31.5934C140.853 30.4222 142.287 29.709 143.991 29.709Z" fill="#2C2C2C"/>
              <path d="M163.202 29.9671V41.5724H161.279L161.047 40.1619C159.996 41.226 158.529 41.8618 156.838 41.8618C153.381 41.8618 150.795 39.2481 150.795 35.7709C150.795 32.2936 153.381 29.6914 156.838 29.6914C158.549 29.6914 160.031 30.3385 161.083 31.4186L161.364 29.9671H163.205H163.202ZM160.812 35.7686C160.812 33.5811 159.213 31.961 157.025 31.961C154.838 31.961 153.224 33.597 153.224 35.7686C153.224 37.9402 154.838 39.5763 157.025 39.5763C159.213 39.5763 160.812 37.9561 160.812 35.7686Z" fill="#2C2C2C"/>
              </svg>
            </router-link>  
        </div>
          <ul class="d-none d-lg-flex  me-auto mb-2 mb-lg-0 pt-1">
            <li><routerLink class="nav-link" :to="{name:'home'}" >Home</routerLink></li>
            <li><routerLink class="nav-link" :to="{name:'tours'}" >Tours</routerLink></li>
            <li><router-link to="/destinations">Destination</router-link></li>
            <li><routerLink class="nav-link" :to="{name:'tours-guides'}" >Tour guides</routerLink></li>
            <li><routerLink class="nav-link" :to="{name:'blog'}" >Blog</routerLink></li>
          </ul>
        <div class="login d-flex align-items-center">
         
            <div v-if="storedVariable" class="dropdown">
            <a class="dropdown-toggle" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <img :src="storedVariable" alt="Profile Image" class="profile-image rounded-circle" width="50px">
            </a>
           
            <ul class="dropdown-menu" aria-labelledby="profileDropdown">
              <li>
                <!-- <a class="dropdown-item" href="#"> -->
                  <!-- <routerLink class="dropdown-item" :to="{name:'u-profile'}"> -->
                 <div v-if="role == 'user'" @click="go()"  style="display: flex; cursor: pointer; padding-left: 20px;">
                  <span><i class="dropdown-item fas fa-user-circle me-2"></i></span>
                  <span>Profile</span>
                 </div>
                <!-- </routerLink> -->
                <!-- </a> -->
              </li>
              <li>
                <!-- <a class="dropdown-item" href="#"> -->
           <routerLink class="dropdown-item" :to="{name:'favo'}">
                 
                <!-- </a> -->
                <a class="dropdown-item">
                  <i class="fas fa-heart fa-heart2 me-2 rounded-circle"></i>
                  Favourite
                </a>
            </routerLink>
              </li>
              <li>
                <div @click="gogo()" v-if="role == 'tour guide'" class="nav-link"  >
                <a class="dropdown-item">
                  <i class="fas fa-user-circle me-2"></i>
                  Join as Tour Guide
                </a>
              </div></li>

              <!-- Additional dropdown items can be added here -->
            </ul>
            <button v-if="storedVariable"  @click="logout()">logout</button>
          </div>
            <!-- <router-link to="/sign_in" ><button>login</button></router-link> -->
           <button v-if="!storedVariable"  @click="openModal('myModal_login')">login</button>


           <!-- All modals start -->

  <!-- The Modal login -->
<div class="modal" id="myModal_login" >
  <div class="modal-dialog modal-xl" >
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header border-0">
        
        <button type="button" class="btn-close" @click="closeModal('myModal_login')"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        
         <!-- start login -->
  <div class="container-fluid ">
    <div class="rounded-4">
        <div class="row">
            <div class="col-lg-4 col-md-4 p-0">
                <img src="frontend/imgs/sign_in.jpg" alt="" width="100%">
            </div>

            <div class="col-lg-7 col-md-7 ps-2 pt-5">
                <h2 class="fw-bolder mt-1 pt-1">Login</h2>
                <div class="linee mb-5"></div>

                    <input type="email" v-model="login.email" placeholder="E-mail" class="form-control">
                    <input type="password"  v-model="login.password" placeholder="Password" class="form-control">
                    <p class="forget">
                        <a style="cursor: pointer;" class="text-black" @click="openModal('modal_forget')" >Forget Password?</a>
                    </p>

                    <div>
                      <!-- uncomment submit btn if needed -->
                      <!-- <input type="submit" value="Login" class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;"> -->


                        <button @click="sigin()" class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;">Login</button>
                    </div>

                    <div>
                        <p class="p-sign ps-5">You don't have any account yet? <a  class="span-sign"  @click="openModal('modal_signup'); closeModal('myModal_login')">Sign Up</a></p>
                        <!-- data-bs-toggle="modal" data-bs-target="#firstModal" -->
                    </div>
              
            </div>
        </div>
    </div>
</div>

      </div>

      

    </div>
  </div>
</div>
<!--  end login modal -->


<!-- start forget modal -->
<div class="modal" id="modal_forget" >
  <div class="modal-dialog modal-xl" >
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header border-0">
        
        <button type="button" class="btn-close" @click="closeModal('modal_forget')"></button>
      </div>

      <!-- Modal body -->
      
        
        <div class="modal-body">
        <div class="container-fluid">
          <div class="rounded-4">
            <div class="row">
              <div class="col-lg-4 col-md-4 p-0">
                <img src="frontend/imgs/sign_in.jpg" alt="" width="100%">
              </div>
  
              <div class="col-lg-7 col-md-7 ps-2 pt-5 mt-5">
                <h2 class="fw-bolder mt-2 pt-5 display-5">Forget Password?</h2>
                <div class="linee mb-5"></div>
  
                
                  <input type="email" v-model="forgetpassword.email" placeholder="e-mail" required class="form-control">
  
  
                  
  
  
                  <div>
                    <!-- uncomment submit btn if needed -->
                    <!-- <input type="submit" value="Login" class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;"> -->
  
  
                    <button class="text-white p-3 rounded-5 border-0 mt-4"
                      style="width: 100%; background-color: #ff7013; font-size: 27px;" @click="sendcode(); openModal('modal_send_verify');closeModal('modal_forget')" >Send a Code</button>
                  </div>
  
  
              
              </div>
            </div>
          </div>
        </div>


      </div>

     

      <!-- Modal footer -->
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="closeModal('modal_forget')">Close</button>
      </div> -->

    </div>
  </div>
</div>
<!-- end forget modal -->




<!-- start sign up modal -->
<modalSignupComp></modalSignupComp>

<!-- end sign up modal -->


<!-- Next btn sign up modal -->
<modalSignupTourComp></modalSignupTourComp>


<!-- End Next btn sign up modal -->


<!-- user moadl -->
<div class="modal" id="modal_user_" >
  <div class="modal-dialog modal-xl" >
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header border-0">
        
        <button type="button" class="btn-close" @click="closeModal('modal_user_')"></button>
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
                  <h2 class="fw-bolder mt-5 pt-2">Sign up as New User</h2>
                  <div class="linee mb-5"></div>

                      <input type="text" v-model="regist.fullName" placeholder="Full name" required class="form-control">
                      <input type="tel" v-model="regist.phoneNumber"  placeholder="Phone Number" class="form-control" required>

                      <input type="email"  v-model="regist.email" placeholder="E-mail" class="form-control" required>


                      <input type="password" v-model="regist.password" placeholder="Password" class="form-control" required>

                      <input type="password" v-model="regist.passwordConfirm" placeholder="Confirm Password" class="form-control" required>

                      <input type="checkbox" name="ch" style="transform: scale(2);">
                      <label for="" class="ms-3" style="font-size: 19px;"> I agree the terms and conditions</label>





                      <div>
                        <!-- uncomment submit btn if needed -->
                        <!-- <input type="submit" value="sign up" class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;"> -->


                          <a style="cursor: pointer;" @click="register();"><button class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;">Sign Up</button></a>
                      </div>

                      <div>
                          <p class="p-sign ps-5">You already have an account ? <a class="span-sign" @click="openModal('myModal_login');closeModal('modal_user_')" >Login</a></p>
                          <!-- data-bs-toggle="modal" data-bs-target="#firstModal" -->
                      </div>
              
              </div>
          </div>
      </div>
  </div>

  

      </div>

      <!-- Modal footer -->
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="closeModal('modal_join_tour')">Close</button>
      </div> -->

    </div>
  </div>
</div>
<!-- end user modal -->


<!-- start modal join as tour has uploads -->
<div class="modal" id="modal_join_tour" >
  <div class="modal-dialog modal-xl" >
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header border-0">
        
        <button type="button" class="btn-close" @click="closeModal('modal_join_tour')"></button>
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
              <h2 class="fw-bolder mt-2 pt-2">Join as a tour guide</h2>
              <div class="linee mb-5"></div>

        
                <input type="text" value="" placeholder="ID number" required class="form-control">

                <select name="city" id="city-select"  class="form-control form-select" required>
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
                <textarea name="" id="" cols="30" rows="4" class="form-control" style="height:100px"></textarea>
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
                      document.getElementById("file-upload").click(); // Trigger the file upload input
                    });
                  </script> -->
                </div>


                <div>
                  <!-- uncomment submit btn if needed -->
                  <!-- <input type="submit" value="Login" class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;"> -->


                  <button class="text-white p-3 rounded-5 border-0 mt-4"
                    style="width: 100%; background-color: #ff7013; font-size: 27px;" @click="tourregist();" >Join</button>
                </div>


              
            </div>
          </div>
        </div>
      </div>
  

      </div>

      <!-- Modal footer -->
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="closeModal('modal_join_tour')">Close</button>
      </div> -->

    </div>
  </div>
</div>

<!-- end modal join as tour has uploads -->



<!-- start modal verify signup -->

<div class="modal" id="Modal_verify_signup" >
  <div class="modal-dialog modal-xl" >
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header border-0">
        
        <button type="button" class="btn-close" @click="closeModal('Modal_verify_signup')"></button>
      </div>

      <!-- Modal body -->
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
                              <input type="text" v-model="in1" name="" id="" class="verify1" maxlength="1" >
                            </div>
                            <div class="col">
                              <input type="text" name="" v-model="in2" id="" class="verify1" maxlength="1" >
                            </div>
                            <div class="col">
                              <input type="text" name="" v-model="in3" id="" class="verify1" maxlength="1" >
                            </div>
                            <div class="col">
                              <input type="text" name="" v-model="in4" id="" class="verify1" maxlength="1" >
                            </div>
                            <!-- will be display block if the code identical to code into database -->
                            <p class="errorMsg text-danger text-center " style="font-size: 20px; display: none;">This code dosn't match the code that was sent</p>

                            <button class="text-white p-3 rounded-5 border-0 mt-5"
                              style="width: 90%; background-color: #ff131b; font-size: 27px;" @click=" verfysinup(); "
                              >Verify</button>

                            <div>
                              <p class="p-sign ps-5">You didn't recive any account yet ? <a href="sign_in.html"
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

      <!-- Modal footer -->
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="closeModal('Modal_verify_signup')">Close</button>
      </div> -->

    </div>
  </div>
</div>
<!-- end modal verify signup -->


<!-- start modal confirm verify -->
<div class="modal" id="modal_confirm_verify_signup" >
  <div class="modal-dialog modal-xl" >
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header border-0">
        
        <button type="button" class="btn-close" @click="closeModal('modal_confirm_verify_signup')"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        
        <div class="container d-flex accepted p-5 justify-content-center">
                        <div>
                          <h2 class="text-center mt-5 pt-5 p-5">Your information has been sent and you will be answered via E-mail when your admisson is approved</h2>
                          <routerLink :to="{name:'home'}" @click="closeModal('modal_confirm_verify_signup')">
                          <button class="text-white p-3 rounded-5 border-0 mt-4"
                    style="width: 100%; background-color: #ff7013; font-size: 27px;" >Back to Home</button>
                  </routerLink>
                </div>

                        </div>
  

      </div>

      <!-- Modal footer -->
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="closeModal('modal_confirm_verify_signup')">Close</button>
      </div> -->

    </div>
  </div>
</div>
<!-- end modal confirm verify -->

<!--start modal_send_verify -->

<div class="modal" id="modal_send_verify" >
  <div class="modal-dialog modal-xl" >
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header border-0">
        
        <button type="button" class="btn-close" @click="closeModal('modal_send_verify')"></button>
      </div>

      <!-- Modal body -->
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
                              <input type="text" v-model="input1" name="" id="" class="verify1" maxlength="1" >
                            </div>
                            <div class="col">
                              <input type="text" name="" v-model="input2" id="" class="verify1" maxlength="1" >
                            </div>
                            <div class="col">
                              <input type="text" name="" v-model="input3" id="" class="verify1" maxlength="1" >
                            </div>
                            <div class="col">
                              <input type="text" name="" v-model="input4" id="" class="verify1" v>
                            </div>
                            <!-- will be display block if the code identical to code into database -->
                            <p class="errorMsg text-danger text-center " style="font-size: 20px; display: none;">This code dosn't match the code that was sent</p>

                            <button class="text-white p-3 rounded-5 border-0 mt-5"
                              style="width: 90%; background-color: #ff7013; font-size: 27px;"
                              id="verify_code_pass" @click="verfy(); openModal('modal_confirm_info');closeModal('modal_send_verify')" >Verify</button>

                            <div>
                              <p class="p-sign ps-5">You didn't recive any account yet ? <a href="sign_in.html"
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

      <!-- Modal footer -->
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="closeModal('modal_send_verify')">Close</button>
      </div> -->

    </div>
  </div>
</div>

<!--end modal_send_verify -->


<!-- start modal_confirm_info -->
<div class="modal" id="modal_confirm_info" >
  <div class="modal-dialog modal-xl" >
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header border-0">
        
        <button type="button" class="btn-close " @click="closeModal('modal_confirm_info')"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body  p-5 d-flex justify-content-center" style="height: 600px;">
                      <div class="container d-flex accepted p-5 justify-content-center">
                        <div>
                          <h2 class="text-center mt-5 pt-5 p-5">Your information has been sent and you will be answered via E-mail when your admisson is approved</h2>

                          <a><button class="text-white p-3 rounded-5 border-0 mt-4"
                    style="width: 100%; background-color: #ff7013; font-size: 27px;" @click="openModal('modal_reset_pass'); closeModal('modal_confirm_info')">Reset The password</button></a>
                </div>

                        </div>

                      </div>
      <!-- Modal footer -->
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="closeModal('modal_confirm_info')">Close</button>
      </div> -->

    </div>
  </div>
</div>
<!-- end modal_confirm_info -->



<!-- start modal_reset_pass --> 
<div class="modal" id="modal_reset_pass" >
  <div class="modal-dialog modal-xl" >
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header border-0">
        
        <button type="button" class="btn-close" @click="closeModal('modal_reset_pass')"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <div class="container-fluid">
      <div class="rounded-4">
          <div class="row">
              <div class="col-lg-4 col-md-4 p-0">
                  <img src="frontend/imgs/sign_in.jpg" alt="" width="100%">
              </div>

              <div class="col-lg-7 col-md-7 ps-2 pt-5">
                  <h1 class="fw-bolder mt-5 pt-5 ms-5">Reset Your Password</h1>
                  <div class="linee mb-5"></div>

                  <p class="text-center ps-5 ms-3 mb-4 fw-bold" style="font-size: 25px;">Enter the new password, noting that it must strong and contain letters ,symbols and numbers</p>

                      <input type="email" v-model="resetpass.email" placeholder="please enter your email" class="form-control">
                      <input type="password" v-model="resetpass.newPassword" placeholder="New Password" class="form-control">
                      <input type="password" v-model="resetpass.newPasswordConfirm"  placeholder="Confirm the password" class="form-control">
                    

                      <div>
                        <!-- uncomment submit btn if needed -->
                        <!-- <input type="submit" value="Login" class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;"> -->


                        <a><button class="text-white p-3 rounded-5 border-0 mt-4" style="width: 100%; background-color: #ff7013; font-size: 27px;" @click="reset(); openModal('modal_confirm_reset'); closeModal('modal_reset_pass')">Reset Password</button></a>
                          <!-- @click -->

                          
                      </div>

                     
                 
              </div>
          </div>
      </div>

      
  </div>

       </div>
      <!-- Modal footer -->
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="closeModal('modal_reset_pass')">Close</button>
      </div> -->

    </div>
  </div>
</div>

<!-- end modal_reset_pass -->



<!-- start  modal_confirm_reset --> 
<div class="modal" id="modal_confirm_reset" >
  <div class="modal-dialog modal-xl" >
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header border-0">
        
        <button type="button" class="btn-close" @click="closeModal('modal_confirm_reset')"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body  p-5 d-flex justify-content-center" style="height: 600px;">
                      <div class="container d-flex accepted p-5 justify-content-center">
                        <div>
                          <h2 class="text-center mt-5 pt-5 p-5">The Password has been changed successfully </h2>

                          <button class="text-white p-3 rounded-5 border-0 mt-4"
                    style="width: 100%; background-color: #ff7013; font-size: 27px;" @click="openModal('myModal_login'); closeModal('modal_confirm_reset')">Back to Login</button>
                </div>

                        </div>

                      </div>
      <!-- Modal footer -->
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="closeModal('modal_confirm_reset')">Close</button>
      </div> -->

    </div>
  </div>
</div>
<!-- end  modal_confirm_reset -->





<!--  -->


<!-- All modals End -->
<!--  -->
<nav class="navbar side_nav navbar-light bg-light fixed-top" style="display:none">
          <div class="container-fluid">
            
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end" style="width: 900px;"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <button>login</button>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body" >
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li><routerLink class="nav-link" :to="{name:'home'}" >Home</routerLink></li>
            <li><routerLink class="nav-link" :to="{name:'tours'}" >Tours</routerLink></li>
            <li><router-link to="/destinations">Destination</router-link></li>
            <li><routerLink class="nav-link" :to="{name:'tours-guides'}" >Tour guides</routerLink></li>
            <li><routerLink class="nav-link" :to="{name:'blog'}" >Blog</routerLink></li>
                </ul>
               
              </div>
            </div>
          </div>
        </nav>

<!--  -->



        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";
 import ModalSignupComp from '@/components/Design/ModalSignup.vue';
 import ModalSignupTourComp from '@/components/Design/ModalSignup_tour.vue';
 
export default{
  data() {
    return {
      // ... existing data properties ...
      storedVariable: localStorage.getItem('storedVariable') || '',
      Authorization: localStorage.getItem('Authorization') || '',
      id: localStorage.getItem('id') || '',
      role: localStorage.getItem('role') || '',
      forgetpassword: { },
      input1:"",
      input2:"",
      input3:"",
      input4:"",
      regist:{},
      verf:{
        resetCode:''
      },
      email:{
        resetCode:''
      },
      login:{},
      resetpass:{}
    };
  },

  components:{ModalSignupComp,ModalSignupTourComp},

  name: 'HeaderComp',

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
  verfysinup(){
    
    this.verf.resetCode=this.in1+this.in2+this.in3+this.in4

axios.post('/api/v1/auth/signup-verify-code',this.verf).then((res) => {
  this.openModal('modal_join_tour') 
  this.closeModal('Modal_verify_signup')
axios.defaults.withCredentials = true
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'


axios.interceptors.request.use((config) => {
  try {
    config.headers.Authorization = `Bearer ${JSON.parse(res.data.token)}`
  } catch (error) {
    config.headers.Authorization = `Bearer ${res.data.token}`
  }
  config.headers.Accept = 'application/json'
  // config.headers["Content-Type"] = "application/json";
  return config
})
console.log(res)
}).catch((el)=>{

console.log(el)


})

  },

  verfy(){
  this.email.resetCode=this.input1+this.input2+this.input3+this.input4

axios.post('/api/v1/auth/verify-reset-code',this.email).then((res) => {

console.log(res)
}).catch((el)=>{

console.log(el)


})

},
tourregist(){

  axios.post('/api/v1/auth/tour-guide-signup').then((res) => {

   this.closeModal('modal_user_')
  this.closeModal('modal_join_tour')
   console.log(res)
    }).catch(()=>{
 
      alert("please check your form")
     

    })

},
logout(){
  localStorage.setItem('storedVariable','');
  axios.interceptors.request.use((config) => {
  try {
    config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('Authorization'))}`
  } catch (error) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('Authorization')}`
  }
  config.headers.Accept = 'application/json'
  // config.headers["Content-Type"] = "application/json";
  return config
})
  axios.post('/api/v1/users/logout').then((res) => {
   this.openModal('modal_confirm_verify_signup')
   this.closeModal('modal_user_')
   location.reload()
   console.log(res)
    }).catch(()=>{
 
      alert("please check your form")
     

    })
   
},
register(){
  axios.post('/api/v1/auth/signup',this.regist).then((res) => {
   this.openModal('modal_confirm_verify_signup')
   this.closeModal('modal_user_')
   
   console.log(res)
    }).catch(()=>{
 
      alert("please check your form")
     

    })
},
reset(){
  console.log("test")
    axios.put('/api/v1/auth/reset-password',this.resetpass).then((res) => {
   
   console.log(res)
    }).catch(()=>{
 
   alert("please check your form")
     

    })
},
gogo(){

  this.$router.push({ name: 'new_tour' , params: {id: this.id} })
},
go(){
  this.$router.push({ name: 'u-profile' , params: {id: this.id} })
},
sigin(){
  axios.post('/api/v1/auth/login',this.login).then((res) => {
    this.closeModal('myModal_login');
    localStorage.setItem('storedVariable', res.data.data.profileImg);
    localStorage.setItem('Authorization',res.data.token);
    localStorage.setItem('id',res.data.data._id);
    localStorage.setItem('role',res.data.data.role);
   
    location.reload()
   console.log(res)
    }).catch((el)=>{
 
     alert("email or password not match")
     console.log(el)

    })

},

  sendcode(){
    console.log("test")
    axios.post('/api/v1/auth/forgot-password',this.forgetpassword).then((res) => {
   
   console.log(res)
    }).catch((el)=>{
 
      console.log(el)
     

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
<style scoped>
@import '../../../public/frontend/css/sign.css';

  .logo{
    width: 140px;
    height: 69px;
  }

  
  @media (max-width: 992px) {
    .logo{
      width: 120px;
      height: 50px;
    }
  }
  @media (max-width: 767px) {
    .logo{
      width: 80px;
      height: 50px;
    }
  } 
  @media (max-width: 550px) {
    .logo{
      width: 80px;
      height: 50px;
    }
  }
  .app-Header{
    padding-bottom: 30px;
    padding-top: 30px;
  }
  a{
    text-decoration: none;
    color: #000;
    padding: 0 20px;
    font-size: 18px;

  }
    
  @media (max-width: 1200px) {
    a{
   padding: 0 10px;
    }
  }
  li{
    list-style: none;
  }

  .btn-close{
    color:black !important;
    background-color: white;
  }

  .login button:not(.btn-close){
    border-radius: 10px;
    border: 1px solid #FF7013;
    background: #FF7013;
    padding: 8px 20px;
    color: #fff;
    font-weight: 500;
    margin-left: 20px;
    transition: .5s;
  }
  .login button:hover{
    background-color: transparent;
    color: #FF7013;
  }
  @media (max-width:990px) {
      .side_nav{
        display:block !important;
        height:100px;
        z-index: 9999;

      }

    }



    
/* sign in css */
form,h2{
    padding-left: 70px;
}

.linee{
    width: 70px;
    height: 10px;
    background-color: #ff7013;
    margin-left: 70px;
    
}

.form-control{
    padding: 20px;
    border-radius: 25px;
    margin-bottom: 40px;
    border: solid 1px black;
}
input[type='email'],.input[type='password'],input::placeholder{
    font-size: 20px;
}


.zoom-out{
    margin-top: -100px;
    transform: scale(0.7);
    
}
.zoom-out1{
    margin-top: -120px;
    transform: scale(0.77);
    margin-left: -100px;

    
}

@media (max-width:997px) {
    .zoom-out1{
        margin-top: 10px;
        transform: scale(0.77);
        margin-left: 0px;
    
        
    }
    
}
.forget{
    margin-top: -25px;
    text-align: right;
    font-size: 19px;
    
}
.p-sign{
    font-size: 24px;
    margin-top: 40px;
}
.span-sign{
    margin-left: 10px;
    color: #ff7013;
    font-weight: bold;
}

/* ************ */
/* sign up modal */

.signup-1{
    padding-left: 70px;
}
.row-inside{
    width: 1350px;
}

@media (max-width:997px) {
    .row-inside{
        width: fit-content;
    }
    
}

/* end sign up model */


/* sign up page */
.sign-up{
    width: 700px !important;
}
/* .pre-form{
 
} */

.checkbox-image {
    display: inline-block;
    position: relative;
    cursor: pointer;
    user-select: none;
  }
  
  .checkbox-image input[type="radio"] {
    display: none;
  }
  
  /* .checkbox-image img {
    width: 20px; /* Adjust the width and height as needed */
    /* height: 20px;
  }  */
  
  .checkbox-image input[type="radio"]:checked + img {
    /* Apply styles to the checked image */
    /* For example, you can change the image source or add a border */
    border: 2px solid #000;
  }

  .checks p{
    font-size: 35px;
    font-weight: bold;
  }

  /* verify modal */


/* join , forgetpassword */


  .verify1{
    width: 90%;
    height: 110px;
    border-radius: 10px;
    font-size: 40px;
    text-align: center;
    color: black !important;
  }



  /* po css modal */

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