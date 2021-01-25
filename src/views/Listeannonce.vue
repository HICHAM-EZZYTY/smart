<template>
    <div>
        <div>
            <Navbarright />

        </div>
    
        <section id="annuaire" class="acul lg:h-48 flex items-center">
            <div class="container mx-auto mt-4 sm:mt-0 text-xs xl:w-4/5 ">
            <p class="mx-3 text-gray-600 mb-8 xl:mt-0 ">
                    Accueil | Annuaire des professionnels de l'immobilier
                    
                </p>
            
                <h1 class="mx-3 gilroy-bold-font">
                    Annuaire des professionnels de
                    <span class="text-blue-500">l'immobilier</span>
                </h1>
                <p class="mx-3 text-gray-600 mt-3 gilroy-regular-font">
                    Trouver des agences immobilières à côté de chez vous
                    <span class="font-semibold">plus de 375</span>
                </p>
            </div>
        </section>


        


       
        <section id="annuaire-liste" class="mt-8 container mx-auto xl:w-4/5">
            <div class="px-3 grid grid-cols-1 gap-1 sm:grid-cols-2 xl:grid-cols-5">
                <!-- Ville input start -->
                <div class="relative">
                    <img class="absolute custom-position" src="../assets/Pics/placeholder.svg" alt="place holder icon" />
                    <input type="text" class="pl-8 sm:mr-1 w-full xl:mb-0 mb-2 input-custom-color  h-10 rounded-md" placeholder="Ville , département ou région" />
                </div>
                <!-- Ville input end -->

                <!-- Quels pros input start -->
                <!-- <div class="relative">
                    <img class="absolute custom-home-position" src="../assets/Pics/home.svg" alt="Home icon" />
                    <input type="text" placeholder="Quels pros ?" class="pl-8 w-full xl:mb-0 mb-2 input-custom-color h-10 rounded-md" />
                </div> -->
            <div class="relative" >
                <button class="Quels pl-8 w-full xl:mb-0 mb-2 input-custom-color h-10 rounded-md" id="menu-btn"><span class="pros absolute">  Quels pros ?</span></button>
                <img class="absolute custom-home-position" src="../assets/Pics/home.svg" alt="Home icon" />
                <img class="absolute inset-y-0 right-0 mt-4 mr-2 " src="../assets/Pics/bx_bxs-down-arrow (1).svg" alt="dropdown" />
                   
                <div class=" w-full hidden input-custom-color flex-col rounded mt-1 p-2 text-sm w-32" id="dropdown">
                    <a  class="px-2 py-1 hover:bg-blue-300 hover:text-white rounded">Posts</a>
                    <a  class="px-2 py-1 hover:bg-blue-300 hover:text-white rounded">Profile</a>
                    <a  class="px-2 py-1 hover:bg-blue-300 hover:text-white rounded">Settings</a>
                </div>
            </div>

               
                <!-- Quels pros input end -->

                <!-- Qui input start -->
                <div class="relative">
                    <img class="absolute custom-position" src="../assets/Pics/realtor.svg" alt="Person icon" />
                    <input type="text" placeholder="Qui ?" class="pl-8 sm:mr-1 w-full xl:mb-0 mb-2 input-custom-color h-10  rounded-md" />
                </div>
                <!-- Qui input end -->

                <!-- Langues input start -->
                <div class="relative">
                    <img class="absolute custom-language-position" src="../assets/Pics/language.svg" alt="Language icon" />
                    <input type="text" placeholder="Langues parlées" class="pl-10 w-full xl:mb-0 mb-2  input-custom-color h-10 rounded-md" />
                </div>
                <!-- Langues input end -->

                <!-- button start -->
                <div class="relative">
                    <img class="absolute custom-loop-position pl-4" src="../assets/Pics/loupe.svg" alt="Loup icon">
                    <button class="Recher text-white rounded-md px-16 py-2 xl:w-full">Rechercher</button>
                </div>
                <!-- button end -->
            </div>
        </section>
        
    <div v-for="(x, index) in 10" :key="index">
        <section id="card" class="container mx-auto xl:w-4/5">
            <!-- Cards Start -->
            <div class="border-2 rounded mt-8">
                <div class="container md:px-24 mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
                    <div class="mb-5 flex flex-col items-center lg:flex-row">
                        <!-- logo de la societe -->
                        <img class="mr-5" src="../assets/Pics/la_grandiere.svg" alt="La Grandiere logo" />
                        <div class="societe-info">
                            <div class="grand text-lg ">
                                La grandiere immobilier
                            </div>
                            <p class="Agence">Agence immobilière</p>
                        </div>
                    </div>

                    <!-- feedback section -->
                    <div class="mb-5 feed-back flex flex-col items-center lg:items-start my-3.5">
                        <!-- stars -->
                       <div class="flex mb-1">
                            <img class="mr-0.5" src="../assets/Pics/star.svg" alt="feedback star">
                            <img class="mr-0.5" src="../assets/Pics/star.svg" alt="feedback star">
                            <img class="mr-0.5" src="../assets/Pics/star.svg" alt="feedback star">
                            <img class="mr-0.5" src="../assets/Pics/star.svg" alt="feedback star">
                            <img class="mr-3" src="../assets/Pics/star.svg" alt="feedback star">
                            <span class="avis">320 avis</span>
                        </div>
                        <div class="flex Courcelles  text-sm mb-1">
                            <p>107 rue de Courcelles</p>
                            <span class="font-black text-lg mx-2 -m-1">&bull;</span>
                            <span>75017 Paris</span>
                        </div>
                        <div class="flex">
                            <!-- Website link -->
                            <a href=""><img class="mr-1" src="../assets/Pics/global.svg" alt="website link image"></a>
                            <!-- Phone link icon -->
                            <a href=""><img class="h-4" src="../assets/Pics/telephone.svg" alt="phone icon number"></a>
                        </div>
                    </div>

                    <div class="flex">
                        <!-- contact agence -->
                        <div class="mb-1 relative flex items-center">
                            <img class="absolute custom-smile-position" src="../assets/Pics/happy 1 (1).svg" alt="happy face" />
                            <button class="Contactez custom-blue custom-text-color text-blue-500 py-4 pl-10 pr-3 rounded   text-sm md:mb-3.5">
                                Contactez l'agence
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Cards end -->
        </section>
         </div>
        <!-- end -->
        <div>
            <Footer />
        </div>
    </div>


</template>

<script>

      window.addEventListener('DOMContentLoaded', ()=> {
            const menuBtn = document.querySelector('#menu-btn')
            const dropdown = document.querySelector('#dropdown')
            
            menuBtn.addEventListener('click', () => {
                /* if(dropdown.classList.contains('hidden')){
                    dropdown.classList.remove('hidden');
                    dropdown.classList.add('flex');
                }else{
                    dropdown.classList.remove('flex')
                    dropdown.classList.add('hidden')
                } */

                dropdown.classList.toggle('hidden')
                dropdown.classList.toggle('flex')
            })

        })
    import Navbarright from "./../components/Navbarright";
    import Footer from './../components/Footer'

    // import Rechercher from "./../components/Rechercher";
    // import Cardslisteannonce from "./../components/Cardslisteannonce"

    export default {
        name: "Listeannonce",

        components: {
            Navbarright,
            Footer
            // Rechercher,
            // Cardslisteannonce,
        },
    }
</script>
<style lang="scss" scoped>
    @import "../scss/main.scss";

    // .acceueil {
    //     background: #F8F8F8;
    // }

    // p {
    //     font-size: 15px;
    //     color: #6E6E6E;
    //     font-family: $gm;
    // }

    // h1 {
    //     font-size: 34px;
    //     color: #262626;
    //     font-family: $gsb;

    // }

    // .immobilier {
    //     color: #2C8EEA;
    // }

    // .trouver {
    //     font-size: 15px;
    //     color: #6E6E6E;
    //     font-family: $gm;
    // }

    // start
.acul{
    background: #F8F8F8;
}
.Recher{
    background: #2C8EEA;
}
.grand{
    color: #515151;
    font-family: $gsb;
}
.avis{
    font-family: $gr;
    color: rgba(0, 0, 0, 0.8);
    font-size: 11px;

}
.Courcelles{
    font-family: $gsb;
    color: #868686;
    font-size: 12px;
}
.Agence{
    font-size: 15px;
    font-weight: 500;

     font-family: $gm;

    color: #2C8EEA;
}
.pros{
    left: 2.3rem;
    top: 13px;
}

    #annuaire .gilroy-bold-font {
        font-family: $gb, sans-serif;
        font-size: 2rem;
    }

    #annuaire .gilroy-regular-font {
        font-family: $gr, sans-serif;
    }

    #annuaire-liste .input-custom-color {
        background: #F8F8F8;
    }

    #annuaire-liste .custom-position {
        top: 15px;
        left: 10px;
    }

    #annuaire-liste ::-webkit-input-placeholder {
        color: #c4c5c7;
        // padding-left: 3px;
        font-family: $gr, sans-serif;
        font-size: 12px;
    }

    #annuaire-liste ::-moz-placeholder {
        color: #c4c5c7;
        padding-left: 35px;
        font-family: $gr, sans-serif;
    }

    #annuaire-liste :-ms-input-placeholder {
        color: #c4c5c7;
        padding-left: 35px;
        font-family: $gr, sans-serif;
    }

    .Quels{
        color: #c4c5c7;
        font-family:  $gr;
        font-size: 12px;
        padding-right: 45px;
        outline: none;
    }
    #dropdown{
        color: #c4c5c7;
        font-family:  $gr;
        font-size: 12px;
    }
    #annuaire-liste :-moz-placeholder {
        color: #c4c5c7;
        padding-left: 35px;
        font-family: $gr, sans-serif;
    }

    #annuaire-liste .custom-loop-position {
        top: 12px;
        // left: 40px;
    }

    #annuaire-liste .custom-home-position {
        top: 14px;
        left: 10px;
    }

    #annuaire-liste .custom-language-position {
        top: 11px;
        left: 10px;
        height: 17px;
    }

    #card .gilroy-bold-font {
        font-family: $gb, sans-serif;
    }

    #card .gilroy-regular-font {
        font-family: $gr, sans-serif;
    }

    #card .custom-smile-position {
        top: 15px;
        left: 5px;
    }

    #card .custom-blue {
        background-color: #DCEEFE;
    }

    #card .custom-text-color {
        color: #63ACF0;
        font-family: $gsb;
        outline : none;
    }

    #card .gilory-bold-font {
        font-family: $gb, sans-serif;
    }
    #card .gilory-regular {
        font-family: $gr, sans-serif;
    }

    /*# sourceMappingURL=style.css.map */
</style>

