<!-- eslint-disable vue/no-parsing-error -->
<template>




<div class="container profile-guide">
      <h1 class="fw-bolder my-5 mb-5">Profile</h1>

      <div class="row mb-5">
        <div class="col-lg-4 col-md-12 border rounded-4 mb-5">
          <table class="table mt-3">
            <tr class="d-flex justify-content-center ">
              <td class="border-bottom-0" style="position: relative;">
                <img src="frontend/imgs/clients_openion.PNG" alt="" class="rounded-circle immm">

                <label for="file-input">
           <img src="frontend/imgs/edit_photo.PNG" alt="" style="position: absolute; top:155px; left:135px; border-radius: 50%; width: 40px;cursor: pointer;">
         </label>
          <input id="file-input" type="file" style="display: none;">
              </td>

            </tr>

            <tr class="d-flex justify-content-center border-top-0">
              <td>
                <h2>{{ tours.fullName }}</h2>
              </td>
            </tr>


            <tr class="d-flex justify-content-center mb-4">
              <td>
                <i class="fa-regular fa-message me-4 " style="   font-size: 25px;
    color:  #ff7013;"></i>
                <i class="fa-solid fa-phone" style="   font-size: 25px;
    color:  #ff7013;"></i>
              </td>
            </tr>

            <tr class="d-flex justify-content-center">
              <td>


                <routerLink :to="{name:'add_tour_page_form'}" class="rounded-5 add_tour_" style="color: white; background-color: #ff7013;padding: 10px 20px; font-size: 14px; font-weight: bold; text-decoration: none;">Add new Tour</routerLink>
                

                <!-- <a href="#" class="rounded-5" style="color: white; background-color: #ff7013;padding: 10px 20px; font-size: 14px; font-weight: bold; text-decoration: none;">Add new Tour</a> -->
              </td>
            </tr>


            <tr>
              <td class="p-4">
                <button class="btn btn-light w-100 btn-prof" id="btn-inform" style="background-color:rgb(243, 239, 239)">Information</button>
              </td>
            </tr>

            <tr>
              <td class="p-4">
                <button class="btn btn-light w-100 btn-prof" id="btn-tour" style="background-color:rgb(243, 239, 239)">Tour</button>
              </td>
            </tr>

            <tr>
              <td class="p-4">
                <button class="btn btn-light w-100 btn-prof" id="btn-review" style="background-color:rgb(243, 239, 239)">Review</button>
              </td>


            </tr>
            <tr> 
              <td class="p-4">
                <button class="btn btn-light w-100 btn-prof" id="btn-booking" style="background-color:rgb(243, 239, 239)">Bookings</button>
              </td>
            </tr>

            <tr>
              <td class="p-4">
                <button class="btn btn-light w-100 btn-prof" id="btn-finance" style="background-color:rgb(243, 239, 239)">Finance</button>
              </td>
            </tr>



          </table>
        </div>

        <!-- col2  div show all tabs-->
        <div class="col-lg-8 col-md-12">
          <!-- iframe_div info -->
          <div class="container-fluid tablee" id="info_div">
            <table class="table">
              <h2>Information</h2>
              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">Name</label>
                  <input type="text" class="form-control border-0" v-model="tours.fullName" >
                </td>

                <td class="d-flex justify-content-end">
                  <button class="change btn rounded-1 ps-4 pe-4 p-2 mt-4" type="button" data-bs-toggle="modal"
                    data-bs-target="#myModal1">
                    <i class="fa-regular fa-pen-to-square"></i>
                    Change
                  </button>
                  <!-- The Modal -->
                  <div class="modal" id="myModal1">
                    <div class="modal-dialog modal-lg"  style="width:600px">
                      <div class="modal-content" style="width:600px">

                        <!-- Modal Header -->
                        <div class="modal-header">
                          <h4 class="modal-title">Edit Name</h4>
                          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body mt-3" style="margin-left:-40px">
                          <form action="">
                            <input type="text" name="" id="" placeholder="Enter New Name"
                              class="form-control small fw-lighter">
                            <div class="d-flex justify-content-center">
                              
                              <!-- <input type="submit" value="Change" style="background-color: #ff7013; color: white; width: 100px;"
                                class="border-0 rounded-2 fw-bold mt-3"> -->
                                <button style="background-color: #ff7013; color: white; width: 100px;"
                                class="border-0 rounded-2 fw-bold  p-3">Change</button>
                            </div>
                          </form>
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer">
                          <button type="button" class="btn " style="background-color: #ff7013;" data-bs-dismiss="modal">Close</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </td>

              </tr>


              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">E-mail</label>
                  <input type="text" class="form-control border-0" v-model="tours.email" >
                </td>

                <td class="d-flex justify-content-end">
                  <button class="change btn rounded-1 ps-4 pe-4 p-2 mt-4" type="button" data-bs-toggle="modal"
                    data-bs-target="#myModal1_1">
                    <i class="fa-regular fa-pen-to-square"></i>
                    Change
                  </button>
                  <!-- The Modal -->
                  <div class="modal" id="myModal1_1">
                    <div class="modal-dialog modal-lg"  style="width:600px">
                      <div class="modal-content" style="width:600px">

                        <!-- Modal Header -->
                        <div class="modal-header">
                          <h4 class="modal-title">Edit Name</h4>
                          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body mt-3" style="margin-left:-40px">
                          <form action="">
                            <input type="text" name="" id="" placeholder="Enter New Email"
                              class="form-control small fw-lighter">
                            <div class="d-flex justify-content-center">
                              
                              <!-- <input type="submit" value="Change" style="background-color: #ff7013; color: white; width: 100px;"
                                class="border-0 rounded-2 fw-bold mt-3"> -->
                                <button style="background-color: #ff7013; color: white; width: 100px;"
                                class="border-0 rounded-2 fw-bold  p-3">Change</button>
                            </div>
                          </form>
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer">
                          <button type="button" class="btn " style="background-color: #ff7013;" data-bs-dismiss="modal">Close</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </td>
              </tr>


              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">Phone Number</label>
                  <input type="text" class="form-control border-0" v-model="tours.phoneNumber">
                </td>
                <td class="d-flex justify-content-end">
                  <button class="change btn rounded-1 ps-4 pe-4 p-2 mt-4" type="button" data-bs-toggle="modal"
                    data-bs-target="#myModal1_2">
                    <i class="fa-regular fa-pen-to-square"></i>
                    Change
                  </button>
                  <!-- The Modal -->
                  <div class="modal" id="myModal1_2">
                    <div class="modal-dialog modal-lg"  style="width:600px">
                      <div class="modal-content" style="width:600px">

                        <!-- Modal Header -->
                        <div class="modal-header">
                          <h4 class="modal-title">Edit Phone</h4>
                          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body mt-3" style="margin-left:-40px">
                          <form action="">
                            <input type="text" name="" id="" placeholder="Enter New Name"
                              class="form-control small fw-lighter">
                            <div class="d-flex justify-content-center">
                              
                              <!-- <input type="submit" value="Change" style="background-color: #ff7013; color: white; width: 100px;"
                                class="border-0 rounded-2 fw-bold mt-3"> -->
                                <button style="background-color: #ff7013; color: white; width: 100px;"
                                class="border-0 rounded-2 fw-bold  p-3">Change</button>
                            </div>
                          </form>
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer">
                          <button type="button" class="btn " style="background-color: #ff7013;" data-bs-dismiss="modal">Close</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">Description</label>
                  <textarea rows="8" class="form-control border-0 "  >{{ tours.description }}
              </textarea>
                </td>

                <td class="d-flex justify-content-end">
                  <button class="change btn rounded-1 ps-4 pe-4 p-2 mt-4" type="button" data-bs-toggle="modal"
                    data-bs-target="#myModal1_5">
                    <i class="fa-regular fa-pen-to-square"></i>
                    Change
                  </button>
                  <!-- The Modal -->
                  <div class="modal" id="myModal1_5">
                    <div class="modal-dialog modal-lg"  style="width:600px">
                      <div class="modal-content" style="width:600px">

                        <!-- Modal Header -->
                        <div class="modal-header">
                          <h4 class="modal-title">Edit Description</h4>
                          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body mt-3" style="margin-left:-40px">
                          <form action="">
                            <input type="text" name="" id="" placeholder="Enter New Description"
                              class="form-control small fw-lighter">
                            <div class="d-flex justify-content-center">
                              
                              <!-- <input type="submit" value="Change" style="background-color: #ff7013; color: white; width: 100px;"
                                class="border-0 rounded-2 fw-bold mt-3"> -->
                                <button style="background-color: #ff7013; color: white; width: 100px;"
                                class="border-0 rounded-2 fw-bold  p-3">Change</button>
                            </div>
                          </form>
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer">
                          <button type="button" class="btn " style="background-color: #ff7013;" data-bs-dismiss="modal">Close</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">City</label>
                  <input type="text" class="form-control border-0" v-model="tours.city" >
                </td>
                <td class="d-flex justify-content-end">
                  <button class="change btn rounded-1 ps-4 pe-4 p-2 mt-4" type="button" data-bs-toggle="modal"
                    data-bs-target="#myModal1_6">
                    <i class="fa-regular fa-pen-to-square"></i>
                    Change
                  </button>
                  <!-- The Modal -->
                  <div class="modal" id="myModal1_6">
                    <div class="modal-dialog modal-lg"  style="width:600px">
                      <div class="modal-content" style="width:600px">

                        <!-- Modal Header -->
                        <div class="modal-header">
                          <h4 class="modal-title">Edit City</h4>
                          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body mt-3" style="margin-left:-40px">
                          <form action="">
                            <input type="text" name="" id="" placeholder="Enter New City"
                              class="form-control small fw-lighter">
                            <div class="d-flex justify-content-center">
                              
                              <!-- <input type="submit" value="Change" style="background-color: #ff7013; color: white; width: 100px;"
                                class="border-0 rounded-2 fw-bold mt-3"> -->
                                <button style="background-color: #ff7013; color: white; width: 100px;"
                                class="border-0 rounded-2 fw-bold  p-3">Change</button>
                            </div>
                          </form>
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer">
                          <button type="button" class="btn " style="background-color: #ff7013;" data-bs-dismiss="modal">Close</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </td>
              </tr>


              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">Language</label>
                  <input type="text" class="form-control border-0" v-model="tours.language">
                </td>

                <td class="d-flex justify-content-end">
                  <button class="change btn rounded-1 ps-4 pe-4 p-2 mt-4" type="button" data-bs-toggle="modal"
                    data-bs-target="#myModal1_7">
                    <i class="fa-regular fa-pen-to-square"></i>
                    Change
                  </button>
                  <!-- The Modal -->
                  <div class="modal" id="myModal1_7">
                    <div class="modal-dialog modal-lg"  style="width:600px">
                      <div class="modal-content" style="width:600px">

                        <!-- Modal Header -->
                        <div class="modal-header">
                          <h4 class="modal-title">Edit Language</h4>
                          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body mt-3" style="margin-left:-40px">
                          <form action="">
                            <input type="text" name="" id="" placeholder="Enter New Name"
                              class="form-control small fw-lighter">
                            <div class="d-flex justify-content-center">
                              
                              <!-- <input type="submit" value="Change" style="background-color: #ff7013; color: white; width: 100px;"
                                class="border-0 rounded-2 fw-bold mt-3"> -->
                                <button style="background-color: #ff7013; color: white; width: 100px;"
                                class="border-0 rounded-2 fw-bold  p-3">Change</button>
                            </div>
                          </form>
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer">
                          <button type="button" class="btn " style="background-color: #ff7013;" data-bs-dismiss="modal">Close</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </td>

              </tr>
              <button onclick="updater"  style="background-color: #ff7013; color: white; width: 100px; padding:15px ; margin-left:300px;border-radius:15px">update</button>


            </table>
          </div>

          <!-- end info_div -->




          <!-- tour_div -->
          <div class="tours container-fluid mb-4" id="tour_div">

            <!-- <a href="#" class="text-decoration-none">    -->
              <div class="row mb-4">
                <div class="col">
                  <h1 class="mt-5 mb-4 fw-bolder">Tours</h1>
                </div>
                <div class="col">
                  <button style="float: right; background-color: #ff7013;" class="btn text-white fw-bolder ps-4 pe-4 mt-5 p-3 rounded-5">Customize Tour</button>
                </div>

              </div>
            

            <div class="row mb-4">
              <!-- <div class="col-md-12 col-lg-6 mb-4">
                <a href="pyramids.html" class="text-decoration-none">
                  <div class="card rounded-4 overflow-hidden">
                    <div class="card-header bg-transparent p-0">

                      <img src="frontend/imgs/2ab37ca6249a1ff1defb3b3889df1069.png" alt="trip" class="card-img-top tour-img">
                      <div class="tour-img-over d-flex justify-content-end ">


                        <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"
                          style=" background-color: rgba(0, 0, 0,.3);"></i>


                      </div>
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                          <span>Pyramids -Egypt</span>
                          <span><i class="fas fa-calendar date_ico"></i></span>
                        </div>

                        <h4>Riding Camels , See Fireworks at night</h4>
                        <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
                      </div>
                    </div>
                  </div>
                </a>


              </div> -->

              <div class="col-md-12 col-lg-6 top-trip">
                <div class="card rounded-4 overflow-hidden card-trip mb-4">
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
          
                  <h4>Riding Camels , See Fireworks at night</h4>
                  <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
              </div>
              
            </div>
            
          </div>
              <!--  -->

              <div class="col-md-12 col-lg-6 top-trip">
                <div class="card rounded-4 overflow-hidden card-trip mb-4">
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
          
                  <h4>Riding Camels , See Fireworks at night</h4>
                  <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
              </div>
              
            </div>
            
          </div>
              <!--  -->
              <div class="col-md-12 col-lg-6 top-trip">
                <div class="card rounded-4 overflow-hidden card-trip mb-4">
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
          
                  <h4>Riding Camels , See Fireworks at night</h4>
                  <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
              </div>
              
            </div>
            
          </div>

              <!--  -->

              <div class="col-md-12 col-lg-6 top-trip">
                <div class="card rounded-4 overflow-hidden card-trip mb-4">
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
          
                  <h4>Riding Camels , See Fireworks at night</h4>
                  <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
              </div>
              
            </div>
            
          </div>
            </div>

            <!-- end row tour -->
          </div>
          <!-- tour_div -->




          <!-- review_div -->

          <div class="container-fluid" id="review_div">
            <!-- <button style="float: right;margin-top: -30px; background-color: #ff7013;" class="btn text-white fw-bolder ps-4 pe-4 p-3 rounded-5" data-bs-toggle="modal" data-bs-target="#myModal-guide">Add Review</button> -->

 <!-- The Modal -->
 <div class="modal" id="myModal-guide">
  <div class="modal-dialog modal-lg" style="width:700px">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header border-0 ">
        <div class="modal-title p-4" style="margin-left: 34%;">
          <i class="fa fa-star s"></i>
          <i class="fa fa-star s"></i>
          <i class="fa fa-star s"></i>
          <i class="fa fa-star s"></i>
          <i class="fa fa-star s"></i>
         
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body me-4">
        <form action="">
          <label class="form-label ms-3">Reviews</label>
          <input type="text"  class="form-control small fw-lighter p-4 border-1 border-dark ms-3 me-4">
          <div class="d-flex justify-content-center">
          <button style="background-color:#ff7013; color: white;padding: 10px 200px; font-size: 20px;" class=" border-0 rounded-5 fw-bold mt-3">Send</button>
        </div>
        </form>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
            <h2>Review</h2>
            
            <div class="row">

              <div class="col-lg-6 col-md-12">
                <div class="p-3 pb-1 border rounded-3">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In enim sapiente quod nam animi adipisci non .</p>
                  <p class="ps-3">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </p>
                  <p>
                    <h5 class="ps-3">Kareem Ahmed</h5>
                    <span class="ps-3">Engineer</span>
                  </p>

                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="p-3 pb-1 border rounded-3">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In enim sapiente quod nam animi adipisci non .</p>
                  <p class="ps-3">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </p>
                  <p>
                    <h5 class="ps-3">Kareem Ahmed</h5>
                    <span class="ps-3">Engineer</span>
                  </p>

                </div>
              </div>


              <div class="col-lg-6 col-md-12 mt-3">
                <div class="p-3 pb-1 border rounded-3">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In enim sapiente quod nam animi adipisci non .</p>
                  <p class="ps-3">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </p>
                  <p>
                    <h5 class="ps-3">Kareem Ahmed</h5>
                    <span class="ps-3">Engineer</span>
                  </p>

                </div>
              </div>


              <div class="col-lg-6 col-md-12 mt-3">
                <div class="p-3 pb-1 border rounded-3">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In enim sapiente quod nam animi adipisci non .</p>
                  <p class="ps-3">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </p>
                  <p>
                    <h5 class="ps-3">Kareem Ahmed</h5>
                    <span class="ps-3">Engineer</span>
                  </p>

                </div>
              </div>

                
              </div>

            </div>
            <!-- end review_div -->



  <!-- booking_div -->
  <div class="container-fluid" id="booking_div">
    <div class="tabss d-flex justify-content-between">
    <h1 class="mb-4">Bookings</h1>
    <select name="" id="" class="border rounded-4">
      <option value="" class="disabled ">Upcoming</option>
      <option value="">two</option>
      <option value="">two</option>
    </select>
  </div>

    <!-- tabs -->
    <div class="tabs">
      <div class="tab-buttons">
        <button class="tab-button active-tab-button p-3" style="width: 400px;border-bottom-color: #ff7013;"
        @click="toggleTab(0)">TOURS</button>
        <button class="tab-button p-3" @click="toggleTab(1)" style="width: 400px">Customize Tour</button>
        <!-- <button class="tab-button" onclick="toggleTab(2)">Tab 3</button> -->
      </div>
      <!-- tab1 -->
      <div class="tab mt-3 p-0 row11" id="tab1">
        <!-- <h2>Tours</h2>
      <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolor sapiente, nesciunt atque, totam quasi pariatur perspiciatis exercitationem nostrum nihil harum saepe. Consequuntur eaque corrupti adipisci porro nesciunt sint quos.</p> -->

      <div class="card rounded-4">
        <div class="card-body p-3">
          <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-2 p-0 ps-2 firstt">
              <img src="frontend/imgs/alex.jpg" class="img-fluid rounded-3" alt="">
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4  p-0 ps-2 pt-1 secondd">
              <p>Setting on Boat spreading her arms</p>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 p-0  thirdd">
              <!-- <img src="frontend/icons/calendar__.svg" alt=""> -->
                 <!-- inner -->
                 <div class="row">
                  <div class="col-1  pt-2">
                     <img src="frontend/icons/calendar__.svg" alt="">
                     <br><br>
                     <img src="frontend/icons/timmer.svg" alt="">
                  </div>

                  <div class="col">
                      <span class="date_span">Date</span><br>
                      <span class="fw-bolder">08-12-22</span> 
                      <br>
                      <span class="time_span">Tour Time</span><br>
                      <span class="fw-bolder">12:00 PM</span>

                      
                  </div>

                 </div>

            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 p-0  fourthh">
              <div class="row">
                <div class="col-1 pt-2">
                   <img src="frontend/icons/location.svg" width="25px" alt="">
                   <br><br>
                   <img src="frontend/icons/airline-seat-recline.svg" alt="">
                </div>

                <div class="col ps-3 pe-0">
                    <span class="date_span">Location</span><br>
                    <span class="fw-bolder">Cairo</span> 
                    <br>
                    <span class="time_span">Seat no</span><br>
                    <span class="fw-bolder">30</span>

                    
                </div>

               </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2  fifthh fw-bold ps-0 pt-4">
              <!-- <i class="fa-solid fa-download rounded-4 "
              style="padding: 10px;border:solid #ff7013; color: #ff7013;"></i> -->
              <a href="#" class="rounded-4" style="border:solid #ff7013; color: white; background-color: #ff7013; font-size: 14px;padding: 5px;text-decoration: none; " >Completed</a>
            </div>
          </div>

        </div>
      </div>

      <!-- card2 -->
      <div class="card mt-4 rounded-4">
        <div class="card-body p-3">
          <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-2 p-0 ps-2 firstt">
              <img src="frontend/imgs/alex.jpg" class="img-fluid rounded-3" alt="">
            </div>
            <div class="col-lg-4 col-md-5 col-sm-4  p-0 ps-2 pt-1 secondd">
              <p>Setting on Boat spreading her arms</p>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 p-0  thirdd">
              <!-- <img src="frontend/icons/calendar__.svg" alt=""> -->
                 <!-- inner -->
                 <div class="row">
                  <div class="col-1  pt-2">
                     <img src="frontend/icons/calendar__.svg" alt="">
                     <br><br>
                     <img src="frontend/icons/timmer.svg" alt="">
                  </div>

                  <div class="col  pe-0">
                      <span class="date_span">Date</span><br>
                      <span class="fw-bolder">08-12-22</span> 
                      <br>
                      <span class="time_span">Tour Time</span><br>
                      <span class="fw-bolder">12:00 PM</span>

                      
                  </div>

                 </div>

            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 p-0  fourthh">
              <div class="row">
                <div class="col-1 pt-2">
                   <img src="frontend/icons/location.svg" width="25px" alt="">
                   <br><br>
                   <img src="frontend/icons/airline-seat-recline.svg" alt="">
                </div>

                <div class="col ps-3 pe-0">
                    <span class="date_span">Location</span><br>
                    <span class="fw-bolder">Cairo</span> 
                    <br>
                    <span class="time_span">Seat no</span><br>
                    <span class="fw-bolder">30</span>

                    
                </div>

               </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2  fifthh fw-bold ps-0 pt-4">
              <!-- <i class="fa-solid fa-download rounded-4 "
              style="padding: 10px;border:solid #ff7013; color: #ff7013;"></i> -->
              <a href="#" class="rounded-4" style="border:solid #ff7013; color: white; background-color: #ff7013; font-size: 14px;padding: 5px; text-decoration: none; " >Five seats  </a>
            </div>
          </div>

        </div>
      </div>

      


      </div>
      <!-- tab2 -->
      <div class="tab mt-3 p-0 row11" id="tab2">
        <!-- <h2>Tours</h2>
      <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolor sapiente, nesciunt atque, totam quasi pariatur perspiciatis exercitationem nostrum nihil harum saepe. Consequuntur eaque corrupti adipisci porro nesciunt sint quos.</p> -->

      <div class="card rounded-4">
        <div class="card-body p-3">
          <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-2 p-0 ps-2 firstt">
              <img src="frontend/imgs/alex.jpg" class="img-fluid rounded-3" alt="">
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4  p-0 ps-2 pt-1 secondd">
              <p>Setting on Boat spreading her arms</p>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 p-0  thirdd">
              <!-- <img src="frontend/icons/calendar__.svg" alt=""> -->
                 <!-- inner -->
                 <div class="row">
                  <div class="col-1  pt-2">
                     <img src="frontend/icons/calendar__.svg" alt="">
                     <br><br>
                     <img src="frontend/icons/timmer.svg" alt="">
                  </div>

                  <div class="col">
                      <span class="date_span">Date</span><br>
                      <span class="fw-bolder">08-12-22</span> 
                      <br>
                      <span class="time_span">Tour Time</span><br>
                      <span class="fw-bolder">12:00 PM</span>

                      
                  </div>

                 </div>

            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 p-0  fourthh">
              <div class="row">
                <div class="col-1 pt-2">
                   <img src="frontend/icons/location.svg" width="25px" alt="">
                   <br><br>
                   <img src="frontend/icons/airline-seat-recline.svg" alt="">
                </div>

                <div class="col ps-3 pe-0">
                    <span class="date_span">Location</span><br>
                    <span class="fw-bolder">Cairo</span> 
                    <br>
                    <span class="time_span">Seat no</span><br>
                    <span class="fw-bolder">30</span>

                    
                </div>

               </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2  fifthh fw-bold ps-0 pt-4">
              <!-- <i class="fa-solid fa-download rounded-4 "
              style="padding: 10px;border:solid #ff7013; color: #ff7013;"></i> -->
              <a href="#" class="rounded-5" style="border:solid #ff7013; color: white; background-color: #ff7013; font-size: 14px;padding: 10px;text-decoration: none;" @click="openModal('myModal_a')">
      <i class="fa-solid fa-xmark"></i>
    </a>

    <!-- modal -->
    <div class="modal" id="myModal_a">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body d-flex justify-content-center align-items-center p-5" style="font-size: 25px; text-align: center;">
            Are you sure you want to reject this tour?
          </div>

          <div class="d-flex justify-content-center align-content-center mb-5">
            <a href="#" class="rounded-4 me-3 border-1" style="border:solid #ff7013; color:#ff7013; background-color: white; font-size: 20px;padding: 5px 20px;text-decoration: none;" @click="closeModal('myModal_a')">
              Cancel
            </a>

            <a href="#" class="rounded-4 border-1" style="border:solid #ff7013; color: white; background-color: #ff7013; font-size: 20px;padding: 5px 20px;text-decoration: none;" @click="openModal('myModal_reject')">
              Reject
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal_a -->

    <!-- modal -->
    <div class="modal" id="myModal_reject">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="d-flex justify-content-center">
            <img src="frontend/imgs/cust_book.PNG" alt="" class="img-fluid" width="50%">
          </div>
          <div class="modal-body d-flex justify-content-center align-items-center p-5" style="font-size: 25px; text-align: center;">
            You Rejected Tour Successfully
          </div>

          <div class="d-flex justify-content-center align-content-center mb-5">
            <a href="#" class="rounded-4 me-3 border-1" style="border:solid #ff7013; color:#ff7013; background-color: white; font-size: 20px;padding: 5px 20px;text-decoration: none;" @click="closeModal('myModal_reject')">
              Cancel
            </a>

            <a class="rounded-4 border-1" style="border:solid #ff7013; color: white; background-color: #ff7013; font-size: 20px;padding: 5px 20px;text-decoration: none; cursor:pointer">
              <routerLink class="dropdown-item" :to="{name:'home'}">
              Back to My Profile
              </routerLink>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal_reject -->

<!-- <script>

  

  // document.getElementById("openModal2Btn").addEventListener("click", function() {
  //   $('#myModal_a').modal('hide'); // Hide the first modal
  //   $('#myModal_reject').modal('show'); // Show the second modal
  // });
</script> -->



              &nbsp;
              <a href="#" class="rounded-5" style="border:solid #ff7013; color: #ff7013; background-color: white; font-size: 14px;padding: 10px;text-decoration: none; "   @click="openModal('myModal_a2')"><i class="fa-solid  fa-check"></i></a>


<!-- modal -->

<div class="modal" id="myModal_a2">
  <div class="modal-dialog modal-md">
    <div class="modal-content">

      

      <!-- Modal body -->
      <div class="modal-body d-flex justify-content-center align-items-center p-5" style="font-size: 25px; text-align: center;">
       Are you sure you want to Accept this tour?
      </div>

      <div class="d-flex justify-content-center align-content-center mb-5">
        <a href="#" class="rounded-4 me-3 border-1" style="border:solid #ff7013; color:#ff7013; background-color: white; font-size: 20px;padding: 5px 20px;text-decoration: none;"
         @click="closeModal('myModal_a2')">Cancel</a>

        
        
        
        <a href="#" class="rounded-4 border-1" style="border:solid #ff7013; color: white; background-color: #ff7013; font-size: 20px;padding: 5px 20px;text-decoration: none; " >Accept</a>


      </div>

     

    </div>
  </div>
</div>





              
            </div>
          </div>

        </div>
      </div>

      <!-- card2 -->
      <div class="card mt-4 rounded-4">
        <div class="card-body p-3">
          <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-2 p-0 ps-2 firstt">
              <img src="frontend/imgs/alex.jpg" class="img-fluid rounded-3" alt="">
            </div>
            <div class="col-lg-4 col-md-5 col-sm-4  p-0 ps-2 pt-1 secondd">
              <p>Setting on Boat spreading her arms</p>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 p-0  thirdd">
              <!-- <img src="frontend/icons/calendar__.svg" alt=""> -->
                 <!-- inner -->
                 <div class="row">
                  <div class="col-1  pt-2">
                     <img src="frontend/icons/calendar__.svg" alt="">
                     <br><br>
                     <img src="frontend/icons/timmer.svg" alt="">
                  </div>

                  <div class="col  pe-0">
                      <span class="date_span">Date</span><br>
                      <span class="fw-bolder">08-12-22</span> 
                      <br>
                      <span class="time_span">Tour Time</span><br>
                      <span class="fw-bolder">12:00 PM</span>

                      
                  </div>

                 </div>

            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 p-0  fourthh">
              <div class="row">
                <div class="col-1 pt-2">
                   <img src="frontend/icons/location.svg" width="25px" alt="">
                   <br><br>
                   <img src="frontend/icons/airline-seat-recline.svg" alt="">
                </div>

                <div class="col ps-3 pe-0">
                    <span class="date_span">Location</span><br>
                    <span class="fw-bolder">Cairo</span> 
                    <br>
                    <span class="time_span">Seat no</span><br>
                    <span class="fw-bolder">30</span>

                    
                </div>

               </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2  fifthh fw-bold ps-0 pt-4">
              <!-- <i class="fa-solid fa-download rounded-4 "
              style="padding: 10px;border:solid #ff7013; color: #ff7013;"></i> -->
              <a href="#" class="rounded-5" style="border:solid #ff7013; color: white; background-color: #ff7013; font-size: 14px;padding: 10px;text-decoration: none; " data-bs-toggle="modal" data-bs-target="#myModal_a" ><i class="fa-solid fa-xmark"></i></a>

<!-- modal -->

              <div class="modal" id="myModal_a">
                <div class="modal-dialog modal-md">
                  <div class="modal-content">
              
                    
              
                    <!-- Modal body -->
                    <div class="modal-body d-flex justify-content-center align-items-center p-5" style="font-size: 25px; text-align: center;">
                     Are you sure you want to reject this tour?
                    </div>

                    <div class="d-flex justify-content-center align-content-center mb-5">
                      <a href="#" class="rounded-4 me-3 border-1" style="border:solid #ff7013; color:#ff7013; background-color: white; font-size: 20px;padding: 5px 20px;text-decoration: none; " data-bs-dismiss="modal" >Cancel</a>
                      
                      <a href="#" class="rounded-4 border-1" style="border:solid #ff7013; color: white; background-color: #ff7013; font-size: 20px;padding: 5px 20px;text-decoration: none; " data-bs-toggle="modal" data-bs-target="#myModal_reject">Reject</a>


                      <!-- modal -->

              <div class="modal" id="myModal_reject">
                <div class="modal-dialog modal-md">
                  <div class="modal-content">
              
                    
              
                    <!-- Modal body -->
                    <div class="d-flex  justify-content-center">
                      <img src="frontend/imgs/cust_book.PNG" alt="">
                    </div>
                    <div class="modal-body d-flex justify-content-center align-items-center p-5" style="font-size: 25px; text-align: center;">
                    You Rejected Tour Successfully   
                   </div>

                    <div class="d-flex justify-content-center align-content-center mb-5">
                      <a href="#" class="rounded-4 me-3 border-1" style="border:solid #ff7013; color:#ff7013; background-color: white; font-size: 20px;padding: 5px 20px;text-decoration: none; " data-bs-dismiss="modal" >Cancel</a>
                      
                      <a href="#" class="rounded-4 border-1" style="border:solid #ff7013; color: white; background-color: #ff7013; font-size: 20px;padding: 5px 20px;text-decoration: none; " >Reject</a>


                    </div>
              
                   
              
                  </div>
                </div>
              </div>


                    </div>
              
                   
              
                  </div>
                </div>
              </div>




              &nbsp;
              <a href="#" class="rounded-5" style="border:solid #ff7013; color: #ff7013; background-color: white; font-size: 14px;padding: 10px;text-decoration: none; " data-bs-toggle="modal" data-bs-target="#myModal_a2"  ><i class="fa-solid  fa-check"></i></a>


<!-- modal -->

<div class="modal" id="myModal_a2">
  <div class="modal-dialog modal-md">
    <div class="modal-content">

      

      <!-- Modal body -->
      <div class="modal-body d-flex justify-content-center align-items-center p-5" style="font-size: 25px; text-align: center;">
       Are you sure you want to Accept this tour?
      </div>

      <div class="d-flex justify-content-center align-content-center mb-5">
        <a href="#" class="rounded-4 me-3 border-1" style="border:solid #ff7013; color:#ff7013; background-color: white; font-size: 20px;padding: 5px 20px;text-decoration: none; " data-bs-dismiss="modal" >Cancel</a>
        
        <a href="#" class="rounded-4 border-1" style="border:solid #ff7013; color: white; background-color: #ff7013; font-size: 20px;padding: 5px 20px;text-decoration: none; " >Accept</a>


      </div>

     

    </div>
  </div>
</div>





              
            </div>
          </div>

        </div>
      </div>

      


      </div>

    </div>
<!-- 
    <script>
      function toggleTab(tabIndex) {
        let tabs = document.getElementsByClassName("tab");
        for (let i = 0; i < tabs.length; i++) {
          tabs[i].style.display = "none";
        }
        tabs[tabIndex].style.display = "block";

        // Remove the 'active-tab-button' class from all buttons
        let buttons = document.getElementsByClassName("tab-button");
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove("active-tab-button");
        }

        // Add the 'active-tab-button' class to the clicked button
        buttons[tabIndex].classList.add("active-tab-button");
      }

      toggleTab(0);

    </script> -->

  </div>


  <!-- end booking_div -->






  <!-- finance_div -->
  

<div class="container-fluid" id="finance_div">
  <div class="d-flex justify-content-between">
  <h1 class="mb-4">Finance</h1>
  <a href="#" class="btn rounded-5" style="padding: 10px 20px; max-height: 40px;font-size: 14px; background-color: #ff7013; color: white;font-weight: bold;">Withdraw</a>
</div>

  <!-- tabs -->
  <div class="tabs">
    <div class="tab-buttons">
      <button class="tab-button active-tab-button p-3" style="width: 400px;border-bottom-color: #ff7013;"
      @click="toggleTab_(0)">PROFIT (350 EGP)</button>
      <button class="tab-button p-3" @click="toggleTab_(1)" style="width: 400px">PAYMENT METHODS</button>
      <!-- <button class="tab-button" onclick="toggleTab(2)">Tab 3</button> -->
    </div>
    <!-- tab1 -->
    <div class="tab_ mt-3 p-0 row11" id="tab3">
    

    <div class="card rounded-4">
      <div class="card-body p-3">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-2 p-0 ps-2 firstt">
            <img src="frontend/imgs/alex.jpg" class="img-fluid rounded-3" alt="">
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4  p-0 ps-2 pt-1 secondd">
            <p>Setting on Boat spreading her arms</p>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 p-0  thirdd">
            <!-- <img src="frontend/icons/calendar__.svg" alt=""> -->
               <!-- inner -->
               <div class="row">
                <div class="col-1  pt-2">
                   <img src="frontend/icons/calendar__.svg" alt="">
                   <br><br>
                   <img src="frontend/icons/timmer.svg" alt="">
                </div>

                <div class="col">
                    <span class="date_span">Date</span><br>
                    <span class="fw-bolder">08-12-22</span> 
                    <br>
                    <span class="time_span">Tour Time</span><br>
                    <span class="fw-bolder">12:00 PM</span>

                    
                </div>

               </div>

          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 p-0  fourthh">
            <div class="row">
              <div class="col-1 pt-2">
                 <img src="frontend/icons/location.svg" width="25px" alt="">
                 <br><br>
                 <img src="frontend/icons/airline-seat-recline.svg" alt="">
              </div>

              <div class="col ps-3 pe-0">
                  <span class="date_span">Location</span><br>
                  <span class="fw-bolder">Cairo</span> 
                  <br>
                  <span class="time_span">Seat no</span><br>
                  <span class="fw-bolder">30</span>

                  
              </div>

             </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 pt-4 fifthh">
            <a href="#" class="btn rounded-5" style="padding:5px;font-size: 9px; background-color: #ff7013; color: white;font-weight: bold;">New profit 50 EGP</a>
          </div>
        </div>

      </div>
    </div>

    <!-- card2 -->
    <div class="card mt-4 rounded-4">
      <div class="card-body p-3">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-2 p-0 ps-2 firstt">
            <img src="frontend/imgs/alex.jpg" class="img-fluid rounded-3" alt="">
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4  p-0 ps-2 pt-1 secondd">
            <p>Setting on Boat spreading her arms</p>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 p-0  thirdd">
            <!-- <img src="frontend/icons/calendar__.svg" alt=""> -->
               <!-- inner -->
               <div class="row">
                <div class="col-1  pt-2">
                   <img src="frontend/icons/calendar__.svg" alt="">
                   <br><br>
                   <img src="frontend/icons/timmer.svg" alt="">
                </div>

                <div class="col  pe-0">
                    <span class="date_span">Date</span><br>
                    <span class="fw-bolder">08-12-22</span> 
                    <br>
                    <span class="time_span">Tour Time</span><br>
                    <span class="fw-bolder">12:00 PM</span>

                    
                </div>

               </div>

          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 p-0  fourthh">
            <div class="row">
              <div class="col-1 pt-2">
                 <img src="frontend/icons/location.svg" width="25px" alt="">
                 <br><br>
                 <img src="frontend/icons/airline-seat-recline.svg" alt="">
              </div>

              <div class="col ps-3 pe-0">
                  <span class="date_span">Location</span><br>
                  <span class="fw-bolder">Cairo</span> 
                  <br>
                  <span class="time_span">Seat no</span><br>
                  <span class="fw-bolder">30</span>

                  
              </div>

             </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 pt-4 fifthh">
            <a href="#" class="btn rounded-5" style="padding:5px;font-size: 9px; background-color: #ff7013; color: white;font-weight: bold;">New profit 50 EGP</a>
          </div>
        </div>

      </div>
    </div>

    


    </div>
    <!-- tab2 -->
    <div class="tab_ mt-3 p-0" id="tab4">
      <!-- <h2>Customize Tours</h2> -->
      

                <!-- payment into tab2 -> tab4-->
                  <!-- payment_div -->

          <div class="payment" id="">
            <h2>Payment methods</h2>
            <div class="container-fluid">
              <div class="row ">
                <div class="col-lg-6 col-md-12  p-0">
                  <img src="frontend/imgs/visa.PNG" alt="" class="rounded-3" width="100%">
                </div>
                <div class="col-lg-6 col-md-12 ps-3 p-0">
                  <a href="#" class="text-decoration-none" data-bs-toggle="modal"
                    data-bs-target="#myModal4"><!--open modal-->
                    <div class="add_pay d-flex justify-content-center align-items-center">

                      <i class="fa-solid fa-circle-plus"></i>
                    </div>
                  </a>
                </div>
                <!-- The Modal -->
                <div class="modal" id="myModal4">
                  <div class="modal-dialog modal-xl container">
                    <div class="modal-content p-5">

                      <!-- Modal Header -->
                      <div class="modal-header">
                        <h2 class="modal-title">ِAdd New Card</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                      </div>

                      <!-- Modal body -->
                      <div class="modal-body container ps-5 pe-5">
                    <fieldset class="container">
                        <form action="" class="form-group p-4">
                          <label for="" class="form-label ms-2">Card Number*</label>
                          <!-- <input type="text" class="form-control p-4 border-secondary rounded-4 mb-2" required> -->
                          <input type="text" class="form-control p-3 border-secondary rounded-4 mb-2 " required>



                          <div class="row">

                            <div class="col-lg-5">
                              <label for="" class="form-label ms-2">Expiry Date*</label>
                              <div class="form-control ps-4 p-2 border-secondary rounded-4 mb-2">
                                <input type="text" class="border-0 mb-2 exp" required
                                  style="width: 30px; font-size: 17px;" maxlength="2">
                                <span>/</span>
                                <input type="text" class="border-0 mb-2 exp" required
                                  style="width: 30px; font-size: 17px" maxlength="2">



                              </div>

                            </div>
                            <div class="col-lg-1"></div>

                            <div class="col-lg-5">
                              <label for="" class="form-label ms-2">CVV*</label>
                              <input type="text" class="form-control p-3 border-secondary rounded-4 mb-2 " required>

                            </div>
                            <!-- end col -->
                          </div>
                          <!-- end row -->




                          <label for="" class="form-label ms-2">Name On Card*</label>
                          <!-- <input type="text" class="form-control p-4 border-secondary rounded-4 mb-2" required> -->
                          <input type="text" class="form-control p-3 border-secondary rounded-4 mb-2 " required>



                          <label for="" class="form-label ms-2">Country Or Region</label>
                          <select class="form-control form-select p-4 border-secondary rounded-4 mb-2" required>
                            <option>Egypt</option>
                            <option>Kuwait</option>
                            <option>Dubi</option>
                          </select>


                          <div class="row mt-3">
                            <div class="col-lg-12">

                              <input type="checkbox" class="border-2 ms-3 form-check-input check">
                              <label for="">Securly save my information for 1-click checkout</label>

                            </div>

                          </div>

                          <!--  -->
                          <div class="row mt-3 ps-3 pe-3">
                            <button class="btn rounded-5 fw-bolder add_btn_ p-3" style="font-size: 20px;">Add
                              Card</button>
                          </div>


                          <!--  -->
                          <div class="row text-center ps-4 pe-4 mt-3">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, corrupti! Quos a animi
                              culpa numquam porro magni voluptatem nemo repellendus eveniet</p>

                          </div>

                        </form>
                    </fieldset>

                      </div>

                      <!-- Modal footer -->
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                      </div>

                    </div>
                  </div>
                </div>

                <!-- end modal -->




              </div>

            </div>
          </div>

          <!-- end payment_div -->


    </div>
    <!-- end tab4 -->

  </div>
  <!-- end tabs of second tab-->

  <!-- <script>
    function toggleTab_(tabIndex) {
      let tabs = document.getElementsByClassName("tab_");
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
      }
      tabs[tabIndex].style.display = "block";

      // Remove the 'active-tab-button' class from all buttons
      let buttons = document.getElementsByClassName("tab-button");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-tab-button");
      }

      // Add the 'active-tab-button' class to the clicked button
      buttons[tabIndex].classList.add("active-tab-button");
    }

    toggleTab(0);

  </script> -->

</div>


<!-- end history_div -->

  <!-- end finance_div -->







          </div>

          <!-- end col2 -->









        </div>
        <!-- end col2 -->

      </div>
      <!-- end row -->
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
 
    tours:{},
    approvedtours:{}
    };
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },

  mounted() {
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
    axios.get(`/api/v1/users/getMe`).then((res) => {
      this.tours=res.data.data
console.log(res)
}).catch((el)=>{

console.log(el)


})
    window.addEventListener('resize', this.handleResize);
    


    this.toggleTab(0);
    this.toggleTab_(0);
    
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
    script.onload = () => {
      document.getElementById('btn-inform').addEventListener('click',function(){
         /* eslint-disable no-undef */

$('#info_div').show();
$('#review_div').hide();
$('#tour_div').hide();
$('#booking_div').hide();
$('#finance_div').hide();
});

document.getElementById('btn-tour').addEventListener('click',function(){
    $('#info_div').hide();
    $('#review_div').hide();
    $('#tour_div').show();
    $('#booking_div').hide();
    $('#finance_div').hide();

});

document.getElementById('btn-review').addEventListener('click',function(){
    $('#info_div').hide();
    $('#tour_div').hide();
    $('#review_div').show();
    $('#booking_div').hide();
    $('#finance_div').hide();

});

document.getElementById('btn-booking').addEventListener('click',function(){
    $('#info_div').hide();
    $('#tour_div').hide();
    $('#review_div').hide();
    $('#booking_div').show();
    $('#finance_div').hide();

});

document.getElementById('btn-finance').addEventListener('click',function(){
    $('#info_div').hide();
    $('#tour_div').hide();
    $('#review_div').hide();
    $('#booking_div').hide();
    $('#finance_div').show();

});




    };
    document.head.appendChild(script);
  },
  methods: {
    updater(){
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
    axios.put(`/api/v1/users/updateMe`,this.tours).then((res) => {
      location.reload()
console.log(res)
}).catch((el)=>{

console.log(el)


})
  },

    toggleTab(tabIndex) {
      let tabs = document.getElementsByClassName("tab");
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
      }
      tabs[tabIndex].style.display = "block";

      let buttons = document.getElementsByClassName("tab-button");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-tab-button");
      }
      buttons[tabIndex].classList.add("active-tab-button");
    },


    toggleTab_(tabIndex) {
      let tabs = document.getElementsByClassName("tab_");
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
      }
      tabs[tabIndex].style.display = "block";

      // Remove the 'active-tab-button' class from all buttons
      let buttons = document.getElementsByClassName("tab-button");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-tab-button");
      }

      // Add the 'active-tab-button' class to the clicked button
      buttons[tabIndex].classList.add("active-tab-button");
    }
    ,
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


   

    

};

</script>

<style>

@import '../../../public/frontend/css/style.css';
@import '../../../public/frontend/css/tour-profile.css';
@import '../../../public/frontend/css/tour.css';
@import '../../../public/frontend/css/tour _guide.css';
.s{
      font-size: 30px;
     
    }

    

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
  max-width: 500px;
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


</style>