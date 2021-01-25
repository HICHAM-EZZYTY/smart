<template>
<div id="chart">
  <apexchart  type="line" :options="options" :series="series"></apexchart>

    <!-- <div  style="width:16rem;height:8rem;border-radius: 12px;background:#F3F4F8" class="result">
      <h4 id="headingofbadge" style="width:100%">2019</h4>
      <h5 id="subheadingofbadge" style="width:100%">Moyenne prix </h5>
        <div id="bdgquartier" style="margin-top:8px;margin-left:15px" class="quartier flex">
          <div  style="margin-top:4px;width:0.7rem;height:0.7rem;background:#FF9376;border-radius:50%" class="round"></div>
          <h6>Dans le quartier</h6>
          <p style="margin-left:auto;margin-right:8px">550 €</p>
        </div>

      <div id="bdgquartier" style="margin-left:15px" class="quartier flex">
          <div  style="margin-top:4px;width:0.7rem;height:0.7rem;background:#2C8EEA;border-radius:50%" class="round"></div>
          <h6>Dans la ville</h6>
          <p style="margin-left:auto;margin-right:8px">120  €</p>
        </div>

  </div> -->
</div>
</template>
<script>  
import apexchart from 'vue-apexcharts'
// Vue.component('apexchart', VueApexCharts)


export default {
  name: 'HelloWorld',
  components: {
    apexchart,
  },

    methods:{
        getdatas:function(a,b,c){
        console.log(a,b,c)
    }

    },
    data () {
    
    return {
    obj:{},
    series: [{
        name: 'Dans le quartier',
        data: ["124$","130$","200$","400$","900$"],

      },
      {
        name: 'Dans la ville',
        data: ["300$","390$","120$","280$","340$"]
      }],
    options: {
        chart: {
          width: "10%",
          height: 380,
        },
        xaxis: {
        categories: [2016, 2017, 2018, 2019, 2020],
         labels: {
          show: true,
          rotate: -45,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false,
          trim: false,
          minHeight: undefined,
          maxHeight: 120,
          style: {
              colors: ["#BCBAC5","#BCBAC5","#BCBAC5","#BCBAC5","#BCBAC5"],
              cssClass: 'apexcharts-xaxis-label',

          },
        },
        axisBorder: {
          show: false,
      },
        axisTicks: {
          show: false,
          borderType: 'solid',
          color: '#78909C',
          height: 6,
          offsetX: 0,
          offsetY: 0
      },
      },
          yaxis: {
         labels: {
          show: true,
          rotate: 0,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false,
          trim: false,
          minHeight: undefined,
          maxHeight: 100,
          style: {
              colors: ["#BCBAC5","#BCBAC5","#BCBAC5","#BCBAC5","#BCBAC5"],
              cssClass: 'apexcharts-xaxis-label',

          },
        },
        axisBorder: {
          show: false,
      },
        axisTicks: {
          show: false,
          borderType: 'solid',
          color: '#78909C',
          height: 6,
          offsetX: 0,
          offsetY: 10
      },
      },
   
        stroke: {
        curve: 'smooth',
        width: 2

        },
        markers: {
            size: 0,
            showNullDataPoints: false,

        },
        colors: ['#2C8EEA', '#FF9376'],
        grid: {
        show: false,

        },
      tooltip: {
          enabled: true,
          enabledOnSeries: undefined,
          shared: true,
          followCursor: false,
          intersect: false,
          inverseOrder: false,
          fillSeriesColor: false,
          onDatasetHover: {
              highlightDataSeries: this.getdatas,
          },
          marker: {
              show: true,
          },
          fixed: {
              enabled: false,
              position: 'topRight',
              offsetX: 0,
              offsetY: 0,
          },
                    // custom: function({series, seriesIndex, dataPointIndex, w}) {

          custom: function({series,dataPointIndex,w}) {
          let array1=Object.values(series)[0]
          let array2=Object.values(series)[1]
          let catindex=w.globals.categoryLabels[dataPointIndex]
          let result1=array1[dataPointIndex]
          let result2=array2[dataPointIndex]
     
          return (

         '<div  style="width:16rem;height:8rem;border-radius: 12px;background:#F3F4F8" class="result">'+
         '<h4 id="headingofbadge" style="width:100%">'+catindex+'</h4>'+
         '<h5 id="subheadingofbadge" style="width:100%">Moyenne prix </h5>'+
         '<div id="bdgquartier" style="margin-top:8px;margin-left:15px" class="quartier flex">'+
         '<div  style="margin-top:4px;width:0.7rem;height:0.7rem;background:#FF9376;border-radius:50%" class="round"></div>'+
            '<h6>Dans le quartier</h6>'+
            '<p style="margin-left:auto;margin-right:8px">'+result2+'€</p>'+
          '</div>'+
        '<div id="bdgquartier" style="margin-left:15px" class="quartier flex">'+
        '<div  style="margin-top:4px;width:0.7rem;height:0.7rem;background:#2C8EEA;border-radius:50%" class="round"></div>'+
        '<h6>Dans la ville</h6>'+
          '<p style="margin-left:auto;margin-right:8px">'+result1+' €</p>'+
        '</div>'+
        '</div>'
          )

          }
      },
      responsive: [
        {
          breakpoint: 320,
          options: {
          chart: {
          width: "100%",
          height: 380,
          type: "bar"
          },
     
          }
        }
    ]
      


      },       
        }
        },
 
      mounted: function () {

          console.log(apexchart)
 
     
        },
      
}
</script>  

<style lang="scss">
@import "../../scss/main.scss";

#chart {
  max-width: 300px;
  opacity: 0.9;
}


#headingofbadge{
  margin-left: 15px;
  font-family: $mn;
  color: #171717;
  font-size: 1.28rem;
  padding-top: 8px;
}

#subheadingofbadge{
    padding-top: 0px;
    margin-left: 15px;
    color: rgba(110, 122, 129, 0.75);
}

#bdgquartier{

  h6{
    color: #8F989F;
    font-family: $ur;
    font-size: 0.8rem;
    margin-left: 8px;
  }
  p{
    color:#000000;
    font-family: $ub;

  }

}

.apexcharts-zoomin-icon,.apexcharts-zoom-icon,.apexcharts-reset-icon,.apexcharts-pan-icon{
  display: none;
}
.apexcharts-zoomout-icon{
  display: none;
}

.apexcharts-tooltip{
  border: none !important;
  box-shadow: none !important;
}
.apexcharts-text tspan{
    font-size: 0.85rem;
    color: red !important;
    font-family: "Roboto-Regular" !important;
}
.apexcharts-legend{
  display: none !important;
}
.apexcharts-xaxistooltip {
  background: #2C8EEA !important;
  color: white;
  border-radius: 4px;
  border: none;
}

  .apexcharts-tooltip {

    background: #f3f3f3;
    color: orange;
  }
  
.apexcharts-xaxistooltip:after, .apexcharts-xaxistooltip:before{
  display: none !important;
}

@media (min-width: 400px) { 
    #chart{
    max-width: 420px;

    }
}

@media (min-width: 500px) { 
    #chart{
    max-width: 620px;

    }
}

@media (min-width: 626px) { 
    #chart{
    max-width: 750px;

    }
}

@media (min-width: 750px) { 
    #chart{
    max-width: 850px;

    }
}
@media (min-width: 950px) { 
    #chart{
    max-width: 950px;

    }
}

@media (min-width: 1024px) { 
    #chart{
    max-width: 700px;

    }
}
</style>