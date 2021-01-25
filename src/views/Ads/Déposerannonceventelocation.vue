<template>

    <div class="surveycontainer h-screen">
        
        <div class="menu grid grid-cols-3 pt-8 mb-8">

                <img id="logo" class="ml-6 self-center" src="../../assets/Pics/Logo.svg" alt="logo de plateforme smartzone">
                <div  id="counter" class="opacity-75 hidden self-center">
                 {{this.Incr}} sur {{this.pagesCount}}
                </div>
                <img id="domorebtn" class="mr-6" src="../../assets/Pics/doMorebtn.svg" alt="icon qui répresente do more menu button">
        </div>

        <div class="header mb-10">
             <div  id="counter2" class="opacity-75 hidden text-center mb-4">
                    {{this.Incr}} sur {{this.pagesCount}}
            </div>
            <div class="heading">
                <h1 class="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">Décriver-nous votre {{ Heading }}</h1>
            </div>
            <div class="subheading ">
                <h2 class="text-center mb-1 text-sm md:text-lg lg:text-xl xl:text-1xl">votre annonce de location est gratuit</h2>
                <div class="hr"></div>
            </div>          
        </div>

        <div class="surveycontainer">
            <router-view />
            
			<div class="progressbar z-10 flex relative mt-16 block m-0 m-auto w-4/5 h-24 bg-white rounded-lg ">
				<div @click="previous()" class="previous">
					<img src="../../assets/Pics/annonceprvs.svg" alt="button précedent">
				</div>

				<div>

				</div>

				<div  @click="next()" class="next">

					<p class="mr-3">Question suivante</p>
					<img class="hidden md:block" src="../../assets/Pics/Annoncenextemoji.svg" alt="button suivant">

				</div>

				<div ref="pgbar" class="pgbar hidden lg:block" >
					<div class="circle"></div>
					<div class="popup">

						<p>{{Pindex[Incr-1]}}</p>

					<div class="polygone">

					</div>

					</div>
				
				</div>
            
			</div>

             <div class="sketchcontainer">
                    <div class="leftsidesktch">
                        <img class="hidden md:block" src="../../assets/Pics/Annonceleftvector.svg" alt="left sketched vector">
                    </div>
                    <div class="rightsidesktch">
                        <img class="hidden md:block" src="../../assets/Pics/Annoncerightsidevector.svg" alt="left sketched vector">
                    </div>
            </div>
            <!-- end of the progress bar  -->

        </div>

    </div>
  
</template>

<script>


// import Textarea  from '../../components/Textarea'
// import Visitewhatsapp  from '../../components/Visitewhatsapp'
// import Multimedia  from '../../components/Multimedia'
// import Prixvente  from '../../components/Prixvente'

// import Box from '../../components/Box'
// import Cave from '../../components/Cave'
// import Parking from '../../components/Parking'

// import Travaux from '../../components/Travaux'
// import Typedebien from '../../components/Typedebien'
// import Annonceheading from '../../components/Annonceheading'
// import Addressedebien from '../../components/Addressedebien'





export default {
  name: 'Déposerannoncevente',
  components: {

    //   Typedebien,
//       Annonceheading,
//       Addressedebien,
//       Travaux,
  
      
  },
    data() {
      return {
        pagesCount: null,
		Viager:false,
		nmbr:Number,
		ages:[],
		message:"",
        flag:false,
        Heading: null,
		Pindex:Array,
		Pwidth:Array,
		Incr:1,
      }

    },
    methods: {
 
        nmbrages:function(){
			var noages=parseInt(this.message)
			console.log(typeof(noages))
			console.log(noages);
			if(noages>15){
			this.ages=[]
			this.flag=true
			}
			else{
			var j;
			this.ages=[];
			for (j=0;j<noages;j++){
				this.ages.push(j)
			}
			this.flag=false
			}
		},
		next:function(){

            console.log("Next Incr value",this.Incr)
			if(this.$store.state.countlocation<1 ){
                this.$store.state.countlocation=1
                this.Incr=1
            }
            else if ( this.$store.state.countlocation>=this.pagesCount){
                this.$store.state.countlocation=this.pagesCount
                this.Incr=this.pagesCount
            }
			else
            this.$store.commit('incrementlocation');
            if(this.Incr<this.pagesCount){
            this.Incr=this.Incr+1
            }
            else{
                this.Incr=this.pagesCount
            }



			var pgbar=this.$refs.pgbar;
			pgbar.style.width=this.Pwidth[this.Incr]
            console.log(this.Incr)
		},
		previous:function(){
            if (this.$store.state.countlocation<=1){
                this.$store.state.countlocation=1
                this.Incr=1
            }
            else if (this.$store.state.countlocation>1){
                    this.Incr=this.Incr-1
                    this.$store.commit('decrementlocation');
                }

			var pgbar=this.$refs.pgbar;
            pgbar.style.width=this.Pwidth[this.Incr-1]
		}

},
          mounted(){
            this.Incr=this.$store.state.countlocation
            this.pagesCount=this.$route.meta.PageCount
            this.Heading=this.$route.meta.Heading

        },
        updated() {

            this.Incr=this.$store.state.countlocation
            this.pagesCount=this.$route.meta.PageCount
            this.Heading=this.$route.meta.Heading
            this.Pindex=this.$route.meta.Pindex
            this.Pwidth=this.$route.meta.Pwidth
            var pgbar=this.$refs.pgbar;
			pgbar.style.width=this.Pwidth[this.Incr-1]
            // console.log("paragraphindex updated",this.Pindex)
            // console.log("paragraph width updated",this.Pwidth)
            // console.log("incr  updated",this.Incr)



}




}
</script>
<style  scoped lang="scss">
@import "../../scss/main.scss";


//.progressbar::before{
    //   content: "before";
    // content: ""; 
    // position: absolute;
    // top: 0;
    // width: 75%;
    // height: 100%;
    // background-image: url("../../assets/Pics/Annonceleftvector.svg");
    // opacity:1;
//}

//.progressbar::after{
    //   content: "after";
//}


.rightsidesktch{
    margin-left:auto;
    img{
        height: 10rem;
    }
}
.leftsidesktch{
    img{
        height: 10rem;
    }
}

// .leftsidesktch:after{
    // width: 3rem;
    // height: 7rem;
    // content: ""; 
    // position: absolute;
    // background-image: url("../../assets/Pics/annonceleftsidesketchedvectore.svg");
    // opacity: 1;
    // background-position: center; 
    // background-repeat: no-repeat; 
    // background-size: cover; 


// }


.sketchcontainer{
    display: flex;
    position: relative;
    bottom: top;
    z-index: 0;
    bottom: 140px;
    height: 0rem;
}


.polygone{
	width: 0;
    height: 0;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-top: 20px solid #323436;
	position: absolute;
    top: 3rem;
    left: 7.5rem;
}

.popup{
	right: -122px;
    bottom: 54px;
    position: absolute;
    width: 17rem;
    height: 3rem;
    background: #323436;
    border-radius: 6px;
	line-height: 11px;

	p{

	text-align: center;
	color: #FFFFFF;
	font-family: $ur;
	margin-top: 17px;
	font-size: 0.93rem;


	}


}


.pgbar{

	width:8%;
	height: 1rem;
	background-color: $main;
	border-radius: 3px;
	height: 0.5rem;
    position: relative;
    top: 50%;
    left: 5%;

.circle {
	right: -2px;
    top: -6px;
    width: 20px;
    height: 20px;
    background-color: #2C8EEA;
    position: absolute;
    border-radius: 50%;
}

}

.next {
	width: 10rem;
	height: 4rem;
	background-color: $main;
	border-radius: 8px;
	position: absolute;
	right: 2%;
	top: 13px;
	display: flex;
    justify-content: center;
	align-items: center;
	cursor: pointer;
	p{
		font-family: $ur;
		color:white;
	}
}


.previous{
	width:4rem;
	height:4rem;
	background-color: #E5E8EF;
	border-radius: 4px;
    position: relative;
    top: 15%;
	left: 2%;
	cursor: pointer;
	img {
	position: absolute;
    top: 39%;
    left: 34%;
	}
}

.surveycontainer{
    background-color: #F3F4F8;
}
#counter{
    justify-self: center;
    font-family: $gr;
    color: black;
    font-size: 1.1rem;
}
#domorebtn{
    justify-self: end;
}

.heading{
    h1{
        font-family: $mb;
        // font-size: 2rem;
        color:$main;
    }
}
.subheading{
    h2{
        font-family: $gm;
        // font-size: 1rem;
        color:#171717;
        opacity:0.4;

    }
    
}
.hr{       
        display: block;
        width: 25%;
        background-color: #2C8EEA;
        height: 0.2rem;
        margin:0 auto

    }
@media (min-width: 320px) { 


    
    .hr{
        width:60%
    }

    #counter2{

        display: block;
        font-family: $gr;
        color: black;
        font-size: 1.1rem;

    }


    #domorebtn{
        margin-right: 0px;
    }
      #domorebtn{
        margin-right: 16px;
    }
    #logo{
        margin-left: 16px;
    }
    .menu{
        grid-template-columns: 2fr  2fr;
    }
 }

 
@media (min-width: 640px) { 

	.next {
		width:14rem;
	}

}

 @media (min-width: 640px) { 

     .hr{
         width:27%
     }

     #counter2{
         display: none;
     }

    #counter{
        display: block;
    }
    .menu{
        grid-template-columns: 2fr  1fr  2fr;
    }
    #domorebtn{
        margin-right: 16px;
    }
    #logo{
        margin-left: 16px;
    }
 }


</style>