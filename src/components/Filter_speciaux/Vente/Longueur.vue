

<template>
    <div role="group" class="_9fvlwj0">
        <section>
    <div role="group" class="Surface  mb-6 ipm">
        
        <div class="Prixhonoraires  ">
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 ">
                        <div class="flex mb-2">
                        <input  class="espaceinpt mr-8 h-10 px-5  rounded-lg text-sm focus:outline-none" type="search" name="serch" placeholder="Longueur min" />
                        <span class=" text-sm border border-2 rounded-l  px-4 py-2 mr-8 whitespace-no-wrap">m</span>
                        </div>
                         <div class="flex mb-2">
                        <input  class="espaceinpt mr-8 h-10 px-5  rounded-lg text-sm focus:outline-none" type="search" name="serch" placeholder="Largeur min" />
                        <span class=" text-sm border border-2 rounded-l  px-4 py-2 mr-8 whitespace-no-wrap">m</span>
                        </div>
                    <!-- <div class="flex ">
                        <input  class="espaceinpt mr-8 h-10 px-5  rounded-lg text-sm focus:outline-none" type="search" name="serch" placeholder="Largeur min" />
                        <span class=" text-sm border border-2 rounded-l mt-2 px-4 py-2 mr-8 whitespace-no-wrap">m</span>
                    </div> -->
                </div> 
                
            </div>
        <!-- <div role="group" class="inputmix">
            <section>
                <input type="search" name="serch" placeholder="Min" class="srfcmin mr-8 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none">
                <input type="search" name="serch" placeholder="Max" class="srfcmin mr-8 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none">
            </section>
        </div> -->
        </div>
          </section>
    </div>
</template>

<script>
export default {
  name: 'Longueur',


}
</script>

<style  scoped lang="scss">
@import "../../../scss/main.scss";

._9fvlwj0{
    border-bottom:1px solid #ebebeb !important;
    padding-bottom: 28px !important
}
#nomcharge{
    border-radius: 8px;
}


.togglebtn{
    padding-top: 5px;
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
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    border-top-right-radius: 0px;
}
span {
    position: relative;
    right: 4rem;
    background-color: #2C8EEA;
    color: #F3F4F8;
    border: 0px solid #D4D6DC;
    border-radius: 8px;
    border-left: 0.1px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    font-size: 0.95rem;
}


@media (min-width: 320px) { 
    .inpt1{
        width: 32%;
    }
}



@media (min-width: 1024px) { 
    .inpt1{
        width: 32%;
    }
 
}

</style>