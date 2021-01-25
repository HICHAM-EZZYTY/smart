<template>

    <div class="Longueur block m-0 m-auto mb-8 w-4/5 md:w-3/4 lg:w-3/5 ">
            <div class="inpts grid grid-cols-1 gap-4 w-full mt-3  ">
                 <div class="flex w-full">
                    <input  name="" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full" type="number" placeholder="Nombre d'étages dans l'immeuble" />
                </div>
            </div>
    </div>
  
</template>

<script>
export default {
  name: 'Longueur',
  props: {
  },
  data() {
      return {
          indexofch:0,
          indexofsej:0,
          chambres:[],
          séjours:[],
      }

    },     
}

</script>

<style scoped lang="scss">
@import "../scss/main.scss";

// .Longueur{
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
    text-align: start;
    font-family: $gr;
    text-transform: none;

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
    // width: 15.7rem;

}

.chambreinpt {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
}
span {
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
  height: 3rem;
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  text-align: start;
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
    .Longueur{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}
//     .inpts{
//     width: 50.9rem;
// }

}
@media (min-width: 1024px) { 
    .Longueur{
        margin-left:23%
    }
//     .inpts{
//     width: 50.9rem;
// }

}

</style>