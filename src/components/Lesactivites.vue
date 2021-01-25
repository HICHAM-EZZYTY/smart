<template>

        <div class="les_activites block m-0 m-auto md:flex md:gap-0 mb-6 w-4/5 md:w-3/4 lg:w-3/5">

                        <div class="badge w-full col-span-1">
                                <div class="flex w-full fltr">
                                <!-- <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img class="w-8" src="../assets/Pics/Annonceconstruction.svg"></span> -->
                                <!-- <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                name="field_name" class="border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="les activites "/> -->
                                
                                <select class="border border-2 rounded-r px-4 py-2 w-full" name="pets" id="pet-select">
                                    <option value="">les activites </option>
                                    <option value="choisir1">les activites 1</option>
                                    <option value="choisir2">les activites 2</option>
                                    <option value="choisir3">les activites 3</option>
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

// .les_activites{
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
    width: 50%;
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
    .les_activites{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .les_activites{
        margin-left:23%
    }

}


</style>