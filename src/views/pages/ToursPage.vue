<template>

<div class="container first_header_tour mb-5">
    <div></div>
      <div class="d-flex justify-content-center align-items-center"  style="position:absolute;height: 100%; width: 100%; background-color:rgba(0, 0, 0,.3);left:0px;z-index:1;">
        <div>
        <h1>Explore Trip Place</h1>
      
        <!-- search -->
        
          <div class="row">
              <div class="col-md-10 mx-auto">
                 
                  <div class="input-group mt-4">
                      <input class="form-control border-end-0 border rounded-4 p-4 mt-1 " type="search" value=""  placeholder="Trip Place Name" id="example-search-input">
                      <span class="input-group-append">
                          <button class="btn btn-outline-secondary srch border-bottom-0  rounded-5 ms-n5 p-3" type="button">
                              <i class="fa fa-search text-white"></i>
                          </button>
                      </span>
                  </div>
              </div>
          </div>
         
        
        

        <!-- <script> 
          // const searchButton = document.getElementById('search-button');
          //   const searchInput = document.getElementById('search-input');
          //   searchButton.addEventListener('click', () => {
          //     const inputValue = searchInput.value;
          //     alert(inputValue);
          //   });
        </script>
    -->
      </div>
   
  </div>
     
    </div>
    <!-- end header -->

   

    <!-- destination cards -->


    

<!-- tours -->
<div class="tours container-fluid mb-4">
     
  <!-- <a href="#" class="text-decoration-none">    -->
  <div class="row mb-4">

    <div v-for="x in tours" :key="x" class="col-md-6 col-lg-4 top-trip">
   
      <div @click="details(x._id)" class="card rounded-4 overflow-hidden card-trip mb-4">
        <div class="card-header bg-transparent p-0">
       
        <img src="frontend/imgs/24d0ba77b05c09106404af72cbc22932.png" alt="trip" class="card-img-top new-trip-img">
        <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
                <!-- <button class=" aa1 btn btn-success text-white rounded-pill ">
                  Top Trip
                </button> -->
                
                  <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
               

              </div>
            </div>
    <div class="card-body">
      <!-- <routerLink :to="{name:'book-page'}" > -->
      
          <div class="d-flex justify-content-between">
          <span>{{ x.city }} -Egypt</span>
          <span><img src="frontend/icons/people.svg" width="30px"></span>
         </div>
     

        <h5>{{ x.description }}</h5>
        <span class="fw-bold">{{ x.price }} EGP / <small class="fw-normal">Person</small></span>
    </div>
    
  </div>

  
</div>




</div>

  <!-- show more and less btn-->
   <div class="d-flex justify-content-center mb-5">
   <button class="btn btn-success p-3 text-white border-0" id="show" style="background-color:#ff7013;">show more</button>
   </div>

   <!-- show more div-->
   <div class="more_tour" id="more_tour" style="display: none;">

    <div class="row mb-4">
      <div class="col-md-6 col-lg-4 top-trip">
        <div class="card rounded-4 overflow-hidden card-trip mb-4">
          <div class="card-header bg-transparent p-0">
        
          <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
          <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
                  <!-- <button class=" aa1 btn btn-success text-white rounded-pill ">
                    Top Trip
                  </button> -->
                  
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
        <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
                <!-- <button class=" aa1 btn btn-success text-white rounded-pill ">
                  Top Trip
                </button> -->
                
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
        <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
                <!-- <button class=" aa1 btn btn-success text-white rounded-pill ">
                  Top Trip
                </button> -->
                
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

   <div class="d-flex justify-content-center mb-5">
    <button class="btn btn-success p-3 text-white border-0" id="less" style="display: none;background-color:#ff7013;">show less</button>
    </div>
   
    <!-- <script src="js/tour_more.js"></script> -->


<!-- end show less -->
 
   <!-- end new trip -->

     <!-- ======================== -->





<!-- start customize Tour -->

 <div class="container">
  <div class="customize">
    <img src="frontend/imgs/customize.png"  class="cust-img">

    

  <div class="dream-text1">
    <h1>You Can customize <br> Your Tour</h1>
   <!-- <a href="customize.html" class="btn bg-white p-3 mt-3">Customize Now</a> -->
   <routerLink class="btn bg-white p-3 mt-3" :to="{name:'customize'}" >Customize Now</routerLink>
  </div>  
  

    </div>

  </div>




<!-- end customize Tour -->
<!-- =============================== -->


<!--  ============================ -->

<div class="explore container mb-5">
  <div class="d-flex justify-content-between mb-4">
    <h1>Explore Tour Guide</h1>
    <span>See More</span>
  </div>

  <div   class="row">
    <div style="margin-bottom: 10px !important;" v-for="tour in approvedtours" :key="tour" class="col-md-6 col-lg-4 d-flex justify-content-center">

      <div class="card border-1 ">
        <div class="card-header bg-transparent d-flex justify-content-center border-0">
          <img v-if="!tour.profileImg" src="frontend/imgs/alex.jpg"  class="border border-2 rounded-circle" width="70px" height="70px">
          <img v-if="tour.profileImg" :src="tour.profileImg"  class="border border-2 rounded-circle" width="70px" height="70px">
        </div>
        <div class="card-body text-center">
          <h5>{{ tour.fullName }}</h5>
          <strong>5.0 <i class="fa-solid fa-star"></i></strong>
          <p v-if="tour.description ">{{ tour.description }}</p>
          <p v-if="! tour.description ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus expedita ea itaque excepturi nisi. Architecto provident minus excepturi</p>

        </div>
    
      </div>
    

    </div>






  </div>
  <!-- end row -->


</div>
<!-- end explore -->
<!-- ======================= -->
<!-- client openion -->
<div class="container">
<div class="row openion">
  <div class="col-lg-6 col-md-12">
    <img src="frontend/imgs/clients_openion.PNG"  width="110%" >
  </div>
  <div class="col-lg-6 col-md-12">
    <h1 class="mt-5 mb-5">What Our Clients Say</h1>
    <div class="card pb-5">
      <p class="text-black op">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sapiente nihil culpa quisquam et doloribus error, nisi quos aut ipsa expedita provident, quam officiis distinctio fuga porro necessitatibus itaque eligendi?
      </p>
        <p>
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

<!-- ================ -->

</div>

<!-- </div>
</div> -->
</template>
<script>
  import { useRouter } from 'vue-router'
  
import axios from "axios";
export default{
  data() {
    return {
   router : useRouter(),
    tours:{},
    approvedtours:{}
    };
  },
  mounted() {
    
    axios.get('/api/v1/tours').then((res) => {
      this.tours=res.data.data
console.log(res)
}).catch((el)=>{

console.log(el)


})
axios.get('/api/v1/admin/users?role=tour guide&isApproved=true').then((res) => {
      this.approvedtours=res.data.data
console.log(res)
}).catch((el)=>{

console.log(el)


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
      
    };
    document.head.appendChild(script);
  },
  methods:{
    details(id){
      this.$router.push({ name: 'pyramids-page' , params: {id: id} })
      

    }
  }
};

</script>
<style>
@import '../../../public/frontend/css/tour.css';

.first_header_tour{
    background-image: url('../../../public/frontend/imgs/tour_mountain.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .white-div{
    height: 150px;
    z-index: 1;
    background-color: rgb(255, 255, 255);
    width: 100%;
    left: 0px;
    border-radius: 30px;
}
input{
  width: 10px;
  height: 27px;
  color: white;
}
a{
  text-decoration: none;
}


</style>