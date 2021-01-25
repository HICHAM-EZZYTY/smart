<template>
     <div class="surveycontainer">

            <div v-if="this.$store.state.count==1"  class="survey1">

                <!-- <Annonceheading title="Type de bien" Numbers="1" class="mb-4" />
                <Typedebien class="" @pageCounter="getPageCount" /> -->
                <Annonceheading title="l'adresse de bien" Numbers="1" class="mb-4 mt-8" />
                <Addressedebien class="" />
                <Annonceheading title="Viager" Numbers="2   " class="mb-4 mt-8" />
                <Viager class="" />

            </div>


            <div v-if="this.$store.state.count==2" class="survey2">
                <Annonceheading title="Travaux" Numbers="3" class="mb-4" />
                <Travaux class="" />
                <Annonceheading title="A prapos de l'espace" Numbers="4" class="mb-4" />
                <Salledebain class="" />
                <Annonceheading title="cuisime" Numbers="5" class="mb-4" />
                <Parking class="" />
                

            </div>

            <div v-if="this.$store.state.count==3" class="survey3">
                <Annonceheading title="Salle de bain" Numbers="6" class="mb-4" />
                <Salledebain class="" />
                <Annonceheading title="Toilettes" Numbers="7" class="mb-4" />
                <Toilettes class="" />
                <Annonceheading title="L'immeuble" Numbers="8" class="mb-4" />
                <Immeuble class="" />
                <Annonceheading title="Balcons" Numbers="9" class="mb-4" />
                <Balcons class="" />
                <Annonceheading title="Terrasse" Numbers="10" class="mb-4" />
                <Terrasse class="" />
                <Annonceheading title="Véranda" Numbers="11" class="mb-4" />
                <Veranda class="" />
                
                
            </div>
            <div v-if="this.$store.state.count==4" class="survey2">
                
                <Annonceheading title="Parking" Numbers="12" class="mb-4" />
                <Parking class="" />
                <Annonceheading title="Cave" Numbers="13" class="mb-4" />
                <Cave class="" />
                <Annonceheading title="Box" Numbers="14" class="mb-4" />
                <Box class="" />
                <Annonceheading title="Exposition" Numbers="15" class="mb-4" />
                <Exposition class="" />
                <Annonceheading title="Vue" Numbers="16" class="mb-4" />
                <Vue class="" />
                <Annonceheading title="Chauffage" Numbers="17" class="mb-4" />
                <Chauffage class="" />
            </div>
            <div v-if="this.$store.state.count==5" class="survey2">
                <Annonceheading title="Plus de critères " Numbers="18" class="mb-4" />
                <Plusdecrit class="" />
                <Annonceheading title="Consommation énergétique" Numbers="19" class="mb-4" />
                <Consomations class="" />
                <Annonceheading title="Emission de gaz à effet de serr" Numbers="18" class="mb-4 mt-4" />
                <Emissiongaz class="" />
                <Annonceheading title="Année de construction" Numbers="20" class="mb-4" />
                <Annedeconstruction class="" />
                <Annonceheading title="Copropriété " Numbers="21" class="mb-4" />
                <Coprop class="" />
            </div>
            <div v-if="this.$store.state.count==6" class="survey2">
                <Annonceheading title="Prix Vente" Numbers="22" class="mb-4" />
                <Prixvente class="" />
                <Annonceheading title="Photo/Video/3D :" Numbers="23" class="mb-4" />
                <Multimedia class="" />
                <Annonceheading title="Visite whatsapp :" Numbers="24" class="mb-4" />
                <Visitewhatsapp class="" />
                <Annonceheading title="Texte de l’annonce  :" Numbers="25" class="mb-4" />
                <Textarea class="" /> 
            </div>
     </div>        
</template>

<script>


import Textarea  from './../Textarea'
import Visitewhatsapp  from './../Visitewhatsapp'
import Multimedia  from './../Multimedia'
import Prixvente  from './../Prixvente'
import Viager from './../Viager'
import Salledebain from './../Salledebain'
import Toilettes from './../Toilettes'

import Box from './../Box'
import Cave from './../Cave'
import Parking from './../Parking'

import Travaux from './../Travaux'
// import Typedebien from './Typedebien'
import Annonceheading from './../Annonceheading'
import Addressedebien from './../Addressedebien'

import Veranda from './../Véranda'
import Terrasse from './../Terrasse'
import Balcons from './../Balcons'
import Immeuble from './../Immeuble'

import Chauffage from './../Chauffage'
import Vue from './../Vue'
import Exposition from './../Exposition'
import Coprop  from './../Copropriété '
import Annedeconstruction from './../Annedeconstruction'
import Consomations from './../Consomations'
import Plusdecrit from './../Plusdecritiéres'
import Emissiongaz from './../Emissiongaz'

export default {
  name: 'bien',
  components: {
      Textarea,
      Visitewhatsapp,
      Multimedia,
      Prixvente,
      Viager, 
      Box,
      Cave,
      Parking,
    //   Typedebien,
      Annonceheading,
      Addressedebien,
      Travaux,
      Salledebain,
      Toilettes,
      Veranda,
      Terrasse,
      Balcons,
      Immeuble,
      Chauffage,
      Vue,
      Exposition,
      Coprop,
      Annedeconstruction,
      Consomations,
      Plusdecrit,
      Emissiongaz



  },
      data() {
      return {
        pagesCount: 6,
		Viager:false,
		nmbr:Number,
		ages:[],
		message:"",
        flag:false,
        text: "bien",
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
			pgbar.style.width=this.Pwidth[this.pagesCount]
			console.log(this.Incr)



		},
		previous:function(){
			console.log('this previous method is working')
			console.log(this.Incr)

			if (this.Incr>1){
				this.Incr=this.Incr-1
			}
			var pgbar=this.$refs.pgbar;
			pgbar.style.width=this.Pwidth[this.pagesCount]


		}

}
}
</script>
<style  scoped lang="scss">
@import "../../scss/main.scss";

</style>