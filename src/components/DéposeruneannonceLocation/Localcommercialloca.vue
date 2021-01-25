<template>
     <div class="surveycontainer">
            <!-- <router-view /> -->


            <div v-if="this.$store.state.countlocation==1" class="survey2">
                <Typedebienlocation class="" @pageCounter="getPageCount"/>
                <Annonceheading title="L'adresse de local commerciale" Numbers="1" class="mb-4 mt-8" />
                <Addressedebien class="" />
                <Annonceheading title="Disponibilite" Numbers="2" class="mb-4 mt-8" />
                <Disponibilite class="" />
                <Annonceheading title="Loyer" Numbers="3" class="mb-4" />
                <Loyer class="" />

            </div>

            <div v-if="this.$store.state.countlocation==2" class="survey3">
                <Annonceheading title="Secteur d’activité " Numbers="4" class="mb-1" />
                <Secteuractivite class="" />
                <Annonceheading title="Les activités  " Numbers="5" class="mb-1" />
                <Activite class="" />
                <Annonceheading title="Type d'emplacement  " Numbers="6" class="mb-1" />
                <Typeemplacement class="" />
                <Annonceheading title="Données financières  " Numbers="7" class="mb-1" />
                <Donnees class="" />



            </div>

            <div v-if="this.$store.state.countlocation==3" class="survey3">
                <Annonceheading title="Photo/Video/3D :" Numbers="8" class="mb-4" />
                <Multimedia class="" />
                <Annonceheading title="Visite whatsapp :" Numbers="9" class="mb-4" />
                <Visitewhatsapp class="" />
                <Annonceheading title="Texte de l’annonce  :" Numbers="10" class="mb-4" />
                <Textarea class="" /> 
            </div>
     </div>        
</template>

<script>

// import Disponibilite from './../Disponibilite'
import Loyer from './../Loyerlocation'
import Textarea  from './../Textarea'
import Visitewhatsapp  from './../Visitewhatsapp'
import Multimedia  from './../Multimedia'
import Disponibilite from './../Disponibilite'
import Typedebienlocation from './../Typedebienlocation'
import Secteuractivite from './../Secteuractivité'
import Activite from './../Activité'
import Typeemplacement from './../Typeemplacement'

import Donnees from './../Donnees'







import Annonceheading from './../Annonceheading'
import Addressedebien from './../Addressedebien'


export default {
  name: 'péniche',
  components: {
      Textarea,
      Visitewhatsapp,
      Multimedia,
      Disponibilite,
      Typedebienlocation,
      Annonceheading,
      Addressedebien,
      Loyer,
      Secteuractivite,
      Activite,
      Typeemplacement,
      Donnees

      
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