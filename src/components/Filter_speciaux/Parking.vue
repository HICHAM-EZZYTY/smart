<template>
    <div role="group" class="_9fvlwj0">
        <section>
        <div  class="optionsoffilters grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  pt-2 flex">
                                                                

                                <input @click="Park=true" class="inp-cbx pt-2" id="Oui6" type="radio" name="Ouiq" />
                                <label class="cbx" for="Oui6"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Oui</span>
                                </label>

                                <input @click="Park=false" class="inp-cbx pt-2" id="Non6" type="radio" name="Ouiq"/>
                                <label class="cbx" for="Non6"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Non</span>
                                </label>


                                <input @click="Park=true"  class="pt-2 inp-cbx" id="Tous6" type="radio" name="Ouiq" checked />
                                <label class="cbx" for="Tous6"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Tous</span></label>


                                <!--SVG Sprites-->
                                <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg>

                              </div>
                <div v-if="Park" role="group" class="inputmix">
                    <div class="mt-6">
                        <span class="Dip" >Nombre minimum de parking  :  </span>
                    </div>
                    <section>
                        <input type="search" name="serch" placeholder="minimum" class="srfcmin mr-8 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none">
                    </section>
                </div>

                <div v-if="Park" class="mt-6">
                        <span class="Dip" >Type de parking :  </span>
                </div>

                <div v-if="Park"  class="optionsoffilters grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  pt-2 flex">
                                                                
                                <input class="pt-2 inp-cbx" id="ouvert " type="checkbox" name="Tous" />
                                <label class="cbx" for="ouvert "><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Ouvert </span></label>

                                <input class="inp-cbx pt-2" id="clos " type="checkbox" name="Tous"/>
                                <label class="cbx" for="clos "><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Clos </span>
                                </label>

                                <!-- <input class="inp-cbx pt-2" id="Tous7 " type="checkbox" name="Tous" checked/>
                                <label class="cbx" for="Tous7 "><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Tous </span>
                                </label> -->

                                <!--SVG Sprites-->
                                <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg>

                              </div>
              <div v-if="Park" class="mt-6">
                  <span class="Dip" >Borne électrique pour véhicule  :  </span>
              </div>
               <div v-if="Park" class="optionsoffilters grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  pt-2 flex">
                                                                

                                <input class="inp-cbx pt-2" id="OUI " type="radio" name="rad" />
                                <label class="cbx" for="OUI "><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Oui </span>
                                </label>

                                <input class="inp-cbx pt-2" id="NON" type="radio" name="rad"/>
                                <label class="cbx" for="NON"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Non </span>
                                </label>

                                <input class="pt-2 inp-cbx" id="TOUS " type="radio" name="rad" checked />
                                <label class="cbx" for="TOUS "><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Tous </span></label>


                                <!--SVG Sprites-->
                                <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg>

                              </div>
                      <!-- <div class="mt-6">
                          <span class="Dip" >Surface  :  </span>
                      </div>

                              <Parkingvente /> -->
        </section>
    </div>
</template>



<script>
// import Parkingvente from './Vente/Parkingvente'


export default {

     components: {
    //  Parkingvente
     },
     data() {
      return {
        Park: true,
      }
     }
}
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";


.Dip{
    position: relative;
    top: -8px;
    color: rgb(0, 0, 0);
    
    opacity: 0.8;
    font-family: $gb;
    color: inherit !important;
    font-size: 0.9em !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    margin: 0px !important;
    padding-top:28px !important
}
._9fvlwj0{
    border-bottom:1px solid #ebebeb !important;
    padding-bottom: 8px !important
}

.cbx {
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  padding : 6px 0px;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s ease;
}
.cbx:not(:last-child) {
  margin-right: 6px;
}
.cbx:hover {
  background: rgba(0,119,255,0.06);
  padding-left:8px;
}
.cbx span {

  float: left;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  transform: scale(1);
  border: 1px solid #cccfdb;
  transition: all 0.2s ease;
  box-shadow: 0 1px 1px rgba(0,16,75,0.05);
}
.cbx span:first-child svg {
  position: absolute;
 top: 6px;
  left: 4px;
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
    padding-left: 12px;
    line-height: 23px;
    font-size: 16px;
    font-family: $gr !important;
    color: black;
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
// input
.srfcmin{
  border:1px solid #D4D6DC
}

.srfcmin:sel{
  border:1px solid #D4D6DC
}
input:focus { 
    outline: none !important;
    border-color: $main;
    box-shadow: 0 0 2px $main;
}

._19umvjy {
    color: rgb(34, 34, 34) !important;
    font-weight: 600 !important;
    margin-bottom: 24px !important;
    font-size: 22px !important;
    line-height: 26px !important;
}
._14i3z6h {
    color: inherit !important;
    font-size: 1.3em !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    margin: 0px !important;
    padding: 0px 0px 20px !important;
}


</style>
