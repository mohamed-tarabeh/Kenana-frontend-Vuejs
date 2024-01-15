<template>
     <main>
     <div class="container mt-5">
      <div class="row">
        <div class="col-lg-4 col-md-4 ">
         <!-- search -->
          <div class="search-container">
            <input type="text" class="search-input" placeholder="Search...">
            <i class="fa fa-search search-icon"></i>
          </div>
          <!-- end serach -->

         <div class=" p-3" id="msg1" style="cursor: pointer;">
          <img src="frontend/imgs/ava1.png" alt="" class="img-fluid me-3" width="50px">
          <span class="fw-bold">Ahmed Mohamed</span>
          <img src="frontend/icons/Vector.svg" alt="" style="margin-left: 75px;">

         </div>
         <div class=" p-3">
          <img src="frontend/imgs/ava1.png" alt="" class="img-fluid me-3" width="50px">
          <span class="fw-bold">Ahmed Mohamed</span>
          <img src="frontend/icons/Vector.svg" alt="" style="margin-left: 75px;">
         </div>
         <div class=" p-3">
          <img src="frontend/imgs/ava1.png" alt="" class="img-fluid me-3" width="50px">
          <span class="fw-bold">Ahmed Mohamed</span>
          <img src="frontend/icons/Vector.svg" alt="" style="margin-left: 75px;">
         </div>
         <div class=" p-3"> <img src="frontend/imgs/ava1.png" alt="" class="img-fluid me-3" width="50px">
          <span class="fw-bold">Ahmed Mohamed</span>
          <img src="frontend/icons/Vector.svg" alt="" style="margin-left: 75px;">
        </div>

        </div>


        <div class="col-lg-8 col-md-8  ps-0">
          <div class="before-chat ps-0">
          <img src="frontend/imgs/chat1.png" alt="" class="img-fluid" style="width: 90%;">

        </div>

        <div class="chat-msg1 ps-0">
          <img src="frontend/imgs/chat_msg1.png" alt="" width="100%" class="img-fluid">

        </div>
        </div>
      </div>
     </div>

    </main>
    <!-- end main -->

</template>
<script>

export default{
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
    script.onload = () => {
      // Code to run after jQuery is loaded
      /* eslint-disable no-undef */
      $('#msg1').click(function(){
    $('.before-chat').hide();
    $('.chat-msg1').show();
  });
     
      
    };
    document.head.appendChild(script);
  },
};
</script>
<style>

.search-container {
      display: flex;
      align-items: center;
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 5px;
      border-radius: 50px;
    }

    .search-input {
      flex: 1;
      border: none;
      outline: none;
      font-size: 16px;
      color: black;
      padding-left: 20px;
     
    }

    .search-icon {
      padding: 5px;
      color: #888;
    }

    /*  */

    .chat-msg1{
      display: none;
      padding-left: 0px;
    }
</style>