<template>

        <div class="Equipement block m-0 m-auto md:flex md:gap-0 mb-6 w-4/5 md:w-3/4 lg:w-3/5">

            <div class="badge w-full col-span-1">
                         
                <div @click="toggleflag()" class="drpdown ">

                        <div class="label flex w-full">
                        
                        <label>Cocher l'équipement existe : {{heading}}</label>

                        <img v-if="flag" class="dropoff" src="../assets/Pics/AnnonceImmeuble.svg">
                        
                        <img v-if="!flag" class="dropon" src="../assets/Pics/AnnonceImmeuble.svg">

                        </div>
                     
                </div>

                  <div v-if="!flag" class="options mt-2 w-full h-32"  id="style-4">         
                  <label  class="radio">
                      <input  type="checkbox" value="Rien"  v-model="labelheading" >
                      <span>Rien</span>
                  </label>
                  <label  class="radio">
                      <input  type="checkbox" value="Sur mer"  v-model="labelheading" >
                      <span>Sur mer</span>
                  </label>
                  <label  class="radio">
                      <input  type="checkbox" value="Sur lac"  v-model="labelheading" >
                      <span>Sur lac</span>
                  </label>
                  <label  class="radio">
                      <input  type="checkbox" value="Face à une foret"  v-model="labelheading" >
                      <span>Face à une foret</span>
                  </label>
                </div>
        </div>
        </div>
</template>

<script>
export default {
    name: 'Equipement',
      
    data() {
      return {

        flag:true,
        indexofloors:'',
        // floors:['Sur mer','Sur lac','Face à une foret','Face à une jardin','Rien'],
        labelheading:[],

      }

    }, 
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

// .Equipement{
//     position: relative;
//     left: 2rem;
// }
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
</style>