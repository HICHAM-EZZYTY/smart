<template>

    <div class="espace block m-0 m-auto mb-8 w-4/5 md:w-3/4 lg:w-3/5">

    <div class="inpts grid grid-cols-1 gap-6 w-full mt-3 md:grid-cols-3">
						<div class="flex w-full">
						<input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Surface terrain" />
                        <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">m²</span>
						</div>

						<div class="flex w-full">
						<input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt inpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Surface habitable" />
                        <span class="spn text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">m²</span>
						</div>

						<div class="flex w-full">
						<input  name="field_name" class="espaceinpt form-control border border-2 rounded-r px-4 py-2 w-full" type="text"  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="Façade" />
                        <span class="tc-img text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">m</span>
						</div>
	</div>


    <h3 class="mb-6 mt-6">Chambres</h3>

    <div class="chambres grid grid-cols-1 gap-4 w-full md:w-4/5 mt-3  md:grid-cols-9">
        
        <div class="inpt1 relative w-2/5 md:w-4/5 md:col-span-2 md:col-span-3 lg:col-span-2">
            <div  @click="decrchambres()" class="minus">
                <img  class="w-4 minuspic" src="../assets/Pics/Annoncemins.svg">
            </div>
            <input  v-model="indexofch"  v-on:keydown="nmbrages()" class="w-full" type="number" min="1" max="100"   oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
            <div @click="incrchambres()" class="plus">
                <img  class="w-4 pluspic" src="../assets/Pics/Annonceplus.svg">
            </div>

        </div>

        <div v-for="(chambre, index) in chambres" :key="index" class="chambresurfaces w-full col-span-3">
        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  name="field_name"  class="chambreinpt border border-2 rounded-r px-4 py-2 w-full" type="texte" :placeholder="'Surface chambre '+[[index+1]]"/>
        </div>

    </div>

    <h3 class="mb-6 mt-6">Séjours</h3>

    
    <div class="séjours grid grid-cols-1 gap-4 w-full md:w-4/5 mt-3  md:grid-cols-9">
        
        <div class="inpt1 relative w-2/5 md:w-4/5 md:col-span-3 lg:col-span-2">
            <div  @click="decrséjours()" class="minus">
                <img  class="w-4 minuspic" src="../assets/Pics/Annoncemins.svg">
            </div>
            <input  v-model="indexofsej"  v-on:keydown="nmséjours()" class="w-full" type="number" min="1" max="100"   oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
            <div @click="incrséjours()" class="plus">
                <img  class="w-4 pluspic" src="../assets/Pics/Annonceplus.svg">
            </div>

        </div>

        <div v-for="(séjour, index) in séjours" :key="index" class="chambresurfaces w-full col-span-3">
        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  name="field_name"  class="chambreinpt border border-2 rounded-r px-4 py-2 w-full" type="texte" :placeholder="'Surface séjour '+[[index+1]]"/>
        </div>

    </div>



    </div>
  
</template>

<script>
export default {
  name: 'Espace',
  props: {
  },
  data() {
      return {
          indexofch:0,
          indexofsej:0,
          chambres:[],
          séjours:[],
          flag:false,
      }

    },
    watch: {
    indexofch: function (val) {

        var index=parseInt(val)
        for ( var i = 0; i < index.length; i++) {
         this.chambres.push(i);
}
    },
    },
    
    methods: {

        incrchambres:function(){
            console.log("the method is working fine")
            this.indexofch=this.indexofch+1;
            this.chambres.push(this.indexofch)
            console.log(this.indexofch)	
        },
        decrchambres:function(){
            if(this.indexofch==0){
                this.indexofch=0
            }
            else {
            this.indexofch=this.indexofch-1;
            this.chambres.pop(this.indexofch)

            }
            console.log(this.indexofch)
        },
        incrséjours:function(){
            console.log("the method is working fine")
            this.indexofsej=this.indexofsej+1;
            this.séjours.push(this.indexofsej)
            console.log(this.indexofsej)	
        },

        decrséjours:function(){

            if(this.indexofsej==0){
                this.indexofsej=0
            }
            else {
            this.indexofsej=this.indexofsej-1;
            this.séjours.pop(this.indexofsej)

            }
            console.log(this.indexofsej)
        },

        nmbrages:function(){
            var noages=parseInt(this.indexofch)
            console.log(typeof(noages))
            console.log(noages);
            if(noages>15){
            this.chambres=[]
            this.flag=true
            }
            else{
            var j;
            this.chambres=[];
            for (j=0;j<noages;j++){
              this.chambres.push(j)
            }
            this.flag=false
            }
      },
        nmséjours:function(){
            var noages=parseInt(this.indexofsej)
            console.log(typeof(noages))
            console.log(noages);
            if(noages>15){
            this.séjours=[]
            this.flag=true
            }
            else{
            var j;
            this.séjours=[];
            for (j=0;j<noages;j++){
              this.séjours.push(j)
            }
            this.flag=false
            }
      },

        
}

}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";

// .espace{
//     position: relative;
//     left: 2rem;
// }
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


.inpt1{}

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

    h3{
        color:#8C92A4;
        font-size: 1rem;
        font-family: $gm;
    }

.espaceinpt {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    border-top-right-radius: 0px;
}

.chambreinpt {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
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

@media (min-width: 768px) { 
    .espace{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .espace{
        margin-left:23%
    }

}

</style>