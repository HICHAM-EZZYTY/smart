<template>
    <div>
              <div class="badges flex flex-wrap">
                <div class="pieces mt-4 mr-4 flex relative">
                    <img src="./../assets/Pics/placeholder 1.svg">
                    <p>Ville , département ou région </p>
                </div>

                <div class="chambres mt-4 mr-4 flex relative">
                    <img src="./../assets/Pics/home 1.svg">
                    <p>Quels pros ? </p>
                </div>

                <div class="salledebain mt-4 mr-4 flex relative">
                    <img src="./../assets/Pics/realtor 1.svg">
                    <p> Qui ? </p>
                </div>

                <div class="surface mt-4 mr-10 flex relative">
                    <img src="./../assets/Pics/language 1.svg">
                    <p>langues parlées</p>
                </div>

                <div class="roch mt-4 mr-3 flex relative">
                    <img src="./../assets/Pics/loupe (1) 1.svg">
                    <p>Rechercher</p>
                </div>

            </div>
            <!-- <div
          class="  lg:w-3/4  mt-4 grid grid-cols-2 sm:grid-cols-4  md:grid-cols-4  lg:w-2/4 ml-10 md:ml-40 lg:ml-40"
        >
          <div class="inptt">
            <input
              @click="changeradiopic"
              class="checkbox-viager"
              type="radio"
              name="typedechauffage"
              id="Particulier"
              checked
            />
            <label class="for-checkbox-tools" for="Particulier">
              <img
                class="userbr"
                notchecked
                src="../assets/Pics/user 1.svg"
                alt=""
              />
              <img
                class="userbr"
                checked
                src="../assets/Pics/user 2.svg"
                alt=""
              />
              Particulier
            </label>
          </div>

          <div class="inptt">
            <input
              @click="changeradiopic"
              class="checkbox-viager"
              name="typedechauffage"
              id="Professional"
            />
            <label class="for-checkbox-tools" for="Professional">
              <img
                class="userbr notchecked"
                src="../assets/Pics/briefcase 2.svg"
                alt=""
              />
              <img
                v-if="!radio1"
                class="userbr checked"
                src="../assets/Pics/briefcase 1.svg"
                alt=""
              />
              Professional
            </label>
          </div>
        </div> -->

    </div>
</template>

<style lang="scss" scoped>
@import "../scss/main.scss";

.chambres{
    background-color:#F6F6F6;
    height: 40px;
    width: 13rem;
    border-radius: 4px;
    text-align: center;
      p{
    color: #A5A6A9;
    font-family: $gr;
    font-size: 0.88rem;
    position: absolute;
    left: 36px;
    top: 11px;
    }
    img{
        height:1.2rem;
        position: absolute;
        left: 11px;
        top: 11px;

    }

}

.salledebain{
    height: 40px;

    background-color:#F6F6F6;
    width: 12rem;
    border-radius: 4px;
    text-align: center;
    p{
    color: #A5A6A9;
    font-family: $gr;
    font-size: 0.88rem;
    position: absolute;
    left: 36px;
    top: 11px;
    }
    img{
        height:1.2rem;
        position: absolute;
        left: 11px;
        top: 11px;

    }


}
.surface{
    background-color:#F6F6F6;
    height: 40px;
    width: 14.5rem;
    border-radius: 4px;
    text-align: center;
    p{
    color: #A5A6A9;
    font-family: $gr;
    font-size: 0.88rem;
    position: absolute;
    left: 36px;
    top: 11px;
    }
    img{
        height:1rem;
        position: absolute;
        left: 14px;
        top: 11px;

    }
}
.pieces{
    background-color:#F6F6F6;
    height: 40px;
    width: 20rem;
    border-radius: 4px;
    text-align: center;
    p{
    color: #A5A6A9;
    font-family: $gr;
    font-size: 0.88rem;
    position: absolute;
    left: 36px;
    top: 11px;
    }
    img{
        height:1.2rem;
        position: absolute;
        left: 11px;
        top: 11px;

    }
}
.roch{
    background-color:#2C8EEA;
    height: 40px;
    width: 15rem;
    border-radius: 4px;
    text-align: center;
    p{
    color: #FFFFFF;
    font-family: $gr;
    font-size: 0.88rem;
    position: absolute;
    left: 5rem;
    top: 11px;
    }
    img{
        height:1.2rem;
        position: absolute;
        left: 50px;
        top: 11px;

    }
}
</style>

<script>
export default {
    
}
</script>