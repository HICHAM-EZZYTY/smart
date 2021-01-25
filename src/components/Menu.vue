<template>
    <div ref="menu" class="menubackground"   v-bind:class="{ show: isActive }">

                <a @click="Close">
                <i class="fas fa-times close" v-on:click="Close" id="close"></i>
                </a>

            <!-- <p v-on:click="Close" id="close">HELLO WORLD</p> -->

            <ul id="menu2">

                    <li id="déménageur"><a href="#">Trouver un déménageur</a></li>
                    <li id="investisseur"><a href="#">Spécial investisseur</a></li>
                    <li id="agent"><a href="#">Trouver un agent</a></li>
                    <li id="syndic"><a href="#">Trouver un syndic</a></li>
                    <li id="estimer"><a href="#">Estimer</a></li>
                    <li id="compte"><a href="#">Compte</a></li>
                    <div id="navbtn2" class="navitems">
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
                    </div>
            </ul>
    </div>
</template>

<script>
export default {
    name: "Menu",
     data() {
      return {
          isActive:false,
      }

    },
    methods: {

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

<style lang="scss" scoped>
@import "../scss/main.scss";  


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
        margin-top: 30px;
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
</style>