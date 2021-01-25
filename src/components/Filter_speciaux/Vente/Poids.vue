

<template>
    <div role="group" class="_9fvlwj0">
        <section>
            <div role="group" class="Surface  mb-6 ipm">
                
                <div class="Prixhonoraires  ">
                        <div class="flex ">
                                <input  class="espaceinpt mr-8 h-10 px-5 rounded-lg text-sm focus:outline-none" type="search" name="serch" placeholder="Poids max " />
                                <span class=" text-sm border border-2 rounded-l  px-4 py-2 mr-8 whitespace-no-wrap">kg</span>

                        </div> 
                    </div>
                
            
                </div>

        
          </section>
    </div>
</template>

<script>
export default {
  name: 'Poids',


}
</script>

<style  scoped lang="scss">
@import "../../../scss/main.scss";
.Dip{
    position: relative;
    top: -8px;
    color: rgb(0, 0, 0);
    
    opacity: 0.8;
    font-family: $gb;
    color: inherit !important;
    font-size: 0.9em !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    margin: 0px !important;
    padding-top:28px !important
}
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

@media (min-width: 768px) { 

    .ipm{
        width: 41%;
    }

}


@media (min-width: 1024px) { 
    .inpt1{
        width: 32%;
    }
    .ipm{
        width: 40%;
    }
}

.srfcmin{
  border:1px solid #D4D6DC
}

.srfcmin:sel{
  border:1px solid #D4D6DC
}
input:focus { 
    outline: none !important;
    border-color: $main;
    box-shadow: 0 0 2px $main;
}


.inputmix {
    padding-top:14px !important;
    padding-bottom: 28px !important;
    border-bottom: 1px solid rgb(235, 235, 235) !important;
}


input
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.pricefiltermax{
  margin-left: 1rem;
     p{
      color:#A1A5A8;
      font-family: $gr;
      padding-bottom: 4px;
      font-size: 1rem;
    }
    input{
      border: 2px solid #F1F1F1;
      border-radius: 8px;
      width: 9rem;
      height: 3.5rem;
      padding-left: 12px;
    }
    textarea:focus, input:focus{
    outline: none;
}


}
.pricefiltermin{
    p{
      color:#A1A5A8;
      font-family: $gr;
      padding-bottom: 4px;
      font-size: 1rem;
    }
    input{
      border: 2px solid #F1F1F1;
      border-radius: 8px;
      width: 9rem;
      height: 3.5rem;
      padding-left: 12px;

    }
   input:focus{
    outline: none;
}

}

</style>