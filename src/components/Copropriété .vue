<template>

        <div class="immeuble  grid grid-cols-1 block m-0 m-auto mb-6 w-4/5 md:w-3/4 lg:w-3/5">

                                
                <div @click="toggleflag()" class="drpdown mt-0">

                        <div class="label flex w-full">
                        
                        <label>Cocher le copropriété qui existe dans votre propriété</label>

                        <img v-if="flag" class="dropoff" src="../assets/Pics/AnnonceImmeuble.svg">
                        
                        <img v-if="!flag" class="dropon" src="../assets/Pics/AnnonceImmeuble.svg">

                        </div>
                     
                </div>

                <div v-if="!flag" class="options mt-2 w-full h-32"  id="style-4">
         
          
                <label   v-for="(floor, index) in floors" :key="index" class="radio">
                                <input @click="getheading(floor)" type="checkbox" name="r" value="1">
                                <span>{{floor}}</span>
                </label>

                </div>

        </div>
  
</template>

<script>
export default {
  name: 'Espace',
  props: {
  },
  data() {
      return {

        flag:true,
        indexofloors:'',
        floors:['Jardin','Piscine','Jeux pour enfants','Autre'],
        labelheading:'',

      }

    }, 

  watch: {
   
  },
  methods: {

        toggleflag:function(){
                this.flag=!this.flag;
                console.log(this.flag)
          },
        getheading:function(val){

                this.labelheading="  :  "+val;
                
        }
  }




}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";
 

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

.drpdown {

}
.label {
        background-color: transparent;
        border-bottom: 1px solid $main;
        cursor: pointer;
        label {
                font-family: $gr;
                color: #000000;
                opacity: 0.4;
                padding-bottom: 8px;
                cursor: pointer;
        }
        img{
                margin-left: auto;
                cursor: pointer;
        }
        .dropoff{       



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


</style>