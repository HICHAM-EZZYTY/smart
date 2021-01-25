<template>
     <div class="surveycontainer">
            <!-- <router-view /> -->


            <div v-if="this.$store.state.countlocation==1" class="survey2">
                <!-- <Typedebienlocation class="" @pageCounter="getPageCount"/> -->
                <Annonceheading title="l'adresse de bien" Numbers="1" class="mb-4 mt-8" />
                <Addressedebien class="" />
                <Annonceheading title="Type d'annonce" Numbers="2" class="mb-4 mt-8" />
                <Typedannonce class="" />
                <Annonceheading title="Colocs déjà présents" Numbers="3" class="mb-4" />
                <Colocsdeja class="" />
                <Annonceheading title="Type de logement" Numbers="4" class="mb-4" />
                <Typedelogement class="" />
                <Annonceheading title="Surface" Numbers="5" class="mb-4" />
                <SurfacePlace class="" />
                <Annonceheading title="Nombre de pièces" Numbers="6" class="mb-4" />
                <Nombredepieces class="" />

            </div>

            <div v-if="this.$store.state.countlocation==2" class="survey3">
                <Annonceheading title="Accessibilité handicapé" Numbers="7" class="mb-4" />
                <Meuble class="" />
                <Annonceheading title="Animaux acceptés" Numbers="8" class="mb-4" />
                <Animaux class="" />
                
                <Annonceheading title="Vous êtes un(e)" Numbers="9" class="mb-4" />
                <Vousetes class="" />
                <Annonceheading title="Exigence" Numbers="10" class="mb-4 mt-8" />
                <Exigence class="" />
                <Annonceheading title="Langues parlées " Numbers="11" class="mb-4" />
                <Langues class="" />
                <Annonceheading title="Fumeur " Numbers="12" class="mb-4" />
                <Fumeur class="" />

                 
             
                
            </div>
             <div v-if="this.$store.state.countlocation==3" class="survey3">
                <Annonceheading title=" Chambre " Numbers="13" class="mb-4" />
                <Chambre class="" />
                <Annonceheading title="Disponibilité" Numbers="14" class="mb-4" />
                <DisponibilColocation class="" />

                <Annonceheading title="Equipements supplémentaires" Numbers="15" class="mb-4" />
                <Equipements class="" />
                <Annonceheading title=" Loyer" Numbers="16" class="mb-4" />
                <Loyer class="" />
                
            </div>
            <div v-if="this.$store.state.countlocation==4" class="survey3">
                <Annonceheading title="Photo/Video/3D :" Numbers="17" class="mb-4" />
                <Multimedia class="" />
                <Annonceheading title="Visite whatsapp :" Numbers="18" class="mb-4" />
                <Visitewhatsapp class="" />
                <Annonceheading title="Texte de l’annonce  :" Numbers="19" class="mb-4" />
                <Textarea class="" /> 
            </div>
     </div>        
</template>

<script>

// import Typedannonce from './../Typedannonce'
import Loyer from './../Loyer'
import Textarea  from './../Textarea'
import Visitewhatsapp  from './../Visitewhatsapp'
import Multimedia  from './../Multimedia'
// import Equipement from './../Equipement'
import Typedelogement  from './../Typedelogement'
import Typedannonce from './../Typedannonce'
import Colocsdeja from './../Colocsdeja'
import SurfacePlace from './../SurfacePlace'
import Nombredepieces from './../Nombredepieces'
import Fumeur from './../Fumeur'
// import LESPAC from './../LESPAC'

import Animaux from './../Animaux'
import Meuble from './../Meuble'
import Annonceheading from './../Annonceheading'
import Addressedebien from './../Addressedebien'
import Vousetes from './../Vousetes'
import Exigence from './../Exigence'
import Langues from './../Langues'
import Equipements from './../Equipements'
import Chambre from './../Chambre'
import DisponibilColocation from './../DisponibilColocation'

export default {
  name: 'péniche',
  components: {
      Textarea,
      Visitewhatsapp,
      Multimedia,
      Equipements,
      Typedannonce,
      Typedelogement,
      Colocsdeja,
      Annonceheading,
      Addressedebien,
      Meuble,
    //   Equipement,
      SurfacePlace,
      Nombredepieces,
      Fumeur,
    //   Typedannonce,
      Loyer,
    //   LESPAC,
      Vousetes,
      Exigence,
      Langues,
      Chambre,
      DisponibilColocation,
      Animaux

      
  },
      data() {
      return {
        pagesCount: 4,
		Typedannonce:false,
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