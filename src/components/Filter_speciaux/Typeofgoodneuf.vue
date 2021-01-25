<template>
    <div role="group" class="_9fvlwj0">
        <section>
        <div  class="optionsoffilters grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:pt-2 flex">

                                <input  type="radio" name="projet" v-model="typeofgood" value="Appartement"  class="pt-2 inp-cbx" id="Appartement" />
                                <label   class="cbx" for="Appartement"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Appartement</span></label>

                                <input type="radio" name="projet"   v-model="typeofgood" value="Maison"  class="inp-cbx pt-2" id="Maison" />
                                <label    class="cbx" for="Maison"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Maison</span></label>

                                <!--SVG Sprites-->
                                <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg>

                              </div>
        </section>
    </div>
</template>


<script>
export default {
  props:["TypeofgoodModal"],
    data() {
    return {
    }
    },
    methods:{
    

    },
    mounted(){
    },
    computed:{
      
    typeofgood:{
    get () {
    return this.$store.state.Filters.typeofgood
    },
    set (value) {
      this.$store.commit('updatetypeofgood', value)
    }
    }
    }

}
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";

._9fvlwj0{
    border-bottom:1px solid #ebebeb !important;
    padding-bottom: 28px !important
}

.cbx {
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  padding : 6px 0px;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s ease;
  
}
.cbx:not(:last-child) {
  margin-right: 6px;
  padding-top:16px;
}
.cbx:hover {
  background: rgba(0,119,255,0.06);
  padding-left:8px;
  
}
.cbx span {

  float: left;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  transform: scale(1);
  border: 1px solid #cccfdb;
  transition: all 0.2s ease;
  box-shadow: 0 1px 1px rgba(0,16,75,0.05);
}
.cbx span:first-child svg {
  position: absolute;
  top: 6px;
  left: 4px;
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}
.cbx span:last-child {
    padding-left: 12px;
    line-height: 23px;
    font-size: 14px;
    font-family: $gr !important;
    color: black;
}
.cbx:hover span:first-child {
  border-color: #07f;
}
.inp-cbx {
  position: absolute;
  visibility: hidden;
}
.inp-cbx:checked + .cbx span:first-child {
  background: #07f;
  border-color: #07f;
  animation: wave 0.4s ease;
}
.inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}
body {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  color: #223254;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inline-svg {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  user-select: none;
}
@media screen and (max-width: 640px) {
  body {
    width: auto;
    display: inherit;
    padding: 20px;
  }
  .cbx {
    width: 100%;
    margin-bottom: 4px;
    display: inline-block;
  }
}
@-moz-keyframes wave {
  50% {
    transform: scale(0.9);
  }
}
@-webkit-keyframes wave {
  50% {
    transform: scale(0.9);
  }
}
@-o-keyframes wave {
  50% {
    transform: scale(0.9);
  }
}
@keyframes wave {
  50% {
    transform: scale(0.9);
  }
}

@media (min-width: 802px) { 
.optionsoffilters {
  width:37rem;
	}
}

</style>
