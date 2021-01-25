                <!-- <input id="paste-no" onpaste="return false" oninput="this.value = this.value..replace(/[^0-9]/g, '').replace(/[^a-zA-Z.]/g, '').this.value = this.value.replace(/(\..*)\./g, '$1');" name="" class="espaceinpt2 border border-2 rounded  px-4 py-2 w-full" type="text" placeholder="Commune ou code postal"  disabled/> -->

<template>
 <div class="Surface block m-0 m-auto mb-6  w-4/5 md:w-3/4 lg:w-3/5">

        <!-- <div class="Prixhonoraires grid grid-cols-1 md:grid-cols-1 gap-4 md:w-4/5">
            <div class="flex w-full">
                    <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img src="../assets/Pics/Annoncelocation.svg"></span>
					<input id="autocomplete" onpaste="return false" oninput="this.value = this.value..replace(/[^0-9]/g, '').replace(/[^a-zA-Z.]/g, '').this.value = this.value.replace(/(\..*)\./g, '$1');" name="" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Entrez votre adresse ici" />
			</div> 

            <div class="flex w-full"> -->
<!-- 
            </div>
        </div>  -->

        <div  id="autocomplete" class="autocomplete-container"></div>
        <input  v-model="Commune" id="paste-no" onpaste="return false" oninput="this.value = this.value..replace(/[^0-9]/g, '').replace(/[^a-zA-Z.]/g, '').this.value = this.value.replace(/(\..*)\./g, '$1');" name="" class="espaceinpt2 mt-6 border border-2 rounded  px-4 py-2 " type="text" placeholder="Commune ou code postal" />
        
        <div class="confirm mt-6 flex w-full">
        <input class="inp-cbx" id="cbx" type="checkbox" style="display: none"/>
        <label class="cbx" for="cbx"><span>
        <svg width="12px" height="9px" viewbox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
        </svg></span><span>Je confirme que cette adresse est validée</span></label>
        </div>
        


    </div> 
</template>

<script>
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';

export default {
  name: 'Surface',
     data() {
    return {
    Adresse:null,
    Commune:null,
    objinfos:{
    municipality:null,
    city:null,
    }
    }
    },


  mounted(){
    const autocomplete = new GeocoderAutocomplete(
                        document.getElementById("autocomplete"), 
                        '8990065e85744417b61672b67588c710', 
                        { placeholder:"Entrez votre adresse ici" });

    autocomplete.on('select', (location) => {
    this.objinfos.municipality=location.properties.address_line2
    this.objinfos.city=location.properties.address_line1
    this.Adresse=this.objinfos.city
    this.Commune=this.objinfos.municipality
    document.querySelector(".geoapify-autocomplete-input").value = this.Adresse
    // check selected location here 
    console.log("hado location",location)
    });

 

    }


}
</script>

<style lang="scss">
@import "../scss/main.scss";

.autocomplete-container {
    position: relative;
}

.geoapify-autocomplete-input{ 
    font-family: $gr !important;
    background-color: transparent !important;
    border: 1px solid #D4D6DC !important;
    border-radius: 8px !important;
    padding-left: 1rem !important;
    height: 3.4rem !important;
    font-size: 16px !important;

}

</style>


<style  scoped lang="scss">
@import "../scss/main.scss";

.cbx {
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
}
.cbx span {
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  transform: scale(1);
  vertical-align: middle;
  border: 1px solid #B9B8C3;
  transition: all 0.2s ease;
}
.cbx span:first-child svg {
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 6px;
  fill: none;
  stroke: white;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child:before {
  content: "";
  width: 100%;
  height: 100%;
  background: #2C8EEA;
  display: block;
  transform: scale(0);
  opacity: 1;
  border-radius: 50%;
  transition-delay: 0.2s;
}
.cbx span:last-child {
  margin-left: 8px;
}
.cbx span:last-child:after {
  content: "";
  position: absolute;
  top: 8px;
  left: 0;
  height: 1px;
  width: 100%;
  background: #B9B8C3;
  transform-origin: 0 0;
  transform: scaleX(0);
}
.cbx:hover span:first-child {
  border-color: #2C8EEA;
}

.inp-cbx:checked + .cbx span:first-child {
  border-color: #2C8EEA;
  background: #2C8EEA;
  animation: check 0.6s ease;
}
.inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}
.inp-cbx:checked + .cbx span:first-child:before {
  transform: scale(2.2);
  opacity: 0;
  transition: all 0.6s ease;
}
.inp-cbx:checked + .cbx span:last-child {
  color: #B9B8C3;
  transition: all 0.3s ease;
}
.inp-cbx:checked + .cbx span:last-child:after {
  transform: scaleX(1);
  transition: all 0.3s ease;
}

@keyframes check {
  50% {
    transform: scale(1.2);
  }
}
// Counter of salle de bain
// .Surface{
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



input[type=number] {
  height: 2.6rem;
  font-size: 1rem;
  text-align: center;
//   border: 1px #D4D6DC solid;
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
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-top-left-radius: 0px;
}
.espaceinpt2 {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
    height: 3.4rem;
    font-size: 16px;
    width: 95%;
}
span {
    color: #B9B8C3;
    font-family:  $gr;
    font-size: 16px;
    background-color: transparent;
    // border: 1px solid #D4D6DC;
    border-radius: 8px;
    border-right: 0.2px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;

}
input {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
 

}

@media (min-width: 768px) { 
    .Surface{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .Surface{
        margin-left:23%
    }

}

// @media (min-width: 320px) { 
//     .inpt1{
//         width: 100%;
//     }
// }

// @media (min-width: 768px) { 
//     .inpt1{
//         width: 40%;
//     }
// }


// @media (min-width: 1024px) { 
//     .inpt1{
//         width: 38%;
//     }
// }


</style>