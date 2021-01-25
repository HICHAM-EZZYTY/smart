<template>

      <div class="map-container" ref="myMap"></div>


</template>
<script>
  import L from "leaflet";
  import {} from "mapbox-gl-leaflet";
  import icn  from "../assets/Pics/tsssst.svg";




  export default {
      name: "MyMap",
      data(){
        return{
            layers:[],
            isClicked :false,
        }
      },
      props:{
          apiKey:String,
          latitude:String,
          longitude:String,
          zoom:String,
          geo:Array,
          Ad:Object,
      },
      mounted: function() {
          const myAPIKey = this.apiKey;
          const mapStyle = "https://maps.geoapify.com/v1/styles/positron/style.json";

          const initialState = {
              lng: this.longitude,
              lat: this.latitude,
              zoom: this.zoom
          };

          const map = L.map(this.$refs.myMap).setView(
              [initialState.lat, initialState.lng],
              initialState.zoom
          );

          map.attributionControl
              .setPrefix("")
              .addAttribution(
              'Smartzone@2020'
          );

          L.mapboxGL({
              style: `${mapStyle}?apiKey=${myAPIKey}`,
              accessToken: "no-token"
          }).addTo(map);

          var fakemarker = L.divIcon({
                className: 'fake-marker',
                iconSize:null,
                html:'<p></p>',
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            });

            
            var TooltipClass = {
            'className': 'class-tooltip'
            }

            // console.log("aji nchufo object b4",(Object.keys(this.Ad).length>0))
            var fmarker;
            this.$watch('Ad', Ad => {
            if (Object.keys(Ad).length>0){
            fmarker=L.marker([Ad.lat,Ad.lon],{icon: fakemarker}).addTo(map)
            .bindTooltip('<div  class="pic" style="background-image:url('+Ad.pic+')"></div><h1 id="hd">€ '+Ad.price+ ' / mois</h1><h2 id="sbd">'+Ad.subheading+'</h2><h3 id="addrss">'+Ad.addresse+'</h3>',{
            direction: 'top',
            permanent: true,
            offset: [30, -95],
            ...TooltipClass // using spread operator (ES2018)
            }, TooltipClass) // 3rd argument does not do anything
            }
            else{
              map.removeLayer(fmarker)
            }
            }, {immediate:true})

            console.log(fmarker)



        
            // console.log("aji nchufo object after madazt",(Object.keys(this.Ad).length>0))


            // var greenIcon = L.icon({
            //     className: 'map-marker',
            //     iconUrl:icn,
            //     iconSize:     [98, 95], // size of the icon
            //     shadowSize:   [50, 64], // size of the shadow
            //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            //     shadowAnchor: [4, 62],  // the same for the shadow
            //     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            // });


            // var marx = L.divIcon({
            //     className: 'map-marker',
            //     iconSize:null,
            //     shadowSize:   [50, 64], // size of the shadow
            //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location

            // });


            // var marker = L.divIcon({
            //     className: 'map-marker',
            //     iconSize:null,
            //     html:'<p style="position:absolute;top:10px;left:15px;color:white;font-family:Moderat;font-weight:900;font-size:18px"">€ '+Price+'</p><img src="'+icn+'">',
            //     shadowSize:   [50, 64], // size of the shadow
            //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            // });

            this.geo.forEach(function(row){

                
            var marker = L.divIcon({
                className: 'map-marker',
                iconSize:null,
                html:'<p style="position:absolute;top:14px;left:13px;color:white;font-family:Moderat;font-weight:900;font-size:14px"">€ '+row.price+'</p><img src="'+icn+'">',
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            });

            // marker.on('mouseover',function() {
            // marker.openPopup();
            // });

            var TooltipClass = {
            'className': 'class-tooltip'
            }
            
            L.marker([row.lat,row.lon],{icon: marker}).addTo(map)
            .bindTooltip('<div  class="pic" style="background-image:url('+row.pic+')"></div><h1 id="hd">€ '+row.price+ ' / mois</h1><h2 id="sbd">'+row.subheading+'</h2><h3 id="addrss">'+row.addresse+'</h3>',{
            direction: 'top',
            permanent: false,
            offset: [30, -95],
            ...TooltipClass // using spread operator (ES2018)
            }, TooltipClass) // 3rd argument does not do anything


            console.log(row.pic)

            });



       





        

          
      },
      

      methods:{
      },
      watch: {
      Ad: function () {
        console.log("watcher",this.Ad);
      },
    }

      
  };
</script>
<style  lang="scss">
@import "../scss/main.scss";

  @import "~mapbox-gl/dist/mapbox-gl.css";
  @import "~leaflet/dist/leaflet.css";
  .map-container {
      height: 31rem;
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
  font-family: $mdb;

}

#sbd{
  color: #979797;
  font-size: 14px;
  padding-left: 12px;
  padding-top: 0px;
  font-weight: 100;
  font-family: $mn;
}

#addrss{
  color: #6E7A81;
  font-size: 16.5px;
  padding-left: 12px;
  padding-top: 4px;
  font-weight: 100;
  font-family: $mn;

}

  /* popup-class*/

.leaflet-bar {
    position: absolute;
    top: 32rem;
    left: 41.6rem;
    border-radius: 13px;
    border:none !important;
}

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
  height: 35rem !important;
  
}
}

@media (min-width: 1400px) { 
.map-container{
  height: 40rem !important;
  
}
}
@media (min-width: 1500px) { 
.map-container{
  height: 44rem !important;
  
}
}

@media (min-width: 1600px) { 
.map-container{
  height: 50rem !important;
  
}
}
@media (min-width: 1700px) { 
.map-container{
  height: 70rem !important;
  
}
}



</style>