<template>
    <div  class="container">
      <div class="d-flex justify-content-between">
        <h4>Explore tour guides</h4>
        <div class="d-flex align-items-center seeMore">
          <span class="m-0"> See More</span>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.835 6.91797L23.9166 13.9996L16.835 21.0813" stroke="#222222" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.0835 14L23.7185 14" stroke="#222222" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
      </div>
      <div class="row">
        <div v-for="t in approvedtours" :key="t" class="col-lg-4 col-md-6 mt-3">
        
          <div @click="details(t._id)"  class="cards">
            <img v-if="!t.profileImg" src="../../../public/images/8ef1fe0fc2dfe255b68e92d51adb952f.png" alt="" srcset="">
            <img v-if="t.profileImg" :src="t.profileImg" alt="" srcset="">
            <h5>{{ t.fullName }}</h5>
            <div class="d-flex justify-content-center">
              <h6>5.0</h6>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5006 18.26L5.44715 22.2082L7.02248 14.2799L1.08789 8.7918L9.11493 7.84006L12.5006 0.5L15.8862 7.84006L23.9132 8.7918L17.9787 14.2799L19.554 22.2082L12.5006 18.26Z" fill="#FFC700"/>
                </svg>
                
            </div>
            <p v-if="!t.description">The tour took us to some of the most beautiful places I have ever seen. The views were truly spectacular and the activities were exciting and fun....</p>
            <p v-if="t.description">{{ t.description }}</p>
          </div>
     
        </div>
        
       
      </div>
   </div>  
 </template>
 <script>
import axios from "axios";
 export default {
     name:'ExploreDestinations', 
     data() {
    return {
 
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
      this.$router.push({ name: 'tour-guide' , params: {id: id} })
      

    }
  }
    }


 </script>
<style scoped>
h3{
  color: #222;

  font-size: 35px;
  font-weight: 600;

}
.cards{

  border-radius: 20px;
border: 1px solid #DEDEDE;
padding: 24px;
text-align: center;

}
.cards img{
  width: 100%;
  max-width: 100px;
height: 100px;
border-radius: 100px;
margin-bottom: 10px;
}
.container{
  padding-bottom: 60px;
}
.seeMore{
  cursor: pointer;
}
</style>