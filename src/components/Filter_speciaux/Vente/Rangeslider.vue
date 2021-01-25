<template>
<div>
      <Anneevent :min="min" :max="max" @update:min="value => min = value" @update:max="value => max = value"></Anneevent>

    <label>Min</label><input type="text" v-model="min">
    <label>Max</label><input type="text" v-model="max">
</div>

</template>

<script>


import Anneevent from './Anneevent'

export default {
  data () {
    return {
      min: 0,
      max: 10
    }
  },
  components: {
    Anneevent
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>