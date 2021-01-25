<template>
    <div role="group" class="_9fvlwj0 mt-4">
        <section>
        
        <div>
             <div>
                <span class="Dip" >Nombre d’étages  minmaxm:  </span>
            </div>
            <input type="search" name="serch" value="0" class="srfcmin mr-8 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none">

        </div>
        <br>
        
        <div>
            <span class="Dip" >Étage de l’appartement :  </span>
        </div>
        <div  class="optionsoffilters grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 pt-2 flex">
                                                                
             <input @click="tog=false"   class="inp-cbx pt-2" id="Rez de chaussee" type="checkbox"  />
                <label class="cbx" for="Rez de chaussee"><span>
                    <svg width="12px" height="10px">
                        <use xlink:href="#check"></use>
                    </svg></span><span>Rez de chaussée</span>
                </label>

            <input @click="tog=false"  class="inp-cbx pt-2" id="Rez de jardin" type="checkbox" />
                <label class="cbx" for="Rez de jardin"><span>
                    <svg width="12px" height="10px">
                        <use xlink:href="#check"></use>
                    </svg></span><span>Rez de jardin</span>
                </label>

            <input@click="tog=false"   class="inp-cbx pt-2" id="1" type="checkbox" />
                <label class="cbx" for="1"><span>
                    <svg width="12px" height="10px">
                        <use xlink:href="#check"></use>
                    </svg></span><span>1</span>
                </label>
                
            <input @click="tog=false"  class="inp-cbx pt-2" id="2" type="checkbox"/>
                <label class="cbx" for="2"><span>
                    <svg width="12px" height="10px">
                        <use xlink:href="#check"></use>
                    </svg></span><span>2</span>
                </label>

            <input @click="tog=false"  class="inp-cbx pt-2" id="3" type="checkbox" />
                <label class="cbx" for="3"><span>
                    <svg width="12px" height="10px">
                        <use xlink:href="#check"></use>
                    </svg></span><span>3</span>
                </label>
            
            <input @click="tog=false"  class="inp-cbx pt-2" id="4" type="checkbox" />
                <label class="cbx" for="4"><span>
                    <svg width="12px" height="10px">
                        <use xlink:href="#check"></use>
                    </svg></span><span>4</span>
                </label>

            <input @click="tog=false"  class="inp-cbx pt-2" id="5" type="checkbox" />
                <label class="cbx" for="5"><span>
                    <svg width="12px" height="10px">
                        <use xlink:href="#check"></use>
                    </svg></span><span>5</span>
                </label>

            <input @click="tog=true" class="inp-cbx pt-2" id="Autres" type="checkbox" />
                <label class="cbx" for="Autres"><span>
                    <svg width="12px" height="10px">
                        <use xlink:href="#check"></use>
                    </svg></span><span>Autres</span>
                </label>

            <!--SVG Sprites-->
            <svg class="inline-svg">
                <symbol id="check" viewbox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </symbol>
            </svg>
        </div>

        <div  v-if="tog"  class="mt-4">
            <!-- <span class="Dip" >Pour chaque cuisine :</span> -->
          <input type="search" name="serch" placeholder="Préciser l'étage"  class="srfcmin mr-8 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none">

        </div>
   
        <!--  -->
       
         
        </section>
    </div>
</template>



<script>

export default {
    name:'Cuisine',
     components: {
         
    },
     data() {
      return {
        typeRXo:true,
        libre:true,
        tog:false,
        

      }
     },
  // watch:{
  //   tog:function(){
  //       this.tog=!this.tog;
  // }

  // }  
}
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";

// 

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
// 


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


.inputmix {
    padding-top:14px !important;
    padding-bottom: 28px !important;
    border-bottom: 1px solid rgb(235, 235, 235) !important;
}


input
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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

</style>
