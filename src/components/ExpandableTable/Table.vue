<template>
  <table class="w-full ">
    <tbody v-for="(product, index) in products" :key="product.id">
      <tr @click="expandTable(product.id)" :class="
          isToggled(product.id) ? 'mainHeader open' : 'mainHeader'
        ">
        <td class="mainHeader-title">
          <div class="mainHeader-title_div">
            <div class="text">
              <span class="Nbr"> {{ index + 1 }} Piéce </span>
              <span class="surface">
                de {{ product.minSurface }}m² a {{ product.maxSurface }}m²
              </span>
              <span class="priceTags">
                à partire de
                <span style="font-weight: bold">{{ product.maxPrice }}$</span> ,
                Soit {{ product.minPrice }}$/mois
              </span>
              <span class="disponibleLots"> {{ nbrLotDispo(product) }} </span>
            </div>
            <div class="icons">
              <img icon="plus" v-if="!isToggled(product.id)" src="../../assets/Pics/Group 1606.svg" alt="">
              <!-- <font-awesome-icon
                icon="plus"
                v-if="!isToggled(product.id)"
              ></font-awesome-icon> -->
              <!-- <font-awesome-icon icon="minus-circle" v-else></font-awesome-icon> -->
              <img icon="minus-circle" v-else src="../../assets/Pics/minus (1) 1.svg" alt="">

            </div>
          </div>
        </td>
      </tr>
      <tr v-if="isToggled(product.id)">
        <table class="insideTable w-full">
          <thead class="insideTable-thead">
            <th  >Type</th>
            <th  >Prix TVA 20%</th>
            <th  >Livraison</th>
            <th  >Surface</th>
            <th  >Etage</th>
            <th  >Orientation</th>
            <th  >Les +</th>
            <th >Plan 2D / 3D</th>
            <th class="emptyplan"></th>
          </thead>
          <tbody class="insideTable-tbody">
            <tr v-for="item in product.items" :key="item.id" class="insideTable-tbody_data font-light text-gray-600" style="font-size: 13px;">
              <td data-label="type">{{item.type}} </td>
              <td data-label="tva">{{item.tva}}</td>
              <td data-label="livraison">{{item.livraison}}</td>
              <td data-label="surface">{{item.surface}}</td>
              <td data-label="etage">{{item.etage}}</td>
              <td data-label="Orientation">{{item.Orientation}}</td>
              <td data-label="Les">{{item.Les}}</td>
              <td>
                <button class="btn btn-primary text-sm lg:ml-6">Voire le plan</button>
              </td>
              <td rowspan="1">
              </td>
            </tr>
          </tbody>
        </table>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "ExpandableTable",
    props: ["data"],
    data: function () {
      return {
        expanded: 2,
        products: [{
            id: 2,
            name: "1 piéces",
            minSurface: 1,
            maxSurface: 222,
            minPrice: 345,
            maxPrice: 1426,
            items: [{
              id: 1,
              type: "Studio",
              tva: "345 000 €",
              livraison: "1er  trimestre 2023",
              surface: "26 m²",
              etage: "Étage 1",
              Orientation: "Ouest",
              Les:"cave",
             }, ],
          },
          {
            id: 4,
            name: "2 piéces",
            minSurface: 2,
            maxSurface: 2383,
            minPrice: 340,
            maxPrice: 1426,
            items: [{
              id: 1,
              type: "Studio",
              tva: "345 000 €",
              livraison: "1er  trimestre 2023",
              surface: "26 m²",
              etage: "Étage 1",
              Orientation: "Ouest",
              Les:"cave",
              lesplus: "",
            }, ],
          },
          {
            id: 10,
            name: "3 piéces",
            minSurface: 3,
            maxSurface: 2852,
            minPrice: 343,
            maxPrice: 1426,
            items: [{
                id: 1,
                type: "Studio",
                tva: "345 000 €",
                livraison: "1er  trimestre 2023",
                surface: "26 m²",
                etage: "Étage 1",
                Orientation: "Ouest",
                Les:"cave",
                lesplus: "",
              },
              {
                id: 2,
                type: "Studio",
                tva: "345 000 €",
                livraison: "1er  trimestre 2023",
                surface: "26 m²",
                etage: "Étage 1",
                Orientation: "Ouest",
                Les:"cave",
                lesplus: "",
              },
            ],
          },
        ],
      };
    },
    methods: {
      isToggled(id) {
        return (this.expanded === id);
      },
      nbrLotDispo: function (thisThing) {
        return `${thisThing.items.length} lot disponible`;
      },
      expandTable(thingId) {
        if (!this.isToggled(thingId)) {
          this.expanded = thingId;
        } else {
          this.expanded = 0;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../scss/main.scss";

  .insideTable-thead th {
    padding: 1em .3rem !important;
    font-family: $im;
    font-weight: 500;
    font-size: 14px;

  }

  .emptyplan {
    width: 16em;
  }

  .btn {
    padding: .3em 1em;
    border-radius: .2em;

    &-primary {
      background: #2c8eea;
      color: white;
    }
  }

  .insideTable {
    text-align: center;
    font-family: $im;

    &-thead {
      color: white;

      & th {
        background: #6db8fe;
        padding: 1em;
      }
    }

    &-tbody {
      &_data {
        background: #EDF6FF;
        // width: 943px;
        height: 4em;
        border-bottom: 1px solid white;
      }
    }
  }


  table {
    text-align: left;
    width: 100%;

    // border: 1px solid black;
    & tbody {
      border-radius: 3em !important;
    }
  }

  .mainHeader {
    &.open {
      color: white;
      background: #2c8eea;

      &:first-child {
        border-top-left-radius: 0.5em;
      }
    }

    &-title {
      border-bottom: 1px solid lightgray;
      padding: 1em !important;

      &:first-child {
        border-top-left-radius: .4em;
        border-top-right-radius: .4em;
      }

      &_div {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        text-align: center;

        & .text {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          width: 717%;

          & .Nbr {
            font-weight: bold;

            font-family: $mdb;
          }

          & .surface {
            font-family: $ir;
            font-size: 14px;

          }

          & .priceTags {}

          & .disponibleLots {
            font-family: $ir;
          }
        }

        & .icons {
          padding-right: 1em;
          width: 30%;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }
      }
    }

    &:hover {
      cursor: pointer;
      width: 100%;

      &-title {
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    table {
      border: 0;
      width: 100%;
    }

    table caption {
      font-size: 1.3em;
    }

    table thead {
      border: none;
      clip: rect(0 0 0 0);
      border-radius: 14px;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
      border-bottom: 3px solid #DCEEFE;
      display: block;
      margin-bottom: .625em;
    }

    table td {
      border-bottom: 1px solid #DCEEFE;
      display: block;
      font-size: .8em;
      text-align: right;
    }

    table td::before {

      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    table td:last-child {
      border-bottom: 0;
    }
  }
</style>