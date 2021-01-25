<template>
                <div class="popup">


                  <div class="tempdetrajetcontainer">

                  <div  @click="close()" class="closebackgroud">  
                  <img  id="closeicon" alt="fermer popup icon" src="../../assets/Pics/clostimetraject.svg">
                  </div>
                  <h1 class="mt-12 ml-12">Votre temps de trajet</h1>
                  <h6 class="ml-12 mt-2">Je veux trouver mon bien immobilier</h6>
                  <div class="inpts mt-6 ml-12 ">
                   <h5>Indiquez votre trajet idéal :</h5>
                    <div class="selections mt-1 grid grid-cols-1  sm:grid-cols-3">
                      <div class="time">
                        <div class="selectdiv">
                          <label>
                            <select>
                            <option> 10 min </option>
                            <option>20 min</option>
                            <option selected>30 min</option>
                            <option>45 min</option>
                            </select>
                          </label>
                        </div>
                      </div>

                      <div class="transport">
                        <div class="selectdiv">
                           <label>
                            <select>
                            <option> À pied </option>
                            <option> À vélo</option>
                            <option selected>En voiture</option>
                            <option>En transport en commun</option>
                            </select>
                          </label>
                        </div>
                      </div>

                      <div class="adress">
                        <div class="selectdiv">
                           <label>
                            <select>
                            <option>Mon travail</option>
                            <option>L'école de mes enfants</option>
                            <option selected>Mon école/université</option>
                            <option>Autre lieu</option>
                            </select>
                          </label>
                        </div>
                      </div>



                    </div>
                    <div class="scndinpt mt-2 flex">
                    <input type="search" name="serch" placeholder="Saisir une destination" class=" ml-0 adressetimetraject">
                    </div>
                  </div>

                  
                              <hr class="mt-6" style="width:100%">

                              <div class="footerbtns flex pt-2 sm:pt-2 lg:pt-4 pl-12">

                                <div @click="close()" class="cancelbtn">Annuler</div>

                                <div class="confirmbtn">Appliquer ( 40 annonces)</div>

                              </div>


                  </div>

                </div>
</template>



<script>

import { mixin as clickaway } from 'vue-clickaway';



export default {
    mixins: [ clickaway ],
    name: 'Tempsdetrajet',
    components: {  
    },
    data() {
    return {


    }

    },
    props:["AdresseModal","NatureModal","TypeofadModal","TypeofgoodModal","Surfacemin","Surfacemax","Piecesmin","Piecesmax"],
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

.cancelbtn{
    font-family: $gm;
    color: #B8BBBE;
    border: 2px solid #F1F1F1;
    border-radius: 6px;
    height: 2.5rem;
    width: 5.2rem;
    text-align: center;
    padding-top: 7px;
    cursor: pointer;
    font-size: 0.9rem;
}
.confirmbtn{
  font-family: $gr;
    color: white;
    background-color: $main;
    border-radius: 6px;
    width: 13rem;
    margin-left: auto;
    margin-right: 50px;
    text-align: center;
    padding-top: 10px;
    cursor: pointer;
    font-size: 0.9rem;

}

h5{
  color: #8C92A4;
  font-family: $pl;
  font-size: 12px;
  margin-left: 2px;
}

select:focus{
  outline-color: #2C8EEA;
  border: 1.2px solid #2C8EEA;
}

.selections{
  width: 93%;
}

.selectdiv {
  position: relative;  
  float: left;
  width: 90%;
}

select::-ms-expand {
display: none;
}

.selectdiv:before {
  content: ' ';
  font: 20px $pr, monospace;
  color: #2C8EEA;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: #B5D9FB;
  right: 11px;
  top: 18px;
  padding: 12 0 30 20px;
  position: absolute;
  pointer-events: none;
}

.selectdiv:after {
  position: absolute;
  content: '>';
  font: 18px $pr, monospace;
  color: #2C8EEA;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  right: 16px;
  top: 14px;

}


.selectdiv select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  width: 100%;
  // max-width: 320px;
  height: 44px;
  float: right;
  margin: 5px 0px;
  padding: 0px 44px  0px 16px;
  font-family: $pl;
  font-size: 14px;
  line-height: 1.75;
  color: #8C92A4;
  background-color: transparent;
  background-image: none;
  border: 1.2px solid #F1F1F1;
  border-radius: 5px;
  -ms-word-break: normal;
  word-break: normal;
}
// selected and options box

p{
  font-size: 18px;
  color: #2C8EEA;
  font-family: $ps;

}

.transports{
  width: 49%;
  margin: 0 auto;
  margin-top: 2rem;
}

input::placeholder { 
      font-family: $pl;
      font-size: 13px;
}
input:focus {
  border: none;
  background-color: #F5F6FA;
}

.adressetimetraject{
    // border:1px solid #F1F1F1;
    border-radius: 5px;
    width: 90%;
    padding-left: 18px;
    padding-right: 6px;
    height: 45px;
    font-size: 14px;
    font-family: $pl;
    background-color: #F5F6FA;
    color: #8C92A4;
}
h1{

  font-family: $ps;
  color:#052F77;
  font-size: 1.1rem;
}

h6{
  font-family: $pr;
  color:#052F77;
  font-size: 0.86rem;
}

#closeicon{
     position: relative;
    top: 21px;
    display: block;
    margin: 0 auto;
}

.closebackgroud{
    background-color: #2C8EEA;
    position: absolute;
    height: 4rem;
    width: 4rem;
    border-radius: 6px;
    right: -11px;
    top: -11px;
    cursor: pointer;
}
.tempdetrajetcontainer{
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    width: 55vw;
    height: 57vh;
    top: 98px;
    background-color: #FFFFFF;
    z-index: 40;
    border-radius: 8px;
}
.popup{
    position: fixed;
    top: -100vh;
    top: 0;
    left: 0;
    z-index: 9999999;
    background:rgba(140, 146, 164, 0.8);
    width: 100vw;
    height: 100%;
    opacity: 1;
    transition: opacity 0.35s ease;
}  

@media  (min-width: 320px) {
.tempdetrajetcontainer{
    width: 90vw;
    height: 463px;
    top: 9px;
}
.confirmbtn{
  padding-top: 10px;
  padding-bottom: 10px;
}
.cancelbtn{
  display: none;
}

.selectdiv{
  width:97%;
}

}

@media  (min-width: 500px) {

  .cancelbtn{
    display: block;
  }
  .tempdetrajetcontainer{
    width: 90vw;
    height: 454px;
    top: 9px;
}

}

@media  (min-width: 640px) {

  .selectdiv{
    width: 90%;
  }

  .tempdetrajetcontainer{
    width: 90vw;
    height: 340px;
    top: 90px;

  }
  
}



@media  (min-width: 800px) {
.tempdetrajetcontainer{
  width: 65vw;
  height: 340px;
}

}

@media  (min-width: 1024px) {
.tempdetrajetcontainer{
  width: 70vw;
  height:356px;
}

}

@media  (min-width: 1100px) {
.tempdetrajetcontainer{
  width: 70vw;
  height:356px;
}

}

</style>