<template>

            <div class="plusdecrit grid grid-cols-1 block m-0 m-auto sm:ml-0 md:ml-32 mb-8 w-4/5 md:w-3/4 lg:w-3/5">

                    <div class="crit grid grid-cols-1 gap-4 md:grid-cols-3 ">

                            <div class="badge w-full col-span-1">
                                <div class="flex w-full fltr">
                                <span class="text-sm border border-2 rounded-l px-4 pt-3  whitespace-no-wrap"><img class="w-10" src="../assets/Pics/Annonceplusdecrwheelchair.svg"></span>
                                <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                name="field_name" class="border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Accès handicapé" disabled/>
                                </div>
                            </div>

                            <div class="radiobuttons w-full col-span-2">

                                        <input class="checkbox-tools" type="radio" name="Accès handicapé " id="Oui" >
                                        <label class="for-checkbox-tools" for="Oui">
                                        Oui
                                        </label>
                                        <input class="checkbox-tools" type="radio" name="Accès handicapé " id="Non"  >
                                        <label  class="for-checkbox-tools" for="Non">
                                        Non
                                        </label>
                                        <input class="checkbox-tools" type="radio" name="Accès handicapé " id="Inconnu" checked >
                                        <label  class="for-checkbox-tools" for="Inconnu" id="inco">
                                        Inconnu
                                        </label>

                            </div>

                    </div>


                    <div class="crit grid grid-cols-1 gap-4 md:grid-cols-3 ">

                            <div class="badge w-full col-span-1">
                                <div class="flex w-full fltr">
                                <span class="text-sm border border-2 rounded-l px-4 pt-3  whitespace-no-wrap"><img class="w-10" src="../assets/Pics/Annonceplusdecrpool.svg"></span>
                                <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                name="field_name" class="border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Piscine" disabled/>
                                </div>
                            </div>

                            <div class="radiobuttons w-full col-span-2">

                                        <input class="checkbox-tools" type="radio" name="Pool" id="OuiPool" >
                                        <label class="for-checkbox-tools" for="OuiPool">
                                        Oui
                                        </label>
                                        <input class="checkbox-tools" type="radio" name="Pool" id="NonPool"  >
                                        <label  class="for-checkbox-tools" for="NonPool">
                                        Non
                                        </label>
                                        <input class="checkbox-tools" type="radio" name="Pool" id="InconnuPool" checked >
                                        <label  class="for-checkbox-tools" for="InconnuPool"  id="inco">
                                        Inconnu
                                        </label>

                            </div>

                    </div>


                    <div class="crit grid grid-cols-1 gap-4 md:grid-cols-3 ">

                            <div class="badge w-full col-span-1">
                                <div class="flex w-full fltr">
                                <span class="text-sm border border-2 rounded-l px-4 pt-3  whitespace-no-wrap"><img class="w-10" src="../assets/Pics/AnnoncepluscrJacuzzi.svg"></span>
                                <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                name="field_name" class="border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Jacuzzi" disabled/>
                                </div>
                            </div>

                            <div class="radiobuttons w-full col-span-2">

                                        <input class="checkbox-tools" type="radio" name="Jacuzzi" id="OuiJacuzzi" >
                                        <label class="for-checkbox-tools" for="OuiJacuzzi">
                                        Oui
                                        </label>
                                        <input class="checkbox-tools" type="radio" name="Jacuzzi" id="NonJacuzzi"  >
                                        <label  class="for-checkbox-tools" for="NonJacuzzi">
                                        Non
                                        </label>
                                        <input class="checkbox-tools" type="radio" name="Jacuzzi" id="InconnuJacuzzi" checked  >
                                        <label  class="for-checkbox-tools" for="InconnuJacuzzi"  id="inco">
                                        Inconnu
                                        </label>

                            </div>

                    </div>


                    
                    <div class="crit grid grid-cols-1 gap-4 md:grid-cols-3 ">

                            <div class="badge w-full col-span-1">
                                <div class="flex w-full fltr">
                                <span class="text-sm border border-2 rounded-l px-4 pt-3  whitespace-no-wrap"><img class="w-10" src="../assets/Pics/Annonceplusclimatiseur.svg"></span>
                                <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                name="field_name" class="border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Climatiseurs" disabled/>
                                </div>
                            </div>

                            <div class="radiobuttons w-full col-span-2">

                                        <input class="checkbox-tools" type="radio" name="Climatiseurs" id="OuiClimatiseurs" >
                                        <label class="for-checkbox-tools" for="OuiClimatiseurs">
                                        Oui
                                        </label>
                                        <input class="checkbox-tools" type="radio" name="Climatiseurs" id="NonClimatiseurs">
                                        <label  class="for-checkbox-tools" for="NonClimatiseurs">
                                        Non
                                        </label>
                                        <input class="checkbox-tools" type="radio" name="Climatiseurs" id="InconnueClimatiseurs" checked>
                                        <label  class="for-checkbox-tools" for="InconnueClimatiseurs" id="inco">
                                        Inconnu
                                        </label>

                            </div>

                    </div>



                    <div class="crit grid grid-cols-1 gap-4 md:grid-cols-3 ">

                            <div class="badge w-full col-span-1">
                                <div class="flex w-full fltr">
                                <span class="text-sm border border-2 rounded-l px-4 pt-3  whitespace-no-wrap"><img class="w-10" src="../assets/Pics/Annonceeplusdecrwifi.svg"></span>
                                <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                name="field_name" class="border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Fibre Optique" disabled/>
                                </div>
                            </div>

                            <div class="radiobuttons w-full col-span-2">

                                        <input class="checkbox-tools" type="radio" name="Fibreoptique" id="OuiFibreoptique" >
                                        <label class="for-checkbox-tools" for="OuiFibreoptique">
                                        Oui
                                        </label>
                                        <input class="checkbox-tools" type="radio" name="Fibreoptique" id="Nonfibreoptique">
                                        <label  class="for-checkbox-tools" for="Nonfibreoptique">
                                        Non
                                        </label>
                                        <input class="checkbox-tools" type="radio" name="Fibreoptique" id="Inconnuefibreoptique" checked>
                                        <label  class="for-checkbox-tools" for="Inconnuefibreoptique" id="inco">
                                        Inconnu
                                        </label>

                            </div>

                    </div>


                    <div class="crit grid grid-cols-1 gap-4 md:grid-cols-3 ">

                            <div class="badge w-full col-span-1">
                                <div class="flex w-full fltr">
                                <span class="text-sm border border-2 rounded-l px-4 pt-3  whitespace-no-wrap"><img class="w-10" src="../assets/Pics/AnnoncePlusdecrasencseur.svg"></span>
                                <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                name="field_name" class="border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Ascenseur" disabled/>
                                </div>
                            </div>

                            <div class="radiobuttons w-full col-span-2">

                                        <input class="checkbox-tools" type="radio" name="Ascenseur" id="OuiAscenseur" >
                                        <label class="for-checkbox-tools" for="OuiAscenseur">
                                        Oui
                                        </label>
                                        <input class="checkbox-tools" type="radio" name="Ascenseur" id="NonAscenseur">
                                        <label  class="for-checkbox-tools" for="NonAscenseur">
                                        Non
                                        </label>
                                        <input class="checkbox-tools" type="radio" name="Ascenseur" id="InconnueAscenseur" checked>
                                        <label  class="for-checkbox-tools" for="InconnueAscenseur" id="inco">
                                        Inconnu
                                        </label>

                            </div>

                    </div>

                    <div class="crit grid grid-cols-1 gap-4 md:grid-cols-3 ">

                            <div class="badge w-full col-span-1">
                                <div class="flex w-full fltr">
                                <span class="text-sm border border-2 rounded-l px-4 pt-3  whitespace-no-wrap"><img class="w-10" src="../assets/Pics/Annonceplusdecrvélo.svg"></span>
                                <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                name="field_name" class="border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Local vélo" disabled/>
                                
                                </div>
                            </div>

                            <div class="radiobuttons w-full col-span-2">

                                        <input class="checkbox-tools" type="radio" name="Localvélo" id="OuiLocalvélo" >
                                        <label class="for-checkbox-tools" for="OuiLocalvélo">
                                        Oui
                                        </label>
                                        <input class="checkbox-tools" type="radio" name="Localvélo" id="NonLocalvélo">
                                        <label  class="for-checkbox-tools" for="NonLocalvélo">
                                        Non
                                        </label>
                                        <input class="checkbox-tools" type="radio" name="Localvélo" id="InconnueLocalvélo" checked>
                                        <label  class="for-checkbox-tools" for="InconnueLocalvélo" id="inco">
                                        Inconnu
                                        </label>

                            </div>

                    </div>



            </div>


  
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";

////////////////// First radio form ////////////

// .plusdecrit{
//     position: relative;
//     left: 2rem;
// }
::placeholder{
    color:#000000;
}


.fltr{
    height: 3.5rem;
}

#inco{
    width: 6rem;
}
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
    height: 3.5rem;
    width: 3.7rem;
	font-size: 14px;
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


#ageinpt{
	border-radius: 8px;	
	text-align: center;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
	border: 1px solid $main;
	color:$main;
}



input {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-top-left-radius: 0px;

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
    .plusdecrit{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .plusdecrit{
        margin-left:23%
    }

}
</style>