<template>

    <div ref="desc" class="description">
        <h1 v-if="!readMoreActivated">
            {{obj.description}}
        </h1>
        <h1 v-if="readMoreActivated">
            {{obj.description}}
        </h1>
        <span  v-if="!readMoreActivated" @click="activateReadMore">Plus ... </span>
        <span v-if="readMoreActivated" @click="readMoreActivated=false">Moins ... </span>

        <div class="badgecontainer">
            <h4>Contient :</h4>
            <div class="badges flex flex-wrap">
                <div class="pieces mt-4 mr-3 flex relative">
                    <img src="../../assets/Pics/descriptiondoor.svg">
                    <p>9 piéces </p>
                </div>

                <div class="chambres mt-4 mr-3 flex relative">
                    <img src="../../assets/Pics/descriptionchambre.svg">
                    <p>4 chambres </p>
                </div>

                <div class="salledebain mt-4 mr-3 flex relative">
                    <img src="../../assets/Pics/descriptionbed.svg">
                    <p>3 salles de bain </p>
                </div>

                <div class="surface mt-4 mr-3 flex relative">
                    <img src="../../assets/Pics/descriptionsurface.svg">
                    <p>40,01m²</p>
                </div>

            </div>
            <div class="listofdescs mt-6 grid md:grid-cols-2 lg:grid-cols-3">
       
                <div class="desc">
                    <p>-  Surface de 40,01m²</p>
                    <p>-  9 Pièces</p>
                    <p>-   Année de construction 2008</p>
                    <p>-    Adapté PMR</p>
                </div>

                
                <div class="desc">
                    <p>-  Bâtiment de 8 étages</p>
                    <p>-  1 Chambre</p>
                    <p>-   Au 3ème étage</p>
                    <p>-    Cuisine américaine</p>
                </div>

            </div>

            <div class="indexofgaz  mt-6">
                <h5>Indice d'émission de gaz à effet de serre</h5>
                <div class="grades mt-4 mb-8 flex flex-wrap">
                    <div class="badgerate mr-2">A</div>
                    <div class="gradesofcolors mr-2 grid grid-cols-7">
                        <div id="color1"></div>
                        <div id="color2"></div>
                        <div id="color3"></div>
                        <div id="color4"></div>
                        <div id="color5"></div>
                        <div id="color6"></div>
                        <div id="color7"></div>
                    </div>
                    <h6 style="margin-bottom:18px;padding-top:5px;padding-bottom:5px">30 kgeqCO2/m².an</h6>
                </div>
            </div>

        </div>
    </div>
  
</template>

<script>
export default {
    data() {
      return {
          paragraphdescription:"Vente appartement Type 2 avec BOX FERME Quartier RABATAU / ROUET 13008 Marseille EXCLUSIVITÉ. Grand et beau Type 2 avec TERRASSE et BOX fermé en sous-sol, dans une belle résidence de standing de 2008, fermée et sécurisée. En parfait état, et très bien situé à proximité des commerces, métro, accès autoroutier, vous serez séduit par sa luminosité. Au 3ème étage avec ascenseur, ce charmant type 2 est très bien agencé, avec son séjour exposé",
          readMoreActivated:false,
      }
    }, 
    props: ['obj', 'description'],
    methods:{
        activateReadMore(){
        this.readMoreActivated = true;
        this.$refs.desc.style.overflowY="scroll"
    },
    created: function(){
        console.log(this.obj)
    }
}
}
</script>

<style  lang="scss" scoped>
@import "../../scss/main.scss";
.grades{
    h6{
        font-family: $um;
        color: white;
        font-size: 0.89rem;
        background-color: #89C1F4;
        padding-left: 0.7rem;
        padding-right: 0.7rem;
        padding-top: 3px;
        border-radius: 4px;
    }
}
.gradesofcolors{
    height: 1.5rem;
    width:10rem; 
    margin-top: 0.42rem;
}
#color1{
    background-color: #89C1F4;
}
#color2{
    background-color: #70B0EC;
}
#color3{
    background-color: #50A0EB;
}
#color4{
    background-color: #3592EA;
}
#color5{
    background-color: #2585DF;
}
#color6{
    background-color: #1A69B4;
}
#color7{
    background-color: #144574;
}
.badgerate{
    width: 2rem;
    height: 2rem;
    border-radius: 6px;
    background-color: #89C1F4;
    color:white;
    text-align: center;
    font-family: $gm;
    font-size: 1.3rem;
}
.indexofgaz{
    h5{
        font-family: $um;
        color:#A8A8A8;
        font-size: 0.9rem;
    }
}
// customize scrollbar 
.description::-webkit-scrollbar {
  width: 0.3em;
  border-radius: 4px;
}
 
.description::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(195, 197, 199, 0.98);
  border-radius: 4px;
}
 
.description::-webkit-scrollbar-thumb {
  background-color: $main;
  border-radius: 4px;
}
.description{
    height: 21rem;
    width: 95%
    // overflow-y: scroll;
}
.desc{
    p{
        font-family: $ur;
        color:#5D5D5D;
        font-size: 0.86rem;
        line-height: 1.6rem;
    }
}
.surface{
    background-color:#F6F6F6;
    height: 2rem;
    width: 6.5rem;
    border-radius: 25px;
    text-align: center;
    p{
    color:#5E5D5D;
    font-family: $ur;
    font-size: 0.88rem;
    position: absolute;
    left: 36px;
    top: 4px;
    }
    img{
        height:1rem;
        position: absolute;
        left: 14px;
        top: 6px;
    }
}
.salledebain{
    background-color:#F6F6F6;
    height: 2rem;
    width: 9rem;
    border-radius: 25px;
    text-align: center;
    p{
    color:#5E5D5D;
    font-family: $ur;
    font-size: 0.88rem;
    position: absolute;
    left: 36px;
    top: 4px;
    }
    img{
        height:1.2rem;
        position: absolute;
        left: 11px;
        top: 6px;
    }
}
.chambres{
    background-color:#F6F6F6;
    height: 2rem;
    width: 8rem;
    border-radius: 25px;
    text-align: center;
      p{
    color:#5E5D5D;
    font-family: $ur;
    font-size: 0.88rem;
    position: absolute;
    left: 36px;
    top: 4px;
    }
    img{
        height:1.2rem;
        position: absolute;
        left: 11px;
        top: 6px;
    }
}
.pieces{
    background-color:#F6F6F6;
    height: 2rem;
    width: 7rem;
    border-radius: 25px;
    text-align: center;
    p{
    color:#5E5D5D;
    font-family: $ur;
    font-size: 0.88rem;
    position: absolute;
    left: 36px;
    top: 4px;
    }
    img{
        height:1.2rem;
        position: absolute;
        left: 11px;
        top: 6px;
    }
}
.badgecontainer{
    margin-top: 1rem;
h4{
        color: #8A8A8A;
        text-transform: capitalize;
        font-size: 0.95rem;
        font-family: $um;
}
}
    h1{
        font-family: $um;
        text-transform: lowercase;
        color: rgba(0, 0, 0, 0.6);
        font-size: 0.83rem;
        line-height: 1.6rem;
        margin-bottom: 0.5rem;
    }
    span{
        color:#2C8EEA;
        text-transform: capitalize;
        font-size: 0.85rem;
        font-family: $um;
        cursor: pointer;
    }
@media (min-width: 320px) { 
    .grades{
        h6{
            margin-top: 0.6rem;
        }
    }
}
@media (min-width: 393px) { 
     .grades{
        h6{
            margin-top: 0rem;
        }
    }
}
</style>