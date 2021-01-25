<template>
     <div class="surveycontainer">
            <!-- <router-view /> -->


            <div v-if="this.$store.state.count==1" class="survey2">
                <Typedebien class=""/>
                <Annonceheading title="l'adresse de Terrain" Numbers="1" class="mb-4 mt-8" />
                <Addressedebien class="" />
                <Annonceheading title="Constructible" Numbers="2" class="mb-4 mt-8" />
                <Constructible class="" />
                <Annonceheading title="Surface" Numbers="3" class="mb-4" />
                <Surface class="" />
                <Annonceheading title="Prix " Numbers="4" class="mb-4" />
                <Prixterrain class="" />
            </div>
            <div v-if="this.$store.state.count==2" class="survey3">
                <Annonceheading title="Photo/Video/3D :" Numbers="5" class="mb-4" />
                <Multimedia class="" />
                <Annonceheading title="Visite whatsapp :" Numbers="6" class="mb-4" />
                <Visitewhatsapp class="" />
                <Annonceheading title="Texte de l’annonce  :" Numbers="7" class="mb-4" />
                <Textarea class="" /> 
            </div>
     </div>        
</template>

<script>


import Textarea  from './../Textarea'
import Visitewhatsapp  from './../Visitewhatsapp'
import Multimedia  from './../Multimedia'
import Prixterrain  from './../Prixterrain'
import Constructible from './../Constructible'
// import Balcons from './../Balcons'
// import Consomations from './../Consomations'
// import Plusdecrit from './../Plusdecritiéres'
// import Chauffage from './../Chauffage'


import Surface from './../Surface'
import Typedebien from './../Typedebien'
import Annonceheading from './../Annonceheading'
import Addressedebien from './../Addressedebien'





export default {
  name: 'Terrain',
  components: {
      Visitewhatsapp,
      Constructible, 
      Textarea, 
      Multimedia,
      Prixterrain,
    //   Balcons,
      Annonceheading,
      Addressedebien,
      Surface,
      Typedebien
    //   Consomations,
    //   Plusdecrit,
    //   Chauffage
      
  },
      data() {
      return {
        pagesCount: 2,
		Constructible:false,
		nmbr:Number,
		ages:[],
		message:"",
        flag:false,
        text: "Terrain",
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