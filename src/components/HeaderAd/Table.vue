<template>
    <!-- component_table -->
<div class="container ">
    <table>
        <thead class="text-left rounded-lg ">
            <tr>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
            <th scope="col">Prix</th>
            <th scope="col">Distance</th>
            <th scope="col">N° des piéces</th>
            <th scope="col">Surface</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td data-label="Date">12/03/2019</td>
            <td data-label="Type"><span class="Appartement">Appartement </span></td>
            <td data-label="Prix">€200</td>
            <td data-label="Distance"><span class="km"> • 4 km</span></td>
            <td data-label="N° des piéces">13</td>
            <td data-label="Surface">120 m²</td>
            </tr>
             <tr>
            <td data-label="Date">12/03/2019</td>
            <td data-label="Type"><span class="Appartement">Appartement </span></td>
            <td data-label="Prix">€200</td>
            <td data-label="Distance"><span class="km"> • 4 km</span></td>
            <td data-label="N° des piéces">13</td>
            <td data-label="Surface">120 m²</td>
            </tr>
             <tr>
            <td data-label="Date">12/03/2019</td>
            <td data-label="Type"><span class="Appartement">Appartement </span></td>
            <td data-label="Prix">€200</td>
            <td data-label="Distance"><span class="km"> • 4 km</span></td>
            <td data-label="N° des piéces">13</td>
            <td data-label="Surface">120 m²</td>
            </tr>
             <tr>
            <td data-label="Date">12/03/2019</td>
            <td data-label="Type"><span class="Appartement">Appartement </span></td>
            <td data-label="Prix">€200</td>
            <td data-label="Distance"><span class="km"> • 4 km</span></td>
            <td data-label="N° des piéces">13</td>
            <td data-label="Surface">120 m²</td>
            </tr>
             <tr>
            <td data-label="Date">12/03/2019</td>
            <td data-label="Type"><span class="Appartement">Appartement </span></td>
            <td data-label="Prix">€200</td>
            <td data-label="Distance"><span class="km"> • 4 km</span></td>
            <td data-label="N° des piéces">13</td>
            <td data-label="Surface">120 m²</td>
            </tr>
             <tr>
            <td data-label="Date">12/03/2019</td>
            <td data-label="Type"><span class="Appartement">Appartement </span></td>
            <td data-label="Prix">€200</td>
            <td data-label="Distance"><span class="km"> • 4 km</span></td>
            <td data-label="N° des piéces">13</td>
            <td data-label="Surface">120 m²</td>
            </tr>
             <tr>
            <td data-label="Date">12/03/2019</td>
            <td data-label="Type"><span class="Appartement">Appartement </span></td>
            <td data-label="Prix">€200</td>
            <td data-label="Distance"><span class="km"> • 4 km</span></td>
            <td data-label="N° des piéces">13</td>
            <td data-label="Surface">120 m²</td>
            </tr>
             <tr>
            <td data-label="Date">12/03/2019</td>
            <td data-label="Type"><span class="Appartement">Appartement </span></td>
            <td data-label="Prix">€200</td>
            <td data-label="Distance"><span class="km"> • 4 km</span></td>
            <td data-label="N° des piéces">13</td>
            <td data-label="Surface">120 m²</td>
            </tr>
        </tbody>
    </table>
    
</div>
</template>

<script>
export default {
    name :"Table",
}
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";


    thead{
        border-radius: 14px;
        background: #DCEEFE;
        color: #2F80ED;
        font-family: $mdb;
        font-size: 0.85rem;
        text-transform: uppercase;
    }

    tbody{
        font-family: $im;
        font-size: 0.8rem;

    }
   .Appartement{
       color: #92909D;
       letter-spacing: 0.05em;
        font-family: $mn;
        font-style: normal;

   }
   .km{
       background: #DCEEFE;
       color: #2C8EEA;
       border-radius: 20px;
       padding: 1px 6px 1px;
   }
   th, td {
       border-bottom: 1px solid #DCEEFE;
   }


table {
  
  margin: 0;
  padding: 0;
  width: 80%;
  
//   table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
//   border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: left;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
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

