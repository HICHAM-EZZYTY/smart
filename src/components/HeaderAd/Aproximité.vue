<template>
  <div class="aproximite  mb-24">
      <div class="topBar flex flex-wrap lg:w-9/12">
        <h5 @click="activebar($event);indexoftabs=0" class="activtab  mr-8 pt-2 lg:ml-4 ">Transport en commun</h5>
        <h5 @click="activebar($event);indexoftabs=1" class=" mr-8 pt-2 " v-if="!IsLocation"  >Educations</h5>
        <h5 @click="activebar($event);indexoftabs=2" class="mr-8 pt-2" v-if="!IsLocation" >Plages</h5>
        <h5 @click="activebar($event);indexoftabs=3" class="mr-8 pt-2 ">Bornes éléctriques</h5>
        <h5 @click="activebar($event);indexoftabs=4" class="mr-8 pt-2">Vélos partages</h5>
      </div>
      <div  v-if="indexoftabs==0" class="soustopBar mt-4 flex flex-wrap">
        <h6 @click="activesousbar($event);indexofsoustab=0" class="activesoustab">TRAMWAY</h6>
        <h6 @click="activesousbar($event);indexofsoustab=1">MÉTRO</h6>
        <h6 @click="activesousbar($event);indexofsoustab=2">RER</h6>
        <h6 @click="activesousbar($event);indexofsoustab=3">Garre train </h6>
      </div>

      <div v-if="indexoftabs==0 && indexofsoustab==0" class="listsofitems">

          <!-- Start Of The Item -->
          <div class="item flex flex-col md:flex-row">
            <div class="nameofitem grid grid-cols-5">
                <p class="grid col-span-2 ml-2">T</p>
                <div class="grid col-span-1 btwn"></div>
                <p class="grid col-span-2 mr-2">6</p>
            </div>
            <div class="iteminfos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                <div class="iteminfosdistance grid row ml-3 ">

                    <h1>Les portes de Saint-Cyr</h1>
                    <div class="distance flex">
                    <img src="../../assets/Pics/Locationaddetails.svg" alt="distance icon">
                    <p class="ml-1">1,2km</p>
                    </div>

                </div>

                <div class="itemcontainer">

                <div class="iteminfosbadges flex">
                    <div class="foot ml-4">
                    <img src="../../assets/Pics/pedestrian-man.svg" alt="icon qui réspresente temps nécessaire pour arriver par pieds">
                    <p>12-10</p>
                    </div>
                    <div class="car ml-4">
                    <img src="../../assets/Pics/cardistance.svg" alt="icon qui réspresente temps nécessaire pour arriver par voiture">
                    <p>08-06</p>
                    </div>
                    <div class="bicycle ml-4">
                    <img src="../../assets/Pics/Bicycle.svg" alt="icon qui réspresente temps nécessaire pour arriver par bicyclette">
                    <p>09-10</p>
                    </div>
                    <div class="transport ml-4">
                    <img src="../../assets/Pics/Transport.svg" alt="icon qui réspresente temps nécessaire pour arriver par transport en commune">
                    <p>09-10</p>
                    </div>
                </div>

                </div>


            </div>
          </div>
          <!-- End Of The Item -->
              <!-- Start Of The Item -->


          <div class="item flex flex-col md:flex-row">
            <div style="background:#FDCB6E" class="nameofitem grid grid-cols-5">
                <p class="grid col-span-2 ml-2">T</p>
                <div class="grid col-span-1 btwn"></div>
                <p class="grid col-span-2 mr-2">4</p>
            </div>
            <div class="iteminfos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                <div class="iteminfosdistance grid row ml-3 ">

                    <h1>Bondy</h1>
                    <div class="distance flex">
                    <img src="../../assets/Pics/Locationaddetails.svg" alt="distance icon">
                    <p class="ml-1">1,4km</p>
                    </div>

                </div>

                <div class="itemcontainer">

                <div class="iteminfosbadges flex">
                    <div class="foot ml-4">
                    <img src="../../assets/Pics/pedestrian-man.svg" alt="icon qui réspresente temps nécessaire pour arriver par pieds">
                    <p>12-10</p>
                    </div>
                    <div class="car ml-4">
                    <img src="../../assets/Pics/cardistance.svg" alt="icon qui réspresente temps nécessaire pour arriver par voiture">
                    <p>08-06</p>
                    </div>
                    <div class="bicycle ml-4">
                    <img src="../../assets/Pics/Bicycle.svg" alt="icon qui réspresente temps nécessaire pour arriver par bicyclette">
                    <p>09-10</p>
                    </div>
                    <div class="transport ml-4">
                    <img src="../../assets/Pics/Transport.svg" alt="icon qui réspresente temps nécessaire pour arriver par transport en commune">
                    <p>09-10</p>
                    </div>
                </div>


                </div>


            </div>
          </div>


          <!-- End Of The Item -->

              <!-- Start Of The Item -->


          <div class="item flex flex-col md:flex-row">
            <div  style="background:#E84393" class="nameofitem grid grid-cols-5">
                <p class="grid col-span-2 ml-2">T</p>
                <div class="grid col-span-1 btwn"></div>
                <p class="grid col-span-2 mr-2">6</p>
            </div>
            <div class="iteminfos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                <div class="iteminfosdistance grid row ml-3 ">

                    <h1>Porte de Bondy</h1>
                    <div class="distance flex">
                    <img src="../../assets/Pics/Locationaddetails.svg" alt="distance icon">
                    <p class="ml-1">2km</p>
                    </div>

                </div>

                <div class="itemcontainer">

                <div class="iteminfosbadges flex">
                    <div class="foot ml-4">
                    <img src="../../assets/Pics/pedestrian-man.svg" alt="icon qui réspresente temps nécessaire pour arriver par pieds">
                    <p>12-10</p>
                    </div>
                    <div class="car ml-4">
                    <img src="../../assets/Pics/cardistance.svg" alt="icon qui réspresente temps nécessaire pour arriver par voiture">
                    <p>08-06</p>
                    </div>
                    <div class="bicycle ml-4">
                    <img src="../../assets/Pics/Bicycle.svg" alt="icon qui réspresente temps nécessaire pour arriver par bicyclette">
                    <p>09-10</p>
                    </div>
                    <div class="transport ml-4">
                    <img src="../../assets/Pics/Transport.svg" alt="icon qui réspresente temps nécessaire pour arriver par transport en commune">
                    <p>09-10</p>
                    </div>
                </div>

                <div class="coming">

                    <h2>Mise en service</h2>
                    <h1>2024</h1>

                    <div class="shape">
                         <img style="width:3rem" src="../../assets/Pics/Notification.svg" alt="icon qui réspresente temps nécessaire pour arriver par transport en commune">
                    </div>

                </div>

                </div>


            </div>
          </div>


          <!-- End Of The Item -->
          


      </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
          indexoftabs:0,
          indexofsoustab:0,
      }

},
props:["obj", "isAllowedForPCBP", "IsLocation"],
methods:{

    activebar:function(event){
        document.querySelector(".activtab").className="noactive"
        console.log("hada event",event.target.className)
        if(event.target.className == "activtab")
            {
                event.target.className = "noactive";
            }
        else
            {
                event.target.className = "activtab";
            }
      },
        activesousbar:function(event){
        document.querySelector(".activesoustab").className="noactive"
        console.log("hada event",event.target.className)
        if(event.target.className == "activesoustab")
            {
                event.target.className = "noactive";
            }
        else
            {
                event.target.className = "activesoustab";
            }
      },
}

}
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";

.shape{
    img{
        height: 2rem;
    }
}

.coming{
    position: relative;
    background: #DCEEFE;
    color:#2C8EEA;
    width: 12rem;
    height: 3.8rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
    border-radius: 6px;
    h2{
        text-align: center;
        padding-top: 0.6rem;
        font-family:   $gm;
        font-size: 0.8rem;
    }
    h1{
        text-align: center;
        font-family: $gsb;
        font-size: 1.2rem;
    }
    .shape{
        position: absolute;
        height: 1.8rem;
        width: 1.8rem;
        border-radius: 50%;
        background: white;
        right: -3%;
        top: -11%;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);

    }

}

.transport{
    background: #FFF3F6;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
    width: 4.5rem;
    height: 3.5rem;
    font-family: $ps;
    font-size: 0.75rem;
    text-align: center;
    color: #F86689;
    img{
        width: 1.4rem;
        display: block;
        margin: 0 auto;
        margin-top: 6px;

    }
    p{
        margin-top: 0.25rem;
    }
 
} 


.bicycle{
    background: #E9EBF7;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
    width: 4.5rem;
    height: 3.5rem;
    font-family: $ps;
    font-size: 0.75rem;
    text-align: center;
    color: #747DCE;
    img{
        width: 1.6rem;
        display: block;
        margin: 0 auto;
        margin-top: 6px;

    }
    p{
        margin-top: 0.25rem;
    }
 
} 

.car{
    background: #F7EAEA;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
    width: 4.5rem;
    height: 3.5rem;
    font-family: $ps;
    font-size: 0.75rem;
    text-align: center;
    color: #FF9376;
    img{
        width: 1.8rem;
        display: block;
        margin: 0 auto;
        margin-top: 9px;

    }
    p{
        margin-top: 0.25rem;
    }
 
}


.foot{
    background: #DCEEFE;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
    width: 4.5rem;
    height: 3.5rem;
    font-family: $ps;
    font-size: 0.75rem;
    text-align: center;
    color: #2C8EEA;
    img{
        width: 1.5rem;
        display: block;
        margin: 0 auto;
        margin-top: 9px;
    }
    p{
        margin-top: 0.25rem;
    }
 
}

.distance{
    p{  
        font-family: $pr;
        color:#2C8EEA;
        opacity: 0.5;
        font-size: 0.95rem;
    }
}

.iteminfosdistance{
    h1{
        font-family:  $gm;
        color: rgba(0, 0, 0, 0.6);
        font-size: 1rem;
    }
}


.iteminfos{
    border-left: 1.6px solid #DCEEFE;
    margin-left: 1rem;
    height: 3rem;
    width: 70%;
}

.btwn{
    height: 100%;
    background: white;
    width: 10%;
    margin-left: 4px;
}

.item{
    margin-left: 1rem;
    margin-top: 0.5rem;
    padding-bottom: 1.8rem;
}
.nameofitem{
    margin-top: 1rem;
    background: #FF7675;
    height: 1.8rem;
    width: 3.4rem;
    border-top-left-radius: 0px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    color:white;
    font-family: $rm;
    font-size: 1rem;
    p{
    justify-self: center;
    align-self: center;
    }
}
.soustopBar{
    font-family:$rm;
    color : #5E6366;
    line-height: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 0.76rem;
    font-weight: 500;
    h6{
    padding-top: 0.5rem;
    margin-right: 1rem;
    margin-left: 0.5rem;
    background: #F7F9FA;
    border-radius: 7px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    cursor: pointer;
    }
}

.activesoustab{
    color: white;
    background-color: $main !important;
}

.topBar{
    font-family:  $ur;
    color:#5E6366;
    font-size: 0.9rem;
    background: #F7F9FA;
    border-radius: 8px;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
    h5{
    padding-top: 0.5rem;
    margin-right: 1rem;
    margin-left: 1.25rem;

    }
   
}
.activtab{
    color:$main;
    background: rgba(44, 142, 234, 0.08);
    padding-right: 15px;
    padding-left: 15px;
    height: 2.4rem;
    border-radius: 8px;
    border: 0.6px solid #2C8EEA;
    padding-top: 0.5rem;
    margin-right: 2rem;
}



@media (min-width: 320px) { 

    .item{
        margin-bottom: 3rem;
    }
   .topBar{
       h5{
           margin-bottom: 0.5rem;
           margin-top: 0.50rem;
       }
   }
   .soustopBar{
       h6{
         margin-top: 0.50rem;

       }
   }
   .iteminfos{
       margin-top:1rem;
       margin-left:0rem; //raj3o 1rem fi large
    }
    .iteminfosbadges {
        margin-top: 1rem;
        width: 100%;
    }
    .iteminfos,.car, .foot, .bicycle, .transport {
        width: 100%;
        margin-left: 0rem;
        margin-right: 8px;
    }
}
@media (min-width: 400px) { 

   .soustopBar{
       h6{
         margin-top: 0rem;

       }
   }

}

@media (min-width: 500px) { 

 .iteminfos{
        width: 70%;
        margin-left: 0rem;
        margin-right: 8px;
}

}
@media (min-width: 703px) { 

    .itemcontainer {
        width:28rem;
    }
    .coming{
        width:14rem;
    }

     .iteminfos{
        width: 50%;
        margin-left: 0rem;
        margin-right: 8px;
}

   .topBar{
    width: 90%;
       h5{
           margin-bottom: 0rem;
           margin-top: 0rem;

       }
   }
}

@media (min-width: 768px) { 
    

       .item{
        margin-bottom: 0rem;
        border-bottom: 1px solid rgba(225, 225, 228, 0.29);

    }

     .iteminfos{
        width: 70%;
        margin-left: 1rem;
        margin-right: 8px;
}
.iteminfosbadges{
    margin-top: 0rem;
}
.nameofitem{
    margin-top:1.5rem;
}
  .coming{
       margin-top:0rem;
       margin-bottom: 0rem;
       height: none;
   }
   .itemcontainer {
       display: flex;
   }

}

@media (min-width: 850px) { 
   .topBar{
    width: 80%;
   }
   .coming{
       margin-top:0rem;
       margin-bottom: 0rem;
       height: none;
   }
}

@media (min-width: 1024px) { 
   .topBar{
    width: 90%;
   }
}
@media (min-width: 1230px) { 
   .topBar{
    width: 75%;
   }
}




</style>