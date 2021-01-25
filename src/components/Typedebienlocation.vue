<template>

<div class="typedebiencontainer grid grid-cols-1 w-4/5 gap-4   md:grid-cols-2 md:w-3/4 lg:w-3/5"> 
    <!-- <img src=""/> -->
    <router-link @click.native="selectedValue('Appartement')" to="/location/Appartementloca">
    <TypeDeBienSingle 
        class="typedebiensingle"
        :IsActive=" selected === 'Appartement' " 
        image="/assets/annonceemoji1.svg" 
        text="Appartement" 
        pagesCount="5" 
        nameofcomponent="Appartementloca"
         />
    </router-link>

    <router-link @click.native="selectedValue('Maison')" to="/location/Maisonloca">
    <TypeDeBienSingle 
        :IsActive=" selected === 'Maison' " 
        image="/assets/annonceemoji2.svg" 
        text="Maison" 
        pagesCount="6" 
        nameofcomponent="Maisonloca"
        @OnSelectChange="selectedValue" />
    </router-link>

    <router-link @click.native="selectedValue('Parking/Box/Cave')"  to="/location/Parkingloca">
    <TypeDeBienSingle 
        :IsActive=" selected === 'Parking/Box/Cave' " 
        image="/assets/Annonceemoji3.svg" 
        text="Parking/Box/Cave" 
        pagesCount="2" 
        nameofcomponent="Parkingloca"
        @OnSelectChange="selectedValue" />
    </router-link>

    <router-link @click.native="selectedValue('Loft')" to="/location/Loftloca">
    <TypeDeBienSingle 
        :IsActive=" selected === 'Loft,atelier' " 
        image="/assets/Annonceemoji4.svg" 
        text="Loft,atelier" 
        pagesCount="6" 
        nameofcomponent="Loftloca"
        @OnSelectChange="selectedValue" />
    </router-link>



    <router-link @click.native="selectedValue('place de port')" to="/location/Placedeportloca">
    <TypeDeBienSingle 
        :IsActive=" selected === 'place de port'" 
        image="/assets/Annonceemoji9.svg" 
        text="place de port" 
        pagesCount="2" 
        nameofcomponent="Placedeportloca"
        @OnSelectChange="selectedValue" />
    </router-link>

    <router-link @click.native="selectedValue('Bureau')"  to="/location/Bureauloca">
    <TypeDeBienSingle 
        :IsActive=" selected === 'Bureau' " 
        image="/assets/Annonceemoji10.svg" 
        text="Bureau" 
        pagesCount="4" 
        nameofcomponent="Bureauloca"
        @OnSelectChange="selectedValue" />
    </router-link>

    <router-link  @click.native="selectedValue('Terrain')" to="/location/Terrainloca">
    <TypeDeBienSingle 
        :IsActive=" selected === 'Terrain' " 
        image="/assets/Annonceemoji11.svg" 
        text="Terrain" 
        pagesCount="2" 
        nameofcomponent="Terrainloca"
        @OnSelectChange="selectedValue" />
    </router-link>

    <router-link  @click.native="selectedValue('Immeuble')" to="/location/Immeubleloca">    
    <TypeDeBienSingle 
        :IsActive=" selected === 'Immeuble & Batiment' " 
        image="/assets/Annonceemoji12.svg" 
        text="Immeuble & Batiment" 
        pagesCount="6" 
        nameofcomponent="Immeubleloca"
        @OnSelectChange="selectedValue" />
    </router-link>

    <router-link  @click.native="selectedValue('Péniche')" to="/location/penicheloca">    
    <TypeDeBienSingle 
        :IsActive=" selected === 'Péniche' "
        image="/assets/Annonceemoji13.svg" 
        text="péniche" 
        pagesCount="4" 
        nameofcomponent="penicheloca"
        @OnSelectChange="selectedValue" />
    </router-link>

    <router-link @click.native="selectedValue('Fonds de commercee')" to="/location/Fondsdecommerceloca">    
    <TypeDeBienSingle 
        :IsActive=" selected === 'Fonds de commercee' " 
        image="/assets/Annonceemoji14.svg" 
        text="Fonds de commerce" 
        pagesCount="3" 
        nameofcomponent="Fondsdecommerceloca"
        @OnSelectChange="selectedValue" />
    </router-link>

    <router-link @click.native="selectedValue('Local commerciale')" to="/location/Localcommercialloca">
    <TypeDeBienSingle 
        :IsActive=" selected === 'local commerciale' " 
        image="/assets/Annonceemoji15.svg" 
        text="local commerciale" 
        pagesCount="3" 
        nameofcomponent="Localcommercialloca"
        @OnSelectChange="selectedValue" />
    </router-link>

    <router-link @click.native="selectedValue('Château')" to="/location/Chateauloca">
    <TypeDeBienSingle 
        :IsActive=" selected === 'Château' " 
        image="/assets/Annonceemoji18.svg" 
        text="Château" 
        pagesCount="3" 
        nameofcomponent="Chateauloca"
        @OnSelectChange="selectedValue" />
    </router-link>

    <router-link @click.native="selectedValue('Hôtel Particulier')" to="/location/Hotelparticulierloca">
    <TypeDeBienSingle 
        :IsActive=" selected === 'Hôtel Particulier' " 
        image="/assets/Annonceemoji17.svg" 
        text="Hôtel Particulier" 
        pagesCount="3" 
        nameofcomponent="Hotelparticulierloca"
        @OnSelectChange="selectedValue" />
    </router-link>

    
    <router-link @click.native="selectedValue('Autre')" to="/location/Autreloca">
    <TypeDeBienSingle 
        :IsActive=" selected === 'Autre' " 
        image="/assets/Annonceemoji16.svg" 
        text="autre" 
        pagesCount="2" 
        nameofcomponent="Autreloca"
        @OnSelectChange="selectedValue" />
    </router-link>

</div>


</template>

<script>
import TypeDeBienSingle from "./TypeDeBienSinglelocation.vue"

export default {
    name: 'Typedebien',
    props: {
        msg: String
        
    },
    components:{
        TypeDeBienSingle
    },
    data() {
        return {
            selected: ""
        }
    },
    methods: {
        selectedValue: function(txt){
            console.log("hada text",txt)
            this.$store.state.nameOfbienlocation=txt
            console.log("hada chno kayn fi store",this.$store.state.nameOfbienlocation)
        },
        IsActive(arg){
            return this.selected == arg;
        },
    }

}
</script>

<style  scoped lang="scss">
@import "../scss/main.scss";



.typedebiencontainer {
    // margin-left: 20%;
    margin: 0 auto;
}

.Appart,
.Maison,
.Parking,
.Loft,
.Hôtel,
.Bureau,
.Chateu,
.Immeuble
{
    border: 1px solid #D4D6DC;
    height:4rem;
    border-radius: 5px;
    &:hover{
            border: 1px solid $main;

    }
}


.active{
    border: 1px solid $main;
}


label {
    font-family: $gr;
    font-size: 1rem;
    color: #000000;
    opacity: 0.8;
}

input[type="radio"]{
    display: none;
    position: absolute;
    left: 8px;
    height: 18px;
}

label:before{
    position: absolute;
    content: "";
    left: 12px;
    top: 25px;
    height: 18px;
    width: 18px;
    border: 1px solid #D4D6DC;
    border-radius: 50%;
    margin-right: 20px;
    align-self: center;
    cursor: pointer;

}


label:after{
    position: absolute;
    content: "";
    left: 16px;
    top: 29px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin-right: 20px;
    align-self: center;
    background-color: white;
    opacity: 0;
    cursor: pointer;
}

input:checked ~ label:before{
  background-color: $main;
  border: none;
}

input:checked ~ label:after {
    opacity: 1;
    border: 1px solid $main;
}

input:checked ~ div{
    border: 1px solid $main;
}

@media (min-width: 768px) { 
    .typedebiencontainer{
        margin-left:20%
    }

}
@media (min-width: 1024px) { 
    .typedebiencontainer{
        margin-left:23%
    }

}


</style>