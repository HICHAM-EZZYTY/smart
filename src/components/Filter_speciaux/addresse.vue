<template>
    <div role="group" class="_9fvlwj0 inputmix mt-4">
        <section>
                <!-- <div class="search-bar">
                <input v-model="AdresseModal" type="text" class="input" placeholder="Adresse souhaitée">
                <span class="highlight"></span>
                <div class="search-btn">
                <svg class="icon icon-18">
                <use xlink:href="#magnify"></use>
                </svg>
                </div>
                </div> -->
                <div class="ntffilterradio pt-3 pl-6">
                            <div class="tag-container">
                                      <input
                                        value=""
                                        class="input-form"
                                        type="text"
                                        ref="inpt"
                                        :placeholder="placehold"
                                        v-model="authorNameSearchString"
                                        @keyup.enter="add_tag"
                                        @keyup.delete="delete_last"
                                        @keydown="write"
                                        @keyup="write"
                                        @focus="inputstate=true"


                                   

                                      >
                                    </div>
                                    
                                    
                                      <ul  ref="ullist" class="ullist">
                                        <li  class="itemcontain" v-for="photo in filteredPhotoFeed" v-bind:key="photo.id">
                                        <span class="item flex" @click="getTag(photo.item)">{{photo.item}}<h6 style="margin-left:auto;font-size:12px;color:#C8D0DA">Région</h6></span>
                                        </li>
                                        <li  class="itemcontain" v-for="depar in filtereddepartementFeed" v-bind:key="depar.id">
                                        <span class="item flex" @click="getTag(depar.item)">{{depar.item}}<h6 style="margin-left:auto;font-size:12px;color:#C8D0DA">Département</h6></span>
                                        </li>
                                        <li  class="itemcontain" v-for="ville in filterevilleFeed" v-bind:key="ville.id">
                                        <span class="item flex" @click="getTag(ville.item)">{{ville.item}}<h6 style="margin-left:auto;font-size:12px;color:#C8D0DA">Ville</h6></span>
                                        </li>



                                      </ul>



                                
                                      <div  class="tagslists  z-0	 flex flex-row flex-wrap mt-4">
                                        <div  v-for="(tag, index) in tagArray" v-bind:key="index" class="mt-1">
                                          <span class="chip" >{{ tag }}<span class="close" @click="removeTag(index)" >x</span></span>
                                        </div>
                                      </div>


                              </div>

        </section>
    </div>
</template>


<script>
export default {
  data(){
    return{
            placehold:"Saissez une ville , une code postal ou un département",

    }
  },

    props:["AdresseModal"],

}
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";


._9fvlwj0 {
    padding-bottom: 28px !important;
    border-bottom: 1px solid rgb(235, 235, 235) !important;
}


// 
.tag-container{
  width:90%;
  position: relative;
  right: 1.8rem;
}
input::placeholder{
  color: #C8D0DA !important;
  font-size: 0.8rem;

}
.itemcontain{
    background-color:  #F2F4F7;
    padding-top: 8px;
    padding-left: 8px;
    padding-right: 11px;
    width: 99.9%;

}
ul{
    list-style-type: none;
}
.ullist{
  padding: 0px;
  margin-top: 0px;
  overflow-y:scroll;
  z-index:3;
  position: absolute;
  width:83.5%;
  max-height: 14.6rem;
}
.input:focus ~ .highlight {
  width: 150px;
  transition: all 1s ease;
}
input {
    font-family: "Gilroy-Medium";
    font-size: 0.8rem;
    background: #F2F4F7;
    border: none !important;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    padding-left: 0.8rem;
    width: 100%;
}
// .pricefiltermin{
//     p{
//       color:#A1A5A8;
//       font-family: $gr;
//       padding-bottom: 4px;
//       font-size: 1rem;
//     }
//     input{
//       border: 2px solid #F1F1F1;
//       border-radius: 8px;
//       width: 9rem;
//       height: 3.5rem;
//       padding-left: 12px;

//     }
//    input:focus{
//     outline: none;
// }
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
// Search bar css

.search-bar {
    height: 40px;
    width: 310px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 0 0 20px;
    position: relative;
    background: #F2F2F2;
}

.input {
  border: none;
  height: 25px;
  width: 150px;
  color: #A8A8A8;
  background-color: #F2F2F2;
  font-size: 15px;
  font-family: $ur;
  outline: none;
}

.label {
  color: #aaaaaa;
  position: absolute;
  top: 13px;
  pointer-events: none;
  transition: all 0.5s ease;
}

.search-btn {
    background: #2C8EEA;
    border-radius: 10px;
    height: 40px;
    min-width: 60px;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    justify-content: center;
    cursor: pointer;
    right: -10px;
    position: absolute;
    transition: all 1s ease;
}

.icon {
  display: inline-flex;
}

.icon-18 {
  width: 18px;
  height: 18px;
}

// .highlight {
//   width: 0px;
//   height: 1px;
//   background: $main;
//   position: absolute;
//   bottom: 8px;
//   transition: all 1s ease;
// }

// .input:focus ~ .highlight {
//   width: 150px;
//   transition: all 1s ease;
// }

@media (min-width: 320px) { 
.search-bar {
  width: 211px;
}
}

@media (min-width: 500px) { 
.search-bar {
  width: 311px;
}
}

</style>
