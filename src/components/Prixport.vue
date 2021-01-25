<template>
    <div class="Prix block m-0 m-auto  mb-6 w-4/5 md:w-3/4 lg:w-3/5">

        <div class="prixheader grid grid-cols-1 md:grid-cols-2 gap-4 md:w-4/5">
            <div class="flex w-full">
					<input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Prix" />
                    <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">€</span>
			</div>
            
            <div class="flex w-full">
					<input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Taxe foncière" />
                    <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">€</span>
			</div>
        

        </div>

        <h3 class="mt-5">Autres charges</h3>

        <div class="inpt1 relative w-2/5 mt-4  md:w-full  md:col-span-2">

                <div @click="dncr()"   class="minus">
                    <img  class="w-4 minuspic" src="../assets/Pics/Annoncemins.svg">
                </div>

                <input  v-model="index" v-on:keydown="nmbrages()" class="w-full" type="number" min="1" max="100"   oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="Autres charges">

                <div  @click="incr()"   class="plus">
                    <img  class="w-4 pluspic" src="../assets/Pics/Annonceplus.svg">
                </div>

        </div>

        <div  v-for="(charge, index) in Charges" :key="index" class="prixheader  mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:w-4/5">

           <div class="flex w-full">
					<input name="field_name" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full" id="nomcharge" type="text" :placeholder="'Nom de charge  '+[[index+1]]" />
			</div>

            <div class="flex w-full">
					<input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full" type="text" :placeholder="'Valeur de charge  '+[[index+1]]" />
                    <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">€</span>
			</div>

        </div>


    </div>
</template>

<script>
export default {
  name: 'Prixbe',
  props: {
  },
    data() {
      return {
          index:0,
          Charges:[],
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
            this.Charges.pop(this.index)

            }
            console.log(this.index)

            },
            incr:function(){
            this.index=this.index+1;
            this.Charges.push(this.index)
            },
        
        nmbrages:function(){
			var noages=parseInt(this.index)
			console.log(typeof(noages))
			console.log(noages);
			if(noages>100){
			this.Charges=[]
			this.flag=true
			}
			else{
			var j;
			this.Charges=[];
			for (j=0;j<noages;j++){
				this.Charges.push(j)
			}
			this.flag=false
			}
		},
    },

}
</script>

<style  scoped lang="scss">
@import "../scss/main.scss";
// Counter of salle de bain
// .Prix{
//     position: relative;
//     left: 2rem;
// }
#nomcharge{
    border-radius: 8px;
}

h3{
    color: #8C92A4;
    font-size: 1rem;
    font-family: "Gilroy-Medium";
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
    border-radius: 8px;
    background-color: #2C8EEA;
    height: 1.4rem;
    width: 1.4rem;
    top: 7px;
    left: 10px;
    cursor: pointer;
}

.plus{
    position: absolute;
    border-radius: 8px;
    background-color: #2C8EEA;
    height: 1.4rem;
    width: 1.4rem;
    top: 7px;
    float: right;
    right: 10px;
    cursor: pointer;
}

input[type=number] {
  height: 2.6rem;
  font-size: 1rem;
  text-align: center;
  border: 1px #D4D6DC solid;
  border-radius: 8px;
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

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
	border: 1px solid $main;
	color:$main;
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


@media (min-width: 320px) { 
    .inpt1{
        width: 100%;
    }
}

@media (min-width: 768px) { 
    .inpt1{
        width: 40%;
    }
}


@media (min-width: 1024px) { 
    .inpt1{
        width: 38%;
    }
}

@media (min-width: 768px) { 
    .Prix{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .Prix{
        margin-left:23%
    }

}

</style>