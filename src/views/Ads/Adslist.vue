<template>

    <div ref="wholepage" class="ads">
         <Navbarmap   style="z-index:1"/>

         <div  style="z-index:1" ref="filter" class="filters z-10 h-16 grid  grid-cols-1 lg:grid-cols-2 xl:flex">

            <!-- <div class="search mt-3 ml-4 xl:mr-4">
                <svg  ="display: none">
                <symbol id="magnify" viewBox="0 0 18 18" height="100%" width="100%">
                    <path d="M12.5 11h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2C13 2.9 10.1 0          6.5 0S0 2.9 0 6.5 2.9 13 6.5 13c1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5          1.5-1.5-5-5zm-6 0C4 11 2 9 2 6.5S4 2 6.5 2 11 4 11 6.5 9 11 6.5            11z" fill="#fff" fill-rule="evenodd"/>
                </symbol>
                </svg>

                <div class="search-bar">
                <input  v-model="AdresseModal" type="text" class="input" placeholder="Adresse de votre bien">
                <span class="highlight"></span>
                <div class="search-btn">
                <svg class="icon icon-18">
                <use xlink:href="#magnify"></use>
                </svg>
                </div>
                </div>
     
             </div> -->



      <!-- part || -->


          <div class="hidden lg:flex  xl:flex">

               <div @click="toggledropdown3" class="price mt-3 ml-4 grid col-span-2">
                    <div class="flex justify-center">
                    <div class="relative ">
                    <div  class="rect good relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                      <img id="pricefiltericon" src="../../assets/Pics/Adshome.svg" alt="euro icn">
                      <h3>{{typeofad}} {{typeofgood}} {{typeofoffre}}</h3>
                      <img id="sortingicn" src="../../assets/Pics/Adstrier.svg" alt="sorting icn">

                    </div>


                  
                        
                        </div>
                    </div>
            </div>
            



                        <div  v-if="dropdownOpen3"  id="filter3" class="ntrfilter  absolute top-3 left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                              <div class="ntrfilterheading pt-6 pl-6">
                                <h1>Quel est votre projet ? </h1>
                              </div>

                              <div class="switch-field pt-2 pl-6">
                                  <input @click="vente();TypeOfProject='Acheter';sendtypeofad('Acheter')" v-model="typeofad"  value="Acheter" id="Acheter"  type="radio"  name="TypeofadModal"/>
                                  <label for="Acheter">Acheter</label>
                                  
                                  <input @click="location();TypeOfProject='Location';sendtypeofad('Location')" v-model="typeofad"  value="Location" id="Location" type="radio"  name="TypeofadModal"  />
                                  <label for="Location">Location</label>
                                  
                                  <input @click="neuf();TypeOfProject='Neuf';sendtypeofad('Neuf')"  v-model="typeofad" value="Neuf" id="Neuf"   type="radio"  name="TypeofadModal"  />
                                  <label for="Neuf">Neuf</label>

                                  <input @click="colocation();TypeOfProject='Colocation';sendtypeofad('Colocation')"  v-model="typeofad"  value="Colocation" id="Colocation"   type="radio"  name="TypeofadModal" />
                                  <label for="Colocation">Colocation</label>
                                                                                              
                              </div>
                              
                              <div style="padding-top:0px" class="ntrfilterheading pl-6">
                                <h1 v-if="Acheter" class="pt-3">Que voulez-vous acheter ?</h1>
                                <h1 v-if="Location" class="pt-3">Que voulez-vous louer ?</h1>
                                <h1 v-if="Neuf" class="pt-3">Que voulez-vous acheter ?</h1>
                                <h1 v-if="Colocation" class="pt-3">Type d’offre</h1>
                              </div>

                              <div v-if="Neuf" class="optionsoffilters grid grid-cols-3 mb-4 pt-2 pl-5 flex">                                      
                                <input  type="radio" name="projet" v-model="typeofgood" value="Appartement"  class="pt-2 inp-cbx" id="Appartement" />
                                <label   class="cbx" for="Appartement"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Appartement</span></label>

                                <input type="radio" name="projet"  v-model="typeofgood" value="Maison"  class="inp-cbx pt-2" id="Maison" />
                                <label   class="cbx" for="Maison"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Maison</span></label>

                                     <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg>

                              </div>



                                <div v-if="Acheter  || Location" class="optionsoffilters grid mb-4 grid-cols-3 pt-2 pl-5 flex">                                      
                                <input  type="radio" name="projet" v-model="typeofgood" value="Appartement"  class="pt-2 inp-cbx" id="Appartement" />
                                <label   class="cbx" for="Appartement"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Appartement</span></label>

                                <input type="radio" name="projet"  v-model="typeofgood" value="Maison"  class="inp-cbx pt-2" id="Maison" />
                                <label   class="cbx" for="Maison"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Maison</span></label>

                                <input type="radio" name="projet"  v-model="typeofgood" value="Loft"  class="inp-cbx pt-2" id="Loft" />
                                <label    class="cbx" for="Loft"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Loft/Atelier</span></label>


                                <input type="radio" name="projet"  v-model="typeofgood" value="Terrain" class="inp-cbx pt-2" id="Terrain" />
                                <label  class="cbx" for="Terrain"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Terrain</span></label>
                                    
                                <input type="radio"  name="projet"  v-model="typeofgood" value="Parking" class="inp-cbx pt-2" id="Parking"  style="display: none"/>
                                <label  class="cbx" for="Parking"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Parking</span></label>

                                <input type="radio" name="projet"  v-model="typeofgood" value="Cave"   class="inp-cbx pt-2" id="Cave"  style="display: none"/>
                                <label  class="cbx" for="Cave"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Cave</span></label>


                                <input type="radio"  name="projet"  v-model="typeofgood" value="Box"   class="inp-cbx pt-2" id="Box"  style="display: none"/>
                                <label    class="cbx" for="Box"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Box</span></label>


                                <input type="radio" name="projet"  v-model="typeofgood" value="Bureau"  class="inp-cbx pt-2" id="Bureau"  style="display: none"/>
                                <label   class="cbx pt-2" for="Bureau"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Bureau</span></label>

                                <input   type="radio" name="projet"  v-model="typeofgood" value="Château"  class="inp-cbx pt-2" id="Château" style="display: none"/>
                                <label   class="cbx pt-2" for="Château"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Château</span></label>

                                
                                <input   type="radio"  name="projet"  v-model="typeofgood" value="Hôtel Particulier" class="inp-cbx pt-2" id="Hôtel Particulier"  style="display: none"/>
                                <label  class="cbx pt-2" for="Hôtel Particulier"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Hôtel Particulier</span></label>
                                
                                <input type="radio"  name="projet"  v-model="typeofgood" value="Immeuble & Batiment" class="inp-cbx pt-2" id="Immeuble & Batiment"  style="display: none"/>
                                <label  class="cbx pt-2" for="Immeuble & Batiment"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Immeuble & Batiment</span></label>

                                <input type="radio" name="projet"  v-model="typeofgood" value="Péniche"  class="inp-cbx pt-2" id="péniche"  style="display: none"/>
                                <label  class="cbx pt-2" for="péniche"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Péniche</span></label>

                                
                                <input  type="radio" name="projet"  v-model="typeofgood" value="Place de port" class="inp-cbx pt-2" id="place de port" style="display: none"/>
                                <label  class="cbx pt-2" for="place de port"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Place de port</span></label>


                                <input  type="radio" name="projet"  v-model="typeofgood" value="Fonds de commerce" class="inp-cbx pt-2" id="Fonds de commerce"  style="display: none"/>
                                <label  class="cbx pt-2" for="Fonds de commerce"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Fonds de commerce</span></label>


                                <input  type="radio" name="projet"   v-model="typeofgood" value="Local commerciale" class="inp-cbx pt-2" id="Local commerciale" style="display: none"/>
                                <label  class="cbx pt-2" for="Local commerciale"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Local commerciale</span></label>
                                <!--SVG Sprites-->
                                <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg>

                              </div>

                              <div v-if="clocation" class="optionsoffilters grid grid-cols-3 pt-2 pl-5 flex"> 

                                <input v-model="typeofoffre" value="Chambre à louer"   name="colocation" class="pt-2 inp-cbx" id="Chambre à louer" type="radio"/>
                                <label  class="cbx" for="Chambre à louer"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Chambre à louer</span></label>

                                <input  v-model="typeofoffre" value="coloc"   name="colocation" class="inp-cbx pt-2" id="coloc" type="radio"/>
                                <label    class="cbx" for="coloc"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Colocation</span></label>

                                <input  v-model="typeofoffre" value="Sous-location"  name="colocation"  class="inp-cbx pt-2" id="Sous-location" type="radio"/>
                                <label    class="cbx" for="Sous-location"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Sous-location</span></label>

                                <!--SVG Sprites-->
                                <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg>

                              </div>

                              <hr style="width:100%;margin:0px">

                              <div class="footerbtns flex  pt-2 pl-6">

                                <div @click="dropdownOpen3=!dropdownOpen3" class="cancelbtn">Annuler</div>

                                <div class="confirmbtn">Appliquer ( 40 annonces)</div>

                              </div>

              </div>

              

    
            


            <div @click="toggledropdown"  class="price mt-3 ml-4 grid col-span-1">


                    <div class="flex justify-center">
                    <div class="relative ">
                    <div  style="width:13rem;background-color:white" class="rect relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                      <img id="naturefiltericon" src="../../assets/Pics/adnature.svg" alt="euro icn">
                      <h3 id="natureannonceur">{{Natureofad}}</h3>
                      <img id="sortingicn" src="../../assets/Pics/Adstrier.svg" alt="sorting icn">


                    </div>
            
            </div>

            </div>


            </div>



                        <!-- <div v-if="dropdownOp"  class="fixed inset-0 h-full w-full z-10"></div> -->

                          <div  v-if="dropdownOp" id="filter1" class="ntrfilter  absolute top-3 left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                              <div class="ntrfilterheading pt-6 pl-6">
                                <h1>Nature de l'annonceur</h1>
                                <h5>veuillez choisir la nature de l'annonceur</h5>
                              </div>
                              <div class="ntffilterradio pt-4 pl-6 flex ">
                              
                              <div class="radio1">
                                <input v-model="NatureModal"  class="checkbox-tools" type="checkbox" value="Particulier"  name="Particulier" id="Particulier">
                                <label @click="Natureofads('Particulier')"  id="leftside" class="for-checkbox-tools" for="Particulier">Particulier</label>
                              </div>
                              
                              <div class="radio2">
                                <input  v-model="NatureModal"  class="checkbox-tools" type="checkbox" value="Professionnel" name="Professionnel" id="Professionnel">
                                <label  @click="Natureofads('Professionnel')" id="rightside" class="for-checkbox-tools" for="Professionnel">Professionnel</label>
                              </div>
                              
                              </div>


                              <hr style="width:100%;margin:0px;margin-top:14px">

                              <div class="footerbtns flex  pt-3 pl-6">

                                <div @click="dropdownOp=!dropdownOp" class="cancelbtn">Annuler</div>

                                <div class="confirmbtn">Appliquer ( 40 annonces)</div>

                              </div>

                          </div>
                        
                  <div @click="toggledropdown8" class="price mt-3 ml-4 grid col-span-1">
                 <!-- component -->
                      <div class="flex justify-center">
                      <div class="relative ">
                      <div  style="width:8.3rem" class="rect relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                        <img id="pricefiltericon" src="../../assets/Pics/adlocation.svg" alt="euro icn">
                        <h3 style="padding-left:27px">Marseille</h3>
                        <img id="sortingicn" src="../../assets/Pics/Adstrier.svg" alt="sorting icn">

                      </div>

                      </div>

              
                      </div>
                  </div>

                  
                          <div  v-if="dropdownOpen8"  id="filter8" class="ntrfilter  absolute top-3 left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                              <div class="ntrfilterheading pt-6 pl-6">
                                <h1>Rechercher par location</h1>
                                <h5>veuillez entrer votre location souhaité</h5>
                              </div>
                              <div class="ntffilterradio pt-3 pl-6">
                                   <!-- <vue-tags-input
                                      v-model="AdresseModal"
                                      :tags="tags"
                                      :autocomplete-items="filteredItems"
                                      :placeholder="placehold"
                                      @tags-changed="newTags => tags = newTags"
                                      v-on:focus="infosplus=true"
                                      v-on:blur="infosplus=false"

                                    />    -->

                                    <div class="tag-container">
                                      <input
                                        value=""
                                        class="input-form"
                                        type="text"
                                        ref="inpt"
                                        :placeholder="placehold"
                                        v-model="authorNameSearchString"
                                        @keyup.enter="add_tag"
                                        @keyup.delete="delete_last"
                                        @keydown="write"
                                        @keyup="write"
                                        @focus="inputstate=true"
                                        @mouseover="infosplus=true"
                                      >

                                        <!-- @blur="inputstate=false" --> 




                                    </div>
                                      <ul  ref="ullist" class="ullist">
                                        <li  class="itemcontain" v-for="photo in filteredPhotoFeed" v-bind:key="photo.id">
                                        <span class="item flex" @click="getTag(photo.item)">{{photo.item}}<h6 style="margin-left:auto;font-size:12px;color:#C8D0DA">Région</h6></span>
                                        </li>
                                        <li  class="itemcontain" v-for="depar in filtereddepartementFeed" v-bind:key="depar.id">
                                        <span class="item flex" @click="getTag(depar.item)">{{depar.item}}<h6 style="margin-left:auto;font-size:12px;color:#C8D0DA">Département</h6></span>
                                        </li>
                                        <li  class="itemcontain" v-for="ville in filterevilleFeed" v-bind:key="ville.id">
                                        <span class="item flex" @click="getTag(ville.item)">{{ville.item}}<h6 style="margin-left:auto;font-size:12px;color:#C8D0DA">Ville</h6></span>
                                        </li>
                                      </ul>



                                
                                      <div  class="tagslists  z-0	 flex flex-row flex-wrap mt-2 mb-4">
                                        <div  v-for="(tag, index) in tagArray" v-bind:key="index" class="mt-1">
                                          <span class="chip" >{{ tag }}<span class="close" @click="removeTag(index)" >x</span></span>
                                        </div>
                                      </div>


                              </div>


                              <div v-if="infosplus" class="infossupls">

                                <hr style="width:100%;margin:0px;margin-top:10px;margin-bottom:10px">


                                  <div @click="timetraject()" class="flex sousbar mt-1 ml-6">
                                    <img  class="mr-2" src="../../assets/Pics/transportvéhicule.svg">
                                    <h4 style="cursor:pointer">Rechercher par temps de trajet</h4>
                                  </div>

                                  
                                  <div class="flex sousbar mt-2 ml-6">
                                    <img  class="mr-2" src="../../assets/Pics/transportideale.svg">
                                    <h4 style="cursor:pointer">Rechercher par l'adresse idéale</h4>
                                  </div>

                                  <div class="flex sousbar mt-2 ml-6">
                                    <img  class="mr-2" src="../../assets/Pics/transportdinteret.svg">
                                    <h4 style="cursor:pointer">Rechercher par point d'intérêt</h4>
                                  </div>

                              </div>
                           

                           

                              <hr style="width:100%;margin:0px;margin-top:10px">

                              <div class="footerbtns flex  pt-4 pl-6">

                                <div @click="dropdownOpen8=!dropdownOpen8" class="cancelbtn">Annuler</div>

                                <div class="confirmbtn">Appliquer ( 40 annonces)</div>

                              </div>

                          </div>
                        


                          
                          
         


             <!-- price filter 2 -->

            <div @click="toggledropdown2" class="price mt-3 ml-4 grid col-span-1">
                 <!-- component -->
                    <div class="flex justify-center">
                    <div class="relative ">
                    <div style="width:9rem" class="rect relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                      <img id="pricefiltericon" src="../../assets/Pics/Adsannonce.svg" alt="euro icn">
                      <h3 style="padding-left:25px">{{Pricetag}}</h3>
                      <img id="sortingicn" src="../../assets/Pics/Adstrier.svg" alt="sorting icn">

                    </div>

                    </div>

            
                    </div>
            </div>

                          <div  v-if="dropdownOpen2"   id="filter2" class="ntrfilter  absolute top-3 left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                              <div class="ntrfilterheading pt-6 pl-6">
                                <h1>Budget souhaité</h1>
                                <h5>veuillez entrer votre budget souhaité</h5>
                              </div>
                              <div class="ntffilterradio pt-3 pl-6 flex ">

                              <label for="inp" class="inp">
                                    <input v-on:blur="pricemintomax()" v-model="Pricemin" type="number" id="inp" placeholder="">
                                    <span class="label">Min</span>
                                    <span class="focus-bg"></span>
                              </label>

                              <label for="inp" class="inp">
                                    <input v-on:blur="pricemaxtomin()"  v-model="Pricemax" type="number"  id="inp" placeholder="">
                                    <span class="label">Max</span>
                                    <span class="focus-bg"></span>
                              </label>

                              </div>

                                                              <!-- Alert Error -->
                              <div
                                      v-if="pricecompar"
                                      class="bg-red-200 px-3 py-2 mx-8 my-4 rounded-md text-lg flex items-center w-full xl:w-10/12"
                                      >
                                    <svg
                                        viewBox="0 0 24 24"
                                        class="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                                        >
                                      <path
                                            fill="currentColor"
                                            d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
                                            ></path>
                                    </svg>
                                    <span  style="font-size:0.7rem" class="text-red-800"> Le budget maximum doit être supérieur au budget minimum </span>
                              </div>


                                   <div
                                      v-if="bignumber"
                                      class="bg-red-200 px-3 py-2 mx-8 my-4 rounded-md text-lg flex items-center w-full xl:w-10/12"
                                      >
                                    <svg
                                        viewBox="0 0 24 24"
                                        class="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                                        >
                                      <path
                                            fill="currentColor"
                                            d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
                                            ></path>
                                    </svg>
                                    <span  style="font-size:0.7rem" class="text-red-800"> Le budget maximum doit être inférieure à 900000000 millions. </span>
                              </div>


                              
                                  <!-- End Alert Error -->

                              <hr style="width:100%;margin:0px;margin-top:25px">

                              <div class="footerbtns flex  pt-4 pl-6">

                                <div @click="dropdownOpen2=!dropdownOpen2" class="cancelbtn">Annuler</div>

                                <div class="confirmbtn">Appliquer ( 40 annonces)</div>

                              </div>

                          </div>
                        


            <!-- type of  good 3 -->

         

            <!-- Surface 4 -->
            
            <div @click="toggledropdown4" class="price mt-3 ml-4 grid col-span-1">
                 <!-- component -->
                    <div class="flex justify-center">
                    <div class="relative ">
                    <div  class="rect srfc relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                      <img id="pricefiltericon" src="../../assets/Pics/Adssurface.svg" alt="euro icn">
                      <h3>{{Surfacetag}}</h3>
                      <img id="sortingicn" src="../../assets/Pics/Adstrier.svg" alt="sorting icn">

                    </div>

                    </div>
                    </div>

            </div>

            <div  v-if="dropdownOpen4"  id="filter4" class="ntrfilter  absolute top-3 left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                        <div class="ntrfilterheading pt-6 pl-6">
                                <h1>Surface habitable</h1>
                                <h5>Quelle Surface habitable ?</h5>
                              </div>
                              <div class="ntffilterradio pt-3 pl-6 flex ">
                              <label for="inp" class="inp">
                                    <input v-model="Surfacemin" type="number" id="inp" placeholder="&nbsp;">
                                    <span class="label">Min</span>
                                    <span class="focus-bg"></span>
                              </label>

                              <label for="inp" class="inp">
                                    <input v-model="Surfacemax" type="number"  id="inp" placeholder="&nbsp;">
                                    <span class="label">Max</span>
                                    <span class="focus-bg"></span>
                              </label>

                              <!-- <div class="pricefiltermin block">
                                <p>Min</p>
                              <input v-model="Surfacemin" type="number">
                              </div>

                              <div class="pricefiltermax">
                                 <p>Max</p>
                              <input v-model="Surfacemax" type="number">
                              </div> -->
                              
                              </div>

                              <hr style="width:100%;margin:0px;margin-top:25px">

                              <div class="footerbtns flex  pt-4 pl-6">
                                <div @click="dropdownOpen4=!dropdownOpen4" class="cancelbtn">Annuler</div>
                                <div class="confirmbtn">Appliquer ( 40 annonces)</div>
                              </div>
                        </div>
                        



          <!-- Piéces  -->

          <div  v-if="Acheteretlocation"  @click="toggledropdown5" class="price mt-3 ml-4 grid col-span-1">
                 <!-- component -->
                    <div  class="flex justify-center">
                    <div class="relative ">
                    <div id="pieces" class="rect srfc relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                      <img id="scp" src="../../assets/Pics/Adspieces.svg" alt="euro icn">
                      <h3>{{Piecestag}}</h3>
                      <img id="sortingicn" src="../../assets/Pics/Adstrier.svg" alt="sorting icn">

                    </div>
                        
                        </div>
                    </div>
          </div>

          

          <div   v-if="clocation" @click="toggledropdown6" class="price mt-3 ml-4 grid col-span-1">
                 <!-- component -->
                    <div  class="flex justify-center">
                    <div class="relative ">
                    <div  class="rect srfc relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                      <img id="scp" src="../../assets/Pics/furnishedicon.svg" alt="euro icn">
                      <h3>Meublé</h3>
                      <img id="sortingicn" src="../../assets/Pics/Adstrier.svg" alt="sorting icn">

                    </div>
                        
                        </div>
                    </div>
          </div>

          <div   v-if="Neuf"   @click="toggledropdown7" class="price mt-3 ml-4 grid col-span-1">
                 <!-- component -->
                    <div  class="flex justify-center">
                    <div class="relative ">
                    <div  class="rect srfc relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                      <img id="scp" src="../../assets/Pics/lawicon.svg" alt="euro icn">
                      <h3>Lois</h3>
                      <img id="sortingicn" src="../../assets/Pics/Adstrier.svg" alt="sorting icn">

                    </div>
                        
                        </div>
                    </div>
          </div>

            <div  v-if="dropdownOpen7"  id="filter5" class="ntrfilter  absolute top-3 left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                        <div class="ntrfilterheading pt-6 pl-6">
                        <h1>Lois de défiscalisation</h1>
                        <h5>Quelle loi de défiscalisation </h5>

                        <div class="mt-4 mb-2 optionsoffilters grid grid-cols-2  flex">

                                <input v-model="neuflois" value="Loi pinel" class="pt-2 inp-cbx" name="loisdedéfiscalisation" id="Loi pinel" type="radio"/>
                                <label  class="cbx" for="Loi pinel"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Loi pinel</span></label>

                                <input   v-model="neuflois" value="Loi censi-bouvard"  class="inp-cbx pt-2" name="loisdedéfiscalisation"  id="Loi censi-bouvard" type="radio"/>
                                <label    class="cbx" for="Loi censi-bouvard"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Loi censi-bouvard</span></label>

                                
                                <input  v-model="neuflois"  value="Statut LMNP"  class="inp-cbx pt-2" name="loisdedéfiscalisation"  id="Statut LMNP" type="radio"/>
                                <label    class="cbx" for="Statut LMNP"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Statut Lmnp</span></label>

                                <input  v-model="neuflois" value="Girardin"  class="inp-cbx pt-2" name="loisdedéfiscalisation"  id="Girardin" type="radio"/>
                                <label    class="cbx" for="Girardin"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Girardin</span></label>

                                <input  v-model="neuflois" value="Malraux"  class="inp-cbx pt-2" name="loisdedéfiscalisation"  id="Malraux" type="radio"/>
                                <label    class="cbx" for="Malraux"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Malraux</span></label>

                                <input  v-model="neuflois"  value="Lmp"  class="inp-cbx pt-2" name="loisdedéfiscalisation"  id="Lmp" type="radio"/>
                                <label    class="cbx" for="Lmp"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Lmp</span></label>


                                <input  v-model="neuflois" value="Foncier"  class="inp-cbx pt-2" name="loisdedéfiscalisation"  id="Foncier" type="radio"/>
                                <label    class="cbx" for="Foncier"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Foncier</span></label>


                                
                                <input  v-model="neuflois" value="Denormandie"  class="inp-cbx pt-2" name="loisdedéfiscalisation"  id="Denormandie" type="radio"/>
                                <label    class="cbx" for="Denormandie"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Denormandie</span></label>






                                           <!--SVG Sprites-->
                                <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg>

                        </div>
                              <hr style="width:100%;margin:0px;margin-top:25px">

                              <div class="footerbtns flex  pt-4 pl-2">

                                <div @click="dropdownOpen3=!dropdownOpen3" class="cancelbtn">Annuler</div>

                                <div class="confirmbtn">Appliquer ( 40 annonces)</div>

                              </div>
                        </div>
          </div>


          <div  v-if="dropdownOpen6"  id="filter5" class="ntrfilter  absolute top-3 left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                        <div class="ntrfilterheading pt-6 pl-6">
                        <h1>Meublée</h1>
                        <h5>Meublée ou bien non meublée ?</h5>

                        <div class="mt-4 mb-2 optionsoffilters grid grid-cols-2  flex">

                                <input v-model="meublé" value="Ouimeublé" class="pt-2 inp-cbx" name="meublé" id="Ouimeublé" type="radio"/>
                                <label  class="cbx" for="Ouimeublé"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Oui</span></label>

                                <input v-model="meublé" value="Nonmeublé"  class="inp-cbx pt-2" name="meublé"  id="Nonmeublé" type="radio"/>
                                <label    class="cbx" for="Nonmeublé"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Non</span></label>
                                           <!--SVG Sprites-->
                                <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg>

                        </div>
                              <hr style="width:100%;margin:0px;margin-top:25px">

                              <div class="footerbtns flex  pt-4 pl-2">

                                <div @click="dropdownOpen3=!dropdownOpen3" class="cancelbtn">Annuler</div>

                                <div class="confirmbtn">Appliquer ( 40 annonces)</div>

                              </div>
                        </div>
          </div>


           <div  v-if="dropdownOpen5"  id="filter5" class="ntrfilter  absolute top-3 left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                        <div class="ntrfilterheading pt-6 pl-6">
                                <h1>Pieces </h1>
                                <h5>Combien de pièces ?</h5>
                              </div>
                              <div class="ntffilterradio pt-3 pl-6 flex ">

                              <label for="inp" class="inp">
                                    <input v-model="Piecesmin" type="number" id="inp" placeholder="&nbsp;">
                                    <span class="label">Min</span>
                                    <span class="focus-bg"></span>
                              </label>

                              <label for="inp" class="inp">
                                    <input v-model="Piecesmax" type="number"  id="inp" placeholder="&nbsp;">
                                    <span class="label">Max</span>
                                    <span class="focus-bg"></span>
                              </label>
                              
                              <!-- <div class="pricefiltermin block">
                                <p>Min</p>
                                <input v-model="Piecesmin" type="number">

                              </div>

                              <div class="pricefiltermax">
                                 <p>Max</p>
                                <input v-model="Piecesmax" type="number">
                              </div> -->
                              
                              </div>

                              <hr style="width:100%;margin:0px;margin-top:25px">

                              <div class="footerbtns flex  pt-4 pl-6">

                                <div @click="dropdownOpen5=!dropdownOpen5" class="cancelbtn">Annuler</div>

                                <div class="confirmbtn">Appliquer ( 40 annonces)</div>

                              </div>

                        </div>
      </div>


        <!-- part ||| -->


        <div  class="notif ml-auto mr-8  mt-3 xl:ml-4 grid grid-cols-3">

          <div class="plusdefilters col-span-2 grid grid-cols-2  mt-2">
          
                  <a style="cursor:pointer" @click="Modal"><h4>Plus </h4></a>


            <!--  -->
            <img id="pls" src="../../assets/Pics/Adsmore.svg" alt="euro icn">
          </div>

          <div class="notpic">
            <img id="" class="w-10" src="../../assets/Pics/Adsnotifications.svg" alt="notifications">
          </div>

            <!-- popup -->

          <Popup  v-if="Modalview"
          :AdresseModal="AdresseModal"
          :NatureModal="NatureModal" 
          :TypeofadModal="TypeofadModal"
          :TypeofgoodModal="good"
          :Surfacemin="Surfacemin"
          :Surfacemax="Surfacemax"
          :Piecesmin="Piecesmin"
          :Piecesmax="Piecesmax"
          @close="closepop"
          @away="away"
          />

          <Tempsdetrajet
          v-if="timepopup"
          @closetemptrajet="closingtimepop"   
          />


            
            

        </div>

        <!-- end of class filters  -->
         </div>

         <div class="showcase lg:grid lg:grid-cols-7">

            <div class="map hidden lg:block lg:col-span-4">

              <!-- <p>Hello World</p> -->

              <Map  class="z-0"
              ref="map"
              apiKey="33198c0445f943b6b94277c724a5fdcb"
              latitude="48.730221"
              longitude="2.2767898"
              zoom="14"
              :geo="geos"
              :Ad="Ad"
              />
            </div>

            <div  class="cards lg:col-span-3">

              <div class="headingcards  grid sm:flex  lg:flex">

                <div class="founding">
                  {{geos.length}} Résultats à <span>Paris 16éme,france</span>
                </div>

                <div class="sorting  m-0 sm:ml-auto flex">
                  Trier par: <span @click="sortingprice=!sortingprice">{{sortingitem}}</span>
                  
                        <div  v-if="sortingprice"  class="sortinprice absolute right-0 mt-2 py-2 w-40	 bg-white rounded-md shadow-xl z-20">
                            <p @click="sortingitem='Sélection';sortingprice=!sortingprice" class="block px-4 py-2 text-sm  text-gray-700 srtitems hover:text-white">
                            Sélection
                            </p>
                            <p @click="sortingitem='Prix croissant';sortingprice=!sortingprice" class="block px-4 py-2 text-xs	  text-gray-700 srtitems hover:text-white">
                            Prix croissant
                            </p>
                            <p @click="sortingitem='Prix décroissant';sortingprice=!sortingprice" class="block px-4 py-2 text-xs	  text-gray-700 srtitems hover:text-white">
                            Prix décroissant
                            </p>
                            <p  @click="sortingitem='Surface croissante';sortingprice=!sortingprice" class="block px-4 py-2 text-xs	  text-gray-700 srtitems hover:text-white">
                            Surface croissante
                            </p>
                            <p  @click="sortingitem='Surface décroissante';sortingprice=!sortingprice" class="block px-4 py-2 text-xs	  text-gray-700 srtitems hover:text-white">
                            Surface décroissante
                            </p>
                            <p  @click="sortingitem='Surface décroissante';sortingprice=!sortingprice" class="block px-4 py-2 text-xs	  text-gray-700 srtitems hover:text-white">
                            Surface décroissante
                            </p>
                            <p  @click="sortingitem='Prix au m² le plus bas';sortingprice=!sortingprice" class="block px-4 py-2 text-xs	  text-gray-700 srtitems hover:text-white">
                            Prix au m² le plus bas                           
                            </p>
                            <p  @click="sortingitem='Prix au m² le plus élevé';sortingprice=!sortingprice" class="block px-4 py-2 text-xs	  text-gray-700 srtitems hover:text-white">
                            Prix au m² le plus élevé
                            </p>
                            <p  @click="sortingitem='Date';sortingprice=!sortingprice" class="block px-4 py-2 text-xs	  text-gray-700 srtitems hover:text-white">
                            Date
                            </p>
                         
                        </div>

                  <img @click="sortingprice=!sortingprice" class="arrowsort" src="../../assets/Pics/sortingarrow.svg">
                  <img @click="sortingprice=!sortingprice" class="sortlisting" src="../../assets/Pics/sortinglisting.svg">

                </div>

              </div>

              <hr>

              <!-- end of heading cards  -->

              <div class="listcrds">

                <div @mouseenter="placeAd(geo)" @mouseleave="removeAd(geo)"     v-for="(geo,index) in geos" :key="index" class="grid  containofcard grid-cols-5">

                    <div  class="cardpic col-span-5 sm:col-span-2">

                      <div class="picture" v-bind:style='{ backgroundImage: "url(" + geo.pic + ")", }'></div>

                    </div>

                    <div   class="cardinfos col-span-5 sm:col-span-3">

                      <div class="typeofgood flex">
                          <div class="badge">{{geo.typeofg}}</div>
                          <div class="heartemoji">
                              <input  class="tght" :id="index+1" type="checkbox"/>
                              <label class="ltght" :for="index+1">
                                <div class="heart" @click="changeHeart($event)"></div>
                              </label>
                          </div>
                      </div>
                      <div class="cardadd">{{geo.addresse}}</div>
                      <div class="cardsubadd">{{geo.subaddresse}}</div>
                      <div class="cardprice">€{{geo.price}}</div>
                      <div class="cardspace">{{geo.subheading}}</div>
                      <div class="cardfooter flex lg:pt-2">
                      <div class="cardpublictransport w-40 grid grid-cols-3">
                        <div style="justify-self:start" class="cpbt flex">
                        <img src="../../assets/Pics/cardbicycle.svg">
                        <p>{{geo.tpublic.bicyle}}</p>
                        </div>
                        <div style="justify-self:center" class="cpbt flex">
                        <img style="width:0.8rem" src="../../assets/Pics/cardmetro.svg">
                        <p>17’</p>
                        </div>
                        <div style="justify-self:end" class="cpbt flex">
                        <img  src="../../assets/Pics/cardcar.svg">
                        <p>17’</p>
                        </div>

                      </div>

                      <div class="cardtime">
                        <p>Il y a {{geo.postingdate}}</p>
                      </div>




                      </div>




                    </div>
                    
                    <hr class="col-span-5">



                </div>




              </div>

              <div class="bottomBar z-40 grid md:grid-cols-5 fixed lg:hidden">


                  <div  style="justify-self:start" class=" hidden founding mt-5 md:block md:col-span-2">
                      {{geos.length}} Résultats à <span>Paris 16éme,france</span>
                  </div>

                  <div @click="isMap=!isMap" class="mapbtn">
                    <img  v-if="!isMap" src="../../assets/Pics/mapbtn.svg">
                    <p v-if="!isMap">Carte</p>
                    <p style="display:block;margin:0 auto" v-if="isMap">Retour</p>

                  </div>

                  <!-- <div  style="justify-self:center" class=" hidden founding mt-5 md:block md:col-span-2">
                      {{geos.length}} Résultats à <span>Paris 16éme,france</span>
                  </div> -->

                  <div  style="justify-self:end" class="sorting  m-0  hidden md:flex md:col-span-2 md:mt-5 ">
                  Trier Par: <span @click="sortingpricemobile=!sortingpricemobile">{{sortingitemmobile}}</span>
                  
                        <div  v-if="sortingpricemobile"  class="sortinpricemobile absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-xl z-20">
                            <p @click="sortingitemmobile='Prix';sortingpricemobile=!sortingpricemobile" class="block px-4 py-2 text-sm capitalize text-gray-700 srtitems hover:text-white">
                            Prix
                            </p>
                            <p @click="sortingitemmobile='Surface';sortingpricemobile=!sortingpricemobile" class="block px-4 py-2 text-sm capitalize text-gray-700 srtitems hover:text-white">
                            Surface
                            </p>
                            <p  @click="sortingitemmobile='Piéces';sortingpricemobile=!sortingpricemobile" class="block px-4 py-2 text-sm capitalize text-gray-700 srtitems hover:text-white">
                            Piéces
                            </p>
                            <p  @click="sortingitemmobile='Date';sortingpricemobile=!sortingpricemobile" class="block px-4 py-2 text-sm capitalize text-gray-700 srtitems hover:text-white">
                            Date
                            </p>
                         
                        </div>

                        <img @click="sortingdirectionmobile=!sortingdirectionmobile;sortingpricemobile=false" class="arrowsort" src="../../assets/Pics/sortingarrow.svg">
                        <img @click="sortingdirectionmobile=!sortingdirectionmobile;sortingpricemobile=false" class="sortlisting" src="../../assets/Pics/sortinglisting.svg">
                        <div  v-if="sortingdirectionmobile"  class="sortingdurectionmobile absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-xl z-20">
                            <p  @click="sortingdirectionmobile=!sortingdirectionmobile" class="block px-4 py-2 text-sm capitalize text-gray-700 srtitems hover:text-white">
                            Croissant
                            </p>
                            <p  @click="sortingdirectionmobile=!sortingdirectionmobile" class="block px-4 py-2 text-sm capitalize text-gray-700 srtitems hover:text-white">
                            Décroissant
                            </p>
                        
                         
                        </div>


                    </div>


                  


              </div>


              <div v-if="isMap" class="mapmobile  fixed z-30 h-full w-full">

              <Map  class="z-0"
              ref="map"
              apiKey="33198c0445f943b6b94277c724a5fdcb"
              latitude="48.730221"
              longitude="2.2767898"
              zoom="16"
              :geo="geos"
              />

              </div>

            </div>
         </div>

  



    </div>

  
</template>

<script>
import Navbarmap  from '../../components/Navbarmap'
import Map  from '../../components/Adsmap'
import Popup from '../../components/Filter_speciaux/Popup'
import Tempsdetrajet from '../../components/Filter_speciaux/Tempsdetrajet'

import { mixin as clickaway } from 'vue-clickaway';

// import VueTagsInput from '@johmun/vue-tags-input';









import 'alpinejs'


export default {
    mixins: [ clickaway ],
    name: 'Adslist',
    components: {
    // VueTagsInput,
    Navbarmap,
    Map,
    Popup,
    Tempsdetrajet
    },
    data() {
      return {
       // start searcharray
      timepopup:false,
      inputstatetag:false,
      inputstate:false,
      authorNameSearchString: "",
      photoFeed: null,
      departementFeed:null,
      villeFeed:null,
      searchString:null,
      none:null,
      tags:null,
      placeholder:"Dans quelle ville ?",
      tagArray:[],
      listedcountries:[],
      listeddepartements:[],
      nonedepartements:null,
      listedesvilles:[],
      nonedeville:null,

      // end searcharray
      infosplus:false,
      bignumber:false,
      pricecompar:false,
      placehold:"Saissez une ville , une code postal ou un département",
      NatureModal:[],
      AdresseModal:"",
      TypeofadModal:"Acheter",
      TypeofgoodModal:"Appartement",
      changegd:"",
      Modalview:false,
      Arrayofgood:[],
      Filtervente:true,
      Filterlocation:false,
      Filtercolocation:false,
      Filterneuf:false,
      dropdownOp:false,
      dropdownOpen:false,
      dropdownOpen2:false,
      dropdownOpen3:false,
      dropdownOpen4:false,
      dropdownOpen5:false,
      dropdownOpen6:false,
      dropdownOpen7:false,
      dropdownOpen8:false,
      Typeofthegood:"Appartement",
      TypeOfProject:"Acheter",
      Natureofad:"Nature de l'annonceur",
      // Pricemin:"  ",
      // Pricemax:" ",
      Surfacemin:"  ",
      Surfacemax:"  ",
      Piecesmin:" ",
      Piecesmax:" ",
      sortingprice:false,
      sortingdirection:false,
      isHeart:true,
      isMap:false,
      currentlynotActive:["Carte","Retour"],
      tst:false,
      sortingitem:"Prix",
      sortingpricemobile:false,
      sortingdirectionmobile:false,
      sortingitemmobile:"Prix",
      popup:true,
      Ad: {},
      // tag: '',
      // tags: [],
      // autocompleteItems: [{
      //   text: 'Spain',
      // }, {
      //   text: 'France',
      // }, {
      //   text: 'USA',
      // }, {
      //   text: 'Germany',
      // }, {
      //   text: 'China',
      // }],
      geos:[
                {price:' 129,23',lat: 48.73058,lon: 2.277286,pic:"/assets/house1.jpg",subheading:"5 piéces , 3 chambres, 110 m²",addresse:"220 Cremin Via Apt.667",subaddresse:"Paris,France",typeofg:"Appartement",postingdate:"1 heure",tpublic:{bicyle:"12"}},
                {price:' 1239',lat: 48.730465,lon:2.276981,pic:"assets/house2.jpg",subheading:"5 piéces , 3 chambres, 110 m²",addresse:"Rosny-sous-Bois",subaddresse:"Belleville, Paris 20ème",typeofg:"Maison / Villa",postingdate:"3 heure",tpublic:{bicyle:"13"}},
                {price:' 86,199',lat: 48.730873,lon: 2.274106,pic:"assets/house3.jpg",subheading:"8 piéces , 12 chambres, 120 m²",addresse:"Quartier Jourdain Place Henri ",subaddresse:"Île-de-France , France",typeofg:"Immeuble",postingdate:"4 heure",tpublic:{bicyle:"18"}},
                {price:' 1920',lat: 48.7287817,lon: 2.270921,pic:"assets/adpic1.jpg",subheading:"10 piéces , 14 chambres, 90 m²",addresse:" Levallois-Perret",subaddresse:"Île-de-France , France",typeofg:"Hôtel partic.",postingdate:"2 heure",tpublic:{bicyle:"17"}},
                {price:' 1800',lat: 48.7342027,lon: 2.2779,pic:"assets/adpic1.jpg",subheading:"18 piéces , 12 chambres, 80 m²",addresse:"10 Rue Pierre Picard",subaddresse:"Île-de-France , France",typeofg:"Appartement",postingdate:"3 heure",tpublic:{bicyle:"11"}},
                {price:' 1230',lat:48.7283439,lon: 2.2754761,pic:"assets/adpic1.jpg",subheading:"7 piéces ,5 chambres, 120 m²",addresse:"17 Rue du 8 Mai 1945",subaddresse:"Île-de-France , France",typeofg:"Immeuble",postingdate:"8 heure",tpublic:{bicyle:"8"}},
                {price:' 1190',lat:48.729259,lon: 2.274384,pic:"assets/adpic1.jpg",subheading:"19 piéces ,7 chambres, 77 m²",addresse:"21 Massy",subaddresse:"Île-de-France , France",typeofg:"Maison / Villa",postingdate:"9 heure",tpublic:{bicyle:"9"}},
                {price:' 1789',lat:48.727627,lon:2.275489,pic:"assets/adpic1.jpg",subheading:"19 piéces ,7 chambres, 77 m²",addresse:"24 Massy",subaddresse:"Île-de-France , France",typeofg:"Maison / Villa",postingdate:"2 heure",tpublic:{bicyle:"10"}},
                {price:' 1789',lat:48.727627,lon:2.275489,pic:"assets/adpic1.jpg",subheading:"19 piéces ,7 chambres, 77 m²",addresse:"24 Massy",subaddresse:"Île-de-France , France",typeofg:"Maison / Villa",postingdate:"2 heure",tpublic:{bicyle:"10"}}
                ],

      good:{
      Appartement:"",
      Maison:"",
      Loft:"",
      Terrain:"",
      Parking:"",
      Cave: "",
      Box: "",
      Bureau: "",
      Château: "",
      HôtelParticulier:"",
      ImmeubleBatiment: "",
      Péniche:"",
      Placedeport:"",
      Fondsdecommerce:"",
      Localcommerciale:"",
      } 
    }
    },
    methods:{
    
    timetraject:function(){

      this.timepopup=true

    },
    getTag:function(ab){
      this.tagArray.push(ab);
      this.authorNameSearchString = '';
      this.placeholder = "Une Autre ville ?";
      },


    delete_last: function() {
      if (this.input_value == '') {
        this.delete_tag(this.tags.length - 1, 1)
      }
    },

    removeTag:function(n){  
    this.tagArray.splice(n,1)
    if (this.tagArray.length==0){
      this.placeholder="Dans quelle ville ?";
    }
    else{
      (console.log("merbouha"))
    }
    console.log(this.tagArray,n)
    console.log("length",this.tagArray.length)

    },
    write:function(){
      this.listedesvilles=[];
      this.listedesvilles.length=0;
      this.listeddepartements=[];
      this.listeddepartements.length=0;
      this.listedcountries=[];
      this.listedcountries.length = 0;
    },



    
    activeinput:function(){
    console.log("hahowa dkhal")
    this.$refs.ullist.style.height="224px"
    this.inputstate=false
    },
    descativateinput:function(){
    console.log("hahowa khraj mn input")
    this.$refs.ullist.style.height="0px"
    this.inputstate=true
    },
    pricemintomax:function(){
      console.log("nchufo pricemin",this.Pricemin)
      console.log("nchufo pricemax",this.Pricemax)

      if (this.Pricemax>this.Pricemin){
        this.pricecompar=false;
        // this.$refs.filter2.style.height="15rem"
        console.log("hahowa dkhal wast condition")
      }
 
    },
    pricemaxtomin:function(){
      if (this.Pricemin>this.Pricemax){
        this.Pricemin=0;
        this.pricecompar=true;
        // this.$refs.filter2.style.height="19rem"

      }
      else if(this.Pricemin<this.Pricemax) {
        this.pricecompar=false;
      }


    },
    Natureofads:function(obj){

    if (this.Natureofad.includes(obj)){
      var index = this.Natureofad.indexOf(obj)
      this.Natureofad.splice(index, 1);
    }
    else {
    this.Natureofad.push(obj)
    }

    },
    Modal:function (){
        this.$refs.filter.style.zIndex="2"
        this.dropdownOp=false
        this.dropdownOpen2=false
        this.dropdownOpen3=false
        this.dropdownOpen4=false
        this.dropdownOpen5=false
        this.dropdownOpen6=false,
        this.dropdownOpen7=false 
        this.dropdownOpen8=false 
        this.Modalview=true
    },

    away: function() {
      this.$refs.filter.style.zIndex="1"
      this.Modalview=false
    },

    closepop:function(){
      this.Modalview=false
    },
    closingtimepop:function(){
      this.timepopup=false
    },
      toggledropdown:function(){     
        this.dropdownOpen2=false
        this.dropdownOpen3=false
        this.dropdownOpen4=false
        this.dropdownOpen5=false
        this.dropdownOpen6=false,
        this.dropdownOpen7=false 
        this.dropdownOpen8=false 
        this.dropdownOp=!this.dropdownOp
        // console.log("etat dyal dropdown1",this.dropdownOpen2)
      },

       toggledropdown2:function(){  
        this.dropdownOp=false
        this.dropdownOpen3=false
        this.dropdownOpen4=false  
        this.dropdownOpen5=false
        this.dropdownOpen6=false,
        this.dropdownOpen7=false 
        this.dropdownOpen8=false 
        this.dropdownOpen2=!this.dropdownOpen2
        // console.log("etat dyal dropdown2",this.dropdownOp)
      },
        toggledropdown3:function(){
        this.dropdownOp=false
        this.dropdownOpen2=false
        this.dropdownOpen4=false   
        this.dropdownOpen5=false
        this.dropdownOpen6=false,
        this.dropdownOpen7=false  
        this.dropdownOpen8=false 
        this.dropdownOpen3=!this.dropdownOpen3
        // console.log("etat dyal dropdown3",this.dropdownOpen3)
        // console.log("array chno fih",this.Arrayofgood)
        // console.log("array chno fih",this.Arrayofgood)
        this.good=this.$store.state.Filters.typeofgood
      },
        toggledropdown4:function(){
        this.dropdownOp=false
        this.dropdownOpen2=false
        this.dropdownOpen3=false 
        this.dropdownOpen5=false
        this.dropdownOpen6=false,
        this.dropdownOpen7=false  
        this.dropdownOpen8=false 
        this.dropdownOpen4=!this.dropdownOpen4
      },
        toggledropdown5:function(){
        this.dropdownOp=false
        this.dropdownOpen2=false
        this.dropdownOpen3=false  
        this.dropdownOpen4=false  
        this.dropdownOpen6=false,
        this.dropdownOpen7=false  
        this.dropdownOpen8=false 
        this.dropdownOpen5=!this.dropdownOpen5  
      },
         toggledropdown6:function(){
        this.dropdownOp=false
        this.dropdownOpen2=false
        this.dropdownOpen3=false  
        this.dropdownOpen4=false 
        this.dropdownOpen5=false 
        this.dropdownOpen8=false 
        this.dropdownOpen7=false  

        this.dropdownOpen6=!this.dropdownOpen6
      },
        toggledropdown7:function(){
        this.dropdownOp=false
        this.dropdownOpen2=false
        this.dropdownOpen3=false  
        this.dropdownOpen4=false 
        this.dropdownOpen5=false  
        this.dropdownOpen6=false 
        this.dropdownOpen8=false 
        this.dropdownOpen7=!this.dropdownOpen7
      },
        toggledropdown8:function(){
        this.dropdownOp=false
        this.dropdownOpen2=false
        this.dropdownOpen3=false  
        this.dropdownOpen4=false 
        this.dropdownOpen5=false  
        this.dropdownOpen6=false 
        this.dropdownOpen8=!this.dropdownOpen8
        this.dropdownOpen7=false
      },



      changeHeart:function(event){
      if(event.target.className == "heart")
          {
              event.target.className = "heartactive";
          }
      else
          {
              event.target.className = "heart";
          }

      },
      placeAd:function(obj){
        // console.log("hello world",obj)
        this.Ad=obj;
      },
      removeAd:function(){
        this.Ad={};
      },
      vente:function(){
        // this.Filterlocation=false
        // this.Filtercolocation=false
        // this.Filterneuf=false
        // this.Filtervente=true
        this.$store.commit('removetypeofgood')
        this.$store.commit('removetypeofoffre')

      },
      location:function(){
        // this.Filtercolocation=false
        // this.Filterneuf=false
        // this.Filtervente=false
        // this.Filterlocation=true
        this.$store.commit('removetypeofgood')
        this.$store.commit('removetypeofoffre')

      },
      colocation:function(){
        // this.Filterlocation=false
        // this.Filtervente=false
        // this.Filterneuf=false        
        // this.Filtercolocation=true
        this.$store.commit('removetypeofgood')
        this.$store.commit('removetypeofoffre')


      },
      neuf:function(){
        // this.Filterlocation=false
        // this.Filtervente=false
        // this.Filtercolocation=false
        // this.Filterneuf=true        
        this.$store.commit('removetypeofgood')
        this.$store.commit('removetypeofoffre')


    },
      //   sendobject:function(good){
      //   if(this.$store.state.Filters.typeofgood.includes(good)){
      //     var index = this.$store.state.Filters.typeofgood.indexOf(good);
      //     this.$store.state.Filters.typeofgood.splice(index, 1);
      //   }
      //   else {
      //     this.$store.state.Filters.typeofgood.push(good)
      //   }
      //   console.log("ha table ache fih",this.$store.state.Filters.typeofgood)
        
      // },
      // changegood:function(good){
        // if(this.$store.state.Filters.typeofgood.indexOf(good) !== -1){
        //   var index=this.$store.state.Filters.typeofgood.indexOf(good)
        //   this.$store.state.Filters.typeofgood.splice(index, 1);
        // } else{
        //   this.$store.state.Filters.typeofgood.push(good)
        //   console.log(this.$store.state.Filters.typeofgood)
        // }
        // this.changegd=good
        // console.log("-----------------------------")
        // console.log("hada good",good)
        // console.log("hada indexof typeofgood",this.$store.state.Filters.typeofgood.indexOf(good))
        // console.log("hada size dyal  typeofgood",this.$store.state.Filters.typeofgood.length)
        // console.log("-----------------------------")

        // if (this.$store.state.Filters.typeofgood.length==1){
        // this.Typeofthegood=this.$store.state.Filters.typeofgood[this.$store.state.Filters.typeofgood.length-1]
        //   console.log("dkhal hna1",this.$store.state.Filters.typeofgood[this.$store.state.Filters.typeofgood.length-1])
        // }
        // else if (this.$store.state.Filters.typeofgood.length>1){
        //   var nameofgood=this.$store.state.Filters.typeofgood[0]
        //   var numberofextra=(this.$store.state.Filters.typeofgood.length-1)
        //   this.Typeofthegood=nameofgood + ' (+'+numberofextra+') '
        //   console.log("dkhal hna 2 array of good chno fih",this.Typeofthegood)
        // }
      // },
      sendtypeofad:function(ad){
        this.$store.state.Filters.typeofad=ad
        // console.log("ha table ache fihhh",this.$store.state.Filters.typeofad)
      }

    },

    computed: {

    filteredPhotoFeed: function () {

    /* eslint-disable no-unused-vars */
    var photos = this.photoFeed;
    var authorNameSearchString = this.authorNameSearchString;
    var none=this.none;
    var listedc=this.listedcountries
    

    if(!authorNameSearchString||authorNameSearchString.length<=1){

      return none;

    }


    console.log("hahowa dkhal hnaya")

    /* eslint-disable no-unused-vars */
    var searchString = authorNameSearchString.trim().toLowerCase();
    // console.log("searchString",searchString)

    photos = photos.filter(function(item){
      
      if(item.toLowerCase().indexOf(searchString) !== -1){
        // console.log("index",item.name.toLowerCase().indexOf(searchString))
        var indc=item.toLowerCase().indexOf(searchString)
        listedc.push({item,indc})
      }
    })

    console.log("listedCountries",this.listedcountries)
    listedc.sort(function (x, y) {
    return x.indc - y.indc;
    });
    console.log('---------------------------')
    console.log(this.listedcountries)
    const map1 = listedc.map(x =>delete x.indc);
    return listedc;
  },




// end of filteredphotos

      filtereddepartementFeed: function () {

    /* eslint-disable no-unused-vars */
    var photos = this.departementFeed;
    var authorNameSearchString = this.authorNameSearchString;
    var none=this.nonedepartements;
    var listedc=this.listeddepartements
    

    if(!authorNameSearchString||authorNameSearchString.length<=1){

      return none;

    }


    console.log("hahowa dkhal hnaya")

    /* eslint-disable no-unused-vars */
    var searchString = authorNameSearchString.trim().toLowerCase();
    // console.log("searchString",searchString)

    photos = photos.filter(function(item){
      
      if(item.toLowerCase().indexOf(searchString) !== -1){
        // console.log("index",item.name.toLowerCase().indexOf(searchString))
        var indc=item.toLowerCase().indexOf(searchString)
        listedc.push({item,indc})
      }
    })

    console.log("listedCountries",this.listeddepartements)
    listedc.sort(function (x, y) {
    return x.indc - y.indc;
    });
    console.log('---------------------------')
    console.log(this.listeddepartements)
    const map1 = listedc.map(x =>delete x.indc);
    return listedc;
  },


  // end of filtereddepartements

        filterevilleFeed: function () {

    /* eslint-disable no-unused-vars */
    var photos = this.villeFeed;
    var authorNameSearchString = this.authorNameSearchString;
    var none=this.nonedeville;
    var listedc=this.listedesvilles

  

    if(!authorNameSearchString||authorNameSearchString.length<=2){

      return none;

    }


    console.log("hahowa dkhal hnaya")

    /* eslint-disable no-unused-vars */
    var searchString = authorNameSearchString.trim().toLowerCase();
    // console.log("searchString",searchString)

    photos = photos.filter(function(item){
      
      if(item.toLowerCase().indexOf(searchString) !== -1){
        // console.log("index",item.name.toLowerCase().indexOf(searchString))
        var indc=item.toLowerCase().indexOf(searchString)
        listedc.push({item,indc})
      }
    })

    console.log("listedCountries",this.listedesvilles)
    listedc.sort(function (x, y) {
    return x.indc - y.indc;
    });
    console.log('---------------------------')
    console.log(this.listedesvilles)
    const map1 = listedc.map(x =>delete x.indc);
    return listedc;
  },



    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },
    Pricemin:{
    get () {
    return this.$store.state.Pricemin
    },
    set (value) {
      if(value>900000000){
      this.bignumber=true
      this.pricecompar=false
      // this.$refs.filter2.style.height="19rem"
      }
      else{
      this.bignumber=false
      // this.$refs.filter2.style.height="15rem"
      this.$store.commit('updatepricemin', value)
      }
    }
    },

    Pricemax:{
    get () {
    return this.$store.state.Pricemax
    },
    set (value) {

      if(value>900000000){

      this.bignumber=true
      this.pricecompar=false
      // this.$refs.filter2.style.height="19rem"
      }
      else {
      this.bignumber=false
      // this.$refs.filter2.style.height="15rem"
      this.$store.commit('updatepricemax', value)

      }
    }
    },
    Colocation:function(){
    if(this.$store.state.Filters.typeofad=="Colocation"){
    return true
    }
    else {
      return false
    }
    },

    Location:function(){
    if(this.$store.state.Filters.typeofad=="Location"){
    return true
    }
    else {
      return false
    }
    },
    Acheter:function(){
    if(this.$store.state.Filters.typeofad=="Acheter"){
    return true
    }
    else {
      return false
    }
    },
    Neuf:function(){
    if (this.$store.state.Filters.typeofad=="Neuf"){
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    },
    typeofad:{
    get () {
    return this.$store.state.Filters.typeofad
    },
    set (value) {
      this.$store.commit('updatetypeofad', value)
    }
    },

    typeofgood:{
    get () {
    return this.$store.state.Filters.typeofgood
    },
    set (value) {
      this.$store.commit('updatetypeofgood', value)
    }
    },
    meublé: {
    get () {
    return this.$store.state.meublé
    },
    set (value) {
      this.$store.commit('updatemeublé', value)
    }
    },
    typeofoffre:{
    get () {
    return this.$store.state.typeofoffre
    },
    set (value) {
      this.$store.commit('updateoffre', value)
    }

    },
    neuflois:{
    get () {
    return this.$store.state.loisneuf
    },
    set (value) {
      this.$store.commit('updateLois', value)
    }
    },
    // Neuf:function(){
    // if(this.$store.state.Filters.typeofad=="Neuf"){
    // return true
    // }
    // else {
    //   return false
    // }
    // },
    clocation:function(){
    if(this.$store.state.Filters.typeofad=="Colocation"){
    return true
    }
    else {
      return false
    }
    },
    Acheteretlocation:function(){
    if(this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    return true
    }
    else {
      return false
    }
    },

    Pricetag: function () {
    // var minvalue=Math.abs(this.Pricemin) > 999 ? Math.sign(this.Pricemin)*((Math.abs(this.Pricemin)/1000).toFixed(1)) + 'k' : Math.sign(this.Pricemin)*Math.abs(this.Pricemin)
    // var maxvalue=Math.abs(this.Pricemax) > 999 ? Math.sign(this.Pricemax)*((Math.abs(this.Pricemax)/1000).toFixed(1)) + 'k' : Math.sign(this.Pricemax)*Math.abs(this.Pricemax)
  
    if (this.Pricemin>0 || this.Pricemax>0){

          var vlmin=this.Pricemin
          var vmax=this.Pricemax

          var vlmincom=vlmin.toString().split("").reverse().map((digit, index) =>
              index != 0 && index % 3 === 0 ? `${digit},` : digit
            ).reverse().join("")

          var vlmaxcom=vmax.toString().split("").reverse().map((digit, index) =>
              index != 0 && index % 3 === 0 ? `${digit},` : digit
            ).reverse().join("")


          var partsmin = vlmincom.split(",");

          var partsmax = vlmaxcom.split(",");

          var vlminrslt=partsmin.length > 1 ? (Math.round(parseInt(partsmin.join(""), 10) / Math.pow(1000, partsmin.length-1)) + "" + ["K", "M", "B"][partsmin.length-2]) : partsmin[0];
          
          var vlmaxrslt=partsmax.length > 1 ? (Math.round(parseInt(partsmax.join(""), 10) / Math.pow(1000, partsmax.length-1)) + "" + ["K", "M", "B"][partsmax.length-2]) : partsmax[0];

          return vlminrslt+" - "+vlmaxrslt
    }
    else 
    return "Prix"
    },
    Surfacetag:function(){
    var minvalue=Math.abs(this.Surfacemin) > 999 ? Math.sign(this.Surfacemin)*((Math.abs(this.Surfacemin)/1000).toFixed(1)) + 'k' : Math.sign(this.Surfacemin)*Math.abs(this.Surfacemin)
    var maxvalue=Math.abs(this.Surfacemax) > 999 ? Math.sign(this.Surfacemax)*((Math.abs(this.Surfacemax)/1000).toFixed(1)) + 'k' : Math.sign(this.Surfacemax)*Math.abs(this.Surfacemax)

    if (this.Surfacemin>0 || this.Surfacemax>0)
    return minvalue+"-"+maxvalue
    else 
    return "Surface"
    },
    Piecestag:function(){
    var minvalue=Math.abs(this.Piecesmin) > 999 ? Math.sign(this.Piecesmin)*((Math.abs(this.Piecesmin)/1000).toFixed(1)) + 'k' : Math.sign(this.Piecesmin)*Math.abs(this.Piecesmin)
    var maxvalue=Math.abs(this.Piecesmax) > 999 ? Math.sign(this.Piecesmax)*((Math.abs(this.Piecesmax)/1000).toFixed(1)) + 'k' : Math.sign(this.Piecesmax)*Math.abs(this.Piecesmax)

    if (this.Piecesmin>0 || this.Piecesmax>0)
    return minvalue+"-"+maxvalue
    else 
    return "Piéces"
    },
    // globalvente:function(){
    // if(this.$store.state.Filters.typeofgood.includes("Maison" || "Loft" || "Hôtel Particulier" || "Château"  || "Immeuble & Batiment" ||  "Appartement"))
    // return true
    // },
    // other:function(){
    //   return false
    // }
  
  },
    
      watch: {
      NatureModal:function(){
      if (this.NatureModal.length>0){
        if (this.NatureModal.length>=2){
        this.Natureofad=this.NatureModal[0]+" ,"+this.NatureModal[1]
        }
        else {
          this.Natureofad=this.NatureModal[0]
        }
      }
      else {
        this.Natureofad="Nature de l'annonceur"
      }
      },
      
    
      '$store.state.Filters.typeofgood':function(){
        this.good=this.$store.state.Filters.typeofgood
        // var good=this.changegd
        // console.log("******************table rah changaa************************")
        // console.log("good object chno fiha",this.good)
        // console.log("central object chno fiha",this.$store.state.Filters.typeofgood)
        // console.log("-----------------------------")
        // console.log("hada good",good)
        // console.log("hada indexof typeofgood",this.$store.state.Filters.typeofgood.indexOf(good))
        // console.log("hada size dyal  typeofgood",this.$store.state.Filters.typeofgood.length)
        // console.log("-----------------------------")

        if (this.$store.state.Filters.typeofgood.length==1){
        this.Typeofthegood=this.$store.state.Filters.typeofgood[this.$store.state.Filters.typeofgood.length-1]
          // console.log("dkhal hna1",this.$store.state.Filters.typeofgood[this.$store.state.Filters.typeofgood.length-1])
        }
        else if (this.$store.state.Filters.typeofgood.length>1){
          var nameofgood=this.$store.state.Filters.typeofgood[0]
          var numberofextra=(this.$store.state.Filters.typeofgood.length-1)
          this.Typeofthegood=nameofgood + ' (+'+numberofextra+') '
          // console.log("dkhal hna 2 array of good chno fih",this.Typeofthegood)
        }
      }


    },
    mounted(){

      this.$http.get('http://localhost:3000/region')
      .then(response => {
        this.photoFeed = response.data;
        console.log("photos feed",this.photoFeed)
      })
      .catch(error => console.log(error))

      
      this.$http.get('http://localhost:3000/departement')
      .then(response => {
        this.departementFeed = response.data;
        console.log("photos feed",this.this.departementFeed)
      })
      .catch(error => console.log(error))


      this.$http.get('http://localhost:3000/ville')
      .then(response => {
        this.villeFeed = response.data;
        console.log("photos feed",this.this.villeFeed)
      })
      .catch(error => console.log(error))




      this.good=this.$store.state.Filters.typeofgood
    }


}
</script>

<style scoped lang="scss">
@import "../../scss/main.scss";  

//   .vue-tags-input .ti-item.ti-selected-item {
//     background: $main;
//     color: white;
//     font-family: $gm;
//     font-size: 0.8rem;
//   }
//     .vue-tags-input .ti-autocomplete {
//     border-top: none;
//     font-family: $gm;
//     font-size: 0.8rem;
//   }

// .vue-tags-input{
//   width: 90% !important;
// }
// .ti-tag{
//   background:$main !important;
// }
// .ti-input{
//   font-family: $gm;
//   font-size: 0.92rem;
//   text-transform: capitalize;
//   background: #F2F4F7;
//   border:none  !important
// }

// .ti-new-tag-input::placeholder {
//   color: #C8D0DA !important;
// }

// .ti-new-tag-input-wrapper input{
//   background:#F2F4F7;
// }

span{
    font-family: $gm;
    font-size: 12px;
    cursor: pointer;
}

.close {
    font-size: 19px;
    position: relative;
    left: 16px;
    cursor: pointer;
}

input {
  font-family: $gm;
  font-size: 0.8rem;
  background: #F2F4F7;
  border:none  !important;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 0.5rem;
  width:100%
  }

.tag-container{
  width:90%;
}
input::placeholder{
  color: #C8D0DA !important;
  font-size: 0.8rem;

}

ul{
    list-style-type: none;
}
.ullist{
  padding: 0px;
  margin-top: 0px;
  overflow-y:scroll;
  z-index:3;
  position: absolute;
  width:83.5%;
  max-height: 14.6rem;
}
.itemcontain{
    background-color:  #F2F4F7;
    padding-top: 8px;
    padding-left: 8px;
    padding-right: 11px;
    width: 99.9%;

}
.item{
    background-color: #F2F4F7;
    padding-top: 8px;
    padding-bottom: 1px;
    padding-left: 8px;
    padding-right: 8px;
    color: #262626
}

.chip {
    font-family: $gm;
    background-color:#2c8eea;
    color: white;
    padding-right: 26px;
    padding-left: 26px;
    padding-top: 6px;
    padding-bottom: 7px;
    border-radius: 4px;
    width: 52px;
    text-align: center;
    margin-right: 8px;
}

textarea:focus, input:focus{
    outline: none;
}

</style>


<style scoped lang="scss">
@import "../../scss/main.scss";  


.sousbar{

  img{
    width:0.8rem;
  }
  h4{
    font-family: $gsb;
    color:#333F63;
    font-size: 0.88rem;
  }
}

.alertlocation{
  border:1px solid#ccc;
  margin-left: 24px;
  width: 84.6%;
  margin-top:0.038 !important;
  z-index: 4;
}

.inp {
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 280px;
  border-radius: 3px;
  overflow: hidden;
}
.inp .label {
  position: absolute;
  top: 20px;
  left: 12px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  pointer-events: none;
}
.inp .focus-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: rgba(0, 0, 0, 0.05);
  z-index: -1;
  -webkit-transform: scaleX(0);
          transform: scaleX(0);
  -webkit-transform-origin: left;
          transform-origin: left;
}
.inp input {
  -webkit-appearance: none;
  -moz-appearance: none;
       appearance: none;
  width: 80%;
  border: 0;
  font-family: inherit;
  padding: 16px 12px 0 12px;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  // background: rgba(0, 0, 0, 0.02);
  box-shadow: inset 0 -0.3px 0 rgba(0, 0, 0, 0.3);
  color: #000;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  background-color:  transparent !important;
}
.inp input:hover {
  // background: rgba(0, 0, 0, 0.04);
  // box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.5);
}
.inp input:not(:placeholder-shown) + .label {
  color: rgba(0, 0, 0, 0.5);
  -webkit-transform: translate3d(0, -12px, 0) scale(0.75);
          transform: translate3d(0, -12px, 0) scale(0.75);
}
.inp {
  input::placeholder {
  opacity: 0; /* Firefox */
}
}
.inp input:focus {
  // background: rgba(0, 0, 0, 0.05);
  outline: none;
  box-shadow: inset 0 -6px 0 $main;
}
// .inp input:focus + .label {
//   color: #0077FF;
//   -webkit-transform: translate3d(0, -12px, 0) scale(0.75);
//           transform: translate3d(0, -12px, 0) scale(0.75);
// }
.inp input:focus + .label + .focus-bg {
  -webkit-transform: scaleX(1);
          transform: scaleX(1);
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
}



._m095vcq{
  font-family: $mn;
}

._ejra3kg{
  font-family: $mn;
  text-decoration: underline;
  padding-left: 10px;
}


#popupsp{
  font-family: $mn;
}

.cbx {
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s ease;
}
.cbx:not(:last-child) {
  margin-right: 6px;
}
.cbx:hover {
  background: rgba(0,119,255,0.06);
}
.cbx span {

  float: left;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  transform: scale(1);
  border: 1px solid #cccfdb;
  transition: all 0.2s ease;
  box-shadow: 0 1px 1px rgba(0,16,75,0.05);
}
.cbx span:first-child svg {
  position: absolute;
  top: 3px;
  left: 2px;
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}
.cbx span:last-child {
  padding-left: 8px;
  line-height: 18px;
  font-size: 14px;
}
.cbx:hover span:first-child {
  border-color: #07f;
}
.inp-cbx {
  position: absolute;
  visibility: hidden;
}
.inp-cbx:checked + .cbx span:first-child {
  background: #07f;
  border-color: #07f;
  animation: wave 0.4s ease;
}
.inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}
body {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  color: #223254;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inline-svg {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  user-select: none;
}
@media screen and (max-width: 640px) {
  body {
    width: auto;
    display: inherit;
    padding: 20px;
  }
  .cbx {
    width: 100%;
    margin-bottom: 4px;
    display: inline-block;
  }
}
@-moz-keyframes wave {
  50% {
    transform: scale(0.9);
  }
}
@-webkit-keyframes wave {
  50% {
    transform: scale(0.9);
  }
}
@-o-keyframes wave {
  50% {
    transform: scale(0.9);
  }
}
@keyframes wave {
  50% {
    transform: scale(0.9);
  }
}


// Styling the radio button of Acheter location search filters 
.switch-field {
	display: flex;
	margin-bottom: 1px;
	overflow: hidden;
}

.switch-field input {
	position: absolute !important;
	clip: rect(0, 0, 0, 0);
	height: 1px;
	width: 1px;
	border: 0;
	overflow: hidden;
}

.switch-field label {
	background-color: #e4e4e4;
	color: rgba(0, 0, 0, 0.6);
	font-size: 14px;
	line-height: 1;
	text-align: center;
	padding: 8px 16px;
	margin-right: -1px;
	border: 1px solid #D4D6DC;
	transition: all 0.1s ease-in-out;
}

.switch-field label:hover {
	cursor: pointer;
}

.switch-field input:checked + label {
  background-color: white;
  // color:white;
  box-shadow: none;
}

.switch-field label:first-of-type {
	border-radius: 4px 0 0 4px;
}

.switch-field label:last-of-type {
	border-radius: 0 4px 4px 0;
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.pricefiltermax{
  margin-left: 1rem;
     p{
      color:#A1A5A8;
      font-family: $gr;
      padding-bottom: 4px;
      font-size: 1rem;
    }
    input{
      border: 2px solid #F1F1F1;
      border-radius: 8px;
      width: 9rem;
      height: 3.5rem;
      padding-left: 12px;
    }
    textarea:focus, input:focus{
    outline: none;
}


}

.pricefiltermin{
    p{
      color:#A1A5A8;
      font-family: $gr;
      padding-bottom: 4px;
      font-size: 1rem;
    }
    input{
      border: 2px solid #F1F1F1;
      border-radius: 8px;
      width: 9rem;
      height: 3.5rem;
      padding-left: 12px;

    }
   input:focus{
    outline: none;
}

}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
	position: absolute;
	left: -9999px;
	width: 0;
	height: 0;
	visibility: hidden;
}

.checkbox-tools:checked + label,
.checkbox-tools:not(:checked) + label{
	position: relative;
	display: inline-block;
	padding: 20px;
	width: 123px;
	line-height: 20px;
	letter-spacing: 1px;
	margin-bottom: 10px;
	text-align: center;
	border-radius: 0px;
	overflow: hidden;
	cursor: pointer;
  font-family: $gsb;
	-webkit-transition: all 300ms linear;
	transition: all 300ms linear; 
}
.checkbox-tools:not(:checked) + label{
  background-color: white;
  color: #4F4F50;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.checkbox-tools:checked + label{
  background-color: transparent;
  color: white;
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:not(:checked) + label:hover{
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:checked + label::before,
.checkbox-tools:not(:checked) + label::before{
	position: absolute;
	content: '';
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
  border-radius: 0px;
  background-color: $main;
	z-index: -1;
}
.checkbox-tools:checked + label,
.checkbox-tools:not(:checked) + label{
  font-size: 0.9rem;
	line-height: 24px;
	display: block;
	padding-bottom: 14px;
}

#leftside{
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 6px;
  font-size: 0.85rem;

}

#rightside{
  border-top-right-radius: 6px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  font-size: 0.85rem;
}

.cancelbtn{
    font-family: $gm;
    color: #B8BBBE;
    border: 2px solid #F1F1F1;
    border-radius: 6px;
    height: 2.5rem;
    width: 5.2rem;
    text-align: center;
    padding-top: 7px;
    cursor: pointer;
    font-size: 0.9rem;
}
.confirmbtn{
  font-family: $gr;
    color: white;
    background-color: $main;
    border-radius: 6px;
    width: 13rem;
    margin-left: auto;
    margin-right: 17px;
    text-align: center;
    padding-top: 10px;
    cursor: pointer;
    font-size: 0.9rem;

}

#filter1{
  left: 17rem;
  top:3.6rem;
  height: 15.5rem;
  width: 23rem;
}

#filter2{
    left: 40rem;
    top: 3.6rem;
    min-height:15rem;
    width: 25rem;
}
#filter3{
  left: 1rem;
  top:3.6rem;
  width: 36.6rem;
}

#filter4{
    left: 37rem;
    top:3.6rem;
    width: 25rem;
}
#filter5{
    left: 45rem;
    top:3.6rem;
    width: 25rem;
}

#filter8{
  left: 30.8rem;
  top:3.6rem;
  min-height:14rem;
  width: 25rem;
}


.ntrfilter{

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.17);
  padding-left: 0.3rem;
  .ntrfilterheading{
    padding-top: 1.4rem;
    h1{
      font-family: $gb;
      color: #4F4F50;
      font-size: 1rem;
      margin-bottom: 0.2rem;
    }
    h5{
      margin: 0px;
      padding: 0px;
      font-family: $gr;
      font-size: 0.85rem;
      color:#A1A5A8;
    }
  }
}

#natureannonceur{
  // background-color: #DEEFFF;
  color: #868D93;
  padding-left: 6px;
  text-align: center;
}


.containofcard:hover{
  cursor:pointer;
}

.mapmobile{
  bottom:0px;
  left: 0px;
}

.sortingdurectionmobile{
    bottom: 4rem;
    right: 2rem;

}

.sortinpricemobile{
    bottom: 4rem;
    right: 4rem;
}

.mapbtn{
  
    display: flex;
    width: 9.8rem;
    height: 3rem;
    background-color: #2C8EEA;
    border-radius: 30px;
    transform: translateY(50%);
    margin: 0 auto;
    cursor: pointer;
    img{
    display: block;
    width: 1.7rem;
    margin-left: 28%;
    margin-right: 7px;
    cursor: pointer;
    }
    p{
      font-family: $ub;
      font-size: 1rem;
      color:white;
      transform: translateY(27%);
      cursor: pointer;
    }
}

.bottomBar{
  width:65%;
  height:6rem;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 29px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  bottom:0px;
  left: 50%;
  transform: translateX(-50%);
}

.heartactive{
  background-image: url("../../assets/Pics/cardhearthover.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 22px;
}
.heart{
  background-image: url("../../assets/Pics/cardheartemoji.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 23px;
}

.listcrds{
  height: 27rem;
  overflow-y: scroll;
  margin-top:33px

}

// styling the scrollbar
.listcrds::-webkit-scrollbar-track
{
	// -webkit-box-shadow: inset 0 0 49px rgb(255, 255, 255);
	background-color: white;
}

.listcrds::-webkit-scrollbar
{
	width: 6px;
	background-color:#EFEFEF;
}

.listcrds::-webkit-scrollbar-thumb
{
  border: 4px solid #DAD8D8;
  border-radius: 2px;
  background-color: #DAD8D8;
}


.cardtime{
    margin-left: auto;
    padding-right: 26px;
  p{
    font-family: $ur;
    color:#A1A5A8;
    font-size: 14px;
    padding-top: 0.4rem;
  }
}


.cpbt{
  font-family: $ur;
  color:#000000;
  border-right: 1.4px solid #C4C4C4;
  line-height: 16px;
  margin-top: 6px;

  img{
  width: 1.5rem;
  margin-right: 5px;
  }
  p{
    font-size: 14px;
    padding-top: 2px;
    padding-right: 8px;
  }
}

.cardspace{
  color:#A1A5A8;
  font-family: $ur;
  padding-top: 6px;
  padding-left: 4px;

}

.cardprice{
  color:#2C8EEA;
  font-family: $mdb;
  font-size: 1.3rem;
  padding-top: 3px;

}

.cardsubadd{
  color:#A1A5A8;
  font-family: $ur;
  padding-top: 6px;
  padding-left: 4px;
}

.cardadd{
    padding-left: 4px;
    padding-top: 6px;
    font-family: $mdb;
    color:#000000;
    font-size: 1.18rem;
}

// heart animation
[class='tght'] {
  position: absolute;
  left: -100vw;
}
[class='tght']:checked + label {
  will-change: font-size;
  animation: heart 1s cubic-bezier(0.17, 0.89, 0.32, 1.49);
}
[class='tght']:checked + label:before, [class='tght']:checked + label:after {
  animation: inherit;
  animation-timing-function: cubic-bezier(0.21, 0.61, 0.35, 1);
}
[class='tght']:checked + label:before {
  will-change: transform, border-width, border-color;
  animation-name: bubble;
}

.ltght {
  align-self: center;
  position: relative;
  color: #aab8c2;
  font-size: 2em;
  cursor: pointer;
}
.ltght:before, .ltght:after {
  position: absolute;
  z-index: -1;
  top: 1rem;
  left: 0.7rem;
  border-radius: 50%;
  content: '';
}
.ltght:before {
  box-sizing: border-box;
  margin: -2.25rem;
  border: solid 2.25rem #e2264d;
  width: 4.5rem;
  height: 4.5rem;
  transform: scale(0);
}

@keyframes heart {
  0%, 17.5% {
    font-size: 0;
  }
}
@keyframes bubble {
  15% {
    transform: scale(1);
    border-color: $main;
    border-width: 2.25rem;
  }
  30%, 100% {
    transform: scale(1);
    border-color: $main;
    border-width: 0;
  }
}



.heartemoji {
  margin-left: auto;
  margin-right: 2rem;
  div{
    width: 1.5rem;
    padding-top: 7px;
  }
}


.cardinfos{
      margin-top: 1rem;
}

.badge{
  height: 2rem;
  width: 8rem;
  background-color: #DEEFFF;
  border-radius: 6px;
  text-align: center;
  font-family: $ur;
  color:#2C8EEA;
  font-size: 0.96rem;
  padding-top: 0.3rem;

  }

.picture{
    height: 12rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    width: 80%;
    margin-left: 1.3rem;
    margin-top: 1rem;
}


hr{
    width: 90%;
    margin: 0 auto;
    margin-top: 8px;
}


.sortingdurection{
  top: 14rem;
  right: 2rem;
}

.sortinprice{
  top: 2.1rem;
  right: 3.2rem;
}

.srtitems:hover{
  background-color: $main;
  cursor: pointer;
}

.founding{
  font-family: $ur;
  color:#4F4F50;
  font-size: 0.93rem;
  padding-top: 0.75rem;
  padding-left: 1rem;
  span{
    color:#2C8EEA;
    font-family: $um;
    text-decoration: underline;
    font-size: 13px;
  }
}

.sorting{
  color:#868D93;
  font-family: $ur;
  font-size: 0.92rem;
  padding-top: 0.75rem;
  padding-left: 1rem;
  span{
    color:#000000;
    padding-left: 0.3rem;
    cursor: pointer;
    font-size: 0.8rem;
    padding-top: 2px;
  }
  .arrowsort{
    width: 0.9rem;
    height: 1.2rem;
    margin-left: 4px;
    cursor: pointer;
  }
  .sortlisting{
    width: 0.9rem;
    height: 1.2rem;
    margin-right: 2rem;
    cursor: pointer;
  }



}

.headingcards{
  margin-top: 1.3px;
  border-top: 1.6px solid #E8E7EC;
  border-bottom: 1px solid #E8E7EC;
  top: 130px;
  position: fixed;
  width: 100%;
  background: white;
  padding-bottom: 16px;
}



.filters{
    border-top-width: 1.4px;
    border-top-color: #E8E7EC;
    position: fixed;
    top: 4rem !important;
    height: 5rem !important;
    width: 100% !important;
}

.showcase {
    position: fixed;
    background: white !important;
    top: 12rem !important;
    width: 100% !important;
}



#pls{
    padding-top: 4px;
    justify-self: start;
}
#slf{
    justify-self: center;
}
.plusdefilters{

  h4{
    font-family: $ur;
    color:#868D93;
    font-size: 14px;
  }

}

// filter 2 css 

.rect{

  cursor: pointer;
  border-radius: 6px;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  border: 1.38px solid #F1F1F1;
  width: 7.3rem;
  height: 2.6em;
  display: table;

  h3{
    padding: 0px;
    font-family: $ur;
    color:#868D93;
    padding-left:26px;
    padding-top: 7px;
    font-size: 12.8px;

  }

}
#naturefiltericon{
  width: 1.6rem;
  position: absolute;
  top: 7px;
}
#pricefiltericon{
  width: 1.2rem;
  position: absolute;
  top: 10px;
}

#sortingicn{
  position: absolute;
  top: 11px;
  right: 13px;

}


// type of ad css
h1 {
  margin: 0 0 0.25em;
}
/* Reset Select */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #DEEFFF;
  background-image: none;
  font-size: 13px;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select */
.select {
    position: relative;
    display: flex;
    width:  11.2em;
    height: 2.8em;
    /* line-height: 3; */
    background: #DEEFFF;
    overflow: hidden;
    border-radius: 6px;
    font-size: 0.9rem;

}
select {
  flex: 1;
  padding-left:1.5rem;
  color: #2C8EEA;
  cursor: pointer;
  font-family: $ur;
}
/* Arrow */
// .select::after {
//     content:url("../../assets/Pics/AdsDotcircle.svg");
//     position: absolute;
//     top: 9px;
//     left: -6px;
//     padding: 0 1em;
//     cursor: pointer;
//     pointer-events: none;
//     -webkit-transition: .25s all ease;
//     -o-transition: .25s all ease;
//     transition: .25s all ease;
//     background-position: center; /* Center the image */
//     background-repeat: no-repeat; /* Do not repeat the image */
//     width: 4px;

// }

// filter of good 3  css 

.good{
    width: 15.9rem;
}

.srfc{
  width: 7rem;
}

#scp{
  position: absolute;
  width: 1.5rem;
  top: 7.2px;
  
}

.map{
  padding-top: 1px;
}

// Search bar css

.search-bar {
    height: 40px;
    width: 245px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    padding: 0 0 0 20px;
    position: relative;
    background: #F2F2F2;
}

.input {
  border: none;
  height: 25px;
  width: 150px;
  color: #A8A8A8;
  background-color: #F2F2F2;
  font-size: 15px;
  font-family: $ur;
  outline: none;
}

.label {
  color: #aaaaaa;
  position: absolute;
  top: 13px;
  pointer-events: none;
  transition: all 0.5s ease;
}

.search-btn {
  background: #2C8EEA;
  border-radius: 20px;
  height: 40px;
  min-width: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  justify-content: center;
  cursor: pointer;
  right: 2px;
  position: absolute;
  transition: all 1s ease;
}

.icon {
  display: inline-flex;
}

.icon-18 {
  width: 18px;
  height: 18px;
}

.highlight {
  width: 0px;
  height: 1px;
  background: $main;
  position: absolute;
  bottom: 8px;
  transition: all 1s ease;
}

.input:focus ~ .highlight {
  width: 150px;
  transition: all 1s ease;
}

@media (min-width: 433px) { 
    .showcase{
    top:9rem !important;
  }

}

@media (max-width: 432px) { 

  .filters{
    display:grid;
    grid-template-columns:  1fr;
    margin-bottom: 4rem;
  }

  .search {
    justify-self: center;
    margin-left: 0rem;
  }
  .notif {
    justify-self: center;
    margin-left: 0px;
    margin-right: 0px;

  }

}


@media (min-width: 320px) { 

 .founding{
   padding-left: 0rem;
   justify-self: center;
 }
  .sorting{
    justify-self: center;
  }

  .picture{
    width:80%;
    margin: 0 auto;
    margin-left: none;
    margin-top: 1rem;
  }

  .cardinfos {
    margin-left: 2rem;
  }


}

@media (min-width: 640px) { 

.picture{
    width: 80%;
    margin-left: 1.3rem;
}

 .founding{
   padding-left: 1rem;
   justify-self: start;
 }
  .sorting{
    justify-self: start;
  }
 
   .cardinfos {
    margin-left: 0rem;
  }

}

@media (min-width: 768px) { 

.bottomBar{
  width:84%;
}
.mapbtn{
  margin-left: 10px;
}
.founding{
  padding-left: 2rem;
}
}

@media (min-width: 1024px) { 
// ----------------------------

.srfc{
  display: none;
}
.good{
  width:14.9rem !important
}
#pieces {
  display: none;
}

  // -------------------------

.cardtime p{
  font-size: 12px;
}
.filters{
  top:4.2rem !important;
  height: 0rem !important;
}
.showcase{
  top:8.3rem !important
}

.headingcards{
  position: relative;
  width: none !important;
  top: 0px;
  padding-bottom: 0px;
  border-bottom: 0px !important;

}
.listcrds{
  margin-top: 0px !important;
}

}

@media (min-width: 1050px) { 
.cardtime p{
  font-size: 15px;
}
}

@media (min-width: 1080px) { 
.srfc{
  display: block;
}

}

@media (min-width: 1200px) { 
#pieces {
  display: block;
}
.good{
  width:15.9rem;
}

}

@media (min-width: 1300px) { 
.listcrds{
  height: 35rem !important;
  overflow-y: scroll;

}

}

@media (min-width: 1400px) { 
.listcrds{
  height: 38rem !important;
  
}

}
@media (min-width: 1500px) { 
.listcrds{
  height: 41rem !important;
  
}
}
@media (min-width: 1600px) { 
.listcrds{
  height: 55rem !important;
  
}
}

@media (min-width: 1700px) { 
.listcrds{
  height: 70rem !important;
  
}
}




// // Popup
// #openPopUp{
//   text-align:center;
//   background-color: #1abc9c;
//   padding: 15px 15px;
//   color: #ffffff;
//   font-weight: 500;
//   font-size: 1.5em;
//   border-radius: 3.5px;
//   text-decoration: none;
//   font-weight: 100;
//   transition:background-color 0.15s linear;
//   -webkit-transition:background-color 0.15s linear;
//   -moz-transition:background-color 0.25s linear;
//   -o-transition:background-color 0.25s linear;
// }
// a#openPopUp:hover{
//   cursor: pointer;
//   background-color: #1abc9e;
// }
// .popup{
//   position: fixed;
//   top: -100vh;
//   top: 0;
//   left: 0;
//   z-index: 9999999;
//   background: rgba(0,0,0, 0.75);
//   width: 100vw;
//   height: 100vh;
//   opacity: 1;

//     -webkit-transition: opacity  0.35s ease;
//     -moz-transition: opacity 0.35s ease;
//     -o-transition: opacity 0.35s ease;
//     transition: opacity 0.35s ease;
// }
// .popup .popUpContainer{
//   width: 53%;
//   max-width: 780px !important;
//   position: fixed; /* To avoid scroll to target */
//   left: 38%;
//   top: 1vh;
//     -webkit-transition: bottom  0.35s ease;
//     -moz-transition: bottom 0.35s ease;
//     -o-transition: bottom 0.35s ease;
//     transition: bottom 0.35s ease;

//   /* Trick to properly center the element by using negative 
//   1/2 length of element as margin left and top */
//   margin-left: -250px;
//   background-color: #ffffff;
//   -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.1);
//   -moz-box-shadow: 0 1px 2px rgba(0,0,0,0.1);
//   box-shadow: 0 1px 2px rgba(0,0,0,0.1);
//   border-radius: 15px;
//   z-index: 9999999; 
// }
// .popup h2{
//   padding: 0.5em;
//   text-align: center;
//   color: #444444;
//   margin: 0;
// }
// .popup img{
//   width: 100%;
//   display: block;
// }
// .popup article{
// 	height: 70vh;
//   background-color: #ffffff;
// }
// /* The cancel button on popup dialog */
// // .popup a.closePopUp{
// //   font-family: verdana;
// //   color: #000000;
// //   position: absolute;
// //   top: 0.2em;
// //   left: 0.375em;
// //   margin: 0;
// //   padding: 5px;
// //   font-weight: bold;
// //   font-size: 1.5em;
// //   text-decoration: none;
// // }
// /* The cancel button on popup dialog */
// .popup a:hover{
//   color: #000000;
// }
// /* When popup is targeted, by clicking on link with #popup in HTML */
// // .popup:target{
// //   opacity: 1;
// //   top: 0;
// // }
// // .popup .closePopUpOutSide{
// //   position: absolute;
// //   left:0;
// //   width: 100%;
// //   height: 100%;
// //   z-index: 9999991; 
// // }
// .popUpContainer{
//   top: 50px;
//     -webkit-transition: top  0.35s ease;
//     -moz-transition: top 0.35s ease;
//     -o-transition: top 0.35s ease;
//     transition: top 0.35s ease;
// }
// // footer

// ._zgc1p6 {
//     -webkit-box-pack: justify !important;
//     -webkit-box-align: center !important;
//     display: flex !important;
//     flex: 0 0 auto !important;
//     border-top: 1px solid rgb(235, 235, 235) !important;
//     padding: 16px 24px !important;
//     align-items: center !important;
//     justify-content: space-between !important;
//     font-size: 16px !important;
//     line-height: 20px !important;
// }
// ._6s3rid {
//     -webkit-box-align: center !important;
//     font-size: 16px !important;
//     display: flex !important;
//     align-items: center !important;
// }
// ._m095vcq {
//     cursor: pointer !important;
//     display: inline-block !important;
//     margin: 0px !important;
//     position: relative !important;
//     text-align: center !important;
//     text-decoration: none !important;
//     width: auto !important;
//     touch-action: manipulation !important;
//     font-size: 16px !important;
//     line-height: 20px !important;
//     font-weight: 600 !important;
//     border-radius: 8px !important;
//     outline: none !important;
//     padding: 14px 24px !important;
//     border: none !important;
//     background: #2C8EEA!important;
//     color: rgb(255, 255, 255) !important;
// }

// // 
// @media  (max-width: 934px) {
//   .popup .popUpContainer{
//     width: 70%;
//     max-width: none;
//     left: 5%;
//     margin-left: 0;
//   }
//   .popup ul{
//     padding: 0 1em 0 1em;
//   }
//   .popup:target .popUpContainer{
//     top: 25px;
//     -webkit-transition: top  0.35s ease;
//     -moz-transition: top 0.35s ease;
//     -o-transition: top 0.35s ease;
//     transition: top 0.35s ease;
//   }
// }
// @media  (max-width: 796px) {
//   .popup .popUpContainer{
//     width: 90%;
//     max-width: none;
//     left: 5%;
//     margin-left: 0;
//   }
//   .popup ul{
//     padding: 0 1em 0 1em;
//   }
//   .popup:target .popUpContainer{
//     top: 25px;
//     -webkit-transition: top  0.35s ease;
//     -moz-transition: top 0.35s ease;
//     -o-transition: top 0.35s ease;
//     transition: top 0.35s ease;
//   }
// }

// .overf {
//     padding-top: 8px !important;
//     padding-bottom: 8px !important;
//     padding-left: 48px !important;
//     padding-right: 48px !important;
//     height: 100% !important;
//     overflow: auto !important;
// }

// .headers {
//     -webkit-box-pack: center !important;
//     border-bottom: 1px solid #EBEBEB !important;
//     padding-top: 24px !important;
//     padding-bottom: 16px !important;
//     padding-left: 24px !important;
//     padding-right: 24px !important;
//     color: #222222 !important;
//     font-size: 18px !important;
//     line-height: 24px !important;
//     font-weight: 600 !important;
  
//     display: flex !important;
//     justify-content: center !important;
//     flex-shrink: 0 !important;
// }
// // X


// ._zpjce3 {
//     position: absolute !important;
//     display: flex !important;
//     left: 24px !important;
// }
// ._187sg6v {
//     appearance: none !important;
//     display: inline-block !important;
//     border-radius: 50% !important;
//     border: none !important;
//     outline: none !important;
//     margin: 0px !important;
//     padding: 0px !important;
//     color: rgb(34, 34, 34) !important;
//     cursor: pointer !important;
//     touch-action: manipulation !important;
//     position: relative !important;
//     background: transparent !important;
// }
// ._e296pg {
//     position: relative !important;
// }

</style>