
<template>


<div class="he">
  <div v-for="geo in geos" :key="geo" class="pic">
    <img src="" alt="pic of the add">
  </div>
  </div>


</template>
<script>
  export default {
    name: "labo",
    data(){
    return {
         geos:[
                {price:' 130,23',lat: 48.73058,lon: 2.277286,pic:"~@/assets/Pics/adpic1.jpg"},
                {price:' 130,23',lat: 48.730465,lon:2.276981,pic:"~@/assets/Pics/adpic1.jpg"},
                {price:' 130,23',lat: 48.730469,lon: 2.277290,pic:"~@/assets/Pics/adpic1.jpg"}
                ],
    }
    },
    methods:{
 
    }
  };
</script>
<style scoped>

  .pic{
    /* background-image:url('../assets/Pics/registerfacebook.svg'); */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    height: 8rem;
    width: 98%;

  }
</style>
