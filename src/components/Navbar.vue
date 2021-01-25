<template class="z-10">
  <nav class="Navbar mb-4 mt-5  ml-6 mr-5 items-center lg:ml-2 lg:mr-1 grid grid-cols-2 lg:mt-0 lg:grid lg:grid-cols-7">

      

    <div id="logo" class="lg:col-span-1">
        <img   class="" src="../assets/Pics/Logo.svg" alt="logo">
    </div>
    
    <div class="navitems lg:col-span-6 lg:grid lg:grid-cols-9">


       
        <div class="navitemsheaders lg:col-span-8 lg:grid  grid-cols-9">



        <button ref="btn" @mouseover="dropdownEnter" @mouseleave="dropdownLeave" class="btncontain   lg:grid lg:col-span-4 lg:justify-self-end">
            <i class="fas fa-plus" id="fa-icns"  ref="btnimg"></i>
            <p  style="color:white" ref="btnheading">Déposer une annonce</p>
            <div  ref="dropblck" class="dropdown">

                <div class="vente">
                    <p  ref="kawki" id="venteP" >Vente immobilère</p>
                    <i ref="venteI"  class="fas fa-chevron-right"></i>
                </div>

                 <div class="location">
                    <p id="locationP">Location immobilère</p>
                    <i class="fas fa-chevron-right"></i>

                    
                </div>
            </div>
        </button>

            <p class="lg:grid lg:col-span-2 pt-2">Spécial investisseur</p>
            <p class="lg:grid lg:col-span-1 pt-2" id="estm">Estimer</p>
            <p class="lg:grid lg:col-span-2 pt-2">Utiliser nos données</p>
        </div>

        <img  class="lg:justify-self-center" id="domore" @click="Menu" src="../assets/Pics/doMorebtn.svg" alt="logo">

    </div>


    <!-- Starting of the menu bakcground  -->
    
    <div ref="menu" class="menubackground"   v-bind:class="{ show: isActive }">

                <a @click="Close">
                <i class="fas fa-times close" v-on:click="Close" id="close"></i>
                </a>

            <!-- <p v-on:click="Close" id="close">HELLO WORLD</p> -->

            <ul id="menu2">
                            <li id="déménageur"> <router-link to="/Colocation">Déposer une annonce colocation</router-link></li>
                            <li id="déménageur"> <router-link to="/location">Déposer une annonce location</router-link></li>
                            <li id="déménageur"> <router-link to="/vente">Déposer une annonce vente</router-link></li>
                            <li id="déménageur"> <router-link to="/neuf">Déposer une annonce neuf</router-link></li>                    <li id="déménageur"><a href="#">Déposer une annonce neuf</a></li>
                            <li id="déménageur"> <router-link to="/ads">Rechercher des annonce</router-link></li>
                            <li id="déménageur"> <router-link to="/adsdétails">Détail d'une annonce</router-link></li>
                            <li id="déménageur"> <router-link to="/register">Incsription</router-link></li>
                            <li id="déménageur"> <router-link to="/login">S'identifier</router-link></li>


                    <!-- <div id="navbtn2" class="navitems">
                    <button ref="btn2"  id="btn2" @mouseover="dropdownEnter2" @mouseleave="dropdownLeave2" >
                        <i class="fas fa-plus" id="fa-icns"  ref="btnimg2"></i>
                        <p id="btnheading">Déposer une annonce</p>
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
            </ul>
    </div>
  </nav>
  
</template>

<script>

// import Menu from '../components/Menu';

export default {
  name: 'Navbar',
    components: {
    // Menu,

    },
    data() {
      return {
          isActive:false,
      }

    },
    methods: {
    dropdownEnter: function() {
        var btn=this.$refs.btn;
        var icon=this.$refs.btnimg;
        var dropblck=this.$refs.dropblck;
        var btnheading=this.$refs.btnheading
        btn.style.backgroundColor="#F5F7FA";
        btn.style.borderBottomLeftRadius="0%";
        btn.style.borderBottomRightRadius="0%";
        btn.style.borderTopLeftRadius="25px";
        btn.style.borderTopRightRadius="25px";
        btn.style.color="#6E7A81"
        dropblck.style.display="block"
        dropblck.style.borderBottomLeftRadius="25px";
        dropblck.style.borderBottomRightRadius="25px";
        dropblck.style.borderTopLeftRadius="0%";
        dropblck.style.borderTopRightRadius="0%"; 
        btnheading.style.color="#6E7A81"  
        icon.style.color="#6E7A81";
   
    },
    dropdownLeave:function(){
        var btn=this.$refs.btn;
        var icon=this.$refs.btnimg;
        var dropblck=this.$refs.dropblck;
        var btnheading=this.$refs.btnheading
        btn.style.backgroundColor="#2C8EEA";
        btn.style.color="#FFFFFF"
        icon.style.color="#FFFFFF";
        dropblck.style.display="none"
        btn.style.borderTopLeftRadius="25px";
        btn.style.borderTopRightRadius="25px";
        btn.style.borderBottomLeftRadius="25px";
        btn.style.borderBottomRightRadius="25px";
        btnheading.style.color="white" 
        icon.style.color="#FFFFFF";
    

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
        // event.target.className += ".show";
        this.isActive=true;
        console.log("this is active value",this.isActive);
        
    },
    Close:function(){

        this.isActive=false;
    }

    },

}

</script>

<style scoped lang="scss">

@import "../scss/main.scss";  


.btncontain{
    position: relative;
    right: 2rem;
    background-color: rgb(44, 142, 234); 
    border-radius: 20px 20px 0% 0%;
    color: rgb(255, 255, 255);
    z-index: 1;
}

#estm{
    justify-self: center;
}



    #venteP{
        font-size: 12px;
    }
    #locationP{
        font-size: 12px;
    }



.vente:hover{

   p{
       color:$main
   }
   svg{
       color:$main
   }
}
.location:hover{
    p{
        color:$main
    }
    svg{
        color:$main
    }
   
}

#dropdown2{
        bottom: 27px;
        width: 274px;
        background-color: white;
        height: 116px;
        .vente{
        padding-top: 27px;
        font-size: 14px;
        padding-left: 16px;
        opacity: 0.8;

        svg{
        margin-left: 90px;
        opacity: 1;
        }
        }
        .location{
        padding-top: 0px;
        font-size: 14px;
        padding-left: 16px;
        opacity: 1;

        svg{
        margin-left: 57px;
        opacity: 1;
        }

        }
    .svg-inline--fa.fa-w-10 {
    width: 3.2%;
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

#menu2{
    width: 100%;
    display: grid;
    text-align: center;
    li{
        font-family: $um;
        color: white;
        font-size: 22px;
        margin-top: 22px;
        opacity: 0.8;
        &:hover{
            opacity: 1;
        }
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
 



#navbtn2{
    display: grid;
    grid-template-columns: none;
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
    // -webkit-animation-name: animatemodal;
    // -webkit-animation-duration: 0.7s;
    // animation-name: animatemodal;
    // animation-duration: 0.7s;
    left: 100%;
    opacity: 0;
    transition: left 0.5s, opacity 0.4s;

}
.menubackground.show {
    left: 0;
    opacity: 1;
}
  

// @keyframes animatemodal {
//     from {left:2000px; opacity:0}
//     to {left:0; opacity:1}
//   }
  

#domore{
      cursor: pointer;
      justify-self: start;
      margin-left: 0.5rem;

}

#domore:hover{
/*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
	-webkit-animation: heartbeat 4s ease-in-out infinite both;
	animation: heartbeat 4s ease-in-out infinite both;

}


/**
 * ----------------------------------------
 * animation heartbeat
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


.dropdown{
    display: none;
    position: relative;
    height: 92px;
    width: 140px;
    background-color: #F5F7FA;
    border-radius: 8px;
    bottom: 14px;
    
    // z-index: -1;
}


button:focus {
  outline:none;
  box-shadow: none;
}

.font-semibold{
    font-family: $ub;
}
.svg-inline--fa{
        height: 0.8em;
}
.svg-inline--fa.fa-w-10 {
    width: 3.2%;
}

.vente{
    // z-index: 99;
    font-size: 14px;
    float: left;
    padding-left: 27px;
    font-family: $ur;
    opacity: 0.8;

    p{
    display: inline-block;
    margin-top: 3px;
    margin-left: 5px;
 
    }
    
    svg{
    margin-left: 40px;
    opacity: 0.8;
    }
}



.location{
    // z-index: 99;
    padding-top: 0px;
    font-size: 14px;
    float: left;
    padding-left: 27px;
    font-family: $ur;
    opacity: 0.8;

    p{
    display: inline-block;
    margin-top: 3px;
    margin-left: 5px;
    }
    svg{
    margin-left: 23px;
    opacity: 0.8;
    }
}

.navitems{
          button{
                display: inline-block;
                border-radius: 29px;
                margin-top: 0px;
                border: none;
                // margin-left: 64px;
                margin-left: 23%;
                font-family: "Ubuntu-Regular";
                height: 48px;
                width: 140px;
                // box-shadow:-5px 14px 16px rgba(163, 164, 172, 0.4), -0px -0px 0px;
                background-color:$main;
                img{
                    display: inline-block;
                    height: 22px;
                    width: 18px;
                    margin: 4px;
                    float: left;
                    position: relative;
                    left: 7px;
                    bottom: 1px;
                }
                p{
                    display: inline-block;
                    // margin-top: 3px;
                    margin-top: 8px;
                    margin-left: 5px;
                    font-size: 14px;

                 }
          }
}


// Mobile First Approach Navbar

@media (min-width:320px){
       .Navbar{
        // display: grid;
        // grid-template-columns: 1fr 1fr;
        // margin-top: 1.25rem;   
    }
    .navitems button{
        display: none;
    }
    .navitemsheaders{
        display: none;
     }
     
    .navitems{
          img{
               display: inline-block;
                float: right;
                // width: 30px;
                // margin-top: 19px;
                margin-right: 5px;
          }
      }
}
@media (min-width:562px){
    .navitems button{
        display: none;
    }
}



  @media (min-width: 550px) {
 .navitems button{
    margin-left: 32%;
     }

}

  @media (min-width: 622px) {
 .navitems button{
    margin-left: 42%;
     }

}

  @media (min-width: 1024px) {


    #domore{
        grid-column-start:0.5;
        justify-self: center;

    }

      .dropdown{
        position: relative;
        height: 69px;
        width: 140px;
        background-color: #F5F7FA;
        border-radius: 20px;
        top: 7px;

      }

 
      #logo{
        margin-top: 21px;
        margin-left: 10px;
      }    
        .navitems {
        margin-top: 28px;
        
        button{
            display: block;
            margin-left: 0%;
            margin-top: 0px;
            justify-self: end;
            }
        }

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

        .navitemsheaders{
           display: grid;
           justify-self: end;
           margin-right: -2rem;
           button {
               svg{
                   position: relative;
                   left: -7.2px;
                   bottom: -1px;
                   font-size: 1.3rem;
               }
           }
         p{
            font-family: $ur;
            font-size: 13px;
            line-height: 18px;
            text-align: center;
            text-transform: capitalize;
            color: #6E7A81;
            display: inline;
            padding-right: 8px;
            justify-self: end;
         }
      
     }


}

 @media (min-width: 801px) {
 .navitems button{
    height: 39px;
    width: 14rem;
    font-size: 11px;
    padding-bottom: 5px;
    // z-index: 1;
    }
    .navitemsheaders p{
        font-size: 14px;
    }
    .navitems button img{
        bottom: -1px;
    }
    .dropdown{
    width: 14rem;
    }

}

 @media (min-width: 900px) {
 


}


</style>