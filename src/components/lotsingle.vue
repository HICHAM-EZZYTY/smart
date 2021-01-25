<template>
      <div ref="form">

                <div div class="flex grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  v-model="object.nombredepieces" :name="'Nombre de piéces '+[index]" class="inptt border border-2 rounded-r rounded-l px-4 py-2 w-full" type="text" :placeholder="'Nombre de piece lot '+[[index+1]]"/>
                        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  v-model="object.surface" :name="'Surface'+[[index]]" class="inptt border border-2 rounded-r rounded-l px-4 py-2 w-full" type="text" :placeholder="'Surface'+ ' '+surfaceHabital +' '+ [[index+1]]"/>
                        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  v-model="object.prix" :name="'Prix  '+[[index]]" class="inptt border border-2 rounded-r rounded-l px-4 py-2 w-full" type="text" :placeholder="'Prix  '+[[index+1]]"/>
                        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  v-model="object.etage" :name="'Etage '+[[index]]" class="inptt border border-2 rounded-r rounded-l px-4 py-2 w-full" type="text" :placeholder=" etageTerain +' '+ [[index+1]]"/>
                </div>
                
                <h3 class="mt-5">Parking</h3>
                <div class="Meuble  w-4/5 md:w-3/4 lg:w-3/5 ">

                <input  class="checkbox-tools" value="oui" v-model="object.parking" type="radio" :name="'lotsparking'+[[index]]" :id="'ouiparking'+[[index]]" checked>
                <label @click="Viager=true" :class="'lotsparking'+[[index]]" :for="'ouiparking'+[[index]]">
                Oui
                </label>
                <input class="checkbox-tools" value="non"  v-model="object.parking"  type="radio" :name="'lotsparking'+[[index]]" :id="'nonparking'+[[index]]">
                <label @click="Viager=false" :class="'lotsparking'+[[index]]" :for="'nonparking'+[[index]]">
                Non
				</label>

                </div>

                <h3 class="mt-2">Exposition</h3>
                <div class="exposition block mb-4 w-4/5 md:w-3/4 lg:w-3/5">  
                        <div   class="confirmcuisine grid  grid-cols-2  gap-0 w-4/5 md:w-3/5 lg:grid-cols-5 md:gap-12 md:m-0 lg:gap-8 xl:gap-0">             
                            <input class="checkbox-viager" type="checkbox"  value="nord" v-model="object.exposition" :id="'lots exposition Nord'+[[index]]" :name="'lots exposition Nord'+[[index]]"   checked >
                            <label   :for="'lots exposition Nord'+[[index]]">
                            Nord
                            </label>

                            <input class="checkbox-viager" type="checkbox" value="sud" v-model="object.exposition" :id="'lots exposition Sud'+[[index]]" :name="'lots exposition Sud'+[[index]]"   >
                            <label      :for="'lots exposition Sud'+[[index]]">
                            Sud
                            </label>

                            <input class="checkbox-viager" type="checkbox" value="est" v-model="object.exposition" :id="'lots exposition Est'+[[index]]"  :name="'lots exposition Est'+[[index]]" >
                            <label     :for="'lots exposition Est'+[[index]]">
                            Est
                            </label>

                            <input class="checkbox-viager" type="checkbox" value="ouest" v-model="object.exposition" :id="'lots exposition Ouest'+[[index]]" :name="'lots exposition Ouest'+[[index]]"  >
                            <label   :for="'lots exposition Ouest'+[[index]]">
                            Ouest
                           </label>
                            
                            <!-- <input class="checkbox-viager" type="radio"  value="inco" v-model="object.exposition" :name="'lot exposition'[[index]]" :id="'lots exposition Inco'+[[index]]" >
                            <label :class="'lot exposition'+[[index]]"     :for="'lots exposition Inco'+[[index]]">
                            Inco
                            </label> -->
                         </div>
                </div> 


                
                <h3  class="">Autres</h3>


                    <div   class="balconsoflots w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:gap-6">
                    
                        <div class="inpt col-span-1" >
                            <input class="checkbox-balcons" type="radio" value="balcon" v-model="object.autres" :name="'lot'+[[index]]" :id="'lot Balcon'+[[index]]" checked>
                            <label class="for-checkbox-balcons" :for="'lot Balcon'+[[index]]">
                            Balcon 
                            </label>
                        </div>

                        <div class="inpt col-span-1">
                            <input class="checkbox-balcons" type="radio" value="terasse" v-model="object.autres" :name="'lotA'+[[index]]" :id="'lot Térasse'+[[index]]">
                            <label class="for-checkbox-balcons" :for="'lot Térasse'+[[index]]">
                            Térasse 
                            </label>
                        </div>

                        <div class="inpt col-span-1">
                            <input class="checkbox-balcons" type="radio" value="cave" v-model="object.autres" :name="'lotA'+[[index]]" :id="'lot cave'+[[index]]">
                            <label class="for-checkbox-balcons" :for="'lot cave'+[[index]]">
                            cave 
                            </label>
                        </div>

                       
                        <!-- <div class="inpt col-span-1">
                            <input class="checkbox-balcons" type="radio" value="rien" v-model="object.autres" :name="'lot'+[[index]]" :id="'lot Rien'+[[index]]">
                            <label class="for-checkbox-balcons" :for="'lot Rien'+[[index]]">
                            Rien
                            </label>
                        </div>                          -->
                    </div>

                <div v-if="isFull" class="flex items-center mt-2 bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                <p>Vous devrez remplir le formulaire d'abord </p>
                </div>
                    <div class="btnssmbt">

                        <button @click.prevent="lotdecr" class="btn mdfinfos mr-2">
                        Modifier les infos
                        </button>

                        <button @click.prevent="lotsincr" class="btn sbmtbtn ">
                            Suivant 
                        </button>



                    </div>



                    
        </div>
</template>

<script>
export default {
    name: "lotsingle", 
    data: function() {
        return {
        }
    }, 
    props:["index","object","isFull","piece", "surfaceHabital", "etageTerain"],
    methods:{
            

      lotsincr:function(){
            this.$emit("OnSelectdata",this.object);
      },

      lotdecr:function(){
            this.$emit('Editinfos',this.index)
      }

     
    },
    watch : {
      
    },
    mounted(){

     

    },
}
</script>
<style scoped lang="scss">
@import "../scss/main.scss";


.btnssmbt{
    
    margin-left: 8px;
    width: 66%;
    margin-top: 2rem;
    margin-bottom: 7rem;
}


.sbmtbtn{
    background-color: $main;
    color:white;
    font-family: $gsb;
    font-size: 0.9rem;
}

.sbmtbtn:focus{
    color:white
}

.mdfinfos{
    background-color: none !important;
    color:$main !important;
    font-family: $gr;
    border: 1px solid $main;
    font-size:0.90rem;
}


.balconsoflots{
    margin-left:6px
}

input:focus{
  outline:none;
}


.checkbox-balcons:checked,
.checkbox-balcons:not(:checked){
	position: absolute;
	left: -9999px;
	width: 0;
	height: 0;
	visibility: hidden;
}
.checkbox-balcons:checked + label,
.checkbox-balcons:not(:checked) + label{
	position: relative;
	display: inline-block;
    font-family: $gr;
    padding-top: 30px;
    height: 5rem;
	width: 5rem;
	font-size: 15px;
    left: 0rem;
	line-height: 20px;
	letter-spacing: 1px;
	margin: 0 auto;
	margin-left: 0px;
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
#immédiat{
    width: 10rem;

}
.checkbox-balcons:not(:checked) + label{
    border: 1px solid #D4D6DC;
    background-color: transparent;
    color: rgba(49, 49, 50, 0.5);
}
.checkbox-balcons:checked + label{
    background-color: #E9F0F8;
    color:$main;
    border: 1px solid $main;
}
.checkbox-balcons:not(:checked) + label:hover{
	box-shadow: 0 8px 16px 0 rgba(59, 56, 236, 0.2);
}
.checkbox-balcons:checked + label::before,
.checkbox-balcons:not(:checked) + label::before{
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
.checkbox-balcons:checked + label .uil,
.checkbox-balcons:not(:checked) + label .uil{
	font-size: 24px;
	line-height: 24px;
	display: block;
	padding-bottom: 10px;
}

@media (min-width: 640px) { 
 .checkbox-balcons:checked + label,
.checkbox-balcons:not(:checked) + label{

    width: 6rem;

}
}



////////////////////////////////////////////////////////////////////
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
    // height: 5rem;
    // width: 8rem;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
	font-size: 15px;
	line-height: 20px;
	letter-spacing: 1px;
	margin: 0 auto;
	margin-left: 0px;
	margin-right: 5px;
	// margin-bottom: 10px;
	text-align: center;
	overflow: hidden;
	cursor: pointer;
	color: #F3F4F8;
	-webkit-transition: all 300ms linear;
	transition: all 300ms linear; 
}
.checkbox-viager:not(:checked) + label{
    border: 1px solid $main;
    background-color: transparent;
    color: $main;
}
.checkbox-viager:checked + label{
    background-color: $main;
    color: white;
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

@media (min-width: 320px) { 
    .confirmcuisine {
        grid-template-columns:repeat(1, minmax(0, 1fr));
        gap:8px;
        margin-top:10px
    }

}

// @media (min-width: 400px) { 
//     .confirmcuisine {
//         grid-template-columns:repeat(3, minmax(0, 1fr));
//         gap:8px
//     }

// }

@media (min-width: 500px) { 
    .confirmcuisine {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        margin-top: 0px;
        column-gap: 110px;
        row-gap: 20px;
    }

}


@media (min-width: 768px) { 
      .confirmcuisine {
        grid-template-columns: repeat(5, minmax(0, 1fr));
        margin-top: 4px;
        // column-gap: 110px;
        // row-gap: 20px;
    }
    .exposition{
        text-align: left;
        margin-left:5px;
	}
	label{
		justify-self: inherit;
	}

}


////////////////// First radio form ////////////
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
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
	margin-bottom: 4px;
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
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
 
}

 h3{
        color:#8C92A4;
        font-size: 1rem;
        font-family: $gm;
    }


.cntfai{
    width: 55%;
}
.btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
      background:#2C8EEA;
      color:white;
      font-family: $gr;
      font-size: 0.9rem;
  }
  
    .btn-blue:hover {
        background-color: #50a9fb ;
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
input[type=number] {
  height: 2.6rem;
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

// Surface of salle de bain 
.inptt {
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


@media (min-width: 768px) { 
    // .balcons{
    //     margin-left:20%;
    //     text-align: left;
	// }
	// label{
	// 	justify-self: inherit;
	// }

}
@media (min-width: 1024px) { 
    // .balcons{
    //     margin-left:23%
    // }

}



</style>
