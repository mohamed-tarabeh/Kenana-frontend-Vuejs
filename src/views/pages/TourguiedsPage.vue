<template>
     
  
     <div class="container first_header_tour mb-5">
    <div></div>
      <div class="d-flex justify-content-center align-items-center"  style="position:absolute;height: 100%; width: 100%; background-color:rgba(0, 0, 0,.3);left:0px;z-index:1;">
        <div>
        <h1><span style="color: transparent;">...</span>Tour Guides <span style="color: transparent;"></span></h1>
      
        <!-- search -->
        
          <div class="row">
              <div class=" col-lg-12 col-md-10 mx-auto">
                 
                <div class="input-group mt-4">
                      <input class="form-control border-end-0 border rounded-4 p-4 mt-1" type="search" value=""  placeholder="Trip Place Name" style="padding-right:100px !important" id="example-search-input">
                      <span class="input-group-append">
                          <button class="btn btn-outline-secondary srch border-bottom-0  rounded-5 ms-n5 p-3" type="button">
                              <i class="fa fa-search text-white"></i>
                          </button>
                      </span>
                  </div>
              </div>
          </div>
         
        
        

        <!--<script>
          // const searchButton = document.getElementById('search-button');
          //   const searchInput = document.getElementById('search-input');
          //   searchButton.addEventListener('click', () => {
          //     const inputValue = searchInput.value;
          //     alert(inputValue);
          //   });
        </script> -->
      </div>
   
  </div>
     
    </div>
    <!-- end header -->



    <div class="container guides">
      <!-- row1 -->
      <div class="row mb-4">
        <div  v-for="t in tours" style="margin-top: 15px !important;" :key="t" class="col-lg-4 col-md-12">
          
           
          <div class="card border border-secondary border-opacity-25 rounded-4">
            <div class="card-header bg-transparent border-0 d-flex justify-content-center">
             
              <img v-if="!t.profileImg" src="frontend/imgs/clients_openion.PNG" class="rounded-circle im-guide border border-black" alt="">
              <img v-if="t.profileImg" :src="t.profileImg" class="rounded-circle im-guide border border-black" alt="">
              

            </div>
            
            <div class="card-body mt-0">
              <p class="text-center fw-bolder" style="margin-top: -15px; font-size: 20px;">{{ t.fullName }}</p>
              <p class="text-center fw-bolder" style="margin-top: -15px; font-size: 20px;">5.0 <span> <i class="fa fa-star"></i></span></p>

              <p v-if="t.description" class="text-center">{{ t.description }}</p>
              <p v-if="!t.description"  class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro saepe voluptatum consectetur tempora culpa eius blanditiis debitis animi, explicabo quasi iure aspernatur perferendis</p>

            </div>
        
          </div>
   
          

        </div>




      
      </div>


<!-- end show more div -->

<div class="d-flex justify-content-center mb-5">
    <button class="btn btn-success p-3 text-white border-0" id="less" style="display: none;background-color:#ff7013;">show less</button>
    </div>


    </div>




    

<!-- tours -->
<div class="tours container-fluid mb-4">
     
  <!-- <a href="#" class="text-decoration-none">    -->
    <h1 class="mt-5 mb-4 fw-bolder">Tours</h1>
  <div class="row mb-4">
    <div style=" margin-top: 15px !important;" v-for="t in approved_tours" :key="t"   class="col-md-6 col-lg-4 top-trip">
      <routerLink :to="{name:'tours'}">
      <div style="height: 100% !important;;"  class="card rounded-4 overflow-hidden card-trip mb-4">
        <div class="card-header bg-transparent p-0">
      
        <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
        <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
                
                
                  <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
               

              </div>
            </div>
    <div class="card-body">
          <div class="d-flex justify-content-between">
          <span>Pyramids -Egypt</span>
          <span><img src="frontend/icons/people.svg" width="30px"></span>
         </div>

        <h6>{{ t.description }}</h6>
        <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
    </div>
    
  </div>
</routerLink>
  
</div>

</div>

<!-- end row tour -->
</div>

  <!-- show more and less btn-->
   <div class="d-flex justify-content-center mb-5">
   <button class="btn btn-success p-3 text-white border-0" id="show1" style="background-color:#ff7013;">show more</button>
   </div>

   <!-- show more div-->
   <div class="more_tour" id="more_tour1" style="display: none;">

    <div class="row mb-4">
      <div class="col-md-6 col-lg-4 top-trip">
        <div class="card rounded-4 overflow-hidden card-trip mb-4">
          <div class="card-header bg-transparent p-0">
        
          <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
          <div class="new-trip-img-over d-flex container justify-content-between  w-100 ">  
                  <button class=" aa1 btn btn-success text-white rounded-pill ">
                    Top Trip
                  </button>
                  
                    <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
                 
  
                </div>
              </div>
      <div class="card-body">
            <div class="d-flex justify-content-between">
            <span>Pyramids -Egypt</span>
            <span><img src="frontend/icons/people.svg" width="30px"></span>
           </div>
  
          <h4>Riding Camels , See Fireworks at night</h4>
          <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
      </div>
      
    </div>
    
  </div>
     <!--  -->
 
     <div class="col-md-6 col-lg-4 top-trip">
      <div class="card rounded-4 overflow-hidden card-trip mb-4">
        <div class="card-header bg-transparent p-0">
      
        <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
        <div class="new-trip-img-over d-flex container justify-content-between  w-100 ">  
                <button class=" aa1 btn btn-success text-white rounded-pill ">
                  Top Trip
                </button>
                
                  <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
               

              </div>
            </div>
    <div class="card-body">
          <div class="d-flex justify-content-between">
          <span>Pyramids -Egypt</span>
          <span><img src="frontend/icons/people.svg" width="30px"></span>
         </div>

        <h4>Riding Camels , See Fireworks at night</h4>
        <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
    </div>
    
  </div>
  
</div>
     <!--  -->
     <div class="col-md-6 col-lg-4 top-trip">
      <div class="card rounded-4 overflow-hidden card-trip mb-4">
        <div class="card-header bg-transparent p-0">
      
        <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
        <div class="new-trip-img-over d-flex container justify-content-between  w-100 ">  
                <button class=" aa1 btn btn-success text-white rounded-pill ">
                  Top Trip
                </button>
                
                  <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
               

              </div>
            </div>
    <div class="card-body">
          <div class="d-flex justify-content-between">
          <span>Pyramids -Egypt</span>
          <span><img src="frontend/icons/people.svg" width="30px"></span>
         </div>

        <h4>Riding Camels , See Fireworks at night</h4>
        <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
    </div>
    
  </div>
  
</div>
   </div>

   </div>


   
   <div class="d-flex justify-content-center">
    <button class="btn btn-success p-3 text-white" id="less1" style="display: none;background-color:#ff7013;">show less</button>
    </div>
   
    <!-- <script src="js/tour_more.js"></script> -->


<!-- end show less -->
 
   <!-- end new trip -->
  
     <!-- ======================== -->




 




<!-- start customize Tour -->

 <div class="container">
  <div class="customize">
    <img src="frontend/imgs/customize.png" alt="" class="cust-img">

    

  <div class="dream-text1">
    <h1>You Can customize <br> Your Tour</h1>
   <!-- <a href="#" class="btn bg-white p-3 mt-3">Customize Now</a> -->
   <routerLink class="btn bg-white p-3 mt-3" :to="{name:'customize'}" >Customize Now</routerLink>
  </div>  
  

    </div>

  </div>




<!-- end customize Tour -->
<!-- =============================== -->







 





<!--  ============================ -->

<div class="explore container mb-5 mt-5">
  <div class="d-flex justify-content-between mb-4">
    <h1>Explore Tour Guide</h1>
    
  </div>

  <div class="row">
    <div class="col-md-6 col-lg-4 d-flex justify-content-center">

      <div class="card border-1 ">
        <div class="card-header bg-transparent d-flex justify-content-center border-0">
          <img src="frontend/imgs/alex.jpg" alt=""  class="border border-2 rounded-circle" width="70px" height="70px">
        </div>
        <div class="card-body text-center">
          <h5>Dina Ahmed</h5>
          <strong>5.0 <i class="fa-solid fa-star"></i></strong>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus expedita ea itaque excepturi nisi. Architecto provident minus excepturi</p>

        </div>
    
      </div>
  

    </div>
    <!--  -->

    <div class="col-md-6 col-lg-4 d-flex justify-content-center">
      <div class="card border-1 ">
        <div class="card-header bg-transparent d-flex justify-content-center border-0">
          <img src="frontend/imgs/alex.jpg" alt=""  class="border border-2 rounded-circle" width="70px" height="70px">
        </div>
        <div class="card-body text-center">
          <h5>Dina Ahmed</h5>
          <strong>5.0 <i class="fa-solid fa-star"></i></strong>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus expedita ea itaque excepturi nisi. Architecto provident minus excepturi</p>

        </div>
    
      </div>

    </div>
    <!--  -->
    <div class="col-md-6 col-lg-4 d-flex justify-content-center">
      <div class="card border-1 ">
        <div class="card-header bg-transparent d-flex justify-content-center border-0">
          <img src="frontend/imgs/alex.jpg" alt=""  class="border border-2 rounded-circle" width="70px" height="70px">
        </div>
        <div class="card-body text-center">
          <h5>Dina Ahmed</h5>
          <strong>5.0 <i class="fa-solid fa-star"></i></strong>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus expedita ea itaque excepturi nisi. Architecto provident minus excepturi</p>

        </div>
    
      </div>

    </div>
    <!--  -->
    





  </div>
  <!-- end row -->


</div>
<!-- end explore -->
<!-- ======================= -->
<!-- client openion -->
<div class="container">
<div class="row openion">
  <div class="col-lg-6 col-md-12">
    <img src="frontend/imgs/clients_openion.PNG" alt="" width="110%" >
  </div>
  <div class="col-lg-6 col-md-12">
    <h1 class="mt-5 mb-5">What Our Clients Say</h1>
    <div class="card pb-5">
      <p class="text-black op">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sapiente nihil culpa quisquam et doloribus error, nisi quos aut ipsa expedita provident, quam officiis distinctio fuga porro necessitatibus itaque eligendi?
      </p>
        <p>
   <!-- <script src="js/script_stars.js"></script> -->
   <i class="fa-solid fa-star"></i>
   <i class="fa-solid fa-star"></i>
   <i class="fa-solid fa-star"></i>
   <i class="fa-solid fa-star"></i>
   <i class="fa-solid fa-star"></i>

        
      </p>

      <p class="text-black fw-bolder"> Soha Karim</p>
      <span class="text-black">Engineer</span>

      
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
    tours:{},
    approved_tours:{}
    };
  },
  mounted() {
    axios.get('/api/v1/users?role=tour guide&isApproved=true').then((res) => {
   this.tours=res.data.data
   console.log(res)
    })
    axios.get('/api/v1/tours').then((res) => {
   this.approved_tours=res.data.data
   console.log(res)
    })


    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
    script.onload = () => {
      // Code to run after jQuery is loaded
      /* eslint-disable no-undef */
      $('#show').click(function(){
    $('#more_tour').slideToggle();
    $('#show').hide();
    $('#less').show();
    });


    /////////////////////

    $('#less').click(function(){
        $('#more_tour').slideUp(1000);
        $('#show').show();
        $('#less').hide();
    
        });

        // ///////////////////////////

        $('#show1').click(function(){
    $('#more_tour1').slideToggle();
    $('#show1').hide();
    $('#less1').show();
    });


    /////////////////////

    $('#less1').click(function(){
        $('#more_tour1').slideUp(1000);
        $('#show1').show();
        $('#less1').hide();
    
        });
      
    };
    document.head.appendChild(script);
  },
};


</script>

<style>
@import '../../../public/frontend/css/tour\ _guide.css';

.first_header_tour {
      background-image: url('../../../public/frontend/imgs/tour_mountain.jpg');
      background-repeat: no-repeat;
      background-size: cover;
    }
 
input{
  width: 10px;
  height: 27px;
  color: white;
}

/* @media (max-width:970px) {
  input{
    width: 50% !important;
  }
  
} */
</style>