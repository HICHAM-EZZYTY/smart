<template>
      <div class="Parking block m-0 m-auto  mb-6 w-4/5 md:w-3/4 lg:w-3/5">
        
        
        <div class="inpt1 relative w-2/5  md:col-span-2 w-2/5 md:w-1/6 ">

                <div @click="dncr()"   class="minus">
                    <img  class="w-4 minuspic" src="../assets/Pics/Annoncemins.svg">
                </div>

                <input  v-model="index" v-on:keydown="nmbrages()" class="w-full" type="number" min="1" max="100"   oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">

                <div  @click="incr()"   class="plus">
                    <img  class="w-4 pluspic" src="../assets/Pics/Annonceplus.svg">
                </div>

        </div>
        

        <div v-for="(item, index) in items" :key="index" class="parkingoptions grid grid-cols-1 lg:grid-cols-3">
                    <div   class="confirmcuisine mt-6 sm:grid sm:grid-cols-5 lg:col-span-1 lg:grid-cols-2">

                            <div class="inptt col-span-1">

                              <input class="checkbox-viager" type="radio" name="Viagertype" id="Viagerlibre" checked>
                              <label class="for-checkbox-tools" for="Viagerlibre">
                              Ouvert
                              </label>

                            </div>
                          
                            <div class="inptt col-span-1">

                              <input class="checkbox-viager" type="radio" name="Viagertype" id="ViagerOccupé">
                              <label class="for-checkbox-tools" for="ViagerOccupé">
                              Clos
                              </label>

                            </div>
                    </div>
                    <div class="flex w-full lg:col-span-2 lg:mt-12 lg:ml-4">

                        <p>Borne électrique pour véhicule</p>
                        <div class="togglebtn ml-4">
                            <label class="toggle-control">
                            <input type="checkbox" >
                            <span class="control"></span>
                            </label>
                        </div>
                    </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Parking',
    data() {
      return {
        index:0,
        items:[],
        flag:false,

      }

    },
    methods: {
        
        dncr:function(){
                  if(this.index==0){
                      this.index=0
                  }
                  else {
                  this.index=this.index-1;
                  this.items.pop(this.index)
                  }
                  console.log(this.index)
        },
          incr:function(){
                  this.index=this.index+1;
                  this.items.push(this.index)
        },
        nmbrages:function(){
            var noages=parseInt(this.index)
            console.log(typeof(noages))
            console.log(noages);
            if(noages>100){
            this.items=[]
            this.flag=true
            }
            else{
            var j;
            this.items=[];
            for (j=0;j<noages;j++){
              this.items.push(j)
            }
            this.flag=false
            }
      },

   }



}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";


p{
    font-family: $gr;
    opacity: 0.8;
    font-size: 1.1rem;
    padding-top: 7.5px;
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
  height: 18px;
  width: 46px;
  border-radius: 25px;
  background-color: darkgray;
  -webkit-transition: background-color 0.15s ease-in;
  transition: background-color 0.15s ease-in;
}
.toggle-control .control:after {
  content: "";
  position: absolute;
  left: 5px;
  top: 2px;
  width: 14px;
  height: 14px;
  border-radius: 25px;
  background: white;
  -webkit-transition: left 0.15s ease-in;
  transition: left 0.15s ease-in;
}



.togglebtn{
    padding-top: 5px;
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

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
	border: 1px solid $main;
	color:$main;
}
input[type=number] {
  height: 2.6rem;
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
  width: 6rem;
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


@media (min-width: 768px) { 
   .inpt1{
       width:20.666667% ;
   }
}

@media (min-width: 768px) { 
    .Parking{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .Parking{
        margin-left:23%
    }

}

</style>