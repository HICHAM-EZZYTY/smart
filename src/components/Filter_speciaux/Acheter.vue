<template>
    <div role="group" class="_9fvlwj0">
        <section>
            <legend class="._19umvjy">
                <h2 class="_14i3z6h">Quel est votre projet ?</h2>
            </legend>
            <!--  -->
            <div class="switch-field pt-6 optionsoffilters">
                                  <input @click="vente" type="radio" id="radio-one" name="switch-one" value="yes" checked/>
                                  <label for="radio-one">Vente</label>
                                  
                                  <input @click="location"   type="radio" id="radio-two" name="switch-one" value="no" />
                                  <label for="radio-two">Location</label>
                                  
                                  <input @click="neuf" type="radio" id="radio-fourth" name="switch-one" value="ofc" />
                                  <label for="radio-fourth">Neuf</label>

                                  <input @click="colocation" type="radio" id="radio-three" name="switch-one" value="ofc" />
                                  <label for="radio-three">Colocation</label>
                                                                                              
                              </div>
            <!--  -->
            <!-- <legend class="._19umvjy mt-4">
                <h2 class="_14i3z6h ">Quel est votre projet ?</h2>
            </legend> -->
            <!--  -->
                <div   id="filter3" class="ntrfilter   top-3 left-0 mt-2 py-2 bg-white rounded-md ">
                                      
                              <div style="padding-top:0px" class="ntrfilterheading ">
                                <legend class="._19umvjy mt-4">
                                <h2 v-if="Filtervente" class="pt-3 _14i3z6h ">Que voulez-vous acheter ?</h2>
                                <h2 v-if="Filterlocation" class="pt-3 _14i3z6h">Que voulez-vous louer ?</h2>
                                <h2 v-if="Filterneuf" class="pt-3 _14i3z6h">Que voulez-vous acheter ?</h2>
                                </legend>
                              </div>

                              <div v-if="Filtervente" class="optionsoffilters grid grid-cols-3 pt-2  flex">
                                                                
                                <input class="pt-2 inp-cbx" id="Appartement" type="checkbox"/>
                                <label class="cbx" for="Appartement"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Appartement</span></label>

                                <input class="inp-cbx pt-2" id="Maison" type="checkbox"/>
                                <label class="cbx" for="Maison"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Maison</span></label>

                                <input class="inp-cbx pt-2" id="Terrain" type="checkbox"/>
                                <label class="cbx" for="Terrain"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Terrain</span></label>
                                    
                                <input class="inp-cbx pt-2" id="Parking/Cave/Box" type="checkbox" style="display: none"/>
                                <label class="cbx" for="Parking/Cave/Box"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Parking/Cave/Box</span></label>

                                <input class="inp-cbx pt-2" id="Bureau" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Bureau"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Bureau</span></label>

                                <input class="inp-cbx pt-2" id="Château" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Château"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Château</span></label>

                                
                                <input class="inp-cbx pt-2" id="Hôtel Particulier" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Hôtel Particulier"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Hôtel Particulier</span></label>
                                
                                <input class="inp-cbx pt-2" id="Immeuble & Batiment" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Immeuble & Batiment"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Immeuble & Batiment</span></label>

                                <input class="inp-cbx pt-2" id="péniche" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="péniche"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Péniche</span></label>

                                
                                <input class="inp-cbx pt-2" id="place de port" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="place de port"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Place de port</span></label>


                                <input class="inp-cbx pt-2" id="Fonds de commerce" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Fonds de commerce"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Fonds de commerce</span></label>


                                <input class="inp-cbx pt-2" id="Local commerciale" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Local commerciale"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Local commerciale</span></label>
                                <!--SVG Sprites-->
                                <!-- <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg> -->

                              </div>

                          <div v-if="Filterlocation" class="optionsoffilters grid grid-cols-3 pt-2 pl-5 flex">                                      
                                <input class="pt-2 inp-cbx" id="Appartement" type="checkbox"/>
                                <label class="cbx" for="Appartement"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Appartement</span></label>

                                <input class="inp-cbx pt-2" id="Maison" type="checkbox"/>
                                <label class="cbx" for="Maison"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Maison</span></label>

                                <input class="inp-cbx pt-2" id="Terrain" type="checkbox"/>
                                <label class="cbx" for="Terrain"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Terrain</span></label>
                                    
                                <input class="inp-cbx pt-2" id="Parking/Cave/Box" type="checkbox" style="display: none"/>
                                <label class="cbx" for="Parking/Cave/Box"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Parking/Cave/Box</span></label>

                                <input class="inp-cbx pt-2" id="Bureau" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Bureau"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Bureau</span></label>

                                <input class="inp-cbx pt-2" id="Château" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Château"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Château</span></label>

                                
                                <input class="inp-cbx pt-2" id="Hôtel Particulier" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Hôtel Particulier"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Hôtel Particulier</span></label>
                                
                                <input class="inp-cbx pt-2" id="Immeuble & Batiment" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Immeuble & Batiment"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Immeuble & Batiment</span></label>

                                <input class="inp-cbx pt-2" id="péniche" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="péniche"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Péniche</span></label>

                                
                                <input class="inp-cbx pt-2" id="place de port" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="place de port"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Place de port</span></label>


                                <input class="inp-cbx pt-2" id="Fonds de commerce" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Fonds de commerce"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Fonds de commerce</span></label>


                                <input class="inp-cbx pt-2" id="Local commerciale" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Local commerciale"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Local commerciale</span></label>
                                <!--SVG Sprites-->
                                <!-- <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg> -->

                              </div>


                                <div v-if="Filterneuf" class="optionsoffilters grid grid-cols-3 pt-2 pl-5 flex">                                      
                                <input class="pt-2 inp-cbx" id="Appartement" type="checkbox"/>
                                <label class="cbx" for="Appartement"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Appartement</span></label>

                                <input class="inp-cbx pt-2" id="Maison" type="checkbox"/>
                                <label class="cbx" for="Maison"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Maison</span></label>

                                <input class="inp-cbx pt-2" id="Terrain" type="checkbox"/>
                                <label class="cbx" for="Terrain"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Terrain</span></label>
                                    
                                <input class="inp-cbx pt-2" id="Parking/Cave/Box" type="checkbox" style="display: none"/>
                                <label class="cbx" for="Parking/Cave/Box"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Parking/Cave/Box</span></label>

                                <input class="inp-cbx pt-2" id="Bureau" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Bureau"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Bureau</span></label>

                                <input class="inp-cbx pt-2" id="Château" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Château"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Château</span></label>

                                
                                <input class="inp-cbx pt-2" id="Hôtel Particulier" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Hôtel Particulier"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Hôtel Particulier</span></label>
                                
                                <input class="inp-cbx pt-2" id="Immeuble & Batiment" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Immeuble & Batiment"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Immeuble & Batiment</span></label>

                                <input class="inp-cbx pt-2" id="péniche" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="péniche"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Péniche</span></label>

                                
                                <input class="inp-cbx pt-2" id="place de port" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="place de port"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Place de port</span></label>


                                <input class="inp-cbx pt-2" id="Fonds de commerce" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Fonds de commerce"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Fonds de commerce</span></label>


                                <input class="inp-cbx pt-2" id="Local commerciale" type="checkbox" style="display: none"/>
                                <label class="cbx pt-2" for="Local commerciale"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Local commerciale</span></label>
                                <!--SVG Sprites-->
                                <!-- <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg> -->

                              </div>

                              <!-- <hr style="width:100%;margin:0px;margin-top:25px">

                              <div class="footerbtns flex  pt-4 pl-6">

                                <div @click="dropdownOpen3=!dropdownOpen3" class="cancelbtn">Annuler</div>

                                <div class="confirmbtn">Appliquer ( 40 annonces)</div>

                              </div> -->

              </div>
                              <!--  -->
        </section>
    </div>
</template>


<script>
export default {

     data() {
      return {
      Filtervente:true,
      Filterlocation:false,
      Filtercolocation:false,
      Filterneuf:false,
      // dropdownOpen3:false,
      
      }
      },
    methods:{

    
      vente:function(){
        this.Filterlocation=false
        this.Filtercolocation=false
        this.Filterneuf=false
        this.Filtervente=true
      },
      location:function(){
        this.Filtercolocation=false
        this.Filterneuf=false
        this.Filtervente=false
        this.Filterlocation=true
      },
      colocation:function(){
        this.Filterlocation=false
        this.Filtervente=false
        this.Filterneuf=false        
        this.Filtercolocation=true
      },
      neuf:function(){
        this.Filterlocation=false
        this.Filtervente=false
        this.Filtercolocation=false
        this.Filterneuf=true        
    },
    },
}
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";



.cbx {
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s ease;
}
.cbx:not(:last-child) {
  margin-right: 6px;
}
.cbx:hover {
  background: rgba(0,119,255,0.06);
}
.cbx span {

  float: left;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  transform: scale(1);
  border: 1px solid #cccfdb;
  transition: all 0.2s ease;
  box-shadow: 0 1px 1px rgba(0,16,75,0.05);
}
.cbx span:first-child svg {
  position: absolute;
  top: 3px;
  left: 2px;
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
  padding-left: 8px;
  line-height: 18px;
  font-size: 14px;
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
// 
._9fvlwj0 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
    border-bottom: 1px solid rgb(235, 235, 235) !important;
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


// 

.switch-field label:hover {
	cursor: pointer;
}

.switch-field input:checked + label {
  background-color: white;
  // color:white;
  box-shadow: none;
}

.switch-field label:first-of-type {
	border-radius: 4px 0 0 4px;
}

.switch-field label:last-of-type {
	border-radius: 0 4px 4px 0;
}
.switch-field {
	display: flex;
	margin-bottom: 1px;
	overflow: hidden;
}

.switch-field input {
	position: absolute !important;
	clip: rect(0, 0, 0, 0);
	height: 1px;
	width: 1px;
	border: 0;
	overflow: hidden;
}

.switch-field label {
	background-color: #e4e4e4;
	color: rgba(0, 0, 0, 0.6);
	font-size: 14px;
	line-height: 1;
	text-align: center;
	padding: 8px 16px;
	margin-right: -1px;
	border: 1px solid #D4D6DC;
	transition: all 0.1s ease-in-out;
}

.switch-field label:hover {
	cursor: pointer;
}

.switch-field input:checked + label {
  background-color: white;
  // color:white;
  box-shadow: none;
}

.switch-field label:first-of-type {
	border-radius: 4px 0 0 4px;
}

.switch-field label:last-of-type {
	border-radius: 0 4px 4px 0;
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
// optionsoffilters
.optionsoffilters{
    -webkit-box-pack: center !important;
    -webkit-box-direction: normal !important;
    -webkit-box-orient: vertical !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    flex-basis: 100% !important;
}
</style>
