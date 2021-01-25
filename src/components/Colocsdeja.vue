<template>
        <div class="Toilettes block m-0 m-auto grid grid-cols-1 gap-4 mb-6 w-4/5 md:w-3/4  md:grid-cols-9 lg:w-3/5">

        <div class="inpt1 relative w-2/5 md:w-full  md:col-span-2">

                <div @click="dncrstoilettes()"   class="minus">
                    <img  class="w-4 minuspic" src="../assets/Pics/Annoncemins.svg">
                </div>

                <input  v-model="indexoftoilette" v-on:keydown="nmbrages()"  class="w-full" type="number" min="1" max="100"   oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">

                <div  @click="incrsbains()"   class="plus">
                    <img  class="w-4 pluspic" src="../assets/Pics/Annonceplus.svg">
                </div>

        </div>

        <!-- <div v-for="(toillete, index) in toilettes" :key="index" class="salledebainoptions md:col-span-7 grid gap-4 grid-cols-1 md:grid-cols-2 ">
          <div class="flex w-full">
					<input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full" type="text" :placeholder="'Surface toilette '+[[index+1]]"/>
              <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">m²</span>
</div>
            
          <div class="flex w-full">

                <p>Séparée</p>
                <div class="togglebtn ml-4">
                    <label class="toggle-control">
                    <input type="checkbox" checked="checked">
                    <span class="control"></span>
                    </label>
                </div>

          </div>

        </div> -->

    </div>
</template>

<script>
export default {
  name: 'Colocsdeja',
  props: {
  },
    data() {
      return {
          indexoftoilette:0,
          toilettes:[],
          flag:false,
      }

    },
   methods: {
            nmbrages:function(){
            var noages=parseInt(this.indexoftoilette)
            console.log(typeof(noages))
            console.log(noages);
            if(noages>100){
            this.toilettes=[]
            this.flag=true
            }
            else{
            var j;
            this.toilettes=[];
            for (j=0;j<noages;j++){
              this.toilettes.push(j)
            }
            this.flag=false
            }
      },

        dncrstoilettes:function(){
                  if(this.indexoftoilette==0){
                      this.indexoftoilette=0
  
                  }
                  else {
                  this.indexoftoilette=this.indexoftoilette-1;
                  this.toilettes.pop(this.indexoftoilette)

                  }
                  console.log(this.indexoftoilette)

        },
        incrsbains:function(){

                  this.indexoftoilette=this.indexoftoilette+1;
                  this.toilettes.push(this.indexoftoilette)
                  console.log("hada index db",this.indexoftoilette)	
                  console.log("hada array chno fih ",this.toilettes)	
        },

 

   }



}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";
// Counter of salle de bain
// .Toilettes{
//   position: relative;
//   left: 2rem;
// }
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

// Surface of salle de bain 
.espaceinpt {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    border-top-right-radius: 0px;
}
span {
    background-color: #2C8EEA;
    color: #F3F4F8;
    border: 0px solid #D4D6DC;
    border-radius: 8px;
    border-left: 0.1px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    font-size: 0.95rem;
}

// Séparé toggle btn

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

@media (min-width: 768px) { 
    .Toilettes{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .Toilettes{
        margin-left:23%
    }

}


</style>