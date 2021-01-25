import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store=new Vuex.Store({
    state: {
        
        count: 1,
        nameOfbien:"Appartement",
        countlocation:1,
        countColocation:1,
        nameOfbienlocation:"Appartement",
        countneuf:1,
        loisneuf:"Loi pinel",
        typeofoffre:"",
        meublé:"",
        Pricemin:0,
        Pricemax:1000,
        Filters:{
          typeofad:"Acheter",
          typeofgood:"",
        }
      },
      mutations: {

        updatepricemax(state,value){
          state.Pricemax = value
        },
        updatepricemin(state,value){
          state.Pricemin = value
        },
        updatetypeofad(state,value){
          state.Filters.typeofad = value
         }, 
        removetypeofoffre(state){
          state.typeofoffre = ""
        },
        removetypeofgood(state){
        state.Filters.typeofgood = ""
        },
        updatetypeofgood(state,value){
          state.Filters.typeofgood = value
         }, 
        updatemeublé(state,value){
          state.meublé = value
         }, 
        updateoffre(state,value){
         state.typeofoffre = value
        },
        updateLois (state, message) {
          state.loisneuf = message
        },      
        increment (state) {
          state.count++
        },
        decrement (state) {
          state.count--
        },
        incrementlocation (state) {
          state.countlocation++
        },
        decrementlocation (state) {
          state.countlocation--
        },
        incrementColocation (state) {
          state.countColocation++
        },
        decrementColocation (state) {
          state.countColocation--
        },
        incrementcountneuf (state) {
          state.countneuf++
        },
        decrementcountneuf (state) {
          state.countneuf--
        },
      }
})