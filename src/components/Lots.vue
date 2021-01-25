<template>
    <div class="cntfai block m-0 m-auto mb-6 w-4/5 md:w-3/4 lg:w-3/5"> 
    <div class="balcons  mb-4 ml-4 grid grid-cols-1 gap-4 ">
        <div class="inpt1 relative w-3/5 md:w-2/5 lg:w-1/5 ">

                <div @click="dncrsbalcons()"   class="minus">
                    <img  class="w-4 minuspic" src="../assets/Pics/Annoncemins.svg">
                </div>

                <input  v-model="indexofbalcons"  v-on:keydown="nmbrages()"  class="w-full" type="number" min="1" max="15"   oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">

                <div  @click="incrsbalcons()"   class="plus">
                    <img  class="w-4 pluspic" src="../assets/Pics/Annonceplus.svg">
                </div>

        </div>

    </div>
                
                <div class="lots block  ml-4 mb-6 w-4/5 md:w-3/4   lg:w-3/5">

                <div class="btn block w-32  mb-4 text-center btn-blue ">
                        Lot ({{indexoflots}} sur {{balcons.length}})
                </div>

                <!-- <div   v-for="(lot, index) in activebalcons" :key="index"  class="lotscards">

              
                </div> -->


                <div v-for="(lot, index) in balcons" :key="index" >
                    <lotsingle  v-if="lot.active==true"  class="lotscards"
                    :index="index" 
                    :object="objdata"
                    :isFull="isFull"
                    :piece="piece"
                    :etageTerain="etageTerain"
                    :surfaceHabital="surfaceHabital"
                    @OnSelectdata="incrlots"
                    @Editinfos="openModal"
                     />
                </div>
                </div>

                <!-- the modal  -->
                <div  class="h-full w-full flex items-center justify-center">
                <transition name="fade">
                <div v-show="show_modal" class="fixed inset-0 z-30">
                <div v-show="show_modal" @click="openModal()" class="bg-filter bg-white opacity-25 fixed inset-0 w-full h-full z-20">
                        </div>
                        <main class="flex flex-col items-center justify-center h-full w-full">
                            <transition name="fade-up-down">
                                <div v-show="show_modal" class="modal-wrapper inline-block flex items-center z-30">
                                    <div class="modal max-w-md mx-auto xl:max-w-2xl lg:max-w-lg md:max-w-lg bg-white max-h-screen shadow-lg flex-row rounded relative">

                                        <div class="modal-header  flex border-b border-gray-100 px-5 py-4  rounded-t">
                                            <h5 class="font-bold text-gray-700 text-lg">Modifier les informations</h5>
                                            <button style="margin-left:auto" class="text-sm  text-gray-500 hover:text-gray-600 transition duration-150" @click="openModal()">Close</button>
                                        </div>
                                        <div class="modal-body p-5 w-full h-full overflow-y-auto ">   
                                         <!-- Cards -->
                                        <div  v-if="show_card"  class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
                                            <!-- Card -->
                                            <div style="cursor:pointer" v-for="(lotsingle, index) in lotsdata" :key="index" @click="show_editing=true;show_card=false;editinglot(lotsingle,index)" class="flex items-center p-4 bg-gray-200 hover:bg-gray-400  rounded-lg shadow-xs dark:bg-gray-800">
                                                <div>
                                                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                    Lot Numéro 
                                                    </p>
                                                    <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                                    {{index+1}}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div v-if="show_editing" class="">
                                            <div class="inptsofediting w-3/4 grid grid-cols-1 lg:w-full xl:grid-cols-2 gap-4 ">
                                            <div class="inpt">
                                                <label class="block text-gray-700 text-sm font-normal mb-2">
                                                    Nombre de piéces 
                                                </label>
                                                <input v-model="objediting.nombredepieces" class="shadow appearance-none border rounded py-2 px-3 text-grey-darker">
                                            </div>

                                            <div class="inpt">
                                                <label class="block text-gray-700 text-sm font-normal mb-2">
                                                    Surface 
                                                </label>
                                                <input v-model="objediting.surface" class="shadow appearance-none border rounded py-2 px-3 text-grey-darker">

                                            </div>

                                            <div class="inpt">
                                                <label class="block text-gray-700 text-sm font-normal mb-2">
                                                    Prix 
                                                </label>
                                                <input v-model="objediting.prix" class="shadow appearance-none border rounded py-2 px-3 text-grey-darker">
                                            </div>

                                            <div>

                                                <label class="block text-gray-700 text-sm font-normal mb-2">
                                                    Etage 
                                                </label>
                                                <input v-model="objediting.etage" class="shadow appearance-none border rounded py-2 px-3 text-grey-darker">

                                            </div>

                                        </div>


                                            <div class="mt-5">

                                                <label class="block text-gray-700 text-sm font-normal mb-2">
                                                    Parking 
                                                </label>
                                                <div class="switch-field">
                                                <input  value="oui" v-model="objediting.parking"  type="radio" id="radio-one" name="parking"/>
                                                <label for="radio-one">Oui</label>
                                                
                                                <input  value="non"  v-model="objediting.parking"   type="radio" id="radio-two" name="parking"  />
                                                <label for="radio-two">Non</label>
                                                </div>


                                            </div>

                                            <div class="mt-3">

                                                <label class="block text-gray-700 text-sm font-normal mb-2">
                                                    Exposition 
                                                </label>
                                                <div class="switch-field">
                                                <input  value="nord" v-model="objediting.exposition"  type="checkbox" id="exposition-nord" />
                                                <label for="exposition-nord">Nord</label>
                                                
                                                <input  value="sud"  v-model="objediting.exposition"   type="checkbox" id="exposition-sud"  />
                                                <label for="exposition-sud">Sud</label>

                                                <input  value="est"  v-model="objediting.exposition"   type="checkbox" id="exposition-est"   />
                                                <label for="exposition-est">Est</label>

                                                <input  value="ouest"  v-model="objediting.exposition"   type="checkbox" id="exposition-ouest"  />
                                                <label for="exposition-ouest">Ouest</label>

                                                <!-- <input  value="inco"  v-model="objediting.exposition"   type="radio" id="exposition-inco" name="exposition"  />
                                                <label for="exposition-inco">Inco</label> -->


                                                </div>


                                            </div>

                                            
                                            <div class="mt-3">

                                                <label class="block text-gray-700 text-sm font-normal mb-2">
                                                    Autres 
                                                </label>
                                                <div class="switch-field">
                                                <input  value="balcon" v-model="objediting.autres"  type="checkbox" id="balcon" />
                                                <label for="balcon">Balcon</label>
                                                
                                                <input  value="terasse"  v-model="objediting.autres"   type="checkbox" id="terasse"  />
                                                <label for="terasse">Terasse</label>

                                                <input  value="cave"  v-model="objediting.autres"   type="checkbox" id="cave"  />
                                                <label for="cave">cave</label>

                                                <!-- <input  value="rien"  v-model="objediting.autres"   type="radio" id="rien" name="autres"  />
                                                <label for="rien">Rien</label> -->


                                                </div>


                                            </div>







                                        </div>

                                        </div>
                                        <div class="modal-footer py-3 px-5 border0-t text-right">
                                            <button v-if="show_editing" @click="show_editing=false;show_card=true" type="button" class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                                                Retour 
                                            </button>

                                            <button v-if="show_editing" @click="updatelot()" class="bg-blue-500 px-5 py-2 text-white rounded-md" >Modifier</button>
                                            
                                            <button v-if="show_card" @click="openModal()" class="bg-blue-500 px-5 py-2 text-white rounded-md" >Annuler</button>

                                            


                                        </div>
                                    </div>
                                </div>
                            </transition>


                        </main>
                    </div>
                    </transition>
              
                    </div>

              






    
    </div>
  
</template>

<script>
import lotsingle from "./lotsingle.vue"
// import Vue from 'vue'


export default {
  name: 'Lots',
  components:{
        lotsingle
    },
    props: ["piece", "etageTerain", "surfaceHabital"],
    data() {
      return {
          indx:Number,
          updateindc:Number,
          show_card:true,
          show_editing:false,
          show_modal: false,
          indexofbalcons:Number,
          indexoflots:Number,
          indexobj:Number,
          balcons:[],
          isFull:false,
          flag:false,
          Viager:true,
          nmbr:Number,
          ages:[], 
          lotsdata:[],
          objdata:{
            nombredepieces:'',
            surface: '',
            prix: '',
            etage:'',
            parking:'oui',
            exposition:'nord',
            autres:'balcon'
            },
            objediting:{
            nombredepieces:'',
            surface: '',
            prix: '',
            etage:'',
            parking:'oui',
            exposition:'nord',
            autres:'balcon'
            }


      }

    },
 



       methods: {

        editinglot:function(obj,indc){
            this.objediting=obj,
            console.log(indc)
            console.log(this.lotsdata)
            this.updateindc=indc
        },
        updatelot:function(){
            this.lotsdata.splice(this.updateindc, 1, this.objediting);
            this.show_card=true
            this.show_editing=false
        },
        dncrsbalcons:function(){

                    if(this.indexofbalcons==1){
                        this.indexofbalcons=1
                    }
                    else {
                    // this.indexofbalcons=this.indexofbalcons-1;
                    // this.balcons.pop(this.indexofbalcons)
                    this.balcons=[{ordre:1, active: true}]
                    this.indexofbalcons=1
                    this.indexoflots=1   
                    this.indexobj=1
                    }

        },
        incrsbalcons:function(){
                    var lastindx=parseInt(this.indexofbalcons)+1;
                    this.indexofbalcons=parseInt(lastindx)
                    this.balcons.push({ordre:this.indexofbalcons, active: false})      
              
        },
        nmbrages:function(){
            var noages=parseInt(this.indexofbalcons)
            if(noages>15){
            this.balcons=[]
            this.flag=true
            }
            else{
            var j;
            this.balcons=[];
            for (j=0;j<noages;j++){
              this.balcons.push(j)
            }
            this.flag=false
            }
      },

      incrlots: function(obj){
            // var indxlts=this.indexofbalcons

            console.log("hada objdata",this.objdata)
            if(this.objdata.nombredepieces=='' || this.objdata.surface=='' || this.objdata.prix=='' || this.objdata.etage==''){
                this.isFull=true
            }
            else {
                if (this.indexobj>this.indexofbalcons){
                this.indexobj=this.indexofbalcons.length+1
                console.log("more")
            }
            else{
                this.indexobj=this.indexobj+1
                console.log("less")

            }

            if(this.indexoflots==this.indexofbalcons){
                this.indexoflots=this.balcons.length
            }
            else{
                this.indexoflots=this.indexoflots+1
            }
            this.balcons.forEach(function(blcn) {
            blcn.active=false
            });
            this.balcons[this.indexoflots-1].active=true
            this.submitobjct(obj)  
           
            console.log("index of obj",this.indexobj)  
            console.log("index of lots",this.indexoflots) 





            }



        },

        submitobjct:function(obj){
            // console.log('************Submit*************')
            // console.log('balcons size',this.balcons.length)
            // console.log('index of obj',this.indexobj)
            // console.log('************object***************')
            const objct = Object.assign({}, obj)
            if (this.indexobj<=this.balcons.length){
            // this.lotsdata[this.indexobj-1]=objct
            this.lotsdata.splice(this.indexobj, 1, objct);

            console.log("hahowa dkhal first condition")
            }
            else if (this.indexobj>this.balcons.length) {
            // this.lotsdata[this.indexobj-1]=objct
            this.lotsdata.splice(this.indexobj, 1, objct);
            console.log("hahowa dkhal second condition")
            }
            console.log('lotsdata',this.lotsdata)
        },
        openModal:function(indc){

            console.log(indc)
            if(this.show_modal){
              //stop screen scrolling
              document.getElementsByTagName("html")[0].classList.remove('overflow-y-hidden'); 
              this.show_modal = false;
            }else{
              document.getElementsByTagName("html")[0].classList.add('overflow-y-hidden');
              this.show_modal = true;
            }
    
        },

        dcrlots:function(){

                if(this.indexoflots>1){
                this.indexoflots=this.indexoflots-1
                this.balcons.forEach(function(blcn) {
                blcn.active=false
                });
                if(this.indexoflots>0){
                this.balcons[this.indexoflots-1].active=true
                }
                console.log("--------------------------")
                console.log("index of lots decr",this.indexoflots)
                console.log("balcons",this.balcons)
                console.log("--------------------------")
            }

        },


   },

    computed: {
        activebalcons: function() {
        return this.balcons.filter(function(balcon) {
            return balcon.active
            })
            },

    },
    watch : {
        lotsdata:function() {
        this.isFull=false

        console.log("-----------------wa rfed hahowa tbedel-----------")
        console.log('indexobj',this.indexobj)
        console.log('balcons size',this.balcons.length)

                if (this.indexobj<=this.balcons.length){
                  this.objdata.nombredepieces='',
                  this.objdata.surface= '',
                  this.objdata.prix= '',
                  this.objdata.etage='',
                  this.objdata.parking='oui',
                  this.objdata.exposition='nord',
                  this.objdata.autres='balcon'
                    }
              
                 
               },
        balcons:function(){

                  if (this.indexobj>=this.indexofbalcons){
                        console.log("we are here working balcons",this.indexofbalcons)
                        console.log("we are here working indx obj",this.indexobj)

                        this.balcons.forEach(function(blcn) {
                        blcn.active=false
                        });
                        this.balcons[this.indexobj-1].active=true
                        this.objdata.nombredepieces='',
                        this.objdata.surface= '',
                        this.objdata.prix= '',
                        this.objdata.etage='',
                        this.objdata.parking='oui',
                        this.objdata.exposition='nord',
                        this.objdata.autres='balcon'
                        if (this.indexofbalcons>1){
                        this.indexoflots=this.indexoflots+1
                        }

                    }
                    else{
                        console.log("we are here not working")
                    }


        }
        },
        mounted(){
            this.balcons=[{ordre:1, active: true}]
            this.indexofbalcons=1
            this.indexoflots=1   
            this.indexobj=1
        },

}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";

// Styling the radio button of Acheter location search filters 
.switch-field {
	display: flex;
	margin-bottom: 1px;
	overflow: hidden;
}

.switch-field input {
	position: absolute !important;
	clip: rect(0, 0, 0, 0);
	height: 1px;
	width: 1px;
	border: 0;
	overflow: hidden;
}

.switch-field label {
	background-color: #e4e4e4;
	color: rgba(0, 0, 0, 0.6);
	font-size: 14px;
	line-height: 1;
	text-align: center;
	padding: 8px 16px;
	margin-right: -1px;
	border: 1px solid #D4D6DC;
	transition: all 0.1s ease-in-out;
}

.switch-field label:hover {
	cursor: pointer;
}

.switch-field input:checked + label {
  background-color:$main;
  color:white;
  box-shadow: none;
}

.switch-field label:first-of-type {
	border-radius: 4px 0 0 4px;
}

.switch-field label:last-of-type {
	border-radius: 0 4px 4px 0;
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.modal {
    width:43rem
}
.modal-wrapper{
    position: fixed;
    bottom: 10%;
}

  .modal-body{
    max-height: 500px;
  }
  .bg-gray-800-opacity{
    background-color: #2D374850;
  }
  @media screen and (max-width: 768px){
    .modal-body {
        max-height: 400px;
    }
  }

  /* animation for vue transition tag */

  .fade-up-down-enter-active {
    transition: all 0.3s ease;
  }
  .fade-up-down-leave-active {
    transition: all 0.3s ease;
  }
  .fade-up-down-enter {
    transform: translateY(10%);
    opacity: 0;
  }
  .fade-up-down-leave-to {
    transform: translateY(10%);
    opacity: 0;
  }

  .fade-enter-active{
      -webkit-transition: opacity 2s;
      transition: opacity .3s;

  }
  .fade-leave-active {
      transition: opacity .3s;
  }

  .fade-enter,
  .fade-leave-to{
      opacity: 0;
  }
  
  

.btnssmbt{
    
    margin-left: auto;
    width: 40%;
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


@media (min-width: 320px) { 

.cntfai{
    width:90%
}
.btnssmbt{
    margin-left:6px;
    width:100%
}
.modal{
    width:18rem;
}
.modal-body{
    max-height:351px;
}
.modal-wrapper{
    position: fixed;
    bottom: 0;
}
}
@media (min-width: 450px) { 
    .modal {
    width:24rem;
    }
}

@media (min-width: 550px) { 

    .modal {
    width:30rem;
    }
   
}


@media (min-width: 600px) { 
    .cntfai{
    width:85%
    }

}


@media (min-width: 1024px) { 
.modal-wrapper{
    position: fixed;
    bottom: 43px;

}
.modal-body{
    max-height:447px
}

    .cntfai{
    width:57%
    }
  
}

</style>