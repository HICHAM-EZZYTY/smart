<template>

        <div class="Secteur grid block m-0 m-auto md:flex md:gap-0 mb-6   w-4/5 md:w-3/5 lg:w-3/5">

                <div class="badge grid grid-cols-2  w-full mt-3 md:grid-cols-6 ">
                    <div class="flex w-full ">
                        <select class="border border-2 rounded-r px-4 py-2  " name="pets" id="pet-select">
                                <option value="">Mois </option>
                                <option value="choisir1">Mois 1</option>
                                <option value="choisir2">Mois 2</option>
                                <option value="choisir3">Mois 3</option>
                        </select>
                    </div>
                        <div class="flex w-full">
                        <select class="border border-2 rounded-r px-4 py-2" name="pets" id="pet-select">
                                <option value="">Année </option>
                                <option value="choisir1">Année 1</option>
                                <option value="choisir2">Année 2</option>
                                <option value="choisir3">Année 3</option>
                        </select>
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

// .Secteur{
//     position: relative;
//     left: 2rem;
// }
select:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
	border: 1px solid $main;
	color:$main;
}



select {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
    width: 78%;
    color: #8C92A4;
    

}
::placeholder{
    color: black;
}
// span {
//     background-color: transparent;
//     border: 1px solid #D4D6DC;
//     border-radius: 8px;
//     border-right: 0.2px;
//     border-bottom-right-radius: 0px;
//     border-top-right-radius: 0px;

// }

@media (min-width: 768px) { 
    .Secteur{
        margin-left:20%;
        text-align: left;
        width: 70%;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .Secteur{
        margin-left:23%
        
        
    }

}


</style>