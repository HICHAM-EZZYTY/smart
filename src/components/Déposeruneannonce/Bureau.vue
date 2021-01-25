<template>
     <div class="surveycontainer">
            <!-- <router-view /> -->


            <div v-if="this.$store.state.count==1" class="survey2">
                
                <Typedebien class=""/>

                <Annonceheading title="l'adresse de bureau" Numbers="1" class="mb-4 mt-8" />
                <Addressedebien class="" />
                <Annonceheading title="Viager" Numbers="2" class="mb-4 mt-8" />
                <Viager class="" />
                <Annonceheading title="Travaux" Numbers="3" class="mb-4" />
                <Travaux class="" />

            </div>

            <div v-if="this.$store.state.count==2" class="survey3">
                <Annonceheading title="À propos de l'espace" Numbers="4" class="mb-4" />
                <Aproposde class="" />
                <Annonceheading title="Chauffage" Numbers="5" class="mb-4" />
                <Chauffage class="" />
                <Annonceheading title="Consommation énergétique" Numbers="6" class="mb-4" />
                <Consomations class="" />
                <Annonceheading title="Emission de gaz à effet de serr" Numbers="7" class="mb-4 mt-4" />
                <Emissiongaz class="" />
                <Annonceheading title="Prix Vente" Numbers="8" class="mb-4 mt-6" />
                <Prixbe class="" />
            </div>
             <div v-if="this.$store.state.count==3" class="survey3">
                <Annonceheading title="Plus de critères " Numbers="9" class="mb-4" />
                <Plusdecrit class="" />
                <Annonceheading title="Meublé" Numbers="10" class="mb-4 mt-8" />
                <Meuble class="" />
            </div>
            <div v-if="this.$store.state.count==4" class="survey3">
                <Annonceheading title="Photo/Video/3D :" Numbers="11" class="mb-4" />
                <Multimedia class="" />
                <Annonceheading title="Visite whatsapp :" Numbers="12" class="mb-4" />
                <Visitewhatsapp class="" />
                <Annonceheading title="Texte de l’annonce  :" Numbers="13" class="mb-4" />
                <Textarea class="" /> 
            </div>
     </div>        
</template>

<script>


import Textarea  from './../Textarea'
import Visitewhatsapp  from './../Visitewhatsapp'
import Multimedia  from './../Multimedia'
import Prixbe  from './../Prixbe'
import Viager from './../Viager'
import Aproposde from './../Aproposde'
import Consomations from './../Consomations'
import Plusdecrit from './../Plusdecritiéres'
import Chauffage from './../Chauffage'


import Travaux from './../Travaux'
import Typedebien from './../Typedebien'
import Annonceheading from './../Annonceheading'
import Addressedebien from './../Addressedebien'
import Meuble from './../Meuble'
import Emissiongaz from './../Emissiongaz'




export default {
  name: 'Bureau',
  components: {
      Textarea,
      Visitewhatsapp,
      Multimedia,
      Prixbe,
      Viager,  
      Aproposde,
      Annonceheading,
      Addressedebien,
      Travaux,
      Consomations,
      Plusdecrit,
      Chauffage,
      Typedebien,
      Meuble,
      Emissiongaz
      
  },
      data() {
      return {
        pagesCount: 2,
		Viager:false,
		nmbr:Number,
		ages:[],
		message:"",
        flag:false,
        text: "Bureau",
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