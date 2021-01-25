<template>
<div>
  <div class="adddetails" ref="adddetails">
    <Navbarright />
    <div class="headerlayout ml-4 grid gap-1 lg:grid-cols-9">
      <div class="lg:col-span-2">
        <div class="picbox hidden flex mb-2 lg:flex">
          <div
            style="background-image: url('assets/Addétails/Pic2.jpg')"
            class="picsofad h-48 sm:h-64"
          ></div>
          <div
            style="background-image: url('assets/Addétails/Pic3.jpg')"
            class="picsofad h-48 ml-2 sm:h-64"
          ></div>
        </div>

        <div class="picbox mb-2 hidden lg:flex">
          <div
            style="background-image: url('assets/Addétails/Pic4.jpg')"
            class="picsofad h-48 sm:h-64"
          ></div>
          <div
            style="background-image: url('assets/Addétails/Pic5.jpg')"
            class="picsofad h-48 ml-2 sm:h-64"
          ></div>
        </div>

        <div class="picbox flex mb-2">
          <div
            style="background-image: url('assets/Addétails/Pic6.jpg')"
            class="picsofad h-48 sm:h-64"
          ></div>
          <div
            style="
              background-image: url('assets/Addétails/Pic7.jpg');
              background-color: rgba(33, 49, 66, 0.6);;
              background-blend-mode:  multiply;
            "
            class="picsofad h-48 ml-2 sm:h-64"
          >
            <p>+13</p>
          </div>
        </div>
      </div>

      <div
        class="h-64 lg:col-span-5 panoramapic"
        style="background-image: url('assets/Addétails/Pic1.jpg')"
      ></div>

      <div class="hidden lg:block lg:col-span-2">
        <div
          style="background-image: url('assets/Addétails/map.svg')"
          class="mapvector"
        >
          <img src="assets/Addétails/markerpoint.svg" />
          <div class="mapbanner">
            <div class="containerbtn flex">
              <div @click="showmap()" class="explorerbtn">Explorer quartier</div>
              <div class="calculerbtn">calculer itinéraire</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mapbannerfixed block lg:hidden">
      <div class="containerbtnfixed flex">
        <div class="explorerbtnfixed">Explorer quartier</div>
        <div class="calculerbtnfixed">calculer itinéraire</div>
      </div>
    </div>

    <div class="layoutbody ml-4 mt-8 grid lg:gap-28 lg:grid-cols-10">
      <div class="lg:col-span-2">
        <div class="pricebtn">
          <p>7644,000 €</p>
        </div>
        <div class="divider ml-4"></div>
        <div
          v-if="
            testingObj.isViager &&
              DisableFor(['colocation', 'location'], testingObj.annonceType)
          "
          class="pricepartion mr-4 ml-4 mt-3 flex lg:mr-0"
        >
          <p>Rente :</p>
          <h1
            :style="
              AllowFor(['vente'], testingObj.annonceType)
                ? {}
                : { color: '#94A6B5' }
            "
          >
            344,000 € /mois
          </h1>
        </div>
        <div class="pricepartion mr-4 ml-4 mt-3 flex lg:mr-0">
          <p>À partir de :</p>
          <h1 style="color: #94a6b5">344,000 € /mois</h1>
        </div>

        <div class="pricepartion mr-4 ml-4 mt-3 flex lg:mr-0">
          <p>Disponibilité :</p>
          <h1 style="color: #94a6b5">39,000 €</h1>
        </div>
        <!-- <div class=" mr-4 ml-4 mt-3 flex flex-column lg:mr-0">
          <p>Tags :</p>
        </div> -->
        <!-- <div class="badges flex flex-wrap">
          <div class="Tags mt-3  mr-3 flex relative">
            <p>Tags</p>
          </div>

          <div class="Tags mt-4 mr-3 flex relative">
            <p>Tags1</p>
          </div>

          <div class="Tags mt-4 mr-3 flex relative">
            <p>Tags2</p>
          </div>

          <div class="Tags mt-4 mr-3 flex relative">
            <p>Tags3</p>
          </div>
        </div> -->
        <!-- Tags  -->

        <div
          class="badgeairbnb"
          v-if="
            AllowFor(AMI, testingObj.bienType) ||
              AllowFor(LCHP, testingObj.bienType) ||
              DisableFor(LFT, testingObj.bienType)
          "
        >
          <div class="badgeheader flex">
            <div class="circle">
              <p>$</p>
            </div>

            <div class="badgeheading ml-2">
              <p>Vous pensez Airbnb ?</p>
            </div>
          </div>

          <h2>Rue de Gravigny Chilly-Mazarin (91380)</h2>

          <div class="badgeinpts grid grid-cols-3 gap-2 mt-2">
            <input type="number" placeholder="Piéces" />
            <input type="number" placeholder="Chambres" />
            <input type="number" placeholder="Surfaces" />
          </div>
        </div>
        <button class="btnbdg" v-if="DisableFor(LFT, testingObj.bienType)">
          Calculer le revenu
        </button>
      </div>
      <div class="lg:col-span-8 lg:mt-4 lg:ml-8">
        <div class="grid grid-cols-3 gap-4">
          <div class="adressofthead flex flex-wrap col-span-2">
            <h1 class="mb-2">Marseille , 8éme</h1>
            <h2 class="mb-2">{{ this.testingObj.bienType }}</h2>
            <h3 class="sm:mb-2 lg:ml-2">Contacter l’annonceur</h3>
            <div class="videoofthead flex">
              <img
                src="../../assets/Pics/Playicon.svg"
                alt="video de l'annonce icon"
              />
              <p>Video</p>
            </div>
            <div class="advisitethreed">
              <h4>3D</h4>
            </div>

            <!-- PopupShare -->
          </div>
          <div class="popupshare flex justify-end mr-6">
            <div class="advisitethreedline">
              <button class="">
                <img
                  src="../../assets/Pics/line.svg"
                  @click="toggleModal"
                  alt=""
                />
              </button>
            </div>
            <div class="advisitethreeddeleteD">
              <button class="Mupop">
                <img
                  src="../../assets/Pics/deleteD.svg"
                  alt=""
                  @click="reportBtn"
                />
              </button>
            </div>

            <PopupShare
              v-if="Modalview"
              @closeS="closeSpop"
              @awayShare="awayShare"
            />
            <!--  -->
            <PopupSignaler
              v-if="reportModal"
              @closeS="closedReport"
              @awayShare="closedReport"
            />
          </div>
        </div>
        <div class="tabs-wrapper">
          <div class="tabs">
            <p
              @click="
                activeLink($event);
                indexoftabs = 0;
              "
              class="active"
              id="firsttab"
            >
              Description
            </p>
            <p
              @click="
                activeLink($event);
                indexoftabs = 1;
              "
            >
              À proximité
            </p>
            <p
              @click="
                activeLink($event);
                indexoftabs = 2;
              "
              v-if="AllowFor(this.AMI, testingObj.bienType)"
            >
              Historique des prix
            </p>
            <p
              @click="
                activeLink($event);
                indexoftabs = 3;
              "
              v-if="AllowFor(this.AMI, testingObj.bienType)"
            >
              Biens vendus
            </p>
            <p
              @click="
                activeLink($event);
                indexoftabs = 4;
              "
            >
              Simulation de mensualité
            </p>
            <p
              @click="
                activeLink($event);
                indexoftabs = 5;
              "
            >
              À propos de la ville
            </p>
          </div>
        </div>

        <Description v-if="indexoftabs == 0" :obj="testingObj" class="mt-4" />

        <!-- bedel hada -->
        <Description v-if="false" :obj="testingObj" class="mt-4" />

        <Aproximite
          v-if="indexoftabs == 1"
          :obj="testingObj"
          :IsLocation="false"
          class="mt-4"
        />

        <PriceHistory v-if="indexoftabs == 2" :obj="testingObj" class="mt-4" />

        <Table v-if="indexoftabs == 3" :obj="testingObj" class="mt-4" />

        <Input v-if="indexoftabs == 4" :obj="testingObj" class="mt-4" />

        <Plan v-if="indexoftabs == 6" class="mt-4" />

        <apropos v-if="indexoftabs == 5" :obj="testingObj" class="mt-4" />
      </div>
    </div>
  </div>

      <Export
          v-if="neighborpop"
          @closetemptrajet="closeneighborpop"   
          />

          </div>
</template>

<script>
import Navbarright from "../../components/Navbarright";
import Table from "../../components/HeaderAd/Table";
import Input from "../../components/HeaderAd/input";
import Description from "../../components/HeaderAd/Description";
import PriceHistory from "../../components/HeaderAd/Historiquedesprix";
import apropos from "../../components/HeaderAd/apropos";
import Aproximite from "../../components/HeaderAd/Aproximité";
import Plan from "../../components/HeaderAd/Plan";

import PopupShare from "../../components/HeaderAd/PopupShare";
import PopupSignaler from "../../components/HeaderAd/PopupSignaler";

import Export from '../../components/Filter_speciaux/Exploretheneighbor'


export default {
  name: "AddétailsVente",

  components: {
    Navbarright,
    Table,
    Input,
    Description,
    PriceHistory,
    apropos,
    Aproximite,
    Plan,
    PopupShare,
    PopupSignaler,
    Export
  },
  data() {
    return {
        neighborpop:false,
        indexoftabs: 0,
        AdresseModal:"",
        Modalview:false,
        reportModal: false,
       
        AMI: ["Appartement", "Maison", "Immeuble"], 
        LCHP: ["Loft","château","Hôtel particulier","Péniche"],
        LFT:["FondsCommerce","Terrain", "Local Commmercial"],
        PCBP: ["Parking","cave","boxe","place de port"],
        
        AnonceTypes: new Array("vente","location","colocation","neuf"),
        
        testingObj: {
            description : "Vente appartement Type 2 avec BOX FERME Quartier RABATAU / ROUET 13008 Marseille EXCLUSIVITÉ. Grand et beau Type 2 avec TERRASSE et BOX fermé en sous-sol, dans une belle résidence de standing de 2008, fermée et sécurisée. En parfait état, et très bien situé à proximité des commerces, métro, accès autoroutier, vous serez séduit par sa luminosité. Au 3ème étage avec ascenseur, ce charmant type 2 est très bien agencé, avec son séjour exposé",
            annonceType : "vente", 
            bienType : "Appartement", // this props should be null unless it's a "vente" or "location"  
            isViager : true 
        }
    };
  },
  methods: {
    activeLink: function(event) {
      document.querySelector(".active").className = "notactive";
      console.log("hada event", event.target.className);
      if (event.target.className == "active") {
        event.target.className = "notactive";
      } else {
        event.target.className = "active";
      }
    },
    toggleModal: function() {
      // this.$refs.filter.style.zIndex="2"
      // console.log("h")
      console.log(this.Modalview);
      this.Modalview = true;
    },
    reportBtn: function() {
      this.reportModal = true;
    },
    closedReport: function() {
      this.reportModal = false;
    },
    showmap:function(){

      this.$refs.adddetails.style.display="none"
      this.neighborpop=true

    },
    awayShare: function() {
      this.$refs.filter.style.zIndex = "1";
      this.Modalview = false;
    },

    closeneighborpop:function(){
      this.$refs.adddetails.style.display="block"
      this.neighborpop=false

    },

      closeSpop:function(){
        this.Modalview=false
      },

        // if we pass all/All ass the value you can ignore the string.
        AllowFor(value, string = null){
          if(value == "All" || value == "all"){          
            return true
          }
          return value.includes(string);
        }, 

        DisableFor(value, string = null){
           if(value == "All" || value == "all"){          
            return false
          }
          return !value.includes(string);
        }
       




  },

};
</script>

<style lang="scss">
@import "../../scss/main.scss";

.Mupop {
  border: none !important;
  outline: none !important;
}
.Tags {
  background-color: #f6f6f6;
  height: 2rem;
  width: 9rem;
  border-radius: 25px;
  text-align: center;
  p {
    color: #5e5d5d;
    font-family: $ur;
    font-size: 0.88rem;
    position: absolute;
    left: 36px;
    top: 4px;
  }
  img {
    height: 1.2rem;
    position: absolute;
    left: 11px;
    top: 6px;
  }
}

//
.tabs-wrapper {
  margin-top: 1rem;
}

$underline-size: 1.7px;
$underline-color: $main;

.active {
  border-bottom: 1.5px solid $main !important;
  color: $main !important;
}

.tab {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-bottom: 1.5px solid #e1e1e4;

  &:after {
    content: "";
    display: block;
    bottom: -0.1px;
    left: 0;
    width: 100%;
    height: $underline-size;
    position: absolute;
    background-color: $underline-color;
    transition: transform ease 200ms, opacity ease 0ms 200ms;
    transform: translateX(100%);
    opacity: 0;
  }
}

// Page styles not needed
.tabs {
  p {
    display: inline-block;
    text-decoration: none;
    color: #8a8a8a;
    padding: 1rem;
    padding-left: 12px;
    padding-top: 0.2rem;
    padding-bottom: 0.5rem;
    font-family: $um;
    font-size: 0.92rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-bottom: 1.5px solid #e1e1e4;
  }
}
// p.tab {

// }

.adressofthead {
  // margin-bottom: 8rem;
  h1 {
    font-family: $ub;
    color: #000000;
    font-size: 1.35rem;
  }
  h2 {
    font-family: $gsb;
    color: rgba(44, 142, 234, 0.8);
    border: 1px solid #2c8eea;
    padding-top: 5px;
    padding-bottom: 1px;
    padding-right: 14px;
    padding-left: 14px;
    border-radius: 6px;
    margin-left: 1rem;
    font-size: 0.9rem;
  }
  h3 {
    font-family: $gsb;
    color: white;
    // padding-top: 5px;
    padding-bottom: 1px;
    padding-right: 8px;
    padding-left: 8px;
    border-radius: 6px;
    font-size: 0.9rem;
    background-color: $main;
  }
  .advisitethreed {
    margin-left: 0.5rem;

    h4 {
      font-family: $gsb;
      color: white;
      width: 2rem;
      height: 2rem;
      border-radius: 40px;
      margin-left: 0.5rem;
      font-size: 0.8rem;
      text-align: center;
      background-color: $main;
      vertical-align: middle;
      display: table-cell;
    }
  }
  .advisitethreeddeleteD {
    margin-left: 0.8rem;
  }
  .advisitethreedline {
    margin-left: 0.8rem;
    margin-top: 4px;
  }

  .videoofthead {
    position: relative;
    background-color: #dceefe;
    margin-left: 0.5rem;
    width: 5.3rem;
    border-radius: 39px;
    p {
      position: absolute;
      font-family: $gm;
      color: #2c8eea;
      font-size: 0.85rem;
      top: 50%;
      transform: translate(85%, -50%);
      box-shadow: 0px 4px 25px 0px #000000 20% inset;
    }
    img {
      position: absolute;
      left: 15%;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
}

input:focus {
  outline: none;
}
button:focus {
  outline: none;
}

.btnbdg {
  background-color: $main;
  margin-top: 11px;
  float: left;
  height: 3rem;
  width: 10rem;
  border-radius: 10px;
  font-family: $gsb;
  color: white;
  font-size: 0.78rem;
  margin-bottom: 17px;
}

.badgeinpts {
  display: block;
  margin: 0 auto;
  width: 80%;
  input {
    background-color: transparent;
    border: 1px solid white;
    border-radius: 4px;
    color: white;
    padding-left: 2px;
    font-size: 0.9rem;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    font-family: $ur; /* Firefox */
    font-size: 0.68rem;
    padding-left: 4px;
    opacity: 0.9;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: red;
  }
}

.badgeheading {
  position: relative;
  margin-top: 0.2rem;
  width: 9rem;
  height: 1.5rem;
  border-radius: 8px;
  background-color: #dceefe;
  p {
    position: absolute;
    font-family: $ub;
    color: #2c8eea;
    font-size: 0.7rem;
    left: 10px;
    top: 4px;
  }
}

.badgeheader {
  padding-top: 0.8rem;
  padding-left: 1rem;
  .circle {
    position: relative;
    height: 2rem;
    width: 2rem;
    background-color: #dceefe;
    border-radius: 50%;
    padding-top: 12px;
    padding-left: 16px;
    p {
      position: absolute;
      font-family: $ub;
      color: #2c8eea;
      font-size: 1.5rem;
      bottom: -2px;
      left: 9px;
    }
  }
}

.badgeairbnb {
  margin-top: 1.2rem;
  background-color: $main;
  width: 100%;
  height: 7rem;
  border-radius: 12px;
  margin-left: 4px;
  h2 {
    color: white;
    font-family: $um;
    font-size: 0.75rem;
    margin-top: 6px;
    margin-left: 1rem;
  }
}

.pricepartion {
  border-bottom: 1px solid #e6f3fd;
  padding-bottom: 0.25rem;

  h1 {
    color: #2c8eea;
    font-family: $ub;
    font-size: 0.97rem;
    margin-left: auto;
  }
  p {
    color: #0e2a4d;
    font-family: $ur;
    font-size: 0.88rem;
    padding-top: 1px;
  }
}

.divider {
  border-bottom: 1px solid #e6f3fd;
  height: 1rem;
  margin-top: 0.25rem;
}

.pricebtn {
  height: 4.2rem;
  width: 100%;
  background-color: #dceefe;
  border-radius: 12px;
  display: table;
  margin: 0 auto;

  p {
    font-family: $ub;
    color: rgba(44, 142, 234, 0.8);
    text-align: center;
    vertical-align: middle;
    display: table-cell;
    font-size: 1.4rem;
  }
}

.picsofad {
  margin-top: 0.3rem;
  height: 7.1rem;
  width: 46%;
  border-radius: 10px;
  background-size: cover;
  display: table;
  p {
    font-family: $ub;
    color: white;
    font-size: 1rem;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    cursor: pointer;
  }
}
.panoramapic {
  margin-top: 0.3rem;
  border-radius: 10px;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  width: 94%;
}

.mapvector {
  position: relative;
  margin-top: 0.3rem;
  height: 23rem;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  width: 94%;
  border-radius: 10px;
  img {
    position: absolute;
    top: 24%;
    left: 21%;
  }

  .mapbanner {
    bottom: 8px;
    position: absolute;
    height: 3.3rem;
    left: 2%;
    width: 95%;
    border-radius: 18px;
    background-color: #ffffff;
    box-shadow: 0px 12px 24px rgba(58, 58, 68, 0.08),
      0px 24px 48px rgba(90, 91, 106, 0.08);
  }
  .containerbtn {
    width: 100%;
    margin: 0 auto;
  }
  .explorerbtn {
    background-color: #2c8eea;
    border-radius: 6px;
    height: 2rem;
    width: 45%;
    margin-left: 9px;
    margin-top: 9px;
    font-family: $gsb;
    color: white;
    text-align: center;
    padding-top: 8px;
    cursor: pointer;
  }
  .calculerbtn {
    background-color: #f2f2f4;
    border-radius: 6px;
    height: 2rem;
    width: 45%;
    margin-left: 9px;
    margin-top: 9px;
    font-family: $gsb;
    color: #4a4b57;
    text-align: center;
    padding-top: 8px;
    cursor: pointer;
  }
}

.mapbannerfixed {
  z-index: 10;
  bottom: 8px;
  position: fixed;
  height: 3.3rem;
  left: 50%;
  transform: translate(-50%, 0);
  width: 20rem;
  border-radius: 7px;
  background-color: #ffffff;
  box-shadow: 0px 12px 24px rgba(58, 58, 68, 0.8),
    0px 24px 48px rgba(90, 91, 106, 0.8);
}
.containerbtnfixed {
  width: 100%;
  margin: 0 auto;
}
.explorerbtnfixed {
  background-color: #2c8eea;
  border-radius: 6px;
  height: 2rem;
  width: 45%;
  margin-left: 9px;
  margin-top: 9px;
  font-family: $gsb;
  color: white;
  text-align: center;
  padding-top: 8px;
  cursor: pointer;
  font-size: 0.8rem;
}
.calculerbtnfixed {
  background-color: #f2f2f4;
  border-radius: 6px;
  height: 2rem;
  width: 45%;
  margin-left: 9px;
  margin-top: 9px;
  font-family: $gsb;
  color: #4a4b57;
  text-align: center;
  padding-top: 8px;
  cursor: pointer;
  font-size: 0.8rem;
}

@media (min-width: 420px) {
  .adressofthead {
    margin-left: 4px;
    h2 {
      margin-right: 20%;
    }
  }

  .badgeairbnb {
    margin-right: auto;
    width: 75%;
  }

  .btnbdg {
    margin-bottom: 17px;
    float: left;
    margin-left: 4px;
  }
}

@media (min-width: 520px) {
  .badgeairbnb {
    width: 65%;
    // margin: 0 auto;
    // margin-top: 2rem;
  }
  .pricebtn {
    width: 55%;
  }
  .adressofthead {
    h2 {
      margin-right: 0.5rem;
    }
    h3 {
      height: 2rem;
      margin-right: 5%;
    }
    .videoofthead {
      margin-left: 0rem;
    }
  }
}

@media (min-width: 610px) {
  .adressofthead {
    h3 {
      height: 2rem;
      margin-right: 18%;
    }
  }
}
@media (min-width: 667px) {
  .adressofthead {
    width: 100%;
    margin: 0 auto;
    // margin-bottom: 4rem;
    h3 {
      margin-right: 0.5rem;
    }
    .videoofthead {
      height: 2rem;
    }
  }
}

@media (min-width: 720px) {
  .badgeairbnb {
    width: 55%;
  }
}
@media (min-width: 820px) {
  .badgeairbnb {
    width: 45%;
  }
  .pricebtn {
    width: 45%;
  }
}

@media (min-width: 920px) {
  .badgeairbnb {
    width: 35%;
  }
  .pricebtn {
    width: 35%;
  }
}

@media (min-width: 1024px) {
  .tabs-wrapper {
    margin-top: 0rem;
  }

  #firsttab {
    padding-left: 0px;
  }

  .adressofthead {
    // margin-bottom: 8rem;
    h1 {
    }
    h2 {
      padding-top: 5px;
      padding-bottom: 1px;
      padding-right: 14px;
      padding-left: 14px;
      margin-left: 1rem;
    }
    h3 {
      margin-top: 2px;
      padding-top: 10px;
      padding-bottom: 1px;
      padding-right: 14px;
      padding-left: 14px;
    }
    .advisitethreed {
      margin-left: 0.5rem;

      h4 {
        width: 2rem;
        height: 2rem;
        border-radius: 40px;
        margin-left: 0.5rem;
        vertical-align: middle;
        display: table-cell;
      }
    }

    .videoofthead {
      width: 5.3rem;
      margin-bottom: 8px;
    }
  }

  .panoramapic {
    width: 98.4%;
    height: 23rem !important;
  }

  .picsofad {
    height: 7.1rem !important;
  }
  .explorerbtn {
    font-size: 0.65rem;
  }
  .calculerbtn {
    font-size: 0.65rem;
  }
  .badgeairbnb {
    margin-top: 1.2rem;
    width: 100%;
    height: 7rem;
    margin-left: 4px;
  }
  .pricebtn {
    width: 100%;
  }

  .btnbdg {
    margin-top: 11px;
    float: right;
    margin-bottom: 77px;
    margin-left: 0px;
  }
}

@media (max-width: 1200px) and (min-width: 1024px) {
  .pricepartion {
    h1 {
      font-size: 0.9rem;
    }
  }
  .badgeairbnb {
    height: 8rem;
  }
  .badgeheader {
    padding-left: 0.5rem;
  }
  .badgeinpts {
    width: 90%;
    input {
      padding-left: 0px;
    }
  }
}
</style>
