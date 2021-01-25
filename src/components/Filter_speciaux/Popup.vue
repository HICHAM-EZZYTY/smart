<template>
                <aside id="popUp" class="popup">
                    <div v-on-clickaway="away"  style="z-index:4" class="popUpContainer">
                      <header class="headers">
                        
                <div class="_zpjce3">
                  <a class="closePopUp">
                  <button  @click="closethepopup()" aria-label="Close" type="button" class="_187sg6v">
                    <span class="_e296pg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
                    <path d="m6 6 20 20">
                      </path>
                      <path d="m26 6-20 20"></path>
                      </svg>
                      </span>
                  </button>
                      </a>
                      </div>

                      <h2 id="popupsp">Plus de critères</h2>
                      </header>
            
                      <div class="overf">
                        <article>

                         <Heading  heading="Dans quelle ville ? quartier"/>
                         <Addresse 
                         :AdresseModal="AdresseModal"
                         />
                         <Heading  heading="Nature de l'annonceur"/>
                         <Modal class="mt-2" 
                        :NatureModal="NatureModal"
                         />
                         <Heading  heading="Quel est votre projet ?"/>
                         <Typeofad class="mt-6" 
                         :TypeofadModal="TypeofadModal"
                         />
                         <Heading  v-if="colocation" heading="Type d’offre ?"/>
                         <Typeofoffre class="mt-2"
                        v-if="colocation"
                         />

                        <Heading  v-if="colocation" heading="Meublé ou bien non meublé ?"/>
                        <Meuble class="mt-2"
                        v-if="colocation"
                         />


                         <Heading  v-if="Acheter" heading="Que voulez-vous acheter ?"/>
                         <Heading  v-if="Location" heading="Que voulez-vous louer ?"/>

                         <Typeofgood class="mt-2"
                        :TypeofgoodModal="TypeofgoodModal"
                        v-if="Acheteretlocation"
                         />

                        <Heading  v-if="neuf" heading="Que voulez-vous acheter ?"/>
                          <Typeofgoodneuf class="mt-2"
                        v-if="neuf"
                         />
                         

                         <Heading  heading="Budget souhaité"/>
                         <!-- <Budget v-if="neuf" /> -->
                         <Surface 
                         :Surfacemin="Surfacemin"
                         :Surfacemax="Surfacemax"
                         />
                         <!-- <Budgetlocation v-if="Location" />
                         <Budgetcolocation v-if="colocation" /> -->



                          
                        <Colocation
                        v-if="colocation"
                        :Surfacemin="Surfacemin"
                        :Surfacemax="Surfacemax"
                         />

                        <Neuf
                        v-if="neuf"
                        :Surfacemin="Surfacemin"
                        :Surfacemax="Surfacemax"

                         />


                         <Heading  heading="Nombre de Piéces"
                         v-if="npieces"
                         />
                         <Pieces 
                         :Piecesmin="Piecesmin"
                         :Piecesmax="Piecesmax"
                         v-if="npieces"
                         />   
                         <Heading  heading="Surface habitable"
                         v-if="surfaceexcep"
                         />
                        <Heading  heading="Surface"
                         v-if="surfaceterrain"
                         />
                         <Surface 
                          v-if="surface"
                         :Surfacemin="Surfacemin"
                         :Surfacemax="Surfacemax"
                         />

                        <Heading   v-if="dispo" heading="Disponibilité"/>
                        <Disponibilitelocat  v-if="dispo" class="mt-4" />

                         <Heading    heading="Surface terrain"
                         v-if="maisonvente"
                         />
                         <Surfaceterrain 
                          v-if="maisonvente"/>
                          <!--  -->
                          <Heading    heading="Surface terrain"
                         v-if="Châteauvente"
                         />
                         <Surfaceterrain 
                          v-if="Châteauvente"/>
                        <!-- Hôtelvente -->
                        <Heading    heading="Surface terrain"
                         v-if="Hôtelvente"
                         />
                         <Surfaceterrain 
                          v-if="Hôtelvente"/>
                        <!--  -->
                        <Heading    heading="Surface terrain"
                         v-if="Loftvente"
                         />
                         <Surfaceterrain 
                          v-if="Loftvente"/>
                         <!-- <Acheter /> -->


                               
                        <Heading  heading="Annee"
                         v-if="Annedeconstruction"
                         /> 
                         <Anneevent 
                         v-if="Annedeconstruction"
                         />  
                        

                         <!-- <Heading v-if="Travaux" heading="Travaux"/>
                         <Travaux v-if="Travaux" /> -->
                         <Heading v-if="Typedemaison" heading="Type de maison"/>
                         <Typedemaison  v-if="Typedemaison" />
                         
                         <Heading v-if="viager" heading="Viager"/>
                         <Viager  v-if="viager" />
                         <Heading  v-if="appartvente"  heading="Etage"/>
                         <Etage    v-if="appartvente" />
                         <!-- ImmeubleEtage -->
                         <Heading  v-if="Immeubletvente"  heading="Etage"/>
                         <ImmeubleEtage    v-if="Immeubletvente" />
                         <!--  -->
                         <Heading v-if="globalvente"  heading="Cuisine"/>
                         <Cuisine  v-if="globalvente" class="mt-6" />
                         <Heading  v-if="globalvente" heading="Salle de bain"/>
                         <Salledebain v-if="globalvente"  class="mt-6" />
                         <Heading  v-if="globalvente" heading="Toilettes"/>
                         <Toilettes v-if="globalvente" class="mt-6" />
                         <Heading  v-if="globalvente" heading="Balcon, Terrasse, Véranda"/>
                         <Balcon v-if="globalvente" class="mt-6" />
                        
                         <Heading v-if="appartvente" heading="Parking"/>
                         <Parking v-if="appartvente" class="mt-2" />

                        

                         <Heading v-if="Cave"  heading="Cave"/>
                         <Cave v-if="Cave" class="mt-2" />
                         <Heading  v-if="Box" heading="Box"/>
                         <Box v-if="Box" class="mt-2" />
                         <Heading  v-if="globalvente" heading="Exposition"/>
                         <Exposition v-if="globalvente" class="mt-6" />
                         <Heading v-if="globalvente"  heading="Vue"/>
                         <Vue v-if="globalvente" class="mt-6" />
                         <Heading v-if="globalvente"  heading="Chauffage"/>
                         <Chauffage v-if="globalvente" class="mt-6" />
                         <Heading  v-if="globalvente" heading="Consommation énergétique"/>
                         <Consommation v-if="globalvente" class="mt-6" />
                         <!-- <Heading  heading="Année de construction"/>
                         <Annee class="mt-0" /> -->
                         <Heading v-if="globalvente"  heading="Copropriété"/>
                         <Copropriete v-if="globalvente" class="mt-4" />
                         <Heading  v-if="globalvente" heading="Commodités"/>
                         <Commodites v-if="globalvente" class="mt-4" />
                         <Heading v-if="globalvente"  heading="Affichage des annonces"/>
                         <Affichage v-if="globalvente" class="mt-4" />
                  
                         <Heading  heading="Constructible"
                         v-if="terrainvente"
                         />
                         <Constructible  
                         v-if="terrainvente"
                          />

                         <Heading  v-if="other" heading="Année de construction "/>
                         <Budget   v-if="other"/>
                         <Heading   v-if="Longueuretlargeur" heading="Longueur & Largeur"/>
                         <Longueur  v-if="Longueuretlargeur" class="mt-4" />
                         <Heading  v-if="Peniche"  heading="Poids "/>
                         <Poids  v-if="Peniche" class="mt-4" />
                         <Heading   v-if="Peniche" heading="Informations sur la péniche "/>
                         <Informations  v-if="Peniche" class="mt-4" />
                         <Heading  v-if="Placedeport"  heading="Amodiation "/>
                         <Amodiation  v-if="Placedeport" class="mt-4" />
                         
                         <Heading  v-if="other" heading="Energie "/>
                         <Energievente  v-if="other" class="mt-4" />
                         <Heading  v-if="other" heading="Propulsion "/>
                         <Propulsion  v-if="other" class="mt-4" />
                   
                   

                         <!-- Fonds de commerce/Local Commercial  -->
                         <Heading   v-if="Fondsdecommercelocalcommercial" heading="Secteur d'activite"/>
                         <Secteuractivite  v-if="Fondsdecommercelocalcommercial" class="mt-4" />
                         <Heading   v-if="Fondsdecommercelocalcommercial" heading="Liste des activités"/>
                         <Listedeactivites v-if="Fondsdecommercelocalcommercial"  class="mt-4"/>
                         <Heading   v-if="Fondsdecommercelocalcommercial" heading="Types d'emplacements"/>
                         <Liste  v-if="Fondsdecommercelocalcommercial" class="mt-4"/>
                         
                        <!-- Location-->


                      
                          <Heading v-if="Parkingvente" heading="Parking"/>
                          <ParkingPar v-if="Parkingvente" class="mt-2" /> 

                            <!-- Box -->
                          <Heading v-if="Boxvente" heading=""/>
                          <BoxPar v-if="Boxvente" class="mt-2" /> 


                          <Heading v-if="Accessbi" heading="Accessibilité handicapé"/>
                          <Accessibilite v-if="Accessbi"/>
                        </article>
                        
                      </div>
                     <footer class="_zgc1p6">
                            <div class="_6s3rid">
                                <button type="button" class="_ejra3kg">Tout effacer</button>
                           </div>
                           <button data-testid="more-filters-modal-submit-button" type="button" class="_m095vcq">Appliquer</button>
                     </footer>
                  </div> 
                            
                  <a href="#!" class="closePopUpOutSide"></a>    
                </aside>
</template>



<script>
import Modal from './Modal'
import Budget from './Budget'
// import Budgetlocation from './Budgetlocation'
// import Budgetcolocation from './Budgetcolocation'


// import Travaux from './Travaux'
import Viager from './Viager'
import Typedemaison from './Vente/Typedemaison'
import Cuisine from './Cuisine'
import Heading from './Heading'
import Typeofgood from './Typeofgood'
import Typeofgoodneuf from './Typeofgoodneuf'

import Typeofoffre from './Typeofoffre'
import Meuble from './Meublé'


import Typeofad from './Typeofad'
import Surface from './Surface'
import Pieces from './Pieces'
import Salledebain from './Salledebain'
import Toilettes from './Toilettes'
import Balcon from './Balcon'
import Addresse from './addresse'
import Liste from './Vente/Liste'
// import Surfaceterrain from './Surfaceterrain'

import Amodiation from './Vente/Amodiation'

// import Terrasse from './Terrasse'
// import Veranda from './Veranda'
import Parking from './Parking'
import ParkingPar from './ParkingPar'
import BoxPar from './BoxPar'
import Cave from './Cave'
import Box from './Box'
import Exposition from './Exposition'
import Vue from './Vue'
import Chauffage from './Chauffage'
import Consommation from './Consommation'
// import Annee from './Annee'
import Copropriete from './Copropriete'
import Commodites from './Commodites'
import Affichage from './Affichage'
import Etage from './Etage'
import ImmeubleEtage from './ImmeubleEtage'
// import Budget from './../Budget'
// import Travauxvente from './Vente/Travauxvente'
// import Heading from './../Heading'

import Constructible from './Constructible'
import Accessibilite from './Colocation/Accessibilite'
import Longueur from './Vente/Longueur'
import Poids from './Vente/Poids'
import Informations from './Vente/Informations'
import Energievente from './Vente/Energievente'
import Propulsion from './Vente/Propulsion'
import Secteuractivite from './Vente/Secteuractivite'
import Disponibilitelocat from './Disponibilitelocat'
import Anneevent from './Vente/Anneevent'
import Listedeactivites from './Vente/Listedeactivites'
// import Vente from './../Filter_speciaux/Vente/Vente'
import { mixin as clickaway } from 'vue-clickaway';
import Surfaceterrain from './Surfaceterrain.vue'

import Colocation from './Colocation/Colocation'
import Neuf from './Neuf/Neuf'


export default {
    mixins: [ clickaway ],
    name: 'Popup',
    components: {  
    Modal,
    Typeofgood,
    Typeofoffre,
    Budget,
    ParkingPar,
    BoxPar,
    Accessibilite,
    // Budgetlocation,
    // Budgetcolocation,
    // Travaux,
    Viager,
    Typedemaison,
    Cuisine,
    Heading,
    Typeofad,
    Surface,
    Pieces,
    Salledebain,
    Toilettes,
    Balcon,
    Addresse,
    Surfaceterrain,
    Amodiation,
    Meuble,
    // Terrasse,
    // Veranda,
    Parking,
    Exposition,
    Cave,
    Box,
    Vue,
    Chauffage,
    Consommation,
    // Annee,
    Copropriete,
    Commodites,
    Affichage,
    Etage,
    ImmeubleEtage,
    Longueur,
    Poids,
    Informations,
    Energievente,
    Propulsion,
    // Travauxvente,
    Constructible,
    Secteuractivite,
    Disponibilitelocat,
    Anneevent,
    Liste,
    Listedeactivites,
    Colocation,
    Neuf,
    Typeofgoodneuf
    },
    data() {
    return {

      // globalvente:false,
      other:false,

    }

    },
    props:["AdresseModal","NatureModal","TypeofadModal","TypeofgoodModal","Surfacemin","Surfacemax","Piecesmin","Piecesmax"],
    methods:{ 
      closethepopup:function(){
            this.$emit("close");
      },
      away:function(){
            this.$emit("away");
      },
      removefromarraygood(){

      }
    },
    computed:{

    surfaceexcep:function(){
      if(this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
      var conditions=["Maison", "Loft", "Hôtel Particulier","Château","Immeuble & Batiment","Appartement","Péniche","Local commerciale"]
      if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
      // console.log("store array",this.$store.state.Filters.typeofgood)
      // console.error("hahowa ki returner true")
      return true
      }
      else {
        return false
      }
      }
      else {
        return false
      }

    },
    surfaceterrain:function(){
      if(this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"||this.$store.state.Filters.typeofad=="Neuf"){
      var conditions=["Fonds de commerce","Terrain","Maison" ]
      if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
      // console.log("store array",this.$store.state.Filters.typeofgood)
      // console.error("hahowa ki returner true")
      return true
      }
      else {
        return false
      }
      }
      else {
        return false
      }
      
    },
    Acheteretlocationetneuf:function(){
    if(this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"||this.$store.state.Filters.typeofad=="Neuf"){
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
    Acheteretlocation:function(){
    if(this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    return true
    }
    else {
      return false
    }
    },
    neuf:function(){
    if (this.$store.state.Filters.typeofad=="Neuf"){
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    },
    colocation:function(){
    if (this.$store.state.Filters.typeofad=="Colocation"){
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    },

    Fondsdecommercelocalcommercial:function(){
      if(this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
      var conditions=["Fonds de commerce","Local commerciale"]
      if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
      // console.log("store array",this.$store.state.Filters.typeofgood)
      // console.error("hahowa ki returner true")
      return true
      }
      else {
        return false
      }
      }
      else {
        return false
      }
    },
    Placedeport:function(){
    if(this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
      var conditions=["Place de port"]
      if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
      // console.log("store array",this.$store.state.Filters.typeofgood)
      // console.error("hahowa ki returner true")
      return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }
    },
    Peniche:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    var conditions = ["Péniche"];
    if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner true")
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    }
    else {
      return false
    }
    

    },
    Longueuretlargeur:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    var conditions = ["Péniche", "Place de port"];
    if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner true")
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    }
    else {
      return false
    }
    
    },
    Annedeconstruction:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    var conditions = ["Maison", "Loft", "Hôtel Particulier","Château","Immeuble & Batiment","Appartement","Péniche"];
    if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner true")
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    }
    else {
      return false
    }

    },
    Box:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    var conditions = ["Maison", "Loft", "Hôtel Particulier","Château","Immeuble & Batiment","Appartement",];
    if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner true")
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    }
    else {
      return false
    }
    },
    Cave:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    var conditions = ["Maison", "Loft", "Hôtel Particulier","Château","Immeuble & Batiment","Appartement"];
    if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner true")
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    }
    else {
    return false 
    }
    },
    Parkingvente:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    var conditions = ["Parking"];
    if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner true")
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    }
    else {
      return false
    }
    },
    Boxvente:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    var conditions = ["Box"];
    if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner true")
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    }
    else {
      return false
    }
    },
    Travaux:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    var conditions = ["Maison", "Loft", "Hôtel Particulier","Château","Immeuble & Batiment","Appartement","Parking","Péniche"];
    if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner true")
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    }
    else {
      return false
    }

    },
    npieces:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    var conditions = ["Maison", "Loft", "Hôtel Particulier","Château","Immeuble & Batiment","Péniche","Appartement"];
    if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner true")
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    }
    else {
      return false
    }
    },
    surface:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    var conditions = ["Maison", "Loft", "Hôtel Particulier","Château","Immeuble & Batiment","Appartement","Terrain","Péniche","Fonds de commerce","Local commerciale"];
    if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner true")
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    }
    else {
      return false
    }
    },
    dispo:function(){
    if (this.$store.state.Filters.typeofad=="Location"){
    var conditions = ["Maison", "Loft", "Hôtel Particulier","Château","Immeuble & Batiment","Appartement","Terrain","Péniche","Fonds de commerce","Local commerciale","Parking","Cave","Box","Place de port","Bureau"];
    if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner true")
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    }
    else {
      return false
    }
    },
    viager:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"){
    var conditions = ["Maison", "Loft", "Hôtel Particulier","Château","Immeuble & Batiment","Appartement","Terrain","Péniche","Fonds de commerce","Local commerciale"];
    if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner true")
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    }
    else{
      return false
    }
    },
    Typedemaison:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"){
    var conditions = ["Maison", "Loft"];
    if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner true")
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    }
    else{
      return false
    }
    },
    globalvente:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    var conditions = ["Maison", "Loft", "Hôtel Particulier","Château","Immeuble & Batiment","Appartement"];
    if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner true")
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    }
    else {
      return false
    }
    },
    Accessbi:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    var conditions = ["Maison", "Loft", "Hôtel Particulier","Château","Immeuble & Batiment","Appartement", "Péniche","Bureau","Place de port","Fonds de commerce","Local commerciale"];
    if(conditions.some(el=>this.$store.state.Filters.typeofgood.includes(el))){
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner true")
    return true
    }
    else{
    // console.log("store array",this.$store.state.Filters.typeofgood)
    // console.error("hahowa ki returner false")
    return false
    }
    }
    else {
      return false
    }
    },
    appartvente:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    if(this.$store.state.Filters.typeofgood.includes("Appartement")){
      return true
    }
    else {
      return false
    }
    }
    else {
      return false
    }
    },
    Immeubletvente:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    if(this.$store.state.Filters.typeofgood.includes("Immeuble & Batiment")){
      return true
    }
    else {
      return false
    }
    }
    else {
      return false
    }
    },
    maisonvente:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    if(this.$store.state.Filters.typeofgood.includes("Maison")){
      return true
    }
    else {
      return false
    }
    }
    else {
      return false
    }
    },
    Châteauvente:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    if(this.$store.state.Filters.typeofgood.includes("Château")){
      return true
    }
    else {
      return false
    }
    }
    else {
      return false
    }
    },
    Hôtelvente:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    if(this.$store.state.Filters.typeofgood.includes("Hôtel Particulier")){
      return true
    }
    else {
      return false
    }
    }
    else {
      return false
    }
    },
    Loftvente:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    if(this.$store.state.Filters.typeofgood.includes("Loft")){
      return true
    }
    else {
      return false
    }
    }
    else {
      return false
    }
    },
    terrainvente:function(){
    if (this.$store.state.Filters.typeofad=="Acheter"||this.$store.state.Filters.typeofad=="Location"){
    if(this.$store.state.Filters.typeofgood.includes("Terrain")){
      return true
    }
    else {
      return false
    }
    }
    else{
    return false
    }
    },
    },
    watch: {

      NatureModal:function(){
        // console.log("hada nature modal tbdel",val)
      }


    },
    mounted (){



    }
}

</script>
<style lang="scss" scoped>
@import "../../scss/main.scss";  
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
  width: 60%;
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
.popup a:hover{
  color: #000000;
}

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
@media  (max-width: 1300px) {
  .popup .popUpContainer{
    width: 80%;
    max-width: none;
    left: 14%;
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