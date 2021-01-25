<template>

    <div class="Box block m-0 m-auto grid grid-cols-1 gap-4 mb-6 w-4/5 md:w-3/4 lg:w-3/5">
        <div class="inpt1 relative w-2/5 md:w-1/5">

                <div @click="dncr()"   class="minus">
                    <img  class="w-4 minuspic" src="../assets/Pics/Annoncemins.svg">
                </div>

                <input  v-model="index" v-on:keydown="nmbrages()"   class="w-full" type="number" min="1" max="100"   oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">

                <div  @click="incr()"   class="plus">
                    <img  class="w-4 pluspic" src="../assets/Pics/Annonceplus.svg">
                </div>

        </div>

                    
                <div  v-for="(item, index) in items" :key="index" class="salledebainoptions  grid  gap-2 grid-cols-1  md:grid-cols-5">

                    <div class="flex w-full col-span-2">
                            <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="inptt border border-2 rounded-r px-4 py-2 w-full" type="text" :placeholder="'Surface Box '+[[index+1]]"/>
                            <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">m²</span>
                    </div>


                    <div class="flex w-full col-span-3 pl-2">

                            <p>Borne électrique pour véhicule</p>
                            <div class="togglebtn ml-2 sm:ml-4 md:ml-4">
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
  name: 'Box',
  props: {
  },
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

// .Box{
//   position: relative;
//   left: 2rem;
// }
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




// Counter of salle de bain

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
.inptt {
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

@media (min-width: 768px) { 
    .Box{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .Box{
        margin-left:23%
    }

}

</style>