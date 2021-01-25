<template>

    <div class="multimedia m-0 m-auto  mb-6 w-4/5 sm:ml-0 md:w-3/4 md:ml-32 lg:w-3/5  ">

        <div class="relative browse lock ">
            
            <input  ref="realfile" type="file" hidden="hidden">
            <img  @click="browsing" class="block relative m-0 m-auto mt-6" src="../assets/Pics/Annonceupload.svg" alt="icon que répresente le choix de particulier">
            <p class="text-center mt-1">JPG, PNG  Limite 15 images</p>
            <h3 class="text-center mt-1">Faites glisser et déposez votre image ici</h3>
            <button class="block relative  m-0 m-auto mt-2" type="button">Choisir un fichier</button>

        </div>

        <div class="ml grid grid-cols-1  mt-6 md:w-4/5 md:grid-cols-2 md:gap-4">

            <div class="video">
                <h4 class="mb-3">Video</h4>
                <div class="flex w-full">
						<span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img class="w-8" src="../assets/Pics/Annoncevideo.svg"></span>
						<input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
						name="field_name" class="border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="lien hypertextes"/>
				</div>

            </div>

            <div class=" mt-3 md:mt-0">
                <h4 class="mb-3">Visite 3D </h4>
                <div class="flex w-full">
						<span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap"><img class="w-8" src="../assets/Pics/Annoncevideo3d.svg"></span>
						<input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
						name="field_name" class="border border-2 rounded-r px-4 py-2 w-full" type="text" placeholder="lien hypertextes"/>
				</div>

               
            </div>

        </div>


        <div class="ps h-32 p-2 flex-col sm:flex-row sm:pt-4 md:h-16 flex w-full mt-6">

            <div class="emoji mr-2 mt-2 sm:mt-0">
                <img class="w-8" src="../assets/Pics/Annoncemoji.svg">
            </div>

            <h6>PS : On accepte uniquement les liens hypertextes (Pas de stockage dans note base)</h6>


        </div>
        
    </div>
  
</template>

<script>
export default {
    name: 'Nav',
    data() {
      return {
          isActive:false,
      }
    },
    methods: {
        browsing:function(){
        var browse=this.$refs.realfile;
        browse.click();
    },
    }

}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";

// .multimedia{
//     position: relative;
//     left: 2rem;
// }
.ps{
    background-color: #D4D7DF;
    padding-left: 1rem;
    border-radius: 10px;
}

h4{
    font-family: $gm;
    font-size: 1rem;
    color:#8C92A4;  
}

h6{
    font-family: $gm;
    color:#8C92A4;
    font-size: 1rem;
}
button{

    background-color:$main;
    font-family: $gsb;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    width: 10rem;
    height: 2.5rem;
    border-radius: 8px;

}
.browse{
    border: 1.3px dashed #2C8EEA;
    border-radius: 4px;
    height: 14rem;
    cursor: pointer;
    h3{
        font-family: $gm;
        font-size: 0.92rem;
        color: #8C92A4;
    span{
        font-family: $ub;
        color:#2C8EEA;
    }
    
    }
    p{
        font-family: $gm;
        font-size: 0.8rem;
        color:#8C92A4;
    }
}

#ageinpt{
	border-radius: 8px;	
	text-align: center;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
	border: 1px solid $main;
	color:$main;
}



input {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-top-left-radius: 0px;

}
span {
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
    border-right: 0.2px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;

}

@media (min-width: 768px) { 
    .multimedia{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .multimedia{
        margin-left:23%
    }

}

</style>