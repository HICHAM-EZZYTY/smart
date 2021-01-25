<template>
      <div class="map-container" ref="myMap">

        <div class="calculertempsdetrajet">
          <img  class="" style="width:19px;position:absolute;top:5px;left:8px" alt="icon de location" src="../../assets/Pics/Precision.svg">
          <p>Calculer le temps de trajet</p>
        </div>

        <div class="controlpanel flex">

          <div class="panelicon">
            <img  class="" style="width:28px;position:relative;top:23px;left:14px" alt="icon de location" src="../../assets/Pics/Panelicon.svg">
          </div>

          <div class="paneltranport ml-4 mt-2 flex flex-col">

            <h6>Transport</h6>
            <div class="transportitems flex mt-2">
                   
                              <div class="radio1 mr-2">
                                <input  class="checkbox-tools" type="radio" value="walk"  name="transportitems" id="walk" checked>
                                <label   id="leftside" class="for-checkbox-tools" for="walk"><span class="icon-walk"></span></label>
                              </div>
                              
                              <div class="radio2 mr-2">
                                <input selected class="checkbox-tools" type="radio" value="bicycle" name="transportitems" id="bicycle">
                                <label  id="rightside" class="for-checkbox-tools" for="bicycle"><span class="icon-bicycle"></span></label>
                              </div>

                              <div class="radio3 mr-2">
                                <input class="checkbox-tools" type="radio" value="car" name="transportitems" id="car">
                                <label  id="rightside" class="for-checkbox-tools" for="car"><span class="icon-sport"></span></label>
                              </div>

                              <div class="radio3">
                                <input class="checkbox-tools" type="radio" value="train" name="transportitems" id="train">
                                <label  id="rightside" class="for-checkbox-tools" for="train"><span class="icon-train"></span></label>
                              </div>


            </div>

          </div>

          <div class="paneltemprange ml-5 mt-2 flex flex-col">
            <h6>Temps de trajet</h6>
            <div style="width:12rem" class="rangesliderminutes ">

              <div class="rangeminutesinfos flex pt-1">
                <p>{{this.valueminutes[0]}} minutes</p>
                <p style="position: relative;margin-left: auto;">{{this.valueminutes[1]}} minutes</p>
              </div>
                   <vue-slider
                    class="ml-2"
                      v-model="valueminutes"
                      :max="maxminutes"
                    ></vue-slider>
            </div>


          </div>

          
          <div class="paneltemprange ml-5 mt-2 flex flex-col">
            <h6>Distance</h6>
            <div style="width:12rem" class="rangesliderminutes pt-1">

              <div class="rangeminutesinfos flex ">
                <p>{{this.valuedistance[0]}} Km</p>
                <p style="position: relative;margin-left: auto;">{{this.valuedistance[1]}} Km</p>
              </div>
                   <vue-slider
                   class="ml-2"
                      v-model="valuedistance"
                      :max="maxdistance"
                    ></vue-slider>
            </div>


          </div>
          


        </div>


    </div>



</template>
<script>

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

import L from "leaflet";

import {} from "mapbox-gl-leaflet";




  export default {
      name: "MyMap",
      components: {
       VueSlider
      },
      data(){
        return{
            layers:[],
            isClicked :false,
            apiKey:"33198c0445f943b6b94277c724a5fdcb",
            latitude:"48.730221",
            longitude:"2.2767898",
            zoom:"10",
            arrayoflayers:[],
            maxminutes: 280,
            valueminutes:[],
            valuedistance:[],
            maxdistance: 200,

        }
      },

      computed: {

 

      },
      beforeMount(){
          this.valueminutes[0]=0
          this.valueminutes[1]=180
          this.valuedistance[0]=0
          this.valuedistance[1]=60
      },
      mounted: function() {

      // this.valmin
      // this.valmax

          const myAPIKey = this.apiKey;
          const mapStyle = "https://maps.geoapify.com/v1/styles/positron/style.json";

          const initialState = {
              lng: this.longitude,
              lat: this.latitude,
              zoom: this.zoom
          };



     

          const map = L.map(this.$refs.myMap,{
            zoomControl: true
          }).setView(
              [initialState.lat, initialState.lng],
              initialState.zoom
          );

          map.zoomControl.setPosition('bottomleft');



          map.attributionControl
              .setPrefix("")
              .addAttribution(
              'Smartzone@2020'
          );

          L.mapboxGL({
              style: `${mapStyle}?apiKey=${myAPIKey}`,
              accessToken: "pk.eyJ1IjoiYW5hc2NoYW1raGkiLCJhIjoiY2tjZXF6a3FsMDN5dzJzbG12eWU4dXR5MiJ9.sKRHfRq8lKU1RoF0q0rp7A"
          }).addTo(map);

          var panel = document.querySelector(".controlpanel");

          
             // Disable dragging when user's cursor enters the element
           panel.addEventListener('mouseover', function () {
                map.dragging.disable();
            });

            // Re-enable dragging when user's cursor leaves the element
            panel.addEventListener('mouseout', function () {
                map.dragging.enable();
            });


      },
      

      methods:{

        changethemood:function(){
          console.log("had method is working")
        }
      },
 
   watch: {
      // Ad: function () {
      //   console.log("watcher",this.Ad);
      // },
    }

      
  };
</script>
<style  lang="scss">


  @import "~mapbox-gl/dist/mapbox-gl.css";
  @import "~leaflet/dist/leaflet.css";


.vue-slider-dot-handle{
  background-color:red !important;
  box-shadow:none !important;
}

 



  .map-container {
      height: 100% !important;
      width: 100%;
  }


.pic{
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    height: 8rem;
    width: 98%;
    margin: 0 auto;
    border-radius: 20px;
}

#hd{
  color: #000000;
  font-size: 24px;
  padding-left: 8px;
  padding-top: 12px;

}

#sbd{
  color: #979797;
  font-size: 14px;
  padding-left: 12px;
  padding-top: 0px;
  font-weight: 100;

}

#addrss{
  color: #6E7A81;
  font-size: 16.5px;
  padding-left: 12px;
  padding-top: 4px;
  font-weight: 100;


}

  /* popup-class*/

// .leaflet-bar {
//     position: absolute;
//     bottom: 0px;
//     left: 0rem;
//     border-radius: 13px;
//     border:none !important;
// }



 .leaflet-touch{
   border:none
 }

.leaflet-touch .leaflet-bar a:first-child {

    border-top-left-radius:8px;
    border-top-right-radius:8px;
    color: #B9B9C5;

}

.leaflet-touch .leaflet-bar a:last-child {
    border-bottom-left-radius:8px;
    border-bottom-right-radius:8px;
    color: #B9B9C5;

}

.leaflet-touch .leaflet-bar a{
    width: 29px;
    height: 33px;
}

  
  // .leaflet-control-attribution{
  //   background-color: $main !important;
  //   color:white;
  //   font-family: $ul;
  // }

.class-popup .leaflet-popup-content-wrapper {
  background: #2980b9;
  color: #fff;
  font-size: 10px;
  line-height: 10px;
}

.class-popup .leaflet-popup-content-wrapper a {
  color: #2980b9;
}

.class-popup .leaflet-popup-tip-container {
  width: 40px;
  height: 20px;
}

.class-popup .leaflet-popup-tip {
  background: #2980b9;
}


/* tooltip-class*/

.leaflet-tooltip.class-tooltip {
  background: #FFFFFF;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  width: 20rem;
  height: 16rem;
  text-align: left;
//   border: 2px solid cyan
}

.leaflet-tooltip-left.class-tooltip::before {
  border-left-color: cyan;
}

.leaflet-tooltip-right.class-tooltip::before {
  border-right-color: cyan;
}

@media (min-width: 1300px) { 
.map-container{
  height: 100% !important;
  
}
}

@media (min-width: 1400px) { 
.map-container{
  height: 100% !important;
  
}
}
@media (min-width: 1500px) { 
.map-container{
  height: 100% !important;
  
}
}

@media (min-width: 1600px) { 
.map-container{
  height: 100% !important;
  
}
}
@media (min-width: 1700px) { 
.map-container{
  height: 100% !important;
  
}
}

.leaflet-bar{
    position: relative !important;
    top: 0px !important;
    left: 0px !important;
    border-radius: 13px;
    border: none !important;
}


</style>

<style scoped lang="scss">
@import "../../scss/main.scss";  

p{
  font-family:  $pr;
  color:#B9B9C5;
  font-size: 0.65rem;

}

.vue-slider-dot-handle{
  background-color:red !important;
  box-shadow:none !important;
}


.icon-walk:before {
  content: "\77";
  // color: white;
  font-family: $transporticn;
  font-size: 17px;
  position: relative;
  top: 2px;
  left: 4px;
}
.icon-bicycle:before {
  content: "\62";
  // color: white;
  font-family: $transporticn;
  font-size: 17px;
  position: relative;
  top: 2px;
  left: 4px;
}
.icon-sport:before {
  content: "\73";
  // color: white;
  font-family: $transporticn;
  font-size: 17px;
  position: relative;
  top: 2px;
  left: 4px;
}
.icon-train:before {
  content: "\74";
  font-family: $transporticn;
  font-size: 17px;
  position: relative;
  top: 2px;
  left: 4px;

}
[type="radio"]:checked,
[type="radio"]:not(:checked){
	position: absolute;
	left: -9999px;
	width: 0;
	height: 0;
	visibility: hidden;
}

.checkbox-tools:checked + label ,
.checkbox-tools:not(:checked) + label{
      position: relative;
    display: inline-block;
    /* padding: 12px; */
    width: 27px;
    height: 27px;
    line-height: 20px;
    letter-spacing: 1px;
    margin-bottom: 10px;
    /* border-radius: 0px; */
    border-radius: 4px !important;
    overflow: hidden;
    cursor: pointer;
    padding-top: 4;
  font-family: $gsb;
	-webkit-transition: all 300ms linear;
	transition: all 300ms linear; 
}
.checkbox-tools:not(:checked) + label{
  background-color: #F1F4F9;
  color: #B9BFC2;
}
.checkbox-tools:checked + label{
  background-color: transparent;
  color: white;
}
.checkbox-tools:not(:checked) + label:hover{
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:checked + label::before,
.checkbox-tools:not(:checked) + label::before{
	position: absolute;
	content: '';
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
  border-radius: 0px;
  background-color: $main;
	z-index: -1;
}
.checkbox-tools:checked + label,
.checkbox-tools:not(:checked) + label{
  font-size: 0.9rem;
	line-height: 24px;
	display: block;
	padding-bottom: 14px;
}


h6{
  color: #052F77;
  font-family: $pm;
  font-size: 0.7rem;
}

.panelicon{
  border-right: 0.8px solid rgba(140, 146, 164, 0.5);
  padding-right: 28px;
}

.calculertempsdetrajet{
  display: block;
  margin: 0;
  margin: auto;
  background-color: white;
  height: 30px;
  width: 14rem;
  border-radius: 8px;
  position: absolute;
  top: 58px;
  left: 38%;
  z-index: 9999999;
  cursor: pointer;

  p{
    color:#052F77;
    font-family: $pr;
    text-align: center;
    font-size: 12px;
    padding-top: 5px;
    padding-left: 12px;
  }
}

.controlpanel{
    height: 4.5rem;
    width: 42rem;
    background-color: white;
    border-radius: 6px;
    position: absolute;
    bottom: 10px;
    z-index: 99999;
    left: 8.6%;
}


</style>


