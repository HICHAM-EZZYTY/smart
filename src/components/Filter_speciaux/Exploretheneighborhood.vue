<template>
                <div class="popup">


                <div class="topbar" style="height: 40px;">
                  <div class="flex mt-4">
                  <h1 class="block m-0 m-auto ">Dessiner une zone sur la carte</h1>
                  </div>
                  <div class="absolutebar">
                  <img id="logo" class="absolute ml-6" style="top:16px;" alt="logo de plateforme smartzone" src="../../assets/Pics/Logo.svg">
                  <img @click="close()" id="closeicon" class="absolute right-0 mr-6" style="width:25px;top:16px;cursor:pointer" alt="logo de plateforme smartzone" src="../../assets/Pics/closemap.svg">
                  </div>
                </div>


                <div class="freedrawmapcontainer">

                <Freedraw
                />


                </div>

               




                </div>


 <!-- @click="close()" -->
     
      
               



        
</template>



<script>

import { mixin as clickaway } from 'vue-clickaway';

import Freedraw from './Freedrawmap'



export default {
    mixins: [ clickaway ],
    name: 'Tempsdetrajet',
    components: {  
      Freedraw
    },
    data() {
    return {


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




.freedrawmapcontainer{
  height: 100%;
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

h1{
  font-family: $ps;
  font-size: 1.3rem;
  color:$main
}
@media (min-width: 320px) { 
.freedrawmapcontainer{
  height: 90% !important
  
}
.dsnbtn{
  right: 1rem;
}
.anlbtn{
  right: 1rem;
  top: 6rem;
}
}


@media (min-width: 320px) { 

h1{
  // margin: 0;
  // margin: auto;
  margin-left: 9px;
  font-size: 1rem;
}
#logo{
  display: none;
}
#closeicon{
  width: 20px;
  top: 16px;
}

}

@media (min-width: 800px) { 
h1{
  margin: 0;
  margin: auto;
  font-size: 1.2rem;
}
#logo{
  display: block;
}
}



</style>