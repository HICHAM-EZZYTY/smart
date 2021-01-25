<template>
  <DataTable :value="products" :expandedRows.sync="expandedRows" dataKey="id"
    @row-expand="onRowExpand" @row-collapse="onRowCollapse">
    
    <Column :expander="true" headerStyle="width: 3rem" />
    <Column field="name" ></Column> 
    <Column >
        <template #body="slotProps">
            {{formatSurfaceRange(slotProps.data.minSurface, slotProps.data.maxSurface)}}
        </template>
    </Column>  
    <Column >
        <template #body="slotProps">
            {{formatPriceRange(slotProps.data.minPrice, slotProps.data.maxPrice)}}
        </template>
    </Column>
     <Column >
        <template #body="slotProps">
            {{formatItemsCount(slotProps.data.items.length)}}
        </template>
    </Column>
    <!--
        type: "Name2", 
        tva : 233, 
        livraison: 12, 
        surface: "Cat2", 
        etage: "LQKSDLKSQ",
        lesplus: "",
        plan: "SQJDLSK"
    -->
    <template #expansion="slotProps">
        <div class="orders-subtable">
            <DataTable :value="slotProps.data.items">
                <Column field="type" header="Type"  ></Column>
                <Column field="tva" header="Prix TVA 20%"  ></Column>
                <Column field="livraison" header="Livraison"  ></Column>
                <Column field="surface" header="Surface"  ></Column>
                <Column field="etage" header="Etage"  ></Column>
                <Column field="Orientation" header="Orientation"  ></Column>
                <Column field="lesplus" header="Les +"  ></Column>
                
               
                <Column header="Plan 2D/3D"  >
                    <template>
                    <button style="float: left;">click me </button>
                    </template>
                </Column>
            </DataTable>
        </div>
    </template>
</DataTable>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
// import Rating from 'primevue/rating';
export default {
    name: "ExpandableTable",
    data() {
        return {
            products:  [
                {
                    id: 2,
                    name: "1 piéces", 
                    minSurface: 1, 
                    maxSurface: 222, 
                    minPrice: 34500, 
                    maxPrice: 1426, 
                    items:[
                        {
                            id:1,
                            type: "Studio", 
                            tva : "345 000 €", 
                            livraison: "1er  trimestre 2023", 
                            surface: "26 m²", 
                            etage: "Étage 1",
                            Orientation:"Ouest",
                            lesplus: "",
                        }
                    ]
                },
                {
                    
                    id: 4,
                    name: "2 piéces", 
                    minSurface: 1200, 
                    maxSurface: 2383, 
                    minPrice: 34500, 
                    maxPrice: 1426, 
                    items:[
                         {
                            id:1,
                            type: "Studio", 
                            tva : "345 000 €", 
                            livraison: "1er  trimestre 2023", 
                            surface: "26 m²", 
                            etage: "Étage 1",
                            Orientation:"Ouest",
                            lesplus: "",
                        }
                    ]
                },
                {
                    
                    id: 10,
                    name: "3 piéces", 
                    minSurface: 1233, 
                    maxSurface: 28373, 
                    minPrice: 34500, 
                    maxPrice: 1426, 
                    items:[
                           {
                            id:1,
                            type: "Studio", 
                            tva : "345 000 €", 
                            livraison: "1er  trimestre 2023", 
                            surface: "26 m²", 
                            etage: "Étage 1",
                            Orientation:"Ouest",
                            lesplus: "",
                        }
                    ]
                }
            ],
            expandedRows: [
                {
                            
                            id:99,
                            type: "Name2", 
                            tva : 233, 
                            livraison: 12, 
                            surface: "Cat2", 
                            etage: "LQKSDLKSQ",
                            lesplus: "",
                            plan: "SQJDLSK"
                        }
            ]
        }
    },
    components: {
        DataTable,
        Column,
        // Rating
    },
    productService: null,
    created() {
        // this.productService = new ProductService();
    },
    mounted() {
        // this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
    },
    methods: {
        onRowExpand(event) {
            console.log(event.data.items)
            // this.expandedRows = []; 
            // this.expandedRows = event.data.items;
            // this.$toast.add({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
        },
        onRowCollapse(event) {
            console.log(event.data.name)
            // this.$toast.add({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
        },
        formatCurrency(value) {

            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        },

        formatPriceRange(minPrice, maxPrice){
            
            return `à partire de ${minPrice}, soit ${maxPrice}€/mois(1)`;
        },
        formatSurfaceRange(minSurface, maxSurface){
            
            return ` De ${minSurface}m² à ${maxSurface}m²`;
        }, 
        formatItemsCount(value){
            
            return `${value} 4 lots disponibles `
        }
    }
}</script>

<style>

</style>