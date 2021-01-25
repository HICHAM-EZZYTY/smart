<template>
    <div role="group" class="_9fvlwj0">
        <!-- <div >
             <span class="Dip" >zone de saisie d’un nombre :  </span>
        </div> -->
        <section>
            <input type="search" name="serch" placeholder="A partir de" class="srfcmin mr-8 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none">
        </section>
    </div>
</template>


<script>
export default {

}   
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";


.Dip{
    position: relative;
    top: -9px;
    color: gray;
    font-size: 14px;
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


._9fvlwj0 {
    padding-top:14px !important;
    padding-bottom: 28px !important;
    border-bottom: 1px solid rgb(235, 235, 235) !important;
}
._19umvjy {
    color: rgb(34, 34, 34) !important;
    font-weight: 600 !important;
    margin-bottom: 24px !important;
    font-size: 22px !important;
    line-height: 26px !important;
}
._14i3z6h {
    color: inherit !important;
    font-size: 1.3em !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    margin: 0px !important;
    padding: 0px 0px 20px !important;
}

// input
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
// 

</style>
