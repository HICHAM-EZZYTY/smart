<template>

        <div class="vue  grid grid-cols-1 block m-0 m-auto mb-8 w-4/5 md:w-3/4 lg:w-3/5">
        
            <div   class="confirmcuisine grid  grid-cols-1 mt-2  w-4/5 md:w-3/5 md:grid-cols-3 md:gap-32 md:m-0 md:mt-0 lg:gap-8 xl:gap-0">
                            <input class="checkbox-viager" type="radio" name="vue" id="Sansvisàvis" checked>
                            <label class="for-checkbox-tools" for="Sansvisàvis">
                            Sans vis à vis
                            </label>

                            <input class="checkbox-viager" type="radio" name="vue" id="Visàvismoyen">
                            <label class="for-checkbox-tools" for="Visàvismoyen">
                            Vis à vis moyen
                            </label>
            </div>

                         <!-- <vue-tags-input class="tags"
                            v-model="tag"
                            :tags="tags"
                            :autocomplete-items="filteredItems"
                            @tags-changed="newTags => tags = newTags"
                          />      -->
            <!-- <div class="Equipement block m-0 m-auto md:flex md:gap-0 mb-6 w-4/5 md:w-3/4 lg:w-3/5"> -->

            <div class="badge w-full col-span-1 mt-4 lg:w-2/5">
                         
                <div @click="toggleflag()" class="drpdown ">

                        <div class="label flex w-full">
                        
                        <label>Ajouter une vue : {{heading}}</label>

                        <img v-if="flag" class="dropoff" src="../assets/Pics/AnnonceImmeuble.svg">
                        
                        <img v-if="!flag" class="dropon" src="../assets/Pics/AnnonceImmeuble.svg">

                        </div>
                     
                </div>

                <div v-if="!flag" class="options mt-2 w-full h-32"  id="style-4">         
                  <label  class="radio">
                      <input  type="checkbox" value="1"  v-model="labelheading" >
                      <span>1</span>
                  </label>
                  <label  class="radio">
                      <input  type="checkbox" value="2"  v-model="labelheading" >
                      <span>2</span>
                  </label>
                  <label  class="radio">
                      <input  type="checkbox" value="3"  v-model="labelheading" >
                      <span>3</span>
                  </label>
                  <label  class="radio">
                      <input  type="checkbox" value="4"  v-model="labelheading" >
                      <span>4</span>
                  </label>
                </div>
        </div>
        <!-- </div> -->

                <!-- <div @click="toggleflag()" class="drpdown mt-6">

                        <div class="label flex w-full">
                        
                        <label>Vues spéciales {{labelheading}}</label>

                        <img v-if="flag" class="dropoff" src="../assets/Pics/AnnonceImmeuble.svg">
                        
                        <img v-if="!flag" class="dropon" src="../assets/Pics/AnnonceImmeuble.svg">

                        </div>
                     
                </div> -->

                <!-- <div v-if="!flag" class="options mt-2 w-full h-32"  id="style-4">
         
          
                <label v-for="(floor, index) in floors" :key="index" class="radio">
                                <input @click="getheading(floor)" type="radio" name="r" value="1">
                                <span>{{floor}}</span>
                </label>

                </div> -->

        </div>
  
</template>

<script>
// import VueTagsInput from '@johmun/vue-tags-input';

export default {
  name: 'vue',
   components: {
    // VueTagsInput,
  },
  props: {
  },
  data() {
      return {
        
        flag:true,
        indexofloors:'',
        // floors:['Sur mer','Sur lac','Face à une foret','Face à une jardin','Rien'],
        labelheading:[],
         tag: '',
      tags: [],
      autocompleteItems: [{
        text: 'Appartement',
      }, {
        text: 'Appartement',
      }, {
        text: 'Appartement',
      }, {
        text: 'Germany',
      }, {
        text: 'China',
      }],
    };
      },
    computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },
     heading:function(){

          return this.labelheading.join()

        },
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
  },





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

.tags{
    // background-color: transparent;
    // border: 1px solid #D4D6DC;
    border-radius: 8px;
    margin-top: 20px;
}

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
	width: 9rem;
	font-size: 16.3px;
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
        // border-bottom: 1px solid $main;
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
    .vue{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .vue{
        margin-left:23%
    }

}
</style>