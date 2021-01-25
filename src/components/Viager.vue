<template>
    
            <div class="viagercontainer block m-0 m-auto mb-6 w-4/5 sm:ml-0 md:ml-32  gl:ml-32 xl:ml-64  md:w-3/4 lg:w-3/5 ">

                <input class="checkbox-tools" type="radio" name="Viager" id="Viager"  >
                <label @click="Viager=true; ViagerA=true;" class="for-checkbox-tools" for="Viager">
                Oui
                </label>
                <input class="checkbox-tools" type="radio" name="Viager" id="Nonviager" checked >
                <label @click="Viager=false; ViagerA=false;" class="for-checkbox-tools" for="Nonviager">
                Non
				</label>

                <div  v-if="Viager" class="confirmviager grid m-0 m-auto grid-cols-1 mt-3 w-4/5 md:w-3/4  md:grid-cols-3 md:m-0">
                        <input class="checkbox-viager" type="radio" name="Viagertype" id="Viagerlibre" checked>
                        <label @click="ViagerA=true" class="for-checkbox-tools" for="Viagerlibre">
                        Libre
                        </label>

                        <input class="checkbox-viager" type="radio" name="Viagertype" id="ViagerOccupé">
                        <label @click="ViagerA=true" class="for-checkbox-tools" for="ViagerOccupé">
                        Occupé
                        </label>

				
                        <input class="checkbox-viager" type="radio" name="Viagertype" id="ViagerSansrente">
                        <label @click="ViagerA=false" class="for-checkbox-tools" for="ViagerSansrente">
                        Sans rente
                        </label>
                </div>

				<div  v-if="ViagerA" class="inpts grid grid-cols-1 gap-6 w-full mt-3 md:grid-cols-3">
						<div class="flex w-full">
						<span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img class="w-8" src="../assets/Pics/Annoneeuroemoji.svg"></span>
						<input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
						name="field_name" class="border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Bouquet" v-model="bouquet" />
						</div>

						<div class="flex w-full">
						<span class="spn text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img  class="w-8" src="../assets/Pics/Annoneeuroemoji.svg"></span>
						<input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
						name="field_name" class="inpt border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="Rente" />
						</div>

						<div class="flex w-full">
						<span class="tc-img text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img src="../assets/Pics/Annoncenumber.svg"></span>
						<input 
						v-model="message"
						v-on:keydown="nmbrages()"
						name="field_name" class="form-control border border-2 rounded-r px-4 py-2 w-full" type="text"  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="Nombre de personne" />
						</div>
				</div>

				<div v-if="ViagerA"  class="ages grid grid-cols-1 gap-3 w-full mt-3 md:grid-cols-3">

						<div v-for="(age, index) in ages" :key="index" class="flex w-full">
						<input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  name="field_name"  id="ageinpt" class="border border-2 rounded-r px-4 py-2 w-full" type="text" :placeholder="'Age Tete '+[[index+1]]"  />
						<label class="hp flex w-full" >{{'Sex  '+[[index+1]]}} :</label>
							<div class="naturedechauffage mt-3 ">

			
								<input class="pt-2 inp-cbx" :id="'femmes'+[[index]]" type="radio" :name="'Sex'+[[index]]" />
                               
								<label class="cbx"  :for="'femmes'+[[index]]">
									<span class="mr-4">
										<svg width="12px" height="10px">
											<use xlink:href="#check"></use>
										</svg>
									</span>
									<!--
									
									<span class="sex">femmes</span>	
									-->
									
									<font-awesome-icon style="margin-top: 4px;" icon="female"/>
								</label>
								

                                <input class="inp-cbx pt-2" :id="'Hommes'+[[index]]" type="radio" :name="'Sex'+[[index]]"/>
                                <label class="cbx" :for="'Hommes'+[[index]]">
									
									<span class="mr-4">
										<svg width="12px" height="10px">
											<use xlink:href="#check"></use>
										</svg>
									</span>
									<!--
									<span>
										<svg width="12px" height="10px">
										<use xlink:href="#check"></use>
										</svg>
									</span>
									<span class="sex">Hommes</span>
									-->
									
									<font-awesome-icon style="margin-top: 4px;" icon="male"/>
                                </label>

                                <!--SVG Sprites-->
                                <svg class="inline-svg">
                                  <symbol id="check" viewbox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </symbol>
                                </svg>


							</div>	
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
 name: 'Viager',
  props: {
  },
  data() {
      return {
		ViagerObj: {
			Status : "", 
			Bouquet: "",  
			Rente: "",  
			Nbr: "", 
		}, 
		bouquet: "",
		ViagerA:false,
		Viager:false,
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

    watch: {

		bouquet: function (){
			this.ViagerObj.Bouquet = this.bouquet;
			// console.log(this.ViagerObj.Bouquet);
			this.$emit("onBouquetChange",this.ViagerObj)
		},
        message:function(){
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

// .viagercontainer{
// 	position: relative;
// 	left: 1rem;
// }
.naturedechauffage{
	display: flex;
}
.hp{
	color: #a0aec0;
	position: relative;
    top: 35%;
    left: 3%;
}
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
////////////////////////////////////////////////////

.sex{
	background-color: transparent;
	border: 1px solid #ffffff00;
    border-radius: 8px;
    border-right: 0.2px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
}
.cbx {
	display: flex; 
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  padding : 6px 0px;
  border-radius: 6px;
//   padding-left: 6px;
  overflow: hidden;
  transition: all 0.2s ease;
}
.cbx:not(:last-child) {
  margin-right: 6px;
}

.cbx span {

  float: left;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child {
  position: relative;
  width: 24px;
  height: 24px;
//   right: 2rem;
//   top: 1.4rem;
  border-radius: 4px;
  transform: scale(1);
  border: 1px solid #cccfdb;
  transition: all 0.2s ease;
  box-shadow: 0 1px 1px rgba(0,16,75,0.05);
}
.cbx span:first-child svg {
  position: absolute;
  top: 6px;
  left: 4px;
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}
.cbx span:last-child {
    line-height: 23px;
    font-size: 16px;
    font-family: $gr !important;
    color: black;
}
.cbx:hover span:first-child {
  border-color: #07f;
}
.inp-cbx {
  position: absolute;
  visibility: hidden;
}
.inp-cbx:checked + .cbx span:first-child {
  background: #07f;
  border-color: #07f;
  animation: wave 0.4s ease;
}
.inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}

.inline-svg {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  user-select: none;
}
@media screen and (max-width: 640px) {
  body {
    width: auto;
    display: inherit;
    padding: 20px;
  }
  .cbx {
    width: 100%;
    margin-bottom: 4px;
    display: inline-block;
  }
}
@-moz-keyframes wave {
  50% {
    transform: scale(0.9);
  }
}
@-webkit-keyframes wave {
  50% {
    transform: scale(0.9);
  }
}
@-o-keyframes wave {
  50% {
    transform: scale(0.9);
  }
}
@keyframes wave {
  50% {
    transform: scale(0.9);
  }
}


</style>