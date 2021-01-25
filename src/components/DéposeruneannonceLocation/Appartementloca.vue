<template>
    <div class="surveycontainer">

            <!-- {{ this.$store.state.count}} -->



            <div v-if="this.$store.state.countlocation==1" class="survey2">

                <Typedebienlocation class="" @pageCounter="getPageCount"/>

                <Annonceheading title="l'adresse de Appartement" Numbers="1" class="mb-4 mt-8" />
                <Addressedebien class="" />
                <Annonceheading title="Disponibilite" Numbers="2" class="mb-4 mt-8" />
                <Disponibilite class="" />
                <Annonceheading title="Meuble" Numbers="3" class="mb-4" />
                <Meubleloca class="" />
                <Annonceheading title="Loyer" Numbers="4" class="mb-4" />
                <Loyer class="" />
            </div>

            <div v-if="this.$store.state.countlocation==2" class="survey3">              
                <Annonceheading title="À propos de l'espace" Numbers="4" class="mb-4" />
                <Surfacehabitable class="" />
                <Annonceheading title="Salle de bain" Numbers="5" class="mb-4" />
                <Salledebain class="" />
                <Annonceheading title="Toilettes" Numbers="6" class="mb-4" />
                <Toilettes class="" />
                
            </div>

            <div v-if="this.$store.state.countlocation==3" class="survey3">
                <Annonceheading title="Balcons" Numbers="7" class="mb-4" />
                <Balcons class="" />
                <Annonceheading title="Terrasse" Numbers="8" class="mb-4" />
                <Terrasse class="" />
                <Annonceheading title="Véranda" Numbers="9" class="mb-4" />
                <Veranda class="" />
                <Annonceheading title="Parking" Numbers="10" class="mb-4" />
                <Parking class="" />
                <Annonceheading title="Cave" Numbers="11" class="mb-4" />
                <Cave class="" />
                <Annonceheading title="Box" Numbers="12" class="mb-4" />
                <Box class="" />
                <Annonceheading title="Exposition" Numbers="13" class="mb-4" />
                <Exposition class="" />
                
            </div>


            
            <div v-if="this.$store.state.countlocation==4" class="survey3"> 
                <Annonceheading title="Vue" Numbers="14" class="mb-4" />
                <Vue class="" />
                <Annonceheading title="Chauffage" Numbers="15" class="mb-4" />
                <Chauffage class=""/> 
                <Annonceheading title="Etages" Numbers="16" class="mb-4" />
                <Etages class="" />
                <Annonceheading title="Consommation énergétique" Numbers="17" class="mb-4" />
                <Consomations class="" />
                <Annonceheading title="Année de construction" Numbers="18" class="mb-4" />
                <Annedeconstruction class="" />
                
            </div>

            <div v-if="this.$store.state.countlocation==5" class="survey3">  
                <Annonceheading title="Plus de critères " Numbers="19" class="mb-4" />
                <Plusdecrit class="" />
                <Annonceheading title="Type d'appartement" Numbers="20" class="mb-4" />
                <Typeappartement class="" />
                <!-- <Annonceheading title="Prix vente" Numbers="21" class="mb-4" />
                <Prixvente class="" /> -->
                
            </div>
            <div v-if="this.$store.state.countlocation==6" class="survey3"> 
                    <Annonceheading title="Photo/Video/3D :" Numbers="22" class="mb-4" />
                    <Multimedia class="" />
                    <Annonceheading title="Visite whatsapp :" Numbers="23" class="mb-4" />
                    <Visitewhatsapp class="" />
                    <Annonceheading title="Texte de l'annonce " Numbers="24" class="mb-4" />
                    <Textarea class="" />
            </div>        
    </div>
</template>

<script>

import Textarea  from './../Textarea'
import Visitewhatsapp  from './../Visitewhatsapp'
import Multimedia  from './../Multimedia'
// import Prixvente  from './../Prixvente'
import Annedeconstruction from './../Annedeconstruction'
import Consomations from './../Consomations'
import Plusdecrit from './../Plusdecritiéres'
import Chauffage from './../Chauffage'
import Vue from './../Vue'
import Exposition from './../Exposition'
import Box from './../Box'
import Cave from './../Cave'
import Parking from './../Parking'
import Veranda from './../Véranda'
import Terrasse from './../Terrasse'
import Balcons from './../Balcons'
import Toilettes from './../Toilettes'
import Salledebain from './../Salledebain'
import Surfacehabitable from './../Surfacehabitable'
import Meubleloca from './../Meubleloca'
import Loyer from './../Loyer'
import Typedebienlocation from './../Typedebienlocation'
import Disponibilite from './../Disponibilite'
import Annonceheading from './../Annonceheading'
import Addressedebien from './../Addressedebien'
import Etages from './../Etages'
import Typeappartement from './../Typeappartement'

export default {
    name: "Appartement",
     components: {
      Textarea,
      Visitewhatsapp,
      Multimedia,
    //   Prixvente,
      Annedeconstruction,
      Consomations,
      Plusdecrit,
      Chauffage,
      Vue,
      Exposition,
      Box,
      Cave,
      Parking,
      Veranda,
      Terrasse,
      Balcons,
      Toilettes,
      Salledebain,
      Loyer,
      Typedebienlocation,
      Disponibilite,
      Annonceheading,
      Addressedebien,
      Meubleloca,
      Surfacehabitable,
      Etages,
      Typeappartement,
      
  },
    data() {
      return {
        pagesCount: 5,
		Disponibilite:false,
		nmbr:Number,
		ages:[],
		message:"",
        flag:false,
        text: "Appartement",
		Pindex:[
            "16% terminé, continuez comme ça",
            "30% terminé, continuez comme ça",
            "45% terminé, continuez comme ça",
            "61% terminé, continuez comme ça",
            "77% terminé, continuez comme ça",
            "100% terminé, Bravo !!"
		],
		Pwidth:[
			"8%",
			"12%",
			"23%",
			"40%",
			"50%",
			"63%",
		],
		Incr:1,
      }

    },
     methods: {
        getPageCount: function(counter, value){
            this.pagesCount=counter;
            this.text = value;
            this.Incr = this.$store.state.count;

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


			if(this.Incr<1 ){
				this.Incr=1
            }
            else if ( this.Incr>=this.pagesCount){
                this.Incr=this.pagesCount
            }
			else 
			this.Incr=this.Incr+1;

			var pgbar=this.$refs.pgbar;
			pgbar.style.width=this.Pwidth[this.Incr]
            console.log(this.Incr)
            
            console.log("hada count",this.$store.state.count)



		},
		previous:function(){
			console.log('this previous method is working')
            console.log(this.Incr)
            console.log("hada count",this.$store.state.count)


			if (this.Incr>1){
				this.Incr=this.Incr-1
			}
			var pgbar=this.$refs.pgbar;
			pgbar.style.width=this.Pwidth[this.Incr]


        }
}
}
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";

    .surveycontainer{
    background-color: #F3F4F8;
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