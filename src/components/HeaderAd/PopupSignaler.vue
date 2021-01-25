<template>
  <aside id="popUp" class="popup">
 

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 "
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-25"></div>
        </div>

       <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
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
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="vect mx-auto flex-shrink-0 flex mt-2  items-center justify-center h-12 w-12 rounded-full  sm:mx-0 sm:h-10 sm:w-10"
              >
              <svg class="w-4 h-4" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M9.5 2.00069H7V1.16569C6.98827 0.845599 6.8501 0.543219 6.61579 0.324835C6.38147 0.106452 6.07012 -0.0101142 5.75 0.00068922H4.25C3.92988 -0.0101142 3.61853 0.106452 3.38421 0.324835C3.1499 0.543219 3.01173 0.845599 3 1.16569V2.00069H0.5C0.367392 2.00069 0.240215 2.05337 0.146447 2.14714C0.0526784 2.2409 0 2.36808 0 2.50069C0 2.6333 0.0526784 2.76047 0.146447 2.85424C0.240215 2.94801 0.367392 3.00069 0.5 3.00069H1V8.50069C1 8.89852 1.15804 9.28005 1.43934 9.56135C1.72064 9.84266 2.10218 10.0007 2.5 10.0007H7.5C7.89782 10.0007 8.27936 9.84266 8.56066 9.56135C8.84196 9.28005 9 8.89852 9 8.50069V3.00069H9.5C9.63261 3.00069 9.75979 2.94801 9.85355 2.85424C9.94732 2.76047 10 2.6333 10 2.50069C10 2.36808 9.94732 2.2409 9.85355 2.14714C9.75979 2.05337 9.63261 2.00069 9.5 2.00069ZM4 1.16569C4 1.08569 4.105 1.00069 4.25 1.00069H5.75C5.895 1.00069 6 1.08569 6 1.16569V2.00069H4V1.16569Z" fill="#E12D39"/>
              </svg>

              <!-- <svg class="w-6 h-6 text-red-600"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FFE3E3"/>
                <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.5 7.00069H12V6.16569C11.9883 5.8456 11.8501 5.54322 11.6158 5.32484C11.3815 5.10645 11.0701 4.98989 10.75 5.00069H9.25C8.92988 4.98989 8.61853 5.10645 8.38421 5.32484C8.1499 5.54322 8.01173 5.8456 8 6.16569V7.00069H5.5C5.36739 7.00069 5.24021 7.05337 5.14645 7.14714C5.05268 7.2409 5 7.36808 5 7.50069C5 7.6333 5.05268 7.76047 5.14645 7.85424C5.24021 7.94801 5.36739 8.00069 5.5 8.00069H6V13.5007C6 13.8985 6.15804 14.28 6.43934 14.5614C6.72064 14.8427 7.10218 15.0007 7.5 15.0007H12.5C12.8978 15.0007 13.2794 14.8427 13.5607 14.5614C13.842 14.28 14 13.8985 14 13.5007V8.00069H14.5C14.6326 8.00069 14.7598 7.94801 14.8536 7.85424C14.9473 7.76047 15 7.6333 15 7.50069C15 7.36808 14.9473 7.2409 14.8536 7.14714C14.7598 7.05337 14.6326 7.00069 14.5 7.00069ZM9 6.16569C9 6.08569 9.105 6.00069 9.25 6.00069H10.75C10.895 6.00069 11 6.08569 11 6.16569V7.00069H9V6.16569Z" fill="#E12D39"/>
              </svg> -->
                <!-- <svg
                  class="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg> -->
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="annonce leading-6 text-gray-900"
                  id="modal-headline"
                >
                  Signaler l'annonce
                </h3>
                <div class="mt-2 ml-3">
                  <p class="text-sm text-gray-500">
                    Signaler l'annonce pour que nous puisse le supprimer de site
                    web.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              @click="closeSthepopup()"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white     text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-1/5	 sm:text-sm"
            >
              Fermer
            </button>
            <button
              type="button"
              class="sing w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600    text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-1/5	 sm:text-sm"
            >
              Signaler
            </button>
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
  font-family: "Ubuntu-Bold";
  color: #000000;
  text-align: center;
  font-size: 1.35rem;
  padding-top: 5rem;
}
.popup .popUpContainer {
  width: 34%;
  height: 28%;
  max-width: 780px !important;
  position: fixed;
  left: 50%;
  top: 33vh;
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

.popup article {
  height: 21vh;
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
// .CloseShare {
//   border: none !important;
//   outline: none !important;
//   cursor: pointer !important;
//   touch-action: manipulation !important;
//   width: 0px;
//   height: 35px;
//   margin-top: 7%;
//   float: right;
// }
.form {
  padding-top: 10%;
}
.vect{
  background: #FFE3E3;
}
.annonce{
  font-family:  $gsb;
}
//
@media (max-width: 1300px) {
  .popup .popUpContainer {
    width: 50%;
    max-width: none;
    left: 30%;
    height: 35%;
    margin-left: 0;
  }

  .Signaler {
    float: right;
    position: relative;
    left: 29px;
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
    height: 28%;
    margin-left: 0;
  }
  .deletannonce {
    right: 29px;
    width: 6%;
    display: block;
    position: relative;
    top: 50px;
  }
  .Signaler {
    float: right;
    position: relative;
    left: 29px;
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
@media (max-width: 375px) {
  .popup .popUpContainer {
    width: 65%;
    max-width: none;
    left: 18%;
    height: 40%;
    margin-left: 0;
  }
  .deletannonce {
    right: 29px;
    width: 16%;
    display: block;
    position: relative;
    top: 50px;
  }
  .Signaler {
    float: right;
    position: relative;
    left: 29px;
  }
}
@media (max-width: 411px) {
  .popup .popUpContainer {
    width: 65%;
    max-width: none;
    left: 18%;
    height: 48%;
    margin-left: 0;
  }
  .deletannonce {
    right: 29px;
    width: 16%;
    display: block;
    position: relative;
    top: 50px;
  }
  .Signaler {
    float: right;
    position: relative;
    left: 29px;
  }
}
@media (max-width: 320px) {
  .popup .popUpContainer {
    width: 65%;
    max-width: none;
    left: 18%;
    height: 61%;
    margin-left: 0;
  }
  .deletannonce {
    right: 29px;
    width: 19%;
    display: block;
    position: relative;
    top: 50px;
  }
  .Signaler {
    float: right;
    position: relative;
    left: 48px;
  }
}
.overf {
  padding-top: 8px !important;
  padding-bottom: 8px !important;
  padding-left: 48px !important;
  padding-right: 48px !important;
  height: 100% !important;
  // overflow: auto !important;
}
//
.annonce {
  font-family: $gsb;
  color: #000000;
  font-size: 1.35rem;
  padding-top: 20px;
}
.sing {
  font-family: $gm;
  background: #2c8eea !important;
  color: rgb(255, 255, 255) !important;
  
}
.Fermer {
  cursor: pointer !important;
  display: inline-block !important;
  margin: 0px !important;
  position: relative !important;
  text-align: center !important;
  text-decoration: none !important;
  width: auto !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  outline: none !important;
  padding: 14px 24px !important;
  border: 0.4px solid #8ba1b7;
  background: #ffffff !important;
  color: #3d5b79;
  font-family: $gm;
}
.Signaler {
  float: right;
}

p {
  font-family: $pr;
  font-size: 0.98rem;
  color: #577491;
  margin-top: -12px;
}
.supprimer {
  margin-left: 15px;
}
.deletannonce {
  right: 29px;
  width: 6%;
  display: block;
  position: relative;
  top: 50px;
}
</style>
