<template>
    
            <div class="Constructible block m-0 m-auto mb-6 w-4/5 md:w-3/4 lg:w-3/5 ">

                <input class="checkbox-tools" type="radio" name="Viager" id="Viager" checked >
                <label @click="Viager=true" class="for-checkbox-tools" for="Viager">
                Oui
                </label>
                <input class="checkbox-tools" type="radio" name="Viager" id="Nonviager"  >
                <label @click="Viager=false" class="for-checkbox-tools" for="Nonviager">
                Non
				</label>

                <div  v-if="Viager" class="confirmviager grid m-0 m-auto grid-cols-1 mt-3 w-4/5 md:w-3/4  md:grid-cols-4 md:m-0">
                        <input class="checkbox-viager" type="radio" name="Viagertype" id="ViagerViabilisé" checked>
                        <label class="for-checkbox-tools" for="ViagerViabilisé">
                        Viabilisé
                        </label>

                        <input class="checkbox-viager" type="radio" name="Viagertype" id="ViagerNon viabilisé">
                        <label class="for-checkbox-tools" for="ViagerNon viabilisé">
                        Non viabilisé
                        </label>
                </div>

				<div  v-if="Viager" class="inpts grid grid-cols-1 gap-6 w-full mt-3 md:w-4/5 md:grid-cols-2">
						<div class="flex w-full">
                                <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Longueur façade" />
                                <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">m</span>
                            </div> 

						<!-- <div class="flex w-full">
						<span class="tc-img text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img src="../assets/Pics/Annoncenumber.svg"></span>
						<input 
						v-model="message"
						v-on:keydown="nmbrages()"
						name="field_name" class="form-control border border-2 rounded-r px-4 py-2 w-full" type="text"  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="Nombre de personne" />
						</div> -->
				</div>

				<div v-if="Viager"  class="ages grid grid-cols-1 gap-3 w-full mt-3 md:grid-cols-2">

						<div v-for="(age, index) in ages" :key="index" class="flex w-full">
						<input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  name="field_name"  id="ageinpt" class="border border-2 rounded-r px-4 py-2 w-full" type="text" :placeholder="'Age Tete '+[[index+1]]"  />
						</div>
				</div>

				<div  v-if="flag && Viager"  class="warning mt-3 h-16">
					<p>Nombre des personnes limités seulement pour 15 personnes </p>
				</div>


				<br>
				<p></p>






            </div>


</template>

<script>

export default {
 name: 'Constructible',
  props: {
  },
  data() {
      return {
		Viager:true,
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

    methods: {

        nmbrages:function(){
			var noages=parseInt(this.message)
			console.log(typeof(noages))
			console.log(noages);
			if(noages>15){
			this.ages=[]
			this.flag=true
			}
			else{
			var j;
			this.ages=[];
			for (j=0;j<noages;j++){
				this.ages.push(j)
			}
			this.flag=false
			}
		},
}


}
</script>

<style  scoped lang="scss">
@import "../scss/main.scss";

// .Constructible{
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
/////////// Start of the second radioo form

[type="radio"]:checked,
[type="radio"]:not(:checked){
	position: absolute;
	left: -9999px;
	width: 0;
	height: 0;
	visibility: hidden;
}

.checkbox-viager:checked + label,
.checkbox-viager:not(:checked) + label{
	position: relative;
	display: inline-block;
    font-family: $gr;
    padding-top: 30px;
    height: 5rem;
	width: 8rem;
	font-size: 16.3px;
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
.checkbox-viager:not(:checked) + label{
    border: 1px solid #D4D6DC;
    background-color: transparent;
    color: rgba(49, 49, 50, 0.5);
}
.checkbox-viager:checked + label{
    background-color: #E9F0F8;
    color:$main;
    border: 1px solid $main;
}
.checkbox-viager:not(:checked) + label:hover{
	box-shadow: 0 8px 16px 0 rgba(59, 56, 236, 0.2);
}
.checkbox-viager:checked + label::before,
.checkbox-viager:not(:checked) + label::before{
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
.checkbox-viager:checked + label .uil,
.checkbox-viager:not(:checked) + label .uil{
	font-size: 24px;
	line-height: 24px;
	display: block;
	padding-bottom: 10px;
}

////////// End of the second radio form


#ageinpt{
	border-radius: 8px;	
	text-align: center;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
	border: 1px solid $main;
	color:$main;
}



input {
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

.viagercontainer {
    margin: 0 auto;
}
@media (min-width: 320px) { 
    .viagercontainer{
        text-align: center;
	}
	label {
		justify-self: center;
	}

}

@media (min-width: 640px) { 

	.next {
		width:14rem;
	}

}

@media (min-width: 768px) { 
    .viagercontainer{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .viagercontainer{
        margin-left:23%
    }

}
/////////////

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

@media (min-width: 768px) { 
    .Constructible{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .Constructible{
        margin-left:23%
    }

}


</style>