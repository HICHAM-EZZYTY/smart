<template>

    <div class="cuisine grid grid-cols-1 block m-0 m-auto  w-4/5 md:w-3/4 lg:w-3/5 ">

          
        <div class="inpt1 relative w-2/5 md:w-1/6  ">

            <div  @click="decrcuisines()" class="minus">
                <img  class="w-4 minuspic" src="../assets/Pics/Annoncemins.svg">
            </div>

            <input  v-model="indexofcuisine"  class="w-full" type="number" min="1" max="100"   oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">

            <div @click="incrcuisines()" class="plus">
                <img  class="w-4 pluspic" src="../assets/Pics/Annonceplus.svg">
            </div>

        </div>


        <div v-for="(cuisine, index) in cuisines" :key="index" class="cuisineoptions">

            <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  name="field_name"  class="chambreinpt mt-6 border border-2 rounded-r px-4 py-2 w-full sm:w-full md:w-1/4" type="texte" :placeholder="'Surface de cuisine '+[[index+1]]"/>

            <div   class="confirmcuisine grid  grid-cols-1 mt-6  w-4/5 md:w-3/5 md:grid-cols-3 md:gap-12 md:m-0 md:mt-6 lg:gap-8 xl:gap-0">
                            <input class="checkbox-viager" type="radio" name="Viagertype" id="Viagerlibre" checked>
                            <label class="for-checkbox-tools" for="Viagerlibre">
                            standard
                            </label>

                            <input class="checkbox-viager" type="radio" name="Viagertype" id="ViagerOccupé">
                            <label class="for-checkbox-tools" for="ViagerOccupé">
                            ouverte
                            </label>

                            <input class="checkbox-viager" type="radio" name="Viagertype" id="ViagerSansrente">
                            <label class="for-checkbox-tools" for="ViagerSansrente">
                            kitchenette
                            </label>
            </div>


            <div class="equipee mt-3  mb-6 flex">

                <div class="equipeheading">Équipée</div>
                

                <div class="togglebtn ml-4">

                <label class="toggle-control">
                <input type="checkbox" checked="checked">
                <span class="control"></span>
                </label>


                </div>



            </div>

        


        </div>


    </div>

  
</template>

<script>
export default {
  name: 'Cuisine',
  props: {
  },
  data() {
      return {
          indexofcuisine:0,
          cuisines:[],
      }

    },
    methods: {

        incrcuisines:function(){
            console.log("the method is working fine")
            this.indexofcuisine=this.indexofcuisine+1;
            this.cuisines.push(this.indexofcuisine)
            console.log(this.indexofcuisine)	
        },
        decrcuisines:function(){
            if(this.indexofcuisine==0){
                this.indexofcuisine=0
            }
            else {
            this.indexofcuisine=this.indexofcuisine-1;
            this.cuisines.pop(this.indexofcuisine)

            }
            console.log(this.indexofcuisine)
        },

    },


}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";


.equipeheading{
    height: 2rem;
    width: 5rem;
    background: #2C8EEA;
    border-radius: 3px;
    text-align: center;
    padding-top: 4px;
    color:#F3F4F8;
    font-family: $gr;
}




/// toggle checkbox 
.toggle-control {
  display: block;
  position: relative;
  padding-left: 100px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.toggle-control input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.toggle-control input:checked ~ .control {
  background-color: $main;
}
.toggle-control input:checked ~ .control:after {
  left: 30px;
}
.toggle-control .control {
  position: absolute;
  top: 7px;
  left: 0;
  height: 23px;
  width: 53px;
  border-radius: 25px;
  background-color: darkgray;
  -webkit-transition: background-color 0.15s ease-in;
  transition: background-color 0.15s ease-in;
}
.toggle-control .control:after {
  content: "";
  position: absolute;
  left: 5px;
  top: 3px;
  width: 18px;
  height: 18px;
  border-radius: 25px;
  background: white;
  -webkit-transition: left 0.15s ease-in;
  transition: left 0.15s ease-in;
}




/////////// Start of the second radioo form

[type="radio"]:checked,
[type="radio"]:not(:checked){
	position: absolute;
	left: -9999px;
	width: 0;
	height: 0;
	visibility: hidden;
}

.checkbox-viager:checked + label,
.checkbox-viager:not(:checked) + label{
	position: relative;
	display: inline-block;
    font-family: $gr;
    padding-top: 30px;
    height: 5rem;
	width: 8rem;
	font-size: 16.3px;
	line-height: 20px;
	letter-spacing: 1px;
	margin: 0 auto;
	margin-left: 0px;
	margin-right: 5px;
	margin-bottom: 10px;
	text-align: center;
	border-radius: 4px;
	overflow: hidden;
	cursor: pointer;
	color: #F3F4F8;
	-webkit-transition: all 300ms linear;
	transition: all 300ms linear; 
}
.checkbox-viager:not(:checked) + label{
    border: 1px solid #D4D6DC;
    background-color: transparent;
    color: rgba(49, 49, 50, 0.5);
}
.checkbox-viager:checked + label{
    background-color: #E9F0F8;
    color:$main;
    border: 1px solid $main;
}
.checkbox-viager:not(:checked) + label:hover{
	box-shadow: 0 8px 16px 0 rgba(59, 56, 236, 0.2);
}
.checkbox-viager:checked + label::before,
.checkbox-viager:not(:checked) + label::before{
	position: absolute; 
	content: '';
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 4px;
	background-image: linear-gradient(298deg, var(--red), var(--yellow));
	z-index: -1;
}
.checkbox-viager:checked + label .uil,
.checkbox-viager:not(:checked) + label .uil{
	font-size: 24px;
	line-height: 24px;
	display: block;
	padding-bottom: 10px;
}

////////// End of the second radio form




.chambreinpt {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
}

.inpt1{
    width:13%;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
	border: 1px solid $main;
	color:$main;
}

::placeholder { 
    color: rgba(0, 0, 0, 0.8);
}
input[type=number] {
  height: 2.2rem;
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  border: 1px #D4D6DC solid;
  border-radius: 6px;
  background: none;
  font-family: $gr;
}

// /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.minuspic{
    position: absolute;
    top: 10px;
    width: 1rem;
    left: 3px;
    cursor: pointer;
}

.pluspic{
    position: absolute;
    top: 3px;
    width: 1rem;
    left: 3px;
    cursor: pointer;
}

.minus{
    position: absolute;
    border-radius: 6px;
    background-color: #2C8EEA;
    height: 1.4rem;
    width: 1.4rem;
    top: 7px;
    left: 10px;
    cursor: pointer;
}

.plus{
    position: absolute;
    border-radius: 6px;
    background-color: #2C8EEA;
    height: 1.4rem;
    width: 1.4rem;
    top: 7px;
    float: right;
    right: 10px;
    cursor: pointer;
}




@media (min-width: 320px) { 
    .inpt1{
        width: 40%;
    }
}
@media (min-width: 768px) { 
    .inpt1{
        width: 20%;
    }
}
@media (min-width: 1024px) { 
    .inpt1{
        width: 13%;
    }
}



</style>