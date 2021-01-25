<template>
<div class="wrapper">

            <div class="closeicon relative ">
        <img class="w-4" src="../assets/Pics/closeicon.svg" alt="icon de fermeture">
        </div>


    <div class="forgetpassword  relative w-5/6 m-auto m-0 mt-4 h-screen sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12">

        <div class="sketchmailing  relative m-auto m-0 mb-24">
        <img class="w-full absolute sktechmailingpic" src="../assets/Pics/chekmail.svg" alt="icon de vérification d'émail">
        </div>

        <h2 class="w-full m-auto m-0 text-center">Vérifiez votre email</h2>
        <h4 class="w-full m-auto m-0 text-center capitalize">nous avons envoyé une instruction de récupération de mot de passe à votre e-mail</h4>

        
        <button type="submit" class="btn-sbmt  m-auto m-0  block relative h-10 w-5/6 capitalize mt-4 mb-3">
                                Ok
        </button>

        
        <h6 class="">Retour à la page d'accueil</h6>
    

    </div>
   
</div>

</template>

<script>
export default {

}
</script>

<style  scoped lang="scss">
@import "../scss/main.scss";

.btn-sbmt{
    background-color: $main;
    border-radius: 3px;
    font-family: $um;
    color: white;
    font-size: 0.90rem;
}

.form-input {
        border: 0.8px solid #D1D8DA;
        border-radius: 5px;
        font-family: $ur;
        font-size:0.78rem;
        color:#E2E1E1
}


input:focus {
    outline: none;
        border:1px solid $main;
    box-shadow: 0 0 3px #719ECE;

}


.forgetpassword{

    h2{        
        font-family: $um;
        font-size: 1.2rem;
        line-height: 41px;
        text-transform: capitalize;
        color: #1C3A59;
    }
    h4{
        font-family: $ur;
        font-size: 0.8rem;
        line-height: 23px;
        text-align: center;
        color: #89909D;
    }
    h6{
        font-family: $ub;
        font-size: 0.75rem;
        line-height: 23px;
        text-align: center;
        color: #C8C9C9;
    }

}

.closeicon{
    float:right;
    top: 8px;
    right:1rem;
    cursor: pointer;
}

.sketchmailing{
    
    height: 8.2rem;
    width: 8.2rem;
    background: #F5F7FB;
    border-radius: 50%;
    top:4rem
}

.sktechmailingpic{
    position: absolute;
    left: 0%;
    top: 14%;
}

</style>