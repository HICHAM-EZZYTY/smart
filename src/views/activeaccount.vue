<template>
<div class="wrapper">

            <div class="closeicon relative ">
        <img class="w-4" src="../assets/Pics/closeicon.svg" alt="icon de fermeture">
        </div>


    <div class="forgetpassword  relative w-5/6 m-auto m-0 mt-4 h-screen sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12">

        <div class="sketchmailing  relative m-auto m-0 mb-24">
        <img class="w-full absolute sktechmailingpic" src="../assets/Pics/activateaccount.svg" alt="icon de nouveu mot de passe">
        </div>

        <h2 class="w-full m-auto m-0 text-center">Activer votre compte</h2>
        <h4 class="w-full m-auto m-0 text-center mb-2">Un email d'activation a été envoyé à votre email<br>Veuillez cliquer sur le lien dans l'e-mail pour activer votre compte</h4>

        <p class="w-full m-auto m-0 text-center mb-4">T'as pas reçu l'émail ? <span>Renvoyer</span> ou changer l'addresse émail</p>


        <input id="pswd" type="password" class="form-input   m-auto m-0  block relative w-5/6 pt-2 pb-2 pl-4 pl-7  sm:text-sm sm:leading-5 mt-2 mb-3" placeholder="Changer l'addresse émail">

        
        <button type="submit" class="btn-sbmt  m-auto m-0  block relative h-10 w-5/6 capitalize mb-3">
                                Renvoyer maintenant
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
    p{
        font-family: $ur;
        font-size: 0.8rem;
        line-height: 23px;
        text-align: center;
        color: #89909D;
    }
    span{

        font-family: $ub;
        color:$main;
        cursor: pointer;


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
    top: 3px;
}

</style>