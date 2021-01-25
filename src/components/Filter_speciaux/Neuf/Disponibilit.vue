<template>
    <div role="group" class="_9fvlwj0">
        <section>
           <div class="Equipement block grid grid-cols-1 lg:grid-cols-2 m-0 m-auto flex md:gap-4 mb-6 w-4/5 md:w-3/4 lg:w-3/4	">
            <div class="badge w-full mt-8  lg:mt-0 col-span-1">                        
                <div @click="toggleflag()"  class="drpdown ">
                        <div class="label flex w-full">                  
                        <label>Mois  {{labelheading}}</label>

                        <img v-if="flag"  class="dropoff" src="../../../assets/Pics/dashicons_arrow-down-alt2.svg">
                        
                        <img v-if="!flag" class="dropon" src="../../../assets/Pics/AnnonceImmeuble.svg">

                        </div>                  
                </div>

                <div v-if="!flag"  class="options mt-2 w-full h-32"  id="style-4">         
                  <label v-for="(Month, index) in Months" :key="index" class="radio" >
                      <input @click="getheading(Month)" type="radio" name="r" value="1" >
                      <span @click="flag=true; labelheading = Month">{{Month}}</span>
                  </label>
                </div>
            </div>


            <div class="badge w-full mt-8  lg:mt-0  col-span-1">                        
                <div @click="toggleflag2()"  class="drpdown ">
                        <div class="label flex w-full">                  
                        <label> Année  :{{yearmax}}</label>

                        <img v-if="flag2" class="dropoff" src="../../../assets/Pics/dashicons_arrow-down-alt2.svg">
                        
                        <img v-if="!flag2" class="dropon" src="../../../assets/Pics/AnnonceImmeuble.svg">

                        </div>
                     
                </div>

                <div v-if="!flag2"  class="options mt-2 w-full h-32"  id="style-4">         
                  <label v-for="year in yearsmax" :value="year" :key="year" class="radio">
                      <input v-model="yearmax" type="radio"  name="yearmax" :id="year" :value="year"   >
                      <span @click="flag2=true; yearmax = year">{{year}}</span>
                  </label>
                </div>
            </div>
        </div>            
        </section>
    </div>
</template>
<script>
export default {
  components:{
  },
    created() {
    },
    data() {
      return {
      flag:true,
      flag2:true,
      yearmin:"",
      labelheading:'',
      Months:['1','2','3','4','5','6','7','8','9','10','11','12']
      }
    },
    methods:{
            dropdownEnter: function() {
   
    },
    watch:{
      
    },
    dropdownLeave:function(){

    

    },
     toggleflag:function(){
                this.flag=!this.flag;
                console.log("flag1 "+this.flag)
          },
      toggleflag2:function(){
                this.flag2=!this.flag2;
                console.log(this.flag2)
          },
           getheading:function(val){

                this.labelheading="  :  "+val;
                
        }

   },
    computed:{


      yearsmax () {
      const year = new Date().getFullYear()
      const arrayyearsmax=[]
      for (var i = year; i <= year+100; i++) {
      arrayyearsmax.push(i)
      }
      console.log(arrayyearsmax)
      return arrayyearsmax
    },




   },

}
</script> 

<style lang="scss" scoped>
@import "../../../scss/main.scss";

.cbx {
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  padding : 6px 0px;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s ease;
}
.cbx:not(:last-child) {
  margin-right: 6px;
}
.cbx:hover {
  background: rgba(0,119,255,0.06);
  padding-left:8px;
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
    padding-left: 12px;
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
body {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  color: #223254;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
// 


.srfcmin{
  border:1px solid #D4D6DC
}

.srfcmin:sel{
  border:1px solid #D4D6DC
}
input:focus { 
    outline: none !important;
    border-color: $main;
    box-shadow: 0 0 2px $main;
}


.Dip{
    position: relative;
    top: -8px;
    color: rgb(0, 0, 0);
    
    opacity: 0.8;
    font-family: $gb;
    color: inherit !important;
    font-size: 0.9em !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    margin: 0px !important;
    padding-top:28px !important;
    padding-left:0px !important
}
// 

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
.ch {
    position: relative;
    right: 4rem;
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
        width: 32%;
    }
}

@media (min-width: 768px) { 

    .ipm{
        width: 41%;
    }

}


@media (min-width: 1024px) { 
    .inpt1{
        width: 32%;
    }
    .ipm{
        width: 40%;
    }
}
// 

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
    border: 1px solid #bebebe;
    border-radius: 8px;
    color: $main ;
    

}
.drpdown:hover{
    font-family: $gr;
    background-color: transparent;
    border: 1px solid $main;
    border-radius: 8px;
    color: $main ;
    

}



////////////////////

 .Equipement{
   position: relative;
   right: 11%;
   
 }

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
        margin-left:11%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .Equipement{
        margin-left:11%
    }

}
</style>
