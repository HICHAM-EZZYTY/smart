<template>
                <div class="popup flex">
                
                  <div class="leftsidecontainer">

                    <Map
                    />

                  </div>

                  <div class="rightsidecontainer">
                    <div  @click="close()" class="exitofpopup mt-6 ml-6 flex">
                      <img  class="mt-1" style="width:18px" alt="icon de sortir de popup" src="../../assets/Pics/Leftarrow.svg">
                      <h6 class="ml-3">Quitter la carte</h6>
                    </div>

                    <div class="adresseprice  mt-8 ml-5 flex">
                      <div style="background-image:url('assets/house4.jpg')" class="pictureofad"></div>
                      <div class="addressinfos ml-2 flex flex-col">
                        <h2>Paris 9ème - Trudaine-Maubeuge</h2>
                        <h5>378 000 €</h5>
                      </div>
                    </div>

                    <div class="selectors flex mt-6 ml-6">

                      <div class="firstSelector flex flex-col">

                        <label class="mb-2">Catégorie</label>
                        <select class="select-css">
                            <option>Transport en commun</option>
                            <option>Educations</option>
                            <option>Plages</option>
                            <option>Bornes éléctriques</option>
                            <option>Vélos partages</option>
                        </select>

                      </div>

                      <div class="secondSelector ml-2 flex flex-col">

                        <label class="mb-2">Sous catégorie</label>
                        <select class="select-css2">
                            <option>Tramway</option>
                            <option>Métro</option>
                            <option>RER</option>
                            <option>Garre train </option>
                        </select>

                      </div>

                    </div>

                    <div class="lists ml-8 mt-5">
                      <div v-for="(item, index) in Transports" :key="index" class="list flex mt-4">
                        <div class="rectangleorder">
                           {{index+1}}
                        </div>
                        <div class="infosoflist ml-1">
                          <h3>{{item.name}}</h3>
                          <div class="subinfos flex">
                            <p class="mr-1">{{item.km}}</p> <span class="mr-1">.</span> <span>{{item.station}}</span>
                          </div>
                        </div>

                        <div :class="{ 't6': item.station === 'T6', 't2': item.station === 'T2','t4': item.station === 'T4' }" class="iconoftype">
                        <img  class="pt-1" style="width:10px;display:block;margin:0;margin:auto" alt="icon de sortir de popup" src="../../assets/Pics/Tramwayicon.svg">
                        </div>

                      </div>
                    </div>




                  </div>


               




                </div>


     
      
               



        
</template>



<script>

import { mixin as clickaway } from 'vue-clickaway';

import Map from './Exploretheneighbormap'



export default {
    mixins: [ clickaway ],
    name: 'Tempsdetrajet',
    components: {  
      Map
    },
    data() {
    return {

    Transports:[
    {
      "name":"Les portes de Saint-Cyr",
      "km":"1,4 Km",
      "station":"T6",
      "type":"tramway"
    },
    {
      "name":"Louise Michel",
      "km":"1,5 km",
      "station":"T2",
      "type":"tramway"
    },
    {
      "name":"Maire de clichy",
      "km":"1,6 km",
      "station":"T4",
      "type":"tramway"
    },
    {
      "name":"Lamarck Caulaincourt",
      "km":"1,6 km",
      "station":"T4",
      "type":"tramway"
    },
    {
      "name":"Richelieu Drouot",
      "km":"1,8 km",
      "station":"T6",
      "type":"tramway"
    },
    {
      "name":"Palais royal musée du louvre",
      "km":"1,9 km",
      "station":"T6",
      "type":"tramway"
    },
    {
      "name":"Notre dame des champs",
      "km":"1,9 km",
      "station":"T6",
      "type":"tramway"
    },
    {
      "name":"Notre dame des champs",
      "km":"1,9 km",
      "station":"T4",
      "type":"tramway"
    },
    {
      "name":"Notre dame des champs",
      "km":"1,9 km",
      "station":"T6",
      "type":"tramway"
    },
    {
      "name":"Notre dame des champs",
      "km":"1,9 km",
      "station":"T4",
      "type":"tramway"
    },
    {
      "name":"Notre dame des champs",
      "km":"1,9 km",
      "station":"T2",
      "type":"tramway"
    },
    
      
    ]


    }

    },
    methods:{ 
      close:function(){
            this.$emit("closetemptrajet");
      },
      away:function(){
            this.$emit("away");
      },
      changetime:function(){
 
      }
    
    },
    computed:{


    },
    watch: {

      NatureModal:function(){
      }


    },
    mounted (){



    }
}

</script>
<style lang="scss" scoped>
@import "../../scss/main.scss";  

.t6{
    background-color: #FF7675;
}
.t2{
    background-color: #E84393;
}
.t4{
    background-color: #FDCB6E;
}



// Styling the scrollbar 


.lists{
  height: 64%;
  overflow-y: auto;

}

// styling the scrollbar
.lists::-webkit-scrollbar-track
{
	// -webkit-box-shadow: inset 0 0 49px rgb(255, 255, 255);
	background-color: #D4D6DC;
}

.lists::-webkit-scrollbar
{
	width: 2px;
	background-color : $main;
}

.lists::-webkit-scrollbar-thumb
{
  border: 3px solid $main;
  border-radius: 2px;
  background-color: $main;
}



.list{
  border-bottom: 1px solid  rgba(196, 196, 196, 0.15);
  padding-bottom: 10px;
}

.iconoftype{
  height: 21px;
  width: 21px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: 21px;
  margin-top: 15px;
}

.infosoflist{
  h3{
    font-family: $ps;
    color:#24416B;
    font-size: 14px;
    padding-top: 5px;
    padding-bottom: 0px;
  }
  .subinfos{
    padding-left: 10px;
    p{
      font-family: $pr;
      font-size: 12px;
      color:#B3BCCB;
    }
    span{
      font-family: $ps;
      font-size: 12px;
      color:#B3BCCB;
    }
  }
  
}

.rectangleorder{
  width: 35px;
  height: 35px;
  background-color: $main;
  color:white;
  border-radius: 3px;
  text-align: center;
  padding-top: 5px;
}

// Styling the select options

.select-css2{
  display: block;
  font-size: 11px;
  font-family: "Poppins-Medium";
  color: #506789;
  line-height: 1.3;
  padding: 1em 4em 1em 0.6em;
  width: 100%;
  max-width: 100%; 
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #E9EDF0;
  border-radius: .5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url('../../assets/Pics/Selectoptionsarrow.svg');
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;

}

.select-css {
  display: block;
  font-size: 11px;
  font-family: "Poppins-Medium";
  color: #506789;
  line-height: 1.3;
  padding: 1em 1.8em 1em 0.6em;
  width: 100%;
  max-width: 100%; 
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #E9EDF0;
  border-radius: .5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url('../../assets/Pics/Selectoptionsarrow.svg');
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;
}
.select-css::-ms-expand {
  display: none;
}
.select-css:hover {
  border-color: $main;
}
.select-css:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222; 
  outline: none;
}

.select-css option {
  font-weight:normal;
}

*[dir="rtl"] .select-css, :root:lang(ar) .select-css, :root:lang(iw) .select-css {
  background-position: left .7em top 50%, 0 0;
  padding: .6em .8em .5em 1.4em;
}

/* Disabled styles */
.select-css:disabled, .select-css[aria-disabled=true] {
  color: graytext;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
}

.select-css:disabled:hover, .select-css[aria-disabled=true] {
  border-color: #aaa;
}




label{
  color: #7C8EA6;
  font-family: $pr;
  font-size: 10px;
}

.addressinfos{
  h2{
    color: #052F77;
    font-family:  $ps;
    font-size: 15.5px;
  }
  h5{
    color: #052F77;
    font-family: $pm;
    font-size: 13px;
    margin-top: 2.3px;
  }
}

.pictureofad{
  width: 43px;
  height: 43px; 
  background-size: cover;
  display: block;
  border-radius: 50%;
}

.exitofpopup{
  h6{
    color:#A7B3C3;
    font-family:  $pm;
    font-size: 12px;

  }
}

.popup{
    position: fixed;
    top: -100vh;
    top: 0;
    left: 0;
    z-index: 9999999;
    background:rgba(255, 255, 255, 1);
    width: 100vw;
    height: 100%;
    opacity: 1;
    transition: opacity 0.35s ease;
}  
.leftsidecontainer{
  width: 71.4%;
  height: 100%;
  background-color: #2ecc71;
}
.rightsidecontainer{
  width: 28%;
}

// @media (min-width: 1300px) { 
// .lists{
//   height: 26rem !important;
//   // overflow-y: scroll;

// }

// }

// @media (min-width: 1400px) { 
// .lists{
//   height: 28rem !important;
  
// }

//  }
// @media (min-width: 1500px) { 
// .lists{
//   height: 28rem !important;
  
// }
// }
// @media (min-width: 1600px) { 
// .lists{
//   height: 28rem !important;
  
// }
// }

// @media (min-width: 1700px) { 
// .lists{
//   height: 70rem !important;
  
// }
// }



</style>