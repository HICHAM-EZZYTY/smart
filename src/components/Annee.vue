


<template>
    <div class="Annee block m-0 m-auto  mb-6 w-4/5 md:w-3/4 lg:w-3/5">

        <div class="inpts grid grid-cols-1 gap-6 w-full mt-3 md:grid-cols-2">
            <div class="flex w-full">
                    <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img src="../assets/Pics/smartphone.svg"></span>
					<input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="ex : 1988" />
			</div> 
        </div>

  <template>

  
</template>

    </div>
</template>

<script>
export default {
  name: 'Annee',


}
</script>

<style  scoped lang="scss">
@import "../scss/main.scss";
// Counter of salle de bain
// .Annee{
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


input {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
 

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
    .Annee{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}
//     .inpts{
//     width: 50.6rem;
// }

}
@media (min-width: 1024px) { 
    .Annee{
        margin-left:23%
    }
//     .inpts{
//     width: 50.6rem;
// }

}
</style>