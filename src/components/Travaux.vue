<template>

            <div class="travaux block m-0 m-auto mb-6  w-4/5 md:w-3/4 lg:w-3/5">

                <input class="checkbox-tools" type="radio" name="Travaux" id="Travaux" >
                <label @click="Flag=true" class="for-checkbox-tools" for="Travaux">
                Oui
                </label>
                <input class="checkbox-tools" type="radio" name="Travaux" id="NonTravaux" checked >
                <label @click="Flag=false" class="for-checkbox-tools" for="NonTravaux">
                Non
				</label>


                <div v-if="Flag" class="estimation w-full col-span-1">
					
                    <input  class=" text-sm md:text-base lg:text-base" type="number" name="estimation" id="" placeholder="Avez-vous estimez le montant pour faire les travaux nécessaire  ?">
                </div>
                
            </div>
</template>

<script>
export default {
  name: 'Travaux',
  props: {
  },
  data() {
      return {
        Flag:false,

		
      }

    },
    
    methods: {

   
}


}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";



input[type=number] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
////////////////// First radio form ////////////
[type="radio"]:checked,
[type="radio"]:not(:checked){
	position: absolute;
	left: -9999px;
	width: 0;
	height: 0;
	visibility: hidden;
}

.checkbox-tools:checked + label,
.checkbox-tools:not(:checked) + label{
	position: relative;
	display: inline-block;
    font-family: $gsb;
    padding-top: 22px;
    height: 3.7rem;
	width: 3.7rem;
	left: 3rem;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 1px;
	margin: 0 auto;
	// margin-left: 5px;
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
.checkbox-tools:not(:checked) + label{
	background-color: #8AC4FA;
}
.checkbox-tools:checked + label{
	background-color: $main;
}
.checkbox-tools:not(:checked) + label:hover{
	box-shadow: 0 8px 16px 0 rgba(59, 56, 236, 0.2);
}
.checkbox-tools:checked + label::before,
.checkbox-tools:not(:checked) + label::before{
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
.checkbox-tools:checked + label .uil,
.checkbox-tools:not(:checked) + label .uil{
	font-size: 24px;
	line-height: 24px;
	display: block;
	padding-bottom: 10px;
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

.checkbox-Travaux:checked + label,
.checkbox-Travaux:not(:checked) + label{
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
	margin-left: 5px;
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
.checkbox-Travaux:not(:checked) + label{
    border: 1px solid #D4D6DC;
    background-color: transparent;
    color: rgba(49, 49, 50, 0.5);
}
.checkbox-Travaux:checked + label{
    background-color: #E9F0F8;
    color:$main;
    border: 1px solid $main;
}
.checkbox-Travaux:not(:checked) + label:hover{
	box-shadow: 0 8px 16px 0 rgba(59, 56, 236, 0.2);
}
.checkbox-Travaux:checked + label::before,
.checkbox-Travaux:not(:checked) + label::before{
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
.checkbox-Travaux:checked + label .uil,
.checkbox-Travaux:not(:checked) + label .uil{
	font-size: 24px;
	line-height: 24px;
	display: block;
	padding-bottom: 10px;
}

input {
	position: relative;
    left: 3rem;	
    width: 93%;
    height: 4rem;
    padding-left: 20px;
    border: 1px solid #D4D6DC;
    background-color: transparent;
    border-radius: 10px;
    font-family: $gr;
    color: #B4B5B8;
}
input:focus{
    outline: none;
    border: 1px solid $main;
}


</style>