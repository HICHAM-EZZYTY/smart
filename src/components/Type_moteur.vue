<template>
    
            <div class="Type_moteur grid grid-cols-1  block m-0 m-auto mb-8 w-3/5 md:w-3/4 lg:w-3/5">

                    <div class="confirmcuisine grid gap-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-24 xl:gap-0">  
                        <div @click="Moteur=true" class="inpttype flex w-full">
                            <input class="checkbox-viager" type="radio" name="typedechauffage" id="A Moteur" >
                            <label class="for-checkbox-tools" for="A Moteur">
                             A Moteur
                            </label>
                        </div>
                        <div @click="Moteur=false" class="inpttype flex w-full">
                            <input class="checkbox-viager" type="radio" name="typedechauffage" id="Sans Moteur">
                            <label class="for-checkbox-tools" for="Sans Moteur">
                            Sans Moteur
                            </label>
                        </div>
                    </div>
                    <!-- inputs -->
                        <div v-if="Moteur" class="Moteur  ">
                                <div class=" inpts grid grid-cols-1 gap-6 w-full mt-3 md:grid-cols-3">
                                    <div class="ing flex w-full">
                                        <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img src="../assets/Pics/engine.svg"></span>
                                        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt  border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Nombre de moteurs" />
                                    </div>
                                    <div class="ing flex w-full">
                                        <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img src="../assets/Pics/adsense.png"></span>
                                        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt inpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Marque Moteur" />
                                    </div>
                                    <div class="flex w-full">
                                        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt inpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Puissance " />
                                        <span class=" ch text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">ch</span>
                                    </div>
                                </div>
                        </div>
                    <!-- Energie   -->
                    <div v-if="Moteur">

                    
                    <h3 class="mb-6 mt-6">Energie</h3>
                                <div   class="Energie grid  grid-cols-2   w-4/5 md:w-3/6 md:grid-cols-4 md:gap-12 md:m-0 sm:gap-4  lg:gap-8 xl:gap-0">                                                                                             
                                                <input class="checkbox-viager1" type="radio" name="Viagertype" id="Essence" checked>
                                                <label class="for-checkbox-tools" for="Essence">
                                                Essence
                                                </label>

                                                <input class="checkbox-viager1" type="radio" name="Viagertype" id="Diesel">
                                                <label class="for-checkbox-tools" for="Diesel">
                                                Diesel
                                                </label>

                                                <input class="checkbox-viager1" type="radio" name="Viagertype" id="Electrique">
                                                <label class="for-checkbox-tools" for="Electrique">
                                                Electrique
                                                </label>

                                                <input class="checkbox-viager1" type="radio" name="Viagertype" id="Autre">
                                                <label class="for-checkbox-tools" for="Autre">
                                                Autre
                                                </label>
                                </div>
                    </div>
                    <!-- Propulsion -->
                    <div v-if="Moteur">
                    <h3 class="mb-6 mt-6">Propulsion</h3>
                    <div class="confirmcuisine grid gap-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-24 xl:gap-0">  
                        <div class="inpttype flex w-full">
                            <input class="checkbox-viager" type="radio" name="typedechauffage" id="In-bord" >
                            <label class="for-checkbox-tools" for="In-bord">
                             In-bord
                            </label>
                        </div>
                        <div class="inpttype flex w-full">
                            <input class="checkbox-viager" type="radio" name="typedechauffage" id="Hors-bord">
                            <label class="for-checkbox-tools" for="Hors-bord">
                            Hors-bord
                            </label>
                        </div>
                        <div   class="inpttype flex w-full">
                            <input class="checkbox-viager" type="radio" name="typedechauffage" id="inconnu3" checked>
                            <label class="for-checkbox-tools" for="inconnu3">
                            inconnu
                            </label>
                        </div>
                    </div>
                </div>

            </div>

</template>

<script>
export default {
    data(){
        return{
            Moteur:false,
            
        }
    }

}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";

// .Type_moteur{
//     position: relative;
//     left: 2rem;
// }
.inpttype{
    padding: 2px;
}
.naturedechauffage{
    label{
        font-family: $gr;
        color: #929395;
    }
}

input:focus{
  outline:none;
}

// 

.checkbox-viager:checked,
.checkbox-viager:not(:checked){
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
	font-size: 13px;
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
// inputs
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
.Moteur ::placeholder{
    font-size: 13px;
    color: #929395;
}
.ing input {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    padding: 0px 4px;
    border-radius: 8px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-top-left-radius: 0px;


}
.ing span {
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
    border-right: 0.2px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;

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

// ::placeholder { 
// }

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
    // width: 12rem;
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
.ch {
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

// //////////////////////////////////////////////////

.exposition{
    position: relative;
    left: 3rem;
}
[type="radio"]:checked,
[type="radio"]:not(:checked){
	position: absolute;
	left: -9999px;
	width: 0;
	height: 0;
	visibility: hidden;
}

.checkbox-viager1:checked + label,
.checkbox-viager1:not(:checked) + label{
	position: relative;
	display: inline-block;
    font-family: $gr;
    padding-top: 30px;
    // height: 5rem;
    // width: 8rem;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
	font-size: 11px;
	line-height: 20px;
	letter-spacing: 1px;
	margin: 0 auto;
	margin-left: 0px;
	margin-right: 5px;
	margin-bottom: 10px;
	text-align: center;
	overflow: hidden;
	cursor: pointer;
	color: #F3F4F8;
	-webkit-transition: all 300ms linear;
	transition: all 300ms linear; 
}
.checkbox-viager1:not(:checked) + label{
    border: 1px solid $main;
    background-color: transparent;
    color: $main;
}
.checkbox-viager1:checked + label{
    background-color: $main;
    color: white;
}
.checkbox-viager1:not(:checked) + label:hover{
	box-shadow: 0 8px 16px 0 rgba(59, 56, 236, 0.2);
}
.checkbox-viager1:checked + label::before,
.checkbox-viager1:not(:checked) + label::before{
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
.checkbox-viager1:checked + label .uil,
.checkbox-viager1:not(:checked) + label .uil{
	font-size: 24px;
	line-height: 24px;
	display: block;
	padding-bottom: 10px;
}

////////// End of the second radio form

@media (min-width: 400px) { 
    .confirmcuisine {
        grid-template-columns:repeat(3, minmax(0, 1fr));
        gap:8px
    }

}

@media (min-width: 500px) { 
    .confirmcuisine {
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }

}

@media (min-width: 768px) { 
    .Type_moteur{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .Type_moteur{
        margin-left:23%
    }

}

</style>