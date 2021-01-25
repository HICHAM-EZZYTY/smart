<template>
  <div class="price">
      <div class="chart" :style="columns" v-html="chart"></div>
      <div class="range-slider">
        <input type="range" v-model="bucket.price.min" :min="min" :max="max">
        <input type="range" v-model="bucket.price.max" :min="min" :max="max">
      </div>
      <input type="number" v-model="bucket.price.min"/>
      <input type="number" v-model="bucket.price.max"/>
  </div>
</template>

<script>
export default {

    props:["min","max","histogram"],


}
</script>

<style>

</style>