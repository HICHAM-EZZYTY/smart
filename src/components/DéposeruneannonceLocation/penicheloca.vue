<template>
     <div class="surveycontainer">
            <!-- <router-view /> -->


            <div v-if="this.$store.state.countlocation==1" class="survey2">
                <Typedebienlocation class="" @pageCounter="getPageCount"/>
                <Annonceheading title="l'adresse de péniche" Numbers="1" class="mb-4 mt-8" />
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
                <LESPAC class="" />
                <Annonceheading title="Année" Numbers="5" class="mb-4" />
                <Annee class="" />
                <Annonceheading title="Longueur & largeur" Numbers="6" class="mb-4 mt-8" />
                <Longueur class="" />
                <Annonceheading title="Poids" Numbers="7" class="mb-4" />
                <Poids class="" />
                <Annonceheading title="informations générales" Numbers="8" class="mb-4" />
                <Informations class="" />
                
            </div>
             <div v-if="this.$store.state.countlocation==3" class="survey3">
                <Annonceheading title=" Type de moteur " Numbers="9" class="mb-4" />
                <Typemoteur class="" />
                <Annonceheading title=" Équipement Commun" Numbers="10" class="mb-4" />
                <Equipement class="" />
                
                
            </div>
            <div v-if="this.$store.state.countlocation==4" class="survey3">
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
import Loyer from './../Loyer'
import Textarea  from './../Textarea'
import Visitewhatsapp  from './../Visitewhatsapp'
import Multimedia  from './../Multimedia'
import Equipement from './../Equipement'
// import Prixbe  from './../Prixbe'
import Disponibilite from './../Disponibilite'
// import Balcons from './../Balcons'
import Typedebienlocation from './../Typedebienlocation'
// import Plusdecrit from './../Plusdecritiéres'
// import Chauffage from './../Chauffage'
import LESPAC from './../LESPAC'

import Meuble from './../Meuble'
import Annonceheading from './../Annonceheading'
import Addressedebien from './../Addressedebien'
import Annee from './../Annee'
import Longueur from './../Longueur'
import Poids from './../Poids'
import Informations from './../Informations'
import Typemoteur from './../Type_moteur'

export default {
  name: 'péniche',
  components: {
      Textarea,
      Visitewhatsapp,
      Multimedia,
      Informations,
      Disponibilite,
      Typedebienlocation,
    //   Prixbe,
    //   Balcons,
      Annonceheading,
      Addressedebien,
      Meuble,
      Equipement,
    //   Consomations,
    //   Plusdecrit,
    //   Chauffage,
    //   Disponibilite,
      Loyer,
      LESPAC,
      Annee,
      Longueur,
      Poids,
      Typemoteur,

      
  },
      data() {
      return {
        pagesCount: 4,
		Disponibilite:false,
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