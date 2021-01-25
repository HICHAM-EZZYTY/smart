<template>
            <div class="container mx-auto footer mt-32">

            <div class="footerheader w-10/12 grid grid-cols-2 sm:grid-cols-4 m-0 m-auto lg:pl-24 ">

              <div class="footer1 pr-1">
                <img class=" opacity-100 w-32   " src="./../assets/Pics/Logo.svg" alt="smartzone logo">
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
  
</template>


<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

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
</style>

