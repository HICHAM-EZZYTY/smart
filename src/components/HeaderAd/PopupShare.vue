<template>
  <aside id="popUp" class="popup">
    <!-- <div
      v-on-clickawayShare="awayShare"
      style="z-index:4"
      class="popUpContainer"
    >

      <div class="overf">
        <article>
          <button
            @click="closeSthepopup()"
            aria-label="closeS"
            type="button"
            class="CloseShare"
          >
            <span class="_e296pg"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.15772 6.5L10.4902 2.52764C10.5461 2.46162 10.4991 2.36133 10.4128 2.36133H9.39971C9.34004 2.36133 9.28291 2.38799 9.24356 2.43369L6.49502 5.71035L3.74649 2.43369C3.7084 2.38799 3.65127 2.36133 3.59034 2.36133H2.57725C2.49092 2.36133 2.44395 2.46162 2.49981 2.52764L5.83233 6.5L2.49981 10.4724C2.4873 10.4871 2.47927 10.5051 2.47668 10.5242C2.47409 10.5434 2.47705 10.5628 2.4852 10.5803C2.49335 10.5979 2.50636 10.6127 2.52268 10.623C2.53899 10.6333 2.55793 10.6388 2.57725 10.6387H3.59034C3.65 10.6387 3.70713 10.612 3.74649 10.5663L6.49502 7.28965L9.24356 10.5663C9.28164 10.612 9.33877 10.6387 9.39971 10.6387H10.4128C10.4991 10.6387 10.5461 10.5384 10.4902 10.4724L7.15772 6.5Z"
                  fill="#849BB2"
                />
              </svg>

            </span>
          </button>
          <h1 class="Partager">Partager l’annonce</h1>
          <div class="form">
            <div
              class="sne input-div border-b-2 border-black	 relative grid my-5 py-1 focus:outline-none"
              style="grid-template-columns: 7% 93%;"
            >
              <div class="i">
                <img
                  src="../../assets/Pics/ant-design_facebook-filled.svg"
                  alt=""
                />
              </div>
              <div class="div">
                <h5>Facebook</h5>
              </div>
            </div>
            <div
              class="sne input-div border-b-2 border-black	 relative grid my-5 py-1 focus:outline-none"
              style="grid-template-columns: 7% 93%;"
            >
              <div class="i">
                <img
                  src="../../assets/Pics/ant-design_linkedin-filled.svg"
                  alt=""
                />
              </div>
              <div class="div">
                <h5>Linkedin</h5>
              </div>
            </div>
            <div
              class="sne input-div border-b-2 border-black	 relative grid my-5 py-1 focus:outline-none"
              style="grid-template-columns: 7% 93%;"
            >
              <div class="Twitter">
                <img
                  class="Twitter"
                  src="../../assets/Pics/zmdi_twitter-box.svg"
                  alt=""
                />
              </div>
              <div class="div">
                <h5>Twitter</h5>
              </div>
            </div>
            <div
              class="sne input-div border-b-2 border-black	 relative grid my-5 py-1 focus:outline-none"
              style="grid-template-columns: 7% 93%;"
            >
              <div class="i">
                <img src="../../assets/Pics/carbon_copy-link.svg" alt="" />
              </div>
              <div class="div">
                <h5>Copier le lien</h5>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div> -->

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 "
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-25"></div>
        </div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span>

        <div
          class="sm:w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:w-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline">
          <button @click="closeSthepopup()" aria-label="closeS" type="button" class="CloseShare">
            <span class="_e296pg"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.15772 6.5L10.4902 2.52764C10.5461 2.46162 10.4991 2.36133 10.4128 2.36133H9.39971C9.34004 2.36133 9.28291 2.38799 9.24356 2.43369L6.49502 5.71035L3.74649 2.43369C3.7084 2.38799 3.65127 2.36133 3.59034 2.36133H2.57725C2.49092 2.36133 2.44395 2.46162 2.49981 2.52764L5.83233 6.5L2.49981 10.4724C2.4873 10.4871 2.47927 10.5051 2.47668 10.5242C2.47409 10.5434 2.47705 10.5628 2.4852 10.5803C2.49335 10.5979 2.50636 10.6127 2.52268 10.623C2.53899 10.6333 2.55793 10.6388 2.57725 10.6387H3.59034C3.65 10.6387 3.70713 10.612 3.74649 10.5663L6.49502 7.28965L9.24356 10.5663C9.28164 10.612 9.33877 10.6387 9.39971 10.6387H10.4128C10.4991 10.6387 10.5461 10.5384 10.4902 10.4724L7.15772 6.5Z"
                  fill="#849BB2"
                />
              </svg>
            </span>
          </button>

          <div class="text-center m-10 sm:m-20 sm:text-left overflow-hidden">
            <h3
              class="Partager text-lg leading-6   text-gray-900 text-center"
              id="modal-headline"
            >
              Partager l'annonce
            </h3>
            <div class="flex justify-center">
              <div class=" w-full">
                <ul class="  ">
                  <li class=" sne pl-0 p-4 hover:bg-gray-50 cursor-pointer flex flex-row">
                    <div class="h-5 w-5 mx-2">
                      <img
                        src="../../assets/Pics/ant-design_facebook-filled.svg"
                        alt=""
                        class="object-contain"
                      />
                    </div>
                    Facebook
                  </li>
                  <li class="sne pl-0 p-4 hover:bg-gray-50 cursor-pointer flex flex-row">
                    <div class="h-5 w-5 mx-2">
                      <img
                        src="../../assets/Pics/ant-design_linkedin-filled.svg"
                        alt=""
                        class="object-contain"
                      />
                    </div>
                    LinkedIn
                  </li>
                  <li class="sne pl-0 p-4 hover:bg-gray-50 cursor-pointer flex flex-row">
                    <div class="h-5 w-5 mx-2">
                      <img
                        src="../../assets/Pics/zmdi_twitter-box.svg"
                        alt=""
                        class="object-contain"
                      />
                    </div>
                    Twitter
                  </li>
                  <li class="sne pl-0 p-4 hover:bg-gray-50 cursor-pointer flex flex-row">
                    <div class="h-5 w-5 mx-2">
                      <img
                        src="../../assets/Pics/carbon_copy-link.svg"
                        alt=""
                        class="object-contain"
                      />
                    </div>
                    Copier le lien
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a href="#!" class="closeSPopUpOutSide"></a>
  </aside>
</template>

<script>
export default {
  name: "PopupShare",
  components: {},

  data() {
    return {};
  },
  methods: {
    closeSthepopup: function() {
      this.$emit("closeS");
    },
    awayShare: function() {
      this.$emit("awayShare");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";

// Popup
#openPopUp {
  text-align: center;
  background-color: #1abc9c;
  padding: 15px 15px;
  color: #ffffff;
  font-weight: 500;
  font-size: 1.5em;
  border-radius: 3.5px;
  text-decoration: none;
  font-weight: 100;
  transition: background-color 0.15s linear;
  -webkit-transition: background-color 0.15s linear;
  -moz-transition: background-color 0.25s linear;
  -o-transition: background-color 0.25s linear;
}
a#openPopUp:hover {
  cursor: pointer;
  background-color: #1abc9e;
}
.popup {
  position: fixed;
  top: -100vh;
  top: 0;
  left: 0;
  z-index: 9999999;
  background: rgba(166, 177, 187, 0.5);
  width: 100vw;
  height: 100vh;
  opacity: 1;

  -webkit-transition: opacity 0.35s ease;
  -moz-transition: opacity 0.35s ease;
  -o-transition: opacity 0.35s ease;
  transition: opacity 0.35s ease;
}
.Partager {
  font-family: $gsb;
  color: #000000;
  text-align: center;
  font-size: 1.35rem;
  padding-bottom: 2rem;
//   margin-top: 2rem;
}
.popup .popUpContainer {
  width: 30%;
  height: 60%;
  max-width: 780px !important;
  position: fixed;
  left: 50%;
  top: 15vh;
  transition: bottom 0.35s ease;
  margin-left: -250px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  z-index: 9999999;
}
.popup h2 {
  padding: 0.5em;
  text-align: center;
  color: #444444;
  margin: 0;
}
.popup img {
  width: 100%;
  display: block;
}
.popup article {
  height: 56vh;
  background-color: #ffffff;
}
.popup a:hover {
  color: #000000;
}

.popUpContainer {
  top: 50px;
  -webkit-transition: top 0.35s ease;
  -moz-transition: top 0.35s ease;
  -o-transition: top 0.35s ease;
  transition: top 0.35s ease;
}
// footer

.CloseShare {
  border: none !important;
  outline: none !important;
  cursor: pointer !important;
  touch-action: manipulation !important;
  width: 41px;
  height: 62px;
  //   margin-top: 7%;
  float: right;
}
.form {
  padding-top: 1%;
}
.form input {
  pointer-events: none;
  // font-size: 20vh;
}
//
@media (max-width: 1300px) {
  .popup .popUpContainer {
    width: 42%;
    max-width: none;
    left: 30%;
    height: 80%;
    margin-left: 0;
  }
  .popup ul {
    padding: 0 1em 0 1em;
  }
  .popup:target .popUpContainer {
    top: 25px;
    -webkit-transition: top 0.35s ease;
    -moz-transition: top 0.35s ease;
    -o-transition: top 0.35s ease;
    transition: top 0.35s ease;
  }
}
@media (max-width: 796px) {
  .popup .popUpContainer {
    width: 65%;
    max-width: none;
    left: 18%;
    height: 66%;
    margin-left: 0;
  }
  .popup ul {
    padding: 0 1em 0 1em;
  }
  .popup:target .popUpContainer {
    top: 25px;
    -webkit-transition: top 0.35s ease;
    -moz-transition: top 0.35s ease;
    -o-transition: top 0.35s ease;
    transition: top 0.35s ease;
  }
}

.overf {
  //   padding-top: 8px !important;
  //   padding-bottom: 8px !important;
  //   padding-left: 48px !important;
  //   padding-right: 48px !important;
  //   height: 100% !important;
  // overflow: auto !important;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.headers {
  -webkit-box-pack: center !important;
  border-bottom: 1px solid #ebebeb !important;
  padding-top: 24px !important;
  padding-bottom: 16px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  color: #222222 !important;
  font-size: 18px !important;
  line-height: 24px !important;
  font-weight: 600 !important;

  display: flex !important;
  justify-content: center !important;
  flex-shrink: 0 !important;
}
// X

//
// @media (max-width: 320px) {
//   .i {
//     width: 100%;
//     color: #d9d9d9;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// }

.i {
  color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.i i {
  transition: 0.3s;
}

.input-div > div {
  position: relative;
  height: 45px;
}

.input-div > div > h5 {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(0, 0, 0);
  font-size: 18px;
  transition: 0.3s;
}

.input-div:before,
.input-div:after {
  content: "";
  position: absolute;
  bottom: -2px;
  width: 0%;
  height: 2px;
  background-color: #38d39f;
  transition: 0.4s;
}

.input-div:before {
  right: 50%;
}

.input-div:after {
  left: 50%;
}

.input-div.focus:before,
.input-div.focus:after {
  width: 50%;
}

.input-div.focus > div > h5 {
  top: -5px;
  font-size: 15px;
  font-family: $pr;
}

.input-div.focus > .i > i {
  color: #38d39f;
}
.Twitter {
  position: relative;
  top: 4px;
  width: 96%;
}
.sne {
  font-family: $pr;
  font-size: 13px;
  border-bottom: 1px solid #000000;
  color: rgba(0, 0, 0, 0.75);
}
h3{
  font-family:  $gsb;
}
</style>
