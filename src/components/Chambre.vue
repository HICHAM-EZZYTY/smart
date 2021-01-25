<template>
    

    <div class="Meuble block m-0 m-auto mb-8 w-4/5 md:w-3/4 lg:w-3/5">       
                     <!-- <div>
                        <input class="checkbox-tools" type="radio" name="Chambre" id="Chambre" checked >
                        <label @click="Chambre=true" class="for-checkbox-tools" for="Chambre">
                        Oui
                        </label>
                        <input class="checkbox-tools" type="radio" name="Chambre" id="ChambreNo"  >
                        <label @click="Chambre=false" class="for-checkbox-tools" for="ChambreNo">
                        Non
                        </label>
                    </div>



        <h3 class="mb-6 mt-6">Surface</h3> -->

            <div class="Surface ">
                <div class="Prixhonoraires grid grid-cols-1 md:grid-cols-2 gap-4 md:w-4/5">
                    <div class="flex w-full">
                            <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Surface de chambre " />
                            <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">m</span>
                    </div> 
                </div>
            </div>

        <h3 class="mb-6 mt-6">Meublé</h3>

            <div>
                        <input class="checkbox-tools" type="radio" name="Meublé" id="Meublé" checked >
                        <label @click="Meublé=true" class="for-checkbox-tools" for="Meublé">
                        Oui
                        </label>
                        <input class="checkbox-tools" type="radio" name="Meublé" id="MeubléNo"  >
                        <label @click="Meublé=false" class="for-checkbox-tools" for="MeubléNo">
                        Non
                        </label>
                    </div>
    </div>
  

</template>µ

<script>

export default {
 name: 'Chambre',
  props: {
  },
  data() {
      return {
        Chambre:true,
        Meublé:true,
		nmbr:Number,
		ages:[],
		message:"",
		flag:false,
      }

	},
	mounted () {
      const timer = setInterval(() =>{
        if (this.ifUp) {
          this.percent = this.percent + 10
          this.percent == 100 ? this.ifUp = false : this.ifUp = true
        } else {
          this.percent = this.percent - 10
          this.percent == 10 ? this.ifUp = true : this.ifUp = false
        }
      }, 1000);
      this.$once('hook:beforeDestroy', () => clearInterval(timer));
    },




}
</script>

<style  scoped lang="scss">
@import "../scss/main.scss";

// .Chambrecontainer{
// 	position: relative;
// 	left: 2rem;
// }

.warning{

	background-color: #fc5c65;
	border-radius: 7px;
	padding-left: 12px;
	padding-top: 12px;
	p{
		font-family: $gr;
		color:white;
		font-size: 0.92rem;
	}

}

////////////////// First radio form ////////////
[type="radio"]:checked,
[type="radio"]:not(:checked){
	position: absolute;
	left: -9999px;
	width: 0;
	height: 0;
	visibility: hidden;
}

.checkbox-tools:checked + label,
.checkbox-tools:not(:checked) + label{
	position: relative;
	display: inline-block;
    font-family: $gsb;
    padding-top: 22px;
    height: 3.7rem;
	width: 3.7rem;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 1px;
	margin: 0 auto;
	margin-left: 5px;
	margin-right: 5px;
	margin-bottom: 10px;
	text-align: center;
	border-radius: 4px;
	overflow: hidden;
	cursor: pointer;
	color: #F3F4F8;
	-webkit-transition: all 300ms linear;
	transition: all 300ms linear; 
}
.checkbox-tools:not(:checked) + label{
	background-color: #8AC4FA;
}
.checkbox-tools:checked + label{
	background-color: $main;
}
.checkbox-tools:not(:checked) + label:hover{
	box-shadow: 0 8px 16px 0 rgba(59, 56, 236, 0.2);
}
.checkbox-tools:checked + label::before,
.checkbox-tools:not(:checked) + label::before{
	position: absolute; 
	content: '';
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 4px;
	background-image: linear-gradient(298deg, var(--red), var(--yellow));
	z-index: -1;
}
.checkbox-tools:checked + label .uil,
.checkbox-tools:not(:checked) + label .uil{
	font-size: 24px;
	line-height: 24px;
	display: block;
	padding-bottom: 10px;
}

@media (min-width: 768px) { 
    .Meuble{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .Meuble{
        margin-left:23%
    }

}
//  Surface

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
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    border-top-right-radius: 0px;
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

// @media (min-width: 768px) { 
//     .Surface{
//         margin-left:20%;
//         text-align: left;
// 	}
// 	label{
// 		justify-self: inherit;
// 	}

// }
// @media (min-width: 1024px) { 
//     .Surface{
//         margin-left:23%
//     }

// }
</style>