<template>

        <div class="Equipements block m-0 m-auto sm:w-3/4  mb-6 w-4/5 md:w-3/4 lg:w-3/5">

                        <div class="badge wgrid grid-cols-1 md:grid-cols-2 gap-4 md:w-4/5 ">
                                <div class="flex w-full ">
                                <select class="border border-2 rounded-r px-4 py-2 w-full" name="pets" id="pet-select">
                                    <option value="">Lave linge</option>
                                    <option value="choisir1">Lave linge1</option>
                                    <option value="choisir2">Lave linge2</option>
                                    <option value="choisir3">Lave linge3</option>
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

// .Equipements{
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
    .Equipements{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .Equipements{
        margin-left:23%
    }

}


</style>