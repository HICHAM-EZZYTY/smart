<template>
     <div class="surveycontainer">
            <!-- <router-view /> -->
<!-- 
            <div v-if="Incr==1"  class="survey1">

                <Annonceheading title="Type de bien" Numbers="1" class="mb-4" />
                <Typedebien class="" @pageCounter="getPageCount" />
                
               

            </div> -->


            <div v-if="this.$store.state.countlocation==1" class="survey2">
                <Typedebienlocation class="" @pageCounter="getPageCount"/>
                <Annonceheading title="l'adresse de bien" Numbers="1" class="mb-4 mt-8" />                
                <Addressedebien class="" />
                <Annonceheading title="Disponibilite" Numbers="2" class="mb-4 mt-8" />
                <Disponibilite class="" />
                <Annonceheading title="Parking" Numbers="3" class="mb-4" />
                <Parking class="" />
                <Annonceheading title="Cave" Numbers="4" class="mb-4" />
                <Cave class="" />
                <Annonceheading title="Box" Numbers="5" class="mb-4" />
                <Box class="" />
                <Annonceheading title="Loyer" Numbers="4" class="mb-4" />
                <Loyer class="" />

            </div>

            <div v-if="this.$store.state.countlocation==2" class="survey3">
                <!-- <Annonceheading title="Prix Vente" Numbers="6" class="mb-4" />
                <Prixbe class="" /> -->
                <Annonceheading title="Photo/Video/3D :" Numbers="7" class="mb-4" />
                <Multimedia class="" />
                <Annonceheading title="Visite whatsapp :" Numbers="8" class="mb-4" />
                <Visitewhatsapp class="" />
                <Annonceheading title="Texte de l’annonce  :" Numbers="9" class="mb-4" />
                <Textarea class="" />
                
            </div>
     </div>        
</template>

<script>


import Textarea  from './../Textarea'
import Visitewhatsapp  from './../Visitewhatsapp'
import Multimedia  from './../Multimedia'
// import Prixbe  from './../Prixbe'

import Box from './../Box'
import Cave from './../Cave'
import Parking from './../Parking'
import Loyer from './../Loyer'
import Disponibilite from './../Disponibilite'
import Annonceheading from './../Annonceheading'
import Addressedebien from './../Addressedebien'
import Typedebienlocation from './../Typedebienlocation'






export default {
  name: 'parking',
  components: {
      Textarea,
      Visitewhatsapp,
      Multimedia,
    //   Prixbe,
      Box,
      Cave,
      Parking,
      Annonceheading,
      Addressedebien,
      Disponibilite,
      Loyer,
      Typedebienlocation,

      
  },
      data() {
      return {
        pagesCount: 2,
		Viager:false,
		nmbr:Number,
		ages:[],
		message:"",
        flag:false,
        text: "Parking",
		Pindex:[
            "61% terminé, continuez comme ça",
            "100% terminé, Bravo !!"
		],
		Pwidth:[
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