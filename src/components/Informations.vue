<template>

    <div class="Informations block m-0 m-auto mb-8 w-4/5 md:w-3/4 lg:w-3/5">

    <div class="inpts grid grid-cols-1 gap-6 w-full mt-3 md:grid-cols-2">
						<div class="flex w-full">
						<input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                         name="field_name" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full"
                          type="text"
                           placeholder="Tirant d'eau" />
                        <span class="md text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">m</span>
						</div>
                        <div class="flex w-full">
						<input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                         name="field_name" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full"
                          type="text"
                           placeholder="Réservoir Eau" />
                        <span class="md text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"> L</span>
						</div>

	</div>
    
       <div class="inpts grid grid-cols-1 gap-4 w-full mt-3 md:grid-cols-2">
			<div class="flex w-full  dsp">
				<span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img src="../assets/Pics/couch.svg"></span>
                <input name="field_name" class="border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Nombre de cabine" />      
			</div>

			<div class="flex w-full  dsp">
				<span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img src="../assets/Pics/shower.svg"></span>
                <input name="field_name" class="border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Nombre Salle d'eau" />  
			</div>
	</div>


    </div>
  
</template>

<script>
export default {
  name: 'Informations',
  props: {
  },
  data() {
      return {
          indexofch:0,
          indexofsej:0,
          chambres:[],
          séjours:[],
      }

    },

    


        
}

</script>

<style scoped lang="scss">
@import "../scss/main.scss";

// .Informations{
//     position: relative;
//     left: 2rem;
// }

.dsp ::placeholder{
    color: rgba(49, 49, 50, 0.5);
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
    width: 35rem;
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
.md {
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
// 

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
    border: 1px solid $main;
    color:$main;

}

.addressedebiencontainer {
    margin: 0 auto;
}

input {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-top-left-radius: 0px;
    font-size: 0.8rem;

}
span {
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
    border-right: 0.2px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
}

@media (min-width: 768px) { 
    .Informations{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}
//     .inpts{
//     width: 50.9rem;
// }

}
@media (min-width: 1024px) { 
    .Informations{
        margin-left:23%
    }
//     .inpts{
//     width: 50.9rem;
// }

}
</style>