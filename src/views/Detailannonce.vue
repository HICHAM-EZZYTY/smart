<template class="z-0">
<div>
         <Navbar/>

  <div class="header rounded-lg h-48 sm:h-48 bg-blue-500">
    <div class="container mx-auto text-white">
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-1 col-end-3 pt-4">
          <p class="text-2xl"> <i class="fas fa-long-arrow-alt-left"></i>  Retour à la liste</p>
        </div>
        <div class="col-start-2 col-end-6 pt-20 leading-10">
            <h5 class="text-4xl">La grandiere immobilier</h5>
            <span class="block text-yellow-400"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></span>
            <span class="block text-base"><i class="fas fa-map-marker-alt"></i> 44 rue de bretagne 75003 Paris 3ème </span>
            <span class="block"><img src="../assets/Pics/globe 1.svg" alt=""> Siteweb</span>
        </div>
      </div>
    </div>
 
  </div>

  <div class="container mx-auto my-6">
    <div class="grid grid-cols-12 gap-4">
          <div class="col-span-8 py-6">
            <div class="">
                  <ul class="list-reset flex">
                    <li class="p-0  border-2 border-light-blue-500 border-opacity-100 ">
                      <a class="list-a bg-white inline-block py-2 px-4 text-black-400 font-semibold" href="#0">Information génerales</a>
                    </li>
                    <li class="p-0 border-2 border-light-blue-500 border-opacity-100">
                      <a class="list-a bg-white inline-block py-2 px-4 text-black-400  hover:text-blue-600 font-semibold" href="#1">Nos biens ?</a>
                    </li>
                    <li class="p-0 border-2 border-light-blue-500 border-opacity-100">
                      <a class="list-a bg-white inline-block py-2 px-4 text-black-400 hover:text-blue-800 font-semibold" href="#2">Notre expertice</a>
                    </li>
                    <li class="p-0 border-2 border-light-blue-500 border-opacity-100">
                      <a class="list-a bg-white inline-block py-2 px-4 text-black-400 hover:text-blue-800 font-semibold" href="#3">Nos avis ?</a>
                    </li>
                  </ul>
            </div>
                <h2 class="text-4xl py-4" id="0">Qui somme-nous ?</h2>
                <p  class="rue text-xl py-4">
                  Implantée rue de Bretagne depuis 2010, l'AGENCE DES ENFANTS ROUGES se caractérise par une proximité et une parfaite connaissance du quartier du Haut Marais, de ses habitants, de son identité et de ses évolutions. Appartements d'exception ou petits pieds à terre, nous répondons aux attentes de chaque client. Aussi, nous nous efforçons d'être une agence "sur-mesure" qui vous écoute, vous accompagne, vous conseille et répond à vos besoins à chaque étape de votre projet immobilier.
                </p>
            <h2 class="text-4xl py-6 " id="1">Nos biens</h2>
            <Tabs>
              <Tab  class="" name="En vente (16)" selected="true">
                  <div class="grid grid-cols-3 gap-4 py-6">
                        <div class="">
                           <img class="w-full	" src="../assets/Pics/Rectangle 676.svg" alt="biens image"/>
                           <div class="border-b-2 border-fuchsia-600">
                              <div class="flex flex-row  flex-nowrap py-4 ">
                                <div class=""><h3>103,000€</h3> </div>
                                <div class="Appartemet pt-1 px-16"><span>Appartement</span></div>
                              </div>                           
                              <h4 class="Quartier pb-4">Quartier Saphir, Longjumeau </h4>
                           </div>
                              <div class="flex flex-row  flex-nowrap py-2">
                                <div class="w-12 ph mr-6">
                                  <span>1 p</span>
                                </div>
                                <div class="w-12 mh mr-6">
                                  <span>33 m²</span>
                                </div>
                                <div class="ch w-12  mr-6">
                                  <span>4 ch</span>
                                </div>
                              </div>

                        </div>
                        <div class="">
                           <img class="w-full	" src="../assets/Pics/Rectangle 676.svg" alt="biens image"/>
                           <div class="border-b-2 border-fuchsia-600">
                              <div class="flex flex-row  flex-nowrap py-4">
                                <div class=""><h3>103,000€</h3> </div>
                                <div class="Appartemet pt-1 px-16"><span>Appartement</span></div>
                              </div>                           
                              <h4 class="Quartier pb-4">Quartier Saphir, Longjumeau  </h4>
                           </div>
                              <div class="flex flex-row  flex-nowrap py-2">
                                <div class="w-12 ph mr-6">
                                  <span>1 p</span>
                                </div>
                                <div class="w-12 mh mr-6">
                                  <span>33 m²</span>
                                </div>
                                <div class="w-12 ch mr-6">
                                  <span>4 ch</span>
                                </div>
                              </div>

                        </div>
                        <div class="">
                           <img class="w-full	" src="../assets/Pics/Rectangle 676.svg" alt="biens image"/>
                           <div class="border-b-2 border-fuchsia-600">
                              <div class="flex flex-row  flex-nowrap py-4">
                                <div class=""><h3>103,000€</h3> </div>
                                <div class="Appartemet pt-1 px-16"><span>Appartement</span></div>
                              </div>                           
                              <h4 class="Quartier pb-4">Quartier Saphir, Longjumeau  </h4>
                           </div>
                              <div class="flex flex-row  flex-nowrap py-2">
                                <div class="w-12 ph mr-6">
                                  <span>1 p</span>
                                </div>
                                <div class="w-12 mh mr-6">
                                  <span>33 m²</span>
                                </div>
                                <div class="w-12 ch mr-6">
                                  <span>4 ch</span>
                                </div>
                              </div>
                        </div>
                  </div>
                  <div class="grid grid-cols-3 gap-4 py-6">
                        <div class="">
                           <img class="w-full	" src="../assets/Pics/Rectangle 676.svg" alt="biens image"/>
                           <div class="border-b-2 border-fuchsia-600">
                              <div class="flex flex-row  flex-nowrap py-4">
                                <div class=""><h3>103,000€</h3> </div>
                                <div class="Appartemet pt-1 px-16"><span>Appartement</span></div>
                              </div>                           
                              <h4 class="Quartier pb-4">Quartier Saphir, Longjumeau  </h4>
                           </div>
                              <div class="flex flex-row  flex-nowrap py-2">
                                <div class="w-12 ph mr-6">
                                  <span>1 p</span>
                                </div>
                                <div class="w-12 mh mr-6">
                                  <span>33 m²</span>
                                </div>
                                <div class="w-12 ch mr-6">
                                  <span>4 ch</span>
                                </div>
                              </div>

                        </div>
                        <div class="">
                           <img class="w-full	" src="../assets/Pics/Rectangle 676.svg" alt="biens image"/>
                           <div class="border-b-2 border-fuchsia-600">
                              <div class="flex flex-row  flex-nowrap py-4">
                                <div class=""><h3>103,000€</h3> </div>
                                <div class="Appartemet pt-1 px-16"><span>Appartement</span></div>
                              </div>                           
                              <h4 class="Quartier pb-4">Quartier Saphir, Longjumeau  </h4>
                           </div>
                              <div class="flex flex-row  flex-nowrap py-2">
                                <div class="w-12 ph mr-6">
                                  <span>1 p</span>
                                </div>
                                <div class="w-12 mh mr-6">
                                  <span>33 m²</span>
                                </div>
                                <div class="w-12 ch mr-6">
                                  <span>4 ch</span>
                                </div>
                              </div>

                        </div>
                        <div class="">
                           <img class="w-full	" src="../assets/Pics/Rectangle 676.svg" alt="biens image"/>
                           <div class="border-b-2 border-fuchsia-600">
                              <div class="flex flex-row  flex-nowrap py-4">
                                <div class=""><h3>103,000€</h3> </div>
                                <div class="Appartemet pt-1 px-16"><span>Appartement</span></div>
                              </div>                           
                              <h4 class="Quartier pb-4">Quartier Saphir, Longjumeau  </h4>
                           </div>
                              <div class="flex flex-row  flex-nowrap py-2">
                                <div class="w-12 ph mr-6">
                                  <span>1 p</span>
                                </div>
                                <div class="w-12 mh mr-6">
                                  <span>33 m²</span>
                                </div>
                                <div class="w-12 ch mr-6">
                                  <span>4 ch</span>
                                </div>
                              </div>
                        </div>
                  </div>
              </Tab>

              <Tab  class="" name="En location (1)">
                  <div class="grid grid-cols-3 gap-4 py-6">
                        <div class="">
                           <img class="" src="https://picsum.photos/seed/picsum/300/200" alt="biens image"/>
                        </div>
                        <div class="...">
                           <img class="" src="https://picsum.photos/seed/picsum/300/200" alt="biens image"/>
                        </div>
                        <div class="...">
                           <img class="" src="https://picsum.photos/seed/picsum/300/200" alt="biens image"/>
                        </div>
                  </div>
                  <div class="grid grid-cols-3 gap-4 py-6">
                        <div class="">
                           <img class="" src="https://picsum.photos/seed/picsum/300/200" alt="biens image"/>
                        </div>
                        <div class="...">
                           <img class="" src="https://picsum.photos/seed/picsum/300/200" alt="biens image"/>
                        </div>
                        <div class="...">
                           <img class="" src="https://picsum.photos/seed/picsum/300/200" alt="biens image"/>
                        </div>
                  </div>
              </Tab>

              <Tab  class="" name="Vendus (2)">
                  <div class="grid grid-cols-3 gap-4 py-6">
                        <div class="">
                           <img class="" src="https://picsum.photos/id/101/300/200" alt="biens image"/>
                        </div>
                        <div class="...">
                           <img class="" src="https://picsum.photos/id/101/300/200" alt="biens image"/>
                        </div>
                        <div class="...">
                           <img class="" src="https://picsum.photos/id/101/300/200" alt="biens image"/>
                        </div>
                  </div>
                  <div class="grid grid-cols-3 gap-4 py-6">
                        <div class="">
                           <img class="" src="https://picsum.photos/id/101/300/200" alt="biens image"/>
                        </div>
                        <div class="...">
                           <img class="" src="https://picsum.photos/id/101/300/200" alt="biens image"/>
                        </div>
                        <div class="...">
                           <img class="" src="https://picsum.photos/id/101/300/200" alt="biens image"/>
                        </div>
                  </div>
              </Tab>
              
            </Tabs>
            <h2 class="text-4xl py-6 " id="2">Notre expertice</h2>
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-4 py-4 border-b-2 border-fuchsia-600 ">
                    <h4><span><i class="fas fa-play-circle"></i></span>Paris 7ème 75007 (5) </h4>
                  </div>
                  <div class="col-span-4 py-4 border-b-2 border-fuchsia-600 ">
                    <h4><span><i class="fas fa-play-circle"></i></span>Levallois-Perret 92300 (13) </h4>
                  </div>
                </div>
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-4 py-4 border-b-2 border-fuchsia-600">
                    <h4><span><i class="fas fa-play-circle"></i></span>Paris 14ème 75014 (4) </h4>
                  </div>
                  <div class="col-span-4 py-4 border-b-2 border-fuchsia-600">
                    <h4><span><i class="fas fa-play-circle"></i></span>Paris 8ème 75008 (7) </h4>
                  </div>
                </div>
                 <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-4 py-4 border-b-2 border-fuchsia-600">
                    <h4><span><i class="fas fa-play-circle"></i></span>Neuilly-sur-Seine 92200 (5) </h4>
                  </div>
                  <div class="col-span-4 py-4 border-b-2 border-fuchsia-600">
                    <h4><span><i class="fas fa-play-circle"></i></span>Paris 15ème 75015 (11) </h4>
                  </div>
                </div>

                <h2 class="text-4xl py-6 " id="3">Les Avis</h2>
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-4">
                    <div class="max-w-xs overflow-hidden rounded-lg shadow-lg ">
                      <div class="grid grid-rows-3 grid-flow-col gap-4 ">
                        <div class="row-span-3 ...">
                          <img class="inline-block object-cover w-12 h-12 rounded-full" src="../assets/Pics/Ellipse 657.svg" alt="Profile image"/>
                        </div>
                        <div class="col-span-2 ...">
                          <h6>Ashley George</h6>
                        </div>
                        <div class="row-span-2 col-span-2 ...">
                          <h4 class="pl-4 mb-3 text-xl font-semibold tracking-tight text-gray-800">Location 2 pièces</h4>
                        </div>
                      </div>
                          <p class="leading-normal text-gray-700">“ Le contact avec M. Bismuth a été excellent et chaleureux de bout en bout, malgré les difficultés liées à la période Covid ...“</p>
                    </div>

                  </div>
                  <div class="col-span-4">
                    <div class="max-w-xs overflow-hidden rounded-lg shadow-lg ">
                      <div class="grid grid-rows-3 grid-flow-col gap-4 ">
                        <div class="row-span-3 ...">
                          <img class="inline-block object-cover w-12 h-12 rounded-full" src="../assets/Pics/Ellipse OO.svg" alt="Profile image"/>
                        </div>
                        <div class="col-span-2 ...">
                          <h6>Joye L.</h6>
                        </div>
                        <div class="row-span-2 col-span-2 ...">
                          <h4 class="pl-4 mb-3 text-xl font-semibold tracking-tight text-gray-800">Vente Appartement 2 Pièces</h4>
                        </div>
                      </div>
                          <p class="leading-normal text-gray-700">“ Tres bon service. Bonne communicaton et toujours disponible.“</p>
                    </div>

                  </div>
                </div>
      </div>
      <div class="col-span-4 py-6">
        <h2 class="text-xl">Contactez l'angence</h2>
        <div class="w-full p-6 border-2 border-gray-300 mt-4">
          <button class="btnPageOne h-10 px-5 my-2 text-white	  duration-150 bg-pink-400 rounded-lg focus:shadow-outline w-full">Contactez l'agence par émail</button>
          <button class="btnPageTwo h-10 px-5 my-2 text-white	   duration-150 bg-pink-200 rounded-lg focus:shadow-outline w-full">Contacter l'agence par téléphone</button>
        </div>

        <h2 class="text-xl py-6">L'agence de facebook</h2>
        <div class=" flex w-full p-6 border-2 border-gray-300">
          
          <button class="Facebook h-10 flex-1 px-5 mx-2 text-black-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline "><span><img src="../assets/Pics/facebook (1) 1.svg" alt=""> </span> Facebook</button>
          <button class="Facebook h-10 flex-1 px-5 mx-2 text-black-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline"><span><img src="../assets/Pics/link 1.svg" alt=""></span> Copie lien</button>
        </div>
         <h2 class="text-xl py-6">L'équipe de <span class="text-blue-500">La Gradiare immobilier</span></h2>
        <div class="w-full p-6 border-2 border-gray-300">
          <div class="relative inline-block">
             <div class=" ...">
             <img class="inline-block object-cover w-12 h-12 rounded-full" src="../assets/Pics/Ellipse 652.svg" alt="Profile image"/>
            <span class="pl-4 text-blue-500"><a href="">Fondateur et co-gérant de l’agence </a></span>
            </div>
            <div class="pl-16">
              <span class=""> Philippe GAUDRY</span>
            </div>
          </div>
        </div>
        <div class="w-full p-6 border-2 border-gray-300">
          <div class="relative inline-block">
             <div class=" ...">
             <img class="inline-block object-cover w-12 h-12 rounded-full" src="../assets/Pics/Ellipse 652.svg" alt="Profile image"/>
            <span class="pl-4 text-blue-500"><a href="">Négociatrice</a></span>
            </div>
            <div class="pl-16">
              <span class=""> Kelly Trutaud</span>
            </div>
          </div>
        </div>

        <div class="w-full p-6 border-2 border-gray-300">
          <div class="relative inline-block">
             <div class=" ...">
             <img class="inline-block object-cover w-12 h-12 rounded-full" src="../assets/Pics/Ellipse 621.svg" alt="Profile image"/>
            <span class="pl-4 text-blue-500"><a href=""> Négociateur Immobilier</a></span>
            </div>
            <div class="pl-16">
              <span class=""> John paul guillemin</span>
            </div>
          </div>
        </div>

        <div class="w-full p-6 border-2 border-gray-300">
          <div class="relative inline-block">
             <div class=" ...">
             <img class="inline-block object-cover w-12 h-12 rounded-full" src="../assets/Pics/Ellipse 658.svg" alt="Profile image"/>
            <span class="pl-4 text-blue-500"><a href=""> Directrice</a></span>
            </div>
            <div class="pl-16">
              <span class=""> Véronique Richard</span>
            </div>
          </div>
        </div>


        <div class="w-full p-4 border-2 border-gray-300">
          <span class="pt-10 text-xl text-blue-500 border-b-2 border-blue-500 py-2"><a href="">Voir toute l'équipe</a> <i class="fas fa-arrow-right"></i></span>
        </div>
      </div>
    </div>
  </div>


<!-- start of the second section part  -->
    <Footer />
      <!-- <div class="footer mt-32">

          <div class="footerheader w-10/12 grid grid-cols-2 sm:grid-cols-4 m-0 m-auto ">

            <div class="footer1 pr-1">
              <img class=" opacity-100 w-32" src="../assets/Pics/Logo.svg" alt="smartzone logo">
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




      </div> -->
</div>

</template>

<script>
import Navbar  from './../components/Navbar'
import Tab from './../components/tab'
import Tabs from './../components/tabs'
import Footer from './../components/Footer'

export default {
  name: 'page',
   components: {
    Navbar,
    Tab,
    Tabs,
    Footer
    }
}


</script>

<style  scoped lang="scss">
@import "../scss/main.scss";
//
.header{
    height: 22rem;
    background-image: url("../assets/Pics/Group 1636.svg");
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

}

    .list-a:hover{
      color: #4e84ca;
       border-bottom: 2px solid #4299e1
    }
    .btnPageOne{
      color: white;
      background-color: #fd8d6e;
      outline : none;
    }
    .btnPageOne:hover{
       background-color: #cc5b3b;
       outline : none;
    }
    .btnPageTwo{
      color: #fd8d6e;
      background-color: #f8c9bc;
      outline : none;
    }
       .btnPageTwo:hover{
       background-color:#f8f2f0;
       outline : none;
    }
    .Facebook{
      outline : none;
    }
    .Facebook img{
      position: relative;
      top: 0.8rem;
    }
    .Facebook span{
      padding-top: 22px;
    }
//
button{
  outline : none;
}
.Appartemet{
  color: #FF9376;
}
// .footer-ftr-heading {

// font-family: $ub;
// font-size: 1rem;
// line-height: 19px;
// color: #222222;

// }

// .footer-ftr-subheading {

// font-family: $um;
// font-size: 0.76rem;
// line-height: 19px;
// color: #73738D;

// }


// .footer-heading{
// font-family: $um;
// font-size: 1rem;
// line-height: 13px;
// display: flex;
// align-items: center;
// color: #222222;
// }

// .footer-txt{
//     font-family: $ur;
//     font-size: 0.85rem;
//     line-height: 13px;
//     color: #73738D;
// }
.rue{
  color: #909090;
}
.ch{
  text-align: center;
  background: #FDE7DB;
  border-radius: 2px;
  font-size: 11px;


}
.mh{
  background: #DCEEFE;
  border-radius: 2px;
  font-size: 11px;
  text-align: center;

}
.ph{
  background: #F0F0F3;
  border-radius: 2px;
  font-size: 11px;
  text-align: center;
}
.Quartier{
  color: #909AA2;
}
@media (min-width: 320px) { 

    .header{
    height: 22rem;
    }

 }
 @media (min-width: 500px) { 

    .footerheader {
        margin-top: 10rem;
        width: 70%;
    }
 }
 @media (min-width: 640px) { 


.footerheader{
      width:90%;
      margin-top: 12rem;

}
    .header{
    height: 22rem;
    }

 }

@media (min-width: 768px) { 


  .footerheader{
    width: 80%;
  }

 }
  @media (min-width: 1024px) { 

     .footerheader{
    width: 75%;
  }
}









</style>