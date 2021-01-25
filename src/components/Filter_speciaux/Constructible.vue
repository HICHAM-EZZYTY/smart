<template>
    <div role="group" class="_9fvlwj0">
        <section>
             <!-- <div class="mt-4">
                <span class="Dip" >Plusieurs case à cocher :</span>
            </div> -->
        <div  class="optionsoffilters grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  pt-2 flex">
                                                                

                                <input class="inp-cbx pt-2" id="Oui" type="radio" name="fs" />
                                <label class="cbx" for="Oui"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Oui</span>
                                </label>

                                <input class="inp-cbx pt-2" id="Nonx" type="radio" name="fs" />
                                <label class="cbx" for="Nonx"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Non</span>
                                </label>

                               <input class="pt-2 inp-cbx" id="peu importe" type="radio" name="fs"  checked/>
                                <label class="cbx" for="peu importe"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Peu importe</span></label>

                                         
                                <!--SVG Sprites-->
                                <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg>
                              </div>
                <div class="mt-8">
                     <span class="Dip" >Viabilisé :  </span>
                </div>
                <div  class="optionsoffilters grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  pt-2 flex">
                           

                                <input class="pt-2 inp-cbx" id="Viabilisé " type="radio" name="Gs"/>
                                <label class="cbx" for="Viabilisé "><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Viabilisé</span></label>

                                <input class="inp-cbx pt-2" id="Non viabilisé" type="radio" name="Gs"/>
                                <label class="cbx" for="Non viabilisé"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Non viabilisé</span>
                                </label>

                                <input class="inp-cbx pt-2" id="peu importes" type="radio" name="Gs" checked/>
                                <label class="cbx" for="peu importes"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Peu importe</span>
                                </label>
                                         
                                <!--SVG Sprites-->
                                <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg>

                              </div>
                    <div class="mt-8">
                     <span class="Dip" >Permis de construction :  </span>
                    </div>
                    <div  class="optionsoffilters grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  pt-2 flex">
                        

                                <input class="pt-2 inp-cbx" id="accordé " type="radio" name="ks"/>
                                <label class="cbx" for="accordé "><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Accordé</span></label>

                                

                                <input class="inp-cbx pt-2" id="Pas encore" type="radio" name="ks"/>
                                <label class="cbx" for="Pas encore"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Pas encore </span>
                                </label>

                                <input class="inp-cbx pt-2" id="peu importee" type="radio" name="ks" checked/>
                                <label class="cbx" for="peu importee"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Peu importe</span>
                                </label>
                                         
                                <!--SVG Sprites-->
                                <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg>

                              </div>

                    <div class="mt-8">
                     <span class="Dip" >Longueur façade :  </span>
                    </div>

                    <div class="Prixhonoraires  ">
                        <div class="flex ">
                                <input  class="espaceinpt mr-8 h-10 px-5   rounded-lg text-sm focus:outline-none" type="search" name="serch" placeholder="Longueur façade " />
                                <span class="long text-sm border border-2 rounded-l  px-4 py-2 mr-8 whitespace-no-wrap">m</span>

                        </div> 
                    </div>
    
        </section>
    </div>
</template>


<script>
export default {
     data() {
      return {
      }
     }
}
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";

.espaceinpt {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    border-top-right-radius: 0px;
}
.long {
    position: relative;
    right: 4rem;
    background-color: #2C8EEA;
    color: #F3F4F8;
    border: 0px solid #D4D6DC;
    border-radius: 8px;
    border-left: 0.1px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    font-size: 0.95rem;
}


.Dip{
    position: relative;
    top: -8px;
    color: #222222 !important; 
    
    opacity: 0.8;
    font-family: $gb;
    color: inherit !important;
    font-size: 0.9rem !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    margin: 0px !important;
    padding-top:28px !important
}

._9fvlwj0{
    border-bottom:1px solid #ebebeb !important;
    padding-bottom: 28px !important
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
  font-family: "Open Sans vis à vis ", Sans vis à vis -serif;
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
// 





</style>
