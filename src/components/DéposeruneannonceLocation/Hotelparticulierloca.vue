<template>
     <div class="surveycontainer">
            <!-- <router-view /> -->

            <div v-if="this.$store.state.count==1" class="survey2">
                <Typedebienlocation class="" @pageCounter="getPageCount"/>
                <Annonceheading title="l'adresse de Hôtel Particulier" Numbers="1" class="mb-4 mt-8" />
                <Addressedebien class="" />
                <Annonceheading title="Viager" Numbers="2" class="mb-4 mt-8" />
                <Viager class="" />
                <Annonceheading title="Travaux" Numbers="3" class="mb-4" />
                <Travaux class="" />
            </div>
            <div v-if="this.$store.state.count==2" class="survey3">
                <Annonceheading title="Secteur d’activité" Numbers="4" class="mb-4" />
                <Secteur class="" />
                <Annonceheading title="les activités" Numbers="5" class="mb-4" />
                <Lesactivites class="" />
                <Annonceheading title="Type d'emplacement" Numbers="6" class="mb-4" />
                <Typedemplacement class="" />
                <Annonceheading title="Données financières" Numbers="7" class="mb-4" />
                <Donnees class="" />
                <Annonceheading title="Prix honoraires inclus & loyer " Numbers="8" class="mb-4" />
                <Prixhonoraires class="" />
            </div>
            <div v-if="this.$store.state.count==3" class="survey3">
                <Annonceheading title="Prix" Numbers="9" class="mb-4" />
                <Prixbe class="" />
                <Annonceheading title="Photo/Video/3D :" Numbers="10" class="mb-4" />
                <Multimedia class="" />
                <Annonceheading title="Visite whatsapp :" Numbers="11" class="mb-4" />
                <Visitewhatsapp class="" />
                <Annonceheading title="Texte de l’annonce  :" Numbers="12" class="mb-4" />
                <Textarea class="" /> 
            </div>
     </div>        
</template>

<script>


import Textarea  from './../Textarea'
import Visitewhatsapp  from './../Visitewhatsapp'
import Multimedia  from './../Multimedia'
import Donnees  from './../Donnees'
import Secteur from './../Secteur'
import Typedemplacement from './../Typedemplacement'
import Lesactivites from './../Lesactivites'
import Prixbe from './../Prixbe'
import Travaux from './../Travaux'
import Viager from './../Viager'
// import Amodiation from './../Amodiation'
import Annonceheading from './../Annonceheading'
import Addressedebien from './../Addressedebien'
import Prixhonoraires from './../Prixhonoraires'
import Typedebienlocation from './../Typedebienlocation'





export default {
  name: 'Hotelparticulierloca',
  components: {
      Textarea,
      Visitewhatsapp,
      Multimedia,
      Donnees,
      Secteur,
      Annonceheading,
      Addressedebien,
      Travaux,
      Typedemplacement,
      Lesactivites,
      Prixhonoraires,
      Prixbe,
      Viager,
      Typedebienlocation
    //   Amodiation
      
  },
      data() {
      return {
        pagesCount: 3,
		Viager:false,
		nmbr:Number,
		ages:[],
		message:"",
        flag:false,
        text: "commerce",
		Pindex:[
            "16% terminé, continuez comme ça",
            "30% terminé, continuez comme ça",
            "45% terminé, continuez comme ça",
            "61% terminé, continuez comme ça",
            "100% terminé, Bravo !!"
		],
		Pwidth:[
            "8%",
            "30%",
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