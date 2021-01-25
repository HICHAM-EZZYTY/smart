<template>
  <div class="Container">
    <div class="menubutton">
      <!-- <img id="domore" @click="Menu" src="../assets/Pics/doMorebtn.svg" alt="logo"> -->
    </div>
    <!-- Starting of the menu bakcground  -->
    <div ref="menu" class="menubackground" v-bind:class="{ show: isActive }">
      <a @click="Close">
        <i class="fas fa-times close" v-on:click="Close" id="close"></i>
      </a>

      <ul id="menu2">
        <li id="déménageur">
          <router-link to="/Colocation">Déposer une annonce colocation</router-link>
        </li>
        <li id="déménageur">
          <router-link to="/location">Déposer une annonce location</router-link>
        </li>
        <li id="déménageur">
          <router-link to="/vente">Déposer une annonce vente</router-link>
        </li>
        <li id="déménageur">
          <router-link to="/neuf">Déposer une annonce neuf</router-link>
        </li>
        <li id="déménageur"><a href="#">Déposer une annonce neuf</a></li>
        <li id="déménageur">
          <router-link to="/ads">Rechercher des annonce</router-link>
        </li>
        <li id="déménageur">
          <router-link to="/adsdétails">Détail d'une annonce</router-link>
        </li>
        <li id="déménageur">
          <router-link to="/register">Incsription</router-link>
        </li>
        <li id="déménageur">
          <router-link to="/login">S'identifier</router-link>
        </li>
      </ul>
    </div>
    <!-- Page Layout Start -->
    <div class="h-screen grid grid-cols-1 sm:grid-cols-3">
      <div class="w-4/5 col-span-2 container pl-16 md:pl-20 mt-4 custom-right-p">
        <!-- Logo -->
        <img class="mt-4 mb-10" src="../assets/Pics/Logo.svg" alt="logo de plateforme smartzone">
        <h1 class="whitespace-nowrap mb-2">Créez votre compte gratuit</h1>
        <div class="hidden md:block spliter mt-4 mb-2 custom-width"></div>
        <h6 class="inline text-center custom-subhead-color">Vous avez déjà un compte ?</h6>
        <h5 class="inline custom-identifier-color font-semibold ml-2">S'identifier</h5>
        <!-- Form -->
        <div class="">
        </div>
        <h4 class="-mb-5 mt-4">Sélectionnez le type de compte</h4>
        <div class="flex flex-col lg:flex-row mt-8">
          <!-- input Particulier -->
          <div class="mr-2">
            <input @click="changeradiopic" class="checkbox-viager" type="radio" name="typedechauffage" id="Particulier" checked>
            <label class="for-checkbox-tools" for="Particulier">
              <img v-if="radio2" class="userbr" notchecked src="../assets/Pics/user 1.svg" alt="" />
              <img v-if="!radio2" class="userbr" checked src="../assets/Pics/user 2.svg" alt="" />
              <p class="pl-3">Particulier</p>

            </label>
          </div>

          <!-- input Professional -->
          <input @click="changeradiopic" class="checkbox-viager" type="radio" name="typedechauffage" id="Professional" />
          <label class="for-checkbox-tools" for="Professional">
            <img v-if="radio1" class="userbr notchecked" src="../assets/Pics/briefcase 2.svg" alt="" />
            <img v-if="!radio1" class="userbr checked" src="../assets/Pics/briefcase 1.svg" alt="" />
            <p class="pl-3 ">Professional</p>
          </label>
        </div>

        <!-- Information general -->
        <h4 class="mt-0">Informations générales</h4>

        <!-- Nom Complet input -->
      <div v-if="pro">
        <div class="flex flex-col lg:flex-row mb-2 custom-input-style">

          <!-- <input class="pl-4 py-1 border rounded" type="text" placeholder="Nom complet"> -->

          <div class="inptName w-full mr-2 relative">
            <input id="price" v-model="com" @input="Withcomplet" class="block form-input capitalize block relative w-full pt-2 pb-2 pl-4 pl-7 pr-12 mt-3"
                   placeholder="Nom complet" required />
            <img v-if="complet" icon="check" class="absolute" src="../assets/Pics/done 1.svg" alt="" />
            <img class="absolute" v-else src="../assets/Pics/VectorEE.svg" alt="icon que répresente le choix de particulier" />
          </div> 

          <!-- Adress email -->
          <div class="inptName w-full flex flex-col relative">
            <!--v-model="form.email"
            @input="$v.form.email.$touch"
            :state="$v.form.email.$dirty ? !$v.form.email.$error : null" -->
            <input  id="price" type="email" 
             v-model="Adr" @input="WithAdresse"  
            class="block form-input block relative w-full pt-2 pb-2 pl-4 pl-7 pr-12 sm:text-sm sm:leading-5 mt-3"
            required
            placeholder="Adresse e-mail"
            
             />
            <img v-if="Adresse" icon="check" class="absolute" src="../assets/Pics/done 1.svg" alt="" />
            <img class="absolute" v-else src="../assets/Pics/ic_sharp-alternate-email.svg" alt="icon que répresente le choix de particulier" />
          </div>


        </div>
        <div class="flex flex-col lg:flex-row mb-2">
          <!-- password -->
          <div class="inptName w-full w-1/2 relative mr-2">
            <input id="price" type="password" v-model="pwd" @input="confirmPassword" class="form-input block relative w-full pt-2 pb-2 pl-4 pl-7 pr-12 sm:text-sm sm:leading-5 mt-3"
                   placeholder="Mot de passe" required>
            <img v-if="isPasswordMatched" icon="check" class="absolute" src="../assets/Pics/done 1.svg" alt="" />
            <img class="absolute" v-else src="../assets/Pics/registerformlock.svg" alt="icon que répresente le choix de particulier" />
          </div>

          <!-- confirm password -->
          <div class="inptName w-full grid auto-cols-max relative">
            <div class="relative">
              <input id="price" type="password" @input="confirmPassword" v-model="pwd_c"
                     class="block form-input block relative w-full pt-2 pb-2 pl-4 pl-7 pr-12 mt-3" placeholder="Confirmation mot de passe" required />

              <img v-if="isPasswordMatched" icon="check" class="absolute" src="../assets/Pics/done 1.svg" alt="" />
              <img class="absolute" v-else src="../assets/Pics/registerformlock.svg" alt="icon que répresente le choix de particulier" />
            </div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row">

          <!-- adress domicile -->
          <div class="inptName w-full relative mr-2">
            <input id="price" type="text" @input="Withdomicile" v-model="domi" class="form-input block relative w-full pt-2 pb-2 pl-4 pl-7 pr-12 sm:text-sm sm:leading-5 mt-3" placeholder="Adresse domicile" required />
            <img v-if="domicile" icon="check" class="absolute" src="../assets/Pics/done 1.svg" alt="" />
            <img class="absolute" v-else src="../assets/Pics/fa-solid_location-arrow.svg" alt="icon que répresente le choix de particulier" />
          </div>

          <!-- numero telephone -->
          <div class="inptName w-full relative">
            <input id="price" @input="WithNumero" v-model="Nuro" class="form-input block relative w-full pt-2 pb-2 pl-4 pl-7 pr-12 sm:text-sm sm:leading-5 mt-3" placeholder="Numero de telephone" required />
            <img v-if="Numero" icon="check" class="absolute" src="../assets/Pics/done 1.svg" alt="" />
            <img class="absolute" v-else src="../assets/Pics/phone 1.svg" alt="icon que répresente le choix de particulier" />
          </div>

        </div>
      </div>

       <!-- Professional -->

      <div v-if="!pro"> 
         <div class="flex flex-col lg:flex-row mb-2 custom-input-style">

          <!-- <input class="pl-4 py-1 border rounded" type="text" placeholder="Nom complet"> -->

          <div class="inptName w-full mr-2 relative">
            <input   id="price" v-model="Sir" @input="WithSiret" class="block form-input capitalize block relative w-full pt-2 pb-2 pl-4 pl-7 pr-12 mt-3"
                   placeholder="Siret" required  />
            <img   v-if="Siret" icon="check" class="absolute" src="../assets/Pics/done 1.svg" alt="" />
            <img class="absolute" v-else src="../assets/Pics/VectorEE.svg" alt="icon que répresente le choix de particulier" />
          </div> 

          <!-- Adress email -->
          <div class="inptName w-full flex flex-col relative">
            <input   id="price" class="block form-input block relative w-full pt-2 pb-2 pl-4 pl-7 pr-12 sm:text-sm sm:leading-5 mt-3" v-model="sol" @input="Withsolid" type="email" required
                   placeholder="Nom de la sociéte" />
            <img   v-if="solid" icon="check" class="absolute" src="../assets/Pics/done 1.svg" alt="" />
            <img   class="absolute" v-else src="../assets/Pics/solid.svg" alt="icon que répresente le choix de particulier" />
          </div>


        </div>
        <div class="flex flex-col lg:flex-row mb-2">
          <!-- password -->
          <div class="inptName w-full w-1/2 relative mr-2">
            <input id="price" type="password" v-model="pwd" @input="confirmPassword" class="form-input block relative w-full pt-2 pb-2 pl-4 pl-7 pr-12 sm:text-sm sm:leading-5 mt-3"
                   placeholder="Mot de passe" required>
            <img v-if="isPasswordMatched" icon="check" class="absolute" src="../assets/Pics/done 1.svg" alt="" />
            <img class="absolute" v-else src="../assets/Pics/registerformlock.svg" alt="icon que répresente le choix de particulier" />
          </div>

          <!-- confirm password -->
          <div class="inptName w-full grid auto-cols-max relative">
            <div class="relative">
              <input id="price" type="password" @input="confirmPassword" v-model="pwd_c"
                     class="block form-input block relative w-full pt-2 pb-2 pl-4 pl-7 pr-12 mt-3" placeholder="Confirmation mot de passe" required />

              <img v-if="isPasswordMatched" icon="check" class="absolute" src="../assets/Pics/done 1.svg" alt="" />
              <img class="absolute" v-else src="../assets/Pics/registerformlock.svg" alt="icon que répresente le choix de particulier" />
            </div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row">

          <!-- adress domicile -->
          <div class="inptName w-full relative mr-2">
            <input id="price" type="text" v-model="Sit" @input="WithSiteweb" class="form-input block relative w-full pt-2 pb-2 pl-4 pl-7 pr-12 sm:text-sm sm:leading-5 mt-3" placeholder="Siteweb" required />
            <img   v-if="Siteweb" icon="check" class="absolute" src="../assets/Pics/done 1.svg" alt="" />
            <img class="absolute" v-else src="../assets/Pics/global 1.svg" alt="icon que répresente le choix de particulier" />
          </div>

          <!-- numero telephone -->
          <div class="inptName w-full relative">
            <input id="price" v-model="tele" @input="Withtelephone" class="form-input block relative w-full pt-2 pb-2 pl-4 pl-7 pr-12 sm:text-sm sm:leading-5 mt-3" placeholder="Numero de telephone" required />
            <img   v-if="telephone" icon="check" class="absolute" src="../assets/Pics/done 1.svg" alt="" />
            <img class="absolute" v-else src="../assets/Pics/phone 1.svg" alt="icon que répresente le choix de particulier" />
          </div>

        </div>
 
      </div>


      <!--  -->
        <div class="flex">
          <!-- Téléchargez votre photo -->
          <div class="my-5 w-full custom-style-border rounded-lg">
            <input ref="realfile" type="file" hidden="hidden">
            <div class="text-xs text-center flex flex-col px-12 sm:px-1 md:px-5 lg:px-12 lg:py-3">

              <h3 class="photo">
                Téléchargez votre photo ici ou
                <span class="parcourir" @click="browsing">parcourir</span>
              </h3>
              <p class="mb-2 taille">Taille maximale du fichier: 20 Mo</p>
            </div>
          </div>
        </div>

        <!--  -->
        
        <!--  -->

        <!-- Inscrivez vous -->
        <div class="flex  mb-4 flex-col lg:flex-row">
          <button class="flex justify-center google w-full rounded-lg py-4">
            <img class="mx-2" src="../assets/Pics/search 1.svg" alt="icon de button s'inscrire google" />
            <span class="Inscrivez">Inscrivez-vous avec google</span>
          </button>
          <div class="flex justify-center items-center">
            <p style="color:#D4D6DC" class=" lg:mx-4">OR</p>
          </div>
          <button class="relative sinscrire w-full rounded-lg py-4">
            <span class="spor"> se connecter </span>
            <img class="absolute custom-arrow-position" src="../assets/Pics/next (1) 8.svg" alt="icon de button s'inscrire" />
          </button>
        </div>
      </div>
      <div class="registerpicside h-screen bg-cover hidden sm:block min-h-full">
        <!-- Side image -->
        <!-- <img class="" src="../assets/Pics/registerbckgrnd.jpg" alt="image de fond"> -->
      </div>


    </div>
    <!-- Page Layout End -->

  </div>
</template>

<script>
import {required, email} from "vuelidate/lib/validators";

  export default {
    name: "Nav",
    data() {
      return {
        form: {
       
        email: "",
      },
        Sir: "",
        sol: "",
        Sit: "",
        tele: "",
        com: "",
        Adr:"",
        domi: "",
        Nuro: "",
        pwd: "DDD",
        pwd_c: "",
        Siret: false,
        solid: false,
        Siteweb: false,
        telephone: false,
        complet: false,
        Adresse: false,
        domicile: false,
        Numero:false,
        isPasswordMatched: false,
        isActive: false,
        radio1: false,
        radio2: true,
        input1: true,
        input2: false,

        changeinput: true,
        pro: true,
      };
    },
    validations: {
    form: {
      email: { required, email }
    }
  },


    watch: {
      // pwd_c: function() {
      //   if (this.pwd === this.pwd_c) {
      //     this.isPasswordMatched = true;
      //   } else {
      //     this.isPasswordMatched = false;
      //   }
      // },
    },
    methods: {
      confirmPassword() {
        if (this.pwd === this.pwd_c && this.pwd.length>0) {
          this.isPasswordMatched = true;
        } else {
          this.isPasswordMatched = false;
  
        }
      },
      Withsolid(){
        if (this.sol.length>3) {
          this.solid = true;
        } else {
          this.solid = false;
  
        }
      },
      WithSiteweb(){
        if (this.Sit.length>3) {
          this.Siteweb = true;
        } else {
          this.Siteweb = false;
  
        }
      },
      Withtelephone(){
        if (this.tele.length>10) {
          this.telephone = true;
        } else {
          this.telephone = false;
  
        }
      },
      WithSiret(){
        if (this.Sir.length>3) {
          this.Siret = true;
        } else {
          this.Siret = false;
  
        }
      },
       Withcomplet(){
        if (this.com.length>3) {
          this.complet = true;
        } else {
          this.complet = false;
  
        }
      },
       WithAdresse(){
        if (this.Adr.length>9) {
          this.Adresse = true;
        } else {
          this.Adresse = false;
  
        }
      },
       Withdomicile(){
        if (this.domi.length>3) {
          this.domicile = true;
        } else {
          this.domicile = false;
  
        }
      },
      // 
       WithNumero(){
        if (this.Nuro.length>10) {
          this.Numero = true;
        } else {
          this.Numero = false;
  
        }
      },
      
      dropdownEnter: function () {
        var btn = this.$refs.btn;
        var icon = this.$refs.btnimg;
        var dropblck = this.$refs.dropblck;
        btn.style.backgroundColor = "#F5F7FA";
        btn.style.color = "#6E7A81";
        icon.style.color = "black";
        dropblck.style.display = "block";
      },
      dropdownLeave: function () {
        var btn = this.$refs.btn;
        var icon = this.$refs.btnimg;
        var dropblck = this.$refs.dropblck;
        btn.style.backgroundColor = "#2C8EEA";
        btn.style.color = "#FFFFFF";
        icon.style.color = "#FFFFFF";
        dropblck.style.display = "none";
        // dropblck.style.dipsla="hidden"
      },
      dropdownEnter2: function () {
        var btn = this.$refs.btn2;
        var icon = this.$refs.btnimg2;
        var dropblck = this.$refs.dropblck2;
        btn.style.opacity = 1;
        btn.style.border = "1px solid white";
        btn.style.backgroundColor = "#2C8EEA";
        btn.style.color = "white";
        icon.style.color = "black";
        dropblck.style.display = "block";
        dropblck.style.color = "#2C8EEA";
      },
      dropdownLeave2: function () {
        var btn = this.$refs.btn2;
        var icon = this.$refs.btnimg2;
        var dropblck = this.$refs.dropblck2;
        btn.style.backgroundColor = "white";
        btn.style.border = "none";
        btn.style.color = "#2C8EEA";
        icon.style.color = "#FFFFFF";
        dropblck.style.display = "none";
      },
      Menu: function () {
        this.isActive = true;
        console.log("this is active value", this.isActive);
      },
      Close: function () {
        this.isActive = false;
        console.log("this is active value", this.isActive);
      },
      changeradiopic: function () {
        console.log("::before->radio1 & radio2", this.radio1, this.radio2);
        this.radio1 = !this.radio1;
        this.radio2 = !this.radio2;
        console.log("::after->radio1 & radio2", this.radio1, this.radio2);
        this.pro = !this.pro;
      },
      inputchang: function () {
        this.input1 = !this.input1;
        this.input2 = !this.input2;
      },
      browsing: function () {
        var browse = this.$refs.realfile;
        browse.click();
      },
      changepro: function () {
        console.log("hadchi working a3chiri");
      },
    },
  };
</script>

<style scoped lang="scss">
  @import "../scss/main.scss";
h4{
  font-family: $mdb !important;
}
  h6{
    font-family: $mn;
    font-size: 0.90rem;
  }
  h5{
    font-family:  $mdb;
    font-size: 0.9rem;
  }
  .registerpicside{
    background-image: url('../assets/Pics/registerbckgrnd.jpg');
    background-color: #cccccc;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .absolute::focus {
    // fill: #0051ff;
  }
  // S'inscrire arrow position
  .custom-arrow-position {
    top: 20px;
    right: 10px;
  }
  // Custom text header colors
  .custom-subhead-color {
    color: #b7b7b7;
  }
  .custom-identifier-color {
    color: #2C8EEA;
  }
  // Taille maximal style
  .custom-color-bg {
    background-color: #EEF9FF;
    color: #A9D3F7;
  }
  .custom-style-border {
    border: 1.3px dashed #2c8eea;
    background: #edf9ff;
    border-radius: 4px;
  }
  // Custom Input style 
  .custom-input-style input {
    // &::-webkit-input-placeholder {
    //   /* Chrome/Opera/Safari */
    //   color: pink;
    // }
    // ::-moz-placeholder {
    //   /* Firefox 19+ */
    //   color: pink;
    // }
    // :-ms-input-placeholder {
    //   /* IE 10+ */
    //   color: pink;
    // }
    // :-moz-placeholder {
    //   /* Firefox 18- */
    //   color: pink;
    // }
  }
  .checked {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // border: 1px solid black;
    color: blue;
  }
  .logo {
    // position: relative;
    // right: 7rem;
    // width: 12rem;
  }
  // .login {
  //   margin-top: -3%;
  // }
  .twtr {
    // padding-top: 0.38rem;
  }
  .footer {
    // position: absolute;
    // bottom: 8px;
    // left: 30px;
  }
  .facebook {
    // height: 1.7rem;
    // width: 1.7rem;
    // background-color: white;
    // border-radius: 50%;
  }
  .registerpicside {
    //   background-image: url("../assets/Pics/registerbckgrnd.jpg"); /* The image used */
    //   background-color: #cccccc;
    // height: 100%;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
    // float: right;
    // position: relative;
    // left: 40rem;
    // width: 59%;
    p {
      font-family: $ub;
      font-size: 1rem;
      color: white;
      position: absolute;
      right: 70px;
      top: 30px;
    }
  }
  .socialmedia {
    h2 {
      font-family: $um;
      font-size: 0.72rem;
      color: #979aa2;
      opacity: 0.8;
    }
    p {
      font-family: $um;
      color: #2c8eea;
      font-size: 0.72rem;
    }
  }
  .iconofbtnsmbt {
    top: 24%;
    left: 29%;
    width: 1.2rem;
  }
  .btns {
    background-color: $main;
    border-radius: 3px;
  }
  .btn-sbmt {
    background-color: $main;
    border-radius: 3px;
    font-family: $ub;
    color: white;
    font-size: 1rem;
  }
  .browse {
    border: 1.3px dashed #2c8eea;
    background: #edf9ff;
    border-radius: 4px;
    //   margin-left: 10rem;
    width: 50%;
    h3 {
      font-family: $um;
      font-size: 0.74rem;
      color: #2c8eea;
      span {
        font-family: $ub;
        color: #2c8eea;
      }
    }
    p {
      font-family: $ur;
      font-size: 0.68rem;
      color: rgba(44, 142, 234, 0.68);
    }
  }
.taille{
  font-family: $mn;
  color: rgba(44, 142, 234, 0.68);
}
.photo{
  color: #3895EC;
  font-family: $mdb;
}
  // spliter custom width
  .custom-width {
    width: 25rem;
  }
  // @media (min-width: 1280px) {
  //   .custom-right-p {
  //     padding-right: 32rem;
  //   }
  // }
  @media (max-width: 500px) {
    .browse {
      width: 88%;
      margin-right: 3%;
    }
  }
  span {
    font-family: $um;
    font-size: 13px;
  }
  .form-input {
    border: 0.8px solid #d1d8da;
    border-radius: 5px;
    font-family: $ur;
    font-size: 0.85rem;
    color: #979aa2;
  }
  .inptName {
    img {
        top: 23px;
        right: 10px;
        width: 4%;
    }
  }
  .spliter {
    background: #e8e7ec;
    height: 0.12rem;
    //   margin-left: 6.8rem;
  }
  h1 {
    font-family: $ub;
    font-size: 1.8rem;
    line-height: 25px;
    color: #1a283f;
  }
  h4 {
    font-family: $ub;
    font-size: 0.9rem;
    line-height: 25px;
    color: #1a283f;
  }
  h6 {
    // font-family: $um;
    // color: #8f959c;
    // font-size: 0.7rem;
  }
  h5 {
    // font-family: $um;
    // color: #2c8eea;
    // font-size: 0.69rem;
    // border-bottom: 1px solid $main;
  }
  input:focus {
    // outline: none;
    // border: 1px solid $main;
    // box-shadow: 0 0 3px #719ece;
  }
  // the starting of the radio buttons css
  .entreprise {
    margin: 0 auto;
    margin-top: 1.3rem;
    fill: aquamarine;
  }
  .middle {
    text-align: center;
  }
  .middle input[type="radio"] {
    display: none;
  }
  .middle input[type="radio"]:checked+.box {
    background-color: none;
    border: 0.85px solid $main;
  }
  .middle input[type="radio"]:checked+.box span {
    color: $main;
  }
  .middle input[type="radio"]:checked+.box .round {
    border: 1px solid $main;
    background-color: $main;
  }
  .middle input[type="radio"]:checked+.box span:before {
    transform: translateY(0px);
    opacity: 1;
  }
  .middle .box {
    width: 7rem;
    height: 6rem;
    background-color: none;
    border: 0.85px solid #cdced0;
    border-radius: 5px;
    transition: all 250ms ease;
    will-change: transition;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    position: relative;
    font-family: $ur;
    font-weight: 900;
  }
  .middle .box:active {
    transform: translateY(10px);
  }
  .middle .box span {
    position: absolute;
    transform: translate(0, 60px);
    left: 0;
    right: 0;
    transition: all 300ms ease;
    user-select: none;
    color: #c5c5c5;
    bottom: 4rem;
    font-size: 0.65rem;
  }
  .round {
    position: absolute;
    width: 0.95rem;
    height: 0.95rem;
    border: 1px solid #c5c5c5;
    border-radius: 50%;
    right: 0.5rem;
    top: 0.3rem;
  }
  .middle .box span:before {
    font-size: 1.2em;
    font-family: $um;
    display: block;
    transform: translateY(-80px);
    opacity: 0;
    transition: all 300ms ease-in-out;
    font-weight: normal;
    color: white;
  }
  .middle p {
    color: #fff;
    font-family: $um;
    font-weight: 400;
  }
  .middle p a {
    text-decoration: underline;
    font-weight: bold;
    color: #fff;
  }
.parcourir{
  color: #2C8EEA;
}
  // .middle p span:after {
  //   content: '\f0e7';
  //   font-family: $um;
  //   color: yellow;
  // }
  .validicon {
    width: 0.6rem;
    position: relative;
    left: 1px;
    top: 0.2rem;
  }
  // the  starting of the menu css
  .menubutton {
    cursor: pointer;
  }
  #navbtn2 {
    display: grid;
    grid-template-columns: none;
  }
  #domore {
    position: absolute;
    right: 1.1rem;
    top: 1.3rem;
    width: 2.5rem;
    cursor: pointer;
  }
  #domore:hover {
    /*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
    -webkit-animation: heartbeat 4s ease-in-out infinite both;
    animation: heartbeat 4s ease-in-out infinite both;
  }
  @media (min-width: 768px) {
    .md\:mb-5 {
      // margin-bottom: 1.25rem;
      margin-left: -8rem;
    }
  }
  /**
 * ----------------------------------------
 * animation heartbeat for the menu icon
 * ----------------------------------------
 */
  @-webkit-keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  #close {
    color: white;
    font-size: 34px;
    float: right;
    margin-right: 20px;
    margin-top: 35px;
    cursor: pointer;
    -webkit-animation-name: animateclose;
    -webkit-animation-duration: 2.8s;
    animation-name: animateclose;
    animation-duration: 2.8s;
  }
  @keyframes animateclose {
    from {
      top: 800;
      opacity: 0;
    }
    to {
      top: -800;
      opacity: 1;
    }
  }
  .menubackground {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $main;
    z-index: 99;
    left: 100%;
    opacity: 0;
    transition: left 0.5s, opacity 0.4s;
  }
  .menubackground.show {
    left: 0;
    opacity: 1;
    bottom: 1px;
  }
  #menu2 {
    width: 100%;
    display: grid;
    text-align: center;
    li {
      font-family: $um;
      color: white;
      font-size: 22px;
      margin-top: 8px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
  #navbtn2 {
    display: grid;
    grid-template-columns: none;
  }
  .navitems {
    button {
      display: inline-block;
      border-radius: 59px;
      margin-top: 0px;
      border: none;
      // margin-left: 64px;
      margin-left: 23%;
      font-size: 10px;
      font-family: "Ubuntu-Regular";
      height: 27px;
      width: 140px;
      color: white;
      // box-shadow:-5px 14px 16px rgba(163, 164, 172, 0.4), -0px -0px 0px;
      background-color: $main;
      img {
        display: inline-block;
        height: 30px;
        width: 18px;
        margin: 0px;
        float: left;
        position: relative;
        left: 6px;
        bottom: 1px;
      }
      p {
        display: inline-block;
        // margin-top: 3px;
        margin-top: 8px;
        margin-left: 5px;
      }
    }
  }
  #btn2 {
    justify-self: center;
    background-color: white;
    color: $main;
    justify-self: center;
    width: 274px;
    height: 49px;
    font-size: 20px;
    font-family: $um;
    transition: all 0.3s;
    opacity: 0.8;
    svg {
      position: relative;
      right: 6px;
      bottom: 2px;
    }
  }
  #btn2:hover:before {
    width: 100%;
  }
  #btn2:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #2d94f4;
    transition: all 0.5s;
    z-index: -1;
  }
  @media (min-width: 749px) {
    #navbtn2 {
      display: grid;
      margin-top: 28px;
      grid-template-columns: none;
      margin-left: 0px;
    }
    #btn2 {
      margin-left: 0%;
      margin-top: 28px;
      justify-self: center;
    }
    .navitems {
      img {
        display: inline-block;
        float: right;
        width: 30px;
        margin-right: 5px;
      }
    }
  }
  @media (max-width: 376px) {
    .navitems button {
      display: none;
    }
    #navbtn2 {
      #btn2 {
        display: block;
        margin: 0 auto;
      }
    }
  }
  // type rabie css
  .naturedechauffage {
    label {
      font-family: $gr;
      color: #929395;
    }
  }
  input:focus {
    // outline: none;
  }
  //
  .checkbox-viager:checked,
  .checkbox-viager:not(:checked) {
    position: absolute;
    left: -9999px;
    width: 0;
    height: 0;
    visibility: hidden;
  }
  .checkbox-viager:checked+label,
  .checkbox-viager:not(:checked)+label {
    position: relative;
    display: inline-block;
    font-family: $gm;
    // padding-top: 13px;
    height: 3rem;
    width: 10rem;
    font-size: 14.3px;
    line-height: 20px;
    letter-spacing: 1px;
    margin: 0 auto;
    margin-left: 0px;
    margin-right: 5px;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    color: #f3f4f8;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
  }
  .checkbox-viager:not(:checked)+label {
    border: 1px solid #d4d6dc;
    background-color: transparent;
    color: rgba(49, 49, 50, 0.5);
  }
  .checkbox-viager:checked+label {
    background-color: #e9f0f8;
    color: $main;
    border: 1px solid $main;
  }
  .checkbox-viager:not(:checked)+label:hover {
    box-shadow: 0 8px 16px 0 rgba(59, 56, 236, 0.2);
  }
  .checkbox-viager:checked+label::before,
  .checkbox-viager:not(:checked)+label::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-image: linear-gradient(298deg, var(--red), var(--yellow));
    z-index: -1;
  }
  .checkbox-viager:checked+label .uil,
  .checkbox-viager:not(:checked)+label .uil {
    font-size: 24px;
    line-height: 24px;
    display: block;
    padding-bottom: 10px;
  }
  .userbr {
    position: relative;
    top: 34%;
    left:11%;
  }
  //
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: 41px;
    margin-left: -15px;
  }
  .forms-buttons {
    display: flex;
    // margin-left: 8%;
    & button {
      display: flex;
      justify-content: space-around;
      align-items: center;
      border: none;
      width: 15em;
      height: 3.5em;
      margin: 0px 5px;
      border-radius: 3px;
      &:nth-child(2) {
        color: #ffffff;
        background-color: #2c8eea;
      }
      &:hover {
        border: none;
        outline: none;
      }
    }
  }
  .google {
    background: #edf9ff;
    border-radius: 6px;
    outline : none;
  
    color:  #2C8EEA;
  }
  .Inscrivez{
     font-family: $mn;
     font-size: 13px;
  }
  .sinscrire {
    background-color: #2c8eea;
    color: #ffffff;
    outline : none;
  }
  .spor{
    font-family: $mdb;
    font-size: 15px;
  }
  @media (max-width: 1880px) {
    .forms-buttons {
      display: flex;
      margin-left: 8%;
    }
  }
</style>