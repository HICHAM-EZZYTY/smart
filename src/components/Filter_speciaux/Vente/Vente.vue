<template>

 <div role="group" class="_9fvlwj0">
        <section>   
                        <!--  Terrain -->
                         <Heading  heading="Constructible"/>
                         <Constructible />

                         <!--Parking  -->
                         <Heading  heading="Travaux"/>
                         <Travauxvente />
                         <Heading  heading="Surface "/>
                         <Parkingvente />
                         <Heading  heading="Cave"/>
                         <Cavevent class="mt-6" />
                         <Heading  heading="Box"/>
                         <Boxvente class="mt-6" />

                        <!-- Péniche  -->
                         <Heading  heading="Année "/>
                         <Budget />
                         <Heading  heading="Longueur & Largeur"/>
                         <Longueur class="mt-4" />
                         <Heading  heading="Poids "/>
                         <Poids class="mt-4" />
                         <Heading  heading="Informations de cabine "/>
                         <Informations class="mt-4" />
                         <Heading  heading="Energie "/>
                         <Energievente class="mt-4" />
                         <Heading  heading="Propulsion "/>
                         <Propulsion class="mt-4" />
                         
                         <!-- place de port-->
                         <Heading  heading="Longueur & Largeur"/>
                         <Longueur class="mt-4" />

                         <!-- Fonds de commerce/Local Commercial  -->
                         <Heading  heading="Secteur d'activite"/>
                         <Secteuractivite class="mt-4" />
                         
                        <!-- Location-->

                        <Heading  heading="Disponibilité"/>
                        <Disponibilitelocat class="mt-4" />

    
        </section>
    </div>
</template>



<script>
import Budget from './../Budget'
import Travauxvente from './Travauxvente'
import Heading from './../Heading'

import Constructible from './../Constructible'
import Parkingvente from './Parkingvente'
import Cavevent from './Cavevent'
import Boxvente from './Boxvente'

import Longueur from './Longueur'
import Poids from './Poids'
import Informations from './Informations'
import Energievente from './Energievente'
import Propulsion from './Propulsion'
import Secteuractivite from './Secteuractivite'
import Disponibilitelocat from './../Disponibilitelocat'
import { mixin as clickaway } from 'vue-clickaway';

export default {
    mixins: [ clickaway ],
    name: 'Vente',
    components: {
  
    Longueur,
    Poids,
    Informations,
    Energievente,
    Propulsion,
    Budget,
    Travauxvente,
    Heading,
    Constructible,
    Parkingvente,
    Cavevent,
    Boxvente,
    Secteuractivite,
    Disponibilitelocat,
   
    },
    methods:{

      closethepopup:function(){
            this.$emit("close");
      },
      away:function(){
            this.$emit("away");
      }
    }

}

</script>
<style lang="scss" scoped>
// Popup
#openPopUp{
  text-align:center;
  background-color: #1abc9c;
  padding: 15px 15px;
  color: #ffffff;
  font-weight: 500;
  font-size: 1.5em;
  border-radius: 3.5px;
  text-decoration: none;
  font-weight: 100;
  transition:background-color 0.15s linear;
  -webkit-transition:background-color 0.15s linear;
  -moz-transition:background-color 0.25s linear;
  -o-transition:background-color 0.25s linear;
}
a#openPopUp:hover{
  cursor: pointer;
  background-color: #1abc9e;
}
.popup{
  position: fixed;
  top: -100vh;
  top: 0;
  left: 0;
  z-index: 9999999;
  background: rgba(0,0,0, 0.75);
  width: 100vw;
  height: 100vh;
  opacity: 1;

    -webkit-transition: opacity  0.35s ease;
    -moz-transition: opacity 0.35s ease;
    -o-transition: opacity 0.35s ease;
    transition: opacity 0.35s ease;
}
.popup .popUpContainer{
  width: 53%;
  max-width: 780px !important;
  position: fixed; /* To avoid scroll to target */
  left: 38%;
  top: 1vh;
    -webkit-transition: bottom  0.35s ease;
    -moz-transition: bottom 0.35s ease;
    -o-transition: bottom 0.35s ease;
    transition: bottom 0.35s ease;

  /* Trick to properly center the element by using negative 
  1/2 length of element as margin left and top */
  margin-left: -250px;
  background-color: #ffffff;
  -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  -moz-box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  border-radius: 15px;
  z-index: 9999999; 
}
.popup h2{
  padding: 0.5em;
  text-align: center;
  color: #444444;
  margin: 0;
}
.popup img{
  width: 100%;
  display: block;
}
.popup article{
	height: 70vh;
  background-color: #ffffff;
}
/* The cancel button on popup dialog */
// .popup a.closePopUp{
//   font-family: verdana;
//   color: #000000;
//   position: absolute;
//   top: 0.2em;
//   left: 0.375em;
//   margin: 0;
//   padding: 5px;
//   font-weight: bold;
//   font-size: 1.5em;
//   text-decoration: none;
// }
/* The cancel button on popup dialog */
.popup a:hover{
  color: #000000;
}
/* When popup is targeted, by clicking on link with #popup in HTML */
// .popup:target{
//   opacity: 1;
//   top: 0;
// }
// .popup .closePopUpOutSide{
//   position: absolute;
//   left:0;
//   width: 100%;
//   height: 100%;
//   z-index: 9999991; 
// }
.popUpContainer{
  top: 50px;
    -webkit-transition: top  0.35s ease;
    -moz-transition: top 0.35s ease;
    -o-transition: top 0.35s ease;
    transition: top 0.35s ease;
}
// footer

._zgc1p6 {
    -webkit-box-pack: justify !important;
    -webkit-box-align: center !important;
    display: flex !important;
    flex: 0 0 auto !important;
    border-top: 1px solid rgb(235, 235, 235) !important;
    padding: 16px 24px !important;
    align-items: center !important;
    justify-content: space-between !important;
    font-size: 16px !important;
    line-height: 20px !important;
}
._6s3rid {
    -webkit-box-align: center !important;
    font-size: 16px !important;
    display: flex !important;
    align-items: center !important;
}
._m095vcq {
    cursor: pointer !important;
    display: inline-block !important;
    margin: 0px !important;
    position: relative !important;
    text-align: center !important;
    text-decoration: none !important;
    width: auto !important;
    touch-action: manipulation !important;
    font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 600 !important;
    border-radius: 8px !important;
    outline: none !important;
    padding: 14px 24px !important;
    border: none !important;
    background: #2C8EEA!important;
    color: rgb(255, 255, 255) !important;
}

// 
@media  (max-width: 934px) {
  .popup .popUpContainer{
    width: 70%;
    max-width: none;
    left: 5%;
    margin-left: 0;
  }
  .popup ul{
    padding: 0 1em 0 1em;
  }
  .popup:target .popUpContainer{
    top: 25px;
    -webkit-transition: top  0.35s ease;
    -moz-transition: top 0.35s ease;
    -o-transition: top 0.35s ease;
    transition: top 0.35s ease;
  }
}
@media  (max-width: 796px) {
  .popup .popUpContainer{
    width: 90%;
    max-width: none;
    left: 5%;
    margin-left: 0;
  }
  .popup ul{
    padding: 0 1em 0 1em;
  }
  .popup:target .popUpContainer{
    top: 25px;
    -webkit-transition: top  0.35s ease;
    -moz-transition: top 0.35s ease;
    -o-transition: top 0.35s ease;
    transition: top 0.35s ease;
  }
}

.overf {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
    padding-left: 48px !important;
    padding-right: 48px !important;
    height: 100% !important;
    overflow: auto !important;
}

.headers {
    -webkit-box-pack: center !important;
    border-bottom: 1px solid #EBEBEB !important;
    padding-top: 24px !important;
    padding-bottom: 16px !important;
    padding-left: 24px !important;
    padding-right: 24px !important;
    color: #222222 !important;
    font-size: 18px !important;
    line-height: 24px !important;
    font-weight: 600 !important;
  
    display: flex !important;
    justify-content: center !important;
    flex-shrink: 0 !important;
}
// X


._zpjce3 {
    position: absolute !important;
    display: flex !important;
    left: 24px !important;
}
._187sg6v {
    appearance: none !important;
    display: inline-block !important;
    border-radius: 50% !important;
    border: none !important;
    outline: none !important;
    margin: 0px !important;
    padding: 0px !important;
    color: rgb(34, 34, 34) !important;
    cursor: pointer !important;
    touch-action: manipulation !important;
    position: relative !important;
    background: transparent !important;
}
._e296pg {
    position: relative !important;
}


</style>