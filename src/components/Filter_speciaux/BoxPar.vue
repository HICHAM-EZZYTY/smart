<template>
    <div role="group" class="_9fvlwj0">
        <section>
        <!-- <div  class="optionsoffilters grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 pt-2 flex">
                                                                

                                <input class="inp-cbx pt-2" id="Ouil" type="radio" name="Box" />
                                <label class="cbx" for="Ouil"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Oui</span>
                                </label>

                                <input class="inp-cbx pt-2" id="Non" type="radio" name="Box"/>
                                <label class="cbx" for="Non"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Non</span>
                                </label>

                                <input class="pt-2 inp-cbx" id="Tousil" type="radio" name="Box" checked/>
                                <label class="cbx" for="Tousil"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Tous</span></label>


                                <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg>

                              </div> -->

                <div role="group" class="inputmix">
                    <div class="mt-6">
                        <span class="Dip" >Nombre minimum de Box  :  </span>
                    </div>
                    <section>
                        <input type="search" name="serch" placeholder="minimum" class="srfcmin mr-8 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none">
                    </section>
                </div>

                <div class="flex w-full col-span-3 pl-2">
                  <div class="mt-6">
                        <span class="Dip" >Borne électrique pour véhicule:  </span>
                    </div>
                            <div class="togglebtn ml-2 sm:ml-4 md:ml-4">
                                <label class="toggle-control">
                                <input type="checkbox" >
                                <span class="control"></span>
                                </label>
                            </div>

                    </div>

                              <!-- <Boxvente /> -->
        </section>
    </div>
</template>


<script>
// import Boxvente from './Vente/Boxvente'

export default {
    components: {
    //  Boxvente
     },
     data() {
      return {
      }
     }
}
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";

._9fvlwj0{
    border-bottom:1px solid #ebebeb !important;
    padding-bottom: 28px !important
}
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
// 

.togglebtn{
    padding-top: 5px;
}
.toggle-control {
  display: block;
  position: relative;
  padding-left: 100px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.toggle-control input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.toggle-control input:checked ~ .control {
  background-color: $main;
}
.toggle-control input:checked ~ .control:after {
  left: 30px;
}
.toggle-control .control {
    position: absolute;
    top: 45px;
    right: 17.4rem;
    height: 19px;
    width: 45px;
    border-radius: 25px;
    background-color: darkgray;
    transition: background-color 0.15s ease-in;
}
.toggle-control .control:after {
  content: "";
  position: absolute;
  left: 5px;
  top: 2px;
  width: 14px;
  height: 14px;
  border-radius: 25px;
  background: white;
  -webkit-transition: left 0.15s ease-in;
  transition: left 0.15s ease-in;
}

// 
.srfcmin{
  border:1px solid #D4D6DC
}

.srfcmin:sel{
  border:1px solid #D4D6DC
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



</style>
