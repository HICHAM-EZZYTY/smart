<template class="z-0">
<div>

<div class="adddetails" ref="adddetails">
         <Navbar/>

  <div class="header rounded-lg  mr-2 ml-2 h-48  sm:h-48 sm:mr-4 sm:ml-4 md:mr-5 md:ml-5 lg:mr-7 lg:ml-7 xl:mr-9 xl:ml-9 bg-blue-500">

      <h5 class=" welcome capitalize text-2xl pt-10 pl-4 md:pt-32 md:pl-8 lg:pt-24 lg:pl-12 md:text-4xl">bienvenue</h5>
      <h6 class="welcomepara pt-1 pl-4 md:pl-8 lg:pl-12 md:text-xl lg:mb-5">Qu'est-ce que vous voulez faire ?</h6>
            <div class="searchbar  pt-2 pl-4 pr-4   gap-2 grid grid-cols-3 sm:grid-cols-3 md:w-3/4 md:pl-8 lg:pl-12">

                <div 
                v-bind:class="{ activesearch: isActive===1}"
                @click="changetab(1)" 
                class="searchbtns  cursor-pointer rounded-tl-lg inline-block align-middle text-center text-sm">louer</div>
                <div 
                v-bind:class="{ activesearch: isActive===2}"
                @click="changetab(2)" 
                class="searchbtns cursor-pointer inline-block align-middle text-center text-sm">acheter</div>
                <div 
                v-bind:class="{ activesearch: isActive===3}"
                @click="changetab(3)" 
                class="searchbtns  cursor-pointer rounded-tr-lg inline-block align-middle text-center text-sm">neuf</div>

            </div>

            <div class="form pr-4 pl-4 md:grid md:grid-cols-3 md:col-gap-2 md:w-3/4 md:pl-8 lg:pl-12 lg:grid-cols-12 lg:w-full lg:col-gap-0 ">
                <div class="absolute pin-r pin-t mt-3 mr-4 ">
                <img class="ml-3" src="../../assets/Pics/searchlocation.svg">
                </div>
                <input type="text" class="w-full h-12 mb-1 pl-12 text-sm md:col-span-2 lg:col-span-5"  placeholder=" Dans quelle ville ? Quartier ....">
               
                <div class="absolute pin-r pin-t mt-3 mr-4 md:hidden">
                <img  style="height: 1.4rem;" class="ml-3" src="../../assets/Pics/searcheuro.svg">
                </div>


                <input type="number" id="bdgt" class="w-full h-12 mb-1 pl-12 text-sm  md:w-full md:col-span-1 lg:col-span-2 lg:ml-2"  placeholder=" Votre budget max ? ">


                <div class="dropdown w-full h-12 md:col-span-2 lg:col-span-3">
                      <div class="absolute pin-r pin-t mt-3 mr-4 z-40">
                      <img  style="height: 1.4rem;" class="ml-3" src="../../assets/Pics/searchlisted.svg">
                      </div>
                    <input class="dropdown-toggle h-12 inline-block align-middle" type="text">
                    <div class="dropdown-text h-12"><p class="inline-block align-middle ml-8">{{selecteditem}}</p></div>
                    <ul class="dropdown-content w-full h-26">
                      <li v-for="(item, index) in Items" :key="index"  @click="pushtoselecteditems(index)" class="dropdown-text-list text-sm border-b"><a href="#">{{item}}</a></li>
                    </ul>
                </div>

                <button type="submit" class=" btn-submt w-full  hover:bg-blue-700 text-center text-white h-12 lg:col-span-2 ">
                    Rechercher
                </button>


            </div>

            <div class="badges grid grid-cols-3 gap-1 mt-2 ml-4 mr-4  sm:grid-cols-5 md:grid-cols-10 sm:w-4/5 md:w-3/4 md:pl-4  lg:pl-8">

                <div class="btn-badgeitem text-center text-white inline-block align-middle leading-4 rounded-sm h-4 md:col-span-2">
                        <img  class="icn-icn-badge block float-left mr-1 ml-1 align-middle " src="../../assets/Pics/timemoney.svg" alt="par temps de trajet">
                        <p class="inline text-left">Par temps de trajet</p>
                </div>
                <div @click="showmap()" class="btn-badgeitem  btn-gld text-center text-white inline-block align-middle leading-4 rounded-sm h-4 md:col-span-2">
                        <img  class="icn-icn-badge block float-left mr-1 ml-1 align-middle " src="../../assets/Pics/dessin.svg" alt="Dessin sur la carte">
                        <p class="inline text-left">Dessin sur la carte</p>
                </div>
                <div class="btn-badgeitem  badgeitem-sp text-center text-white inline-block align-middle leading-4 rounded-sm h-4 md:col-span-2">
                        <img  class="icn-icn-badge block float-left mr-1 ml-1 align-middle" src="../../assets/Pics/circle.svg" alt="zone d’or">
                        <p class="inline text-left">zone d’or</p>
                </div>
                <div class="btn-badgeitem btn-gld  text-center text-white inline-block align-middle leading-4 rounded-sm h-4 md:col-span-2">
                         <img  class="icn-icn-badge block float-left mr-1 ml-1 align-middle" src="../../assets/Pics/bawsala.svg" alt="Point d’intérêt">
                        <p class="inline text-left">Point d’intérêt</p>
                </div>
                <div class="btn-badgeitem text-center text-white inline-block align-middle leading-4 rounded-sm h-4 md:col-span-2">
                        <img  class="icn-icn-badge block float-left mr-1 ml-1 align-middle" src="../../assets/Pics/advancedSearch.svg" alt="Recherche avancée">
                        <p class="inline text-left"> Recherche avancée</p>
                </div>  
            </div>
  </div>


<!-- start of the second section part  -->

        <div class="container-scndpart mr-2 ml-2 mt-8 grid grid-cols-1 md:mt-12 sm:mr-4 sm:ml-4 md:mr-5 md:ml-5 lg:mr-7 lg:ml-12 xl:mr-9 xl:ml-9 lg:grid-cols-8">

            <div class="leftside sm:mb-10 lg:col-span-4 lg:ml-2">

              <div class="lefside-header">
                  <h3 class="text-center container-scndpart-heading sm:mt-4  text-base sm:text-xl lg:text-left lg:mt-1">Les villes plus demandés de mois</h3>
                  <h4 class="text-center container-scndpart-pg sm:mb-8 text-xs  sm:text-sm lg:text-left">les environs sont les meilleurs pour votre style de vie</h4>
              </div>

              <div class="cardcities grid grid-col1 sm:grid-col2 sm:gap-4  sm:pl-10 sm:pr-10 md:pl-16 md:pr-16">

                <div class="cardcity  mt-4 mb-4 pr-4 pl-4 sm:my-0">
                    <div class=" piccity-container   relative rounded overflow-hidden shadow-sm">
                        <img  class=" picofthecity w-full  h-64" src="../../assets/Pics/paris.jpg" alt="picture of paris in france">
                        <div class="cardbadge absolute">
                         <span class="cityname text-white-500 capitalize">Paris</span>
                        </div>
                         <div class="cardbadge2 absolute">
                         <span class="price text-white-500 ">12230€/m²</span>
                        </div>
                    </div>
                </div>

                <div class="cardcity  mt-4 mb-4 pr-4 pl-4 sm:my-0">
                    <div class=" piccity-container   relative rounded overflow-hidden shadow-sm">
                        <img  class=" picofthecity w-full  h-64 " src="../../assets/Pics/marseille.jpg" alt="picture of marseille city in france">
                        <div class="cardbadge mrs absolute">
                         <span class="cityname  text-white-500 capitalize">Marseille</span>
                        </div>
                         <div class="cardbadge2 mrs absolute">
                         <span class="price text-white-500 ">3430€/m²</span>
                        </div>
                    </div>
                </div>

                <div class="cardcity  mt-4 mb-4 pr-4 pl-4 sm:my-0">
                    <div class=" piccity-container   relative rounded overflow-hidden shadow-sm">
                        <img  class=" picofthecity w-full  h-64" src="../../assets/Pics/nice.jpg" alt="picture of nice city in france">
                        <div class="cardbadge  mrs absolute">
                         <span class="cityname text-white-500 capitalize">Nice</span>
                        </div>
                         <div class="cardbadge2  mrs absolute">
                         <span class="price text-white-500 ">5430€/m²</span>
                        </div>
                    </div>
                </div>

                <div class="cardcity  mt-4 mb-4 pr-4 pl-4 sm:my-0">
                    <div class=" piccity-container   relative rounded overflow-hidden shadow-sm">
                        <img  class=" picofthecity w-full  h-64" src="../../assets/Pics/lyon.jpg" alt="picture of nice city in france">
                        <div class="cardbadge  mrs absolute">
                         <span class="cityname text-white-500 capitalize">Lyon</span>
                        </div>
                         <div class="cardbadge2  mrs absolute">
                         <span class="price text-white-500 ">7880€/m²</span>
                        </div>
                    </div>
                </div>

              </div>

            </div>

            <div class="rightside  lg:col-span-4 lg:ml-8 xl:ml-2">
              <div class="rightside-header ">
                  <h3 class="text-center container-scndpart-heading  text-base sm:text-xl  lg:text-left lg:mt-1">Recommandé pour vous</h3>
                  <h4 class="text-center container-scndpart-pg  text-xs sm:text-sm lg:text-left">les meilleurs offres pour vous </h4>
              </div>
              <div class="cardsofhouses grid grid-col1 sm:grid-col1 sm:gap-2 mt-4">


              <!-- first house  -->

                <div class="houses relative w-full lg:w-ml-0">
                <img class="playshape absolute" src="../../assets/Pics/playshape.svg" alt="icon géometrique format svg">
                  <div class="contentwrapp grid  grid-cols-4">

                      <div class="dahouse col-span-1 relative rounded overflow-hidden shadow-sm">
                      <img  class="picofthehouseimg w-full	 h-20" src="../../assets/Pics/ylwhouse.jpg" alt="picture of a yellow house in france">
                      </div>

                      <div class="infosofthehouse col-span-3 ml-2 mt-2">
                        <h4 class="infosofthehouseheading mt-2">437 000 €</h4>
                        <h5 class="infosofthehousesubhead text-sm mt-1">Maison / Villa</h5>
                        <p class="infosofthehousesubpara text-xs mt-1">Quartier Le Pré Gentil, Rosny-sous-Bois</p>

                        <div class="detailofthehouse flex mt-2">

                          <div class="pieces flex flex-initial mr-2 ">
                              <img src="../../assets/Pics/doorhome.svg" class="flex-initial">
                              <p class="flex-initial text-xs">5 pièces</p>
                          </div>

                          <div class="pieces flex flex-initial mr-1">
                              <img src="../../assets/Pics/bedroomhome.svg" class="flex-initial">
                              <p class="flex-initial text-xs">3 chambres</p>
                          </div>


                          <div class="pieces flex flex-initial ">
                              <img src="../../assets/Pics/leftalignehome.svg" class="flex-initial">
                              <p class="flex-initial text-xs">110m²</p>
                          </div>
                        </div>
                      </div>
                    
                  </div>

                </div>


                <!-- house two  -->


                <div class="houses  relative w-full">
                <img class="playshape absolute" src="../../assets/Pics/playshape.svg" alt="icon géometrique format svg">
                  <div class="contentwrapp grid  grid-cols-4">

                      <div class="dahouse col-span-1 relative rounded overflow-hidden shadow-sm">
                      <img  class="picofthehouseimg w-full	 h-20" src="../../assets/Pics/homehouse2.jpg" alt="picture of a  house in france">
                      </div>

                      <div class="infosofthehouse col-span-3 ml-2 mt-2">
                        <h4 class="infosofthehouseheading mt-2">983 200 €</h4>
                        <h5 class="infosofthehousesubhead text-sm mt-1">Maison / Villa</h5>
                        <p class="infosofthehousesubpara text-xs mt-1">Pasteur Montparnasse, Paris 15ème</p>

                        <div class="detailofthehouse flex mt-2">

                          <div class="pieces flex flex-initial mr-2 ">
                              <img src="../../assets/Pics/doorhome.svg" class="flex-initial">
                              <p class="flex-initial text-xs">12 pièces</p>
                          </div>

                          <div class="pieces flex flex-initial mr-1">
                              <img src="../../assets/Pics/bedroomhome.svg" class="flex-initial">
                              <p class="flex-initial text-xs">8 chambres</p>
                          </div>


                          <div class="pieces flex flex-initial ">
                              <img src="../../assets/Pics/leftalignehome.svg" class="flex-initial">
                              <p class="flex-initial text-xs">10m²</p>
                          </div>
                        </div>
                      </div>
                    
                  </div>

                </div>

                <!-- house three  -->


                
                <div class="houses  relative w-full">
                <img class="playshape absolute" src="../../assets/Pics/playshape.svg" alt="icon géometrique format svg">
                  <div class="contentwrapp grid  grid-cols-4">

                      <div class="dahouse col-span-1 relative rounded overflow-hidden shadow-sm">
                      <img  class="picofthehouseimg w-full	 h-20" src="../../assets/Pics/homehouse3.jpg" alt="picture of a yellow house in france">
                      </div>

                      <div class="infosofthehouse col-span-3 ml-2 mt-2">
                        <h4 class="infosofthehouseheading mt-2">143 500 €</h4>
                        <h5 class="infosofthehousesubhead text-sm mt-1">Maison / Villa</h5>
                        <p class="infosofthehousesubpara text-xs mt-1">Bourdeaux Lad France - Michael Belle </p>

                        <div class="detailofthehouse flex mt-2">

                          <div class="pieces flex flex-initial mr-2 ">
                              <img src="../../assets/Pics/doorhome.svg" class="flex-initial">
                              <p class="flex-initial text-xs">3 pièces</p>
                          </div>

                          <div class="pieces flex flex-initial mr-1">
                              <img src="../../assets/Pics/bedroomhome.svg" class="flex-initial">
                              <p class="flex-initial text-xs">1 chambres</p>
                          </div>


                          <div class="pieces flex flex-initial ">
                              <img src="../../assets/Pics/leftalignehome.svg" class="flex-initial">
                              <p class="flex-initial text-xs">59m²</p>
                          </div>
                        </div>
                      </div>
                    
                  </div>

                </div>


                <!-- house fourth  -->


              
                
                <div class="houses  relative w-full">
                <img class="playshape absolute" src="../../assets/Pics/playshape.svg" alt="icon géometrique format svg">
                  <div class="contentwrapp grid  grid-cols-4">

                      <div class="dahouse col-span-1 relative rounded overflow-hidden shadow-sm">
                      <img  class="picofthehouseimg w-full	 h-20" src="../../assets/Pics/homehouse4.jpg" alt="picture of a yellow house in france">
                      </div>

                      <div class="infosofthehouse col-span-3 ml-2 mt-2">
                        <h4 class="infosofthehouseheading mt-2">840 000 €</h4>
                        <h5 class="infosofthehousesubhead text-sm mt-1">Appartement</h5>
                        <p class="infosofthehousesubpara text-xs mt-1">Les Chalets Aubin-Saint Etienne, Toulouse</p>

                        <div class="detailofthehouse flex mt-2">

                          <div class="pieces flex flex-initial mr-2 ">
                              <img src="../../assets/Pics/doorhome.svg" class="flex-initial">
                              <p class="flex-initial text-xs">6 pièces</p>
                          </div>

                          <div class="pieces flex flex-initial mr-1">
                              <img src="../../assets/Pics/bedroomhome.svg" class="flex-initial">
                              <p class="flex-initial text-xs">3 chambres</p>
                          </div>


                          <div class="pieces flex flex-initial ">
                              <img src="../../assets/Pics/leftalignehome.svg" class="flex-initial">
                              <p class="flex-initial text-xs">92,7m²</p>
                          </div>
                        </div>
                      </div>
                    
                  </div>

                </div>



              </div>


            </div>
            
        </div>


        <div class="homenewsletter w-full h-24 shadow-md rounded-none relative  mt-6 mb-6 sm:h-40  sm:w-11/12 sm:rounded-lg">
        <img class="shapesicnsitem1 absolute opacity-100" src="../../assets/Pics/newslettericn1.svg" alt="icon1 géometrique format svg">
        <img class="shapesicnsitem2 absolute opacity-100 w-2" src="../../assets/Pics/newslettericn2.svg" alt="icon2 géometrique format svg">
        <img class="shapesicnsitem3 absolute opacity-100 w-6" src="../../assets/Pics/newslettericn3.svg" alt="icon3 géometrique format svg">
        <img class="shapesicnsitem4 absolute opacity-100 w-4" src="../../assets/Pics/newslettericn4.svg" alt="icon4 géometrique format svg">
        <img class="shapesicnsitem5 absolute opacity-100 w-2 hidden" src="../../assets/Pics/newslettericn5.svg" alt="icon5 géometrique format svg">
        <img class="shapesicnsitem6 absolute opacity-100 w-8 " src="../../assets/Pics/newslettericn6.svg" alt="icon6 géometrique format svg">
        <img class="shapesicnsitem7 absolute opacity-100 w-4 hidden" src="../../assets/Pics/newslettericn8.svg" alt="icon7 géometrique format svg">


        <div class="newletterform">
        
        <h3 id="nwsltrh" class="text-center container-scndpart-heading  pt-3  text-sm sm:mt-4 sm:text-lg  sm:pt-6  sm:mb-1  lg:text-center lg:mt-1 ">Qu'est-ce que vous attends !!!</h3>
        <h4 id="nwsltrp" class="text-center newsletter-pg sm:mb-6 text-xs  sm:text-sm  sm:mt-1  lg:text-center">trouvez la maison de vos rêves maintenant</h4>

        <div class="newsletterforminput  mt-8">

          <!-- w-3/4 -->

        <input type="text"  class="w-11/12 nwsletterinpt bg-transparent	 inline focus:outline-none focus:bg-white focus:shadow-outline focus:border-blue-100" placeholder="Entrer votre Email" name="email" id="email">
        <button type="submit" class="w-6/12 hidden nwsletterbtn uppercase inline sm:text-lg lg:text-2xl">S'inscrire </button>

        </div>



        </div>
        </div>


        <div class="advantagessection mt-8  lg:mt-24">


          <div class="advantagessectionheading">
          <h3 class="text-center container-scndpart-heading  text-base sm:text-xl  lg:text-center lg:mt-1 ">Trouver votre logement </h3>
          <h4  id="advantagessectionheadingpara" class="text-center container-scndpart-pg  text-xs sm:text-sm lg:text-center ">découvrir votre quartier de futur dés maintenant </h4>
          </div>

          <div class="sectionwrapper grid grid-cols-1 md:grid-cols-2">

            <div class="collagewrapper w-full md:ml-8 md:mt-2">
              
              <div class="wrapp relative">
                <img class="collage1 m-0 m-auto  block mt-4 relative w-3/4 " src="../../assets/Pics/collage.svg" alt="picture of collage building format svg">
                <img class="collage2 m-0 m-auto  block mt-4  w-3/4 " src="../../assets/Pics/homepagecollage2.svg" alt="picture of collage building format svg">
              </div>

            </div>

            <div class="collageinfos mt-24 pt-6  w-3/4  m-0 m-auto sm:pt-10 md:pt-6 md:mt-4 lg:mt-10">
              <p class="collagepara text-left lg:mb-2">Vous pouvez explorer les fonctionnalités que nous fournissons avec plaisir et avoir les services  de  chaque fonctionnalité.</p>
                  <div class="collageparaitems mt-2 w-full lg:mb-1 lg:mt-4  xl:mb-2">
                  <img class="w-4 inline-block " src="../../assets/Pics/homecollagevalid.svg" alt="picture of collage building format svg">
                    <p class="collageparaitemspara inline-block ml-2">Acheter un appartement</p>
                  </div>

                  <div class="collageparaitems pt-1 w-full lg:mb-1 xl:mb-2">
                  <img class="w-4 inline-block " src="../../assets/Pics/homecollagevalid.svg" alt="picture of collage building format svg">
                    <p class="collageparaitemspara inline-block ml-2">Acheter une maison</p>
                  </div>

                  <div class="collageparaitems pt-1 w-full lg:mb-1 xl:mb-2">
                  <img class="w-4 inline-block " src="../../assets/Pics/homecollagevalid.svg" alt="picture of collage building format svg">
                    <p class="collageparaitemspara inline-block ml-2">Acheter un logement neuf</p>
                  </div>

                  <div class="collageparaitems pt-1 w-full lg:mb-1 xl:mb-2">
                  <img class="w-4 inline-block " src="../../assets/Pics/homecollagevalid.svg" alt="picture of collage building format svg">
                    <p class="collageparaitemspara inline-block ml-2">Acheter un terrain</p>
                  </div>

                  
                  <div class="collageparaitems pt-1 w-full lg:mb-1 xl:mb-2">
                  <img class="w-4 inline-block " src="../../assets/Pics/homecollagevalid.svg" alt="picture of collage building format svg">
                    <p class="collageparaitemspara inline-block ml-2">Louer une maison</p>
                  </div>

                  
                  <div class="collageparaitems pt-1 w-full lg:mb-2">
                  <img class="w-4 inline-block " src="../../assets/Pics/homecollagevalid.svg" alt="picture of collage building format svg">
                    <p class="collageparaitemspara inline-block ml-2">Louer un appartement</p>
                  </div>
            </div>
          </div>
        </div>



        <div class="marker relative w-11/12 mt-10 w-5/6 m-0 m-auto md:mt-16 ">
        <img class="maplocation w-1/5  absolute lg:w-1/6  mapicns" src="../../assets/Pics/maplocation.svg" alt="picture of map location">
        <img class="maptrain w-8  absolute md:w-12  lg:w-16  mapicns" src="../../assets/Pics/maptrain.svg" alt="picture of train in map location">
        <img class="mapschool w-8  absolute md:w-12  lg:w-16 mapicns" src="../../assets/Pics/mapschool.svg" alt="picture of school in map location">
        <img class="mappharmacie w-8  absolute md:w-12 lg:w-16 mapicns " src="../../assets/Pics/mappharmacie.svg" alt="picture of pharmacie in map location">
        <img class="mapboutique w-8  absolute md:w-12  lg:w-16 mapicns" src="../../assets/Pics/mapboutique.svg" alt="picture of boutique in map location">
        <img class="maptramway w-8  absolute md:w-12  lg:w-16 mapicns" src="../../assets/Pics/maptramway.svg" alt="picture of trampway in map location">

        <img class="maptramway2 w-8  absolute hidden md:w-12  md:block lg:w-16 mapicns" src="../../assets/Pics/maptramway.svg" alt="picture of trampway in map location">
        <img class="mapschool2 w-8  absolute  md:w-12  lg:w-16 mapicns" src="../../assets/Pics/mapschool.svg" alt="picture of school in map location">

        <div class="findimmobilier">

        <h3   class="text-center findheader container-scndpart-heading  pt-4  text-xs  sm:text-lg  sm:pt-6  sm:mb-1  lg:text-center lg:mt-1 ">Découvrez l'environnement de votre  immobilier !!!</h3>
        <h4 class="text-center findpg newsletter-pg text-xs  sm:text-sm  sm:mt-1  lg:text-center">découvrez les commerces,écoles,pharmacies, transports...</h4>
        <div class="newsletterforminput  mt-8">

        <input type="text"  class="w-11/12 nwsletterinpt  findinpt bg-transparent	rounded-md inline focus:outline-none focus:bg-white focus:shadow-outline focus:border-blue-100" placeholder="Quartier , ville" name="email" id="email">
        <button type="submit" class="w-6/12 hidden nwsletterbtn findbtn uppercase  rounded-md inline sm:text-lg lg:text-2xl">Trouver</button>
        
        <img id="findimblicn1" class="shapesicnsitem4 absolute opacity-100 w-4" src="../../assets/Pics/newslettericn4.svg" alt="icon4 géometrique format svg">
        <img id="findimblicn2" class="shapesicnsitem2 absolute opacity-100 w-3" src="../../assets/Pics/newslettericn2.svg" alt="icon2 géometrique format svg">
        <img id="findimblicn3" class="shapesicnsitem3 absolute opacity-100 w-6" src="../../assets/Pics/newslettericn3.svg" alt="icon3 géometrique format svg">

        <img id="findimblicn4" class="absolute opacity-100 w-4" src="../../assets/Pics/newslettericn4.svg" alt="icon4 géometrique format svg">
        <img id="findimblicn5" class=" absolute opacity-100 w-3" src="../../assets/Pics/newslettericn2.svg" alt="icon2 géometrique format svg">
        <img id="findimblicn6" class=" absolute opacity-100 w-6" src="../../assets/Pics/newslettericn3.svg" alt="icon3 géometrique format svg">

        </div>

        </div>

        </div>

        <div class="footer mt-32">

            <div class="footerheader w-10/12 grid grid-cols-2 sm:grid-cols-4 m-0 m-auto ">

              <div class="footer1 pr-1">
                <img class=" opacity-100 w-32" src="../../assets/Pics/Logo.svg" alt="smartzone logo">
                <p class="footer-txt mt-3 text-left">À propos de nous</p>
                <p class="footer-txt mt-3 text-left">Partenaires</p>
                <p class="footer-txt mt-3 text-left">Nous contacter</p>
                <p class="footer-txt mt-3 text-left">Nous recrutons</p>
              </div>

              <div class="footer2 pr-1 pt-2 ml-4">
                <h1 class="footer-heading ">Support</h1>
                <p class="footer-txt mt-3 text-left">Documentation</p>
                <p class="footer-txt mt-3 text-left">Sécurtié</p>
                <p class="footer-txt mt-3 text-left">FAQ’s</p>
              </div>

              <div class="footer2 mt-5 sm:mt-0 sm:pt-2 ">
                <h1 class="footer-heading ">L’entreprise</h1>
                <p class="footer-txt mt-3 text-left">Besoin d'aide ?</p>
                <p class="footer-txt mt-3 text-left">Newsroom</p>
                <p class="footer-txt mt-3 text-left">politique de cookies</p>
                <p class="footer-txt mt-3 text-left">Politique de Confidentialité</p>

              </div>

              <div class="footer2  mt-5  ml-4  sm:mt-0 sm:pt-2">
                <h1 class="footer-heading ">Legal</h1>
                <p class="footer-txt mt-3 text-left">GDPR engagement</p>
                <p class="footer-txt mt-3 text-left">Conditions d'utilisation</p>
              </div>

            </div>


            <div class="footer-ftr w-full m-auto m-0 mt-8">
              <h6 class="footer-ftr-heading text-center mt-12 lg:mt-24">Smartzone</h6>
              <h3 class="footer-ftr-subheading text-center mt-2 mb-8">Copyright © 2020  smartzone Ltd. All rights reserved.</h3>
            </div>




        </div>
        
</div>

   <ExploreNeighbor
          v-if="neighborpop"
          @closetemptrajet="closeneighborpop"   
    />


</div>

</template>

<script>
import Navbar  from '../../components/Navbar'
import ExploreNeighbor from '../../components/Filter_speciaux/Exploretheneighborhood'



export default {
  name: 'Homepage',
   components: {
    Navbar,
    ExploreNeighbor


    },
  props: {
    msg: String
  },
  data() {
      return {
          neighborpop:false,
          isActive:3,
          Items:["Maison & Appartements","Terrain","Loft","Parking/Box","Hôtel particulier","Chateau","Batiment","Immeuble","Boutique","Local commercial","Bureau"],
          selecteditem:'Maison & Appartements',
      }

    },
    methods: {

    changetab: function(n) {
        this.isActive=n;
    },
    pushtoselecteditems:function(b){
        console.log(b)
        this.selecteditem=this.Items[b];
    },
    showmap:function(){
      this.$refs.adddetails.style.display="none"
      this.neighborpop=true
    },
    closeneighborpop:function(){
      this.$refs.adddetails.style.display="block"
      this.neighborpop=false
    },

}
}
</script>

<style  scoped lang="scss">
@import "../../scss/main.scss";

.footer-ftr-heading {

font-family: $ub;
font-size: 1rem;
line-height: 19px;
color: #222222;

}

.footer-ftr-subheading {

font-family: $um;
font-size: 0.76rem;
line-height: 19px;
color: #73738D;

}


.footer-heading{
font-family: $um;
font-size: 1rem;
line-height: 13px;
display: flex;
align-items: center;
color: #222222;
}

.footer-txt{
    font-family: $ur;
    font-size: 0.85rem;
    line-height: 13px;
    color: #73738D;
}
#findimblicn1{
    top: 35%;
    left: 3%;
    display: none;
}
#findimblicn2{
    top: 14%;
    left: 3%;
    display: none;
}
#findimblicn3{
    top: 62%;
    left: 4%;
    display: none;

}

#findimblicn4{
    top: 14%;
    right: 3%;
    display: none
}
#findimblicn5{
    top: 72%;
    right: 7%;
    display: none;
}
#findimblicn6{
    top: 38%;
    right: 4%;
    display: none

}


.findinpt{
    margin-left: -20px;
    display: inline-block;
    cursor: pointer;
}

.findbtn{
      vertical-align: top;
      box-shadow: 0px 8px 40px rgba(44, 142, 234, 0.34);
      margin-left: -20px;
      display: inline-block;
      cursor: pointer;
  }

.findimmobilier{
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 100%;
    position: absolute;
    height: 7rem;
    top: 87%;
    margin: auto;
    left: 0;
    right: 0;
    // margin-bottom: 5rem;
}

.findheader{

  font-size: 0.63rem;

}

.findpg{
  font-size: 0.60rem;
}


.mapschool2{  

    position: absolute;
    left: 85%;
    top: 6%;

}

.maptramway{
    position: absolute;
    left: 72%;
    top: 45%;
}

.maptramway2{
    position: absolute;
    left: 20%;
    top: 5%;
}

.maplocation{
    position: absolute;
    right: 53%;
    top: 14%;
}

.mapboutique{
    position: absolute;
    left: 54%;
    top: 48%;

}

.mapschool{
    position: absolute;
    left: 6%;
    top: 45%;
}

.maptrain{
    position: absolute;
    left: 4%;
    top: 2%;
}

.mappharmacie{
    position: absolute;
    left: 53%;
    top: 4%;
}
.marker{

    background-image: url("../../assets/Pics/mapmarker.svg");
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
    border-radius: 6px;
    height: 10rem;
}

.collageparaitemspara{
  font-family: $rr;
  font-size: 0.8rem;
  color:#4F5665
}

.collagepara{
font-family: $ur;
font-size: 0.78rem;
line-height: 22px;
color: #4F5665;
}

.collage2{
    position: absolute;
    top: 58px;
    width: 46%;
    left: 50px;
}

#advantagessectionheadingpara{
  color:#6E7A81;
  font-family: $ur;
}

.nwsletterinpt{
  border: 0.4px solid #2C8EEA;
  color:#B2BBBF;
  font-family: $ur;
  height: 1.6rem;


}

.nwsletterbtn{
    display: inline-block;
    // width: 4rem;
    height: 1.62rem;
    background-color: #2C8EEA;
    color: white;
    font-family: $ub;
    font-size: 0.46rem;
    vertical-align: middle;
    margin-bottom: 3px;
    letter-spacing: 0.1em;

}

.nwsletterinpt::placeholder{
  color:#B2BBBF;
  font-family: $ur;
  padding-left: 4%;  
  font-size: 0.7rem;
  letter-spacing: 0.07em;

}
input:focus{
    outline: none;
}

.newsletterforminput{

    // margin-top: 0.7rem;
    // margin-left: 20%;
    // margin-right: 6%;
    display: flex;
    margin: 0 auto;
    width: 63%;
    margin-top: 0.7rem;
}
.newsletter-pg{
font-family: $ur;
line-height: 8px;
color: #A6A6A6;
}

.homenewsletter{
background: rgba(222, 239, 255, 0.4);
display: block;
margin: 0 auto;
margin-top: 1.3rem;
margin-bottom: 1.3rem;
}

.shapesicnsitem1{
    top: -14px;
    left: 23px;
    width: 1.7rem;
}
.shapesicnsitem2{
    top: 45px;
    left: 11px;
}
.shapesicnsitem3{
    top: 76px;
    left: 12px;
}
.shapesicnsitem4{
    top: 22px;
    left: 28px;
}
.shapesicnsitem5{
    right: 27px;
    top: 19px;

}
.shapesicnsitem6{
   right: 52px;
   top: -20px;
}
.shapesicnsitem7{

    right: 58px;
    top: 46px;
}

.detailofthehouse{
  p{
    font-family: $ul;
  }
}

.infosofthehouseheading{
  font-family: $ub;
  color: #000000;
}
.infosofthehousesubhead{
  font-family: $um;
  color: #000000;
}
.infosofthehousesubpara{
  font-family: $ur;
  color: #A6A6A6;
  font-size: 0.7rem;
}

.picofthehouseimg{
    height: 8rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-left: 0.3rem;
    border-radius: 18px;
}
.playshape{
    top: -14px;
    right: 23px;
    width: 1.7rem;
}

.houses{
    // width: 18rem;
    height: 8rem;
    border: 1px solid rgba(44, 142, 234, 0.4);
    box-sizing: border-box;
    border-radius: 20px;
    margin: 0 auto;
    margin-bottom: 13px;

}

.cardbadge{
    position: absolute;
    top: 0px;
    right: 0px;
    color: white;
    padding-left: 30px;
    padding-right: 30px;
    background: rgba(44, 142, 234, 0.4);
    mix-blend-mode: difference;
    border-radius: 0px 30px;
    .cityname{
      font-family: $ub;
      font-size: 0.99rem;
      
    }
}

.cardbadge2{
    position: absolute;
    bottom: 0px;
    left: 0px;
    color: white;
    padding-left: 25px;
    padding-right: 25px;
    background: rgba(44, 142, 234, 0.4);
    mix-blend-mode: difference;
    border-radius: 0px 30px;
    .price {
      font-family: $um;
      font-size: 0.85rem;
    }
}

.mrs{
  background: rgba(44, 142, 234, 0.4);
mix-blend-mode: normal;
border-radius: 0px 30px;
}

.piccity-container{
  border-radius: 1.8rem;
}

.container-scndpart-heading{
font-family: $mb;
line-height: 33px;
color: #000000;
}

.container-scndpart-pg{
font-family: $mr;
line-height: 23px;
color: #A6A6A6;
}

.cityname{

}


.icn-icn-badge{
    height: 10px;
    width:10px;
}

.icn-btn-badge::nth-child(1){
height: 8px;
width: 8px;
}

.btn-badgeitem{
    background-color: $main;
    font-family: $ur;
    font-size: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.btn-gld{
    background-color: #FF9376;
}
.btn-submt {
    background-color: $main;
    font-family:$mb;
    font-size:0.9rem;

}

.dropdown-text-list{
  color: #213142;
  font-family:$mr;
  font-size:0.775rem;

}

.dropdown {
  position: relative;
  display: inline-block;
  text-align: left;
}

.dropdown-text {
  color: #213142;
  font-family:$mr;
  font-size:0.76rem;
  cursor: pointer;
  position: absolute;
  text-indent: 10px;
  line-height: 46px;
  background-color: $w;
  width: 100%;
}

.dropdown-text:after {

    position: absolute;
    right: 16px;
    top: 22px;
    content: '';
    width: 0px;
    height: 0px;
    background-image: url("../../assets/Pics/searchdropdownicon.svg");
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    height: 8px;
    width: 12px;
    cursor: pointer;

}

.dropdown-text,
.dropdown-content a {
  color: #333;
  text-shadow: 0 1px #fff;
}

.dropdown-toggle {
  font-size: 0;
  z-index: 1;
  cursor: pointer;
  position: absolute;
  top: 0;
  border: none;
  padding: 0;
  margin: 0 0 0 1px;
  background: transparent;
  text-indent: -10px;
  width: 100%;
}

.dropdown-toggle:focus {
  outline: 0;
}

.dropdown-content {
  -webkit-transition: all .25s ease;
  -moz-transition: all .25s ease;
  -ms-transition: all .25s ease;
  -o-transition: all .25s ease;
  transition: all .25s ease;
  list-style-type: none;
  position: absolute;
  top: 32px;
  padding: 0;
  margin: 0;
  opacity: 0;
  visibility:hidden;
  border-radius: 3px;
  text-indent: 10px;
  line-height: 32px;
  background-color: $w;
//   width: 140px;
}

.dropdown-content a {
  display: block;
}

.dropdown-content a:hover {
  background: $w;
}


.dropdown-toggle:hover ~ .dropdown-text,
.dropdown-toggle:focus ~ .dropdown-text {
  background-color: $w;
}

.dropdown-toggle:focus ~ .dropdown-text {
  z-index: 2;
}

.dropdown-toggle:focus ~ .dropdown-text:after {
    position: absolute;
    right: 16px;
    top: 22px;
    content: '';
    width: 0px;
    height: 0px;
    background-image: url("../../assets/Pics/searchdropdownicon.svg");
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    height: 8px;
    width: 12px;
    cursor: pointer;
    -ms-transform: rotate(180deg); /* IE 9 */
     transform: rotate(180deg);
}

.dropdown-content:hover,
.dropdown-toggle:focus ~ .dropdown-content {
  opacity: 1;
  visibility:visible;
  top: 42px;
}

// end of the dropdown
.header{
    height: 28rem;
    background-image: url("../../assets/Pics/bckgrnd.png");
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
.welcome {
    font-family: $mb;
    color: $main;
}
.welcomepara{
    font-family: $mb;
    color: $text;
}

.searchbar{
    font-family: $mb;
    color: $main2;
}

.searchbtns{
    background-color: $searhbtns;
    height:3rem;
    line-height:3rem;
}
.activesearch{
    position: relative;
    background-color: $w;
    color: #213142;
    z-index: 1;
    height: 3.4rem;
}
.activesearch::after{
    content: '';
    position: absolute;
    background-color: #E0E0E0;
    width: 100%;
    height: 1px;
    bottom: 0px;
    left: 0;
}

input {
  color: #213142;
  font-family:$mr;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #213142;
  font-family:$mr;
  text-align:left;
  font-size:0.76rem
}
::-moz-placeholder { /* Firefox 19+ */
  color: #213142;
  font-family:$mr;
  font-size:0.76rem;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #213142;
  font-family:$mr;
  font-size:0.76rem
}
:-moz-placeholder { /* Firefox 18- */
  color: #213142;
  font-family:$mr;
  font-size:0.76rem
}
.form{
    padding-left: 1rem;
  
}

@media (min-width: 320px) { 

    .header{
    height: 28rem;
    }

 }

 @media (min-width: 450px) { 

  .cardcities {
    grid-template-columns: 1fr 1fr;
  }
  .cardcity  {
    padding-left: 0px;
    padding-right: 0px;
    margin-right: 10px;
  }

 }

 @media (min-width: 500px) { 

    .footerheader {
        margin-top: 10rem;
        width: 70%;
    }


   .marker{
     height:13rem
   }


  .cardcity  {
    padding-left: 0px;
    padding-right: 0px;
    margin-right: 8px;
    margin-left: 10px;
  }

 }

  @media (min-width: 600px) { 


  .cardcity  {
    padding-left: 0px;
    padding-right: 0px;
    margin-right: 4px;
    margin-left: 14px;
  }

 }



 @media (min-width: 640px) { 


.footerheader{
      width:90%;
      margin-top: 12rem;

}



    .collage2{
    top: 79px;
    width: 40%;
    left: 63px;
    }


   .collagepara{
     font-size: 0.9rem;
   }

   .collageparaitemspara{
     font-size: 0.87rem;
   }


   .shapesicnsitem1{
     top: -12px;
    left: 44px;
   }
    .shapesicnsitem2{
    top: 49px;
    left: 8px;
    width:1rem;
   }
    .shapesicnsitem3{
    top: 138px;
    left: 28px;
    width:2rem
    }
    .shapesicnsitem4{
    top: 43px;
    left: 87px;
    width:1rem
    }

    .shapesicnsitem5{
    right: 110px;
    top: 33px;
    width: 1rem;
    } 
    .shapesicnsitem7{
    right: 73px;
    top: 104px;
    width: 1.3rem;

    }

    .nwsletterbtn{
      height: 2.3rem;
      box-shadow: 0px 8px 40px rgba(44, 142, 234, 0.34);

    }
    .nwsletterinpt{
      height: 2.3rem;

    }



   .cardcity{
     margin-right: 0px;
     margin-left: 0px;
   }

    .header{
    height: 28rem;
    }

 }

@media (min-width: 768px) { 


  .footerheader{
    width: 80%;
  }

  #findimblicn2{

    width: 1.5rem;
    
  }

  #findimblicn1{
    width: 1.7rem;
    top: 39%;
    left:4%
  }
  
  #findimblicn6{
    width: 2.3rem;
    top: 33%;
    right: 4%;
  }

  #findimblicn5{
    width:1.5rem;
  }

   #findimblicn4{
    width:1.7rem;
    top: 10%;
    right: 3%;
  }

  .findimmobilier{
  width: 80%;
  }


.collagepara{
  font-size: 0.84rem;
}

.collageparaitemspara{

  font-size: 0.76rem

}

.newsletterforminput{
width: 60%;
}

#bdgt{
    padding-left: 33px;
    background-color: white;
    background: url("../../assets/Pics/searcheuro.svg")  no-repeat scroll 5px 15px;
    background-color: $w;
    padding-top: 1px;
}
.form{
    padding-left:2rem
}

.picofthecity{
  height: 19.5rem;
}

 }

 @media (max-width: 337px) { 

.container-scndpart-pg{
  font-size: 0.70rem;;
}

 }


  @media (min-width: 337px) { 


#findimblicn1{
  display: block;
}
#findimblicn2{
  display: block;
}
#findimblicn3{
  display: block;
}
#findimblicn4{
  display: block;
}
#findimblicn5{
  display: block;
}
#findimblicn6{
  display: block;
}
 }

  @media (min-width: 364px) { 

  .infosofthehouse {
    margin-left:1rem
  }
  .detailofthehouse{
  p{
    margin-left: 0.2rem;
  }
}

 }

  @media (min-width: 400px) { 

    .houses {
      width: 90%;
      margin-bottom: 1rem;
    }

 }

   @media (min-width: 500px) { 

   .findimmobilier{
      height: 10rem;
   }

   .findpg{
     margin-top: 0.3rem;
     font-size: 0.8rem;
    margin-bottom: 1rem;
   }

     #nwsltrh{
       padding-top: 27px;
       font-size: 1.19rem;
     }

    #nwsltrp{
      font-size: 0.83rem;
      margin-bottom: 1.4rem;
      margin-top: 0.6rem;
    }

     .nwsletterbtn{
       height: 2.3rem;
     }

      .nwsletterinpt{
        height: 2.3rem;
      }

     .homenewsletter{
       height: 10rem;
     }

      .findheader{
    font-size: 0.8rem;
     }

    .houses {
      width: 85%;
    }
    .shapesicnsitem5{
      display: block;
    }
      .shapesicnsitem7{
      display: block;
    }

 }



 @media (min-width: 600px) { 

   .picofthehouseimg {
     width:90%
   }
   .infosofthehouse{
     margin-left:0.1rem
   }
   .infosofthehousesubhead {
     margin-top: 0px;
   }

 }


 @media (min-width: 700px) { 

     .findheader{
    font-size: 1rem;
  } 

  .findpg{
    font-size:0.97rem;
  }




   .marker{
     height: 15rem;
   }

.picofthehouseimg{
  width: 100%;
  margin-left: 1%;
}
.houses{
  width: 60%;
}
.infosofthehouse{
  margin-left:0.5rem
}
 }


 @media (min-width: 810px) { 

   .infosofthehouse{
  margin-left:1rem
}

.btn-badgeitem{
  font-size: 0.62rem;
}
 }

  @media (min-width: 850px) { 

    .marker{
    height: 20rem;
    border-radius: 12px;
    }

  .picofthecity{
        height: 21.5rem;
  }
 }

  @media (min-width: 900px) { 

    .findpg{
      margin-bottom: 1.5rem;
      margin-top: 0.7rem;
    }

       .marker{
            margin-top: 9rem;
    }

    .newsletterforminput{
          width: 46%;
    }

    .nwsletterinpt{
    height: 2.5rem; 
    }
    .nwsletterbtn{
    height: 2.5rem; 

    }


    .cardcities {
          padding-left: 7rem;
          padding-right: 7rem;
          grid-gap: 3rem;

    }
    
  .houses{
    width:50%
  }
  .cardsofhouses {
    gap: 1.1rem;
    margin-top: 1.3rem;
  }
 }


  

  @media (min-width: 920px) { 

  .badges {
    width: 68%
  }

 }

// Medium devices 
  @media (min-width: 1024px) { 

     .footerheader{
    width: 75%;
  }

    .findimmobilier{
      width: 70%;
    }

    .findpg{
      margin-top: 0.6rem;  
      margin-bottom: 1.1rem;  
    }

    .collagepara{
      font-size: 0.90rem;
    }
    .collageparaitemspara{
      font-size: 0.88rem;
    }
      #nwsltrh{
      padding-top: 43px;
      font-size: 1.19rem;
      }

      .homenewsletter{
        height: 12rem;
        margin-top: 4rem;
      }
      .nwsletterinpt{
        height: 3rem;
      }
      .nwsletterbtn{
        height: 3rem;
      }
      .nwsletterbtn{
      font-size: 0.73rem;
      
      }
      .nwsletterinpt{
        padding-left: 1rem;
      }
      .nwsletterinpt::placeholder{
      font-size: 0.81rem;
      }
      .shapesicnsitem3{
      top: 162px;
      left: 28px;
      width: 2.5rem;
      }
      .shapesicnsitem2{
      top: 88px;
      left: 26px;
      width: 1.2rem;
      }
      .shapesicnsitem1{
        top: -12px;
        left: 44px;
        width: 2.4rem;
      }




      .houses{
        width:85%;
        margin:0;
      }


    .cardcities{
  
    padding-left: 0rem;
    padding-right: 1rem;
    /* grid-gap: 1rem; */
    row-gap: 2rem;
    column-gap: 1rem;
    }

    .picofthecity{
  height: 14.5rem;
}

  .dropdown {
    position: relative;
    left:1rem;
  }
  .searchbar{
   width: 45.4%;
  }
  #bdgt{
    padding-left: 30px;
    background: url("../../assets/Pics/searcheuro.svg")  no-repeat scroll 5px 15px;
    background-color: white;
    padding-top: 1px;
  }
  .badges {
    width: 72%;
  }

.form{
    padding-left: 3rem;
  
}


 }

  @media (min-width: 1100px) { 

 
  .searchbar{
    width: 45.13%;
  }
  }
  @media (min-width: 1200px) { 
  .searchbar{
   width: 44.79%;
  }
  .cardcities{
    padding-right: 5rem;
    }
  }

    @media (min-width: 1250px) { 
  .searchbar{
       width: 44.59%;
  }
    .houses{
        width:75%;
        margin:0;
      }
  }


  // large devices 
  @media (min-width: 1300px) { 
  .searchbar{
    width: 44.7%;
  }
  }

   @media (min-width: 1350px) { 
  .searchbar{
    width: 44.4%;
  }
  }

  @media (min-width: 1400px) { 

    .marker {
      height: 25rem
    }

    .collagepara{
      font-size: 1.12rem;
    }
    .collageparaitemspara{
      font-size: 1.1rem;
    }

  .searchbar{
    width: 44.4%;
  }
  }
  @media (min-width: 1500px) { 
  .searchbar{
    width: 44.3%;
  }
  }
  @media (min-width: 1550px) { 
  .searchbar{
       width: 44.1%;
  }
  .houses{
        width:85%;
        margin:0;
      }
  .contentwrapp {
    grid-template-columns: repeat(7, minmax(0, 1fr));
}
.dahouse {
      grid-column: span 1 / span 1;
}
.picofthehouseimg{
      width: 100%;
    margin-left: 1%;
}
.infosofthehouse {
  grid-column: span 6 / span 6;
}
  }
  @media (min-width: 1600px) { 
    .mapicns{
      height: 9.3rem
    }

  .searchbar{
    width: 44%;
  }
  }
   @media (min-width: 1800px) { 
  .searchbar{
    width: 43.8%;
  }
  }
   @media (min-width: 2000px) { 
  .searchbar{
    width: 43.5%;
  }
  }
   @media (min-width: 1280px) { 
  .badges{
    width: 49%;
  }

  .homenewsletter{
    height: 15rem;
  }
  #nwsltrh{
        font-size: 1.35rem;
        padding-top: 50px;
  }
  #nwsltrp{
        font-size: 1rem;
    margin-bottom: 2rem;
    margin-top: 0.9rem;

  }

  .nwsletterinpt{
        height: 3.5rem;
  }
  .nwsletterbtn{
        height: 3.5rem;
  }

  }










</style>