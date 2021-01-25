<template>

<div class="sl block m-0 m-auto  mb-6 w-4/5 md:w-3/4 lg:w-3/5">
  <form class="w-full rounded  grid grid-cols-1 md:grid-cols-2 gap-4 md:w-4/5 " @submit.prevent>
 
    <div class="disponibilit flex w-full">
      <vc-date-picker v-model="date" class="flex-grow">
        <template v-slot="{ inputValue, inputEvents }">
          <input
            id="date"
            class="bg-white text-gray-700 w-full py-2 px-3 appearance-none border rounded-l focus:outline-none"
            :class="{ 'border-red-600': errorMessage }"
            :value="inputValue"
            v-on="inputEvents"
          />
        </template>
      </vc-date-picker>
      <button
        type="button"
        class="btntxt text-white font-bold py-2 px-4 rounded-md user-select-none focus:outline-none"
        :class="date ? 'bg-blue-500' : 'bg-blue-300'"
        :disabled="!date"
        @click="date = null"
      >
        Effacer
      </button>
    </div>
    <p class="text-red-600 text-xs italic block m-0 m-auto  w-4/5 md:w-3/4 lg:w-3/5" v-if="errorMessage">
      {{ errorMessage }}
    </p>
    
  </form>
</div>
  
</template>


<script>

export default {
  components:{
  },
    created() {
    },
    data() {
        return {
          date: new Date(),
        // date: null,

        }
    },
    methods:{
      dayClicked(day) {
      this.selectedDay=new Date();
      this.selectedDay = day['ariaLabel'];
    },
   },
    computed:{

    errorMessage() {
      if (!this.date) return 'La date est requise.';
      return '';
    },

     Thedate: function () {
       if(typeof(this.selectedDay)==='string'){
         return this.selectedDay
       }
       else{
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return  this.selectedDay.toLocaleDateString('fr-FR', options)
       }
     }
   },

}
</script>

<style scoped lang="scss"> 
@import "../scss/main.scss";



input {
    width: 72%;
    border-radius: 6px;
    background-color: #f3f4f8;
    border: 1px solid #D4D6DC;
    // margin-left: 13%;
}
// p{
//     margin-left: 10%;
// }
// .sl{
//     position: relative;
//     left: 17.2rem;
// }
.vc-svg-icon{
  color:$main;
}
.vc-container{
      --day-content-bg-color-hover: rgba(34,98,198, 0.3);
    --day-content-dark-bg-color-hover: rgba( 34,98,198,0.3);
    --day-content-bg-color-focus: rgba(34,98,198,0.4);
    --day-content-dark-bg-color-focus: rgba(34,98,198,0.4);
        --day-content-margin: 0.6px auto;
}
.btntxt{
    font-family:$gr;
    font-size: 0.85rem !important;
    background:$main !important;
    // margin-right: 10%;
}

@media (min-width: 768px) { 
    .disponibilit{
        margin-left:2%;
        text-align: left;
	}


}
@media (min-width: 1024px) { 
    .disponibilit{
        margin-left:13%
    }

}
</style>