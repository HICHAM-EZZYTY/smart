<template>
  <div>
       <div class="menubutton">
        <img id="domore" @click="Menu" src="../assets/Pics/doMorebtn.svg" alt="logo">
       </div>
        <!-- Starting of the menu bakcground  -->
            <div ref="menu" class="menubackground" v-bind:class="{ show: isActive }">

                        <a @click="Close">
                        <i class="fas fa-times close" v-on:click="Close" id="close"></i>
                        </a>

                    <ul id="menu2">
                            <!-- <li id="déménageur"><a href="#">Trouver un déménageur</a></li>
                            <li id="investisseur"><a href="#">Spécial investisseur</a></li>
                            <li id="agent"><a href="#">Trouver un agent</a></li>
                            <li id="syndic"><a href="#">Trouver un syndic</a></li>
                            <li id="estimer"><a href="#">Estimer</a></li>
                            <li id="compte"><a href="#">Compte</a></li>
                            <div id="navbtn2" class="navitems">
                            <button ref="btn2"  id="btn2" @mouseover="dropdownEnter2" @mouseleave="dropdownLeave2" >
                                    <i class="fas fa-plus" id="fa-icns"  ref="btnimg2"></i>
                                    <p>Déposer une annonce</p>
                                    <div  ref="dropblck2" class="dropdown" id="dropdown2">
                                        <div class="vente">
                                            <p id="venteP" >Vente immobilère</p>
                                            <i ref="venteI"  class="fas fa-chevron-right"></i>
                                        </div>
                                        <div class="location">
                                            <p>Location immobilère</p>
                                            <i class="fas fa-chevron-right"></i>
                                            
                                        </div>
                                    </div>
                            </button>
                            </div> -->
                    <li id="déménageur"> <router-link to="/Colocation">Déposer une annonce colocation</router-link></li>
                    <li id="déménageur"> <router-link to="/location">Déposer une annonce location</router-link></li>
                    <li id="déménageur"> <router-link to="/vente">Déposer une annonce vente</router-link></li>
                    <li id="déménageur"> <router-link to="/neuf">Déposer une annonce neuf</router-link></li>                    <li id="déménageur"><a href="#">Déposer une annonce neuf</a></li>
                    <li id="déménageur"> <router-link to="/ads">Rechercher des annonce</router-link></li>
                    <li id="déménageur"> <router-link to="/adsdétails">Détail d'une annonce</router-link></li>
                    <li id="déménageur"> <router-link to="/register">Incsription</router-link></li>
                    <li id="déménageur"> <router-link to="/login">S'identifier</router-link></li>

                    </ul>
            </div>

            <div class="registercontainer mt-24  grid grid-cols-1 md:mt-0 md:grid-cols-8 lg:grid-cols-9">

                <div class="registerform md:col-span-5 md:mt-16 lg:col-span-4">

                    <div class=" w-full md:mb-5">
                            <img  class="logo m-0 m-auto opacity-100 w-40" src="../assets/Pics/Logo.svg" alt="logo de plateforme smartzone">
                    </div>

                    <div class="spliter m-0 m-auto  mt-4 w-3/4 md:mb-8 "></div>

                    <div class="form mt-4">
                        <h1  class="m-0 m-auto  w-3/4">Bienvenue parmi nous !</h1>
                            <div class="login mt-1 m-0 m-auto  w-3/4">
                                <h6 class="inline text-center">connectez-vous à votre compte par e-mail et mot de passe</h6>
                            </div>

                            

                            <div class="inpts  w-3/4  m-0 m-auto ">
                            <div class="inptName relative">
                                <input id="price" class="form-input  block relative w-full pt-2 pb-2 pl-4 pl-7 pr-12 sm:text-sm sm:leading-5 mt-3" placeholder="Adresse e-mail">
                                <img   class="absolute" src="../assets/Pics/registerformmail.svg" alt="icon que répresente le choix de particulier">
                            </div>
                            <div class="inptName relative">
                                <input id="price" type="password" class="form-input  block relative w-full pt-2 pb-2 pl-4 pl-7 pr-12 sm:text-sm sm:leading-5 mt-3" placeholder="Mot de passe">
                                <img   class="absolute " src="../assets/Pics/registerformlock.svg" alt="icon que répresente le choix de particulier">
                            </div>

                            <div class="remmemberme mt-4 mb-4 grid grid-rows-8 sm:grid-cols-8 md:grid-cols-8">
                                <!-- Toggle Button -->
                                <label for="toogleA" class="flex  col-span-5 items-center cursor-pointer sm:col-span-5 md:col-span-4">
                                    <!-- toggle -->
                                    <div class="relative">
                                    <!-- input -->
                                    <input id="toogleA" type="checkbox" class="hidden" />
                                    <!-- line -->
                                    <div class="toggle__line w-8 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                    <!-- dot -->
                                    <div class="toggle__dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0"></div>
                                    </div>
                                    <!-- label -->
                                    <div class="ml-3 toggle-text capitalize text-black-700 font-medium">
                                    souviens-moi
                                    </div>
                                </label>


                                <div class="forgetpassword flex mt-2 col-span-3 sm:col-span-3 sm:mt-0  md:col-span-4">
                                    <img   class="absolute mr-3 w-6" src="../assets/Pics/loginkey.svg" alt="icon que répresente le clé">
                                    <h3>mot de passe oublié</h3>
                                </div>
                                

                            </div>
                       
                  

                        </div>




                            <div class="btns  relative w-3/4 m-0 m-auto mt-3 mb-3 ">
                                <img class=" hidden md:block absolute iconofbtnsmbt" src="../assets/Pics/inscription.svg" alt="icon de button s'inscrire">

                                <button type="submit" class="btn-sbmt m-0 m-auto  h-10 w-full">
                                        S'inscrire
                                </button>
                            </div>

                            <div class="createaccount w-3/4 m-0 m-auto ">
                                <h4>Vous n'avez pas encore de compte ?<br id="newline"><span>créer un compte</span></h4>
                            </div>


                            <div class="socialmedia flex w-3/4 m-0 m-auto mt-3 mb-3">
                                <h2 class="mr-2">Se connecter avec</h2>
                                <p class="mr-1">Facebook</p>
                                <p class="mr-1">Twitter</p>
                                <p>Google</p>
                            </div>
                    </div>


                </div>


                <div class="registerpicside  relative md:col-span-3 lg:col-span-5">

                    <p class="hidden md:block">Menu</p>
                    <img id="domore" class="hidden md:block" @click="Menu" src="../assets/Pics/doMorebtn.svg" alt="logo">


                    <div class="footer hidden md:flex  ">

                    <div class="facebook flex-initial">
                     <img class="w-2  m-0 m-auto pt-1" src="../assets/Pics/registerfacebook.svg" alt="icon de facebook">
                    </div>

                    
                    <div class="facebook ml-5 flex-initial">
                     <img class="w-4  m-0 m-auto pt-2" src="../assets/Pics/registertwitter.svg" alt="icon de facebook">
                    </div>

                    <div class="facebook ml-5 flex-initial">
                     <img class="w-4  m-0 m-auto pt-1" src="../assets/Pics/registerinstagram.svg" alt="icon de facebook">
                    </div>

                    <div class="facebook ml-5 flex-initial">
                     <img class="w-3  twtr m-0 m-auto pt-1" src="../assets/Pics/registerlinkedine.svg" alt="icon de facebook">
                    </div>

                    <div class="facebook ml-5 flex-initial">
                     <img class="w-5  m-0 m-auto pt-1" src="../assets/Pics/registeryoutube.svg" alt="icon de facebook">
                    </div>

                    </div>

                </div>

            </div>

  </div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
      return {
          isActive:false,
          radio1:false,
          radio2:true,
          pro:true,
      }
    },
    methods: {
            dropdownEnter: function() {
        var btn=this.$refs.btn;
        var icon=this.$refs.btnimg;
        var dropblck=this.$refs.dropblck;
        btn.style.backgroundColor="#F5F7FA";
        btn.style.color="#6E7A81"
        icon.style.color="black";
        dropblck.style.display="block"
    },
    dropdownLeave:function(){
        var btn=this.$refs.btn;
        var icon=this.$refs.btnimg;
        var dropblck=this.$refs.dropblck
        btn.style.backgroundColor="#2C8EEA";
        btn.style.color="#FFFFFF"
        icon.style.color="#FFFFFF";
        dropblck.style.display="none"
        // dropblck.style.dipsla="hidden"
    },
    dropdownEnter2: function() {
        var btn=this.$refs.btn2;
        var icon=this.$refs.btnimg2;
        var dropblck=this.$refs.dropblck2;
        btn.style.opacity=1;
        btn.style.border = "1px solid white";
        btn.style.backgroundColor="#2C8EEA";
        btn.style.color="white"
        icon.style.color="black";
        dropblck.style.display="block"
        dropblck.style.color="#2C8EEA"

    },
    dropdownLeave2:function(){
        var btn=this.$refs.btn2;
        var icon=this.$refs.btnimg2;
        var dropblck=this.$refs.dropblck2
        btn.style.backgroundColor="white";
        btn.style.border = "none";
        btn.style.color="#2C8EEA"
        icon.style.color="#FFFFFF";
        dropblck.style.display="none"
    },
    Menu:function(){
        this.isActive=true;
        console.log("this is active value",this.isActive);
        
    },
    Close:function(){
        this.isActive=false;
        console.log("this is active value",this.isActive);

    },
    changeradiopic:function(){
        console.log("::before->radio1 & radio2",this.radio1,this.radio2)
        this.radio1=!this.radio1;
        this.radio2=!this.radio2;
        console.log("::after->radio1 & radio2",this.radio1,this.radio2)
        this.pro=!this.pro

    },
    browsing:function(){
        var browse=this.$refs.realfile;
        browse.click();
    },
    changepro:function(){
        console.log("hadchi working a3chiri")
    

    },
    }


}
</script>

<style scoped lang="scss">

@import "../scss/main.scss";

.createaccount{
    margin-bottom:10.60rem;
    h4{
        font-family: $ur;
        color:#858990;
        font-size: 0.8rem;
        span{
            color:$main;
        }

    }

}



// switch button 

.toggle__dot {
    top: -.0rem;
    left: -0.3rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(140%);
  background-color: white;
}

input:checked ~ .toggle__line{
  background-color: $main;
}

.toggle-text{
    font-family: $um;
    font-size: 0.88rem;
}

// end of the switch button styling


.forgetpassword{
    h3{
        font-family: $um;
        text-transform: capitalize;
        color: #2C8EEA;
        font-size: 0.75rem;
        margin-left: 2rem;
        margin-top: 0.23rem;
    }
}


.twtr{
    padding-top: 0.38rem;
}

.footer{
    position:absolute;
    bottom: 8px;
    left: 30px;
}

.facebook{
    height: 1.7rem;
    width:1.7rem;
    background-color:white;
    border-radius: 50%;
}

.registerpicside{
  background-image: url("../assets/Pics/registerbckgrnd.jpg"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 100%; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  p{
        font-family: $ub;
        font-size: 1rem;
        color:white;
        position: absolute;
        right: 70px;
        top: 30px;
    }

}



.socialmedia{
    h2{
    font-family: $um;
    font-size: 0.72rem;
    color:#979AA2;
    opacity:0.8;
    }
    p{
    font-family: $um;
    color:#2C8EEA;
    font-size: 0.72rem;
    }
   
}

.iconofbtnsmbt{
    top: 24%;
    left: 29%;
    width: 1.2rem;
}


.btns{
        background-color: $main;
        border-radius: 3px;


}
.btn-sbmt{

    background-color: $main;
    border-radius: 3px;
    font-family: $ub;
    color: white;
    font-size: 1rem;

}


.browse{
    border: 1.3px dashed #2C8EEA;
    border-radius: 4px;
    h3{
        font-family: $um;
        font-size: 0.74rem;
        color: #979AA2;
    span{
        font-family: $ub;
        color:#2C8EEA;
    }
    
    }
    p{
        font-family: $ur;
        font-size: 0.68rem;
        color:#979AA2;
    }
}


.form-input {
        border: 0.8px solid #D1D8DA;
        border-radius: 5px;
        font-family: $ur;
        font-size:0.85rem;
        color:#979AA2
}

.inptName{
    img{
    top: 10px;
    right: 10px;
    }
   
}

.spliter{
    background: #E8E7EC;
    height: 0.12rem;
    }

h1{
    font-family: $ub;
    font-size: 1.15rem;
    line-height: 25px;
    color: #1A283F;

}

h6{
    font-family: $um;
    color: #8F959C;
    font-size: 0.7rem;

}
h5{
    font-family: $um;
    color: $main;
    font-size: 0.69rem;
    border-bottom: 1px solid $main;
}


input:focus {
    outline: none;
        border:1px solid $main;
    box-shadow: 0 0 3px #719ECE;

}

 @media (min-width: 640px) {

     .forgetpassword{
         justify-self: end;
         h3{
                 margin-top: 0.15rem;
         }
     }

 }

 @media (min-width: 500px) {

     #newline{
         display: none;
     }

     .createaccount{

         span{
             margin-left:1rem ;
         }

     }

 }  

// the starting of the radio buttons css

.entreprise {
    margin: 0 auto;
    margin-top: 1.3rem;
    fill: aquamarine;
}

.middle {
  text-align: center;
}

.middle input[type="radio"] {
  display: none;
}
.middle input[type="radio"]:checked + .box {
  background-color: none;
  border: 0.85px solid $main;
}
.middle input[type="radio"]:checked + .box span {
  color: $main;
}

.middle input[type="radio"]:checked + .box .round{
        border: 1px solid $main;
        background-color: $main;
}
.middle input[type="radio"]:checked + .box span:before {
  transform: translateY(0px);
  opacity: 1;
}
.middle .box {
  width: 7rem;
  height: 6rem;
  background-color: none;
  border: 0.85px solid #CDCED0;
  border-radius: 5px;
  transition: all 250ms ease;
  will-change: transition;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  position: relative;
  font-family: $ur;
  font-weight: 900;
}
.middle .box:active {
  transform: translateY(10px);
}
.middle .box span {
  position: absolute;
  transform: translate(0, 60px);
  left: 0;
  right: 0;
  transition: all 300ms ease;
  user-select: none;
  color: #C5C5C5;
  bottom: 4rem;
  font-size: 0.65rem;
}

.round{
    position: absolute;
    width: 0.95rem;
    height: 0.95rem;
    border: 1px solid #C5C5C5;
    border-radius: 50%;
    right: 0.5rem;
    top: 0.3rem;

}
.middle .box span:before {
  font-size: 1.2em;
  font-family: $um;
  display: block;
  transform: translateY(-80px);
  opacity: 0;
  transition: all 300ms ease-in-out;
  font-weight: normal;
  color: white;
}

.middle p {
  color: #fff;
  font-family: $um;
  font-weight: 400;
}
.middle p a {
  text-decoration: underline;
  font-weight: bold;
  color: #FFF;
}
// .middle p span:after {
//   content: '\f0e7';
//   font-family: $um;
//   color: yellow;
// }

.validicon{
    width: 0.6rem;
    position: relative;
    left: 1px;
    top: 0.2rem;
}

// the  starting of the menu css 
.menubutton{
    cursor: pointer;
}

#navbtn2{
    display: grid;
    grid-template-columns: none;
}

#domore{
    position: absolute;
    right: 1.1rem;
    top: 1.3rem;
    width: 2.5rem;
    cursor: pointer;
    }

#domore:hover{
/*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
	-webkit-animation: heartbeat 4s ease-in-out infinite both;
	animation: heartbeat 4s ease-in-out infinite both;

}

/**
 * ----------------------------------------
 * animation heartbeat for the menu icon
 * ----------------------------------------
 */

@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}

#close {
    color: white;
    font-size: 34px;
    float: right;
    margin-right: 20px;
    margin-top: 35px;
    cursor: pointer;
    -webkit-animation-name: animateclose;
    -webkit-animation-duration: 2.8s;
    animation-name: animateclose;
    animation-duration: 2.8s;
}

@keyframes animateclose {
    from {top:800; opacity:0}
    to {top:-800; opacity:1}
  }
  
.menubackground{
    position: fixed;
    height: 100%;
    width:100%;
    background-color:$main;
    z-index: 99;
    left: 100%;
    opacity: 0;
    transition: left 0.5s, opacity 0.4s;

}
.menubackground.show {
    left: 0;
    opacity: 1;
    bottom: 1px;
}
#menu2{
    width: 100%;
    display: grid;
    text-align: center;
    li{
        font-family: $um;
        color: white;
        font-size: 22px;
        margin-top: 8px;
        opacity: 0.8;
        &:hover{
            opacity: 1;
        }
    }
}
#navbtn2{
    display: grid;
    grid-template-columns: none;
}

.navitems{
          button{
                display: inline-block;
                border-radius: 59px;
                margin-top: 0px;
                border: none;
                // margin-left: 64px;
                margin-left: 23%;
                font-size: 10px;
                font-family: "Ubuntu-Regular";
                height: 27px;
                width: 140px;
                color: white;
                // box-shadow:-5px 14px 16px rgba(163, 164, 172, 0.4), -0px -0px 0px;
                background-color:$main;
                img{
                    display: inline-block;
                    height: 30px;
                    width: 18px;
                    margin: 0px;
                    float: left;
                    position: relative;
                    left: 6px;
                    bottom: 1px;
                }
                p{
                    display: inline-block;
                    // margin-top: 3px;
                    margin-top: 8px;
                    margin-left: 5px;
                 }
          }
}


#btn2{
   
    justify-self: center;
    background-color: white;
    color: $main;
    justify-self: center;
    width: 274px;
    height: 49px;
    font-size: 20px;
    font-family: $um;
    transition: all .3s;
    opacity: 0.8;
    svg{
    position: relative;
    right: 6px;
    bottom: 2px;
    }
}

 #btn2:hover:before {
    width: 100%;
  }

   #btn2:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color:#2D94F4;
    transition: all .5s;
    z-index: -1;

  }
 

 @media (min-width: 749px) {
        #navbtn2{
        display: grid;
        margin-top: 28px;
        grid-template-columns: none;
        margin-left: 0px;
        }

        #btn2{
            margin-left: 0%;
            margin-top: 28px;
            justify-self: center;
            
      }

        .navitems{
          img{
               display: inline-block;
                float: right;
                width: 30px;
                margin-right: 5px;
          }
      }

}
 
   @media (max-width: 376px) {
     .navitems button{
         display: none;
     }
     #navbtn2{
         #btn2{
        display: block;
        margin: 0 auto;
         }
     }
 }
  

  // the end of the menu css 





</style>