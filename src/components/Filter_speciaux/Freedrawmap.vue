<template>
      <div class="map-container" ref="myMap">
      
      <div class="btncontain">
        <button id="dsn" class="absolute dsnbtn">Tracer ma zone</button>
        <button id="ancns" style="display:none" class="absolute dsnbtn">Voir les annonces</button>

        <button id="annulerbtn" style="display:none"  class="absolute anlbtn flex">
          <img  style="width: 1rem;margin-right: 8px;" src="../../assets/Pics/Deleteform.svg">
          <p>Supprimer la forme</p>
        </button>
      </div>

    </div>



</template>
<script>
import L from "leaflet";
import FreeDraw from 'leaflet-freedraw';

import {} from "mapbox-gl-leaflet";




  export default {
      name: "MyMap",
      data(){
        return{
            layers:[],
            isClicked :false,
            apiKey:"33198c0445f943b6b94277c724a5fdcb",
            latitude:"48.730221",
            longitude:"2.2767898",
            zoom:"12",
            arrayoflayers:[],
        }
      },
  
      mounted: function() {
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

        



          // This is working right here 

          // freeDraw.on('markers', event => {
          // console.log(event.latLngs);
          // });
          // map.addLayer(freeDraw);

                         // Allow create, edit and delete.
          var arrayofpolog=[];

          document.getElementById("dsn").addEventListener("click", function() {

          

          var annonces=document.getElementById("ancns")
          var tracage=document.getElementById("dsn")
          var annulerbtn=document.getElementById("annulerbtn")
          annonces.style.display="block"
          annulerbtn.style.display="flex"
          tracage.style.display="none"

            
          
          const freeDraw = new FreeDraw({
            mode: FreeDraw.ALL,
            smoothFactor:0.3,
            elbowDistance:10,
            simplifyFactor:1.1,
            mergePolygons:true,
            concavePolygon:true,
            maximumPolygons:Infinity,
            strokeWidth:1,
            notifyAfterEditExit:true,
            leaveModeAfterCreate:false, // to create more than one shape 
          });

          freeDraw.on('markers', event => {
          arrayofpolog=event.latLngs
          console.log(arrayofpolog);
          });
          map.addLayer(freeDraw);

            
          document.getElementById("annulerbtn").addEventListener("click", function() {  
          freeDraw.clear();

          const freeDrawtoggle = new FreeDraw({
            mode: FreeDraw.NONE,
            smoothFactor:0.3,
            elbowDistance:10,
            simplifyFactor:1.1,
            mergePolygons:true,
            concavePolygon:true,
            maximumPolygons:Infinity,
            strokeWidth:1,
            notifyAfterEditExit:true,
            leaveModeAfterCreate:false, // to create more than one shape 
          });

          map.removeLayer(freeDraw)

          map.addLayer(freeDrawtoggle)

          tracage.style.display="block"
          annonces.style.display="none"
          annulerbtn.style.display="none"






          })
          
          });

          // document.getElementById("annulerbtn").addEventListener("click", function() {
          // const freeDraw = new FreeDraw();
          // console.log("hada aaray of polygons",arrayofpolog)
          // arrayofpolog.forEach(polygon => freeDraw.remove(polygon));

          // // freeDraw.clear();
          // });



          

         



     

       

      


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

  .leaflet-edge {
    background-color: #2C8EEA;
    box-shadow: 0 0 0 2px white, 0 0 10px rgba(255, 255, 255, 0.35);
    border-radius: 50%;
    cursor: move;
    outline: none;
    transition: background-color .25s;
}

.leaflet-polygon {
    fill: #DEEFFF;
    stroke: #2C8EEA;
    stroke-width: 2;
    fill-opacity: .75;
}


path.leaflet-line {
    stroke: #2C8EEA;
    stroke-width: 2;
}

  .map-container.mode-create {
    cursor: url('../../assets/Pics/Handdrawing.svg'), auto;	
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


.dsnbtn{
    z-index: 9999;
    right: 3rem;
    top: 3rem;
    background-color: $main;
    padding: 10px;
    padding-right: 13px;
    padding-left: 13px;
    border-radius: 5px;
    border: 1px solid $main;
    font-family: $gm;
    color: white;
    font-size: 14px;
}
.anlbtn{
    z-index: 9999;
    right: 12.4rem;
    top: 3rem;
    background-color: white;
    padding: 10px;
    padding-right: 13px;
    padding-left: 13px;
    border-radius: 5px;
    border: 1px solid $main;
    font-family: $gm;
    color: $main;
    font-size: 14px;
}


@media (min-width: 320px) { 

.dsnbtn{
  right: 1rem;
}
.anlbtn{
  right: 1rem;
  top: 6rem;
}
}



@media (min-width: 450px) { 

  .anlbtn{
    right: 10rem;
    top: 3rem;
  }


}

</style>
