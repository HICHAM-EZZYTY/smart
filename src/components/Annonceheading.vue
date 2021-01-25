<template>
        <div class="annonceheading block m-0 m-auto  w-4/5 lg:w-3/5">
            <div class="heading flex">
                <p class="mr-1">{{Numbers}}</p>
                <img class="self-center mr-2" src="../assets/Pics/annoncearrow.svg">
                <h3>{{title}}</h3>
            </div>
    </div>
</template>

<script>
export default {
props: {
  title: String,
  Numbers:String,
}

}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";


.heading{
    p{
        color:$main;
        font-size:1.1rem;
        font-family: $gsb;
    }
    h3{
        color:#8C92A4;
        font-size: 1rem;
        font-family: $gm;
    }
}

   @media (min-width: 320px) {
  .heading {
      h3{
          font-size: 0.98rem;
      }

  }
 }
  @media (min-width: 640px) {
  .heading {
      h3{
          font-size: 1rem;
      }

  }
 }
</style>