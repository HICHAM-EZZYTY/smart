<template>
     <div class="surveycontainer">
            <!-- <router-view /> -->

            <div v-if="this.$store.state.count==1" class="survey2">

                <Typedebien class=""/>
                <Annonceheading title="l'adresse de Loft/Atelier" Numbers="1" class="mb-4 mt-8" />
                <Addressedebien class="" />
                <Annonceheading title="Viager" Numbers="2" class="mb-4 mt-8" />
                <Viager class="" />
                <Annonceheading title="Travaux" Numbers="3" class="mb-4" />
                <Travaux class="" />
            
              
            </div>
            <div v-if="this.$store.state.count==2" class="survey3">
                
                <Annonceheading title="À propos de l'espace" Numbers="4" class="mb-4" />
                <Espace class="" />
                <Annonceheading title="Salle de bain" Numbers="5" class="mb-4" />
                <Salledebain class="" />
                <Annonceheading title="Toilettes" Numbers="6" class="mb-4" />
                <Toilettes class="" />
            </div>
             <div v-if="this.$store.state.count==3" class="survey3">
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
            <div v-if="this.$store.state.count==4" class="survey4"> 
                <Annonceheading title="Vue" Numbers="14" class="mb-4" />
                <Vue class="" />
                <Annonceheading title="Chauffage" Numbers="15" class="mb-4" />
                <Chauffage class="" /> 
                <Annonceheading title="Etages" Numbers="16" class="mb-4" />
                <Etages class="" />
                <Annonceheading title="Consommation énergétique" Numbers="17" class="mb-4" />
                <Consomations class="" />
                <Annonceheading title="Emission de gaz à effet de serr" Numbers="18" class="mb-4 mt-4" />
                <Emissiongaz class="" />
                <Annonceheading title="Année de construction" Numbers="19" class="mb-4 mt-6" />
                <Annedeconstruction class="" />
                
            </div>
            <div v-if="this.$store.state.count==5" class="survey3">  
                <Annonceheading title="Plus de critères " Numbers="20" class="mb-4" />
                <Plusdecrit class="" />
                <Annonceheading title="Type de loft" Numbers="21" class="mb-4" />
                <Typedemaison class="" />
                <Annonceheading title="Prix vente" Numbers="22" class="mb-4" />
                <Prixvente class="" />
                
                
            </div>

           <div v-if="this.$store.state.count==6" class="survey3"> 
                    <Annonceheading title="Photo/Video/3D :" Numbers="23" class="mb-4" />
                    <Multimedia class="" />
                    <Annonceheading title="Visite whatsapp :" Numbers="24" class="mb-4" />
                    <Visitewhatsapp class="" />
                    <Annonceheading title="Texte de l'annonce " Numbers="25" class="mb-4" />
                    <Textarea class="" />
            </div> 
     </div>        
</template>

<script>


import Textarea  from './../Textarea'
import Visitewhatsapp  from './../Visitewhatsapp'
import Multimedia  from './../Multimedia'
import Viager from './../Viager'
import Box from './../Box'
import Cave from './../Cave'
import Parking from './../Parking'
import Espace from './../Espace'
import Travaux from './../Travaux'
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
import Prixvente from './../Prixvente'
import Typedebien from './../Typedebien'
import Emissiongaz from './../Emissiongaz'

export default {
  name: 'Maison',
  components: {
      Textarea,
      Visitewhatsapp,
      Multimedia,
      Box,
      Cave,
      Parking,
      Viager,
      Annonceheading,
      Addressedebien,
      Travaux,
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
      Prixvente,
      Typedebien,
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
        text: "Maison",
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
        // getPageCount: function(counter, value){
        //     this.pagesCount=counter;
        //     this.text = value;
        // },
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