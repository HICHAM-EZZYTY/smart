<template>

    <div class="Longueur block m-0 m-auto mb-8 w-4/5 md:w-3/4 lg:w-3/5 ">
            <div class="inpts grid grid-cols-1 gap-4 w-full mt-3 md:grid-cols-2">
                   <div class="flex flex-col w-full">

                    <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="" v-model="numbersEtage" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full cstminp" type="number" placeholder="Nombre d'étages ..." />
                   
                   </div>

                <!-- <div class="flex w-full">
                    <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="" class="espaceinpt border border-2 rounded-r px-4 py-2 w-full" type="number" placeholder="Nombre d'étages" />
                </div> -->
                <div class="badge w-full col-span-1">
                         
                <div @click="toggleflag()" class="drpdown ">

                        <div class="label flex w-full">
                        
                        <label>Nombre d'étages : {{heading}}</label>

                        <img v-if="flag" class="dropoff" src="../assets/Pics/AnnonceImmeuble.svg">
                        
                        <img v-if="!flag" class="dropon" src="../assets/Pics/AnnonceImmeuble.svg">

                        </div>
                     
                </div>

                  <div v-if="!flag" class="options mt-2 w-full h-32"  id="style-4">         
                  <label  class="radio">
                      <input  type="checkbox" value="A"  v-model="labelheading" >
                      <span>A</span>
                  </label>
                  <label  class="radio">
                      <input  type="checkbox" value="B"  v-model="labelheading" >
                      <span>B</span>
                  </label>
                  <label  class="radio">
                      <input  type="checkbox" value="C"  v-model="labelheading" >
                      <span>C</span>
                  </label>
                  <label  class="radio">
                      <input  type="checkbox" value="D"  v-model="labelheading" >
                      <span>D</span>
                  </label>
                  <label  class="radio" v-for="i in numbersEtageArr" :key="i.index">
                      <input  type="checkbox" value=""  v-model="labelheading" :id="'number'+i.index">
                      <span :for="'number'+i.index" >{{i.index}}</span>
                  </label>
                   <!-- <div class="list">
                        <div  v-for="i in numbersEtageArr" :key="i.index">
                            <input type="radio" :id="'number'+i.index">
                            <label :for="'number'+i.index" > {{i.index}}</label>
                        </div>   
                    </div> -->

                  
                </div>
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
        numbersEtage:0,
          numbersEtageArr: [],
          indexofch:0,
          indexofsej:0,
          chambres:[],
          séjours:[],
          flag:true,
          indexofloors:'',
          labelheading:[],
      }

    }, 
        watch: {
        numbersEtage : function(){
            if(this.numbersEtage > 0){
                for(let i = 0 ; i < this.numbersEtage ; i++){
                    this.numbersEtageArr.push({
                        index : i + 1
                    });
                }    
            }else{
                this.numbersEtageArr = [];
            }
             
        }
    } ,
        methods: {

        toggleflag:function(){
                this.flag=!this.flag;
                console.log(this.flag)
          },
        getheading:function(val){

                this.labelheading="  :  "+val;
                
        }
  },
  computed: {
          heading:function(){

          return this.labelheading.join()

        },
  }    
}

</script>

<style scoped lang="scss">
@import "../scss/main.scss";


.drpdown:focus,
.drpdown:focus,
textarea:focus,
button:focus {
    outline: none;
	border: 1px solid $main;
	color:$main;
}

.drpdown {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid $main;
    border-radius: 8px;
    color: $main ;
    

}
::placeholder{
    color: black;
}



////////////////////

 

.chambreinpt {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
}
input:focus,
textarea:focus,
button:focus {
    outline: none;
	border: 1px solid $main;
	color:$main;
}


// Styling the dropdown 

.label {
        background-color: transparent;
        cursor: pointer;
        label {
                font-family: $gr;
                color: #000000;
                opacity: 0.4;
                padding: 8px 17px;
                cursor: pointer;
        }
        img{    
                position: relative;
                right: 1rem;
                margin-left: auto;
                cursor: pointer;
        }

        .dropon{
                margin-left: auto;
                cursor: pointer;
                transform: rotate(180deg);


        }
}

.options{

        padding-top: 0.2rem;
        padding-left: 0.4rem;
        background-color: $main;
        overflow: auto;
        // overflow-y: hidden;

        
}
.radio {
  margin: 16px 0;
  display: block;
  cursor: pointer;
}
.radio input {
  display: none;
}
.radio input + span {
  line-height: 22px;
  height: 22px;
  padding-left: 22px;
  display: block;
  position: relative;
}
.radio input + span:not(:empty) {
  padding-left: 30px;
}
.radio input + span:before, .radio input + span:after {
    content: '';
    width: 16px;
    height: 16px;
    display: block;
    border-radius: 50%;
    left: 4px;
    top: 5px;
    position: absolute;
}
.radio input + span:before {
  background: $main;
  border: 2px solid $main;
  -webkit-transition: background 0.2s ease, -webkit-transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
  transition: background 0.2s ease, -webkit-transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
  transition: background 0.2s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
  transition: background 0.2s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2), -webkit-transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
}
.radio input + span:after {
  background: #fff;
  -webkit-transform: scale(0.78);
          transform: scale(0.78);
  -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
  transition: -webkit-transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4), -webkit-transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
}
.radio input:checked + span:before {
  -webkit-transform: scale(1.04);
          transform: scale(1.04);
  background: $main;
  border: 1px solid white;
}
.radio input:checked + span:after {
  -webkit-transform: scale(0.4);
          transform: scale(0.4);
  -webkit-transition: -webkit-transform .3s ease;
  transition: -webkit-transform .3s ease;
  transition: transform .3s ease;
  transition: transform .3s ease, -webkit-transform .3s ease;
}
.radio:hover input + span:before {
  -webkit-transform: scale(0.92);
          transform: scale(0.92);
}
.radio:hover input + span:after {
  -webkit-transform: scale(0.74);
          transform: scale(0.74);
}
.radio:hover input:checked + span:after {
  -webkit-transform: scale(0.4);
          transform: scale(0.4);
}


    span{
            padding-left: 0.5rem;
            font-family: $gr;
            color: #FFFFFF;
            font-size: 1rem;
    }

input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

// styling the scrollbar
#style-4::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 49px rgba(44, 142, 234, 1);
	background-color: #F5F5F5;
}

#style-4::-webkit-scrollbar
{
	width: 4px;
	background-color: #F5F5F5;
}

#style-4::-webkit-scrollbar-thumb
{
	background-color: white;
	border: 2px solid white;
}

@media (min-width: 768px) { 
    .Equipement{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .Equipement{
        margin-left:23%
    }

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
  height: 2.6rem;
  font-size: 1rem;
  text-transform: uppercase;
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