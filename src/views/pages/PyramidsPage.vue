<template>


  <!-- main -->
  <main>
<!-- Gallery -->
<div class="container row mb-5">
  <div class="col">
    <h2>{{ tours.startLocation }}</h2>
    <h3>
    <i class="fa-solid fa-star"></i> <span>{{  tours.ratingsAverage}} ({{ tours.ratingsQuantity }} Reviews)</span> &nbsp; &nbsp;
    <i class="fa-solid fa-location-dot me-2"></i>  <span>{{ tours.city }}</span>
  </h3>
  </div>
  <div class="col d-flex justify-content-end">
    <a href="#"><img src="frontend/icons/fav.PNG" alt="" width="40px" height="40px" class="me-3"></a>
    <a href="#"><i class="fa fa-share pt-2" style="color: #ff7013; font-size: 20px;"></i></a>
  </div>
  

</div>
<div   class="row gallery">

  
    <div style="margin-bottom: 10px !important;" v-for=" x in tours.gallary" :key="x" class="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <img :src="x" style="height: 100% !important ; "
        class="w-100  shadow-1-strong rounded mb-4"
        />
  
    </div>
  


    <!-- show all photos -->
    <div class="show_all col-12 d-flex justify-content-end">
      
      <!-- <a href="all_photos.html"> -->
        <routerLink :to="{name:'all-photos'}"> 
        <button class="btn btn_all p-3 rounded-5">Show All Photos</button>
      <!-- </a> -->
    </routerLink>
    </div>


  </div>

 

  <!--  -->
  <section  :key="x">
    <div class="container mt-5">
    <div class="row">
      <!-- col paragrph -->
      <div class="col-lg-8 col-md-12 para">

        <!-- inside row -->
            <div class="row">
            <div class="col-1">
              <img src="frontend/imgs/clients_openion.PNG" alt="" class="rounded-circle border border-2" width="80px">
            </div>
            <div class="col-10 ps-5">
              <h2>{{ tours.tourGuide?.fullName }}</h2>
              <strong>5.0 <i class="fa-solid fa-star"></i></strong>
            </div>
            </div>
           
          <p class="fw-bold mt-4">{{ tours.description }}</p>
         
          <p></p>

     <h2>Tour Plan</h2>

         
          <p>
            {{ tours.program }}
          </p>

      </div>




      <!-- col book -->
      <div class="book col-lg-4 col-md-12  border rounded-4  p-4">
     
          <table class="table container mt-4">
            <tr>
              <td class="pb-3">
                <h3 class="d-inline">{{tours.price }} EGP</h3>/Person
              </td>
            </tr>

            <tr>
              <td class="pb-3">
                <i class="fa-regular fa-clock me-2"></i>Duration
              </td>
              <td class="pb-3 text-right fw-bold">
                {{ tours.durations}}
              </td>
            </tr>

            <tr>
              <td class="pb-3">
                <i class="fa-regular fa-user me-2"></i>Max Guests
              </td>
              <td class="pb-3 text-right fw-bold">
                {{ tours.maxGuests}}
              </td>
            </tr>

            <tr>
              <td class="pb-3">
                <i class="fa-regular fa-user me-2"></i>Minimum Age
              </td>
              <td class="pb-3 fw-bold">
                + 12
              </td>
            </tr>

            <tr>
              <td class="pb-3">
                <i class="fa-solid fa-location-dot me-2"></i>Tour Location
              </td>
              <td class="pb-3 fw-bold">
                {{ tours.city }}
              </td>
            </tr>

            <tr>
              <td class="pb-3">
                <i class="fa-solid fa-earth-americas me-2"></i>Language
              </td>
              <td class="pb-3 fw-bold">
                Arabic
              </td>
            </tr>

           

          </table>
          
            <button @click="push()" class="book_btn w-100 rounded-5 p-2">Book Now</button>
       

      </div>
      

    </div>

  </div>
  <!-- end container -->
  </section>


<!-- what to bring para -->
<div class="row mt-5">
  <div class="col-lg-6 col-md-12 p-3">
    <h3>What to bring for this Tour</h3>
          <ul type="none">
            <li>
            <i class="fa-solid fa-circle-check me-2"></i><span>Lorem ipsum dolor, sit amet consectetur adipisicing </span>
          </li>
            
          <li>
            <i class="fa-solid fa-circle-check me-2"></i><span>Lorem ipsum dolor, sit amet consectetur adipisicing </span>
          </li>

          <li>
            <i class="fa-solid fa-circle-check me-2"></i><span>Lorem ipsum dolor, sit amet consectetur adipisicing </span>
          </li>
          <li>
            <i class="fa-solid fa-circle-check me-2"></i><span>Lorem ipsum dolor, sit amet consectetur adipisicing </span>
          </li>

          </ul>

  </div>
  <!-- <div class="col-lg-2 col-md-6"></div> -->
  <!-- second col what not to bring -->
  <div class="col-lg-6 col-md-12 p-3">

    <h3 class="ps-5">What not to bring for this Tour</h3>
          <ul type="none">
            <li>
              <i class="fa-solid fa-xmark me-2"></i><span>Lorem ipsum dolor, sit amet consectetur adipisicing </span>
          </li>
            
          <li>
            <i class="fa-solid fa-xmark me-2"></i><span>Lorem ipsum dolor, sit amet consectetur adipisicing </span>
          </li>

          <li>
            <i class="fa-solid fa-xmark me-2"></i><span>Lorem ipsum dolor, sit amet consectetur adipisicing </span>
          </li>
          <li>
            <i class="fa-solid fa-xmark me-2"></i><span>Lorem ipsum dolor, sit amet consectetur adipisicing </span>
          </li>

          </ul>
  </div>
</div>

<!-- end what to bring para -->
<!--  -->



  <!-- tour map location -->
  <div class="container">

        <div class="mapp">

          <h2 class="mb-4">Tour start Location</h2>

          <iframe class="rounded-4 border border-2 border-black" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7292356.675435891!2d25.57679088092733!3d26.81700990308043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2seg!4v1699239655161!5m2!1sen!2seg" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>

  <!-- end mapp -->


  <!-- Reviews -->
  <div class="reviewss">
    <h2 class="mb-3 mt-5">
      <i class="fa-solid fa-star"></i> <span>4 - 20 Reviews</span>
    </h2>
    <!-- row 1 -->
    <div  class="row mb-4" id="rep">
      <!-- col 1 -->
      <div v-for="x in  tours.reviews" :key="x" class="col-lg-6 col-md-12">
        
        <!-- inner col  -->
        <div class="row mt-4">
            <div class="col-1">
               <img src="frontend/imgs/clients_openion.PNG" alt="" class="rounded-circle border border-2" width="80px">
                  </div>
              <div class="col-10 ps-5">
               <h5 class="fw-bold ps-3 pt-2">{{ x.user.fullName }}</h5>
                <!-- <strong>5.0 <i class="fa-solid fa-star"></i></strong> -->
                <span class="small text-secondary ps-3 ">05/27/2023</span>
              </div>
          </div>

         
          <div class="review_par">
           <p id="starss" class="ps-3 mt-2 pb-0"></p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus consequatur hic quo at est tempora deserunt voluptatem quaerat, commodi voluptatibus excepturi doloribus rem aliquam, laboriosam, sit mollitia! Et,
          </div>
          

          
       
      </div>




    </div>
    
    


    <!-- row 2 -->
    <div class="row mb-4">
     
   
    </div>
    <!-- end row 2 -->
  </div>

  <!-- <h3>
    <a href="#" class="text-black small ms-2"> Show all reviews</a>
  </h3> -->

  <!-- show more and less btn-->
  <div class="d-flex justify-content-center mb-5">
   <button class="btn btn-success p-3 text-white border-0" id="show" style="background-color:#ff7013;">show more</button>
   </div>


<!-- show more div -->
<div class="more_tour" id="more_reviews" style="display: none;">
<div class="row mb-4">
      <!-- col 1 -->
      <div class="col-lg-6 col-md-12">
        
        <!-- inner col  -->
        <div class="row mt-4">
            <div class="col-1">
               <img src="frontend/imgs/clients_openion.PNG" alt="" class="rounded-circle border border-2" width="80px">
                  </div>
              <div class="col-10 ps-5">
                <h5 class="fw-bold ps-3 pt-2">Ahmed Mohamed</h5>
                <!-- <strong>5.0 <i class="fa-solid fa-star"></i></strong> -->
                <span class="small text-secondary ps-3 ">05/27/2023</span>
              </div>
          </div>

          <div>
           
          </div>
          <div class="review_par">
            <p id="starss" class="ps-3 mt-2 pb-0"></p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus consequatur hic quo at est tempora deserunt voluptatem quaerat, commodi voluptatibus excepturi doloribus rem aliquam, laboriosam, sit mollitia! Et,
          </div>
          
      </div>

     <!-- col 1 -->
      <div class="col-lg-6 col-md-12">
        
        <!-- inner col  -->
        <div class="row mt-4">
            <div class="col-1">
               <img src="frontend/imgs/clients_openion.PNG" alt="" class="rounded-circle border border-2" width="80px">
                  </div>
              <div class="col-10 ps-5">
                <h5 class="fw-bold ps-3 pt-2">Ahmed Mohamed</h5>
                <!-- <strong>5.0 <i class="fa-solid fa-star"></i></strong> -->
                <span class="small text-secondary ps-3 ">05/27/2023</span>
              </div>
          </div>

          <div>
          </div>
          <div class="review_par mb-3">
            <p id="starss" class="ps-3 mt-2 pb-0"></p>

            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus consequatur hic quo at est tempora deserunt voluptatem quaerat, commodi voluptatibus excepturi doloribus rem aliquam, laboriosam, sit mollitia! Et,
          </div>
          

          
       
      </div>
      <!-- end col 2 -->

    </div>
  </div>
<!-- end show more div -->

<div class="d-flex justify-content-center mb-5">
    <button class="btn btn-success p-3 text-white border-0" id="less" style="display: none;background-color:#ff7013;">show less</button>
    </div>




  <button class="add_review ps-5 pe-5 btn rounded-5 mt-3 ms-2 mb-3" data-bs-toggle="modal" data-bs-target="#myModal-guide">Add Review</button>




   <!-- The Modal -->
 <div class="modal" id="myModal-guide">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header border-0 ">
        <div class="modal-title p-4" style="margin-left: 34%;">
          <i class="fa fa-star s me-2"></i>
          <i class="fa fa-star s me-2"></i>
          <i class="fa fa-star s me-2"></i>
          <i class="fa fa-star s me-2"></i>
          <i class="fa fa-star s me-2"></i>
         
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body me-4">
        <form action="">
          <label class="form-label ms-3 fw-bold">Reviews</label>
          <input type="text"  class="form-control small fw-lighter p-4 border-1 border-dark ms-3 me-4">
          <div class="d-flex justify-content-center">
          <button style="background-color:#ff7013; color: white; font-size: 20px; width: 150px; padding: 20px;" class=" border-0 rounded-5 fw-bold mt-3 text-center">Send</button>
        </div>
        </form>
      </div>

      <!-- Modal footer -->
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" style="background-color: #ff7013;">Close</button>
      </div> -->

    </div>
  </div>
</div>

  <!-- end reviews -->



  <!-- start customize Tour -->

  <div class="container">
    <div class="customize">
      <img src="frontend/imgs/customize.png" alt="" class="cust-img">
  
      
  
    <div class="dream-text1">
      <h1>You Can customize <br> Your Tour</h1>
     <a href="#" class="btn bg-white p-3 mt-3">Customize Now</a>
    </div>  
    
  
      </div>
  
    </div>


<!-- related tours cards -->
<div class="tours container-fluid mb-4 mt-5">
  <h2>Related Tours</h2>
  <div class="row mb-4 mt-4">

    <div class="col-md-6 col-lg-4 top-trip">
      <div class="card rounded-4 overflow-hidden card-trip mb-4">
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
  
    <img src="frontend/imgs/2ab37ca6249a1ff1defb3b3889df1069.png" alt="trip" class="card-img-top new-trip-img">
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
  
    <img src="frontend/imgs/64ac6f2d5fd548d9bf11ff3f1fae5fbc.png" alt="trip" class="card-img-top new-trip-img">
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
<!-- end related tour -->
</main>

</template>

<script>
import axios from "axios";
export default{
  data() {
    return {
 
    tours:{},
    approvedtours:{}
    };
  },
  methods:{
    push(){
      this.$router.push({ name: 'book-page' , params: {id:this.$route.params.id } })
    }
  },
  mounted() {
    axios.get(`/api/v1/tours/${this.$route.params.id }`).then((res) => {
      this.tours=res.data.data
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
    $('#more_reviews').slideToggle();
    $('#show').hide();
    $('#less').show();
    });


    /////////////////////

    $('#less').click(function(){
        $('#more_reviews').slideUp(1000);
        $('#show').show();
        $('#less').hide();
    
        });
      
    };
    document.head.appendChild(script);
  },
};

</script>

<style>
@import '../../../public/frontend/css/pyramdis_tours.css';
@import '../../../public/frontend/css/tour.css';

/* .gallery{
    position: relative;
}
.show_all{
    position: absolute;
    bottom: 50px;
    left: 80%;
    width: 100%;

}
@media (max-width:990) {
   .show_all{
    left: 30px;
   }
    
}

.btn_all{
    background-color: rgb(253, 253, 249);
    font-size: 20px;
    
}
.btn_all:hover{
    background-color:rgb(236, 236, 140) ;
} */


.gallery {
    position: relative;
  }
  
  .show_all {
    position: absolute;
    width: 100%;
    bottom: 50px;
    left: -30px;
    /* right: 0; */
  }
  
  @media (max-width: 990px) {
    .show_all {
      bottom: 60px;
    }

  }
  
  .btn_all {
    background-color: #fdfdf9;
    font-size: 20px;
  }
  
  .btn_all:hover {
    background-color: #ecec8c;
  }

  
.book{
    max-height: 500px !important;
}
.book_btn{
    background-color: #ff7013;
    color: white;
    border: none;
    font-size: 25px;
    
}


.book td{
    font-size: 20px;


}
.para{
    padding-right: 110px;
}
.fa-circle-check{
    color: #ff7013;
}
.fa-xmark{
    color: royalblue;
}

.review_par{
    font-size: 18px;
    text-align: justify;
    padding-right: 100px;
}

.add_review{
    background-color: #ff7013;
    font-size: 20px;
    color: white;
}


</style>