<template>
    <div role="group" class="inputmix">
        <section>
            <input  type="number" name="serch" placeholder="Min" class="srfcmin mb-2 mr-8 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none">
            <input  type="number" name="serch" placeholder="Max" class="srfcmin mt-2 mr-8 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none">
        </section>
    </div>
</template>


<script>
export default {
      props:["Surfacemin","Surfacemax"],


}
</script>

<style lang="scss" scoped>
@import "../../../scss/main.scss";


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
    // padding-top:14px !important;
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
