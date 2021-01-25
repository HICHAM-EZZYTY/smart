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
                <h2 class="text-center mb-1 text-sm md:text-lg lg:text-xl xl:text-1xl">votre annonce de vente est gratuit</h2>
                <div class="hr"></div>
            </div>          
        </div>

        <div class="surveycontainer">

            <div v-if="this.$store.state.countneuf==1"  class="survey1">
                <Annonceheading title="l'adresse de bien" Numbers="1" class="mb-4 mt-8" />
                <Addressedebien class="" />
                <Annonceheading title="l'adresse bureau de vente" Numbers="2" class="mb-4 mt-8" />
                <Adressebureau />
                <Annonceheading title="Type d'annonce" Numbers="3" class="mb-2" /> 
                <Typeofad @onNameChange="this.getName"  class="mb-2" /> 
                <Annonceheading title="Nombre de lots" Numbers="4" class="mb-2" /> 
                <Lots :piece="Piece" :surfaceHabital="surfaceHabital" :etageTerain="etageTerain" class="mb-2" /> 

            </div>


            <div v-if="this.$store.state.countneuf==2" class="survey2">
                <Annonceheading title="Plus de critères" Numbers="3" class="mb-2" /> 
                <Plusdecrit  class="mb-2" /> 
                <Annonceheading title="Lois défiscalisation" Numbers="4" class="mb-2" /> 
                <Loisdefiscalisation  class="mb-2" />
                <Annonceheading title="Livraison prévu à partir de :" Numbers="5" class="mb-2" /> 
                <Livraison  class="mb-2" />
            </div>
            <div v-if="this.$store.state.countneuf==3" class="survey3">
                <Annonceheading title="Photo/Video/3D :" Numbers="6" class="mb-4" />
                <Multimedia class="" />
                <Annonceheading title="Visite whatsapp :" Numbers="7" class="mb-4" />
                <Visitewhatsapp class="" />
                <Annonceheading title="Texte de l’annonce  :" Numbers="8" class="mb-4" />
                <Textarea class="" /> 
            </div>
            
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
import Annonceheading from '../../components/Annonceheading'
import Typeofad from '../../components/Typeofad'
import Lots from '../../components/Lots'
import Plusdecrit from '../../components/Plusdecritiéres'
import Loisdefiscalisation from '../../components/Loisdefiscalisation'
import Livraison from '../../components/Livraison'

import Textarea  from '../../components/Textarea'
import Visitewhatsapp  from '../../components/Visitewhatsapp'
import Multimedia  from '../../components/Multimedia'

import Addressedebien from '../../components/Addressedebien'
import Adressebureau from '../../components/Adressebureau'

export default {
  name: 'Déposerannoncevente',
  components: {
    Annonceheading,
    Typeofad,
    Lots,
    Plusdecrit,
    Loisdefiscalisation,
    Livraison,
    Multimedia,
    Visitewhatsapp,
    Textarea,
    Addressedebien,
    Adressebureau,
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
        Piece: "",
        etageTrain : "",
        surfaceHabital: "",
      }


    },
    methods: {
        getName: function(name, arg1, arg2){
            this.Piece = name ;
            this.surfaceHabital = arg1;
            this.etageTerain = arg2
            // console.log(arg1);
            // console.log(arg2);
        },
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
			if(this.$store.state.countneuf<1 ){
                this.$store.state.countneuf=1
                this.Incr=1
            }
            else if ( this.$store.state.countneuf>=this.pagesCount){
                this.$store.state.countneuf=this.pagesCount
                this.Incr=this.pagesCount
            }
			else
            this.$store.commit('incrementcountneuf');
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

            if (this.$store.state.countneuf<=1){
                this.$store.state.countneuf=1
                this.Incr=1
            }
            else if (this.$store.state.countneuf>1){
                    // this.$store.state.count=this.$store.state.count-1
                    this.Incr=this.Incr-1
                    this.$store.commit('decrementcountneuf');
                }

			var pgbar=this.$refs.pgbar;
            pgbar.style.width=this.Pwidth[this.Incr-1]
		}

},
          mounted(){
            this.Incr=this.$store.state.countneuf
            this.pagesCount=this.$route.meta.PageCount
            this.Heading=this.$route.meta.Heading

        },
        updated() {

            this.Incr=this.$store.state.countneuf
            this.pagesCount=this.$route.meta.PageCount
            this.Heading=this.$route.meta.Heading
            this.Pindex=this.$route.meta.Pindex
            this.Pwidth=this.$route.meta.Pwidth
            var pgbar=this.$refs.pgbar;
			pgbar.style.width=this.Pwidth[this.Incr-1]

}


}
</script>
<style  scoped lang="scss">
@import "../../scss/main.scss";

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
         width:35%
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