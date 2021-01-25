<template>
     <div class="surveycontainer">
            <!-- <router-view /> -->

            <div v-if="this.$store.state.countlocation==1" class="survey2">

                <Typedebienlocation class="" @pageCounter="getPageCount"/>
                <Annonceheading title="l'adresse de Loft,atelier" Numbers="1" class="mb-4 mt-8" />
                <Addressedebien class="" />
                <Annonceheading title="Disponibilite" Numbers="2" class="mb-4 mt-8" />
                <Disponibilite class="" />
                <Annonceheading title="Meuble" Numbers="3" class="mb-4" />
                <Meuble class="" />
                <Annonceheading title="Loyer" Numbers="4" class="mb-4" />
                <Loyer class="" />
              
            </div>
            <div v-if="this.$store.state.countlocation==2" class="survey3">
                
                <Annonceheading title="À propos de l'espace" Numbers="4" class="mb-4" />
                <Espace class="" />
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
            <div v-if="this.$store.state.countlocation==4" class="survey4"> 
                <Annonceheading title="Vue" Numbers="14" class="mb-4" />
                <Vue class="" />
                <Annonceheading title="Chauffage" Numbers="15" class="mb-4" />
                <Chauffage class="" /> 
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
                <Annonceheading title="Type de maison" Numbers="20" class="mb-4" />
                <Typedemaison class="" />
                
                
                
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
import Disponibilite from './../Disponibilite'
import Box from './../Box'
import Cave from './../Cave'
import Parking from './../Parking'
import Espace from './../Espace'
import Meuble from './../Meuble'
import Annonceheading from './../Annonceheading'
import Addressedebien from './../Addressedebien'
import Salledebain from './../Salledebain'
import Toilettes from './../Toilettes'
import Exposition from './../Exposition'
import Terrasse from './../Terrasse'
import Balcons from './../Balcons'
import Chauffage from './../Chauffage'
import Vue from './../Vue'
import Etages from './../Etages'
import Consomations from './../Consomations'
import Annedeconstruction from './../Annedeconstruction'
import Veranda from './../Véranda'
import Plusdecrit from './../Plusdecritiéres'
import Typedemaison from './../Typedemaison'
// import Prixvente from './../Prixvente'
import Typedebienlocation from './../Typedebienlocation'

// import Typedebien from './../Typedebien'
import Loyer from './../Loyer'

export default {
  name: 'Maison',
  components: {
      Textarea,
      Visitewhatsapp,
      Multimedia,
      Box,
      Cave,
      Parking,
      Disponibilite,
      Annonceheading,
      Addressedebien,
      Meuble,
      Salledebain,
      Espace,
      Toilettes,
      Terrasse,
      Exposition,
      Balcons,
      Veranda,
      Etages,
      Vue,
      Chauffage,
      Consomations,
      Annedeconstruction,
      Plusdecrit,
      Typedemaison,
      Typedebienlocation,
      Loyer,
  },
      data() {
      return {
        pagesCount: 6,
		Disponibilite:false,
		nmbr:Number,
		ages:[],
		message:"",
        flag:false,
        text: "Loft,atelier",
		Pindex:[
            "16% terminé, continuez comme ça",
            "45% terminé, continuez comme ça",
            "61% terminé, continuez comme ça",
            "100% terminé, Bravo !!"
		],
		Pwidth:[
			"8%",
			"23%",
			"40%",
			"63%",
		],
		Incr:1,
      }

    },
    methods: {
        getPageCount: function(counter, value){
            this.pagesCount=counter;
            this.text = value;
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



		},
		previous:function(){
			console.log('this previous method is working')
			console.log(this.Incr)

			if (this.Incr>1){
				this.Incr=this.Incr-1
			}
			var pgbar=this.$refs.pgbar;
			pgbar.style.width=this.Pwidth[this.Incr]


		}

}
}
</script>
<style  scoped lang="scss">
@import "../../scss/main.scss";

</style>