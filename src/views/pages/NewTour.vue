<template>
      <main>
      <div class="container mt-5">
        <h1 class="mb-5">Add New Tour</h1>
        <div class="container p-4">

          <form action="" class="border p-4 rounded-4">

            <div class="mb-4">
              <label for="" class="mb-1">Title</label>
              <input type="text" class="form-control" value="Setting on Boat Spreading ">
            </div>

            <div class="mb-4">
              <label for="" class="mb-1">Choose City</label>
             
              <select name="city" id="city-select" class="form-control form-select">
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
                <!-- Add more options for other cities as needed -->
              </select>

            </div>


            <div class="mb-4">
              <label for="" class="mb-1">Deecription</label>
              <!-- <textarea name="" id="tiny" cols="30" rows="10" class="form-control" placeholder="Describe Product"></textarea> -->
              <vue-tinymce-editor v-model="description" :id="'tiny'"></vue-tinymce-editor>
              
            </div>

            <div class="mb-4">
              <label for="" class="mb-1">Start Location</label>
              <input type="text" class="form-control" value="Setting on Boat Spreading ">
            </div>

            <div class="mb-4">
              <label for="" class="mb-1">Suitable For</label>
              <input type="text" class="form-control" value="Setting on Boat Spreading ">
            </div>

            <div class="mb-4">
              <label for="" class="mb-1">Max Guests</label>
              <input type="number" class="form-control" value="">
            </div>

            <div class="mb-4">
              <label for="" class="mb-1">Mimimum Age</label>
              <input type="number" class="form-control" value="">
            </div>




            <div class="mb-4">
              <label for="" class="mb-1">Price</label>
              <input type="text" class="form-control w-25" value="100">
            </div>

            <div>
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <label for="" class="mb-1 d-block">Tour Dates</label>
                  <input type="date" class=" rounded-3 p-2 me-4" style="width:200px;height: 40px; color:black" >
                  <input type="date" class="rounded-3 p-2" style="width:200px;height: 40px; color:black">
                </div>
                <div class="col-lg-6 col-md-6">
                  <label for="" class="mb-1 d-block">Durations</label>
                  <input type="text" class="form-control" value="5 Days">


                </div>
              </div>
              <a href="#"><i class="fa-regular fa-square-plus mt-3" style="font-size: 20px;"></i></a>
              Add more tour dates <span class="text-secondary">(Make sure that start and end of each tour not conflict with each other)</span>
            </div>



            <div class="mb-4 mt-5">
              <label for="" class="mb-1">Photos</label>
              <div class="border border-2 border-black rounded-3 d-flex justify-content-center align-items-center" style="height: 200px;">
                  <div >
                    <a id="upload-icon" >
                      <i class="fa-solid fa-upload rounded-4 "
              style="padding: 15px;border:solid #ff7013; color: #ff7013; margin-left: 100px; cursor: pointer;"></i>
              
                    </a>
                    
                    
                    <input type="file" id="file-upload2" style="display: none;" />
                    <p style="text-align: center;" class="mt-4">Upload Photos of The Trip here</p>
                 
                    
                  </div>
              </div>
              
      
              <!-- <script>
                // JavaScript code to handle click event on the download icon
                document.getElementById("upload-icon").addEventListener("click", function() {
                  document.getElementById("file-upload").click(); // Trigger the file upload input
                });
              </script> -->
            </div>

           <p class="fw-bolder mt-4">Plan</p>
            <div class="border p-3">
            <div class="mb-4">
              <label for="" class="mb-1">Description</label>
              <textarea name="" id="" cols="30" rows="5" style="height: 150px;" class="form-control"></textarea>
            </div>


            <div class="mb-4">
              <label for="" class="mb-1">List</label>
              <div class="row">

                <div class="col">
              <input type="text" class="form-control">
              </div>
              <div class="col pt-0" >
              <i class="fa-regular fa-square-plus" style="font-size: 35px;"></i>
            </div>
            </div>
          </div>
          </div>



          <p class="fw-bolder mt-4">What to Pring For this tour</p>
          <div class="border p-3">
         


          <div class="mb-4">
            <label for="" class="mb-1">List</label>
            <div class="row">

              <div class="col">
            <input type="text" class="form-control">
            </div>
            <div class="col pt-0" >
            <i class="fa-regular fa-square-plus" style="font-size: 35px;"></i>
          </div>
          </div>
        </div>
        </div>

        <!-- <input type="submit" name="" value="Submit" id="" class="" style="color: white;background-color: #ff7013;font-weight: bold;padding: 15px;margin-top: 30px;border-radius: 20px;" > -->
        <button style="color: white;background-color: #ff7013;font-weight: bold;padding: 15px;margin-top: 30px;border-radius: 20px;" class="btn" id="" name="">
            Submit

        </button>
            

          </form>
        </div>


      </div>
    </main>


</template>


<script>
import VueTinymceEditor from 'vue-tinymce-editor'

export default{
    components: {
    'vue-tinymce-editor': VueTinymceEditor
  },
 mounted(){
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
    script.onload = () => {
      // Code to run after jQuery is loaded
      /* eslint-disable no-undef */
    

// JavaScript code to handle click event on the upload icon
document.getElementById("upload-icon").addEventListener("click", function() {
document.getElementById("file-upload2").click(); // Trigger the file upload input
});


  
};
    document.head.appendChild(script);

 }
}


</script>

<style>
@import '../../../public/frontend/css/style.css';

.form-control{
  border: solid 2px black;
  height: 40px;
 }
 /* .submit{
  color: white;
  background-color: #ff7013;
  font-weight: bold;
  padding: 15px;

  margin-top: 30px;
  border-radius: 20px;
 } */
</style>