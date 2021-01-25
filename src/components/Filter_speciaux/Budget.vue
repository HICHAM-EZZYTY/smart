<template>
  <div  class="_9fvlwj0">

      <!-- <span style="color: red; margin-left: 20px;">{{ errorMsg }}</span> -->
      <vue-slider
      v-model="value"
      :min="min"
      :max="max"
      :marks="[100, 1000]"
    ></vue-slider>

      <!-- @error="error" -->
      <!-- @change="clearErrorMsg"
      :tooltip="errorMsg ? 'none' : 'always'" -->


    <div class="valuereader   money flex mt-4">
      <div class="flex"><p>{{ valmin}}</p><span style="margin-left:0.5rem">€</span></div>
      <div class="flex" style="margin-left:auto"><p>+{{  valmax }}</p><span  style="margin-left:0.5rem">€</span></div>
    </div>




  </div>
</template>
<script>
  // const ERROR_TYPE = {
  //   VALUE: 1,
  //   INTERVAL: 2,
  //   MIN: 3,
  //   MAX: 4,
  //   ORDER: 5,
  // }
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
    components: {
    VueSlider
    },

    data() {
          return {
          min: 0,
          value:[],
          // max: 90000000,
          // errorMsg: ''
          }
    },
  
    computed: {
    
    valmin:function(){
    var vlmin=this.value[0]
    if (vlmin === null){
    return vlmin;
    } 
    else {
    var vlmindcommas=vlmin.toString().split("").reverse().map((digit, index) =>
        index != 0 && index % 3 === 0 ? `${digit},` : digit
      ).reverse().join("")

    var parts = vlmindcommas.split(",");
    var vlminrslt=parts.length > 1 ? (Math.round(parseInt(parts.join(""), 10) / Math.pow(1000, parts.length-1)) + " " + ["K", "M", "B"][parts.length-2]) : parts[0];
  
    console.warn("hada vlmindcommas",vlminrslt)
    console.warn("typeofvlmindcomas",typeof(vlminrslt))

    return vlminrslt;
    }
    },
    valmax:function(){
    var vlmin=this.value[1]
    if (vlmin === null){
    return vlmin;
    } 
    else {
    var vlmindcommas=vlmin.toString().split("").reverse().map((digit, index) =>
        index != 0 && index % 3 === 0 ? `${digit},` : digit
      ).reverse().join("")

    var parts = vlmindcommas.split(",");
    var vlminrslt=parts.length > 1 ? (Math.round(parseInt(parts.join(""), 10) / Math.pow(1000, parts.length-1)) + " " + ["K", "M", "B"][parts.length-2]) : parts[0];
  
    console.warn("hada vlmindcommas",vlminrslt)
    console.warn("typeofvlmindcomas",typeof(vlminrslt))

    return vlminrslt;
    }
    },
    max:function(){

      var rslt;

      if(this.$store.state.Filters.typeofad=="Acheter"){
        rslt=900000000
      }
      else if (this.$store.state.Filters.typeofad=="Location"){
        rslt=100000
      }
      else if (this.$store.state.Filters.typeofad=="Neuf"){
        rslt=900000000
      }
      else if (this.$store.state.Filters.typeofad=="Colocation"){
        rslt=5000
      }

      return  rslt

    }

    },
    methods:{
      // error(type, msg) {
      //   switch (type) {
      //     case ERROR_TYPE.MIN:
      //       break
      //     case ERROR_TYPE.MAX:
      //       break
      //     case ERROR_TYPE.VALUE:
      //       break
      //   }
      //   this.errorMsg = msg
      // },
      // clearErrorMsg() {
      //   this.errorMsg = ''
      // }


    },
  mounted() {   
      this.valmin
      this.valmax

    
},
beforeMount(){

    this.value[0]=this.$store.state.Pricemin
    this.value[1]=this.$store.state.Pricemax

  
},
  watch: {
    value:function(){
      this.valmin
      this.valmax
      this.$store.state.Pricemax=this.value[1]
      this.$store.state.Pricemin=this.value[0]


    },
    '$store.state.Filters.typeofad': function() {
      if(this.$store.state.Filters.typeofad=="Acheter"){
      this.value=[0, 9000]
      }
      else if (this.$store.state.Filters.typeofad=="Location"){
      this.value=[0, 100000]
      }
      else if (this.$store.state.Filters.typeofad=="Neuf"){
      this.value=[0, 9000]
      }
      else if (this.$store.state.Filters.typeofad=="Colocation"){
      this.value=[0, 5000]
      }
  }
  }

}
</script> 

<style lang="scss" >
@import "../../scss/main.scss";


._9fvlwj0{
    border-bottom:1px solid #ebebeb !important;
    padding-bottom: 28px !important
}

.vue-slider-dot-handle{
    background-color: white!important;
    border: 4px solid #2C8EEA;
    box-shadow: none !important;
}

.vue-slider-process{
  background: $main !important;
}
.vue-slider-dot-tooltip-top{
  display: none;
}


.vue-slider-mark-label{
  display: none;
}

.money {
  p{
  font-family: $gr;
  font-size: 1.7rem;
  opacity: 0.8;
}
}
</style>
