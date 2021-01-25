<template>
    <div role="group" class="_9fvlwj0">
        <section>
             <!-- <div class="mt-4">
                <span class="Dip" >Plusieurs case à cocher :</span>
            </div> -->
        <div  class="optionsoffilters grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  pt-2 flex">
                                                                
                       
                                <input    value="Loi pinel" class="pt-2 inp-cbx" type="checkbox" id="Loi pinel"  />
                                <label  class="cbx" for="Loi pinel"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Loi pinel</span></label>

                                <input     value="Loi censi-bouvard"  class="inp-cbx pt-2" type="checkbox" id="Loi censi-bouvard" />
                                <label    class="cbx" for="Loi censi-bouvard"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Loi censi-bouvard</span></label>

                                
                                <input    value="Statut LMNP"  class="inp-cbx pt-2"  type="checkbox" id="Statut LMNP" />
                                <label    class="cbx" for="Statut LMNP"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Statut Lmnp</span></label>

                                <input     value="Girardin"  class="inp-cbx pt-2" type="checkbox" id="Girardin" />
                                <label    class="cbx" for="Girardin"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Girardin</span></label>

                                <input     value="Malraux"  class="inp-cbx pt-2" type="checkbox" id="Malraux" />
                                <label    class="cbx" for="Malraux"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Malraux</span></label>

                                <input     value="Lmp"  class="inp-cbx pt-2"  type="checkbox" id="Lmp" />
                                <label    class="cbx" for="Lmp"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Lmp</span></label>


                                <input     value="Foncier"  class="inp-cbx pt-2" type="checkbox" id="Foncier" />
                                <label    class="cbx" for="Foncier"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Foncier</span></label>


                                
                                <input     value="Denormandie"  class="inp-cbx pt-2" name="loisdedéfiscalisation"  id="Denormandie" type="checkbox"/>
                                <label    class="cbx" for="Denormandie"><span>
                                    <svg width="12px" height="10px">
                                      <use xlink:href="#check"></use>
                                    </svg></span><span>Denormandie</span></label>



                                
                              
                                         
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
     data() {
      return {
      }
     },
     computed: {

    neuflois:{
    get () {
    return this.$store.state.loisneuf
    },
    set (value) {
      this.$store.commit('updateLois', value)
    }
    },

     }

}
</script>

<style lang="scss" scoped>
@import "../../../scss/main.scss";


.Dip{
    position: relative;
    top: -9px;
    color: gray;
    font-size: 14px;
}

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
    font-size: 16px;
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
  font-family: "Open Sans vis à vis ", Sans vis à vis -serif;
  font-size: 16px;
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
// 





</style>
