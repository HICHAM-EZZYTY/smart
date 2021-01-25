<template>
     <div class="surveycontainer">
            <!-- <router-view /> -->


            <div v-if="this.$store.state.count==1" class="survey2">
                <Typedebien class=""/>
                <Annonceheading title="l'adresse de péniche" Numbers="1" class="mb-4 mt-8" />
                <Addressedebien class="" />
                <Annonceheading title="Viager" Numbers="2" class="mb-4 mt-8" />
                <Viager class="" />
                <Annonceheading title="Travaux" Numbers="3" class="mb-4" />
                <Travaux class="" />

            </div>

            <div v-if="this.$store.state.count==2" class="survey3">
                <Annonceheading title="À propos de l'espace" Numbers="4" class="mb-4" />
                <LESPAC class="" />
                <Annonceheading title="Année" Numbers="5" class="mb-4" />
                <Annee class="" />
                <Annonceheading title="Largeur & largeur" Numbers="6" class="mb-4 mt-8" />
                <Longueurp class="" />
                <Annonceheading title="Poids" Numbers="7" class="mb-4" />
                <Poids class="" />
                <Annonceheading title="informations générales" Numbers="8" class="mb-4" />
                <Informations class="" />
                
            </div>
             <div v-if="this.$store.state.count==3" class="survey3">
                <Annonceheading title=" Type de moteur " Numbers="9" class="mb-4" />
                <Typemoteur class="" />
                <Annonceheading title=" Équipement Commun" Numbers="10" class="mb-4" />
                <Equipement class="" />
                <Annonceheading title="Prix " Numbers="11" class="mb-4" />
                <Prixbe class="" />
                
            </div>
            <div v-if="this.$store.state.count==4" class="survey3">
                <Annonceheading title="Photo/Video/3D :" Numbers="12" class="mb-4" />
                <Multimedia class="" />
                <Annonceheading title="Visite whatsapp :" Numbers="13" class="mb-4" />
                <Visitewhatsapp class="" />
                <Annonceheading title="Texte de l’annonce  :" Numbers="14" class="mb-4" />
                <Textarea class="" /> 
            </div>
     </div>        
</template>

<script>

// import Disponibilite from './../Disponibilite'
// import Loyer from './../Loyer'
import Textarea  from './../Textarea'
import Visitewhatsapp  from './../Visitewhatsapp'
import Multimedia  from './../Multimedia'
import Equipement from './../Equipement'
import Prixbe  from './../Prixbe'
import Viager from './../Viager'
// import Balcons from './../Balcons'
// import Consomations from './../Consomations'
// import Plusdecrit from './../Plusdecritiéres'
// import Chauffage from './../Chauffage'
import LESPAC from './../LESPAC'

import Travaux from './../Travaux'
import Annonceheading from './../Annonceheading'
import Addressedebien from './../Addressedebien'
import Annee from './../Annee'
import Longueurp from './../Longueurp'
import Poids from './../Poids'
import Informations from './../Informations'
import Typemoteur from './../Type_moteur'
import Typedebien from './../Typedebien'

export default {
  name: 'péniche',
  components: {
      Textarea,
      Visitewhatsapp,
      Multimedia,
      Informations,
      Viager,
      Prixbe,
    //   Balcons,
      Annonceheading,
      Addressedebien,
      Travaux,
      Equipement,
    //   Consomations,
    //   Plusdecrit,
    //   Chauffage,
    //   Disponibilite,
    //   Loyer,
      LESPAC,
      Annee,
      Longueurp,
      Poids,
      Typemoteur,
      Typedebien 

      
  },
      data() {
      return {
        pagesCount: 4,
		Viager:false,
		nmbr:Number,
		ages:[],
		message:"",
        flag:false,
        text: " péniche",
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