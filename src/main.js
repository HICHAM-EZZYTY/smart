import Vue from 'vue'
import App from './App.vue'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'
import VCalendar from 'v-calendar';


// import PrimeVue from 'primevue/config';

import {store} from './store/store'

import 'alpinejs'

import '@/plugins/apexcharts'

import Addétails from './views/Ads/Addétails.vue'

// 
import AddétailsVente from './views/Ads/AddétailsVente.vue'
import AddétailsColocation from './views/Ads/AddétailsColocation.vue'
import AddétailsLocation from './views/Ads/AddétailsLocation.vue'
import AddétailsNeuf from './views/Ads/AddétailsNeuf.vue'


// 
import Ads from './views/Ads/Adslist.vue'
import Dépovente from './views/Ads/Déposerannoncevente.vue'
import Déponeuf from './views/Ads/Déposerannonceneuf.vue'

import Dépolocation from './views/Ads/Déposerannonceventelocation.vue'

import Landingpage from './views/Home/homePage.vue'
import Congrat from './views/congrat.vue'
import Activeaccount from './views/activeaccount.vue'
import Mailverficationtemplate from './views/mailverficationtemplate.vue'
import Createnewpdws from './views/createnewpswd.vue'
import Checkyourmail from './views/checkyourmail.vue'
import Forgetpassword from './views/forgetpassword.vue'
import Login from './views/login.vue'
import Singup from './views/signup.vue'
import Navbar from './components/Nav.vue'

// 
import Listeannonce from './views/Listeannonce.vue'
import Detailannonce from './views/Detailannonce.vue'
// import labo from './views/tst.vue'
//
import Table from './components/HeaderAd/Table.vue'
import input from './components/HeaderAd/input.vue'
import Description from './components/HeaderAd/Description.vue'
// 
// import bien from './components/Déposeruneannonce/bien.vue'
import Appartement from './components/Déposeruneannonce/Appartement.vue'
import Maison from './components/Déposeruneannonce/Maison.vue'
import Bureau from './components/Déposeruneannonce/Bureau.vue'
import Immeuble from './components/Déposeruneannonce/Immeuble.vue'
import Parkingvont from './components/Déposeruneannonce/Parkingvont.vue'
import Loft_atelier from './components/Déposeruneannonce/Loft_atelier.vue'
import péniche from './components/Déposeruneannonce/péniche.vue'
import commerce from './components/Déposeruneannonce/commerce.vue'
import Chateau from './components/Déposeruneannonce/Chateau.vue'
import Hotelparticulier from './components/Déposeruneannonce/Hotelparticulier.vue'
import commerciale from './components/Déposeruneannonce/commerciale.vue'
import Terrain from './components/Déposeruneannonce/Terrain.vue'
import place_port from './components/Déposeruneannonce/place_port.vue'
import Autre from './components/Déposeruneannonce/Autre.vue'
// import TypeDeBien from "./components/Typedebien.vue";

//DéposeruneannonceLocation 
import Appartementloca from './components/DéposeruneannonceLocation/Appartementloca.vue'
import Bureauloca from './components/DéposeruneannonceLocation/Bureauloca.vue'
import Maisonloca from './components/DéposeruneannonceLocation/Maisonloca.vue'
import Loftloca from './components/DéposeruneannonceLocation/Loftloca.vue'
import Parkingloca from './components/DéposeruneannonceLocation/Parkingloca.vue'
import Immeubleloca from './components/DéposeruneannonceLocation/Immeubleloca.vue'
import penicheloca from './components/DéposeruneannonceLocation/penicheloca.vue'
import Autreloca from './components/DéposeruneannonceLocation/Autreloca.vue'
import Placedeportloca from './components/DéposeruneannonceLocation/Placedeportloca.vue'
import Chateauloca from './components/DéposeruneannonceLocation/Chateauloca.vue'
import Hotelparticulierloca from './components/DéposeruneannonceLocation/Hotelparticulierloca.vue'
import Fondsdecommerceloca from './components/DéposeruneannonceLocation/Fondsdecommerceloca.vue'
import Localcommercialloca from './components/DéposeruneannonceLocation/Localcommercialloca.vue'
import Terrainloca from './components/DéposeruneannonceLocation/Terrainloca.vue'

// DéposeruneannonceColocation
import Place from './components/DéposeruneannonceColocation/Place.vue'



//Narbor
import navbarv from './components/Navbar.vue'





import './assets/styles/index.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faMale, faFemale, faPlus, faMinusCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret,faFemale, faMale, faPlus, faMinusCircle,faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'


Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
  masks: { input: 'DD-MM-YYYY', data: 'DD-MM-YYYY' }

});


import DataTable from 'primevue/datatable';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


Vue.component('DataTable', DataTable);

Vue.use(Vuex)

// Vue.use(Buefy)
Vue.use(VueRouter)

// const store = new Vuex.Store({
//   state: {
//     count: 1
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     },
//     decrement (state) {
//       state.count--
//     }
//   }
// })



const routes = [
  {path: '/Navbar', name: 'Navbar', component: navbarv},
  { path: '/',name:"home", component: Landingpage },
  { path: '/home',name:"home",component: Landingpage },
  { path: '/register',name:"register",component: Singup },
  { path: '/Listeannonce', name:"Listeannonce", component: Listeannonce},
  { path: '/Detailannonce', name:"Detailannonce", component: Detailannonce},
  { path: '/navbar',name:"navbar",component: Navbar },
  { path: '/login',name:"login",component: Login },
  { path: '/fpassword',name:"forgetpassword",component: Forgetpassword },
  { path: '/cmail',name:"Checkyourmail",component: Checkyourmail },
  { path: '/newpswd',name:"createnewpdws",component: Createnewpdws },
  { path: '/verif',name:"mailverification",component: Mailverficationtemplate },
  { path: '/activeaccount',name:"activeaccount",component: Activeaccount },
  { path: '/congrat',name:"congrat",component: Congrat },

  // { path: '/vente',name:"dépovente",component: Dépovente },

  { path: '/ads',name:"adslist",component: Ads },
  // 
  { path: '/adsdétails',name:"Addétails",component: Addétails },
  { path: '/AddétailsVente', name:"AddétailsVente",component: AddétailsVente},
  { path: '/AddétailsColocation',name:"AddétailsColocation",component: AddétailsColocation },
  { path: '/AddétailsLocation',name:"AddétailsLocation",component: AddétailsLocation },
  { path: '/AddétailsNeuf',name:"AddétailsNeuf",component: AddétailsNeuf },
  // 
  { path: '/Table',name:"Table",component: Table},
  { path: '/input', name:"input",component: input},
  { path: '/description', name:"description",component: Description},

  { 
    path: '/neuf',
    name:"neuf",
    component: Déponeuf,
    meta: {
      requiresAuth: true,
      PageCount:3,
      Heading:"neuf",
      Pindex:[
        "30% terminé, continuez comme ça",
        "50% terminé, continuez comme ça",
        "100% terminé, Bravo !!"],
      Pwidth:[
          "20%",
          "40%",
          "63%",
        ],

    },
  },


  // 

  {
    path: "/vente", 
    name: "dépovente",
    component: Dépovente,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "/",
        name: "Appartement",
        component:Appartement ,
        meta: {
          requiresAuth: true,
          PageCount:6,
          Heading:"Appartement",
          Pindex:[
            "16% terminé, continuez comme ça",
            "30% terminé, continuez comme ça",
            "45% terminé, continuez comme ça",
            "61% terminé, continuez comme ça",
            "77% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "8%",
              "12%",
              "23%",
              "40%",
              "50%",
              "63%",
            ],

        },
      },
      // votre bien
     
      // Appartement
      {
        path: "Appartement",
        name: "Appartement",
        component: Appartement,
        meta: {
          requiresAuth: true,
          PageCount:6,
          Heading:"Appartement",
          Pindex:[
            "16% terminé, continuez comme ça",
            "30% terminé, continuez comme ça",
            "45% terminé, continuez comme ça",
            "61% terminé, continuez comme ça",
            "77% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "8%",
              "12%",
              "23%",
              "40%",
              "50%",
              "63%",
            ],
        },
      },
    
      {
        path: "Maison",
        name: "Maison",
        component:Maison ,
        meta: {
          requiresAuth: true,
          PageCount:6,
          Heading:"maison",
          Pindex:[
            "16% terminé, continuez comme ça",
            "30% terminé, continuez comme ça",
            "45% terminé, continuez comme ça",
            "61% terminé, continuez comme ça",
            "77% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "8%",
              "12%",
              "23%",
              "40%",
              "50%",
              "63%",
            ],
        },
      },
      {
        path: "Bureau",
        name: "Bureau",
        component: Bureau,
        meta: {
          requiresAuth: true,
          PageCount:4,
          Heading:"bureau",
          Pindex:[
            "16% terminé, continuez comme ça",
            "40% terminé, continuez comme ça",
            "60% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "8%",
              "32%",
              "53%",
              "63%",
            ],
        },
      },
      {
        path: "Immeuble",
        name: "Immeuble",
        component: Immeuble,
        meta: {
          requiresAuth: true,
          PageCount:6,
          Heading:"Immeuble",
          Pindex:[
            "16% terminé, continuez comme ça",
            "30% terminé, continuez comme ça",
            "45% terminé, continuez comme ça",
            "61% terminé, continuez comme ça",
            "77% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "8%",
              "12%",
              "23%",
              "40%",
              "50%",
              "63%",
            ],

        },
      },
      //Parking
      {
        path: "Parking",
        name: "Parking",
        component: Parkingvont,
        meta: {
          requiresAuth: true,
          PageCount:2,
          Heading:"bien",
          Pindex:[
            "50% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "40%",
              "63%",
            ],
        },
      },
      // Loft_atelier
      {
        path: "Loft",
        name: "Loft",
        component: Loft_atelier,
        meta: {
          requiresAuth: true,
          PageCount:6,
          Heading:"loft",
          Pindex:[
            "16% terminé, continuez comme ça",
            "30% terminé, continuez comme ça",
            "45% terminé, continuez comme ça",
            "61% terminé, continuez comme ça",
            "77% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "8%",
              "12%",
              "23%",
              "40%",
              "50%",
              "63%",
            ],
        },
      },
      // péniche
      {
        path: "péniche",
        name: "péniche",
        component: péniche,
        meta: {
          requiresAuth: true,
          PageCount:4,
          Heading:"péniche",
          Pindex:[
            "16% terminé, continuez comme ça",
            "40% terminé, continuez comme ça",
            "60% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "8%",
              "32%",
              "53%",
              "63%",
            ],
        },
      },
      // Fonds de commerce
      {
        path: "commerce",
        name: "commerce",
        component: commerce,
        meta: {
          requiresAuth: true,
          PageCount:3,
          Heading:"fonds de commerce",
          Pindex:[
            "30% terminé, continuez comme ça",
            "50% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "20%",
              "40%",
              "63%",
            ],
        },
      },
      // Hotelparticulier
      {
        path: "Hotelparticulier",
        name: "Hotelparticulier",
        component: Hotelparticulier,
        meta: {
          requiresAuth: true,
          PageCount:3,
          Heading:"Hotel particulier",
          Pindex:[
            "30% terminé, continuez comme ça",
            "50% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "20%",
              "40%",
              "63%",
            ],
        },
      },
      // Chateau
      {
        path: "Chateau",
        name: "Chateau",
        component: Chateau,
        meta: {
          requiresAuth: true,
          PageCount:3,
          Heading:"Chateau",
          Pindex:[
            "30% terminé, continuez comme ça",
            "50% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "20%",
              "40%",
              "63%",
            ],
        },
      },
      // local commerciale
      {
        path: "commerciale",
        name: "commerciale",
        component: commerciale,
        meta: {
          requiresAuth: true,
          PageCount:3,
          Heading:"local commerciale",
          Pindex:[
            "30% terminé, continuez comme ça",
            "50% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "20%",
              "40%",
              "63%",
            ],

        },
      },
      // Terrain
      {
        path: "Terrain",
        name: "Terrain",
        component: Terrain,
        meta: {
          requiresAuth: true,
          PageCount:2,
          Heading:"terrain",
          Pindex:[
            "50% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "40%",
              "63%",
            ],

        },
      },
      // place_port
      {
        path: "place_port",
        name: "place_port",
        component: place_port,
        meta: {
          requiresAuth: true,
          PageCount:2,
          Heading:"place de port",
          Pindex:[
            "50% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "40%",
              "63%",
            ],
        },
      },
      // Autre
      {
        path: "Autre",
        name: "Autre",
        component: Autre,
        meta: {
          requiresAuth: true,
          PageCount:2,
          Heading:"bien",
          Pindex:[
            "50% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "40%",
              "63%",
            ],

        },
      },
    ]
  },

  // location
  
  {
    path: "/location", 
    name: "location",
    component: Dépolocation,
    meta: {
      requiresAuth: true
    },
    children: [
      {
      path: "/",
      name: "Appartementloca",
      component:Appartementloca ,
      meta: {
        requiresAuth: true,
        PageCount:6,
        Heading:"Appartement",
        Pindex:[
          "16% terminé, continuez comme ça",
          "30% terminé, continuez comme ça",
          "45% terminé, continuez comme ça",
          "61% terminé, continuez comme ça",
          "77% terminé, continuez comme ça",
          "100% terminé, Bravo !!"],
        Pwidth:[
            "8%",
            "12%",
            "23%",
            "40%",
            "50%",
            "63%",
          ],

      },
    },
        // Appartement
    {
      path: "Appartementloca",
      name: "Appartementloca",
      component: Appartementloca,
      meta: {
        requiresAuth: true,
        PageCount:6,
        Heading:"Appartement",
        Pindex:[
          "16% terminé, continuez comme ça",
          "30% terminé, continuez comme ça",
          "45% terminé, continuez comme ça",
          "61% terminé, continuez comme ça",
          "77% terminé, continuez comme ça",
          "100% terminé, Bravo !!"],
        Pwidth:[
            "8%",
            "12%",
            "23%",
            "40%",
            "50%",
            "63%",
          ],
      },
    },
      // Bureau
      {
        path: "Bureauloca",
        name: "Bureauloca",
        component:Bureauloca ,
        meta: {
          requiresAuth: true,
          PageCount:3,
          Heading:"Bureau",
          Pindex:[
            "30% terminé, continuez comme ça",
            "50% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "20%",
              "40%",
              "63%",
            ],

        },
      },
      // Maison
      {
        path: "Maisonloca",
        name: "Maisonloca",
        component:Maisonloca ,
        meta: {
          requiresAuth: true,
          PageCount:6,
          Heading:"Maison",
          Pindex:[
            "16% terminé, continuez comme ça",
            "30% terminé, continuez comme ça",
            "45% terminé, continuez comme ça",
            "61% terminé, continuez comme ça",
            "77% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
            "8%",
            "12%",
            "23%",
            "40%",
            "50%",
            "63%",
            ],

        },
      }, 
      // Loftloca
      {
        path: "Loftloca",
        name: "Loftloca",
        component:Loftloca ,
        meta: {
          requiresAuth: true,
          PageCount:6,
          Heading:"Loft,atelier",
          Pindex:[
            "16% terminé, continuez comme ça",
            "30% terminé, continuez comme ça",
            "45% terminé, continuez comme ça",
            "61% terminé, continuez comme ça",
            "77% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
            "8%",
            "12%",
            "23%",
            "40%",
            "50%",
            "63%",
            ],

        },
      }, 
      

      //Parkingloca 
      {
        path: "Parkingloca",
        name: "Parkingloca",
        component:Parkingloca ,
        meta: {
          requiresAuth: true,
          PageCount:2,
          Heading:"Parking",
          Pindex:[
            "50% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
            "40%",
            "63%",
            ],

        },
      },
      // penicheloca
      {
        path: "penicheloca",
        name: "penicheloca",
        component:penicheloca ,
        meta: {
          requiresAuth: true,
          PageCount:4,
          Heading:"péniche",
          Pindex:[
            "16% terminé, continuez comme ça",
            "40% terminé, continuez comme ça",
            "60% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "8%",
              "32%",
              "53%",
              "63%",
            ],

        },
      },

      //Placedeportlocation
      {
        path: "Placedeportloca",
        name: "Placedeportloca",
        component:Placedeportloca ,
        meta: {
          requiresAuth: true,
          PageCount:2,
          Heading:"Place de port",
          Pindex:[
            "50% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "53%",
              "63%",
            ],

        },
      },




      // Autreloca
      {
        path: "Autreloca",
        name: "Autreloca",
        component:Autreloca ,
        meta: {
          requiresAuth: true,
          PageCount:2,
          Heading:"bien",
          Pindex:[
            "50% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "40%",
              "63%",
            ],

          }
        },
        // Maison
      {
        path: "Immeubleloca",
        name: "Immeubleloca",
        component:Immeubleloca ,
        meta: {
          requiresAuth: true,
          PageCount:6,
          Heading:"Immeuble",
          Pindex:[
            "16% terminé, continuez comme ça",
            "30% terminé, continuez comme ça",
            "45% terminé, continuez comme ça",
            "61% terminé, continuez comme ça",
            "77% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
            "8%",
            "12%",
            "23%",
            "40%",
            "50%",
            "63%",
            ],
  
          },
        },
         // Fondsdecommerceloca
      {
        path: "Fondsdecommerceloca",
        name: "Fondsdecommerceloca",
        component:Fondsdecommerceloca ,
        meta: {
          requiresAuth: true,
          PageCount:3,
          Heading:"Fonds de commerce",
          Pindex:[
            "30% terminé, continuez comme ça",
            "50% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "20%",
              "40%",
              "63%",
            ],
  
          },
        },
        
             // Localcommercialloca
      {
        path: "Localcommercialloca",
        name: "Localcommercialloca",
        component:Localcommercialloca ,
        meta: {
          requiresAuth: true,
          PageCount:3,
          Heading:"Local commerciale",
          Pindex:[
            "30% terminé, continuez comme ça",
            "50% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "20%",
              "40%",
              "63%",
            ],
  
          },
        },
        // Chateauloca
        {
          path: "Chateauloca",
          name: "Chateauloca",
          component:Chateauloca ,
          meta: {
            requiresAuth: true,
            PageCount:3,
            Heading:"Château",
            Pindex:[
              "30% terminé, continuez comme ça",
              "50% terminé, continuez comme ça",
              "100% terminé, Bravo !!"],
            Pwidth:[
                "20%",
                "40%",
                "63%",
              ],
    
            },
          },
          // Hotelparticulierloca
          {
            path: "Hotelparticulierloca",
            name: "Hotelparticulierloca",
            component:Hotelparticulierloca,
            meta: {
              requiresAuth: true,
              PageCount:3,
              Heading:"Hôtel Particulier",
              Pindex:[
                "30% terminé, continuez comme ça",
                "50% terminé, continuez comme ça",
                "100% terminé, Bravo !!"],
              Pwidth:[
                  "20%",
                  "40%",
                  "63%",
                ],
      
              },
            },  
          // Terrainloca
      {
        path: "Terrainloca",
        name: "Terrainloca",
        component:Terrainloca ,
        meta: {
          requiresAuth: true,
          PageCount:2,
          Heading:"Terrain",
          Pindex:[
            "50% terminé, continuez comme ça",
            "100% terminé, Bravo !!"],
          Pwidth:[
              "40%",
              "63%",
            ],
  
          }
        },
      
      // 
      

    ]
  },
    // //// Colocation
  {
    path: "/Colocation", 
    name: "Colocation",
    component: Dépolocation,
    meta: {
      requiresAuth: true
    },
    children: [
      {
      path: "/",
      name: "Place",
      component:Place ,
      meta: {
        requiresAuth: true,
        PageCount:4,
        Heading:"Place",
        Pindex:[
          "16% terminé, continuez comme ça",
          "40% terminé, continuez comme ça",
          "60% terminé, continuez comme ça",
          "100% terminé, Bravo !!"],
        Pwidth:[
            "8%",
            "32%",
            "53%",
            "63%",
          ],

      },
    },
        // Place
    {
      path: "Place",
      name: "Place",
      component: Place,
      meta: {
        requiresAuth: true,
        PageCount:4,
        Heading:"Place",
        Pindex:[
          "16% terminé, continuez comme ça",
          "40% terminé, continuez comme ça",
          "60% terminé, continuez comme ça",
          "100% terminé, Bravo !!"],
        Pwidth:[
            "8%",
            "32%",
            "53%",
            "63%",
          ],
      },
    },

]
},
   
  // 
  // { path: '/labo',name:"labo",component: labo },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes 
})




Vue.config.productionTip = false
const axios = require("axios").default;
Vue.prototype.$http = axios;


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
