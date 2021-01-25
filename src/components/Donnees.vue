<template>
    <div class="Donnees grid grid-cols-1  block m-0 m-auto mb-8 w-4/5 md:w-3/4 lg:w-3/5">
        <!-- <div class="Donnees w-4/5 md:w-3/4 lg:w-4/5  "> -->
                                <div class=" inpts grid grid-cols-1 gap-6 w-full mt-3 md:grid-cols-3">
                                    <div class="ing flex w-full">
                                        <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img src="../assets/Pics/smartphone.svg"></span>
                                        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Saisir l'année" />
                                    </div>
                                    <div class="flex w-full">
                                        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt inpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Chiffre d'affaires " />
                                        <span class=" ch text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">€</span>
                                    </div>
                                </div>
                                <div class=" inpts grid grid-cols-1 gap-6 w-full mt-3 md:grid-cols-3">
                                    <div class="ing flex w-full">
                                        <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img src="../assets/Pics/smartphone.svg"></span>
                                        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Saisir l'année" />
                                    </div>
                                    <div class="flex w-full">
                                        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt inpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Chiffre d'affaires " />
                                        <span class=" ch text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">€</span>
                                    </div>
                                </div>
                                <div class=" inpts grid grid-cols-1 gap-6 w-full mt-3 md:grid-cols-3">
                                    <div class="ing flex w-full">
                                        <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img src="../assets/Pics/smartphone.svg"></span>
                                        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Saisir l'année" />
                                    </div>
                                    <div class="flex w-full">
                                        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt inpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Chiffre d'affaires " />
                                        <span class=" ch text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">€</span>
                                    </div>
                                <!-- </div> -->
                        </div>
    </div>
</template>

<script>
export default {
    name: "Donnees",
}
</script>

<style lang="scss" scoped>
@import  "../scss/main.scss";

// .Donnees{
//     position: relative;
//     left: 2rem;
    
// }
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

.ing input {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    padding: 0px 17px;
    border-radius: 8px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-top-left-radius: 0px;
    color: #8C92A4;


}
 span {
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
    border-right: 0.2px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    color: #8C92A4;

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

::placeholder { 
    color: rgba(49, 49, 50, 0.5);
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
    font-size: 16px;
    color:#8C92A4;
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

@media (min-width: 768px) { 
    .Donnees{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .Donnees{
        margin-left:23%
    }

}

</style>